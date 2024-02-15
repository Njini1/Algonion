import { axiosAuthApi } from "../utils/instance";

export const getUserProfile = async (nickname: string) => {
  const results = await axiosAuthApi().get(`/v1/profile?nickname=${nickname}`);
  console.log(results, 'getUserProfile')
  return results.data;
};