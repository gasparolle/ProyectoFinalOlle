import { useContext, useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, reset, removeItem } = useContext(ItemsContext);

  const handleChange = (e) => {
    setBuyer((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const total = items.reduce((acc, act) => acc + act.price * act.cantidad, 0);

  const sendOrder = () => {
    if (!buyer.name || !buyer.phone || !buyer.email) {
      alert("Por favor, completa todos los campos para avanzar");
      return;
    }

    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert(`Su pedido ${id} fue realizado con exito`);
        }
      })
      .finally(() => {
        reset();
        setBuyer(initialValues);
      });
  };

  return (
    <Container>
      {items.length === 0 ? (
        <h4 className="carrito-vacio">Su carrito está vacío</h4>
      ) : (
        <>
          <Button variant="danger" onClick={reset}>
            Vaciar carrito
          </Button>
          {items.map((item) => (
            <div key={item.id} className="producto-carrito">
              <img src={item.imageId} alt="tripode-manfrotto" className="foto-cart"/>
              <div className="detail-cart">
                <h3 className="titulo-cart">
                  {item.brand} {item.model}
                </h3>
                <h5 className="precio-cart">${item.price}</h5>
                <p>Cantidad: {item.cantidad}</p>
                <Button variant="danger" onClick={() => removeItem(item.id)}>
                  X Eliminar del carrito
                </Button>
              </div>
            </div>
          ))}
          <br />
          <div className="total">Total: ${total}</div>

          <form className="formulario">
            <h5>Completar compra</h5>
            <div>
              <label>Nombre</label>
              <input value={buyer.name} name="name" onChange={handleChange} />
            </div>
            <div>
              <label>Telefono</label>
              <input value={buyer.phone} name="phone" onChange={handleChange} />
            </div>
            <div>
              <label>Email</label>
              <input value={buyer.email} name="email" onChange={handleChange} />
            </div>
            <Button type="button" onClick={sendOrder} className="button-enviar">
              Finalizar compra
            </Button>
          </form>
        </>
      )}
    </Container>
  );
};
