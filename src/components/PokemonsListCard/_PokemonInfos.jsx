import React from 'react';
import Characteristics from '../PokemonPresentation/Characteristics/index';

const PokemonInfos = ({ pokemon }) => {

  const setTypeSymbol = (type) => {
    switch (type) {
      case "grass":
        return (<i className="fa-brands fa-pagelines"></i>)
      case "poison":
        return (<i className="fa-solid fa-skull-crossbones"></i>)
      case "fire":
        return (<i className="fa-solid fa-fire"></i>)
      case "flying":
        return (<i className="fa-solid fa-feather-pointed"></i>)
      case "water":
        return (<i className="fa-solid fa-droplet"></i>)
      case "bug":
        return (<i className="fa-solid fa-bug"></i>)
      case "ground":
        return (<i className="fa-solid fa-border-all"></i>)
      case "normal":
        return (<i className="fa-solid fa-person"></i>)
      case "electric":
        return (<i className="fa-solid fa-bolt-lightning"></i>)
      case "fairy":
        return (<i className="fa-solid fa-wand-magic-sparkles"></i>)
      case "psychic":
        return (<i className="fa-solid fa-eye"></i>)
      case "ice":
        return (<i className="fa-solid fa-icicles"></i>)
      case "steel":
        return (<i className="fa-solid fa-shield"></i>)
      case "ghost":
        return (<i className="fa-solid fa-ghost"></i>)
      case "rock":
        return (<i className="fa-solid fa-mountain"></i>)
      case "dragon":
        return (<i className="fa-solid fa-dragon"></i>)
      case "dark":
        return (<i className="fa-solid fa-moon"></i>)
      case "fighting":
        return (<i className="fa-solid fa-hand-fist"></i>)
      default:
        return;
    }
  }

  const chooseImg = () => {
    if (pokemon.images[1])
      return pokemon.images[1]
    else if (pokemon.images[0])
      return pokemon.images[0]
    else if (pokemon.images[2])
      return pokemon.images[2]
    else
      return ""
  }

  return (
    <div className='PokemonInfos'>

      <h2 className='name'>{pokemon.name}</h2>

      <div className='types'>
        {pokemon.types.map((type, i) => (
          <span key={i}>
            {setTypeSymbol(type)}
          </span>
        ))}
      </div>

      <Characteristics pokemon={pokemon} />

      <div className='image' style={{ backgroundImage: `url(${chooseImg()})` }} />
    </div>
  );
};

export default PokemonInfos;