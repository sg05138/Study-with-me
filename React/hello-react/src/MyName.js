import React, {Component} from 'react';

class Counter extends Component{
    state ={
        number:0,
       
    }
    handleIncrease=()=>{
        this.setState({
            number: this.state.number + 1,
            
        });
    }
    handleDecrease = () =>{
        this.setState({
            number: this.state.number -1
        });
    }
    render(){
        const {
            handleDecrease,
            handleIncrease
        } = this;
        return(
            <div>
                <h1>카운터</h1>
                <div>값:{this.state.number}</div>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </div>
        );
    }
}
export default Counter;