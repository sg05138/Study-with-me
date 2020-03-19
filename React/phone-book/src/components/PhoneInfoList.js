import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps={
        data:[],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    shouldComponentUpdate(nextProps, nextState){ //불변성 
        return nextProps.data !== this.props.data;
    }

    render(){
        console.log('render PhoneInfoList');
        const {data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info =>(
            <PhoneInfo 
                key={info.id} 
                info={info}
                onRemove={onRemove}
                onUpdate={onUpdate}
            />) //data 배열을 가져와 JSX로 변환
        );
        return(
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;