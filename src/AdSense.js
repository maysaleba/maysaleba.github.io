import React, { useEffect } from "react"




const AdSense = props => {
  const { currentPath } = props
  
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [currentPath])
  
  return (
    <div key={currentPath}>
      <ins 
        className="adsbygoogle example_responsive_1"
       style={{ display: "block"}}
      data-ad-client="ca-pub-4543556906953539"
      data-ad-slot="1687469656"
      />
    </div>
  )
}





export default AdSense