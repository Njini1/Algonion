import { axiosAuthApi } from "../utils/instance";

export const getNickname = async () => {
     const results = await axiosAuthApi().get(`/v1/user/login-test`);
     
     localStorage.setItem("nickname", results.data);
     return results;
 };
 
 // 닉네임 중복검사
//  true : 중복 없음, false: 중복이라 안됨
 export const isNicknameAvailable = async () => {
   const results = await axiosAuthApi().get(`/v1/user/nickname`);
   
   return results.data;
};

export const updateNickname = async (newNickname: string) => {
   if(!isNicknameAvailable) {
      throw new Error('중복된 닉네임입니다.')
   }
   else {
      await axiosAuthApi().put(`/v1/user/nickname`, { nickname: newNickname });
      localStorage.setItem("nickname", newNickname)
   }
};