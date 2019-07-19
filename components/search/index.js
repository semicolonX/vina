// components/search/inde.js
import { KeywordModel } from '../../models/keyword.js'

const keywordModel = new KeywordModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    more:{
      type: String,
      value: 'false',
      observer:'lodeMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    keywords:'',
    searchBook:false,
    historyWords: [],
    books: [{ "author": "[美] 保罗·格雷厄姆", "fav_nums": 9, "id": 7, "image": "https://img3.doubanio.com/lpic/s4669554.jpg", "like_status": 0, "title": "黑客与画家" }, { "author": "[日] 东野圭吾", "fav_nums": 7, "id": 6, "image": "https://img3.doubanio.com/lpic/s4610502.jpg", "like_status": 0, "title": "白夜行" }, { "author": "[中] 张爱玲", "fav_nums": 4, "id": 5, "image": "https://img1.doubanio.com/view/subject/l/public/s2838737.jpg", "like_status": 0, "title": "半生缘" }, { "author": "[美] 欧文·斯通", "fav_nums": 1, "id": 4, "image": "https://img3.doubanio.com/view/subject/l/public/s2279966.jpg", "like_status": 0, "title": "梵高传" }, { "author": "[美]马里奥·普佐", "fav_nums": 0, "id": 3, "image": "https://img1.doubanio.com/view/subject/l/public/s2832939.jpg", "like_status": 1, "title": "教父" }]
  },

  attached(){
    const historyWords = keywordModel.getHistory()
    this.setData({
      historyWords
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputSubmit(event){
      
      keywordModel.addToHistory(event.detail.value)
      this.setData({
        keywords: event.detail.value,
        historyWords: keywordModel.getHistory(),
        searchBook: true
      })
    },

    searchCancel(){
      this.setData({
        keywords: '',
        searchBook: false
      })
    },

    cancelSearch(){
      this.triggerEvent('cancelSearch')
    },

    tapping(event){
      this.setData({
        keywords: event.detail.content,
        searchBook: true
      })
    },

    lodeMore(){
      console.log(123)
      // this.triggerEvent('more',{

      // })
    }
  }
})
