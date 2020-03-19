import React, {Component} from 'react';

class PhoneForm extends Component{
    state={
        name:'',
        phone:''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onCreate(this.state); // state 값을 부모에게 전달
        this.setState({
            name:'',
            phone:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                placeholder="이름"
                value={this.state.name}
                onChange={this.handleChange}
                name="name">
                </input>
                <input
                placeholder="전화번호"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone">
                </input>
                <button type="submit">등록</button>
                <div>
                    {this.state.name} {this.state.phone}
                </div>
            </form>
        );
    }
}
export default PhoneForm;