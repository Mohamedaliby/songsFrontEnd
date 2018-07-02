import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {params: {search}})
  },
  post (song) {
    return Api().post('songs', song)
  },
  show (id) {
    return Api().get(`songs/${id}`)
  },
  put (id, song) {
    return Api().put(`songs/${id}`, song)
  },
  delete (id) {
    return Api().delete(`songs/${id}`)
  }
}
