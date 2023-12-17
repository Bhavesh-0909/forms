import './App.css';
import React, { useState } from 'react';


function App() {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    Comments:"",
    isVisible:true,
    favCar:"",
    mode:""    
  })

  function changehandler(event){
    
    const {type ,value , checked, name} = event.target;
    
    setFormData((prevs)=> {
      return{
        ...prevs,
        [name] : type === "checkbox"? checked : value
      }
    })

  }

  console.log(formData)
  return (
    <div className="App">
      <form>

        <input 
        type="text"
        placeholder="first Name"
        name="firstName"
        value={formData.firstName}
        onChange={changehandler}
        />

        <input 
        type="text"
        placeholder="last Name"
        name="lastName"
        value={formData.lastName}
        onChange={changehandler}
        />
        <br/>
        <br/>
        
        <textarea
        placeholder="comments"
        name="Comments"
        value={formData.Comments}
        onChange={changehandler}
        />

        <br/>
        <br/>

        <input
        type="checkbox"
        name="isVisible"
        onChange={changehandler}
        checked={formData.isVisible}
        id='isVisible'
        />
        <label htmlFor='isVisible'>Is isVisible</label>

                

        
      </form>
    </div>
  );
}

export default App;
