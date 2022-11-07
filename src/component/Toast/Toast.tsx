import React, { useState } from 'react'

const Toast = () => {
    const [status, setStatus]=useState("");
    const childeToParent=()=>{

    }
  return (
    <div id="toast-danger" data-testid="toast" className=" animate-bounce ease-in-out flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-red-200 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Error icon
        
        </span>
    </div>
    <div className="ml-3 text-sm font-normal">Enter a country's name</div>
</div>
  )
}

export default Toast