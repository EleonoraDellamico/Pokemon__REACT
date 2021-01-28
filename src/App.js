import React from 'react';
import Pokelist from "./components/PokeList";
import './App.scss';
import dataPoke from "./data/dataPoke.json";
import logoPokemon from "./image/logoPokemon.png";
 import Footer from "./components/Footer";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: dataPoke
    };
  }

  render() {
    console.log(this.state.pokemon);
    return (

      <div className="App">
      <img  className="titlePage"alt="Title Pokemon" src={logoPokemon} />
        <Pokelist data={this.state.pokemon} />
         <Footer>
          <h4>Pokemon Go</h4>
          <small>Author: Eleonora</small>
        <a className="footer__email" href="mailto:eleonora.dellamico@yahoo.it">eleonora.dellamico@yahoo.it</a>

        </Footer> 
      </div>
    );
  }
}

export default App;
