

class KeywordModel{
  key='q'
  maxLength = 10
  getHistory(){
    return wx.getStorageSync(this.key) || []
  }

  getHot(){

  }

  addToHistory(keyword){
    let words = this.getHistory()
    const has = words.includes(keyword)
    if(!has){
      const length = words.length
      if (length >= this.maxLength){
        words.pop()
      }
      words.unshift(keyword)
      wx.setStorageSync(this.key, words)
    }
    
  }
}

export { KeywordModel}