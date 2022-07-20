/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 30/08/2021 - 12:46:41
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/08/2021
    * - Author          : HP
    * - Modification    : 
**/
import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import * as Modules from "../../components/Imports/Index";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const [bookingsData, setBookingsData] = Modules.React.useState([]);

  Modules.React.useEffect(async () => {
    try {
      const bookingsService = new props.bookings();
      const bookingsData = await bookingsService.getBookings();
      //console.log(JSON.stringify(bookingsData));
      setBookingsData(bookingsData);
    } catch (errors) {
      //console.log(JSON.stringify(errors.name));
      if (errors.name == "Error") {
        console.log(errors);
      }
    }
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Réservations Récentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date De Livraison</TableCell>
            <TableCell>Motoman</TableCell>
            <TableCell>Client</TableCell>
            <TableCell align="right">Heure</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {bookingsData.slice(bookingsData.length-5, bookingsData.length).sort(function (s1, s2) {
          return s2.id - s1.id;
        }).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date.substr(0, 10)}</TableCell>
              <TableCell>{row.motoExtra ? row.motoExtra.user.lastName : ''} {row.motoExtra ? row.motoExtra.user.firstName : ''}</TableCell>
              <TableCell>{row ? row.user.lastName : ''} {row ? row.user.firstName : ''}</TableCell>
              <TableCell align="right">{row.hour}:{row.minute}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
