import React, { Component } from 'react';
import ArrayBox from '../../arrayBox';
import SearchDescription from '../../Others/SearchDescription';
import { linearSearchAnimations } from '../SearchingAlgorithms';
import { randomIntFromInterval } from './../../Others/RandomIntFromInterval';
import "./linearSearch.css";

import image from "../../Images/linear_search.gif";
import HeaderComponent from '../../Others/HeaderComponent';

const NUMBER_OF_ARRAY_BARS = 10;
const DEFAULT_COLOR = "#00FFFF";
const FOUND_COLOR = "#00FF00";
const NOT_FOUND_COLOR = "#008B8B";
const ANIMATION_SPEED_SECONDS = 1;

class LinearSearch extends Component {

    constructor(props){
        super(props);

        this.state = {
            array: [],
            found: false,
            disabled: false,
            elementFoundAt: 0,
            target: null,
            msgAfterExecution: ""
        }
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array =[];
        const found = false;
        const disabled = false;
        const previousArray = document.getElementsByClassName("l-array-bar");
        document.getElementById("target").value = "";

        for(let idx = 0; idx < previousArray.length; idx++){
            previousArray[idx].style.backgroundColor = DEFAULT_COLOR;
            previousArray[idx].classList.remove("growFind");
            previousArray[idx].classList.remove("highlight");
        }
        for(let i=0;i< NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(5,730));
        }
        this.setState({array,found,disabled,msgAfterExecution:""});

    }

    linearSearch(){
        var message = "";
        const target = document.getElementById("target").value;
        if(target === "") return;
        //console.log(target);
        const animations = linearSearchAnimations(this.state.array, target);
        //console.log(animations);

        let count = 0;
        for(let i=0;i<animations.length;i++){
            const [idx,currenetElement, foundStatus] = animations[i];

            const arrayBars = document.getElementsByClassName("l-array-bar");
            const arrayBar = arrayBars[idx];
            const arrayBarStyle = arrayBar.style;

            count++;

            if(foundStatus) {
                message = `${currenetElement} found at index ${idx}`;
                setTimeout(() => {
                    this.setState({
                        found: true,
                        disabled: true,
                        elementFoundAt: idx,
                        target: currenetElement
                    });
                    arrayBarStyle.backgroundColor = FOUND_COLOR;
                    arrayBar.classList.add("growFind");
                    arrayBar.classList.add("highlight");
                }, i * ANIMATION_SPEED_SECONDS * 1000);
                break;
            } else  {
                message = `${target} not found`;
                setTimeout(()=> {
                    this.setState({
                        found: false,
                        disabled: true,
                    });
                    arrayBarStyle.backgroundColor = NOT_FOUND_COLOR;
                    arrayBar.classList.add("growFind");
                }, i * ANIMATION_SPEED_SECONDS * 1000);

            }

        }
        setTimeout(() => {
            this.setState({
                disabled: false,
                msgAfterExecution: message,

            });
            }, (count+1) * ANIMATION_SPEED_SECONDS * 1000);
        
    }
    state = {  }
    render() { 

        const { array, found, disabled, msgAfterExecution } = this.state;
        //console.log(found);
        //console.log(msgAfterExecution);
        //console.log(array);
        //console.log("clickwd");
        return ( 
            <div>
                
                <div className="jumbotron jumbotron-fluid bg-light">
                <HeaderComponent name = "Linear Search"/>
                    <center>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-1">

                                </div>
                                <div className="input-group col-sm-10">
                                    <input type="number" id="target" className="form-control form-control-lg" placeholder="Type the element to find"/>
                                    <div className="input-group-append">
                                        <button 
                                        onClick={()=>this.linearSearch()}className="btn btn-lg btn-success " type="button" 
                                        disabled={disabled}
                                        >
                                            Search
                                        </button>
                                        <button onClick={() => this.resetArray()} className="btn btn-lg btn-danger" id="resetArray" type="button" disabled={disabled}>
                                            Reset Array
                                        </button>

                                    </div>
                                </div>
                                <div className="col-sm-1">

                                </div>
                            </div>

                        </div>
                        {
                            found ? (
                                <p className="found growFind">
                                    {msgAfterExecution}
                                </p>
                            ) : (
                                <p className="not-found growFind">
                                    {msgAfterExecution}
                                </p>
                            )
                        }
                        <div className="conatiner">
                            {array.map((value, idx) => (
                                <ArrayBox
                                    type={`linearSearch`}
                                    key={idx}
                                    idx={idx}
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
                            <SearchDescription image = {image} name = "Linear Search" description = "Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection. "/>

                        </div>
                        <div className="col-sm-12">
                        <div class="alert alert-danger text-center" role="alert">
                            <h5>Time Complexity: O(n)</h5>
                            <h5>Space Complexity: O(1)</h5>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div class="alert alert-primary" role="alert">
                            <h5>Algorithm</h5>
                            <pre>
                            {`Linear Search ( Array A, Value x)

Step 1: Set i to 1
Step 2: if i > n then go to step 7
Step 3: if A[i] = x then go to step 6
Step 4: Set i to i + 1
Step 5: Go to Step 2
Step 6: Print Element x Found at index i and go to step 8
Step 7: Print element not found
Step 8: Exit`}
                            </pre>
                            </div>

                        </div>
                        <div className="col-sm-6">
                        <div class="alert alert-warning" role="alert">
                        <h5>Pseudocode</h5>
                        
                        <pre className="mt-4">
                            {
                        `procedure linear_search (list, value)

    for each item in the list
        if match item == value
            return the item's location
        end if
    end for
                     
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
 
export default LinearSearch;