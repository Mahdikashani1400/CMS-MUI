import VisibilityIcon from "@mui/icons-material/Visibility";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserList from "./pages/UserList/UserList";

const chartDataSales = [
  { month: "January", sale: 2000 },
  { month: "February", sale: 5000 },
  { month: "March", sale: 8000 },
  { month: "April", sale: 1000 },
  { month: "May", sale: 2070 },
  { month: "June", sale: 9700 },
  { month: "July", sale: 12200 },
  { month: "August", sale: 6070 },
  { month: "September", sale: 4300 },
  { month: "October", sale: 2550 },
  { month: "November", sale: 1100 },
  { month: "December", sale: 13000 },
];

const newMembersData = {
  columns: [
    {
      field: "id",
      headerName: "ID", //width: 90
    },
    {
      field: "profile",
      headerName: "Profile",
      // width: 130,
      renderCell: (params) => {
        return (
          <>
            <div className="profile">
              <img src={`/img/${params.row.profile}`} alt="" />
            </div>
          </>
        );
      },
    },

    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "job",
      headerName: "Job",
      width: 170,
    },
    {
      field: "visibility",
      headerName: "Visibility",
      //   width: 170,
      renderCell: (params) => {
        return (
          <>
            <div className="visibility">
              <VisibilityIcon />
            </div>
          </>
        );
      },
    },
  ],

  rows: [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",

      profile: "profile.jpg",
      job: "Web Developer",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",

      profile: "profile.jpg",
      job: "Web Developer",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",

      profile: "profile.jpg",
      job: "Web Developer",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",

      profile: "profile.jpg",
      job: "Web Developer",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",

      profile: "profile.jpg",
      job: "Web Developer",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,

      profile: "profile.jpg",
      job: "Web Developer",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",

      profile: "profile.jpg",
      job: "Web Developer",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",

      profile: "profile.jpg",
      job: "Web Developer",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",

      profile: "profile.jpg",
      job: "Web Developer",
    },
  ],
};

