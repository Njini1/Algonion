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
    const res = await fetch(`https://www.acmicpc.net/source/download/53682822`, {
        method: 'GET',
    });
    console.log(">>>>", res); 
    const code = await res.text();
    console.log("-->>", code); 

    return code;
}


/*
async function getSubmitCodeById(submissionId) {
    // getSubmitCodeFromStats 는 백준허브에 제출된 코드를 가져오며
    // 해당 제출 코드가 없을 시에, 백준에 제출한 코드를 GET 한다.
    // 해당 코드를 updateSubmitCodeFromStats 로 백준허브에 업데이트한다.
    // 우리는 fetchSubmitCodeById 만 사용함
    let code = await getSubmitCodeFromStats(submissionId);
    if (isNull(code)) {
      code = await fetchSubmitCodeById(submissionId);
      updateSubmitCodeFromStats({ submissionId, code }); // not await
    }
    console.log("getSubmitCodeById return:", code);
    return code;
}


async function fetchSubmitCodeById(submissionId) {
    return fetch(`https://www.acmicpc.net/source/download/${submissionId}`, { method: 'GET' })    
    .then((res) => {
        console.log("fetchSubmitCodeById return:", res);    
        res.text()
    })
    .catch((err) => {
        console.log('fetchSubmitCodeById Error:', err);
    })
}
*/