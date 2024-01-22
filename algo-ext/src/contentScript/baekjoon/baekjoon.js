
import {findUsername, findResultUsername} from "./user.js";
import {parsingResultTableList, parsingCorrectResultTableList, getProblem, getSubmission} from "./submission.js";
import {bj_level} from "./variable.js"

const url = window.location.href;
// console.log(url)

// BaekJoon
const baekjoonUrl = url.startsWith("https://www.acmicpc.net/")? url:null;
if (baekjoonUrl) {
    const baekjoon = {
        "submissionId": null,
        "problemId": null,
        "memory": null,
        "runtime": null,
        "language": null,
        "submissionCode": null,
        "codeLength": null,
        "submissionTime": null,
        "url": null,
        "problemTitle": null,
        "problemCategory": null,
        "problemLevel": null,
    }
    const username = findUsername();
    const resultUsername = findResultUsername(baekjoonUrl);
    
    if (username === resultUsername) {
        const resultTableList = parsingResultTableList(document);
        const correctResultTable = parsingCorrectResultTableList(resultTableList);
        const correctLastestResult = correctResultTable? correctResultTable[0]:null;
        console.log(resultTableList)

        baekjoon.submissionId = correctLastestResult.submissionId;
        baekjoon.problemId = correctLastestResult.problemId;
        baekjoon.memory = correctLastestResult.memory;
        baekjoon.runtime = correctLastestResult.runtime;
        baekjoon.language = correctLastestResult.language;
        baekjoon.codeLength = correctLastestResult.codeLength;
        baekjoon.submissionTime = correctLastestResult.submissionTime;
        baekjoon.url = `https://www.acmicpc.net/problem/${correctLastestResult.problemId}`;
        
        
        getSubmission(baekjoon.submissionId).then(res => {
            baekjoon.submissionCode = res;
        })
        
        getProblem(baekjoon.problemId).then(res => {
            baekjoon.problemTitle = res[0];
            baekjoon.problemCategory = res[1];
            baekjoon.problemLevel = [res[2], bj_level[res[2]]];
        })

        console.log(baekjoon)
    }
}