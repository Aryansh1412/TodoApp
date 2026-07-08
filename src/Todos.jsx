import React from "react";

function Todos({ todos ,deletetodo,setId}) {
  return (
    <>
      <div className="container text-center">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {todos.map((e) => {
            return (
              <>
                <tbody key={e.id}>
                  <tr>
                    <td>{e.title}</td>
                    <td>{e.description}</td>
                    <td>
                      <button onClick={()=>setId(e.id)} className="btn btn-warning mx-2">Edit</button>
                      <button onClick={()=>deletetodo(e.id)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Todos;
