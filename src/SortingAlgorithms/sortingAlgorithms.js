/* Bubble Sort */

export function getBubbleSortAnimations(array) {
    let animations = [];
    let auxArray = array.slice();
    doBubbleSort(auxArray, animations);
    array = auxArray;
    return animations;
  }
  
  function doBubbleSort(auxArray, animations) {
    for (let i = 0; i < auxArray.length - 1; i++) {
      for (let j = 0; j < auxArray.length - 1 - i; j++) {
        //push once to color
        animations.push([
          j, j + 1
        ]);
        //push second time to uncolor?
        animations.push([
          j, j + 1
        ]);
        if (auxArray[j] > auxArray[j + 1]) {
          //swap
          animations.push([
            j + 1,
            auxArray[j]
          ]);
          animations.push([
            j,
            auxArray[j + 1]
          ]);
  
          let tmp = auxArray[j + 1];
          auxArray[j + 1] = auxArray[j];
          auxArray[j] = tmp;
        } else {
          // if -1 then there was no swap
          animations.push([-1, -1]);
          animations.push([-1, -1]);
          //not sure if twice
        }
      }
    }
  }

  /* Selection sort */

  export function getSelectionSortAnimations(array){
    const animations = [];
    doSelectionSort(array,animations);
    return animations;
  }
  function doSelectionSort(array,animations){
    for(let i=0;i<array.length-1;i++){
      let min_index = i;
      for(let j=i+1;j < array.length;j++){
        animations.push([min_index, j]);
        animations.push([min_index, j]);
        animations.push([
          0, array[0]
        ]);
        animations.push([
          0,array[0]
        ]);
        if(array[j] < array[min_index]){
          min_index = j;
        }
      }
      animations.push([i, min_index]);
      animations.push([i,min_index]);
      animations.push([
        i, array[min_index]
      ]);
      animations.push([
        min_index, array[i]
      ]);
      let temp = array[min_index];
      array[min_index] = array[i];
      array[i] = temp;

    }
  }

