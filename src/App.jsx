import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classNames from "classnames";

import _isEmpty from 'lodash/isEmpty';
import _toLower from 'lodash/toLower';
// import Homepage from './container/Homepage';
import UserPage from './container/UserPage';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.onSearchInputChange = this.onSearchInputChange.bind(this);

		this.state = {
			users: [],
			searchString: ''
		};
	}

	componentDidMount() {
		this.getUserList();
	}

	getUserList() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json =>
				this.setState({
					users: json
				})
			)
	}

	onSearchInputChange(e) {
		this.setState({
			searchString: _toLower(e.target.value)
		})
	}

  render() {
		let filteredUser = this.state.users;
		if (!_isEmpty(this.state.searchString)) {
			filteredUser = filteredUser.filter(obj => _toLower(obj.name).match(this.state.searchString))
		}

		let userRow = filteredUser.map((user) =>
				<div className="col-md-4 text-center" key={user.id}>
					<Link to={{
						pathname: `/${user.username}`,
						state: {
							userInfo: user
						}
					}}>
						<p>{user.name}</p>
					</Link>
				</div>
			);

		const searchInputClassNames = classNames(
			{'form-control': true},
			{'search-input': true},
			{'valid': this.state.searchString && !_isEmpty(userRow)},
			{'invalid': this.state.searchString && _isEmpty(userRow)}
		);

    return (
      <div className="App">
				<PageHeader title="Users" />
				<form className="container">
					<div className="row justify-content-md-center form-group">
						<div className="col-sm-3 searchbar-wrapper">
							<input
								type="text"
								value={this.state.searchString}
								onChange={this.onSearchInputChange}
								placeholder="Search Name"
								className={searchInputClassNames}
							/>
						</div>
					</div>
				</form>
				<div className="container">
					<Router>
						<div className="row">
							{!_isEmpty(userRow) ? userRow : <p>No results</p>}
						</div>
						<Route path="/:username" component={UserPage} />
					</Router>
				</div>
				<Footer />
      </div>
    );
  }
}

export default App;
