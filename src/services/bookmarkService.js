import Api from '@/services/Api'

export default {
  index (bookmark) {
    return Api().get('bookmarks', {params: bookmark})
  },
  post (bookmark) {
    return Api().post('bookmarks', bookmark)
  },
  delete (id) {
    return Api().delete(`bookmarks/${id}`)
  },
  getall () {
    return Api().get('bookmarks/all')
  },
}
