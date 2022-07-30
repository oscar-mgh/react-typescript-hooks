import { useForm } from '../hooks/useForm';
import './Form.css';

interface FormData {
	email: string;
	name: string;
	age: number;
}

const initialState = {
	email: 'flavor@gmail.com',
	name: 'Rick',
	age: 33,
};

export const Form = () => {
	const { formulario, handleChange } = useForm<FormData>(initialState);
	const { age, email, name } = formulario;
	return (
		<>
			<pre> {JSON.stringify(formulario)} </pre>
			<form autoComplete="off" className="formm">
				<div className="mb-3">
					<label className="form-label">Email:</label>
					<input
						className="form-control"
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Name:</label>
					<input
						className="form-control"
						type="text"
						name="name"
						value={name}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Age:</label>
					<input
						className="form-control"
						type="number"
						name="age"
						value={age}
						onChange={handleChange}
					/>
				</div>
			</form>
		</>
	);
};
