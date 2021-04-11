import React, { Component } from 'react';
import ArrayBox from '../../arrayBox';
import HeaderComponent from '../../Others/HeaderComponent';
import { randomIntFromInterval } from '../../Others/RandomIntFromInterval';
import { binarySearchAnimations } from '../SearchingAlgorithms';

import image from "../../Images/binary_search.gif";


import "./binarySearch.css"
import SearchDescription from '../../Others/SearchDescription';

const NUMBER_OF_ARRAY_BARS = 10;
const DEFAULT_COLOR = "#00FFFF";
const FOUND_COLOR = "#00FF00";
const NOT_FOUND_COLOR = "#008B8B";
const ANIMATION_SPEED_SECONDS = 1;

class BinarySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            found: false,
            disabled: false,
            elementFoundAt: 0,
            target: null,
            msgAfterExecution: null,
            previousLength: 0,
            animations: [], 
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        let array = [];
        const prevArray = document.getElementsByClassName("b-array-bar");
        document.getElementById("target").value ="";
        for(let i = 0;i<prevArray.length;i++){
            prevArray[i].style.backgroundColor = DEFAULT_COLOR;
            prevArray[i].classList.remove("growFind");
            prevArray[i].classList.remove("highlight");
        }

        for (let i=0; i< NUMBER_OF_ARRAY_BARS;i++){
            array.push(randomIntFromInterval(5,850));
        }
        let sortedArray = array.slice().sort((a,b) => a-b);
        this.setState({
            array: sortedArray,
            found: false,
            disabled: false,
            msgAfterExecution: null,
            previousLength: this.state.animations.length
        });
    }

    resetAllTiles(arrayTiles){
        for( let i=0;i<arrayTiles.length;i++){
            arrayTiles[i].style.backgroundColor = DEFAULT_COLOR;
            arrayTiles[i].style.transition = "100ms all";
        }
    }

    highlightWithinBounds(start, end, arrayTiles) {
        for(let i = start; i <= end ; i++){
            arrayTiles[i].style.backgroundColor = NOT_FOUND_COLOR;
            arrayTiles[i].style.transition = "100ms all";
        }
    }

    binarySearch(){
        //console.log("clicked");
        const { array } = this.state;
        const animations = [];
        let count =0;
        const arrayTiles = document.getElementsByClassName("b-array-bar");
        const target = document.getElementById("target").value;
        if(target === "") return;
        var message = '';
        //console.log(target);
        binarySearchAnimations(
            array,
            0,
            array.length - 1,
            parseInt(target),
            animations
        );
        for(let i=0; i < animations.length; i++){
            const [left, right, mid, found] = animations[i];
            console.log(animations[i]);
            count++;
            if( i === animations.length - 1 && found){
                setTimeout(()=> {
                    message = `${target} found at position ${mid}`;
                    this.setState({
                        //msgAfterExecution:`${target} found at position ${mid} `,
                        disabled: true,
                        found: true
                    });
                    this.resetAllTiles(arrayTiles);
                    arrayTiles[mid].classList.add("highlight");
                    arrayTiles[mid].style.backgroundColor = FOUND_COLOR;

                }, (i+1) * ANIMATION_SPEED_SECONDS * 1000);
            }

            if(left === mid && !found ) {
                setTimeout(() => {
                    //console.log("set state invoked");
                    message = `${target} not found`;
                    this.setState({
                        //msgAfterExecution: `${target} not found`,
                        found: false,
                    });
                    this.resetAllTiles(arrayTiles);
                }, (i+1) * ANIMATION_SPEED_SECONDS * 1000);
            }

            setTimeout(()=> {
                this.setState({ disabled: true });
                this.resetAllTiles(arrayTiles);
                this.highlightWithinBounds(left, right, arrayTiles);

            }, i*ANIMATION_SPEED_SECONDS*1000);
        }

        setTimeout(() => {
            this.setState({
                msgAfterExecution: message,
                disabled: false});

        }, count * ANIMATION_SPEED_SECONDS * 1000);

    }
    state = {  }
    render() { 

        const { array, found, disabled, msgAfterExecution } = this.state;

        //console.log(found);
        return ( 
            <div>
                <div className="jumbotron jumbotron-fluid bg-light">
                    <HeaderComponent name = "Binary Search"/>
                    <center>
                        <div className="container">
                            <div className="row">

                                <div className="col-sm-1">

                                </div>
                                <div className="col-sm-10 input-group">
                                    <input type="number" id="target" className="form-control form-control-lg" placeholder="Type the element to find"/>
                                    <div className="input-group-append">
                                        <button 
                                        onClick={() => this.binarySearch()}
                                        className="btn btn-success btn-lg" type="button"
                                        disabled = {disabled} >
                                            Search
                                        </button>
                                        <button onClick={() => this.resetArray()} className="btn btn-danger btn-lg " type="button" disabled={disabled}>
                                            Reset Array
                                        </button>

                                    </div>
                                </div>
                                <div className="col-sm-1">

                                </div>
                            </div>

                        </div>
                        {
                            !found ? (
                                <p className="not-found"> {msgAfterExecution}
                                
                                </p>
                            ) : (
                                <p className="found">{msgAfterExecution}</p>
                            )
                        }
                        
                        <div className="container">
                            {
                                array.map((value, idx) => (
                                    <ArrayBox
                                    type={"binarySearch"}
                                    key={idx}
                                    idx= {idx}
                                    val={value}
                                    />
                                ))
                            }

                        </div>
                    </center>

                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <SearchDescription image = {image} name = "Binary Search" description = {`Binary search algorithm works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form. Binary search looks for a particular item by comparing the middle most item of the collection. If a match occurs, then the index of item is returned. If the middle item is greater than the item, then the item is searched in the sub-array to the left of the middle item. Otherwise, the item is searched for in the sub-array to the right of the middle item. This process continues on the sub-array as well until the size of the subarray reduces to zero.`}/>
                            

                        </div>
                        <div className="col-sm-12">
                        <div class="alert alert-danger text-center" role="alert">
                            <h5>Time Complexity: O(log n)</h5>
                            <h5>Space Complexity: O(1)</h5>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div class="alert alert-primary" role="alert">
                            <h5>Algorithm</h5>
                            <pre className="mt-4">
                            {`Step 1 - Read the search element from the user.

Step 2 - Find the middle element in the sorted list.

Step 3 - Compare the search element with the middle
         element in the sorted list.
Step 4 - If both are matched, then display "Given
         element is found!!!" and terminate the 
         function.
Step 5 - If both are not matched, then check whether
         the search element is smaller or larger than 
         the middle element.
Step 6 - If the search element is smaller than middle
         element, repeat steps 2, 3, 4 and 5 for 
         the left sublist of the middle element.
Step 7 - If the search element is larger than middle
         element, repeat steps 2, 3, 4 and 5 for 
         the right sublist of the middle element.
Step 8 - Repeat the same process until we find the
         search element in the list or until sublist
         contains only one element.
Step 9 - If that element also doesn't match with the
         search element, then display "Element is
         not found in the list!!!" and terminate the 
         function.`}
                            </pre>
                            </div>

                        </div>
                        <div className="col-sm-6">
                        <div class="alert alert-warning" role="alert">
                        <h5>Pseudocode</h5>
                        
                        <pre className="mt-4">
                            {
                        `Procedure binary_search
    A ← sorted array
    n ← size of array
    x ← value to be searched
                     
    Set lowerBound = 1
    Set upperBound = n 
                     
    while x not found
        if upperBound < lowerBound 
            EXIT: x does not exists.
                        
        set midPoint = lowerBound + (upperBound - lowerBound)/2
                           
        if A[midPoint] < x
            set lowerBound = midPoint + 1
                              
        if A[midPoint] > x
            set upperBound = midPoint - 1 
                     
        if A[midPoint] = x 
            EXIT: x found at location midPoint
    end while
                        
end procedure`
                            }
                        </pre>
                        </div>

                        </div>

                    </div>

                </div>
            </div>
         );
    }
}
 
export default BinarySearch;