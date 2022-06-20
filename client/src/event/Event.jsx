import React, { useEffect, useState, useRef} from 'react';

const Event = () => {



  const click1 = () => {
    alert('클릭1..')
  }

  const click2 = () => {
    alert('클릭2..')
  }

  const [count, setCount] = useState(0)

  const increment1 = () => {
    setCount(count + 1)
  }

  const decrement1 = () => {
    setCount(count - 1)
  }

  const increment2 = () => {
    setCount(count + 2)
    //setCount(count + 1)

    //i=i+2
    setCount(i => i + 1)
    setCount(preCount => preCount + 1)
  }

  const decrement2 = () => {
    setCount(count - 2)
  }

  const nameRef = useRef()

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [addr, setAddr] = useState()

  const onName = (evt) => {
    setName(evt.target.value)
  }

  const onAge = (evt) => {
    setAge(evt.target.value)
  }

  const onAddr = (evt) => {
    setAddr(evt.target.value)
  }

  const onReset = () => {
    setName('')
    setAge('')
    setAddr('')
    nameRef.current.focus()
  }


  //정리필요  비구조화할당 
  // const {name,age,addr} = form

  const onName2 = (evt) => {
    //setName(evt.target.value)
    const { value, name } = evt.target
    setForm({
      ...form,
      [name]: value
    })
  }


  const [form, setForm] = useState({
    name: '', age: '', addr: ''
  })

  const onAge2 = (evt) => {
    //setAge(evt.target.value)
    const { value, name } = evt.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onAddr2 = (evt) => {
    //setAddr(evt.target.value)
    const { value, name } = evt.target
    setForm({
      ...form, //스프레드 연산자
      [name]: value
    })
  }

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const move = (evt) => {
    setX(evt.clientX)
    setY(evt.clientY)
  }


  const onReset2 = () => {
    nameRef.current.focus()
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('mousemove', move) //마우스가 움직일 때 move()함수 실행

    //뒷정리 - (메모리 누수 방지)
    return () => {
      window.addEventListener('mousemove', move)
    }

  }, []) // [] :이걸 쓰면 콘솔에 1번만 보이지만 실제로는 계속 쌓이기 때문에 (뒷정리) 필수필수~

  const [date,setDate] = useState(new Date())

  useEffect(() => {
      const timer = setInterval(()=>{
          setDate(new Date())//새로운 시간을 새롭게 계속 넣어라
      },1000)//1000은 1초에 한번씩 움직여라

      return()=>{
          clearInterval(timer)
      }
  },[])
  

  return (
    <div>
      <h2>이벤트 사용</h2>
      <p>
        <button onClick={click1}>클릭1</button>
        <button onClick={click2}>클릭2</button>
      </p>
      <p>
        <button onClick={() => alert('클릭3')}>클릭3</button>
        <button onClick={() => alert('클릭4')}>클릭4</button>
      </p>
      <h2>카운트: {count}</h2>
      <p>
        <button onClick={increment1}>증가</button>
        <button onClick={decrement1}>감소</button>
      </p>
      <p>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </p>
      <p>
        <button onClick={increment2}>증가</button>
        <button onClick={decrement2}>감소</button>
      </p>
      <h2>input 여러개 관리</h2>
      <input type='text' onChange={onName} value={name}
        ref={nameRef} />
      <input type='text' onChange={onAge} value={age} />
      <input type='text' onChange={onAddr} value={addr} />
      <button onClick={onReset}>초기화</button>
      <br />
      <h4>{name} / {age} / {addr}</h4>

      <div>
        <h2>비구조할당</h2>
        <h2>input 여러개 관리</h2>
        <input type='text' onChange={onName2} value={name} name='name' ref={nameRef} />
        <input type='text' onChange={onAge2} value={age} name='age' />
        <input type='text' onChange={onAddr2} value={addr} name='addr' />
        <button onClick={onReset2}>초기화</button>
        <br />
        <h4>{name} / {age} / {addr}</h4>
      </div>
      <div>
        <h2>마우스 좌표</h2>
        <div style={{
          width: 500, height: 150, fontSize: 50,
          margin: 20, textAlign: 'center', border: '1px solid #000', lineHeight: '150px'
        }}>
          X : {x} / Y : {y}
        </div>
      </div>
      <div>
            <h1>날짜 : {date.toLocaleDateString()}</h1>
            <h1>시간 : {date.toLocaleTimeString()}</h1>
        </div>

    </div>
  );
};

export default Event;