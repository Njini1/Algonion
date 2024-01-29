async function findSubmission(submissionId) {
    const res = await fetch(`https://www.acmicpc.net/source/download/71748228`, { method: 'GET' });   
    const data = await res.text();
    return data;
}
async function getSubmission(submissionId) {
    const code = await findSubmission(submissionId);
    console.log(code);
}

getSubmission()
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