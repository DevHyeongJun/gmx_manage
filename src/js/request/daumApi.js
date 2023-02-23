
import axios from 'axios';

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

export const DaumApi = {
    
    getLatLon : async (_calBack) => {

        await Request(`${process.env.VUE_APP_REQUEST_URL}/daum/getLatLon`, { method:'get'}, (res) => {
            _calBack(res.data.result);
        });
    },
}