import React, {Component} from 'react';

class PhoneInfo extends Component{
    static deaultProps={
        info:{
            name: '이름',
            phone: '010-0000-0000',
            id:0
        },
    }
    state = {
        editing: false,
        name:'',
        phone:'',
    }
    handleRemove = () => { //삭제버튼이 클릭되면 onRemove에 id 를 넣어서 호출
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }
    //editing 값을 반전시킴(클릭할 때)
    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({editing:!editing});
    }
    //input에서 onChange 이벤트 발생 될 때 호출
    handleChange = (e) =>{
        const{name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    // 수정 -> 기존 값이 input 에 나타남
    // 적용 -> input의 값들을 부모에게 전달
    componentDidUpdate(prevProps, prevState){
        const {info, onUpdate} = this.props;
        if(!prevState.editing && this.state.editing){

            //editing 이 가능하면 info의 값을 state에 넣어줌
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        //editing 값이 false로 변할 때
        if(prevState.editing && !this.state.editing){
            onUpdate(info.id,{
                name: this.state.name, phone: this.state.phone
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(!this.state.editing && !nextState.editing 
            && nextProps.info === this.props.info){
                return false;
            }return true;
    }

    render(){
        console.log('render PhoneInfo' + this.props.info.id);
        const style ={
            border:'1px solid black',
            padding:'8px',
            margin:'8px'
        };
        
        const {editing} = this.state;

        if(editing){
            return(
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChane}>
                        </input>
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }

        const{
            name,phone
        }=this.props.info;
        return(
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}
export default PhoneInfo;