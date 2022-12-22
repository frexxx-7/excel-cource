import {ExcelCommponent} from '../../core/ExcelComponent';

export class Formula extends ExcelCommponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log(this.$root)
    console.log('Formula: onInput', event.target.textContent)
  }

  onClick() {
    console.log('onClick')
  }
}
