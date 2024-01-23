function makeSubmitButton(link) {
  let elem = document.getElementById('BaekjoonHub_submit_button_element');
  if (elem !== undefined) {
    elem = document.createElement('a');
    elem.id = 'BaekjoonHub_submit_button_element';
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