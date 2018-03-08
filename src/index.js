import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'typeface-roboto';

const rootElem = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElem);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, rootElem);
  })
}

registerServiceWorker();
