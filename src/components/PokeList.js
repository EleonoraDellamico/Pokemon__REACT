import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const cards = this.props.data.map((item) => {
      return (
        <li className="list" key={item.id}>
          <Pokemon url={item.url} name={item.name} type={item.types} />
        </li>
      );
    });
    return <ul className="classList">{cards}</ul>;
  }
}

PokeList.propTypes = {
  data: PropTypes.array,
};

export default PokeList;