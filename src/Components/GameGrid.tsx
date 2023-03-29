import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../Hooks/useGames";
import { Genre } from "../Hooks/useGenres";
import GameCard from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import { GameCardSkeleton } from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
  setSelectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre,setSelectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, setSelectedPlatform);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            // wraped
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
