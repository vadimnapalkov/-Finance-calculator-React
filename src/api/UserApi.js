import axios from "axios";

export const RegisterUserApi = async user => {
  const res = await axios.post(`http://localhost:3001/api/register`, { user });
  return res.data;
};

export const LoginUserApi = async user => {
  const res = await axios.post(`http://localhost:3001/api/login`, { user });
  return res.data;
};
