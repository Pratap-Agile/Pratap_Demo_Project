import React, { useEffect, useState, useContext } from "react";
import firebaseDb from "../../firebase";
import { Link } from "react-router-dom";

const ListRecord = () => {
  const [data, setData] = useState({});

  console.log("data", data);

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      firebaseDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Address</th>
                  {/* <th scope="col">File</th> */}
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data[id].fullName}</td>
                      <td>{data[id].mobile}</td>
                      <td>{data[id].email}</td>
                      <td>{data[id].gender}</td>
                      <td>{data[id].address}</td>
                      {/* <td>{data[id].file}</td> */}
                      <td>
                        <Link to={`/firebase/update/${id}`}>
                          <a className="btn text-primary">
                            <button>update</button>
                          </a>
                        </Link>

                        <a
                          className="btn text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <button>delete</button>
                        </a>
                        <Link to={`/firebase/view/${id}`}>
                          <a className="btn text-info">
                            <button>view</button>
                          </a>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;
