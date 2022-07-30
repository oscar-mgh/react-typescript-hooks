import { useState } from 'react';

export const Counter = () => {
	const [counter, setCounter] = useState(0);
	const incrementar = ( number: number = 1 ):void => {
		setCounter(counter + number);
	};

	return (
		<div className="">
			<h3> * Counter: </h3>
			<span>Value: {counter}</span>
			<br />
			<button onClick={() => incrementar()} className="btn btn-info my-3">
				+1
			</button>
			<button onClick={() => incrementar(2)} className="btn btn-info my-3 mx-2">
				+2
			</button>
			<button onClick={() => setCounter(0)} className="btn btn-info my-3">
				Reset
			</button>
		</div>
	);
};
