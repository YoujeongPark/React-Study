import PropTypes from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';

const user = [
  { id: 1, name: '배수지' },
  { id: 2, name: '유인나' },
  { id: 3, name: 'naver' },
  { id: 4, name: 'daum' },
  { id: 5, name: 'NaVER' },
  { id: 6, name: 'DOG' },
  { id: 7, name: 'dog' },
  { id: 8, name: 'nate' },
  { id: 9, name: 'Cat' },
  { id: 10, name: 'gooGLE' }
]

const Sub = ({ name, age, done, color }) => {
  return (
    <div style={{ border: `1px solid ${color}`, padding: 30 }}>
      <h3>이름:{name}({typeof name})</h3>
      <h3>나이:{age}({typeof age})</h3>
      <h3>로그인여부:{done ? '로그인' : '로그아웃'}
        ({typeof done})</h3>
    </div>
  )
}


const Etc = () => {

  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  const [cnt1, setCnt1] = useState(1)
  const [cnt2, setCnt2] = useState(10)

  //useCallback
  const increment1 = useCallback(() => {
    setCnt1(cnt1 + 1)
  }, [cnt1])

  const increment2 = useCallback(() => {
    setCnt2(cnt2 + 1)
  }, [cnt2])

  const onSearch = () => {
    setSearch(text)
  }

  //useMemo
  const data = useMemo(() => {
    return user.filter(item =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }, [search])

  return (
    <div>
      <input type='text' value={text}
        onChange={evt => setText(evt.target.value)} />
      <button onClick={onSearch}>검색</button>
      <hr />
      {
        data.map(item => <p key={item.id}>
          {item.id} / {item.name}
        </p>)
      }
      <div>
        <h1>숫자: {cnt1}</h1>
        <h1>Test3Sub: {'cnt1'} : {cnt1}</h1>
        <button onClick={increment1}>증가</button>
        <hr />
        <h1>숫자: {cnt2}</h1>
        <h1>Test3Sub: {cnt2} : {cnt2}</h1>
        <button onClick={increment2}>증가</button>
      </div>
    </div>
  );

};

export default Etc;