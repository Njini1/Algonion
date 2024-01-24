import { default as axios } from "axios";
const api = import.meta.env.VITE_BACKEND;
console.log("[E1I5] 프로그래머스 문제 페이지 입니다");
const btnSubmit = document.querySelector('#submit-code');
const modal = document.querySelector('.modal');
const modalMutationOption = {
    childList: true,
};

let testdata = {
    "submissionId": "1234",
    "problemId": "1000",
    "memory": "memory",
    "runtime": "100ms",
    "language": "java",
    "submissionCode": "class Solution {\n    public int solution(int num1, int num2) {\n        return num1 - num2+1;\n    }\n}",
    "codeLength": "100",
    "submission": "11",
    "url": "ssss"
}
axios.post(`https://192.168.31.151:8443/api/v1/solved-problems/baekjoon`, testdata).then(res => {
    console.log("[ALGO] 업로드 성공");
});


const parseData = () => {
    const problemId = document.querySelector('div.main > div.lesson-content').getAttribute('data-lesson-id');
    const level = document.querySelector('body > div.main > div.lesson-content').getAttribute("data-challenge-level");
    const title = document.querySelector('body > div.main > div.lesson-content').getAttribute("data-lesson-title");
    const selectedLanguage = document.querySelector('div.editor > ul > li.nav-item > a').getAttribute('data-language');
    const code = document.querySelector('textarea#code').value;
    const modalTitle = document.querySelector(".modal-title").innerHTML;
    const isSuccess = modalTitle.includes('정답');
    const passedTestCase = document.querySelectorAll('td.result.passed').length;
    const failedTestCase = document.querySelectorAll('td.result.failed').length;

    return {
        problemId, level, title, selectedLanguage, code, isSuccess, passedTestCase, failedTestCase
    }
}

const modalMutationObserver = new MutationObserver(mutations => {
    if (!mutations.length) return;
    const data = parseData();
    axios.post(`${api}/programmers/programmers`, data).then(res => {
        console.log("[ALGO] 업로드 성공");
    });

    modalMutationObserver.disconnect();
});


const isProgrammersLoggedIn = btnSubmit !== null;
if (isProgrammersLoggedIn) {
    btnSubmit.addEventListener('click', () => {
        modalMutationObserver.observe(modal, modalMutationOption);
    });
}