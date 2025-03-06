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
            <textarea rows="10" name="text" 
              className="w-full p-3 text-white bg-blue-900 "/>
            <br />
            <button> Analyse </button>
        </form>
        </div>
        </>
)}