import axiosWrap from '@/services/axiosWrap'

export default {
  getTest () {
    return axiosWrap({
      url: `http://wthrcdn.etouch.cn/weather_mini?city=上海`,
      method: 'get'
    })
  },

}
