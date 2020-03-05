## React란?
- 간단하게 말하면 효율적인 JavaScript **라이브러리** 이다.
- 컴포넌트를 작성하여 React에게 무엇을 rendering 하고 싶은지 알려주면, React가 데이터가 변경될 때 올바를 컴포넌트들을 업데이트하고 rendering 하는 구조이다.
~~~
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
~~~
> render 메서드는 렌더링을 원하는 내용을 리턴하면 react가 해당 내용을 가져와 렌더링한다.
> React 컴포넌트에서 다루는 데이터는 **props** 와 **state** 두 가지 이다.

- props는 부모 컴포넌트가 자식컴포넌트에게 주는 값으로, 자식 컴포넌트에서는 propbs를 받아오기만하고 수정할 수 없다.
- 이와 반대로 state는 내부에서 선언하며 내부에서 값을 변경한다.

## React를 사용하는 이유
### React 특징
- React는 Facebook 이 만들어낸 JavaScript 라이브러리이다.(Angular와 같은 Framework가 아닌 Library 구조)
- Component, JSX, Virtual DOM 이라는 중요한 특징을 갖고있다.

**JSX**

> JSX는 새로 탄생한 자바스크립트 문법으로, 쉽게 말하자면 html 형태로 이루어져 있어 한눈에 이해하기 쉬운 개발을 도와준다는 장점이 있어 유지보수와 협업에 엄청난 강점을 가지고있고 최종적인 view를 예측할 수 있게 해준다.

**Virtual DOM**

> DOM은 브라우저가 화면을 그리기 위한 정보가 담겨있는 문서를 의미한다. 이 DOM을 효과적으로 다루는 것은 매우 힘들다고 한다.

> Virtual DOM은 component 단위로 움직이는 선언적인 개발을 구현하기 위한 것이며 유지보수를 쉽게 해준다.(Jquery의 단점)


