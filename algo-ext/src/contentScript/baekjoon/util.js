// 문제 제출 페이지의 테이블 헤더를 분류하는 함수
export function convertResultTableHeader(header) {
    switch (header) {
      case '문제번호':
      case '문제':
        return 'problemId';
      case '난이도':
        return 'level';
      case '결과':
        return 'result';
      case '문제내용':
        return 'problemDescription';
      case '언어':
        return 'language';
      case '제출 번호':
        return 'submissionId';
      case '아이디':
        return 'username';
      case '제출시간':
      case '제출한 시간':
        return 'submissionTime';
      case '시간':
        return 'runtime';
      case '메모리':
        return 'memory';
      case '코드 길이':
        return 'codeLength';
      default:
        return 'unknown';
    }
  }

// 문제 제출 페이지의 테이블 내용을 분류하는 함수
export function convertResultTableList(x, headerIndex) {
    switch (headerIndex) {
        case 'result':
            return { result: x.innerText.trim(), resultCategory: x.firstChild.getAttribute('data-color').replace('-eng', '').trim() };
        case 'language':
            return x.innerText.unescapeHtml().replace(/\/.*$/g, '').trim();
        case 'submissionTime':
            const el = x.querySelector('a.show-date');
            if (el === null) return null;
            return el.getAttribute('data-original-title');
        case 'problemId':
            const a = x.querySelector('a.problem_title');
            if (a === null) return null;
            return {
            problemId: a.getAttribute('href').replace(/^.*\/([0-9]+)$/, '$1'),
            };
        default:
            return x.innerText.trim();
        }
}

// 코드를 문자로 변환하는 함수
export function unescapeHtml(text) {
    const unescaped = {
        '&amp;': '&',
        '&#38;': '&',
        '&lt;': '<',
        '&#60;': '<',
        '&gt;': '>',
        '&#62;': '>',
        '&apos;': "'",
        '&#39;': "'",
        '&quot;': '"',
        '&#34;': '"',
        '&nbsp;': ' ',
        '&#160;': ' ',
    };
    return text.replace(/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160);/g, function (m) {
        return unescaped[m];
    });
}

String.prototype.unescapeHtml = function () {
    return unescapeHtml(this);
};

// 이미지에 상대 경로가 있을 수 있으므로 이미지 경로를 절대 경로로 전환하는 함수
// export function convertImageTagAbsoluteURL() {
//     if(document !== null) return;
//     // img tag replace Relative URL to Absolute URL.
//     Array.from(document.getElementsByTagName('img'), (x) => {
//       x.setAttribute('src', x.currentSrc);
//       return x;
//     });
//   }