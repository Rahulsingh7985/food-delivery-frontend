import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories.jsx'
import Card from '../components/Card.jsx'
import {food_items} from '../food'
import { DataContext } from '../context/Usercontext.jsx'
import { GiCancel } from "react-icons/gi";
import Card2 from '../components/Card2.jsx'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
function Home() {
    let {cat , setCat , input , showCart, setShowCart} = useContext(DataContext)

    function filter(Category){
        if(Category=="All"){
            setCat(food_items)
        }
        else{
           let newList = food_items.filter((item)=>(item.food_category===Category))
            setCat(newList)
        }
    }

    let items=useSelector(state=>state.cart)

    let subtotal = items.reduce((total,item)=>total+(item.price*item.qty),0)
    let deleveryfee = 20
    let taxes = subtotal*0.18
    let total = subtotal+deleveryfee+taxes
    return (
        <div className='bg-slate-200 w-full min-h-[100vh]'>
            <Nav />
            {!input? <div className=' w-[100%] flex flex-wrap justify-center items-center gap-5'>
                {Categories.map((item) => {
                    return <div className='w-[120px] h-[120px] bg-white rounded-md shadow-md flex flex-col items-start gap-5 p-5 justify-start text-[16px] hover:bg-green-200 transition-all duration-200' onClick={()=>filter(item.name)}>
                        {item.icon}
                        {item.name}
                    </div>
                })}
            </div>:null}
           
            <div className='w-full flex justify-center items-center flex-wrap px-5 p-8 gap-5 '>
                {cat.map((item)=>(
                    <Card name={item.food_name} image={item.food_image} type={item.food_type} id={item.id} price={item.price}/>
                ))}
            </div>

            <div className={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl transition-all duration-500 p-2 overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
                <header className='flex justify-between items-center p-4 font-semibold text-green-500 text-[18px]'>
                    <span>Order items</span>
                    <GiCancel className='hover:text-green-900 cursor-pointer text-2xl'
                    onClick={()=>{setShowCart(false)}}/>
                </header>

                {
                items.length>0 ?
                    <>
                <div className='w-full flex flex-col gap-3'>
                    {items.map((item)=>(
                        <Card2 name={item.name} price={item.price} image={item.image} qty={item.qty} id={item.id}/>
                    ))}
                </div>
                <div className='w-full p-4 flex flex-col gap-3 border-t-2 mt-5 border-slate-300'>
                    <div className='flex justify-between'>
                        <span>Subtotal</span>
                        <span>Rs {subtotal}/-</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Delivery Fee</span>
                        <span>Rs {deleveryfee}/-</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Taxes</span>
                        <span>Rs {taxes}/-</span>
                    </div>
                    <div className='flex justify-between font-semibold text-lg border-t-2 pt-2 border-slate-300'>
                        <span>Total</span>
                        <span>Rs {total}/-</span>
                    </div>
                    <button className='w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all mt-8' onClick={()=>{toast.success("order placed")}}>
                        Place Order
                    </button>
                </div>
                </>
                  :<div className='w-full h-[200px] flex justify-center items-center text-gray-500 font-semibold text-lg'>
                    No items in the cart
                </div>
                }
               

            </div>
        </div>

    )
}
export default Home