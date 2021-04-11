import React, { Component } from 'react';
import HeaderComponent from '../../Others/HeaderComponent';
import { randomIntFromInterval } from '../../Others/RandomIntFromInterval';
import SearchSortingDescription from '../../Others/SearchSortingDescription';
import { getBubbleSortAnimations, getSelectionSortAnimations } from '../sortingAlgorithms';
import "./selectionSort.css";
import SelectionSort from './selectionSortAnimation';
const PRIMARY_COLOR = "rgb(255, 198, 92)";
const SECONDARY_COLOR = "#1a1d20";
const THIRD_COLOR = "rgb(255, 198, 92)";


class selectionSort extends Component {

    constructor(props){
        super(props);
        this.state = {
            array:[],
            array_length:10,
            speed:90
        };
    }

    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array = [];
        for(let i=0;i<this.state.array_length;i++) {
            array.push(randomIntFromInterval(10,500));
        }
        this.setState({array});
        this.enableSelectionButton();
    }
    disableButtons(){
        document.getElementById("shuffle").disabled = true;
        document.getElementById("selection").disabled = true;
    }
    enableButtons(){
        document.getElementById("shuffle").disabled = false;
        document.getElementById("selection").disabled = false;
    }
    enableShuffleButtons(){
        document.getElementById("shuffle").disabled = false;
        
    }
    enableSelectionButton(){
        document.getElementById("selection").disabled = false;

    }
    state = {  }
    render() { 
        const {array} = this.state;
        //console.log(array);
        let bar_size = "33px";
        const len = this.state.array_length; 
        return (
            <div className="container">
                <div className="mt-4">
                    <HeaderComponent name = "Selection Sort"/>

                </div>
                
                <SelectionSort/>
                <div className="container">
            <div className="row mt-4">
                <div className="col-md-12">
                <div className="text-center mt-1">
                    <h4>Selection Sort Using Random Input </h4>
                </div>
                <div class="d-flex justify-content-center mt-3">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <button id="shuffle" type="button" className="btn btn-secondary boot-background boot-color boot-hover" onClick={() => this.resetArray()}>Shuffle</button>
                    <button type="button" id="selection" className="btn btn-outline-secondary boot-background boot-color boot-hover ml-2" onClick={() => this.selectionSort()}>Selection Sort</button>

                </div>
                </div>
                
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    
                    <div class="d-flex justify-content-center">
                    <div className="nav-bar">
                
                {
                    array.map((value, idx) => (
                        <div className="array-container" key={idx}>
                            <div className="numbers" id="numbers" textcontent={value} style={{fontSize: "90%", textAlign:"center"}}>
                                {value}
                            </div>
                            <div className="array-bar" style={{height: `${value}px`, width: bar_size}}>

                            </div>
                        </div>
                    ))
                }
            </div> 
                    </div>
                    </div>

                </div>

            </div>
     
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <SearchSortingDescription name = "Selection Sort" description = {`Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list. The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right. This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n²), where n is the number of items.`}/>
                        

                    </div>
                    <div className="col-sm-12">
                        <div class="alert alert-danger text-center" role="alert">
                            <h5>Time Complexity(Best): O(n<sup>2</sup>)</h5>
                            <h5>Time Complexity(Average): O(n<sup>2</sup>)</h5>
                            <h5>Time Complexity(Worst): O(n<sup>2</sup>)</h5>

                            <h5>Space Complexity: O(1)</h5>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div class="alert alert-primary" role="alert">
                            <h5>Algorithm</h5>
                            <pre className="mt-4">
                            {`Step 1 − Set MIN to location 0
Step 2 − Search the minimum element in the list
Step 3 − Swap with value at location MIN
Step 4 − Increment MIN to point to next element
Step 5 − Repeat until list is sorted`}
                            </pre>
                            </div>

                        </div>
                        <div className="col-sm-6">
                        <div class="alert alert-warning" role="alert">
                        <h5>Pseudocode</h5>
                        
                        <pre className="mt-4">
                            {
                        `procedure selection sort 
    list  : array of items
    n     : size of list
    for i = 1 to n - 1
    /* set current element as minimum*/
        min = i    
        /* check the element to be minimum */
        for j = i+1 to n 
            if list[j] < list[min] then
                min = j;
            end if
        end for
       /*swap the minimum element with the current element*/
       if indexMin != i  then
           swap list[min] and list[i]
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
            </div>
            
        
        
        );
    }

    selectionSort(){
        this.animateAlgo(getSelectionSortAnimations(this.state.array));
    }

    animateAlgo(animations){
        this.disableButtons();
        let count = 0;
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            const arrayBarsWithNo = document.getElementsByClassName("array-container");
            const numbersBars = document.getElementsByClassName("numbers");
            const colorChange = i % 4 <= 1;
            count++;
            if (colorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const barOneStyleNo = arrayBarsWithNo[barOneIdx].style;
              const barTwoStyleNo = arrayBarsWithNo[barTwoIdx].style;
              const color = i % 4 === 0
                ? SECONDARY_COLOR
                : THIRD_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                barOneStyleNo.backgroundColor = color;
                barTwoStyleNo.backgroundColor = color;
              }, i * this.state.speed);
            } else {
              const [, newHeight] = animations[i];
              let newH = newHeight;
              newH = newH.toString().replace("px", "");
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                numbersBars[barOneIdx].textContent = newH; //
                barOneStyle.height = `${newHeight}px`;
              }, i * this.state.speed);
            }
        }
        setTimeout(() => {
            this.enableShuffleButtons();

        },count * this.state.speed);
    }

    
}
 
export default selectionSort;