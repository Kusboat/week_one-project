import React, { Component } from 'react'

export class Container extends Component {
  render() {   
      this.state = {
            head1: "Sedans",
            para: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      }
    /* changeState=(this.state.first)=>{
        this.head1=head1;
        this.para=para;
    } */
    return (
      <div className='card-container'>
        <h1>{this.state.head1}</h1>
        <p>
          {this.state.para}.
        </p>
        <button>Learn More</button>
      </div>
    )
  }
}

export default Container