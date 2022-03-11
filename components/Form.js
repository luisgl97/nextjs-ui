
import React, { useState } from 'react';
import Link from 'next/link';

export default function Form(formData, forNewTask=true) {
  
    const [form, setForm] = useState({
        title: formData.title,
        description: formData.description
      })
    
      const handleChange = e =>{
        const { value, name} = e.target;
        setForm({
          ...form,
          [name]: value
        })
      }
     
      console.log(forNewTask);
      
      const handleSubmit = e => {
        e.preventDefault();
        if(forNewTask){
            postData(form);
        }else{
            //Editar data
        }
        
      }
    
      const postData  = async (form) => {
        try{
          console.log(form);
          const res = await fetch('https://7xjrtq0o9b.execute-api.us-west-2.amazonaws.com/tasks',{
          mode: "no-cors",  
          method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
          })
    
          const data = await res.json();
    
        }catch(error){
          console.log(error)
        }
      } 

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Titulo"
        autoComplete="off"
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control my-2"
        placeholder="Description"
        autoComplete="off"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
    
    <button className="btn btn-primary w-100">Agregar</button>
     
      <Link href="/tasks">
        <a className="btn btn-warning w-100 my-2">Volver</a>
      </Link>
    </form>
  );
}
