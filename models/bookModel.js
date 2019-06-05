import {HTTP_P} from '../utils/http_p.js'

class BookModel extends HTTP_P{
  constructor() {
    super()
  }

  getHotList(sucess){
    this.request('/like/book', {}, sucess)
  }
}

export { BookModel }