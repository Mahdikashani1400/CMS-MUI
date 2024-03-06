const getDataFromDatabase = (kind, setState, columns) => {
  fetch(`https://65c5df77e5b94dfca2e0744a.mockapi.io/api/v1/${kind}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => {
      return await res.json();
    })
    .then((data) => {
      setState({ rows: data, columns });
    });
};
const deleteDataFromDatabase = async (id, kind) => {
  await fetch(
    `https://65c5df77e5b94dfca2e0744a.mockapi.io/api/v1/${kind}/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
const editDataFromDatabase = async (id, kind, editedData) => {
  console.log(editedData);
  await fetch(
    `https://65c5df77e5b94dfca2e0744a.mockapi.io/api/v1/${kind}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((task) => {
      console.log(task);
    });
};

const addData = async (kind, dataInfo) => {
  await fetch(`https://65c5df77e5b94dfca2e0744a.mockapi.io/api/v1/${kind}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataInfo),
  })
    .then((res) => {
      return res.json();
    })
    .then((task) => {
      console.log(task);
    });
};
export {
  getDataFromDatabase,
  deleteDataFromDatabase,
  editDataFromDatabase,
  addData,
};
