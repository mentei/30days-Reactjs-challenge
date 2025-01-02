import React from "react";

const Card=({city, tempreture , condition , mood})=>{
    return (
        <>
        <div className="w-screen h-screen bg-purple-200">
            <div id="top" className="w-full h-1/4  align-middle  p-8   flex  items-center  justify-center bg-center">
                <h1 className="text-3xl uppercase text-pretty from-neutral-600 p-5  font-extrabold translate-x-5 underline underline-offset-8" >weatherry for me </h1>
            </div>
          <div id="center" className="w-1/2 h-1/2 bg-white ml-8 rounded-lg  p-8  flex  items-center  justify-center ">

            <h3 className="text-2xl text-emerald-300 font-semibold  w-full ">{city}🌆</h3>
            <h3 className="text-2xl text-yellow-400 w-full ">{tempreture}🍤</h3>
            <h3 className="text-2xl text-yellow-400 w-full ">{condition}👀</h3>
            <h3 className="text-2xl text-yellow-400  w-full">{mood}☺️</h3>

          </div>
        </div>
        
        </>
    )
}
export default Card;