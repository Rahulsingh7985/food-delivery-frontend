import React from 'react';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({name,price,image,type,id}) {
    let dispatch = useDispatch()
    return(
        <div className='w-[250px] h-[300px] bg-white p-2 rounded-md shadow-md flex flex-col gap-2 hover:border-4 border-green-300'>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-md'>
                <img src={image} alt="Sample" />
            </div>
            <div className='font-semibold'>
                {name}
            </div>
            <div className=' font-semibold w-full text-green-500 flex justify-between item-center'>
                <div> Rs {price}/- </div>
                <div className='flex justify-center items-center gap-2'>
                   {type==="veg" ? <LuLeafyGreen /> : <GiChickenOven />} {type}
                </div>
            </div>
            <button className='w-full p-2 bg-green-300 rounded-md hover:bg-green-400 transition-all'
              onClick={()=>
             { dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}));
             toast.success("item added")
             }}>
                Add to dish </button>
        </div>
    )
}

export default Card;