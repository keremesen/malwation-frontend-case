"use client"
import Image from "next/image";
import { useUsers } from "@/contexts/UsersContext";
import { useState } from "react";
const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10
  const user = useUsers();
  if (!user) return null;
  const { data, handleDelete, handleUpdate, setData } = user;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1); 
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <div className="flex justify-center    h-4/5 bg-white rounded-[10px] w-auto mx-4  my-10">
      <div className="flex overflow-y-scroll rounded-md  ">
        <table className=" text-sm text-left  border-b border-[#EAEAEA]  ">
          <thead className=" font-bold bg-white uppercase text-center items-center border-b border-[#EAEAEA]">
            <tr>
              <th scope="col" className="px-12 py-6">
                NAME
              </th>
              <th scope="col" className="px-12 py-6">
                E-MAIL
              </th>
              <th scope="col" className="px-12 py-6">
                PHONE
              </th>
              <th scope="col" className="px-12 py-6">
                Role
              </th>
              <th scope="col" className="px-12 py-6">
                Active
              </th>
              <th scope="col" className="px-12 py-6"></th>
            </tr>
          </thead>
          <tbody className="items-center text-center justify-center">
            { currentItems.length? currentItems.map((item,idx) =>(
              <tr className="bg-white border-b font-semibold text-gray-700" key={idx}>
              <td className="px-12 py-4">{item.fullName}</td>
              <td className="px-12 py-4">{item.email} </td>
              <td className="px-12 py-4">{item.phone}</td>
              <td className="px-12 py-4">
                <span>{item.role === true ? "Admin" : "Member"}</span>
              </td>
              <td className="px-12 py-4">
                <div
                  className={` ml-3 h-4 w-4 rounded-full ${
                    item.active ? "bg-green-500" : "bg-red-500 "
                  }`}
                ></div>
              </td>
              <td className="px-12 py-4 flex flex-row">
                <button onClick={() => handleDelete(idx)}>
                  <Image
                    alt="bin"
                    src="/assets/bin.svg"
                    width={40}
                    height={40}
                  />
                </button>
                <button onClick={() => handleUpdate(item)}>update</button>
              </td>
            </tr>
            )) : data.map((item, idx) => (
              <tr className="bg-white border-b font-semibold text-gray-700" key={idx}>
                <td className="px-12 py-4">{item.fullName}</td>
                <td className="px-12 py-4">{item.email} </td>
                <td className="px-12 py-4">{item.phone}</td>
                <td className="px-12 py-4">
                  <span>{item.role === true ? "Admin" : "Member"}</span>
                </td>
                <td className="px-12 py-4">
                  <div
                    className={` ml-3 h-4 w-4 rounded-full ${
                      item.active ? "bg-green-500" : "bg-red-500 "
                    }`}
                  ></div>
                </td>
                <td className="px-12 py-4 flex flex-row">
                  <button onClick={() => handleDelete(idx)}>
                    <Image
                      alt="bin"
                      src="/assets/bin.svg"
                      width={40}
                      height={40}
                    />
                  </button>
                  <button onClick={() => handleUpdate(item)}>update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <div className="flex justify-center mt-4 absolute bottom-4 bg-white rounded-md">
        <button
          className="px-4 py-2 border rounded-md mr-2"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {data.length > itemsPerPage && (
          <div>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
              (item, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-md mx-1 ${
                    currentPage === index + 1 ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        )}
        <button
          className="px-4 py-2 border rounded-md ml-2"
          onClick={nextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
    
  );
};

export default Table;
