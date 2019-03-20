import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = (props) => (
	<header className="header">
		<div className="container">
			<h1 className="text-center">
				{props.title}
			</h1>
		</div>
	</header>
);

PageHeader.propTypes = {
	title: PropTypes.string
};

export default PageHeader;
