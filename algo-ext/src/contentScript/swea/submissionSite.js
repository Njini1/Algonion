async function parseCode() {
    
    const ProbId = document.querySelector('div.problem_box > h3').innerText.replace(/\..*$/, '').trim();
    const contestProbId = [...document.querySelectorAll('#contestProbId')].slice(-1)[0].value;
    const code = document.querySelector('#textSource').value;

    return ProbId, contestProbId, code
}

const codeInfo = await parseCode();

// 크롬 스토리지에 저장
localStorage.setItem("code", codeInfo);
console.log(codeInfo)