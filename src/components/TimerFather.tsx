import { Timer } from './Timer';
import { useState } from 'react';

export const TimerFather = () => {

    const [milliseconds, setMilliseconds] = useState(1000);

	return (
		<>
			<span>Miliseconds: { milliseconds }</span>
            <br />
            <button className='btn btn-success my-2'
                onClick={ () => setMilliseconds(1000)}
            >
                1 Second
            </button>
            <button className='btn btn-success mx-2 my-2'
                onClick={ () => setMilliseconds(2000)}
            >
                2 Seconds
            </button>
			<Timer milliscnds={milliseconds} />
		</>
	);
};
