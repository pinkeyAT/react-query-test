import { queryCache } from 'react-query';

export default ({ queryKey, id }) => {
	const data = queryCache.getQueryData(queryKey);
	console.log(`${id}: ${JSON.stringify(data)}`);
	return (
		<div>
			<h1>Section</h1>
			<div style={{ backgroundColor: 'lightblue' }}>
				Cache: {JSON.stringify(data, null, 2)}
			</div>
		</div>
	);
};
