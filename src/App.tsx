import { Counter } from './components/Counter';
import { TimerFather } from './components/TimerFather';
import { Usuario } from './components/Usuario';
import { CounterReducer } from './components/CounterReducer';
import { Form } from './components/Form';

function App() {
	return (
		<div className="App mt-4">
			<h1 className="text-center">React + Typescript</h1>
			<hr />
			<h1 className="my-3 text-secondary"> - useState - </h1>
			<Counter />
			<Usuario />

			<h1 className="my-3 text-secondary"> - useEffect & useRef - </h1>
      		<TimerFather />

			<h1 className="my-3 text-secondary"> - useReducer - </h1>
			<CounterReducer />

			<h1 className="my-3 text-secondary"> - customHooks - </h1>
			<Form />
		</div>
	);
}

export default App;
