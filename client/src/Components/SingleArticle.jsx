import React from 'react'
// title
// author
// description
// link
// publisher
// timestamp

export const SingleArticle = ({ data }) => {
  
  return (
    <div>

      <div className="card mt-4 shadow-lg  rounded-4 mx-auto border-5 border-dark bg-light" style={{ maxWidth: '1200px', maxHeight: 'auto' }}>
        <div className="row g-0">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <img src={data.url} style={{ height: '100%' }} className=" img-fluid  rounded-start-3" alt="Network Error" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8">
            <div className="card-body">
              <h5 className="App  card-title">{data.title}</h5>
              <p className="card-text text-justify">{data.description}</p>
              <p className="App  card-text fw-bold">
                {data.author} - <small className="text-body-secondary">{data.timestamp}</small>
              </p>
            </div>
            <p className="App fc-dark fs-5 text-secondary" >Read more at <a href={data.link} >
              {data.publisher}
            </a>
            </p>
          </div>
        </div>
      </div>



    </div>
  )
}
