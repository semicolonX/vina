// pages/classic/classic.js
import {
  HTTP
} from '../../utils/http.js';
var http = new HTTP();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var params = {
      "url": "https://www.easy-mock.com/mock/5cb43ad028e46b7d09a0c3ac/like/like",
      "method": "POST",
      "data": {},
      "sucess": likeRes
    };
    http.request(params);

    function likeRes(data){
      console.log(data.data)
      that.setData(data.data)
      console.log(that.data.statusCode)
    }

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