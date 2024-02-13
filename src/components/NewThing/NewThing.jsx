import "./NewThing.css";
import { Button, InputLabel, Select, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import styled from "@emotion/styled";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
export default function NewThing() {
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
  return (
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
                  <InputLabel htmlFor="productName">Product Name</InputLabel>
                  <TextField
                    id="standard-full-width"
                    // label="Name"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    // helperText="Full width!"
                    // fullWidth
                    // value={"Asus"}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      id: "productName",
                    }}
                  />
                </div>
                <div>
                  <InputLabel htmlFor="price">Price ($)</InputLabel>
                  <TextField
                    id="standard-full-width"
                    // label="Name"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    // helperText="Full width!"
                    // fullWidth
                    // value={"Asus"}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      id: "price",
                    }}
                  />
                </div>

                <div className="">
                  <InputLabel htmlFor="stock">In Stock</InputLabel>
                  <Select
                    native
                    //   value={state.age}
                    //   onChange={handleChange}
                    inputProps={{
                      name: "stock",
                      id: "stock",
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                </div>
                <div className="">
                  <InputLabel htmlFor="active">Active</InputLabel>
                  <Select
                    native
                    //   value={state.age}
                    //   onChange={handleChange}
                    inputProps={{
                      name: "active",
                      id: "active",
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                </div>
              </form>
            </Box>
          </CssBaseline>
        </ThemeProvider>
      </div>
      <div className="product__edit-img">
        <div className="">
          <img src="/img/profile.jpg" alt="" />
        </div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload (Edit)
          <VisuallyHiddenInput type="file" />
        </Button>
      </div>
      <div className="" style={{ flexBasis: "100%", marginTop: "1rem" }}>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </div>
    </div>
  );
}
