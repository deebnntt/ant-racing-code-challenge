import React from 'react';
import AntCard from './AntCard.js';

export default class DefinitionContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ants: [],
		};
	}

	componentDidMount() {
	}

  // mapAnts = () => {
  //   return ants.map((ant) => (
  //       <AntCard className="antCard" ant={ant} />
  //   ))
  // }

	render() {
		console.log('Container');
		return (
			<div className="container">
        <p>Hi</p>
			</div>
		);
	}
}
