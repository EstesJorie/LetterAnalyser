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
            <input type="text" name="text" id="" className="mono" placeholder="Type here..." />
            <button className='scifi'> Analyse </button>
        </form>
        </div>
        </>
)}