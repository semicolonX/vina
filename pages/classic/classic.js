// pages/classic/classic.js
import {HTTP} from '../../utils/http.js';
var http = new HTTP();

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
      "like": true
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var params = {
      "url": "/like/like",
      "method": "POST",
      "data": {},
      "sucess": likeRes
    };
    http.request(params);

    function likeRes(res){
      console.log(res.data);
      that.setData({
        "classic": res.data.data
      });
    }

  },
  
  onlike: function(event) {
    console.log(event);
    var behavior = event.detail.behavior;
    console.log(behavior);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
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