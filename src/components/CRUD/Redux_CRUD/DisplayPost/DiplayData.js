import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axiosInstance from "src/services/AxiosInstance";
import { Grid, Paper } from "@material-ui/core";

const DisplatData = () => {
  const paperStyle = { padding: 20, width: 500, margin: "10px auto" };

  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosInstance.get(`crud/${id}`).then((res) => setUser(res.data));
  }, []);
  return (
    <Grid>
      <Paper style={paperStyle}>
        <div className="card">
          <div className="card-header lead">User Detail</div>
          <div className="card-body">
            <p className="card-text">Name : {user.textInput}</p>
            <p className="card-text">Address : {user.textarea}</p>
            <p className="card-text">City : {user.select}</p>
            <p className="card-text">Gender : {user.radioGroup}</p>
            <p className="card-text">Hobbies : {user.checkboxGroup}</p>
            <p className="card-text">File : {user.myfile}</p>
            <Link to="/theme/post">
              <p className="btn btn-info">Go Back</p>
            </Link>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default DisplatData;
