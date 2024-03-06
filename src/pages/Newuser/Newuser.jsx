import { Button, InputLabel, Select, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import styled from "@emotion/styled";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useRef, useState } from "react";
import { addData } from "../../shared";
import { Navigate } from "react-router-dom";
export default function NewUser() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const [nameValue, setNameValue] = useState("");
  const [email, setEmail] = useState("");
  const [newUserInfo, setNewUserInfo] = useState({});
  const imageRef = useRef();

  function changeImgHandler(e) {
    imageRef.current.src = URL.createObjectURL(e.target.files[0]);
  }
  async function addUserHandler() {
    await addData("users", {
      email,
      name: nameValue,
    });
    setNewUserInfo({ email, name: nameValue });
  }

  return (
    <>
      {console.log(newUserInfo.length)}
      {(newUserInfo["email"] && <Navigate to={"/users"} />) || (
        <div className="product__box big">
          <div className="">
            <ThemeProvider theme={darkTheme}>
              <CssBaseline>
                <Box sx={{ height: 400, width: "100%" }}>
                  <form
                    noValidate
                    autoComplete="off"
                    className="form__info-product"
                  >
                    <div>
                      <InputLabel htmlFor="userName">User Name</InputLabel>
                      <TextField
                        id="standard-full-width"
                        // label="Name"
                        style={{ margin: 8 }}
                        placeholder="Placeholder"
                        // helperText="Full width!"
                        // fullWidth
                        value={nameValue}
                        onChange={(e) => {
                          setNameValue(e.nativeEvent.target.value);
                        }}
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          id: "userName",
                        }}
                      />
                    </div>
                    <div>
                      <InputLabel htmlFor="Email">Email</InputLabel>
                      <TextField
                        id="standard-full-width"
                        // label="Name"
                        style={{ margin: 8 }}
                        placeholder="Placeholder"
                        // helperText="Full width!"
                        // fullWidth
                        value={email}
                        onChange={(e) => {
                          setEmail(e.nativeEvent.target.value);
                        }}
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          id: "Email",
                        }}
                      />
                    </div>
                  </form>
                </Box>
              </CssBaseline>
            </ThemeProvider>
          </div>
          <div className="product__edit-img">
            <div className="">
              <img src="/img/profile.jpg" alt="" ref={imageRef} />
            </div>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <VisuallyHiddenInput type="file" onChange={changeImgHandler} />
            </Button>
          </div>
          <div className="" style={{ flexBasis: "100%", marginTop: "1rem" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={addUserHandler}
            >
              Add User
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
