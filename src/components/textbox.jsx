import React, {useState} from 'react'

export default function TextGrabber({ setText }) {
        function handleFormSubmit(event) {
            setText(event.target.value);
        }

return (
        <>
        <div>
        <form onSubmit={handleFormSubmit} action="" id="text-form">
            <textarea rows="10" name="text" placeholder='Start typing...'
             className="w-full p-3 mono rounded-xs text-white bg-[#284b63] placeholder-[#14213d]" onChange={handleFormSubmit} ></textarea>
        </form>
        </div>
        </>
)}