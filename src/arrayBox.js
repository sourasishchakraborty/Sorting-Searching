import React from 'react';

const ArrayBox = ({idx, val, type}) => type === "binarySearch" ? (
    <div className="b-array-bar">
        {`${val}`}
        <br />
        <span>{`${idx}`}</span>
    </div>
) : (
    <div className="l-array-bar">
        {`${val}`}
        <br/>
        <span>{`${idx}`}</span>
    </div>
);

export default ArrayBox;