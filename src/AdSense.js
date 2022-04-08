import React from 'react';

export default class AdSense extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <div className='ad'>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-4543556906953539'
          data-ad-slot='3566322911'
          data-ad-format='auto'
          data-full-width-responsive="true"
           />
      </div>
    );
  }
}