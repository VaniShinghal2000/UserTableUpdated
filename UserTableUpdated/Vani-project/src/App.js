import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./component/Slice/userSlice";

// Material UI Components
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Typography,
  CircularProgress,
} from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const memoizedUsers = useMemo(() => users, [users]);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <CircularProgress />
      </div>
    );

  if (error)
    return (
      <Typography color="error" align="center" style={{ padding: "1rem" }}>
        Error: {error}
      </Typography>
    );

  return (
    <div style={{ padding: "1rem", maxWidth: "1200px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        User Data
      </Typography>

      {memoizedUsers && (
        <TableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>First Name</b>
                </TableCell>
                <TableCell>
                  <b>Last Name</b>
                </TableCell>
                <TableCell>
                  <b>Age</b>
                </TableCell>
                <TableCell>
                  <b>Address</b>
                </TableCell>
                <TableCell>
                  <b>Email</b>
                </TableCell>
                <TableCell>
                  <b>Phone</b>
                </TableCell>
                <TableCell>
                  <b>DOB</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {memoizedUsers.map((user, index) => (
                <TableRow key={index} hover>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.dateOfBirth}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default App;
