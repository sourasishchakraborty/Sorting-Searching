import React, { Component } from 'react';
import './selectionSortAnimations.css';

class SelectionSort extends Component {
    state = {
        values: [
            { 'value': 10, },
            { 'value': 7, },
            { 'value': 14, },
            { 'value': 9, },
            { 'value': 2, },
            { 'value': 18, },
            { 'value': 20, },
        ],
    }




    columnHandler() {

        // 0-0-1-10-11-0-10
        // selection-element1-element2-element1Value-element2Value

        let array = this.state.values;
        let arrayLength = array.length;

        let buttonElement = document.querySelector('.button');

        let current = buttonElement.getAttribute('data-id').split('-');

        let currentPhase1 = Number(current[0]);
        let firstElement = Number(current[1]);
        let nextElement = Number(current[2]);
        let element1Value = Number(current[3]);
        let element2Value = Number(current[4]);
        let lowestElement = Number(current[5]);
        let lowestElementValue = Number(current[6]);

        

        if (nextElement <= (arrayLength - 1)){

            if (currentPhase1 === 0){

                let element1 = document.querySelector(`.box-${firstElement}`);
                let element2 = document.querySelector(`.box-${nextElement}`);
                
                element1.setAttribute('id', 'bg_sorted');
                element2.setAttribute('id', 'bg_active')
                
                buttonElement.setAttribute('data-id', `1-${firstElement}-${nextElement}-${element1Value}-${element2Value}-${lowestElement}-${lowestElementValue}`);
            } else {

                
                if (element2Value > element1Value) {

                    if (nextElement <= arrayLength - 2){

                        let element1 = document.querySelector(`.box-${firstElement}`);
                        let element2 = document.querySelector(`.box-${nextElement}`);
                        let lowestElementHtml = document.querySelector(`.box-${lowestElement}`)

                        let element2_value = Number(document.querySelector(`.box-${nextElement + 1}`).innerHTML);
                        buttonElement.setAttribute('data-id', `0-${firstElement}-${nextElement + 1}-${element1Value}-${element2_value}-${lowestElement}-${lowestElementValue}`)
                        element2.setAttribute('id', 'bg_inactive');
                        // console.log(nextElement + 1)

                    } else if (nextElement === arrayLength - 1){

                        let element2 = document.querySelector(`.box-${nextElement}`);
                        
                        buttonElement.setAttribute('data-id', `0-${firstElement}-${nextElement + 1}-${element1Value}-${element2Value}-${lowestElement}-${lowestElementValue}`)
                        element2.setAttribute('id', 'bg_inactive');
                    }

                } else {

                    if (element2Value < lowestElementValue) {

                        let element2 = document.querySelector(`.box-${nextElement}`);

                        let previousElement = document.querySelector(`.box-${lowestElement}`);
                        previousElement.setAttribute('id', 'bg_inactive'); 
    
                        let element2_value = Number(document.querySelector(`.box-${nextElement + 1}`).innerHTML);

                        buttonElement.setAttribute('data-id', `0-${firstElement}-${nextElement + 1}-${element1Value}-${element2_value}-${nextElement}-${element2Value}`);

                        element2.setAttribute('id', 'bg_selet');
    
    

                    } else {


                        let element2 = document.querySelector(`.box-${nextElement + 1}`);
                        let element2_value = element2.innerHTML;

                        buttonElement.setAttribute('data-id', `0-${firstElement}-${nextElement + 1}-${element1Value}-${element2_value}-${lowestElement}-${lowestElementValue}`)

                        document.querySelector(`.box-${nextElement}`).setAttribute('id', 'bg_inactive')

                    }

                }


                
            }
        } else {

            let element1 = document.querySelector(`.box-${firstElement}`);
            let lowestElementHtml = document.querySelector(`.box-${lowestElement}`)

            let element1Style = window.getComputedStyle(element1).getPropertyValue('left');
            let lowestElementStyle = window.getComputedStyle(lowestElementHtml).getPropertyValue('left');

            element1.style.left = lowestElementStyle;
            element1.setAttribute('id', 'bg_inactive');
            element1.classList.remove(`box-${firstElement}`);
            element1.classList.add(`box-${lowestElement}`)

            lowestElementHtml.style.left = element1Style;
            lowestElementHtml.setAttribute('id', 'bg_selected');
            lowestElementHtml.classList.remove(`box-${lowestElement}`);
            lowestElementHtml.classList.add(`box-${firstElement}`);

            if ((firstElement + 1) < arrayLength -1){
                let element1Value = document.querySelector(`.box-${firstElement + 1}`).innerHTML;
                let element2_value = document.querySelector(`.box-${firstElement + 2}`).innerHTML;

                buttonElement.setAttribute('data-id', `0-${firstElement + 1}-${firstElement + 2}-${element1Value}-${element2_value}-${firstElement + 1}-${element1Value}`)
            }



        }






        console.log(buttonElement.getAttribute('data-id'));
        





    }
    reload(){
        window.location.reload();
    }


    render() {
        return (
            <div>
                <div>
                    {/* <div className="alert alert-success text_align_center" role="alert">
                        Starting <b>Bubble Sort.</b> For each pass, we will move <b>left to right swapping</b> adjacent elements as needed. Each pass moves the next largest element into its final position.<br/><b>Starting Pass 1.</b>
                    </div> */}
                </div>
                <div className="container container1">
                    {
                        this.state.values.map((value, index) => {

                            let position = (1000 / this.state.values.length) * index;
                            let width = (1000 / this.state.values.length) - 15;
                            let height = value['value'] * 20;

                            return <div className={"column1 bg_active box-" + index} id="bg_inactive" key={index} style={{ left: position, width: width, marginLeft: '10px', height: `${height}px` }} data-id="2">{value['value']}</div>

                        })
                    }
                </div>
                <button onClick={() => this.columnHandler()} data-id={'0-0-1-10-7-0-10'} className="button btn btn-success" type="button">Next</button>
                <button onClick={() => this.reload()} className="button btn btn-primary" type="button">Refresh</button>
            </div>
        );
    }
}

export default SelectionSort;