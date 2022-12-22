import {ExcelCommponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelCommponent {
  static className = 'excel__table'

  toHTML() {
    return createTable(30)
  }
}
