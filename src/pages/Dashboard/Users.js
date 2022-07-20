/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 15/12/2021 - 09:56:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2021
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

export default function Users(props) {
  const [usersData, setUsersData] = Modules.React.useState([]);

  Modules.React.useEffect(async () => {
    try {
      const usersService = new props.users();
      const usersData = await usersService.getUsers();
      //console.log(JSON.stringify(usersData));
      setUsersData(usersData);
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
      <Title>Utilisateurs Récents</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Téléphone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {usersData.slice(usersData.length-3, usersData.length).sort(function (s1, s2) {
          return s2.id - s1.id;
        }).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.login}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
