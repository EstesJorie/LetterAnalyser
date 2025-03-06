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
<<<<<<< HEAD
            <textarea rows="10" name="text"
              className="w-full p-3 text-white bg-blue-900 "/>
            <br />
            <button> Analyse </button>
=======
            <input type="text" name="text" id="" className="mono" placeholder="Type here..." />
            <button className='scifi'> Analyse </button>
>>>>>>> fd1b59e53c69a72cea578d58b5d08c309532956f
        </form>
        </div>
        </>
)}