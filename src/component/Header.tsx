import React, { useState, useRef } from 'react'

const Header = () => {
    
    const URL:any = "https://restcountries.com/v3.1/name/";
    const [name, setName] = useState("");
    const [flag, setFlag] = useState("");
    const second:any = useRef();

    //Fetch data from API and assign each data to it
    const fetchData =(x:any)=>{
        fetch(URL + '/' + x)
        .then((res) => res.json())
        .then((response) => {
        setName(response[0].name.official);
        setFlag(response[0].flags.png)
        })
        .catch(function (error) {
            console.log(error);
            setFlag("https://t3.ftcdn.net/jpg/01/01/89/46/360_F_101894688_RVSZUtDfPR6Cr5eBDQI7Qo5pZ01jmyK3.jpg")
            setName("The Country that you entered, does not exist, Please try other country")
        })
    }
    // After click Search button
    const handleSubmit =  (evt:any) => {
    evt.preventDefault();
    fetchData(second.current?.value);
        
  }

  console.count("render")
    return (
      <div>{/* Title */}
      <div className='mt-20'>
        
        <h1 className= 'text-5xl text-center pt-12'>FlagPicker</h1>
      </div>
      {/* Search Input */}
      <div className='text-center mt-10'>
        <form className='relative block' onSubmit={handleSubmit} >
          <input ref={second} className="placeholder:italic placeholder:text-slate-400 bg-white w-1/3  border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Country's name..."  type="text" name="search"/>
          <button type='submit'   className=" text-black font-bold py-2 px-4 border border-black rounded ml-4" >Search</button>
        </form>
      </div>
      <hr className='mt-20'/>
      {flag !== "" ? (
      <div className='text-center bg-zinc-400 ml-1/2 mr-1/2'>
        
        <img alt="Pick A Country" className='ml-auto mr-auto pt-20' src={flag}/>
        <h1 className='mt-11'>{name}</h1> </div>
        ):(
      <div>
        
        
      </div>)}
</div>
    )
  
}

export default Header;
