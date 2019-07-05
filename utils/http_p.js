import { config } from "../config.js";

class HTTP_P {

  request(url, data = {}, method = "POST"){

    return new Promise((resolve, reject) => { 
      this._request(url, resolve, reject, data = {}, method = "POST")
    })
    
  }

  _request(url, resolve, reject, data, method) {

    var baseUrl = config.vina_url + url;

    wx.request({
      url: baseUrl,
      data: data,
      method: method,
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        // 判断以2（2xx)开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          resolve(res)
        } else {
          reject()
          _showErr(code)
        }
      },
      fail: function (error) {
        reject()
        _showErr(code);
      }
    });

    function _showErr(code) {
      wx.showToast({
        title: code + '报错',
        icon: "none",
        duration: 2000
      });
    }
  }
};

export { HTTP_P };