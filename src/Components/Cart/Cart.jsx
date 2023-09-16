import { data, useState } from "react";
import { useEffect, } from "react";


const Cart = () => {
    const [allActors,setAllActors]= useState([]);
    useEffect(()=>{
        fetch("./data.json")
        .then((res)=>res.json())
        .then((data)=>setAllActors(data));
    },[])
    console.log(allActors);
    return (
       <div className="container mx-auto flex w-3/4">
        <div className="card-container grid grid-cols-3 gap-4">
        {allActors.map((actor)=>(
            <div className="card w-80 h-80 my-4 bg-base-500 shadow-xl text-center">
            <img className="w-16 rounded-full  ml-28" src={actor.image} alt="p" />
            <div className="card-body">
            <h2 className="card-title my-5">{actor.name}</h2>
            <p>If a dog chews shoes whose <br /> shoes does he choose?</p>
                <div className=" flex justify-around my-4">
                <p>Salary :{actor.salary}</p>
                <p>{actor.role}</p>
                </div>
                <button className="bg-green-400 text-white rounded-md">Selected</button>
            </div>
        </div>
        )
        )}
        </div>
        <div className="w-1/4">
        <h1 className="text-center">thi is cart</h1>
     </div>
       </div>
    );
};

export default Cart;