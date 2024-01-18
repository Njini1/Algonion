/* 정답 제출 페이지에서 데이터 추출
* problemId = 문제 id값
* Title = 문제 제목
* Level = 문제 난이도
* Language = 문제 풀 때  사용한 언어
* memory = 메모리
* runtime = 실행시간
* code = 제출한 코드
* submitTime = 제출한 시간
*/
function extractData() {
  const problemInfo = {
    problemId: document.querySelector('body > div.container > div.container.sub > div > div.problem_box > p').innerText.split('.')[0].trim(),
    title: document.querySelector('div.problem_box > p.problem_title')
      .innerText
      .replace(/ D[0-9]$/, '')
      .replace(/^[^.]*/, '')
      .substr(1)
      .trim(),
    level: document.querySelector('div.problem_box > p.problem_title > span.badge')?.textContent || 'Unrated',
    language: document.querySelector('#problemForm div.info > ul > li:nth-child(1) > span:nth-child(1)').textContent.trim(),
    memory: document.querySelector('#problemForm div.info > ul > li:nth-child(2) > span:nth-child(1)').textContent.trim().toUpperCase(),
    runtime: document.querySelector('#problemForm div.info > ul > li:nth-child(3) > span:nth-child(1)').textContent.trim(),
    // code: document.querySelector('#textSource').value,
    submitTime: document.querySelector('.smt_txt > dd').textContent.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/g)[0],
  };

  // const codeInfo = {
  //   code: document.querySelector('#textSource').value,
  //   codeLanguage: document.querySelector('div.problem_box > h3').innerText.split('.')[0].trim(),
  //   codeSubmitTime: new Date(Date.now()).toISOString(),
  // };

  const combinedInfo = {
    ...problemInfo,
    // ...codeInfo,
  };

  return combinedInfo;
}

const data = extractData();
console.log(data);
// const problemLanguage = document.querySelector('div.problem_box > span').innerText.split('.')[0].trim()


// console.log(problemId)