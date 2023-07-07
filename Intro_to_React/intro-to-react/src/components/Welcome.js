import React from "react";

export default function Welcome(props) {
    const sum = (x, y) => x+y;

    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <h4>Sum of 1+1 is {sum(1,1)}.</h4>
        </div>
    )
    
}

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}!</h1>;
//     }
// }


// export default Welcome;