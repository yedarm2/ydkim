import { useRouter } from 'next/router';
import { FC } from 'react';
import PokemonDisplayer from 'src/features/pokemon/components/PokemonDisplayer/PokemonDisplayer';

const Page: FC = () => {
	const router = useRouter();
	const { name: pokemonName } = router.query;

	return <PokemonDisplayer pokemonName={pokemonName as string} />;
};

export default Page;
