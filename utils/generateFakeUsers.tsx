import { faker } from "@faker-js/faker";
export type User = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: boolean;
  active: boolean;
};

const generateFakeUser = (): User => {
  return {
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    role: faker.datatype.boolean(),
    active: faker.datatype.boolean(),
  };
};

export const generateFakeUsers = (length: number): User[] => {
  const users: User[] = [];
  Array.from({ length: length }).forEach(() => {
    users.push(generateFakeUser());
  });
  return users;
};
