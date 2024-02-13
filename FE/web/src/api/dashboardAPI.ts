import { axiosAuthApi } from "../utils/instance";
const nickname = '뛰어난 코더';

export const getLevelGraph = async () => {
   // const results = await axios.get(`${api}/v1/dashboard/level-graph?nickname=${nickname}`);
   const results = await axiosAuthApi().get(`/v1/dashboard/level-graph?nickname=${nickname}`);
   // console.log("예진", results.data)
   return results.data
};

export const getCategoryGraph = async () => {
   // const results = await axios.get(`${api}/v1/dashboard/category-graph?nickname=${nickname}`);
   const results = await axiosAuthApi().get(`/v1/dashboard/category-graph?nickname=${nickname}`);
   
   return results.data
};

export const getProblemStackGraph = async () => {
   // const results = await axios.get(`${api}/v1/dashboard/problem-stack?nickname=${nickname}`);
   const results = await axiosAuthApi().get(`/v1/dashboard/problem-stack?nickname=${nickname}`);
   // console.log("유진",results.data)

   return results.data
};

export const getPointStackGraph = async () => {
   // const results = await axios.get(`${api}/v1/dashboard/point-stack?nickname=${nickname}`);
   const results = await axiosAuthApi().get(`/v1/dashboard/point-stack?nickname=${nickname}`);


   return results.data
};