import { axiosAuthApi } from "../utils/instance";

const nickname = "뛰어난 코더"


export const getFriendList = async () => {
   // const results = await axios.get(`${api}/v1/friendship/friends`);
   const results = await axiosAuthApi().get(`/v1/friendship/friends`);
  
   return results.data
};

export const postNewFriend = async () => {
   // const results = await axios.post(`${api}/v1/friendship?nickname=${nickname}`);
   const results = await axiosAuthApi().get(`/v1/friendship?nickname=${nickname}`);
  
   return results.data
};