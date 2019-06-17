// pages/book-detail/book-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: { 
      "image": "https://img3.doubanio.com/lpic/s4610502.jpg", 
      "author": "[日]东野圭吾", 
      "title": "白夜行",
      "summary":"只希望能手牵手在太阳下散步”，这个象征故事内核的绝望念想，有如一个美丽的幌子，随着无数凌乱、压抑、悲凉的故事片段像纪录片一样一一还原：没有痴痴相思，没有海枯石烂，只剩下一个冰冷绝望的诡计，最后一丝温情也被完全抛弃，万千读者在一曲救赎罪恶的凄苦爱情中悲切动容……\n&emsp;&emsp;这是简介吗？" 
    }, 
    comments: [{ "content": "程序员也有艺术的人生", "nums": "48" },
      { "content": "人生如棋", "nums": "29" },
      { "content": "一步走错，满盘阴影", "nums": "22" },
      { "content": "东野硅谷最好的作品之一", "nums": "22" },
      { "content": "666", "nums": "1" },
      { "content": "缘来是你", "nums": "1" },
      { "content": "厉害厉害", "nums": "1" }
    ],
    likeStatus: false,
    likeCount: 11,
    posting:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const bid = options.bid;
    console.log("bid:" + bid);
  },
  onFakePost(event) {
    var posting = this.data.posting;
    this.setData({
      posting: !posting
    })
  },
  tapping(event) {
    const content = event.detail.content || event.detail.value

    if (!content){
      return
    }

    if (content.length > 12){
      wx.showToast({
        title: '短评内容不能超过12个字',
        icon: 'none'
      })

      return
    }

    wx.showToast({
      title: '+1',
      icon: 'none'
    })

    this.data.comments.unshift({
      content: content,
      nums: 1
    })

    this.setData({
      comments: this.data.comments,
      posting: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})