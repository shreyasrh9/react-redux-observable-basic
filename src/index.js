import React from "react";
import { Provider } from 'react-redux';
import { store } from './redux/configureStore'
import './assets/css/sb-admin.min.css'
import ReactWebComponent from './containers/ReactWebComponent/ReactWebComponent';
import "./index.css";
import App from './App';

ReactWebComponent.create(<Provider store={store}><App /></Provider>, 'main-app');



