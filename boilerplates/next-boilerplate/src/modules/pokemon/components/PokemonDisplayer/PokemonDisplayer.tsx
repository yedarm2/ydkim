import { FC } from 'react';
import { useGetPokemonByNameQuery } from '../../store/pokemonQueries';

interface PokemonDisplayerProps {
	pokemonName: string;
}

const PokemonDisplayer: FC<PokemonDisplayerProps> = ({ pokemonName }) => {
	const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

	let children = null;

	if (error) children = <>Oh no, there was an error</>;
	else if (isLoading) children = <>Loading...</>;
	else if (data) {
		children = (
			<>
				<h3>{data.species.name}</h3>
				<img src={data.sprites.front_shiny} alt={data.species.name} />
			</>
		);
	}

	return <div>{children}</div>;
};

export default PokemonDisplayer;
