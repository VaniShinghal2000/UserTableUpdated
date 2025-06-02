export const Columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.address,
    sortable: false,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: false,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
    sortable: false,
  },
  {
    name: "DOB",
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
];