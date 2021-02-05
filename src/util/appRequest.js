import {appAxiosURL, getToken} from "./axiosRequest";
const axios = require('axios');

export const headerData = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${getToken()}`
    }
};

var requestWrapper = function(method) {
    // this is here so that we can append the .timeout call to all of our ajax requests with the default value.
    return function(url,data={},form=false) {
        let headers = new Headers();

        // headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', `Bearer ${getToken()}`);
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');

        let requestURL = appAxiosURL();

        if(url!=='auth/login'){
            // requestURL += 'admin/';
        }
        requestURL += url;

        let header = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken()}`,
            // 'mode': 'no-cors'
        };

        console.log(requestURL,method,data,header);

        if(form){
            console.log('form data',form);
            return axios({
                method: method,
                url: requestURL,
                data: data,
                headers:header
                // headers:headers
                // headers:headerData
                // body: JSON.stringify(payload),
            });
        }

        const requestOptions = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(data),
            data: data,
        };
        // axios({
        //     method: method,
        //     url: requestURL,
        //     data: data,
        //     headers:header
        // }).then(res=>{
        //     console.log('res',res);
        // }).catch(error=>console.error(error));

        // return fetch(requestURL, requestOptions).then(response => response.json());

        return axios({
            method: method,
            url: requestURL,
            data: data,
            headers:header
            // headers:headers
            // headers:headerData
            // body: JSON.stringify(payload),

        });
    };
};

export default {
    get: requestWrapper("get"),
    put: requestWrapper("put"),
    post: requestWrapper("post"),
    del: requestWrapper("del"),
};
