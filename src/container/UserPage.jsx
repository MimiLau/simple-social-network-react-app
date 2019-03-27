import React, { Component } from 'react';
import { Link } from "react-router-dom";

import _isEmpty from 'lodash/isEmpty';

import PageHeader from '../components/PageHeader';

class UserPage extends Component {
	constructor(props) {
		super(props);

		// this.onSearchInputChange = this.onSearchInputChange.bind(this);

		this.state = {
			albums: []
		};
	}

	componentDidMount() {
		this.getUserAlbums(this.props.location.state.userInfo.id);
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.state.userInfo !== prevProps.location.state.userInfo) {
			this.getUserAlbums(this.props.location.state.userInfo.id);
		}
	}

	getUserAlbums(userId) {
		fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
			.then(response => response.json())
			.then(json =>
				this.setState({
					albums: json
				})
			)
	}

  render() {
		let userInfo = this.props.location.state.userInfo
		// console.log(userInfo)
		console.log(this.state)
    return (
      <div className="Homepage">
				<Link to="/">Home</Link>
				<PageHeader title={userInfo.name} />
				<div className="initial-wrapper"><div className="initial-letter">{userInfo.name[0]}</div></div>
				<p>phone: {userInfo.phone}</p>
				<p>username: {userInfo.username}</p>
				<p>email: {userInfo.email}</p>
				<p>website: {userInfo.website}</p>
				<hr />
				<h2>Photo Album</h2>
				{!_isEmpty(this.state.albums) &&
					<div className="row">
						{!_isEmpty(this.state.albums) && this.state.albums.map((album) =>
							<div className="col-md-3 pb-4">{album.title}</div>
						)}
					</div>
				}
				<hr />
				<h2>TODO's</h2>
				<hr />
				<h2>Posts</h2>
      </div>
    );
  }
}

export default UserPage;
