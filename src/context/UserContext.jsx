import react , {createContext, useState} from 'react';
import { food_items } from '../food';
export const DataContext = createContext();

function UserContext({children}) {
    let [input , setInput] = useState("");
    let [cat , setCat]=useState(food_items)
    let [showCart , setShowCart]=useState(false);

    let data={input , setInput, cat, setCat, showCart, setShowCart};
    return (
        <div>
            <DataContext.Provider value={data}>
            {children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext;