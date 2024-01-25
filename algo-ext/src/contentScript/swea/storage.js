import { isNull } from "./util";
/*
    로컬스토리지에 swea 객체가 없는 경우 생성
*/
getObjectFromLocalStorage('swea')
    .then((data) => {
        console.log(data);
        if (isNull(data)) {
            saveObjectInLocalStorage({ swea: {} })
            console.log('getting obj from local storage')
                ;
        }
    });


export async function saveObjectInLocalStorage(obj) {
    return new Promise((resolve, reject) => {
        console.log('local save')
        try {
            chrome.storage.local.set(obj, function () {
                resolve('set success');
            });
        } catch (ex) {
            reject(ex);
        }
    });
}

export async function getObjectFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.get(key, function (value) {
                resolve(value);
            });
        } catch (ex) {
            reject(ex);
        }
    });
}

export async function getProblemData(problemNum) {
    return getObjectFromLocalStorage('swea').then((data) => data[problemNum]);
}

export async function updateProblemData(problemNum, obj) {
    return getObjectFromLocalStorage('swea').then((data) => {
        console.log(problemNum)
        if (isNull(data[problemNum])) data[problemNum] = {};
        data[problemNum] = { ...data[problemNum], ...obj, save_date: Date.now() };

        saveObjectInLocalStorage({ swea: data });
        console.log(data)

        return data;
    });
}

export async function removeObjectFromLocalStorage(keys) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.remove(keys, function () {
                resolve();
            });
        } catch (ex) {
            reject(ex);
        }
    });
}

