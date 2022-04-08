import React, { useEffect } from 'react';

const AdSense = props => {
  const { currentPath } = props
  
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [currentPath])
  
  return (
    <div className='ad' key={currentPath}>
      <ins 
      className="adsbygoogle"
      style={{display: 'block'}}
      data-ad-client="ca-pub-4543556906953539"
      data-ad-slot="3566322911"
      data-full-width-responsive="true"
      />
    </div>
  )
}

export default AdSense