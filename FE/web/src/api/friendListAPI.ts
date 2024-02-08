import axios from "axios";
const api = import.meta.env.VITE_BACK_END;


export const getFriendList = async () => {
   const results = await axios.get(`${api}/v1/friendship/friends`);
  
   return results.data
};

export const postNewFriend = async (nickname: string) => {
   const results = await axios.post(`${api}/v1/friendship?nickname=${nickname}`);
  
   return results.data
};