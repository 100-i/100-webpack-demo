import _ from 'lodash'
import 'material-components-web'

function newElem (className) {
  var elem = document.createElement('canvas')
  elem.className = className

  return elem
}

function component () {
  var element = document.createElement('h1')

  element.className = 'mdc-typodgraphy--display2'
  element.innerHTML = _.join(['Hello','World', '!'], ' ')

  return element
}

function canvasComponent () {
  return newElem('test-canvas')
}

document.body.appendChild(component())
document.body.appendChild(canvasComponent())

mdc.autoInit()
