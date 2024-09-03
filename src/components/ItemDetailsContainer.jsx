import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import { ItemCount } from "./ItemCount";
import { ItemsContext } from "../contexts/ItemsContext";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addItem } = useContext(ItemsContext);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    addItem({ ...item, cantidad });
  };

  if (loading) return <p className="cargando">"Cargando..."</p>;

  return (
    <Container>
      <div className="details">
        <img className="fotoDetails" src={item.imageId} alt="" />

        <div className="details-items">
          <h4>
            {item.brand} {item.model}
          </h4>
          <p className="descripDetails">{item.description}</p>
          <div className="details-compra">
            <p className="precioDetails">${item.price}</p>
            <p className="stockProduct">Stock: {item.stock}</p>
            <ItemCount stock={item.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </Container>
  );
};
