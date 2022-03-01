import React from 'react';

const Illustrations = ({ pokemon }) => {

  const [displayImageIndex, setDisplayImageIndex] = React.useState(0)

  return (
    <div className='Illustrations'>
      {console.log(pokemon)}
      <img className='display-img' src={pokemon.images[displayImageIndex]} />
      {pokemon && pokemon.images.map((img) => (
        <img className="mini-img" src={img} alt="pokemon" />
      ))}
    </div>
  );
};

export default Illustrations;