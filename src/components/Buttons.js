import React from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from '../Redux/store';

const Buttons = ({msg}) => {
  const dispatch = useDispatch(); // dispathc always dispatch an action to redux now on the based on action matching redux choice the reducers and update states.
  const increment = ()=>{
    dispatch(counterActions.Increment()); // Now the dispatch will only call those reducers whose action/slice is mentioned here countActions is the counter slice's actions/reducers methods.
  }

  const decrement = ()=>{
    dispatch(counterActions.Decrement()); 
  }
  return (
    <div className='w-[5rem] bg-red-500 rounded-md flex justify-center'>
      <button className='w-full text-xl' onClick={()=>{msg==="+" ? increment() : decrement()}}>{msg}</button>
    </div>
  )
}

export default Buttons
