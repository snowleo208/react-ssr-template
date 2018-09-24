import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider as ReduxProvider } from 'react-redux';
import mainReducer from './reducers';
import { createStore } from 'redux';

import Container from './components/Container';

let store = null;

if (module.hot) {
  store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(mainReducer, window.REDUX_DATA);
}

const render = Component => {
  const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <AppContainer>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </ReduxProvider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Container);
