import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() {
        return (
            <div>
                Hello!
        </div>
        )
    }
}

class Goodbye extends React.Component {
    render() {
        return (
            <div>
                Goodbye!
            </div>
        )
    }
}


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Hello} />
                <Route path="/goodbye" component={Goodbye} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));