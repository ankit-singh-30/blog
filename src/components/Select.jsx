import React from "react";

function Select({options,label,className="",...props},ref) {
  return (
    <div className="w-full">
      {label && <label 
            className='mb-1 pl-1' 
        >
                {label}
            </label>
    }
    <select className={`border border-gray-200 rounded-lg w-full m-1 p-1 ${className}`} {...props} ref={ref}>
    {options?.map((option)=>(
        <option key={option} value={option}>{option.toUpperCase()}</option>
    ))}
    </select>
    </div>
  )
}

export default React.forwardRef(Select);