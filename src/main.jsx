import {render} from 'preact'
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
import {BrowserRouter} from 'react-router-dom'
import {App} from './app'
import './index.css'

const retrieveContainer = props => (props.container ?? document).querySelector('#app')

const renderApp = (props = {}) => {
    render(
        <BrowserRouter basename={props.baseUrl}>
            <App />, 
        </BrowserRouter>,
        retrieveContainer(props)
    )
}

renderWithQiankun({
    mount(props) {
        renderApp(props)
    },
    bootstrap() { },
    unmount(props) {
        render(null, retrieveContainer(props))
    },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    renderApp({})
}