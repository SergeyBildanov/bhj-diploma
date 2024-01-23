/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {url,data,method,callback}) => {
    try{
        const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    if(options.method === 'GET'){
        let string = `${options.url}?`
        let keys = Object.keys(options.data);
        for(let i=0; i< keys.length; i++){
            string = string + options.data[keys[i]];
            if(i !== keys.length - 1){
                string = string + "&";
            }
        }
        xhr.open(options.method, string);
        xhr.send();
    }
    else{
        let formData = new FormData();
        let keys = Object.keys(options.data);
        for(let i=0; i< keys.length; i++){
            formData.append(keys[i], options.data[keys[i]]);
        }
        xhr.open(options.method, options.url);
        xhr.send(formData);
    }
    }catch(e){
        callback(e, xhr.responseText);
    }
};
