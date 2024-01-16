import { extractRuntimeProps } from "vue/compiler-sfc";
import {convertResultTableHeader, convertResultTableList, unescapeHtml} from "./util.js";

// 로그인된 유저의 이름을 가져오는 함수
export function findUsername() {
    const el = document.querySelector('a.username');
    if (el === null) return null;

    const username = el?.innerText?.trim();
    if (username) return username;
    else return null;
  }

// 문제 제출 페이지에서의 유저의 이름을 가져오는 함수
export function findResultUsername(baekjoonUrl) {
    if (baekjoonUrl.startsWith('https://www.acmicpc.net/status?'))
        return baekjoonUrl.split("user_id=")[1].split("&")[0];
    return null;
}

// 문제 제출 페이지에서 테이블을 가져오는 함수
export function parsingResultTableList() {
    const table = document.getElementById('status-table');
    if (table === null || table === undefined || table.length === 0) return [];
    
    const headers = Array.from(table.rows[0].cells, (x) => convertResultTableHeader(x.innerText.trim()));
    
    const list = [];
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const cells = Array.from(row.cells, (x, index) => convertResultTableList(x, headers[index]));
    
      let obj = {};
      obj.elementId = row.id;
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = cells[j];
      }
      obj = { ...obj, ...obj.result, ...obj.problemId};
      list.push(obj);
    }
    return list;
}

export function parsingCorrectResultTableList(table) {
    // console.log(table);
    if (table === null) return null;
    
    const list = [];
    // console.log(list);
    for (let row in table) {
        if (table[row].result == "맞았습니다!!") {
            // console.log(table[row].result);
            list.push(table[row]);
        } 
    }
    // console.log(list);
    return list;
}