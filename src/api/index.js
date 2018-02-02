// http://cdn.100uu.tv/index/?format=json&platform=googleplay
import axios from 'axios'

export default {
  getHomeData (cb) {
    axios.get('http://cdn.100uu.tv/index/?format=json&platform=googleplay')
      .then(function (response) {
        cb(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getProducts (cb) {
    // setTimeout(() => cb(_products), 100)
    console.log('-------')
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
