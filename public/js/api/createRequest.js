/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = ({ url, data, method, callback }) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let add = `${url}?`
    if (method === 'GET') {
        if (data) {
            let keys = Object.keys(data);
            for (let i = 0; i < keys.length; i++) {
                add = add + data[keys[i]];
                if (i !== keys.length - 1) {
                    add = add + "&";
                }
            }
        }
        try {
            xhr.open(method, add);
            xhr.send();
        }
        catch (e) {
            callback(xhr.response);
        }
    }
    else {
        if (data) {
            let formData = new FormData();
            let keys = Object.keys(data);
            for (let i = 0; i < keys.length; i++) {
                formData.append(keys[i], data[keys[i]]);
            }
            try {
                xhr.open(method, url);
                xhr.send(formData);
            }
            catch (e) {
                callback(xhr.response);
            }
        }
    }
    xhr.addEventListener("load", (event) => {
        event.preventDefault();
        callback(xhr.response);
    });
};
