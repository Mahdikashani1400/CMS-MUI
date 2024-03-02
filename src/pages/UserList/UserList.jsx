import { useEffect, useState } from "react";
import * as React from "react";
import DataGridCustom from "../../components/DataGridCustom/DataGridCustom";
import { userListData } from "../../datas";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./UserList.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  getDataFromDatabase,
  deleteDataFromDatabase,
  editDataFromDatabase,
} from "../../shared";
import { InputLabel, TextField } from "@mui/material";
import UseModal from "../../hooks/UseModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
};

export default function UserList() {
  const [userDatas, setUserDatas] = useState({
    rows: [],
    columns: userListData.columns,
  });

  const [currentUserInfo, setCurrentUserInfo] = useState({});
  let [inputValueName, setInputValueName] = useState("");
  let [inputValueEmail, setInputValueEmail] = useState("");
  let [inputValueTransAction, setInputValueTransAction] = useState("");
  const [userId, setUserId] = useState("");

  const [open, handleOpen, handleClose] = UseModal(
    setCurrentUserInfo,
    setInputValueName,
    setInputValueEmail,
    setInputValueTransAction,
    setUserId
  );
  userListData.columns[6]["renderCell"] = (params) => {
    return (
      <>
        <div
          id={"action-" + params.id}
          className=""
          style={{ display: "flex", gap: "20px" }}
        >
          <DeleteIcon
            color="error"
            id={"delete-" + params.id}
            onClick={(e) => {
              deleteUserHandler(e);
            }}
          />
          <div
            className="edit"
            id={"edit-" + params.id}
            onClick={(e) => {
              editModalHandler(e);
              handleOpen();
            }}
          >
            Edit
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    // console.log(userListData);

    getDataFromDatabase("users", setUserDatas, userListData.columns);
  }, []);
  useEffect(() => {
    if (userId.split("-")[0] === "delete") {
      setUserDatas((prevState) => {
        let newUsersData = prevState.rows.filter((data) => {
          return data.id !== userId.split("-")[1];
        });
        return { rows: newUsersData, columns: prevState.columns };
      });
    } else if (userId.split("-")[0] === "edit") {
      setCurrentUserInfo(
        userDatas.rows.find((userInfo) => {
          return userInfo.id === userId.split("-")[1];
        })
      );
    }
  }, [userId]);
  useEffect(() => {
    setInputValueName(currentUserInfo.name);
    setInputValueEmail(currentUserInfo.email);
    setInputValueTransAction(currentUserInfo.transaction);
  }, [currentUserInfo]);
  const deleteUserHandler = async (e) => {
    let targetId = e.nativeEvent.target.parentElement.id.split("-")[1];

    await deleteDataFromDatabase(targetId, "users");
    setUserId(`delete-${targetId}`);
  };
  const editModalHandler = async (e) => {
    let targetId = e.nativeEvent.target.parentElement.id.split("-")[1];

    setUserId(`edit-${targetId}`);
  };
  const editFetchHandler = async () => {
    let editedData = {
      name: inputValueName,
      email: inputValueEmail,
      transaction: inputValueTransAction,
    };
    setUserDatas((prevState) => {
      let newUserDatas = prevState.rows.map((data) => {
        if (data.id === userId.split("-")[1]) {
          data = { ...data, ...editedData };
        }
        return data;
      });
      return { rows: newUserDatas, columns: prevState.columns };
    });
    await editDataFromDatabase(userId.split("-")[1], "users", editedData);
  };

  return (
    <div className="user__list">
      {/* <BasicModal /> */}
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <form noValidate autoComplete="off" className="form__info-product">
              <div>
                <InputLabel htmlFor="userNameEdited">Full Name</InputLabel>
                <TextField
                  // label="Name"
                  style={{ margin: 8 }}
                  placeholder="Ali Mohammadi"
                  // helperText="Full width!"
                  // fullWidth
                  value={inputValueName}
                  onChange={(e) => {
                    setInputValueName(e.nativeEvent.target.value);
                  }}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    id: "userNameEdited",
                  }}
                />
              </div>
              <div>
                <InputLabel htmlFor="emailEdited">Email</InputLabel>
                <TextField
                  // label="Name"
                  style={{ margin: 8 }}
                  placeholder="Ali@gmail.com"
                  // helperText="Full width!"
                  // fullWidth
                  value={inputValueEmail}
                  onChange={(e) => {
                    setInputValueEmail(e.nativeEvent.target.value);
                  }}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    id: "emailEdited",
                  }}
                />
              </div>
              <div>
                <InputLabel htmlFor="transactionEdited">Transaction</InputLabel>
                <TextField
                  // label="Name"
                  style={{ margin: 8 }}
                  placeholder="545"
                  // helperText="Full width!"
                  // fullWidth
                  value={inputValueTransAction}
                  onChange={(e) => {
                    setInputValueTransAction(e.nativeEvent.target.value);
                  }}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    id: "transactionEdited",
                  }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={(e) => {
                    editFetchHandler(e);
                    handleClose();
                  }}
                >
                  Edit
                </Button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
      <h3 className="data__grid-title">User List</h3>

      <DataGridCustom
        // rows={userListData.rows}
        rows={userDatas.rows}
        columns={userDatas.columns}
      />
    </div>
  );
}