const lastestTransActionsData = {
  columns: [
    {
      field: "id",
      headerName: "ID", //width: 90
    },
    {
      field: "profile",
      headerName: "Profile",
      // width: 130,
      renderCell: (params) => {
        return (
          <>
            <div className="profile">
              <img src={`/img/${params.row.profile}`} alt="" />
            </div>
          </>
        );
      },
    },

    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "date",
      headerName: "Date",
      width: 170,
    },
    {
      field: "amount",
      headerName: "Amount",
      //   width: 170,
    },
    {
      field: "status",
      headerName: "Status",
      //   width: 170,
      renderCell: (params) => {
        return (
          <>
            <div className={`status ${params.row.status}`}>
              {params.row.status}
            </div>
          </>
        );
      },
    },
  ],

  rows: [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",

      profile: "profile.jpg",
      job: "Web Developer",
      amount: "123$",
      date: "12 June 2022",
      status: "Approved",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",

      profile: "profile.jpg",
      job: "Web Developer",
      amount: "123$",
      date: "12 June 2022",
      status: "Declined",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",

      profile: "profile.jpg",
      job: "Web Developer",
      amount: "123$",
      date: "12 June 2022",
      status: "Pending",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",

      profile: "profile.jpg",
      job: "Web Developer",
      amount: "123$",
      date: "12 June 2022",
      status: "Approved",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",

      profile: "profile.jpg",
      job: "Web Developer",
      amount: "123$",
      date: "12 June 2022",
      status: "Approved",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,

      profile: "profile.jpg",
      job: "Web Developer",
      amount: "123$",
      date: "12 June 2022",
      status: "Approved",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",

      profile: "profile.jpg",
      job: "Web Developer",
      amount: "123$",
      date: "12 June 2022",
      status: "Approved",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",

      profile: "profile.jpg",
      job: "Web Developer",
      amount: "123$",
      date: "12 June 2022",
      status: "Approved",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",

      profile: "profile.jpg",
      job: "Web Developer",
      amount: "123$",
      date: "12 June 2022",
      status: "Approved",
    },
  ],
};
let userListData = {
  columns: [
    {
      field: "id",
      headerName: "ID", //width: 90
    },
    {
      field: "avatar",
      headerName: "Profile",
      // width: 130,
      renderCell: (params) => {
        return (
          <>
            <div className="profile">
              <img src={`/img/${params.row.avatar}`} alt="" />
            </div>
          </>
        );
      },
    },

    {
      field: "name",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },

    {
      field: "status",
      headerName: "Status",
      //   width: 170,
      renderCell: (params) => {
        return (
          <>
            <div className={`status ${params.row.status}`}>
              {params.row.status}
            </div>
          </>
        );
      },
    },
    {
      field: "transaction",
      headerName: "TransAction",
      renderCell: (params) => {
        return (
          <>
            <div>{params.row.transaction} $</div>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
    },
  ],

  // rows: [
  //   {
  //     id: 1,
  //     lastName: "Snow",
  //     firstName: "Jon",
  //     email: "ali@gmail.com",

  //     profile: "profile.jpg",

  //     status: "active",
  //     transActions: "$223",
  //   },
  //   {
  //     id: 2,
  //     lastName: "Lannister",
  //     firstName: "Cersei",
  //     email: "ali@gmail.com",

  //     profile: "profile.jpg",

  //     status: "non-active",
  //     transActions: "$223",
  //   },
  //   {
  //     id: 3,
  //     lastName: "Lannister",
  //     firstName: "Jaime",
  //     email: "ali@gmail.com",

  //     profile: "profile.jpg",

  //     status: "active",
  //     transActions: "$223",
  //   },
  //   {
  //     id: 4,
  //     lastName: "Stark",
  //     firstName: "Arya",
  //     email: "ali@gmail.com",

  //     profile: "profile.jpg",

  //     status: "non-active",
  //     transActions: "$223",
  //   },
  //   {
  //     id: 5,
  //     lastName: "Targaryen",
  //     firstName: "Daenerys",
  //     email: "ali@gmail.com",

  //     profile: "profile.jpg",

  //     status: "active",
  //     transActions: "$223",
  //   },
  //   {
  //     id: 6,
  //     lastName: "Melisandre",
  //     firstName: null,
  //     email: "ali@gmail.com",

  //     profile: "profile.jpg",

  //     status: "active",
  //     transActions: "$223",
  //   },
  //   {
  //     id: 7,
  //     lastName: "Clifford",
  //     firstName: "Ferrara",
  //     email: "ali@gmail.com",

  //     profile: "profile.jpg",

  //     status: "active",
  //     transActions: "$223",
  //   },
  //   {
  //     id: 8,
  //     lastName: "Frances",
  //     firstName: "Rossini",
  //     email: "ali@gmail.com",

  //     profile: "profile.jpg",

  //     status: "active",
  //     transActions: "$223",
  //   },
  //   {
  //     id: 9,
  //     lastName: "Roxie",
  //     firstName: "Harvey",
  //     email: "ali@gmail.com",

  //     profile: "profile.jpg",

  //     status: "active",
  //     transActions: "$223",
  //   },
  // ],
  // rows: async function () {
  //   let userDatas = null;
  //   useEffect(() => {
  //     fetch("https://65c5df77e5b94dfca2e0744a.mockapi.io/api/v1/users", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then(async (res) => {
  //         return await res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         userDatas = data;
  //       });
  //   }, []);
  //   return userDatas;
  // },
};
const productsData = {
  columns: [
    {
      field: "id",
      headerName: "ID", //width: 90
    },
    {
      field: "photo",
      headerName: "Photo",
      // width: 130,
      renderCell: (params) => {
        return (
          <>
            <div className="profile">
              <img src={`/img/${params.row.photo}`} alt="" />
            </div>
          </>
        );
      },
    },

    {
      field: "name",
      headerName: "Name",

      width: 160,
    },

    {
      field: "price",
      headerName: "Price",
      //   width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => (
        <>
          <div className="" style={{ display: "flex", gap: "20px" }}>
            <DeleteIcon color="error" />
            <Link to={`/product/${params.id}`} className="edit">
              Edit
            </Link>
          </div>
        </>
      ),
    },
  ],

  rows: [
    {
      id: 1,

      photo: "profile.jpg",

      name: "Asus",
      price: "$487",
    },
    {
      id: 2,

      photo: "profile.jpg",

      name: "Asus",
      price: "$487",
    },
    {
      id: 3,

      photo: "profile.jpg",

      name: "Asus",
      price: "$487",
    },
    {
      id: 4,

      photo: "profile.jpg",

      name: "Asus",
      price: "$487",
    },
    {
      id: 5,

      photo: "profile.jpg",

      name: "Asus",
      price: "$487",
    },
    {
      id: 6,

      photo: "profile.jpg",

      name: "Asus",
      price: "$487",
    },
    {
      id: 7,

      photo: "profile.jpg",

      name: "Asus",
      price: "$487",
    },
    {
      id: 8,

      photo: "profile.jpg",

      name: "Asus",
      price: "$487",
    },
    {
      id: 9,

      photo: "profile.jpg",

      name: "Asus",
      price: "$487",
    },
  ],
};

const productDataSales = [
  { month: "January", sale: 150 },
  { month: "February", sale: 387 },
  { month: "March", sale: 294 },
];
export {
  chartDataSales,
  newMembersData,
  lastestTransActionsData,
  userListData,
  productsData,
  productDataSales,
};
