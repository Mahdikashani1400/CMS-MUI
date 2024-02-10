import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import DataGridDemo from "./DataGridDemo";
export default function Muiex() {
  return (
    <>
      {/* <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="warning"
          startIcon={
            <DeleteIcon style={{ marginLeft: "10px" }} fontSize="large" />
          }
        >
          Hello world
        </Button>
      </div>
      <Stack direction="row" gap={2}>
        <Button
          variant="outlined"
          startIcon={
            <DeleteIcon
              style={{
                marginLeft: "10px",
              }}
            />
          }
        >
          Delete
        </Button>
        <Button
          variant="contained"
          endIcon={
            <SendIcon
              style={{
                marginRight: "10px",
              }}
            />
          }
        >
          Send
        </Button>
      </Stack> */}
      <DataGridDemo />
    </>
  );
}
