export function isNull(value) {
  return value === null || value === undefined;
}

function startUpload() {
  let elem = document.getElementById('AlgoHub_progress_anchor_element');
  if (elem !== undefined) {
    elem = document.createElement('span');
    elem.id = 'AlgoHub_progress_anchor_element';
    // elem.className = 'runcode-wrapper__8rXm';
    // elem.style = 'margin-left: 10px;padding-top: 0px;';
  }
  elem.innerHTML = `<div id="AlgoHub_progress_elem" class="AlgoHub_progress"></div>`;
  const target = document.querySelector('div.box-list > div.box-list-inner > div.right_answer > span.btn_right');
  if (!isNull(target)) {
    target.prepend(elem);
  }
  // start the countdown
  startUploadCountDown();
}

function makeSubmitButton(link) {
  let elem = document.getElementById('AlgoHub_submit_button_element');
  if (elem !== undefined) {
    elem = document.createElement('a');
    elem.id = 'AlgoHub_submit_button_element';
    elem.className = 'btn_grey3 md btn';
    elem.style = 'cursor:pointer';
    elem.href = link;
  }
  elem.innerHTML = '알고허브로 업로드';
  const target = document.querySelector('body > div.popup_layer.show > div > div');
  if (!isNull(target)) {
    target.append(elem);
  }
}

function markUploadedCSS(branches, directory) {
  uploadState.uploading = false;
  const elem = document.getElementById('BaekjoonHub_progress_elem');
  elem.className = 'markuploaded';
  const uploadedUrl = "https://github.com/" +
              Object.keys(branches)[0] + "/tree/" + 
              branches[Object.keys(branches)[0]] + "/" + directory;
  elem.addEventListener("click", function() {
    window.location.href = uploadedUrl;
  });
  elem.style.cursor = "pointer";
}

function getNickname() {
  return document.querySelector('#Beginner')?.innerText || document.querySelector('header > div > span.name')?.innerText || '';
}

export {makeSubmitButton, getNickname}