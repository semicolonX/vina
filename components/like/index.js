// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
      value:false
    },
    count:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yes_url:"../images/like.png",
    no_url:"../images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(){
      
      let count = this.properties.count;
      count = this.properties.like ? count - 1 : count + 1;
      this.setData({
        count: count,
        like: !this.properties.like
      })
    }
  }
})
