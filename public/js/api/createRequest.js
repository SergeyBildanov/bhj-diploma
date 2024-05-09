/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = ({ url, data, method, callback }) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let add = `${url}?`
    let formData = new FormData();
    if (data) {
        if (method === 'GET') {
            let keys = Object.keys(data);
            for (let i = 0; i < keys.length; i++) {
                add = add + `${keys[i]}=${data[keys[i]]}`;
                if (i !== keys.length - 1) {
                    add = add + "&";
                }
            }
        }
        else {
            let keys = Object.keys(data);
            for (let i = 0; i < keys.length; i++) {
                formData.append(keys[i], data[keys[i]]);
            }
        }
    }
    try {
        xhr.open(method, add);
        xhr.send(formData);
    }
    catch (e) {
        callback(xhr.response);
    }
    xhr.addEventListener("load", () => {
        callback(xhr.response);
    });
};
