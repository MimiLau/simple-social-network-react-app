import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
	constructor(props) {
		super(props);

		// this.onFilterClick = this.onFilterClick.bind(this);
		// this.onSortClick = this.onSortClick.bind(this);
		// this.onDeleteFilterClick = this.onDeleteFilterClick.bind(this);
		// this.onSearchInputChange = this.onSearchInputChange.bind(this);

		this.state = {
			users: [],
			filterType: null,
			reverseSorting: false,
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

	render() {
		return (
			<div className="container">
				<div className="row">
					{this.state.users.map((user) => {
						return (
							<div className="col-md-4 text-center">
								<p>{user.name}</p>
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

// const UserList = (props) => (
// 	<h1 className="text-xs-center backArrow">
// 		{props.title}
// 	</h1>
// );
//
// UserList.propTypes = {
// 	title: PropTypes.string
// };

export default UserList;
