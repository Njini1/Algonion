import { default as axios } from 'axios';
const api = import.meta.env.VITE_BACKEND;
console.log('[ALGO] 프로그래머스 문제 페이지 입니다');
const btnSubmit = document.querySelector('#submit-code');
const modal = document.querySelector('.modal') as HTMLDivElement;
const modalMutationOption = {
  childList: true,
};

const parseData = () => {
  const problemId = (document.querySelector('div.main > div.lesson-content') as HTMLDivElement).getAttribute(
    'data-lesson-id',
  );
  const level = (document.querySelector('body > div.main > div.lesson-content') as HTMLDivElement).getAttribute(
    'data-challenge-level',
  );
  const title = (document.querySelector('body > div.main > div.lesson-content') as HTMLDivElement).getAttribute(
    'data-lesson-title',
  );
  const selectedLanguage = (
    document.querySelector('div.editor > ul > li.nav-item > a') as HTMLAnchorElement
  ).getAttribute('data-language');
  const code = (document.querySelector('textarea#code') as HTMLTextAreaElement).value;
  const modalTitle = (document.querySelector('.modal-title') as HTMLHeadingElement).innerHTML;
  const isSuccess = modalTitle.includes('정답');
  const passedTestCase = document.querySelectorAll('td.result.passed').length;
  const failedTestCase = document.querySelectorAll('td.result.failed').length;

  return {
    problemId,
    level,
    title,
    selectedLanguage,
    code,
    isSuccess,
    passedTestCase,
    failedTestCase,
  };
};

const modalMutationObserver = new MutationObserver((mutations) => {
  if (!mutations.length) return;
  const data = parseData();
  axios
    .post(`${api}/programmers/programmers`, data)
    .then((res) => {
      console.log('[ALGO] 업로드 성공');
    })
    .catch((e) => console.log(e));

  modalMutationObserver.disconnect();
});

const isProgrammersLoggedIn = btnSubmit !== null;
if (isProgrammersLoggedIn) {
  btnSubmit.addEventListener('click', () => {
    modalMutationObserver.observe(modal, modalMutationOption);
  });
}
