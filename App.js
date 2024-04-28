import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Sidenav from './components/SideNav';
import GlobalProvider from './context/GlobalState';
import Report from './components/Report';
import Sett from './components/Sett';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="container1">
          <div className='box1'>
            <Sidenav />
          </div>
          <div className='box2'>
            <Routes>
              <Route path='/' element={
                <>
                  <Balance />
                  <IncomeExpenses />
                  <AddTransaction />
                </>
              } />
              <Route path='TransactionList/' element={<TransactionList />} />
              <Route path='Report/' element={<Report />}/>
              <Route path='Sett/' element={<Sett/>}/>
              <Route path='Chatbot/' element={<Chatbot />}/>
              
              
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
