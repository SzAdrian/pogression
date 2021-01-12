import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PlayerTable(props) {
  const classes = useStyles();
  const { isLoading, data } = props;
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <TableContainer style={{ background: "#364966" }} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Strigulak
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Minimum Kills
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Kills
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading
            ? [1, 2, 3, 4, 5].map((row, i) => (
                <TableRow key={row.i}>
                  <TableCell component="th" scope="row">
                    <Skeleton variant="rect" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton variant="rect" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton variant="rect" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton variant="rect" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton variant="rect" />
                  </TableCell>
                </TableRow>
              ))
            : data.ids.map((id, index) => (
                <TableRow hover key={id}>
                  <TableCell component="th" scope="row" align="center">
                    {id}
                  </TableCell>
                  <TableCell align="center">
                    {data.value[index].strigulak}
                  </TableCell>
                  <TableCell align="center">
                    {data.value[index].minKills}
                  </TableCell>
                  <TableCell align="center">
                    {data.value[index].kills}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
