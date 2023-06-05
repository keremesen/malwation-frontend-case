import Image from "next/image";
import { useUsers } from "@/contexts/UsersContext";
import { useState } from "react";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const user = useUsers();

  if (!user) return null;

  const { data, handleDelete, handleUpdate, setData } = user;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <div className="flex justify-center max-h-[80%] bg-white rounded-[10px] max-w-[90%] mx-4 my-10 flex-col items-center">
      <div className="flex items-center w-full justify-between px-12 my-2">
        <button className="border border-gray-300 bg-gray-100 rounded-lg w-28 px-4 py-2 flex flex-row items-center space-x-2">
          <Image alt="filter" src="/assets/filter.svg" width={18} height={18} />{" "}
          <span>Filter</span>
        </button>
        <input
          className="bg-gray-100 border-2 border-gray-300 p-2 rounded-lg w-96"
          placeholder="Search User"
        />
      </div>
      <div className="flex overflow-y-scroll rounded-md">
        <table className="text-sm text-left border-b border-[#EAEAEA]">
          <thead className="font-bold bg-white uppercase text-center items-center border-b border-[#EAEAEA]">
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
            {currentItems.map((item, idx) => (
              <tr
                className="bg-white border-b font-semibold text-gray-700 h-20"
                key={idx}
              >
                <td className="px-12 py-4">{item.fullName} </td>
                <td className="px-12 py-4">{item.email}</td>
                <td className="px-12 py-4">{item.phone}</td>
                <td className="px-12 py-4">
                  <span>{item.role ? "Admin" : "Member"}</span>
                </td>
                <td className="px-12 py-4">
                  <div
                    className={`h-4 w-4 rounded-full ml-4 ${
                      item.active ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                </td>
                <td>
                  <div className="flex flex-row">
                    <button onClick={() => handleDelete(idx)} className="mr-2">
                      <Image
                        alt="bin"
                        src="/assets/bin.svg"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button onClick={() => handleUpdate(item)}>
                      <Image
                        alt="edit"
                        src="/assets/edit.svg"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center mt-4 absolute bottom-4 bg-white rounded-md">
        <button
          className="px-4 py-2 "
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <Image
            alt="next"
            src="/assets/chevron-left.svg"
            width={18}
            height={18}
          />
        </button>
        {data.length > itemsPerPage && (
          <div>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
              (item, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border ${
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
          className="px-4 py-2 "
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(data.length / itemsPerPage) ||
            data.length === 0
          }
        >
          <Image
            alt="next"
            src="/assets/chevron-right.svg"
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
  );
};

export default Table;
