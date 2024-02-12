import axios from "axios";
const api = import.meta.env.VITE_BACK_END;

export const getCodeLog = async () => {
   const username = "뛰어난 코더"
   const result = await axios.get(`${api}/v1/solved-problems/mysolved?username=${username}`);
   console.log(result.data)
   return result.data;
};