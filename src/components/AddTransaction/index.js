import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Enter description'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            type='number'
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
