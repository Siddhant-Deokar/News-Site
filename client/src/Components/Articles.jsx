import React, { useEffect, useState } from 'react'

import { getNews } from '../service/api.js';
import { SingleArticle } from './SingleArticle.jsx';


export const Articles = () => {
    
    useEffect(() => {
        dailyNews();
    }, [])


    const dailyNews = async ()=>{
      let response = await getNews();
      
      setNews(response.data)
    }

    const [news, setNews] = useState([])

    return (
    <div className='mx-auto'>
        {
         news.map((data,e) =>(
          <div key = {e}>
          <SingleArticle  data = {data} />
          </div>
         )
         )
        }
    </div>
  )
}


