import React, { Component } from 'react';


class ResourceList extends Component {

	render() {
		console.log(this.props.resources)
		return (
			<div>
			<h1>Resource List</h1>
			<button onClick={this.props.loadResources}>Load Reources</button>
			</div>
		)
	}

}

export default ResourceList;