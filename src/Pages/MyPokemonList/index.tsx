import { FC, useEffect, useState } from "react";
import "./index.css";
import { getItem, setItem } from "Components/Storage";
import { CATCH_NAME } from "Pages/PokemonDetails";
import { Strings } from "Resource/Strings";

interface MyPokemonListProps {
  name: string;
  image: string;
  nickName: string;
}

const MyPokemonList: FC = () => {
  const [parsedData, setParsedData] = useState<MyPokemonListProps[] | null>(
    null
  );

  useEffect(() => {
    const { data } = getItem(CATCH_NAME);
    const parsedDataFromLocalStorage = JSON.parse(data!);
    setParsedData(parsedDataFromLocalStorage);
  }, []);

  const removeHandler = (index: number) => {
    const updatedData = [...(parsedData || [])];
    updatedData.splice(index, 1);
    setParsedData(updatedData);
    setItem(CATCH_NAME, JSON.stringify(updatedData));
  };

  return (
    <div>
      {parsedData && parsedData.length > 0 ? (
        <div>
          {parsedData.map((items, index) => {
            const imageUrl = `https://img.pokemondb.net/artwork/large/${items.name}.jpg`;
            return (
              <div className="pokemon-item" key={index}>
                <img
                  className="pokemon-image"
                  src={imageUrl}
                  alt={items.name}
                />
                <div className="pokemon-info">
                  <div className="pokemon-name">Name: {items.name}</div>
                  <div className="pokemon-nickname">
                    Nickname: {items.nickName}
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeHandler(index)}
                >
                  {Strings.remove}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-message">{Strings.noDataAvailable}</div>
      )}
    </div>
  );
};

export default MyPokemonList;
