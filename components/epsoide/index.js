// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function(newVal,oldVal,changePath){
        var val = newVal < 10 ? '0' + newVal : newVal;
        this.setData({
          _index: val
        });

      }
    }
  },
  
  attached () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    this.setData({
      year: year,
      month: this.data.monthList[month]
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    _index: "",
    year: 0,
    month: "",
    monthList: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
