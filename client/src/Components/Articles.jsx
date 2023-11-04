// import React, { useEffect, useState } from 'react'

// import { getNews } from '../service/api.js';
// import { SingleArticle } from './SingleArticle.jsx';


// export const Articles = () => {
    
//     useEffect(() => {
//         dailyNews();
//     }, [])


//     const dailyNews = async ()=>{
//       let response = await getNews();
//       
//       setNews(response.data)
//     }

//     const [news, setNews] = useState([])

//     return (
//     <div className='mx-auto'>
//         {
//          news.map((data,e) =>(
//           <div key = {e}>
//           <SingleArticle  data = {data} />
//           </div>
//          )
//          )
//         }
//     </div>
//   )
// }


// ----------------------------
import React, { useEffect, useState } from 'react';
import { getNews } from '../service/api.js';
import { SingleArticle } from './SingleArticle.jsx';

export const Articles = () => {
  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
   
    setNews(response.data);
  };

  const [news, setNews] = useState([]);

  return (
    <div className='container'>
      <div className='mx-auto' style={{ position: 'relative' }}>
        <img
          src="your-image-url.png"
          alt="Fixed Image Left"
          
          className='d-none d-md-block'
          style={{
            position: 'fixed',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
          }}
        />

        {news.map((data, e) => (
          <div key={e}>
            <SingleArticle data={data} />
          </div>
        ))}

        <img
          src="your-image-url.png"
          className='d-none d-md-block'
          alt="Fixed Image Right"
          style={{
            position: 'fixed',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
          }}
        />
      </div>
    </div>
  );
};