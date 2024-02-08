import axios from "axios";
const api = import.meta.env.VITE_BACK_END;


export const getLevelGraph = async (nickname: string) => {
   const results = await axios.get(`${api}/v1/dashboard/level-graph?nickname=${nickname}`);
   console.log("예진", results)
   return results.data
};

export const getCategoryGraph = async (nickname: string) => {
   const results = await axios.get(`${api}/v1/dashboard/category-graph?nickname=${nickname}`);
   
   return results.data
};

export const getProblemStackGraph = async (nickname: string) => {
   const results = await axios.get(`${api}/v1/dashboard/problem-stack?nickname=${nickname}`);
   console.log("유진",results)

   return results.data
};

export const getPointStackGraph = async (nickname: string) => {
   const results = await axios.get(`${api}/v1/dashboard/point-stack?nickname=${nickname}`);

   return results.data
};