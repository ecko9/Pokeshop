import React from 'react';

const Characteristics = ({ pokemon }) => {

  const setStatSymbol = (stat) => {
    switch (stat.name) {
      case 'hp':
        return (
          <i className="fa-solid fa-heart fa-2xl" style={{ color: 'red' }}></i>
        )
      case 'attack':
        return (
          <i className="fa-solid fa-hand-fist fa-2xl" style={{ color: 'orange' }}></i>
        )
      case 'special-attack':
        return (
          <i className="fa-solid fa-hand-fist fa-2xl" style={{ color: 'orangered' }}></i>
        )
      case 'defense':
        return (
          <i className="fa-solid fa-shield fa-2xl" style={{ color: 'green' }}></i>
        )
      case 'special-defense':
        return (
          <i className="fa-solid fa-shield fa-2xl" style={{ color: 'aqua' }} ></i>
        )
      case 'speed':
        return (
          <i className="fa-solid fa-bolt fa-2xl" style={{ color: 'rgb(255, 208, 0)' }}></i>
        )
      default:
        return;
    }
  }

  return (
    <div className='Characteristics'>

      <div className='size'>
        <div className='height'><i className="fa-solid fa-arrows-up-down fa-2xl"></i><span>{pokemon.height}</span></div>
        <div className='weight'><i className="fa-solid fa-weight-hanging fa-xl"></i><span>{pokemon.weight}</span></div>
      </div>

      <div className='stats'>
        {pokemon.stats.map(stat => (
          <div className='stat' key={stat.name}>
            {setStatSymbol(stat)}
            <span>{stat.value}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Characteristics;