
import BasicLayout from '../../layouts/BasicLayout'
import Form from '../../components/Form';
import "bootstrap/dist/css/bootstrap.min.css";

export default function newtask() {

  const formData = {
    title: '',
    description: '',
  }

 const forNewTask = true;
  return (
    <BasicLayout>
       <div className="container">
         <h1 className="my-3">Agregar Tarea</h1>
         
         <Form formData={formData} forNewTask={forNewTask}/>
       </div>
    </BasicLayout>
   
  )
}
