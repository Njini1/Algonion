// /* 정답 제출 페이지에서 데이터 추출
// * problemId = 문제 id값
// * Title = 문제 제목
// * Level = 문제 난이도
// * Language = 문제 풀 때  사용한 언어
// * memory = 메모리
// * runtime = 실행시간
// * code = 제출한 코드
// * submitTime = 제출한 시간
// */
// async function parseData() {
//   const nickname = document.querySelector('#searchinput').value;

//   console.log('사용자 로그인 정보 및 유무 체크', nickname, document.querySelector('#problemForm div.info'));
//   // 검색하는 유저 정보와 로그인한 유저의 닉네임이 같은지 체크
//   // PASS를 맞은 기록 유무 체크
//   // if (getNickname() !== nickname) return;
//   // if (isNull(document.querySelector('#problemForm div.info'))) return;

//   console.log('결과 데이터 파싱 시작');

//   const title = document
//     .querySelector('div.problem_box > p.problem_title')
//     .innerText.replace(/ D[0-9]$/, '')
//     .replace(/^[^.]*/, '')
//     .substr(1)
//     .trim();
//   // 레벨
//   const level = document.querySelector('div.problem_box > p.problem_title > span.badge')?.textContent || 'Unrated';
//   // 문제번호
//   const problemId = document.querySelector('body > div.container > div.container.sub > div > div.problem_box > p').innerText.split('.')[0].trim();
//   // 문제 콘테스트 인덱스
//   const contestProbId = [...document.querySelectorAll('#contestProbId')].slice(-1)[0].value;
//   // 문제 링크
//   const link = `${window.location.origin}/main/code/problem/problemDetail.do?contestProbId=${contestProbId}`;

//   // 문제 언어, 메모리, 시간소요
//   const language = document.querySelector('#problemForm div.info > ul > li:nth-child(1) > span:nth-child(1)').textContent.trim();
//   const memory = document.querySelector('#problemForm div.info > ul > li:nth-child(2) > span:nth-child(1)').textContent.trim().toUpperCase();
//   const runtime = document.querySelector('#problemForm div.info > ul > li:nth-child(3) > span:nth-child(1)').textContent.trim();
//   const length = document.querySelector('#problemForm div.info > ul > li:nth-child(4) > span:nth-child(1)').textContent.trim();

//   // 확장자명
//   // const extension = languages[language.toLowerCase()];

//   // 제출날짜
//   const submissionTime = document.querySelector('.smt_txt > dd').textContent.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/g)[0];
//   // 로컬스토리지에서 기존 코드에 대한 정보를 불러올 수 없다면 코드 디테일 창으로 이동 후 제출하도록 이동
//   const data = await getProblemData(problemId);
//   console.log('data', data);
//   if (isNull(data?.code)) {
//     // 기존 문제 데이터를 로컬스토리지에 저장하고 코드 보기 페이지로 이동
//     await updateProblemData(problemId, { level, contestProbId, link, language, memory, runtime, length, extension });
//     const contestHistoryId = document.querySelector('div.box-list > div > div > span > a').href.replace(/^.*'(.*)'.*$/, '$1');
//     window.location.href = `${window.location.origin}/main/solvingProblem/solvingProblem.do?contestProbId=${contestProbId}`;
//     console.error('소스코드 데이터가 없습니다.');
//     return;x``
//   }
//   const code = data.code;
//   console.log('파싱 완료');
//   // eslint-disable-next-line consistent-return
//   return makeData({ link, problemId, level, title, extension, code, runtime, memory, length,submissionTime });
// } 

// async function makeData(origin) {
//   const { link, problemId, level, extension, title, runtime, memory, code, length,submissionTime } = origin;
//   const directory = `SWEA/${level}/${problemId}. ${convertSingleCharToDoubleChar(title)}`;
//   const message = `[${level}] Title: ${title}, Time: ${runtime}, Memory: ${memory} -BaekjoonHub`;
//   const fileName = `${convertSingleCharToDoubleChar(title)}.${extension}`;
//   const dateInfo = submissionTime ?? getDateString(new Date(Date.now()));
//   // prettier-ignore
//   const readme =
//     `# [${level}] ${title} - ${problemId} \n\n`
//     + `[문제 링크](${link}) \n\n`
//     + `### 성능 요약\n\n`
//     + `메모리: ${memory}, `
//     + `시간: ${runtime}, `
//     + `코드길이: ${length} Bytes\n\n`
//     + `### 제출 일자\n\n`
//     + `${dateInfo}\n\n`
//     + `\n\n`
//     + `> 출처: SW Expert Academy, https://swexpertacademy.com/main/code/problem/problemList.do`;
//     console.log(readme, "백준허브")

  
//     return { problemId, directory, message, fileName, readme, code };
// }

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
    submitTime: document.querySelector('.smt_txt > dd').textContent.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/g)[0],
    link : `${window.location.origin}/main/code/problem/problemDetail.do?contestProbId=${contestProbId}`,

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

// // console.log(extractData())
const data = extractData();
console.log(data);
// // const problemLanguage = document.querySelector('div.problem_box > span').innerText.split('.')[0].trim()


// // console.log(problemId)