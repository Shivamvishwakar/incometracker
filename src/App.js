// import logo from './logo.svg';
// import './App.css';
// import MainBox from './component/MainBox';
// import AddTransaction from './component/AddTransaction';
// import { useState } from 'react';
// import { useReducer } from 'react';

// function App() {
//   const [transaction, setTransaction] = useState([]);

//   const [state, dispatch] = useReducer(reducer , {income:0,expence:0,balance:0})

//   return (
//     <div className="App">
//       <header className="App-header">
       
//        <MainBox/>
//        <AddTransaction/>

    
//       </header>
//     </div>
//   );
// }


// export default App;


// function reducer(){
//   switch (action.type){
//     case "+" : {

//     }
//     case "-":{
//     }
//   }
// }




import React from 'react';


import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpenses } from './component/IncomeExpenses';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
