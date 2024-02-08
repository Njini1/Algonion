import axios from "axios";
import {bj_level} from './convertLevel.ts'
const api = import.meta.env.VITE_BACK_END;


export const getRecommendation = async () => {
   const results = await axios.get(`${api}/v1/profile/recommand`);
  
   for (let i = 0; i < 2; i++) {
      if (results.data[i].siteName.toLowerCase() === 'baekjoon') {
         results.data[i].problemLevel = bj_level[results.data[i].problemLevel as keyof typeof bj_level];
      } 
      else if (results.data[i].siteName.toLowerCase() === 'programmers') {

         results.data[i].problemLevel = results.data[i].problemLevel + '단계'
      }
   }
   return results.data
};