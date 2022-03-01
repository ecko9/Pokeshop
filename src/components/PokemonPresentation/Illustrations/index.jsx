import React from 'react';

const Illustrations = ({ pokemon }) => {

  const [displayImageIndex, setDisplayImageIndex] = React.useState(0)

  return (
    <div className='Illustrations'>

      <div className='display-img' style={{ backgroundImage: `url(${pokemon.images[displayImageIndex]})` }} />

      {pokemon && pokemon.images.map((img) => (
        <div className="mini-img" key={img} style={{ backgroundImage: `url(${img})` }} />
      ))}

    </div>
  );
};

export default Illustrations;