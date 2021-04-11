import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FooterComponent from './Others/FooterComponent';
import NavbarComponent from './Others/NavbarComponent';
import BinarySearch from './SearchingAlgorithms/BinarySearch/binarySearch';
import LinearSearch from './SearchingAlgorithms/LinearSearch/linearSearch';
import bubbleSort from './SortingAlgorithms/BubbleSort/bubbleSort';
import selectionSort from './SortingAlgorithms/SelectionSort/selectionSort';
//import Route from 'react-router-dom';
class App extends Component {
  state = {  }
  
  render() { 

    return ( 
        <div>
          <NavbarComponent/>
          <Route exact path="/linearsearch" component={LinearSearch} />
          <Route path="/binarysearch" component={BinarySearch} />
          <Route path="/bubblesort" component={bubbleSort}/>
          <Route path="/selectionsort" component={selectionSort}/>
          <FooterComponent/>
        </div>
        
        
      
      

     );
  }
}
 
export default App;

