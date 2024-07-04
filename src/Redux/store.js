import { configureStore, createSlice } from "@reduxjs/toolkit"

// ** In toolkit we need to create store by combination of slices/ encapsulated (state + reducers methods).
const counterSlice = createSlice({
    name: 'counter', // name of the slice to get acess the initial state from useSelector()
    initialState: {value: 0}, // it's copy is created. 
    reducers:{ // this are the reducers method based on diff actions(not like only redux where we need to do if-else and action matching)
        Increment: (state, action)=>{
            state.value++; 
        }, 
        Decrement: function(state, action){
            state.value--; 
        },
    }
});


const store = configureStore({
    reducer:{   // root reducer
        counter: counterSlice.reducer // create with slice's reducers like in redux
    }
}); 

export const counterActions = counterSlice.actions; // to get access in useDispatch() method it differentiate the update of multiple reducer's state like redux.{type:Increment}
export default store;