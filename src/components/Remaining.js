import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';
import { formatNumberToWon } from '../utils/index';

//남은돈 값 가져오기
const Remaining = () => {
 // 배열의 객체 데이터 돈들 다 더하기 total은 누적기 
  const { expenses, budget } = useContext(AppContext);

  //수입과 지출을 합산하여 남은 돈을 계산
  const totalExpenses =
  expenses.reduce((total, itme) => {
    return (total += itme.cost)
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
  return (
  
    <div className={`alert p-4 ${alertType} `}>
      <span>
        남은 돈: {formatNumberToWon(budget - totalExpenses)}
      </span>
      
    </div>
  )
}

export default Remaining