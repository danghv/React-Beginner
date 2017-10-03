import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Child(props) {
    return (
        <button className="child-style" onClick={props.colich} >I am child, my background is grey. Click me, then i pass to my grandchild</button>
    );
}

class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: "",
        }
    }
    handleClick(e) {
        this.setState({
            content: e.target.innerHTML,
        })
    }
    render() {
        return (
            <div buff={this.content} className="parent-style">
                <h1>I am parent, my background is green </h1>
                <Child colich={this.handleClick.bind(this)}/>
            </div>
        );
    }
}

class GrandParents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "",
        }
    }
    takeData(){
        this.setState()
    }
    render() {
        return (
            <div className="grandparents-style">
                <h1>I am grandparents, my background is blue</h1>
                <div className="display">{this.state.display}</div>
                <Parent />
            </div>
        );
    }
}
ReactDOM.render(<GrandParents />, document.getElementById('root'));

