import {config} from "../config.js";

class HTTP{
  request(params){
    
    var baseUrl = config.vina_url + params.url;

    if(!params.method){
      params.method = "POST";
    }
  
    wx.request({
      url: baseUrl,
      data: params.data,
      method: params.method,
      header:{
        "content-type":"application/json"
      },
      success:function(res){
        // 判断以2（2xx)开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2'){
          params.sucess && params.sucess(res);
        } else {
          _showErr(code);
        }
      },
      fail:function(err){
        // params.fail && params.fail(res);
        _showErr(code);
      }
    });

    function _showErr(code){
      wx.showToast({
        title: code+'报错',
        icon: "none",
        duration: 2000
      });
    }
  }
};

export { HTTP };