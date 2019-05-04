let hola = class Hola extends React.Component {

  render(){
    //React.createElement(Etiquete, Atributos, Contenido, Propiedades del Objeto)
    return etiqueta = React.createElement("div", null, "Hola ", this.props.nombre)
  }

}
///////////////////////////////////////////////////////////////////////////////
//ReactDom.render(COMPONENTE, AREA)

ReactDOM.render(React.createElement(hola, { nombre : "React"}),
document.querySelector("#app"))
