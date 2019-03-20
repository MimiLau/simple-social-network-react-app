import React, { Component } from 'react';

import PageHeader from '../components/PageHeader';
import UserList from '../components/UserList';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
				<PageHeader title="Users" />
				<UserList />
      </div>
    );
  }
}

export default Homepage;
