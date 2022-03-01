import React from 'react';
import Characteristics from './_Characteristics';

const Infos = ({ pokemon }) => {

  const setTypeSymbol = (type) => {
    switch (type) {
      case "grass":
        return (
          <i className="fa-brands fa-pagelines"></i>
        )
      case "poison":
        return (
          <i className="fa-solid fa-skull-crossbones"></i>
        )
      case "fire":
        return (
          <i className="fa-solid fa-fire"></i>
        )
      case "flying":
        return (
          <i className="fa-solid fa-feather-pointed"></i>
        )
      case "water":
        return (
          <i className="fa-solid fa-droplet"></i>
        )
      case "bug":
        return (
          <i className="fa-solid fa-bug"></i>
        )
      case "ground":
        return (
          <i className="fa-solid fa-border-all"></i>
        )
      case "normal":
        return (
          <i className="fa-solid fa-person"></i>
        )
      case "electric":
        return (
          <i className="fa-solid fa-bolt-lightning"></i>
        )
      case "fairy":
        return (
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        )
      default:
        return;
    }
  }

  return (
    <div className='Infos'>

      <h2 className='name'>{pokemon.name}</h2>

      <div className='types'>
        {pokemon.types.map(type => (
          <span key={type}>
            {setTypeSymbol(type)}
          </span>
        ))}
      </div>

      <Characteristics pokemon={pokemon} />

      <div className='image' style={{ backgroundImage: `url(${pokemon.images[1]})` }} />
    </div>
  );
};

export default Infos;