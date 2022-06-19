import React, { useEffect } from 'react';
import "@grapecity/wijmo.styles/wijmo.css";
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { FlexChart, FlexPie, FlexChartSeries } from '@grapecity/wijmo.react.chart';
import { RadialGauge } from '@grapecity/wijmo.react.gauge';
import  {useState, useRef } from 'react';
import AboutHello from './AboutHello';

function About() {

    const [inputs, setInputs] = useState({
      name: '',
      nickname: ''
    });
    const nameInput = useRef();
  
    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
  
    const onChange = e => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      console.log(value ,"---", name); 

      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value // name 키를 가진 값을 value 로 설정
      });
    };
  
    const onReset = () => {

      if(nameInput.current.value){
        console.log("Reset 시", nameInput.current.value)
        setInputs({
          name: '',
          nickname: ''
        });
        nameInput.current.focus();    
      }

    };

    const requestToLogin = () => {
    
      const id = idReferenece.current.value
      const password = passwordReference.current.value

      console.log(id, "---" , password )

      debugger;

    }

    const idReferenece = useRef()
    const passwordReference = useRef()

  
    return (
      // <div>
      //   <input
      //     name="name"
      //     placeholder="이름"
      //     // onChange={onChange}
      //     value={name}
      //     ref={nameInput}
      //   />
      //   <input
      //     name="nickname"
      //     placeholder="닉네임"
      //     //onChange={onChange}
      //     value={nickname}
      //   />
      //   <button onClick={onReset}> 초기화</button>
      //   <div>
      //     <b>값: </b>
      //     {name} ({nickname})
      //   </div>
      // </div>
      <form onSubmit={requestToLogin}>
        <label>
          id:
          <input ref={idReferenece } type='text' />
        </label>
        <label>
          password:
          <input ref={passwordReference} type='password' />
        </label>
        <button type='submit'>로그인!</button>
    </form>
    );
  }
  
export default About;
