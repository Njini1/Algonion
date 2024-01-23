
import { baekjoonInfo } from "./storage.js";
import { findUsername, findResultUsername } from "./user.js";
import { mutationObserver } from "./observer.js"

const url = window.location.href;


const baekjoonUrl = url.startsWith("https://www.acmicpc.net/")? url:null;
if (baekjoonUrl) {
    const username = findUsername();
    const resultUsername = findResultUsername(baekjoonUrl);
    
    if (username === resultUsername) {
        const lastResultCategory = document.querySelector('.result-text');

        const status = document.querySelector('.result-text').dataset.color;
		console.log(status);

        mutationObserver(lastResultCategory);
    }
}