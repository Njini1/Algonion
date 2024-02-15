import { axiosAuthApi } from "../utils/instance";
import { bj_level } from "./convertLevel";

export const getCodeLog = async (nickname: string) => {
   // const result = await axios.get(`${api}/v1/solved-problems/mysolved?nickname=${nickname}&page=0`);
   const results = await axiosAuthApi().get(`/v1/solved-problems/mysolved?nickname=${nickname}&page=0`);
   const length = results.data.length
   for (let i = 0; i < length; i++) {
      console.log(results.data[i])
      if (results.data[i].siteName.toLowerCase() === 'baekjoon') {
         results.data[i].problemLevel = bj_level[results.data[i].problemLevel as keyof typeof bj_level];
      } 
   }
   return results.data;
};


export const getCodeLogDetail = async (solvedProblemPK: string) => {
   // const result = await axios.get(`${api}/v1/solved-problems/mysolved?solvednum=${solvedProblemPK}`);
   const results = await axiosAuthApi().get(`/v1/solved-problems/mysolved/detail?solvednum=${solvedProblemPK}`);
   return results.data;
};

export const putCodeLogMemo = async (solvedProblemPK: string, data: {}) => {
   // const result = await axios.put(`${api}/v1/solved-problems/mysolved?solvednum=${solvedProblemPK}`);
   const results = await axiosAuthApi().put(`/v1/solved-problems/mysolved?solvednum=${solvedProblemPK}`, data);
   return results.data;
};

export const deleteCodeLog = async (solvedProblemPK: string) => {
   // const result = await axios.put(`${api}/v1/solved-problems/mysolved?solvednum=${solvedProblemPK}`);
   const results = await axiosAuthApi().put(`/v1/solved-problems/visible?solvednum=${solvedProblemPK}`);
   return results.data;
};

export const shareCodeLog = async (data: {}) => {
   // const result = await axios.post(`${api}/v1/solved-problems/mysolved?solvednum=${solvedProblemPK}`);
   const results = await axiosAuthApi().post(`/v1/notion/save`, data);
   return results.data;
};

