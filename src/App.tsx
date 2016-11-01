import * as React from "react";
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import Dashboard from './components/Dashboard/Dashboard';
import SubPage from './components/SubPage/SubPage';

render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={Dashboard}/>
			<Route path="/subpage" component={SubPage}/>
		</Router>
	),
	document.getElementById("app")
);