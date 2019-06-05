// pages/classic/classic.js
import { HTTP } from '../../utils/http.js';
import { HTTP_P } from '../../utils/http_p.js';
var http = new HTTP();
var http_p = new HTTP_P();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
    classic: {
      "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1701034894,121214726&fm=26&gp=0.jpg",
      "content": "人生不能像做菜，把所有的料准备好了才下锅",
      "count": 10,
      "like": true,
      "index": 8
    },
    left: true,
    right: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.clearStorageSync();
    var that = this;
    var params = {
      "url": "/like/like",
      "method": "POST",
      "data": {},
      "sucess": that._likeRes
    };
    http.request(params);

    // promise的应用
    // var promise = new Promise((resolve,reject)=>{
    //   wx.getSystemInfo({
    //     success: res => resolve(res),
    //     fail: error => reject(error)
    //   })
    // })
    // promise.then(
    //   res => console.log(res),
    //   error => console.log(res)
    // )
    // promise的应用  实例
    // var promise = new Promise((resolve,reject)=>{
    //   http_p.request("/like/like7", params.data, 
    //     res => resolve(res), 
    //     error => {
    //       console.log("ERROR:" + error.statusCode)
    //       reject()
    //     }, 
    //     "POST"); 
    // })
    // function promise_02(){
    //   return new Promise((resolve, reject) => {
    //     http_p.request("/like/like6", params.data,
    //       res => resolve(res), 
    //       error => {
    //         console.log("ERROR:"+error.statusCode)
    //         reject()
    //       }, 
    //        "POST");
    //   })
    // }
    // promise.then(
    //   res=>{
    //     console.log(res) 
    //     return promise_02(); 
    //   }
    // ).then(
    //   res => {
    //     console.log(res) 
    //     return promise; 
    //   } 
    // ).then(
    //   res => {
    //     console.log(res)
    //   }
    // )

  },

  _likeRes: function (res){
    console.log(res.data);

    this.setData({
      "classic": res.data.data
    });

    wx.setStorageSync( 'index', res.data.data.index );
    wx.setStorageSync( 'index' + res.data.data.index, res.data.data );
  },
  _likeRes02: function (res) {
    console.log(res.data);

    this.setData({
      "classic": res.data.data
    });

    this._naviCanClick();
    wx.setStorageSync('index' + res.data.data.index, res.data.data);
  },
  _naviCanClick: function () {
    if (this.data.classic.index == wx.getStorageSync('index')) {
      this.setData({
        "left": true
      })
    } else {
      this.setData({
        "left": false
      })
    }
    if (this.data.classic.index == 6) {
      this.setData({
        "right": true
      })
    } else {
      this.setData({
        "right": false
      })
    }
  },
  
  onlike: function (event) {
    console.log(event);
    var behavior = event.detail.behavior;
    console.log(behavior);
  },

  onnavi: function (event) {
    console.log(event);
    var behavior = event.detail.behavior;
    var index = this.data.classic.index;

    if (behavior == 'navi_prev'){
      index = index-1;
    } else if (behavior == 'navi_next'){
      index = index + 1;
    }
    
    if ( wx.getStorageSync('index' + index) ){
      this.setData({
        "classic": wx.getStorageSync('index' + index)
      });
      this._naviCanClick();
    } else {
      var params = {
        "url": "/like/like" + index,
        "method": "POST",
        "data": {},
        "sucess": this._likeRes02
      };
      http.request(params);
    }
    
    console.log(this.data.classic);
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // console.log("============this:");
    // console.log(this);

    // function foo(name){
    //   console.log(name);
    //   console.log(this);
      
    // }
    // foo.call(this, 'foo.call(this)');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})