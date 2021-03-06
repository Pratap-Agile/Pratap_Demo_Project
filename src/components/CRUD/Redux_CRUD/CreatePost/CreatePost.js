import { useRef } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createPostAction } from "../../../../store/actions/PostActions";

import {
  Checkbox,
  Form,
  FormControl,
  Radio,
  Select,
  Textarea,
  TextInput,
} from "@contentful/f36-forms";

const CreatePost = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const paperStyle = { padding: 20, width: 400, margin: "50px auto" };
  const headerStyle = { margin: 0 };

  const initialValues = {
    textInput: "",
    textarea: "",
    select: "",
    radioGroup: "",
    checkboxGroup: [""],
    checkbox: false,
    myfile: "",
  };

  const validateRequired = (value) => !value;
  const filesharhe_ref = useRef();

  const onSubmit = (data) => {
    const userData = {
      textInput: data.textInput,
      textarea: data.textarea,
      select: data.select,
      radioGroup: data.radioGroup,
      checkboxGroup: data.checkboxGroup,
      myfile: data.myfile,
    };
    console.log(userData);
    dispatch(createPostAction(userData));
    navigate("/theme/post/");
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>User Form</h2>
        </Grid>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="textInput" validate={validateRequired}>
                {({ field }) => (
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <TextInput {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name="textarea" validate={validateRequired}>
                {({ field }) => (
                  <FormControl>
                    <FormControl.Label>Address</FormControl.Label>
                    <Textarea {...field} />
                  </FormControl>
                )}
              </Field>

              <label> City : </label>
              <br />
              <Field name="select" validate={validateRequired}>
                {({ field }) => (
                  <FormControl>
                    <Select {...field}>
                      <Select.Option value="" isDisabled Select>
                        Select City
                      </Select.Option>
                      <Select.Option value="Bhavnagar">Bhavnagar</Select.Option>
                      <Select.Option value="Ahemdabad">Ahemdabad</Select.Option>
                      <Select.Option value="Mumbai">Mumbai</Select.Option>
                    </Select>
                  </FormControl>
                )}
              </Field>

              <label>Gender : </label>
              <br />
              <Field name="radioGroup" validate={validateRequired}>
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
              <Field name="checkboxGroup" validate={validateRequired}>
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
};

export default CreatePost;
