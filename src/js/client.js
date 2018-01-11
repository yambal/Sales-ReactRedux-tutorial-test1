import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import store from './modules/store'

import App from "./conteners/App";

const app = document.getElementById('app')

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	app
)
