![Alt text](image.png)
{user}/{repository}/{플랫폼}/{등급}/{문제번호}.{문제명}/{문제명}.{확장자}


- 연습 문제 주소인지 확인하고 둘 중 맞는 파서를 실행
if (currentUrl.includes('/main/solvingProblem/solvingProblem.do') && document.querySelector('header > h1 > span').textContent === '모의 테스트') startLoader();
else if (currentUrl.includes('/main/code/problem/problemSolver.do') && currentUrl.includes('extension=BaekjoonHub')) parseAndUpload();


- directory : 레포에 기록될 폴더명
- message : 커밋 메시지
- fileName : 파일명
- readme : README.md에 작성할 내용 
- code : 소스코드 내용

**파싱해야하는 데이터**
- problemId : 문제의 id를 제출 페이지의 문제번호로 가져옴  
- level : 문제의 레벨
- contestProbId : 문제 콘테스트 인덱스
- link : 문제의 링크

- language : 문제를 풀 때 사용한 언어
- memory : 코드를 실행시킬 때 사용되는 메모리
- runtime : 코드가 실행되는데 걸린 시간
- length : 코드의 전체 길이

// 로컬스토리지에서 기존 코드에 대한 정보를 불러올 수 없다면 코드 디테일 창으로 이동 후 제출하도록 이동
- data = await getProblemData(problemId);
