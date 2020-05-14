import { useState } from 'react';
import { queryCache } from 'react-query';

export default ({ queryKey, id }) => {
	const data = queryCache.getQueryData(queryKey);
	console.log(`${id}: ${JSON.stringify(data)}`);
	const [value, setValue] = useState(data[id]);

	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);

		queryCache.setQueryData(queryKey, (prevData) => ({
			...prevData,
			[id]: e.target.value
		}));
	};

	const handleBlur = (e) => {
		// queryCache.refetchQueries(queryKey);
	};

	return (
		<>
			<div>
				{JSON.stringify(queryCache.getQueryData(queryKey), null, 2)}
			</div>
			<br />
			<br />
			<div>
				<input type='text' name={id} id={id} onBlur={(e) => handleBlur(e)} onChange={(e) => handleChange(e)} value={value} />
			</div>

		</>
	);
};
