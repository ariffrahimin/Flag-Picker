import React, { useState } from 'react'

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
            console.log(error);
            setFlag("data:image/jpeg;base64,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")
            setName("The Country that you entered, does not exist, Please try other country")
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

  console.count("render")
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
