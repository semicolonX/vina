import {HTTP_P} from '../utils/http_p.js'

class BookModel extends HTTP_P{
  constructor() {
    super()
  }

  getHotList(){
    return this.request('/like/book')
  }

}

export { BookModel }