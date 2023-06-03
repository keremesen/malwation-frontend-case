import { faker } from "@faker-js/faker";
export type User = {
  id: string | null;
  fullName: string | null;
  email: string | null;
  phone: string | null;
  role: boolean | null;
  active: boolean | null;
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
