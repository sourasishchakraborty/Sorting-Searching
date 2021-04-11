import React, { Component } from 'react';
import HeaderComponent from '../../Others/HeaderComponent';
import { randomIntFromInterval } from '../../Others/RandomIntFromInterval';
import SearchSortingDescription from '../../Others/SearchSortingDescription';
import { getBubbleSortAnimations } from '../sortingAlgorithms';
import "./bubbleSort.css";
import BubbleSort from './bubbleSortAnimation';
const PRIMARY_COLOR = "rgb(255, 198, 92)";
const SECONDARY_COLOR = "#1a1d20";

class bubbleSort extends Component {

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
        this.enableBubbleButton();
    }
    disableButtons(){
        document.getElementById("shuffle").disabled = true;
        document.getElementById("bubble").disabled = true;
    }
    enableButtons(){
        document.getElementById("shuffle").disabled = false;
        document.getElementById("bubble").disabled = false;
    }
    enableShuffleButtons(){
        document.getElementById("shuffle").disabled = false;
        // setTimeout(() => {
        //     this.enableBubbleButton();

        // },1000);

    }
    enableBubbleButton(){
        document.getElementById("bubble").disabled = false;

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
                    <HeaderComponent name = "Bubble Sort"/>

                </div>
                

                <BubbleSort/>
            <div className="container">
                
            <div className="row mt-4">
                <div className="col-md-12">
                <div className="text-center mt-1">
                    <h4>Bubble Sort Using Random Input </h4>
                </div>
                <div class="d-flex justify-content-center mt-3">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <button id="shuffle" type="button" className="btn btn-secondary boot-background boot-color boot-hover" onClick={() => this.resetArray()}>Shuffle</button>
                    <button type="button" id="bubble" className="btn btn-outline-secondary boot-background boot-color boot-hover ml-2" onClick={() => this.bubbleSort()}>Bubble Sort</button>

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
                        <SearchSortingDescription name = "Bubble Sort" description = {`Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n²) where n is the number of items.`}/>
                        

                    </div>
                    <div className="col-sm-12">
                        <div class="alert alert-danger text-center" role="alert">
                            <h5>Time Complexity(Best): O(n)</h5>
                            <h5>Time Complexity(Average): O(n<sup>2</sup>)</h5>
                            <h5>Time Complexity(Worst): O(n<sup>2</sup>)</h5>

                            <h5>Space Complexity: O(1)</h5>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div class="alert alert-primary" role="alert">
                            <h5>Algorithm</h5>
                            <pre className="mt-4">
                            {`begin BubbleSort(list)

for all elements of list
   if list[i] > list[i+1]
      swap(list[i], list[i+1])
   end if
end for

return list

end BubbleSort`}
                            </pre>
                            </div>

                        </div>
                        <div className="col-sm-6">
                        <div class="alert alert-warning" role="alert">
                        <h5>Pseudocode</h5>
                        
                        <pre className="mt-4">
                            {
                        `procedure bubbleSort( list : array of items )
loop = list.count;
    for i = 0 to loop-1 do:
        swapped = false
        for j = 0 to loop-1 do:
            /* compare the adjacent elements */   
            if list[j] > list[j+1] then
                /* swap them */
                swap( list[j], list[j+1] )		 
                swapped = true
            end if
        end for
        /*if no number was swapped that means 
        array is sorted now, break the loop.*/
            if(not swapped) then
                break
            end if
    end for
end procedure return list`
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

    bubbleSort() {
        this.disableButtons();
        let array = this.state.array;
        let animations = getBubbleSortAnimations(array);
        let count = 0;
        //console.log(animations);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName("array-bar");
          const arrayBarsWithNo = document.getElementsByClassName("array-container");
          const numbersBars = document.getElementsByClassName("numbers");
          const colorChange = i % 4 === 0 || i % 4 === 1;
          count++;
          if (colorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const barOneStyleNo = arrayBarsWithNo[barOneIdx].style;
            const barTwoStyleNo = arrayBarsWithNo[barTwoIdx].style;
    
            setTimeout(() => {
              const color = i % 4 === 0
                ? SECONDARY_COLOR
                : PRIMARY_COLOR;
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
              barOneStyleNo.backgroundColor = color;
              barTwoStyleNo.backgroundColor = color;
            }, i * this.state.speed);
          } else {
            const [barOneIdx, newHeight] = animations[i];
            if (barOneIdx === -1) {
              continue;
            }
            const barOneStyle = arrayBars[barOneIdx].style;
            let newH = newHeight;
            newH = newH.toString().replace("px", "");
    
            setTimeout(() => {
              numbersBars[barOneIdx].textContent = newH;
              barOneStyle.height = `${newHeight}px`;
            }, i * this.state.speed);
          }
        }
        setTimeout(() => {
            this.enableShuffleButtons();

        },count * this.state.speed);
        
      } 
}
 
export default bubbleSort;