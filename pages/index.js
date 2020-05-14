import { ReactQueryDevtools } from 'react-query-devtools';

import Section from '../src/components/Section';
import Textbox from '../src/components/Textbox';
import { queryCache, useQuery } from 'react-query';
const queryKey = '12345';

const Testpage = (props) => {
	// queryCache.setQueryData(queryKey, props.initialData);

	console.log(props.initialData);

	const { status, data, error } = useQuery(queryKey, () => queryCache.getQueryData(queryKey), {
		initialData: props.initialData,
		onSuccess: (data) => {
			console.log('onSuccess: ', data);
		},
		onError: error => {
			console.log('onError: ', error);
		},
		onSettled: (data, error) => {
			console.log('onSettled: ', data, error);
		}
	});

	if (status === 'loading') {
		return <p>Loading...</p>;
	}
	if (status === 'error') {
		return <p>Error</p>;
	}

	const queryCacheData = queryCache.getQuery(queryKey);
	console.log('queryData: ', queryCacheData);

	return (
		<div>
			status: {JSON.stringify(status, null, 2)} data: {JSON.stringify(data, null, 2)}, error: {JSON.stringify(error, null, 2)}
			<Section queryKey={queryKey} initialData={props.initialData} id='Section1' />
			<br />
			<Textbox queryKey={queryKey} initialData={props.initialData} id='TextBox1' />
			<br />
			<Textbox queryKey={queryKey} initialData={props.initialData} id='TextBox2' />
			<ReactQueryDevtools />
		</div>
	);
};

export default Testpage;

export async function getServerSideProps () {
	// Pass data to the page via props
	return { props: { initialData: { TextBox1: 'tb1', TextBox2: 'tb2' } } };
}
