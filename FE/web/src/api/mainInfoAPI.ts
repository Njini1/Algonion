import axios from "axios";
const api = import.meta.env.VITE_BACK_END;


export const getSolved100 = async (nickname: string) => {
    const results = await axios.get(`${api}/v1/dashboard/top100?nickname=${nickname}`);
    console.log(results.data)
    return results.data
};

// export const postNewFriend = async (nickname: string) => {
//    const results = await axios.post(`${api}/v1/profile/streak?username=${username}&from={from}&to={to}=${nickname}`);
  
//    return results.data
// };