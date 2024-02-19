// import * as React from "react";
// import "./BasicModal.css";
// import { InputLabel, TextField } from "@mui/material";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   color: "black",
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   //   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       {/* <Button onClick={handleOpen}>Open modal</Button> */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <form
//             noValidate
//             autoComplete="off"
//             className="form__info-modal form__info-product"
//           >
//             <div>
//               <InputLabel htmlFor="userNameEdited">Full Name</InputLabel>
//               <TextField
//                 // label="Name"
//                 style={{ margin: 8 }}
//                 placeholder="Ali Mohammadi"
//                 // helperText="Full width!"
//                 // fullWidth
//                 // value={"Asus"}
//                 margin="normal"
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 inputProps={{
//                   id: "userNameEdited",
//                 }}
//               />
//             </div>
//             <div>
//               <InputLabel htmlFor="emailEdited">Email</InputLabel>
//               <TextField
//                 // label="Name"
//                 style={{ margin: 8 }}
//                 placeholder="Ali@gmail.com"
//                 // helperText="Full width!"
//                 // fullWidth
//                 // value={"Asus"}
//                 margin="normal"
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 inputProps={{
//                   id: "emailEdited",
//                 }}
//               />
//             </div>
//             <div>
//               <InputLabel htmlFor="transactionEdited">Transaction</InputLabel>
//               <TextField
//                 // label="Name"
//                 style={{ margin: 8 }}
//                 placeholder="545"
//                 // helperText="Full width!"
//                 // fullWidth
//                 // value={"Asus"}
//                 margin="normal"
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 inputProps={{
//                   id: "transactionEdited",
//                 }}
//               />
//             </div>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <Button color="primary" variant="contained" size="large">
//                 Edit
//               </Button>
//             </div>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
