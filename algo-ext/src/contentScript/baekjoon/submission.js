import {convertResultTableHeader, convertResultTableList, isNull, isEmpty} from "./util.js";

// 문제 제출 페이지에서 테이블을 가져오는 함수
export function parsingResultTableList(doc) {
    const table = doc.getElementById('status-table');
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

// 문제 제출 페이지에서 맞은 제출 테이블을 가져오는 함수
export function parsingCorrectResultTableList(table) {
    // console.log(table);
    if (isNull(table)) return null;
    
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

export async function getSubmission(submissionId) {
    const res = await fetch(`https://www.acmicpc.net/source/download/${submissionId}`, {
        method: 'GET',
    });
    // console.log(res)
    const code = await res.text();
    // console.log(code)
    return code;
}