import React,{Component}from'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '이정환',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '신다민',
        phone: '010-1111-1111'
      }
    ], keyword: ''
  }
  handleChange=(e)=>{
    this.setState({
      keyword:e.target.value,
    });
  }
  handleCreate = (data) =>{
    const {information}=this.state;
    this.setState({
      information: information.concat({id:this.id++, ...data})
    })
  }
  handleRemove = (id) =>{
    const {information} = this.state;
    this.setState({
      //filter : 조건에 부합되는 원소들을 뽑아 새 배열을 만들어줌
      information: information.filter(info => info.id !== id) // 삭제할 id를 제외하고 새 배열 생성
    })
  }
  handleUpdate = (id, data) =>{
    const{information} = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data} // 기존값 + 전달받은 data값
        : info //기존의 값을 그대로 유지
      )
    })
  }
  render(){
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return(
      <div>
        <PhoneForm
          onCreate={this.handleCreate}/>
          <p>
            <input
              placeholder="검색 할 이름을 입력하세요."
              onChange={this.handleChange}
              value={keyword}>
            </input>
          </p>
          <hr />

          <PhoneInfoList
            data = {filteredList}
            onRemove={this.handleRemove}
            onUpdate={this.handleUpdate}>
          </PhoneInfoList>
      </div>
    );
  }
}

export default App;