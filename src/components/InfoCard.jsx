import React from 'react'
const isIncome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{textAlign: 'center', padding: '0 10% '}}>
      Try Entering:<br />
       Type {isIncome ? 'Income ' : 'Expense '} 
       for {isIncome ? '₹100 ' : '₹50 '} 
        in Category {isIncome ? 'Business ' : 'House '}
        .Date by default or Select a particular date.
    </div>
  )
}

export default InfoCard
