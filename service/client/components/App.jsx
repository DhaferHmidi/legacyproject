import React, { Component } from 'react';
import Cards from './Card.jsx';
import '../index.css';
import Outfit from './Outfit.jsx';
import ProdectDetails from './ProdectDetails.jsx';

export default class App extends Component {
    constructor(props){
    super(props)
        this.state = {
            style : {
            top: 0,
            left: 0
            }
        }
    }
    handelClickChange(event){
        this.setState({
            style:{
              
            }
        })
    }
    render() {
        return (
            <div>
              <Cards/>
              <Outfit />
            {this.state.ShowComparison&&
              <ProdectDetails />
              }
            </div>
        )
    }
}
