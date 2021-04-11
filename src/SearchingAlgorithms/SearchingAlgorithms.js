export function linearSearchAnimations(array, target) {
    let animations = [];
    for(let i=0; i< array.length; i++){
        const element = array[i];
        const targetvalue = parseInt(target);
        if(element === targetvalue ) {
            animations.push([i, element, true]);
            break;
        } else{
            animations.push([i,element,false])
        }
    }
    return animations;
}

export function binarySearchAnimations(
    array,
    left,
    right,
    element,
    animations = []
) {
    if(right >= left ){
        let mid = parseInt(left + (right - left) / 2);
        if(array[mid] === element) {
            animations.push([left, right, mid, true]);
        } else if( array[mid] > element) {
            animations.push([left, right, mid, false]);
            binarySearchAnimations(array, left, mid-1, element, animations);
        }else {
            animations.push([left, right, mid, false]);
            binarySearchAnimations(array, mid+1, right, element, animations);
        }
        return false;
    }
}