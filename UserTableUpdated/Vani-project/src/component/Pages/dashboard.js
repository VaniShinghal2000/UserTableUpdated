import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Slice/userSlice";
import { Columns } from "../../constant/Constant";

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

const Dashboard = () => {
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
                  <b>{Columns[0].name}</b>
                </TableCell>
                <TableCell>
                  <b>{Columns[1].name}</b>
                </TableCell>
                <TableCell>
                  <b>{Columns[2].name}</b>
                </TableCell>
                <TableCell>
                  <b>{Columns[3].name}</b>
                </TableCell>
                <TableCell>
                  <b>{Columns[4].name}</b>
                </TableCell>
                <TableCell>
                  <b>{Columns[5].name}</b>
                </TableCell>
                <TableCell>
                  <b>{Columns[6].name}</b>
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

export default Dashboard;
