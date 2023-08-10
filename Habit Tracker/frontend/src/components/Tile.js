import React from 'react';

export default function Tile(props) {
    const {children} = props;
    const divStyle = {
        boxShadow: "0px 10px 20px rgba(2, 52, 65, 0.2)"
    }

    return <div style={divStyle}>{children}</div>;

}