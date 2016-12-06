import * as React from "react";
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import Main from './components/Main/Main';

render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={Main}/>
		</Router>
	),
	document.getElementById("app")
);