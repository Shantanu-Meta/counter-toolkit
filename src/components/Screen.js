import React from 'react'
import {  useSelector } from 'react-redux';

const Screen = () => {
  const {value} = useSelector(store=> store.counter) // NOw our store contains one slice, there can be multiple we need to access every slice via their name, here [store.(counter)] is the name:'counter' from line 4 on store.js
  return (
    <div className='w-full rounded-md bg-violet-400 border-2 p-5 my-8'>
      {value}
    </div>
  )
}

export default Screen;
