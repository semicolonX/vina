// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navi_left:{
      type: Boolean
    },
    navi_right: {
      type: Boolean
    },
    content: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    left: "../images/triangle@left.png",
    right: "../images/triangle@right.png",
    disleft: "../images/triangle.dis@left.png",
    disright: "../images/triangle.dis@right.png"

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function (event) {
      console.log(this.properties.navi_left);
      if (!this.properties.navi_left){
        this.triggerEvent("navi", {
          behavior: "navi_next"
        });
      }

    },
    onRight: function (event) {
      console.log(this.properties.navi_right);
      if (!this.properties.navi_right){
        this.triggerEvent("navi", {
          behavior: "navi_prev"
        });
      }
      
    }
  }
})
