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
export async function updateProblemData(problemNum, obj) {
    return getObjectFromLocalStorage('swea').then((data) => {
        console.log(data)
        if (isNull(data)) data = { swea: {} };
        if (!data.swea) data.swea = {};
        data.swea[problemNum] = obj;
        
        saveObjectInLocalStorage({ swea: data });
        console.log(data)
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



export async function updateProblemData(problemNum, obj) {
    return getObjectFromLocalStorage('swea').then((data) => {
        if (isNull(data[problemNum])) data[problemNum] = {};
        data[problemNum] = { ...data[problemNum], ...obj, save_date: Date.now() };
        console.log(data)

        // 기존에 저장한 문제 중 일주일이 경과한 문제 내용들은 모두 삭제합니다.
        const date_week_ago = Date.now() - 7 * 86400000;
        for (const [key, value] of Object.entries(data)) {
            // 무한 방치를 막기 위해 저장일자가 null이면 삭제
            if (isNull(value) || isNull(value.save_date)) {
            delete data[key];
            }
            const save_date = new Date(value.save_date);
            // 1주가 지난 문제는 삭제
            if (date_week_ago > save_date) {
            delete data[key];
            }
        }
        saveObjectInLocalStorage({ swea: data });
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

export async function getProblemData(problemNum) {
    return getObjectFromLocalStorage('swea').then((data) => data[problemNum]);
}
