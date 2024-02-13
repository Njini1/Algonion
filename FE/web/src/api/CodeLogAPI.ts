import { axiosAuthApi } from "../utils/instance";
// const username = "뛰어난 코더"

export const getCodeLog = async (nickname: string) => {
   // const result = await axios.get(`${api}/v1/solved-problems/mysolved?nickname=${nickname}&page=0`);
   const results = await axiosAuthApi().get(`/v1/solved-problems/mysolved?nickname=${nickname}&page=0`);
   return results.data;
};

export const getCodeLogDetail = async (solvedProblemPK: string) => {
   // const result = await axios.get(`${api}/v1/solved-problems/mysolved?solvednum=${solvedProblemPK}`);
   const results = await axiosAuthApi().get(`/v1/solved-problems/mysolved/detail?solvednum=${solvedProblemPK}`);
   return results.data;
};

export const putCodeLogMemo = async (solvedProblemPK: string, data: {}) => {
   // const result = await axios.get(`${api}/v1/solved-problems/mysolved?solvednum=${solvedProblemPK}`);
   const results = await axiosAuthApi().put(`/v1/solved-problems/mysolved?solvednum=${solvedProblemPK}`, data);
   return results.data;
};


export const deleteCodeLog = async (solvedProblemPK: string) => {
   // const result = await axios.get(`${api}/v1/solved-problems/mysolved?solvednum=${solvedProblemPK}`);
   const results = await axiosAuthApi().put(`/v1/solved-problems/visible?solvednum=${solvedProblemPK}`);
   return results.data;
};