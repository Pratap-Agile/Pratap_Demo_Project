import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axiosInstance from "src/services/axiosInstance";
import { Grid, Paper } from "@material-ui/core";

const DisplatData = () => {
  const paperStyle = { padding: 20, width: 500, margin: "10px auto" };

  const { id } = useParams();
  const [user, setUser] = useState({});
  {
    console.log(id);
  }
  console.log("user", setUser);

  useEffect(() => {
    axiosInstance.get(`crud/${id}`).then((res) => setUser(res.data));
  }, []);
  console.log("user", user);
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid>{/* <h2>User Data </h2> */}</Grid>
        <div class="card">
          <div class="card-header lead">User Detail</div>
          <div class="card-body">
            <p class="card-text">Name : {user.textInput}</p>
            <p class="card-text">Address : {user.textarea}</p>
            <p class="card-text">City : {user.select}</p>
            <p class="card-text">Gender : {user.radioGroup}</p>
            <p class="card-text">Hobbies : {user.checkboxGroup}</p>
            <p class="card-text">File : {user.myfile}</p>
            <Link to="/theme/post">
              <a className="btn btn-info">Go Back</a>
            </Link>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default DisplatData;