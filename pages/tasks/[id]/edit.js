import React from 'react'
import BasicLayout from '../../../layouts/BasicLayout'
import Form from '../../../components/Form'

export default function edit(data) {
  const formData = {
    title: data.title,
    description: data.description,
  }

  const forNewTask = false;
  return (
    <BasicLayout>
       <div className="container">
         <h1 className="my-3">Editar Tarea</h1>
         
         <Form formData={formData} forNewTask={forNewTask}/>
       </div>
    </BasicLayout>
   
  )
}
