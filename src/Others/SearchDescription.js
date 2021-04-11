import React, { Component } from 'react';
import './style.css';

class SearchDescription extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">{this.props.name}</h4>
                <p>{this.props.description}</p>

                <hr></hr>
                <img src={this.props.image} class="rounded mx-auto d-block full-image"></img>
                </div>
            </div>
         );
    }
}
//src\SearchingAlgorithms\LinearSearch\linear_search.gif
export default SearchDescription;
