import react from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/cartSlice';
import { Increaseqty } from '../redux/cartSlice';
import { Decreaseqty } from '../redux/cartSlice';
import { toast } from 'react-toastify';


function Card2({name,price,image,qty,id}) {

    let dispatch = useDispatch()
    return (
        <div className=' w-full h-[120px] p-2 shadow-lg flex justify-between bg-slate-100'>
            <div className='w-[60%] h-full flex gap-5'>
                <div className='w-[50%] h-full overflow-hidden rounded-lg'>
                    <img src={image} alt="Sample" className='object-cover' />
                </div>
                <div className='w-[40%] h-full flex flex-col gap-5'>
                    <div className='text-lg text-gray-600 font-semibold'>
                        {name}
                    </div>
                    <div className='w-[100px] h-[45px] flex rounded-lg overflow-hidden shadow-lg border-2
                     border-green-400 font-semibold text-green-600 text-xl'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-slate-300' onClick={()=>{ if(qty>1) dispatch(Decreaseqty({id:id}))}}>-</button>
                        <span className='w-[40%] h-full flex justify-center items-center bg-slate-200'>
                            {qty}</span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-slate-300' onClick={()=>dispatch(Increaseqty({id:id}))}>+</button>
                    </div>
                </div>
            </div>
            <div className='w-[40%] h-full flex flex-col items-end px-5 gap-9'>
                <div className='text-green-600 font-semibold text-xl'>
                    Rs {price}/-
                </div>
                <div className='text-2xl text-red-600 hover:text-red-900 cursor-pointer'>
                    <RiDeleteBin6Line onClick={()=>{dispatch(RemoveItem(id))}} />
                </div>
            </div>
        </div>
    )
}

export default Card2