import _ from 'lodash'
import 'material-components-web'

function component () {
  var element = document.createElement('h1')

  element.className = 'mdc-typodgraphy--display2'
  element.innerHTML = _.join(['Hello','World', '!'], ' ')

  return element;
}

document.body.appendChild(component())

mdc.autoInit()
