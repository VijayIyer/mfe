import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';
// Mount function to startup the app
const mount = (el) => {
    const history = createMemoryHistory();
    ReactDOM.render(
        <App hitory={history} />,
        el)
}
// if we are in development and in isolation, call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector("#_marketing-dev-root");
    if(devRoot) {
        mount(devRoot);
    }
}
// else export mount function
export { mount };