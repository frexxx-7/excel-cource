import {Excel} from './components/excel/Excel'
import './scss/index.scss'
import {Header} from '@/components/header/Header'
import {Toolbar} from './components/toolbar/Toolbar'
import {Formula} from './components/formula/Formula'
import {Table} from './components/table/Table'

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()
