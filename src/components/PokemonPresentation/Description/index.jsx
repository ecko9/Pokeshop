import AddToCart from 'components/AddToCart';
import React from 'react';

const Description = ({ pokemon }) => {

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

  return (
    <div className='Description'>

      <div className='name' style={{ background: `linear-gradient(to bottom, ${pokemon.color}, rgba(255, 255, 255, 0.8) 100%)` }}>
        <h2>{pokemon.name}</h2>
        <div className='bg-overlay' />
      </div>

      <div className='text'>
        <p>" {pokemon.description} "</p>
        <div className='bg-overlay' />
      </div>

      <div className='stats' style={{ background: `linear-gradient(to top, ${pokemon.color}, rgba(255, 255, 255, 0.8) 100%)` }}>
        {pokemon.stats.map(stat => (
          <div className='stat' key={stat.name}>
            {setStatSymbol(stat)}
            <span>{stat.value}</span>
          </div>
        ))}
        <div className='bg-overlay' />
      </div>

      <AddToCart pokemon={pokemon} />

    </div>
  );
};

export default Description;