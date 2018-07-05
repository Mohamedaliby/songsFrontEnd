import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('history',{
      params: params
    })
  },
  post (recent) {
    return Api().post('history', recent)
  },
}
