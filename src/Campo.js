import React, { Component } from 'react';

class Campo extends Component {
  state = {
    nombre: 'Happy edit',
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.nombre}</h1>
        <p>{this.state.nombre}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, praesentium voluptatum. Assumenda dicta quod error esse porro delectus voluptatem enim fugit, cupiditate id eaque laborum distinctio ratione odit nesciunt veniam?</p>
        <p><b>{this.state.nombre}</b></p>
      
        <input type="text" onInput={(event) => 
          this.setState({ nombre: event.target.value })}
          value={this.state.nombre} />
        
        <button onClick={() => this.setState({ nombre: '' })}>Borrar</button>
        <button>Random</button>
        
        <hr />
      </div>
    );
  }
}

export default Campo;
