import React, {Component} from 'react';

const Imagen = (props) => {
    
    const {largeImageURL,likes ,previewURL,tags,views} = props.imagen;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card p-3 text-center">
             <img src={ previewURL} alt={tags} className="card img-top " />
             <div className="card-body">
                  <p className="card-text badge badge-pill badge-info" >{likes} </p> <b>Me Gusta</b> 
                
                  <p className="card-text badge badge-pill badge-info" >{views}</p> <b>Visto</b> 
                  
                  <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block" > Ver Imagen </a>
                 
             </div>
          </div>
        </div>
    )
}

export default Imagen;