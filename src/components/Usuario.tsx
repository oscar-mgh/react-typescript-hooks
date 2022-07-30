import { useState } from 'react';

interface User {
    uid: String;
    name: String;
}

export const Usuario = () => {
	const [user, setUser] = useState<User>();

	const login = () => {
		setUser({
			uid: 'ABC123',
			name: 'Oscar',
		});
	};

	return (
		<div className="mt-3">
			<h3> * User: useState</h3>
			<button 
                onClick={login}
                className="btn btn-light mt-2  mb-3 text-dark">Login</button>
                <h5>
                    {
                        (!user)
                        ? <p> No Hay Usuario </p>
                        : <pre>{JSON.stringify(user)}</pre>
                    }
                </h5>
		</div>
	);
};
