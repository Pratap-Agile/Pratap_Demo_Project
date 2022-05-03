import React, { useEffect, useState, useRef } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import axiosInstance from "src/services/axiosInstance";
import {
  displayPostAction,
  updatePostAction,
} from "../../../../store/actions/PostActions";

// import { getPost } from "../../../store/selectors/PostSelectors";

import {
  Checkbox,
  Form,
  FormControl,
  Radio,
  Select,
  Textarea,
  TextInput,
} from "@contentful/f36-forms";
import axios from "axios";

import { useNavigate, useParams } from "react-router";

function EditPost(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateRequired = (value) => !value;
  // const filesharhe_ref = useRef();

  let { id } = useParams();
  const [initialValues, setInitialValues] = useState({});

  const paperStyle = { padding: 20, width: 400, margin: "50px auto" };
  const headerStyle = { margin: 0 };

  useEffect(async () => {
    await axiosInstance.get(`crud/${id}`).then((res) =>
      setInitialValues({
        textInput: res.data.textInput,
        textarea: res.data.textarea,
        select: res.data.select,
        radioGroup: res.data.radioGroup,
        checkboxGroup: res.data.checkboxGroup,
        // myfile: res.data.myfile,
      })
    );
  }, [id]);
  console.log(initialValues);
  const onInputChange = (e) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });
  };
  const filesharhe_ref = useRef();

  const onSubmit = async (values) => {
    dispatch(displayPostAction({ ...values, id }));
    console.log("values", values);
    navigate("/theme/post");
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Update User Data</h2>
        </Grid>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          enableReinitialize={true}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Field
                name="textInput"
                validate={validateRequired}
                onChange={(e) => onInputChange(e)}
              >
                {({ field, meta }) => (
                  <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
                    <FormControl.Label>Name</FormControl.Label>
                    <TextInput {...field} />

                    {meta.touched && meta.error && (
                      <FormControl.ValidationMessage>
                        {meta.error}
                      </FormControl.ValidationMessage>
                    )}
                  </FormControl>
                )}
              </Field>

              <Field
                name="textarea"
                validate={validateRequired}
                onChange={(e) => onInputChange(e)}
              >
                {({ field, meta }) => (
                  <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
                    <FormControl.Label>Address</FormControl.Label>
                    <Textarea {...field} />

                    {meta.touched && meta.error && (
                      <FormControl.ValidationMessage>
                        {meta.error}
                      </FormControl.ValidationMessage>
                    )}
                  </FormControl>
                )}
              </Field>

              <label> City : </label>
              <br />
              <Field
                name="select"
                validate={validateRequired}
                onChange={(e) => onInputChange(e)}
              >
                {({ field }) => (
                  <FormControl>
                    <Select {...field}>
                      <Select.Option value="" isDisabled Select>
                        Select City
                      </Select.Option>
                      <Select.Option value="Ahemdabad">Ahemdabad</Select.Option>
                      <Select.Option value="Broda">Broda</Select.Option>
                      <Select.Option value="Mumbai">Mumbai</Select.Option>
                    </Select>
                  </FormControl>
                )}
              </Field>

              <label>Gender : </label>
              <br />
              <Field
                name="radioGroup"
                validate={validateRequired}
                onChange={(e) => onInputChange(e)}
              >
                {({ field }) => (
                  <Radio.Group {...field}>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Radio.Group>
                )}
              </Field>

              <br />
              <lable>Hobbies</lable>
              <br />
              <Field
                name="checkboxGroup"
                validate={validateRequired}
                onChange={(e) => onInputChange(e)}
              >
                {({ field }) => (
                  <Checkbox.Group {...field}>
                    <Checkbox value="reading">Reading</Checkbox>
                    <Checkbox value="traveling">travelling</Checkbox>
                    <Checkbox value="cricket">cricket</Checkbox>
                  </Checkbox.Group>
                )}
              </Field>

              <lable>Choose a File : </lable>
              <Field
                innerRef={filesharhe_ref}
                type="file"
                name="myfile"
                validate={validateRequired}
              />
              <ErrorMessage name="myfile" />
              <br />

              <Button variant="contained" type="submit" color="primary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}
export default EditPost;
