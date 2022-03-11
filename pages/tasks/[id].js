import BasicLayout from "../../layouts/BasicLayout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function primerTask({ data }) {
  
  return (
    <BasicLayout>
      <h1>Detalle de Tarea</h1>
      <div className="card mb-2 ms-2">
          <div className="card-body">
            <div className="h5 text-uppercase">
              {data.body.id} - {data.body.title}
            </div>
            <p className="fw-light">{data.body.description}</p>
          </div>
      </div>
    </BasicLayout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(
      "https://7xjrtq0o9b.execute-api.us-west-2.amazonaws.com/tasks"
    );
    const data = await res.json();
    
    const paths = data.body.tasks.map(({id}) => ({params:{id:`${id}`}}));
    
    return {
        
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    
  }
}

export async function getStaticProps({params}) {
    try {
      const res = await fetch(
        "https://7xjrtq0o9b.execute-api.us-west-2.amazonaws.com/tasks/"+params.id
      );

      const data = await res.json();
      
      console.log(data);
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.log(error);
    }
}

