import axios from "axios";
export const getUsers = () => {
  const response = axios.get("https://panorbit.in/api/users.json");
  return response;
};
