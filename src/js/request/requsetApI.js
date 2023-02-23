import axios from 'axios';

const ROOT_REQUEST_URL = "test";

const Request = (url, opt, _callBack) => {
    axios({
        method: opt.method||"get",
        url: url,
        data:opt.param,
        responseType: "json"
    }).then(function (response) {
        _callBack(response);
    });
}
export const RequestAPI = {
    
    getCount : (param, callBack) => {
        ROOT_REQUEST_URL;
        Request;
        param;

        const rand_0_100 = Math.floor(Math.random() * 101);

        callBack({ result : rand_0_100 });
        
        // Request(`${process.env.VUE_APP_REQUEST_URL}/getCount`, { param, method:'post'}, (res) => {
        //     callBack(res.data);
        // });
    },

    getStat : (param, callBack) => {
        param;
        const rand_0_100 = Math.floor(Math.random() * 2);
        callBack({ result : rand_0_100 > 0 });
        
        // Request(`${process.env.VUE_APP_REQUEST_URL}/getStat`, { param, method:'post'}, (res) => {
        //     callBack(res.data);
        // });
    },

    setServiceCmd : (param, callBack) => {
        param;
        const rand_0_100 = Math.floor(Math.random() * 2);
        callBack({ result : rand_0_100 > 0 });
        
        // Request(`${process.env.VUE_APP_REQUEST_URL}/getStat`, { param, method:'post'}, (res) => {
        //     callBack(res.data);
        // });
    },
}
