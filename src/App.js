import React, {Component} from 'react';
import './App.css';
import Buscador from './Components/Buscador';
import Resultado from './Components/Resultado';

class App  extends Component {
    
   state = {
     termino : '',
     imagenes : [],
     pagina : ''
   }

  //  scroll = () => {
  //    const elemento = document.querySelector('#jumbotron');
  //    elemento.scrollIntoView('smooth','start');
  //  }
  
   paginaAnterior = () => {
     //  leer el  state de la pagina actual
     let pagina = this.state.pagina;
    //  leer si la  pagina es 1, ya no  ir  para atras
      if(pagina === 1) return null;
     // restar uno  a la  pagina actual
         pagina -= 1;
     // agregar el cambio al state
        this.setState({
          pagina
        }, () => {
           this.consultarApi();
          //  this.scroll();
        });
     console.log(pagina);
   }
   
   paginaSiguiente = () => {
    //  leer el  state de la pagina actual
        let pagina = this.state.pagina;
    // sumar uno  a la  pagina actual
        pagina += 1;
    // agregar el cambio al state
       this.setState({
         pagina
       },() => {
         this.consultarApi();
        //  this.scroll();
       });
    console.log(pagina);
  }

   consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=15677910-17df13226da3e1f987c0ce32a&q=${termino}&per_page=30&page=${pagina}`;
    // console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json() )
      .then(resultado => this.setState({imagenes : resultado.hits} ) )

   }


  datosBusqueda = (termino) =>{
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })
  }
 
  render() {
    return (
      <div className="App container">
         <div className="jumbotron">
            <p className="lead text-center"> <b>Buscador de imagen</b></p>

            <Buscador
             datosBusqueda={this.datosBusqueda}
            />
          </div>
          {/* {this.state.termino} */}
           <Resultado
               imagenes = {this.state.imagenes}
               paginaAnterior = {this.paginaAnterior}
               paginaSiguiente = {this.paginaSiguiente}
           />
        </div>
      );
    }
  }

export default App;
