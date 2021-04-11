import React, { Component } from 'react';
import './style.css';

class SearchSortingDescription extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">{this.props.name}</h4>
                <p>{this.props.description}</p>

                
                </div>
            </div>
         );
    }
}
//src\SearchingAlgorithms\LinearSearch\linear_search.gif
export default SearchSortingDescription;
