import React, {useState} from 'react';


const App = () => {
  
  const [country,setCountry] = useState("")

  const handleSubmit = () => {

    console.log("handleSubmit success")
    console.log(country)
  }
  return (
    <div className="App">
      {/* Title */}
      <div className='mt-20'>
        
        <h1 className= 'text-5xl text-center pt-12'>FlagPicker</h1>
      </div>
      {/* Search Input */}
      <div className='text-center mt-10'>
        <form className='relative block' onSubmit={handleSubmit} >
          <input className="placeholder:italic placeholder:text-slate-400 bg-white w-1/3  border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Country's name..." value={country} onChange={(e) => setCountry(e.target.value)} type="text" name="search"/>
          <input type='submit' value = "Search"  className=" text-black font-bold py-2 px-4 border border-black rounded ml-4" />
        </form>
      </div>
     
    </div>
  );
}

export default App;
