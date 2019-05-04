let hola = class Hola extends React.Component {

  render(){
    //React.createElement(Etiquete, Atributos, Contenido, Propiedades del Objeto)
    return etiqueta = React.createElement("div", null, "Hola ", this.props.nombre)
    return etiqueta
  }

}
///////////////////////////////////////////////////////////////////////////////
//ReactDom.render(COMPONENTE, AREA)
let app= document.querySelector("#app")
let saludo = React.createElement(hola, { nombre : "React"})

ReactDOM.render(saludo, app)
