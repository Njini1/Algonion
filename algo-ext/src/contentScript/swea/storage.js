import { isNull } from "./util";
/*
    로컬스토리지에 swea 객체가 없는 경우 생성
*/
// getObjectFromLocalStorage('swea').then((data) => {
//     console.log('getting obj from local storage')
//     if (isNull(data)) {
//         saveObjectInLocalStorage({ swea: {} });
//     }
// });

export async function saveObjectInLocalStorage(obj) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.clear() 
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
        ''
        try {
            chrome.storage.local.get(key, function (value) {
                resolve(value);
            });
        } catch (ex) {
            reject(ex);
        }
    });
}

export async function updateProblemData(problemNum, obj) {
    return getObjectFromLocalStorage('swea').then((data) => {
        console.log(data)
        if (isNull(data)) data = { swea: {} };
        if (!data.swea) data.swea = {};
        data.swea[problemNum] = obj;
        
        saveObjectInLocalStorage({ swea: data });
        console.log(data.swea)
        return data;
    });
}

export async function getProblemData(problemNum) {
    return getObjectFromLocalStorage('swea').then((data) => {
        const check = data['swea']
        console.log(check)
        data[problemNum]
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
