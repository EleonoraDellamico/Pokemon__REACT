import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const typeList = this.props.type.map((item, index) => {
      return (
        <li className="list" key={index}>
          {item}
        </li>
      );
    });
    return (
      <div className="card">
        <img src={this.props.url} alt={this.props.name} className="pokemonImg" />
        <h2 className="name">{this.props.name}</h2>
        <li className="typeList">{typeList}</li>
      </div>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string),
};
export default Pokemon;














