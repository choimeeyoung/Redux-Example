import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App';

import {createStore} from 'redux';
import reducers from './reducers';

import {Provider} from 'react-redux';

// store 는 action 을 reducer 에게 전달
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)