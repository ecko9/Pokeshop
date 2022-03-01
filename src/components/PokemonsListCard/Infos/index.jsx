import React from 'react';

const Infos = ({ pokemon }) => {

  const setStatSymbol = (stat) => {
    switch (stat.name) {
      case 'hp':
        return (
          <i className="fa-solid fa-heart fa-2xl" style={{ color: 'red' }}></i>
        )
      case 'attack':
        return (
          <i className="fa-solid fa-hand-fist fa-2xl" style={{ color: 'rgb(57, 199, 32)' }}></i>
        )
      case 'special-attack':
        return (
          <i className="fa-solid fa-hand-fist fa-2xl" style={{ color: 'aqua' }}></i>
        )
      case 'defense':
        return (
          <i className="fa-solid fa-shield fa-2xl" style={{ color: 'rgb(57, 199, 32)' }}></i>
        )
      case 'special-defense':
        return (
          <i className="fa-solid fa-shield fa-2xl" style={{ color: 'aqua' }} ></i>
        )
      case 'speed':
        return (
          <i className="fa-solid fa-bolt fa-2xl" style={{ color: 'rgb(226, 174, 17)' }}></i>
        )
      default:
        return;
    }
  }

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
    <div className='Infos' >

      <h2 className='name'>{pokemon.name}</h2>

      <div className='types'>
        {pokemon.types.map(type => (
          <span key={type}>
            {setTypeSymbol(type)}
          </span>
        ))}
      </div>

      <div className='characteristics'>

        <div className='height'><i className="fa-solid fa-arrows-up-down fa-lg"></i><span>{pokemon.height}</span></div>
        <div className='weight'><i className="fa-solid fa-weight-hanging fa-lg"></i><span>{pokemon.weight}</span></div>

        <div className='stats'>
          {pokemon.stats.map(stat => (
            <div className='stat' key={stat.name}>
              {setStatSymbol(stat)}
              <span>{stat.value}</span>
            </div>
          ))}
        </div>

      </div>

      <div className='image' style={{ backgroundImage: `url(${pokemon.images[1]})` }} />
    </div>
  );
};

export default Infos;