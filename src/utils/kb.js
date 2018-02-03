import ActivePanel from './ActivePanel'

class Kb extends ActivePanel{
  keyCode = {
    'BACK': 8,
    'ENTER': 13,
    'UP': 38,
    'DOWN': 40,
    'LEFT': 37,
    'RIGHT': 39
  }

  constructor (dom) {
    super()
    this.dom = dom
    this.bindKeyBoard = this.bindKeyBoard.bind(this)
  }

  init () {
    window.addEventListener('keydown', this.bindKeyBoard, false)
  }

  bindKeyBoard (e) {
    let _this = this
    switch (e.keyCode) {
      case _this.keyCode.BACK: // back
        console.log('-----BACK----')
        break
      case _this.keyCode.ENTER: // enter
        console.log('-----ENTER----')
        _this.onEnter(cb)
        break
      case _this.keyCode.UP: // UP
        console.log('-----UP----')
        break
      case _this.keyCode.DOWN:
        console.log('------down----')
        break
      case _this.keyCode.LEFT:
        console.log('-----left-----')
        break
      case _this.keyCode.RIGHT:
        console.log('------right------')
        break
      default:
        console.log('----common------')
        break
    }
  }

  removeKeyBoard () {
    window.removeEventListener('keydown', this.bindKeyBoard, false)
  }

  onEnter (cb) {

  }
}

export default Kb
