import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId='f5eda6e0-2863-4e59-a969-5b0476ac8c16' language="en-US" >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
)