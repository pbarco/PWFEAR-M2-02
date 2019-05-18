let hola = class Hola extends React.Component {

  render(){
    //React.createElement(ETIQUETA, ATRIBUTOS, CONTENIDO, PROPIEDADES DEL OBJETO)
    return React.createElement("div", //-- ETIQUETA
    {style : { color : 'red', fontFamily : 'Arial'}}, //-- Atributos
    "Hola ", //--Contenido Estatico
     this.props.nombre) //-- Contenido dinamico (Propuedades del Objeto)
  }

}

let Imagen = class Imagen extends React.Component {
    render(){
      return React.createElement("img", { src : this.props.url}, null)
    }

  }

let GoogleMap = class GoogleMap extends React.Component {

  render(){
    const API_KEY = 
    let lat = this.props.lat
    let long = this.props.long
    let zoom = this.props.zoom

    let url = `https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${lat},${long}&zoom=${zoom}&maptype=satellite`

    return React.createElement("iframe", {src : url, frameBorder : 0, width : 600, height : 450}, null)
  }

}


///////////////////////////////////////
//ReactDOM.render(COMPONENTE, AREA)

ReactDOM.render(
  //React.createElement(hola, { nombre : "Luna" }),
  //React.createElement(Imagen, {url : "https://lorempixel.com/100/100/animals"}),
  React.createElement(GoogleMap, {lat: -34.6058437 , long: -58.3794516  , zoom:19.5}),
  document.querySelector("#app")
)
