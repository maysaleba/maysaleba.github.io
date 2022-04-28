import React from "react";

export default class AdSense extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
          
                <ins className='adsbygoogle example_responsive_1'
                     style={{ display: 'block' }}
                     data-ad-client='ca-pub-4543556906953539'
                     data-ad-slot='1687469656'
                     >
            </ins>
        );
    }
}