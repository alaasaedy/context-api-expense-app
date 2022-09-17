import Balance from './components/Balance';
import Header from './components/Header';
import './App.css';
import IncomeExpense from './components/IncomeExpenses';
import TransactionsList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
