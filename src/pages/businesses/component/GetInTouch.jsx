import React, { useState } from 'react'
import "../style/GetInTouch.css"
const GetInTouch = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        companyname: "",
        options: "",
        text:""
    });

    const handleChange = (event) => {
      const {name, value} = event.target
      setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setInputs({
        name: "",
        email: "",
        companyname: "",
        options: "",
        text:""
      })
    }

 
  return (
    <div>
        <div className='general-cont'>
            <div className='txt-cont'>
                <p className='txt-p'>Get in Touch</p>
                <p className='txt-p2'>Accelerate your business potential
                    with solutions underpinned by research,
                    expertise, and technology.
                </p>
            </div>
            <div className='main-form-ctn'>
                <div className='form-ctn'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            placeholder='Full name'
                            type="text" 
                            name="name" 
                            value={inputs.name} 
                            onChange={handleChange}
                        />
                        <input 
                            placeholder='Email'
                            type="text" 
                            name="email" 
                            value={inputs.email || ""} 
                            onChange={handleChange}
                        />
                        <input 
                            placeholder='Company name'
                            type="text" 
                            name="companyname" 
                            value={inputs.companyname || ""} 
                            onChange={handleChange}
                        />
                        <select name="options" value={inputs.options} onChange={handleChange}>
                            <option> Select Purpose</option>
                            <option>Talent Placement</option>
                            <option>Employee Training and Upskilling</option>
                            <option>Project Delivery & Outsourcing</option>
                            <option>Venture Building</option>
                        </select>
                        <textarea 
                            name="text" 
                            rows="8" cols="70" 
                            placeholder="Type your message here" 
                            value={inputs.text}
                            onChange={handleChange}
                        />
                        <button className='form-btn' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch
