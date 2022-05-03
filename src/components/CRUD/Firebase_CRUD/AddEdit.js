import React, { useState, useEffect } from "react";
import firebaseDb from "../../../firebase";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { RadioButton } from "primereact/radiobutton";

const AddEdit = () => {
  const navigate = useNavigate();
  const [initialState, setState] = useState(values);
  const [data, setData] = useState({});
  const paperStyle = { padding: 10, width: 500, margin: "20px auto" };
  const values = {
    fullName: "",
    mobile: "",
    email: "",
    gender: "",
    address: "",
    fruits: "",
    file: "",
  };
  const { fullName, mobile, email, gender, address, fruits, file } =
    initialState;

  const currentId = useParams();
  const { id } = currentId;

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
  }, [id]);

  useEffect(() => {
    if (isEmpty(id)) {
      console.log("initialState", initialState);
      setState({ ...values });
    } else {
      setState({ ...data[id] });
    }
  }, [id, data]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };

  const handleSubmit = (e, obj) => {
    e.preventDefault();
    console.log("initialState", initialState);
    if (isEmpty(id)) {
      firebaseDb.child("contacts").push(initialState, (err) => {
        if (err) {
          console.log(err);
          navigate("firebase/read");
        }
      });
    } else {
      firebaseDb.child(`contacts/${id}`).set(initialState, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
    navigate("/firebase/read");
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="bmd-label-floating">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="bmd-label-floating">Mobile</label>
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    value={mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="bmd-label-floating">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="font-weight-bold mb-0">Gender</label>
                  <div className="p-col-12">
                    <RadioButton
                      inputId="rb1"
                      name="gender"
                      value="Male"
                      onChange={handleInputChange}
                      checked={gender === "Male"}
                    />
                    <label htmlFor="rb1" className="p-radiobutton-label">
                      Male
                    </label>
                    <RadioButton
                      inputId="rb2"
                      name="gender"
                      value="Female"
                      onChange={handleInputChange}
                      checked={gender === "Female"}
                    />
                    <label htmlFor="rb1" className="p-radiobutton-label">
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="bmd-label-floating">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button className="btn btn-default">Cancel</button>
                <button type="submit" className="btn btn-success btn-raised">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default AddEdit;
