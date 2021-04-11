import React, { Component } from 'react';
class HeaderComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container">
                    <div class="row justify-content-center mb-4">
                        <h2>{this.props.name}</h2>
                    </div>
                </div>
         );
    }
}
 
export default HeaderComponent;