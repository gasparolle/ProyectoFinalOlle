import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Provider = ({children}) => {
    const [items, setItems] = useState([]);

    const reset = () => setItems([]);

    const addItem = (item) => {
        const alreadyExists = items.some((i) => i.id === item.id);

        if (alreadyExists) {
            const newItems = items.map((i) => {
                if (i.id === item.id) {
                    return {...i, cantidad: i.cantidad + item.cantidad};
                } else {
                    return i;
                }
            });

            setItems(newItems);
        } else {
            setItems ((prev) => [...prev, item]);
        }
    }

    const removeItem = (id) => {
        const filter = items.filter(i => i.id !== id)
        setItems(filter)
    }
    
    return <ItemsContext.Provider value={{ addItem, items, reset, removeItem }}>
        {children}
        </ItemsContext.Provider>
}