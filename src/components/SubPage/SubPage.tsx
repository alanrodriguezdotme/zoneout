import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';
import { observer } from 'mobx-react';

@observer class SubPage extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./SubPage.scss');
	}

	render() {
		return (
			<div className="subpage">
				<h1>SubPage</h1>
				<nav>
					<ul>
						<li><Link to={`/`}>Go To Dashboard</Link></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default SubPage;