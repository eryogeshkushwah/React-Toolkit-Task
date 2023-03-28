import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, markAsCompleted, taskSelector } from "../Reducers/Reducer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const ListTask = () => {
  const myState = useSelector((state) => taskSelector.selectAll(state));
  const dispatch = useDispatch();
  console.log(myState);

  let isComplete = myState.some((state) => {
    if (state.completed) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>List of Tasks</h2>

      <section className="intro">
        <div className="bg-image h-100" style={{ backgroundColor: "#f5f7fa" }}>
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-9">
                  <div className="card">
                    <div className="card-body p-0">
                      <div
                        className="table-responsive table-scroll"
                        data-mdb-perfect-scrollbar="true"
                        style={{ position: "relative" }}
                      >
                        <table className="table table-striped mb-0">
                          <thead
                            style={{
                              backgroundColor: "#002d72",
                              color: "white",
                            }}
                          >
                            <tr>
                              <th scope="col">Mark</th>
                              <th scope="col">Tasks</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {myState.length === 0 ? (
                              <tr>
                                <th>
                                  <div
                                    style={{
                                      marginLeft: "50%",
                                    }}
                                  >
                                    Task not added yet
                                  </div>
                                </th>
                              </tr>
                            ) : (
                              myState.map((state) => (
                                <tr key={state.id}>
                                  <th scope="row">
                                    <input
                                      type="checkbox"
                                      name="check"
                                      value="something"
                                      className="form-check-input"
                                      onChange={() =>
                                        dispatch(markAsCompleted(state))
                                      }
                                      checked={
                                        state.completed ? "checked" : null
                                      }
                                    />
                                  </th>
                                  {state.completed ? (
                                    <td
                                      style={{ textDecoration: "line-through" }}
                                    >
                                      {state?.text}
                                    </td>
                                  ) : (
                                    <td>{state?.text}</td>
                                  )}
                                  <td>
                                    <button
                                      className="btn btn-outline-danger"
                                      onClick={() =>
                                        dispatch(deleteTask(state.id))
                                      }
                                    >
                                      delete
                                    </button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isComplete ? (
        <>
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            Completed Task
          </h2>
          <section className="intro">
            <div
              className="bg-image h-100"
              style={{ backgroundColor: "#f5f7fa" }}
            >
              <div className="mask d-flex align-items-center h-100">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-9">
                      <div className="card">
                        <div className="card-body p-0">
                          <div
                            className="table-responsive table-scroll"
                            data-mdb-perfect-scrollbar="true"
                            style={{ position: "relative" }}
                          >
                            <table className="table table-striped mb-0">
                              <thead
                                style={{
                                  backgroundColor: "#002d72",
                                  color: "white",
                                }}
                              >
                                <tr>
                                  <th scope="col">Tasks</th>
                                  <th scope="col">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {myState.map((state) =>
                                  state.completed ? (
                                    <tr key={state.id}>
                                      <td>{state?.text}</td>
                                      <td>
                                        <button
                                          className="btn btn-outline-danger m"
                                          onClick={() =>
                                            dispatch(deleteTask(state.id))
                                          }
                                        >
                                          delete
                                        </button>
                                      </td>
                                    </tr>
                                  ) : null
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
};

export default ListTask;
