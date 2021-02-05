import {appAxiosURL, getAppAccessToken, getToken} from "../../src/util/axiosRequest";
const axios = require('axios');
// const defaultAjaxTimeout = 30000;

export const headerData = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${getToken()}`
    }
};

const [subdomain] = window.location.hostname.split('.');

var requestWrapper = function(method) {
    // this is here so that we can append the .timeout call to all of our ajax requests with the default value.
    return function(url,data={},form=false) {
        let headers = new Headers();
        let appToken = '';
        console.log('getToken',getToken());
        if(subdomain==='app'){
            appToken = getAppAccessToken();
        }else{
            appToken = getToken();
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', `Bearer ${appToken}`);
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('GET', 'POST', 'OPTIONS');
        let requestURL = appAxiosURL();

        requestURL += url;

        let header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'http://myshop.local',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Credentials': 'true',
            'Authorization': `Bearer ${appToken}`,
            'mode': 'no-cors'
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
