// import { useState } from "react";
// import { useReducer } from "react";

// export default function AddTransaction() {
//   const [text, setText] = useState(null);
//   const [amount, setAmount] = useState(null);


//   function reducer(state, action) {
//     switch (action.type) {
//       case " + ": {
//         return state + state;
//       }
//       case " - ": {
//         return state - state;
//       }
//       default: {
//         throw Error("Unknown Error" + action.type);
//       }
//     }
//     return state;
//   }

//   function AddAmount(){
//     dispatch({
//         type:'+',
//     })
//   }

//   const [state, dispatch] = useReducer(reducer, 0);
//   return (
//     <>
//       <p>Add new transaction</p>
//       <hr />

//       <label htmlFor = "Text">Text </label>
//         <input
//           type="text"
//           value={text}
//           onClick={(e) => {
//             e.target.value;
//           }}
//         />
     
//       <label htmlFor="Amount">
//         Amount 
//         <br />
//         (negative-expense,positive-income)
//         <br />
//         <input
//           type="text"
//           value={amount}
//           onClick={(e) => {
//             e.target.value;
//           }}
//         />

//       </label>
//       <div>
//         <button onClick={dispatch.type=='+'}>Add transaction</button>
//       </div>
//     </>
//   );
// }







import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}



