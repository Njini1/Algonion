import { getProblem, getSubmissionCode } from "./submission.js";
import { bj_level } from "./variable.js"

import { default as axios } from "axios";

const api = import.meta.env.VITE_BACKEND;


export let baekjoonInfo = {
    "submissionId": null,
    "problemNum": null,
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

export function saveData(table) {
    baekjoonInfo.submissionId = table.submissionId;
    baekjoonInfo.problemNum = table.problemId;
    baekjoonInfo.memory = table.memory;
    baekjoonInfo.runtime = table.runtime;
    baekjoonInfo.language = table.language;
    baekjoonInfo.codeLength = table.codeLength;
    baekjoonInfo.submissionTime = table.submissionTime;
    baekjoonInfo.url = `https://www.acmicpc.net/problem/${table.problemId}`;
            
    getSubmissionCode(baekjoonInfo.submissionId).then(res => {
        baekjoonInfo.submissionCode = res;
    });

    getProblem(baekjoonInfo.problemNum).then(res => {
        baekjoonInfo.problemTitle = res[0];
        baekjoonInfo.problemCategory = res[1];
        baekjoonInfo.problemLevel = [res[2], bj_level[res[2]]];
    });
}

export function uploadData(data) {
    // fetch(`${api}/api/v1/solved-problems/baekjoon`, {
    //     method: 'POST',
    // })
    // .then(res => {
    //     console.log("[ALGO] 업로드 성공");
    // });


    axios.post(`${api}/api/v1/solved-problems/baekjoon`, data)
    .then(res => {
        console.log("[ALGONION] 업로드 성공");
    });
}
