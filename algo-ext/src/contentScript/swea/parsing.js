/**
 * 문제 내 데이터를 가져옵니다.
 * @param {string} problemId 문제 번호
 * @returns {object} 문제 내 데이터
 */
let loader;

const currentUrl = window.location.href;

if (
  currentUrl.includes('/main/solvingProblem/solvingProblem.do') 
  && document.querySelector('header > h1 > span').textContent === '모의 테스트'
  ) startLoader();
else if (
  currentUrl.includes('/main/code/problem/problemSolver.do') 
  && currentUrl.includes('extension=BaekjoonHub')
  ) parseAndUpload();

function startLoader() {
  loader = setInterval(async () => {
    // 제출 후 채점하기 결과가 성공적으로 나왔다면 코드를 파싱하고,
    // 결과 페이지로 안내한다.
    if (getSolvedResult().includes('pass입니다')) {
      stopLoader();
      try {
        const { contestProbId } = await parseCode();
        // prettier-ignore
        await makeSubmitButton(`${window.location.origin}`
          + `/main/code/problem/problemSolver.do?`
          + `contestProbId=${contestProbId}&`
          + `nickName=${nickname}&`
          + `extension=BaekjoonHub`);
      } catch (error) {
        log(error);
      } 
    }
  }, 2000); 
}

function getSolvedResult() {
  return document.querySelector('div.popup_layer.show > div > p.txt')?.innerText.trim().toLowerCase() || '';
}

function stopLoader() {
  clearInterval(loader);
}

if (currentUrl.indexOf('/main/solvingProblem/solvingProblem.do') && document.querySelector('header > h1 > span').textContent === '모의 테스트') {
  (async () => {
    const codeInfo = await parseCode();
    console.log(codeInfo)
    // window.location.href = `${window.location.origin}/main/code/problem/problemSolver.do?contestProbId=${codeInfo.contestProbId}&nickname=${codeInfo.nickname}`;
  })
} else if (currentUrl.indexOf('/main/code/problem/problemSolver.do')) {
  (async () => {
    const problemData = await parseData();    
    console.log(problemData)
    })
}

async function parseCode() {
    
  const problemNum = document.querySelector('div.problem_box > h3').innerText.replace(/\..*$/, '').trim();
  const contestProbId = [...document.querySelectorAll('#contestProbId')].slice(-1)[0].value;
  const code = document.querySelector('#textSource').value;

  return { problemNum, contestProbId, code };
}


async function parseData() {
  if (getNickname() !== nickname) return;
  const nickname = document.querySelector('#Beginner').textContent;

  // 문제 제목
  const title = document
    .querySelector('div.problem_box > p.problem_title')
    .innerText.replace(/ D[0-9]$/, '')
    .replace(/^[^.]*/, '')
    .substr(1)
    .trim();
  // 문제 난이도, 번호, 인덱스, 링크
  const level = document.querySelector('div.problem_box > p.problem_title > span.badge')?.textContent || 'Unrated';
  const problemNum = document.querySelector('body > div.container > div.container.sub > div > div.problem_box > p').innerText.split('.')[0].trim();
  const contestProbId = [...document.querySelectorAll('#contestProbId')].slice(-1)[0].value;
  const link = `${window.location.origin}/main/code/problem/problemDetail.do?contestProbId=${contestProbId}`;

  // 문제 언어, 메모리, 시간소요, 코드 길이
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

  return { link, language, problemNum, level, title,  runtime, memory, length,submissionTime };
} 

// async function updateProblemData(problemId, obj) {
//   return getObjectFromLocalStorage('swea').then((data) => {
//     if (isNull(data[problemId])) data[problemId] = {};
//     data[problemId] = { ...data[problemId], ...obj, save_date: Date.now() };

//     // 기존에 저장한 문제 중 일주일이 경과한 문제 내용들은 모두 삭제합니다.
//     const date_week_ago = Date.now() - 7 * 86400000;
//     for (const [key, value] of Object.entries(data)) {
//       // 무한 방치를 막기 위해 저장일자가 null이면 삭제
//       if (isNull(value) || isNull(value.save_date)) {
//         delete data[key];
//       }
//       const save_date = new Date(value.save_date);
//       // 1주가 지난 문제는 삭제
//       if (date_week_ago > save_date) {
//         delete data[key];
//       }
//     }
//     saveObjectInLocalStorage({ swea: data });
//     return data;
//   });
// }

