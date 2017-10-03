import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Buttons extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            arr: [9, 8, 7, 6, 5, 4, 3, 2, 1, '+', '-', 'x', '/'], 
        }
    }
    renderButton(){
        return this.state.arr.map((number) => <li onClick={this.props.onButtonClick}>{number}</li>)
    }
    render(){
        return (
            <ul>
                {this.renderButton()}
            </ul>
        )
    }
}


function Display(props) {
    return (
        <div className="screen">
            {props.result}
        </div>
    );
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "0",
        }
    }
    handleClick(e) {
        let newResult = this.state.result + e.target.innerHTML;
        this.setState({
            result: newResult,
        })
    }
    
    render() {
        return (
            <div className="calculator">
                <Display result={this.state.result}/>
                <Buttons onButtonClick={this.handleClick.bind(this)} />
            </div>
        );
    }
}
ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);