import { axiosAuthApi } from "../utils/instance";


export const getSolved100 = async (nickname: string) => {
    // const results = await axios.get(`${api}/v1/dashboard/top100?nickname=${nickname}`);
   const results = await axiosAuthApi().get(`/v1/dashboard/top100?nickname=${nickname}`);

    console.log(results.data)
    return results.data
};

// export const postNewFriend = async (nickname: string) => {
//    const results = await axios.post(`${api}/v1/profile/streak?username=${username}&from={from}&to={to}=${nickname}`);
// const results = await axiosAuthApi().post(`/v1/profile/streak?username=${username}&from={from}&to={to}=${nickname}`);
  
//    return results.data
// };