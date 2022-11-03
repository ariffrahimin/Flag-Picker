import React, { useState } from 'react'

const Header = () => {
    

    const [country,setCountry] = useState("");
    const [result, setResult] = useState("");

    const queue:String[] = []


    const handleSubmit = () => {
        console.log("handleSubmit success");
        console.log(country);
        setResult(country)
        queue.push(result)
        console.log(queue)
        
  }
    return (
      <div>{/* Title */}
      <div className='mt-20'>
        
        <h1 className= 'text-5xl text-center pt-12'>FlagPicker</h1>
      </div>
      {/* Search Input */}
      <div className='text-center mt-10'>
        <form className='relative block' onSubmit={handleSubmit} >
          <input className="placeholder:italic placeholder:text-slate-400 bg-white w-1/3  border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Country's name..." value={country} onChange={(e) => setCountry(e.target.value)} type="text" name="search"/>
          <button type='submit' value = {country}  className=" text-black font-bold py-2 px-4 border border-black rounded ml-4" >Search</button>
        </form>
      </div>

     <div>
      <h1>HU</h1>
      <h1>{queue}</h1>
     </div></div>
    )
  
}

export default Header;
