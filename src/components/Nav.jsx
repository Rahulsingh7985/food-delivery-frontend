import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { DataContext } from "../context/Usercontext.jsx";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Nav() {
    let {input , setInput , cat, setCat , showCart, setShowCart} = useContext(DataContext)
    useEffect(()=>{
         let newList = food_items.filter((item)=>item.food_name.toLowerCase().includes(input.toLowerCase()))
        setCat(newList)
       
    },[input])

    let items = useSelector(state=>state.cart)
    return(
        <div className="w-full  h-[100px] flex justify-between items-center px-8">
            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md">
                <MdFastfood  className="w-[30px] h-[30px] text-green-500"/>
            </div>

            <form className="w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md" onSubmit={(e)=>e.preventDefault()}>
                <IoSearch className="text-green-500 w-[20px] h-[20px]"/>
                <input type="text" placeholder="Search Item.."
                className="w-[100%] outline-none text-[20px]" onChange={(e)=>setInput(e.target.value)} value={input}></input>
            </form>

             <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative cursor-pointer"
             onClick={()=> {setShowCart(true)}}>
                <span className=" absolute top-0 right-2 text-green-500 font-bold text-[18px] ">
                    {items.length}</span>
                <LuShoppingBag  className="w-[30px] h-[30px] text-green-500"/>
            </div>
            
        </div>
    )
}

export default Nav 