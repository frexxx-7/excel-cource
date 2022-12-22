import {DomListener} from '@core/DomListener'

export class ExcelCommponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListener()
  }

  destroy() {
    this.removeDOMListener()
  }
}
