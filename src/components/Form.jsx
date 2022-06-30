import React, { useState } from 'react'
import axios from 'axios'
const Registration = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        mobile:"",
        country:"",
        city:"",
        state:"",
        message:""
    });

    const [errorMessage, seterrorMessage] = useState('')

  
    const handleSubmitter = (e)=>{
      //e.preventDefault()
      if(formData.name == ""){
        return seterrorMessage("Enter the Name")
      }
      if(formData.email == ""){
        return seterrorMessage("Enter the Email")
      }
      if(formData.mobile == ""){
        return seterrorMessage("Enter the Mobile")
      }
      if(formData.country == ""){
        return seterrorMessage("Enter the Country")
      }
      if(formData.state == ""){
        return seterrorMessage("Enter the State")
      }
      if(formData.city == ""){
        return seterrorMessage("Enter the City")
      }
      if(formData.message == ""){
        return seterrorMessage("Enter the Message")
      }
      alert(`Hello ${formData.name}, you have registred successfully..!`)
      
    
        axios.post("http://localhost:8080/users", formData)
        .then(()=>{
            setFormData({
                name:"",
                email:"",
                mobile:"",
                country:"",
                city:"",
                state:"",
                message:""
            })
        })
    }

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        })
    }

  return (
    <div id='register'>
        <div id='top_div'>
            <form onSubmit={handleSubmitter}>
                <h1>Registration Form</h1>
                {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
                <input 
                  id='name' 
                  type="text" 
                  placeholder='Enter Name' 
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
                <br />
                <input 
                  id='email' 
                  type="email" 
                  placeholder='Enter Email' 
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <br />
                <input 
                  id='mobile' 
                  type="mobile" 
                  placeholder='Enter Mobile Number' 
                  onChange={handleChange}
                  value={formData.mobile}
                />
                <br />
                <select 
                    id="country" 
                    onChange={handleChange}
                    value={formData.country}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="US">United States</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Srilanka">Srilanka</option>
                </select>
                <br />
                <select 
                    id="state" 
                    onChange={handleChange}
                    value={formData.state}
                >
                  <option value="">Select State</option>
                  <option value="Telangana">Telangana</option>
                  <option value="JK">Jummu </option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Delhi">Delhi</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Andhra">Andhra Pradesh</option>   
                  <option value="Tamilnadu">Tamilnadu</option>                       
                  <option value="Rajastan">Rajastan</option>
                  
                </select>
                <br />
                <select 
                    id="city" 
                    onChange={handleChange}
                    value={formData.city}
                >
                  <option value="">Select City</option>
                  <option value="TG">Hyderabad</option>
                  <option value="Tamilnadu">Chennai</option>
                  <option value="Andhra">Vizag</option>
                  <option value="Kerala">Erode</option>
                  <option value="Andhra">Vijayawada</option>
                  <option value="TG">Mahabubabad</option>                  
                  <option value="Delhi">Adilabad</option>
                  <option value="TG">Warangal</option>
                  <option value="Karnataka">Hanmakonda</option>
                  <option value="TG">Rangareddy</option>
                  <option value="Mumbai">Karimnagar</option>
                  <option value="TG">Medak</option>
                  <option value="Rajastan">Nallagonada</option>
                </select>
                <br />
                <textarea 
                  id="message"
                  placeholder='Enter Message Here'
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
                <br />
                <button 
                  id='submit'
                >SUBMIT</button>
              </form>
        </div>
        <div id='bottom_div'></div> 
    </div>
  )
}

export default Registration
