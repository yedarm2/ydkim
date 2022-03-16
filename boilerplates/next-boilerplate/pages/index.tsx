import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => ({
	redirect: {
		destination: '/counter',
		permanent: true,
	},
});
