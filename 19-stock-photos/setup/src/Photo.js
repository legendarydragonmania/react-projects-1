import React from 'react'

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  const defaultImage =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.AC9frN1qFnn-I2JCycN8fwHaEK%26pid%3DApi&f=1'
  return (
    <article className='photo'>
      <img src={regular || defaultImage} alt={alt_description} />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium || defaultImage} alt={name} className='user-img' />
        </a>
      </div>
    </article>
  )
}

export default Photo
