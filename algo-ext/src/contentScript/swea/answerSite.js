// /*
//   문제 요약과 코드를 파싱합니다.
//   - directory : 레포에 기록될 폴더명
//   - message : 커밋 메시지
//   - fileName : 파일명
//   - readme : README.md에 작성할 내용 
//   - code : 소스코드 내용
// */

/**
 * 문제 내 데이터를 가져옵니다.
 * @param {string} problemId 문제 번호
 * @returns {object} 문제 내 데이터
 */

async function parseData() {
  const nickname = document.querySelector('#Beginner').textContent;

  // 문제 제목
  const title = document
    .querySelector('div.problem_box > p.problem_title')
    .innerText.replace(/ D[0-9]$/, '')
    .replace(/^[^.]*/, '')
    .substr(1)
    .trim();
  // 문제 난이도
  const level = document.querySelector('div.problem_box > p.problem_title > span.badge')?.textContent || 'Unrated';
  // 문제 번호
  const problemId = document.querySelector('body > div.container > div.container.sub > div > div.problem_box > p').innerText.split('.')[0].trim();
  // 문제 콘테스트 인덱스
  const contestProbId = [...document.querySelectorAll('#contestProbId')].slice(-1)[0].value;
  // 문제 링크
  const link = `${window.location.origin}/main/code/problem/problemDetail.do?contestProbId=${contestProbId}`;

  // 문제 언어, 메모리, 시간소요
  const language = document.querySelector('#problemForm div.info > ul > li:nth-child(1) > span:nth-child(1)').textContent.trim();
  const memory = document.querySelector('#problemForm div.info > ul > li:nth-child(2) > span:nth-child(1)').textContent.trim().toUpperCase();
  const runtime = document.querySelector('#problemForm div.info > ul > li:nth-child(3) > span:nth-child(1)').textContent.trim();
  const length = document.querySelector('#problemForm div.info > ul > li:nth-child(4) > span:nth-child(1)').textContent.trim();

  // 제출날짜
  const submissionTime = document.querySelector('.smt_txt > dd').textContent.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/g)[0];
  // 로컬스토리지에서 기존 코드에 대한 정보를 불러올 수 없다면 코드 디테일 창으로 이동 후 제출하도록 이동
  // const data = await getProblemData(problemId);
  
  // console.log('data', data);
  // if (isNull(data?.code)) {
  //   // 기존 문제 데이터를 로컬스토리지에 저장하고 코드 보기 페이지로 이동
  //   await updateProblemData(problemId, { level, contestProbId, link, language, memory, runtime, length, extension });
  //   const contestHistoryId = document.querySelector('div.box-list > div > div > span > a').href.replace(/^.*'(.*)'.*$/, '$1');
  //   window.location.href = `${window.location.origin}/main/solvingProblem/solvingProblem.do?contestProbId=${contestProbId}`;
  //   console.error('소스코드 데이터가 없습니다.');
  //   return;
  // }
  // const code = data.code;
  // console.log('파싱 완료');

  return { link, language, problemId, level, title,  runtime, memory, length,submissionTime };
} 

async function render() {
  const data = await parseData();
  const fetchedData = data.data;
  return fetchedData;
}
console.log(render())

// Promise {fulfilled: {...}}의 하위 요소의 [[PromiseResult]]: Object 안에 들어있는 값을 가져옵니다.

// async function extractData() {
//   const problemId = document.querySelector('body > div.container > div.container.sub > div > div.problem_box > p').innerText.split('.')[0].trim();
//   const contestProbId = [...document.querySelectorAll('#contestProbId')].slice(-1)[0].value;
//   const title = document.querySelector('div.problem_box > p.problem_title')
//     .innerText
//     .replace(/ D[0-9]$/, '')
//     .replace(/^[^.]*/, '')
//     .substr(1)
//     .trim();
//   const level = document.querySelector('div.problem_box > p.problem_title > span.badge')?.textContent || 'Unrated';
//   const language = document.querySelector('#problemForm div.info > ul > li:nth-child(1) > span:nth-child(1)').textContent.trim();
//   const memory = document.querySelector('#problemForm div.info > ul > li:nth-child(2) > span:nth-child(1)').textContent.trim().toUpperCase();
//   const runtime = document.querySelector('#problemForm div.info > ul > li:nth-child(3) > span:nth-child(1)').textContent.trim();
//   const submitTime = document.querySelector('.smt_txt > dd').textContent.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/g)[0];
//   const link = `${window.location.origin}/main/code/problem/problemDetail.do?contestProbId=${contestProbId}`;

//   const data = getProblemData(problemId);
  
//   return { problemId, contestProbId, title, level, language, memory, runtime, submitTime, link, data};
// }
// console.log(extractData())
