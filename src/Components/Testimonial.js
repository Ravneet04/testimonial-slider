import React from 'react'
import Card from './Card';
import {FiChevronLeft ,FiChevronRight } from "react-icons/fi";
import { useState } from 'react';

const Testimonial = (props) => {
    let reviews = props.reviews;
    const[index,setindex] = useState(0);
    function leftShiftHandler(){
        if (index - 1<0)
            setindex(reviews.length-1);
        else{
            setindex(index-1);
        }
    }
    function rightShiftHandler(){
        if (index+1 >=reviews.length)
            setindex(0);
        else{
            setindex(index+1);
        }
    }
    function surpriseHandler(){
       let randonIndex =  Math.floor(Math.random() * reviews.length);
       setindex(randonIndex);
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-lg'>
        <Card review = {reviews[index]}></Card>
        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft onClick={leftShiftHandler}/>
            </button>
            <button className='cursor-pointer hover:text-violet-500'>
               <FiChevronRight onClick={rightShiftHandler}/>
            </button>
        </div>

        <div>
            <button 
            onClick={surpriseHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}
export default Testimonial