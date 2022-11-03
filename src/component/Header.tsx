import React, { useEffect, useState } from 'react'

const Header = () => {
    
    const URL:any = "https://restcountries.com/v3.1/name/";
    const [country,setCountry] = useState("");
    const [name, setName] = useState("");
    const [flag, setFlag] = useState("");

    //Fetch data from API and assign each data to it
    const fetchData =(x:any)=>{
        fetch(URL + '/' + x)
        .then((res) => res.json())

        .then((response) => {
        console.log(response[0].flags.png);
        setName(response[0].name.official);
        setFlag(response[0].flags.png)
        })
        .catch(function (error) {
          // TODO: Show the OOPS display
            console.log(error);
        })
    }
    // After click Search button
    const handleSubmit =  (evt:any) => {
    evt.preventDefault();
    console.log(country);
    fetchData(country);
    console.log("test")

        
  }
    // TODO: Error handling


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
      <hr className='mt-20'/>
      <div className='text-center bg-zinc-400 ml-1/2 mr-1/2'>
        <img className='ml-auto mr-auto mt-20' src={flag}/>
        <h1 className='mt-11'>{name}</h1>
        
      </div>
</div>
    )
  
}

export default Header;
