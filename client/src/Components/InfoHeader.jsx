import React from 'react'

export const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
     
            
            <div className=' App  bg-danger px-4 py-3 fw-bold  row  my-4  border border-dark border-4 rounded-4'>
                <div className=' col-xs-12 col-sm-12 col-md-8  my-auto fs-5 '>
                    For best experience use GothamNews app on you smartphone
                </div>
                <div className=' col-xs-12 sol-sm-12 col-md-4  text-right'>
                   <a href="https://instagram.com/siddhant.deokar?igshid=OGQ5ZDc2ODk2ZA==">
                     <img src={appleStore} style={{height: 41.5}} className='rounded-4 '  alt="" />
                     </a>
                     <a href="https://instagram.com/_rudyyy____7?igshid=OGQ5ZDc2ODk2ZA==">

                    <img src={googleStore} style={{height: 40}}  className='rounded-4 ' alt="" />
                     </a>
                    
                </div>
            </div>
            
       
    )
}
