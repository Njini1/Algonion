import {findUsername, findResultUsername, parsingResultTableList, parsingCorrectResultTableList} from "./baekjoon/baekjoon.js";
// import {convertImageTagAbsoluteURL} from "./baekjoon/util.js";

const url = window.location.href;

// BaekJoon
const baekjoonUrl = url.startsWith("https://www.acmicpc.net/")? url:null;
if (baekjoonUrl) {
    const username = findUsername();
    const resultUsername = findResultUsername(baekjoonUrl);
    
    if (username === resultUsername) {
        const resultTable = parsingResultTableList();
        const correctResultTable = parsingCorrectResultTableList(resultTable)
        const correctLastestResult = correctResultTable? correctResultTable[0]:null
        
        console.log("username:", username);
        console.log("resultUsername:", resultUsername)
        console.log("resultTable:", resultTable)
        console.log("correctResultTable:", correctResultTable)
        console.log("correctLastestResult:", correctLastestResult)
        console.log("--------------------------")  
        // 아래는 확인 중인 코드입니다.
        
        // async function fetchSubmitCodeById(submissionId) {
        //     return fetch(`https://www.acmicpc.net/source/download/${submissionId}`, { method: 'GET' })
        //       .then((res) => {
        //         res.text()
        //         console.log(res)
        //     })
        //   }

        // async function getSubmitCodeById(submissionId) {
        // let code = await getSubmitCodeFromStats(submissionId);
        // if (isNull(code)) {
        //     code = await fetchSubmitCodeById(submissionId);
        //     updateSubmitCodeFromStats({ submissionId, code }); // not await
        // }
        // return code;
        // }

        // fetchSubmitCodeById(correctLastestResult.submissionId)
    }
}
