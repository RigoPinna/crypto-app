import ContentLoader from 'react-content-loader';

export function ChartSkeleton() {
	return (
		<ContentLoader viewBox='0 0 800 400' height={400} width={'100%'} backgroundColor='#f2f2f2' foregroundColor='white'>
			<rect x='0' y='60' rx='2' ry='2' width='800' height='400' />
		</ContentLoader>
	);
}
