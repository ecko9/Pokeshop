import React from 'react';

const Illustrations = ({ pokemon }) => {

  const [displayImageIndex, setDisplayImageIndex] = React.useState(0)

  return (
    <div className='Illustrations'>

      <div className='display-img' style={{ backgroundImage: `url(${pokemon.images[displayImageIndex]})` }} />

      {pokemon && pokemon.images.map((img, index) => (
        <div
          className="mini-img link"
          key={img}
          style={{ backgroundImage: `url(${img})` }}
          onClick={e => setDisplayImageIndex(index)}
        />
      ))}

    </div>
  );
};

export default Illustrations;