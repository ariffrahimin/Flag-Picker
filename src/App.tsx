import React from 'react';


function App() {
  return (
    <div className="App">
      {/* Title */}
      <div className='mt-20'>
        
        <h1 className= 'text-5xl text-center pt-12'>FlagPicker</h1>
      </div>
      {/* Search Input */}
      <div className='text-center mt-10'>
        <label className='relative block'>
          <input className="placeholder:italic placeholder:text-slate-400 bg-white w-1/3  border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Country's name..." type="text" name="search"/>
        </label>
      </div>
     
    </div>
  );
}

export default App;
