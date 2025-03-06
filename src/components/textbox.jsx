import React, {useState} from 'react'

export default function TextGrabber({ setText }) {

    function handleFormSubmit(event){
            event.preventDefault()

            let formData = new FormData(event.target)
            let data = Object.fromEntries(formData.entries())

            setText(data.text); 

                console.log(data)
        }

return (
        <>
        <div>
        <form onSubmit={handleFormSubmit} action="" id="text-form">
            <textarea rows="10" name="text" placeholder='Start typing...'
             className="w-full p-3 mono rounded-xs text-white bg-[#284b63] placeholder-[#14213d]"></textarea>
            <br />
            <button className='scifi'> Analyse </button>
        </form>
        </div>
        </>
)}