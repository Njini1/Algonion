import { getNickname } from './util';

/**
 * 문제 내 데이터를 가져옵니다.
 * @param {string} problemId 문제 번호
 * @returns {object} 문제 내 데이터
 */
let loader;

const currentUrl = window.location.href;


export function getSolvedResult() {
  return document.querySelector('div.popup_layer.show > div > p.txt')?.innerText.trim().toLowerCase() || '';
}

function stopLoader() {
  clearInterval(loader);
}

export async function parseCode() {
    
  const problemNum = document.querySelector('div.problem_box > h3').innerText.replace(/\..*$/, '').trim();
  const contestProbId = [...document.querySelectorAll('#contestProbId')].slice(-1)[0].value;
  const code = document.querySelector('#textSource').value;
  
  return { problemNum, contestProbId, code };
}


export async function parseData() {
  const nickname = document.querySelector('#Beginner').textContent;

  if (getNickname() !== nickname) return;

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

    // 기존 문제 데이터를 로컬스토리지에 저장하고 코드 보기 페이지로 이동
  const contestHistoryId = document.querySelector('div.box-list > div > div > span > a').href.replace(/^.*'(.*)'.*$/, '$1');
    // console.error('소스코드 데이터가 없습니다.');
  
  console.log('파싱 완료');

  return { link, language, problemNum, level, title, runtime, memory, length, submissionTime };
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

