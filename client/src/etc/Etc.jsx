import React from 'react';
import PropTypes from 'prop-types';

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

  //props의 데이터유형 정의
  Etc.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    addr: PropTypes.string,
    tel: PropTypes.string,
    color: PropTypes.string,
    done: PropTypes.bool
  }

  //props의 기본값
  Etc.defaultProps = {
    name: '무명',
    age: 30,
    done: true,
    color: 'blue'
  }

  const data1 = { name: '정인선', age: 28, done: true, color: 'pink' }
  const data2 = { name: '유인나', age: 40, done: false, color: 'black' }
  const data3 = [
    { id: 1, name: '배수지', age: 27 },
    { id: 2, name: '유인나', age: 25 },
    { id: 3, name: '정인선', age: 21 },
    { id: 4, name: '강아랑', age: 24 },
    { id: 5, name: '이영애', age: 20 },
  ]
  return (
    <div>
      <div>
        <Sub name='배수지' age={27} done={true} />
        <br />
        <Sub name='안젤리나' age={25} done={false} />
        <br />
        <Sub name='{data1.name}' age={data1.age} done={data1.done} />
        <br />
        <Sub {...data1} />
        <br />
        <Sub {...data2} />
        {
          data3.map((item, index) => <p key={index}>{item.id}/{item.name}/{item.age}</p>)
        }
      </div>

    </div>
  );

};

export default Etc;