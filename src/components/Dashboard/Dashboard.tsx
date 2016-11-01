import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';
import { observer } from 'mobx-react';

@observer class Dashboard extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./Dashboard.scss');
	}

	render() {
		return (
			<div className="dashboard">
				<h1>Dashboard</h1>
				<nav>
					<ul>
						<li><Link to={`/subpage`}>Go To Subpage</Link></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Dashboard;