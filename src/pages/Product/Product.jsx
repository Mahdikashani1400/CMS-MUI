import { Button, InputLabel, Select, TextField } from "@mui/material";
import Chart from "../../components/Chart/Chart";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { productDataSales } from "../../datas";
import "./Product.css";
import styled from "@emotion/styled";
export default function Product() {
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
    <div className="product">
      <div className="product__title">
        <h3>Product</h3>
        <Button variant="contained" color="primary">
          Create
        </Button>
      </div>
      <div className="product__boxes">
        <div className="product__box">
          <h6 className="chart__title">Sale In Month</h6>
          <div className="chart__container">
            <Chart type="line" data={productDataSales} height={130} />
          </div>
        </div>
        <div className="product__box">
          <div
            className=""
            style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
          >
            <img className="product__box-img" src="/img/profile.jpg" alt="" />
            <p>Dell LapTop</p>
          </div>
          <div className="product__box-info">
            <div className="">
              <span>ID:</span>
              <span>121</span>
            </div>
            <div className="">
              <span>Name:</span>
              <span>Dell LapTop</span>
            </div>
            <div className="">
              <span>Sales:</span>
              <span>44000</span>
            </div>
            <div className="">
              <span>Active:</span>
              <span>YES</span>
            </div>
            <div className="">
              <span>In Stock:</span>
              <span>NO</span>
            </div>
          </div>
        </div>
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
                      <InputLabel htmlFor="productName">
                        Product Name
                      </InputLabel>
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
        </div>
      </div>
    </div>
  );
}
