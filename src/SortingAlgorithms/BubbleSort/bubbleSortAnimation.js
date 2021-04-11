import React, { Component } from 'react';
import './bubbleSortAnimations.css';

class BubbleSort extends Component {
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
    reload(){
        window.location.reload();
    }




    columnHandler() {

        let buttonElement = document.querySelector('.button');

        let current = buttonElement.getAttribute('data-id').split('-');

        let currentPhase1 = Number(current[0]);
        let currentPhase2 = Number(current[1]);
        let currentPhase3 = Number(current[2]);

        if (currentPhase2 < currentPhase3) {

            if (currentPhase1 === 0) {
                let element1Phase1 = document.querySelector(`.box-${currentPhase2}`);
                let element2Phase1 = document.querySelector(`.box-${currentPhase2 + 1}`);

                let compareNumber1 = Number(element1Phase1.innerHTML);
                let compareNumber2 = Number(element2Phase1.innerHTML);

                if (compareNumber1 > compareNumber2){
                    document.querySelector('.alert').innerHTML = `Compare <b>Element-${currentPhase2}</b> and <b>Element-${currentPhase2 + 1}</b>. The value of <b>element-${currentPhase2}</b> is greater that the value of <b>element-${currentPhase2 + 1}</b>`;
                } else {
                    document.querySelector('.alert').innerHTML = `Compare <b>Element-${currentPhase2}</b> and <b>Element-${currentPhase2 + 1}</b>. The value of <b>element-${currentPhase2}</b> is not greater that the value of <b>element-${currentPhase2 + 1}</b>`;
                }

                element1Phase1.setAttribute('id', "bg_active");
                element2Phase1.setAttribute('id', "bg_active");

                // document.querySelector('.alert').innerHTML = `Compare <b>Element-${currentPhase2}</b> and <b>Element-${currentPhase2 + 1}</b>.`

                buttonElement.setAttribute('data-id', `1-${currentPhase2}-${currentPhase3}`);

            } else {

                let inactiveElementIndex = currentPhase2 + 1;

                // Set the data-id value to the button
                buttonElement.setAttribute('data-id', `0-${inactiveElementIndex}-${currentPhase3}`);

                // Fetch the active element
                let element1 = document.querySelector(`.box-${currentPhase2}`);
                let element1style = window.getComputedStyle(element1).getPropertyValue('left');
                let number1 = Number(element1.innerHTML);

                // Fetch the next element of the active element
                let element2 = document.querySelector(`.box-${inactiveElementIndex}`);
                let element2style = window.getComputedStyle(element2).getPropertyValue('left');
                let number2 = Number(element2.innerHTML);


                if (number1 > number2) {
                    // Positioning the elements
                    element1.style.left = element2style;
                    element2.style.left = element1style;

                    // Set the class names of active element
                    element1.classList.remove(element1.classList[2]);
                    element1.classList.add(`box-${inactiveElementIndex}`);

                    // Set the class name of next element of the active element
                    element2.classList.remove(element2.classList[2]);
                    element2.classList.add(`box-${currentPhase2}`);

                    document.querySelector('.alert').innerHTML = `Let <b>swap</b> the <b>element-${currentPhase2}</b> and <b>element-${inactiveElementIndex}</b>`;
                } else {
                    document.querySelector('.alert').innerHTML = `Do Nothing`;
                }

                // change color according to the sort
                if (currentPhase3 === inactiveElementIndex) {
                    element1.setAttribute('id', 'bg_inactive');
                    element2.setAttribute('id', 'bg_sorted');
                } else {
                    element1.setAttribute('id', 'bg_inactive');
                    element2.setAttribute('id', 'bg_inactive');
                }

            }
        } else {
            buttonElement.setAttribute('data-id', `0-0-${currentPhase3 - 1}`);
            
            let pass = this.state.values.length - currentPhase3;

            if (pass === this.state.values.length - 1){
                document.querySelector('.alert').innerHTML = `<b>Array is sorted</b>`;
            } else if (pass < this.state.values.length - 1){
                document.querySelector('.alert').innerHTML = `Done the <b>pass-${pass}</b>. Lets go to the <b>pass-${pass+1}</b>`;
            } else {
                document.querySelector('.alert').innerHTML = `<b>Array is sorted</b>`;
            }
        }




    }


    render() {
        return (
            <div>
                <div>
                    <div className="alert alert-success text_align_center mt-4" role="alert">
                        Starting <b>Bubble Sort.</b> For each pass, we will move <b>left to right swapping</b> adjacent elements as needed. Each pass moves the next largest element into its final position.<br/><b>Starting Pass 1.</b>
                    </div>
                </div>
                <div className="container container1">
                    <div className="row">
                        <div className="col-md-12">
                        {
                        this.state.values.map((value, index) => {

                            let position = (1000 / this.state.values.length) * index;
                            let width = (1000 / this.state.values.length) - 15;
                            let height = value['value'] * 20;

                            return <div className={"column bg_active box-" + index} id="bg_inactive" key={index} style={{ left: position, width: width, marginLeft: '10px', height: `${height}px` }} data-id="2">{value['value']}</div>

                        })
                    }
                        </div>
                    </div>
                    
                </div>
                <button onClick={() => this.columnHandler()} data-id={'0-0-' + (this.state.values.length - 1)} className="button btn btn-success" type="button">Next</button>
                <button onClick={() => this.reload()} className="button btn btn-primary" type="button">Refresh</button>
            </div>
        );
    }
}

export default BubbleSort;