import { useState } from "react";
import Button from "react-bootstrap/Button";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleSumar = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };

  const handleRestar = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleAgregar = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <div className="count">
      <Button className="button-count" onClick={handleRestar}>
        -
      </Button>
      <span className="cantidad">{count}</span>
      <Button className="button-count" onClick={handleSumar}>
        +
      </Button>
      <br />
      <Button onClick={handleAgregar} className="button-agregar">
        Agregar la carrito
      </Button>
    </div>
  );
};
