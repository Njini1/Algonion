import {parseCode, parseData} from './parsing'
// import { makeSubmitButton } from './util';
// import { getNickname } from './util';
/* 
  문제 제출 맞음 여부를 확인하는 함수
  2초마다 문제를 파싱하여 확인
*/
let loader;

const currentUrl = window.location.href;

if (currentUrl.includes('/main/solvingProblem/solvingProblem.do') && document.querySelector('header > h1 > span').textContent === '모의 테스트') {
  // 코드 제출하는 페이지
 startLoader();
//  console.log(currentUrl)
} else if (currentUrl.includes('/main/code/problem/problemSolver.do')) {
  // 제출 이후에 정답(결과) 페이지
  console.log("111")
  combineParsedData();
}

async function combineParsedData() {
    const ProbData = await parseData();
    console.log(ProbData);
    // 이제 ProbData와 ProbCodedata를 함께 사용할 수 있습니다.
    // await beginUpload(bojData);
}

function startLoader() {
  loader = setInterval(async () => {
    console.log('Ready to parse')
    // 제출 후 채점하기 결과가 성공적으로 나왔다면 코드를 파싱하고,
    // 결과 페이지로 안내한다.
    if (getSolvedResult().includes('pass입니다')) {
      console.log('정답입니다. 코드를 파싱합니다');
      stopLoader();
      try {
        console.log('try code parsing')
        const ProbCodedata = await parseCode();

        console.log(ProbCodedata)
        console.log(ProbCodedata.contestProbId)
        // prettier-ignore
        // window.location.href = `${window.location.origin}/main/code/problem/problemSolver.do?contestProbId=${ProbCodedata.contestProbId}`; 
        // makeSubmitButton(`${window.location.origin}`
        //   + `/main/code/problem/problemSolver.do?`
        //   + `contestProbId=${contestProbId}&`
        //   + `nickName=${getNickname()}&`
        //   + `extension=AlgoHub`);
      } catch (error) {
        // console.log(error);
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

// /* 파싱 직후 실행되는 함수 */
// async function beginUpload(bojData) {
//   if (isNotEmpty(bojData)) {

//     /* 현재 제출하려는 소스코드가 기존 업로드한 내용과 같다면 중지 */
//     cachedSHA = await getStatsSHAfromPath(`${hook}/${bojData.directory}/${bojData.fileName}`)
//     calcSHA = calculateBlobSHA(bojData.code)
//     console.log('cachedSHA', cachedSHA, 'calcSHA', calcSHA)
//     if (cachedSHA == calcSHA) {
//       markUploadedCSS(stats.branches, bojData.directory);
//       return;
//     }
//     /* 신규 제출 번호라면 새롭게 커밋  */
//     await uploadOneSolveProblemOnGit(bojData, markUploadedCSS);
//   }
// }
