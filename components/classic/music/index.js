// components/classic/music/index.js
import { classic_beh } from "../classic_beh.js";
var mMgr = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classic_beh],

  properties: {
    "src":{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "playFlag":false,
    "playSrc":"../../images/player@play.png",
    "pauseSrc":"../../images/player@pause.png"
  },
  attached: function(event){
    this._musicUpdate();
    this._musicTap();
  },
  // detached: function (event) {
  //   mMgr.stop();
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function () {
      //背景图片切换  音乐播、停控制
      if (this.data.playFlag) { 
        this.setData({
          "playFlag":false
        });
        mMgr.pause();
      } else {
        this.setData({
          "playFlag": true
        });
        mMgr.src = this.properties.src;
        mMgr.title = "《纸短情长》烟把儿";
        mMgr.play();
      }
    },
    _musicUpdate: function(){
      if(mMgr.paused){
        this.setData({
          "playFlag": false
        });
        return;
      }

      if (mMgr.src == this.properties.src){
        this.setData({
          "playFlag": true
        });
      }
    },
    _musicTap:function(){
      
      mMgr.onPlay(()=>{
        this._musicUpdate();
      })
      mMgr.onPause(() => {
        this._musicUpdate();
      })
      mMgr.onStop(() => {
        this._musicUpdate();
      })
      mMgr.onEnded(() => {
        this._musicUpdate();
      })

    }
  }
})
