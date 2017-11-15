import React, { Component } from 'react';

class PlanetListing extends Component {
  render() {
    return (
      <div className="col-md-4 col-xs-12 planet-listings__planet">
            <a href="#" className="thumbnail">
                <img src={this.props.planet.img} alt={this.props.planet.name} />
                <h3>{this.props.planet.name} <span className="label label-info">New</span></h3>
                <p>{this.props.planet.description}</p>
                <p><a href="#" class="btn btn-default" role="button">View details</a></p>
             </a>
      </div>
    );
  }
}

export default PlanetListing;
