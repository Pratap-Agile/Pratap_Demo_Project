import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePostAction } from "src/store/actions/PostActions";
import axiosInstance from "src/services/AxiosInstance";

export default function Post(props) {
  const dispatch = useDispatch();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axiosInstance.get("crud").then((getData) => setApiData(getData.data));
  }, []);

  const setData = (
    id,
    textInput,
    textarea,
    radioGroup,
    select,
    checkboxGroup,
    myfile
  ) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("TEXTINPUT", textInput);
    localStorage.setItem("TEXTAREA", textarea);
    localStorage.setItem("RADIOGROUP", radioGroup);
    localStorage.setItem("SELECT", select);
    localStorage.setItem("CHECKBOXGROUP", checkboxGroup);
    localStorage.setItem("MYFILE", myfile);
  };
  const onDelete = (id) => {
    dispatch(deletePostAction(id, props.history));
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Hobbies</Table.HeaderCell>
            <Table.HeaderCell>Myfile</Table.HeaderCell>
            <Table.HeaderCell>ACTIONS</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.textInput}</Table.Cell>
                <Table.Cell>{data.textarea}</Table.Cell>
                <Table.Cell>{data.radioGroup}</Table.Cell>
                <Table.Cell>{data.select}</Table.Cell>
                <Table.Cell>{data.checkboxGroup}</Table.Cell>
                <Table.Cell>{data.myfile}</Table.Cell>

                <Table.Cell>
                  <Link to={`/theme/editpost/${data.id}`}>
                    <Button
                      color="green"
                      onClick={() =>
                        setData(
                          data.id,
                          data.textInput,
                          data.Textarea,
                          data.radioGroup,
                          data.select,
                          data.checkboxGroup,
                          data.myfile
                        )
                      }
                    >
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/theme/displaydata/${data.id}`}>
                    <Button>View</Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
