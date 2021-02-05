export function AppName(){
    return "Cybrilla Coding Challenge";
}

export function appAxiosURL(){

    if(process.env.NODE_ENV === 'production'){
        return "http://localhost:3000/api/";
    }else{

        return 'http://localhost:3000/api/';
    }
}

export function getToken() {
    return localStorage.getItem('app_access_token') || '';
}

export function getAppAccessToken() {
    return localStorage.getItem('app_access_token') || '';
}
