import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import cart from '../assets/cart.png'
import { ItemsContext } from '../contexts/ItemsContext'
import { useContext } from 'react'



export const CartWidget = () => {
    const { items } = useContext(ItemsContext);

    const cantidad = items.reduce((acc, act) => acc + act.cantidad, 0)
    return (

    <Link  to='/cart'> 
    <Button variant="warning" className='cart-widget'>
    <img src={cart} alt='carrito' height={30} />Carrito 
        ({cantidad})
  
    </Button>
    </Link>
)
}