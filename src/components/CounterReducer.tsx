import { useReducer } from 'react';

const initialState = {
  counter: 10,
}

type ActionType = 
| { type: 'increment' }
| { type: 'decrement' }
| { type: 'custom', payload: number }


const counterReducer = ( state: typeof initialState, action: ActionType ) => {
  switch ( action.type ) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1
      }      
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1
      }
      case 'custom':
      return {
        ...state,
        counter: action.payload
      }
    default:
      return state;
  }
}

export const CounterReducer = () => {

  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h2>Counter: { counterState.counter }</h2>
      <button 
        onClick={() => dispatch({ type: 'increment' })}
        className='btn btn-primary'>
        increment
      </button>
      <button 
        onClick={() => dispatch({ type: 'decrement' })}
        className='btn btn-primary mx-2'>
        decrement
      </button>
      <button 
        onClick={() => dispatch({ type: 'custom', payload: 117 })}
        className='btn btn-primary'>
        Set 117
      </button>
    </>
  )
}
