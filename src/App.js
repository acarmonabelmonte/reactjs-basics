import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

function App() {
  // Crear listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa ReactJs", precio: 50 },
    { id: 2, nombre: "Camisa AngularJs", precio: 20 },
    { id: 3, nombre: "Camisa VueJs", precio: 30 },
  ]);

  // State para un carrito de la compra
  const [carrito, setCarrito] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Título encabezado" />
      <h1>Listado de productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
