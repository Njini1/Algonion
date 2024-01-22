
import {findUsername, findResultUsername} from "./user.js";
import {parsingResultTableList, parsingCorrectResultTableList, getSubmission} from "./submission.js";
// import {isNull, isEmpty, unescapeHtml, convertImageTagAbsoluteURL} from "./util.js";

const url = window.location.href;
// console.log(url)

// BaekJoon
const baekjoonUrl = url.startsWith("https://www.acmicpc.net/")? url:null;
if (baekjoonUrl) {
    // console.log(baekjoonUrl)
    const username = findUsername();
    const resultUsername = findResultUsername(baekjoonUrl);
    console.log("username:", username);
    console.log("resultUsername:", resultUsername);
    
    if (username === resultUsername) {
        const resultTable = parsingResultTableList(document);
        const correctResultTable = parsingCorrectResultTableList(resultTable);
        const correctLastestResult = correctResultTable? correctResultTable[0]:null;
        
        console.log("resultTable:", resultTable);
        console.log("correctResultTable:", correctResultTable);
        console.log("correctLastestResult:", correctLastestResult);
        
        const problemId = correctLastestResult? correctLastestResult.problemId:null;
        const submissionId = correctLastestResult? correctLastestResult.submissionId:null;
        console.log("problemId:", problemId);
        console.log("submissionId:", submissionId);
        console.log("--------------------------");
        // 아래는 확인 중인 코드입니다.

        let submission = submissionId? getSubmission(submissionId):null;

        console.log("submission:", submission);

    }
}