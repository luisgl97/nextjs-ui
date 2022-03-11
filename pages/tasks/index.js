import BasicLayout from "../../layouts/BasicLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Index({ data }) {
  console.log(data);
  return (
    <BasicLayout>
      <h1>Lista de tareas</h1>
      {data.body.tasks.map(({ id, title, description }) => (
        <div className="card mb-2 ms-2" key={id}>
          <div className="card-body">
            <div className="h5 text-uppercase">
              <Link href={`/tasks/${id}`}>
                <a>
                  {title}
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </BasicLayout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://7xjrtq0o9b.execute-api.us-west-2.amazonaws.com/tasks"
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
