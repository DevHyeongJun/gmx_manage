import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;

const Request = (url, opt, _callBack) => {
    opt.param['token']= 'ㅅㄷㄴㅅ';
    axios({
        method: opt.method||"get",
        url: url,
        headers: { 'Access-Control-Allow-Origin': '*', "Content-Type": 'application/json' },
        params:opt.param,
        responseType : 'json'
    }).then(function (response) {
        _callBack(response);
    });
}
//노원구 드론 반출 시스템
export const RequestAPI = {
    setServiceCmd : (param, callBack) => {
        Request(`${process.env.VUE_APP_REQUEST_URL}/manager/workExportMoule`, { param, method:'get'}, (res) => {
            callBack(res.data.message);
        });
    },
    
    getCrmsList : (param, callBack) => {
        Request(`${process.env.VUE_APP_REQUEST_URL}/manager/select`, { param, method:'get'}, (res) => {
            
            callBack(res.data.results);
        });
    },
    getMonitorCnt : (param, callBack) => {
        Request(`${process.env.VUE_APP_REQUEST_URL}/manager/selectMonitorCnt`, { param, method:'get'}, (res) => {
            callBack(res.data.results);
        });
    },
    getServiceStat : (param, callBack) => {
        Request(`${process.env.VUE_APP_REQUEST_URL}/manager/stateAll`, { param, method:'get'}, (res) => {
            callBack(res.data.message);
        });
    },
    
    modData : (param, callBack) => {
        Request(`${process.env.VUE_APP_REQUEST_URL}/manager/modData`, { param, method:'get'}, (res) => {
            callBack(res.data.message);
        });
    }

}
