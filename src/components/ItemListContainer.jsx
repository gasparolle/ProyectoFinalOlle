import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getFirestore, getDocs, where, query, collection } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    
    const refCollection = !id ? collection(db, "items") : query(collection(db, "items"), where("category", "==", id ));

    getDocs(refCollection).then((snapshot) => {
     setItems(
      snapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      })
    )
   })
   .finally(() => setLoading(false));
}, [id])


  if (loading) return <p className="cargando">"Cargando..."</p>;

  return (
    <Container className="containerCards">
      {items.map((i) => (
          <Card className="card">
            <Card.Img variant="top" className="fotoCard" src={i.imageId} />
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle">{i.brand}</Card.Title>
              <Card.Text className="cardModelo">{i.model}</Card.Text>
              <Card.Text className="cardPrecio">${i.price}</Card.Text>
              <Link to={`/item/${i.id}`}><Button variant="dark">Ver detalles</Button></Link>
            </Card.Body>
          </Card>
      ))}
    </Container>
  );
};
