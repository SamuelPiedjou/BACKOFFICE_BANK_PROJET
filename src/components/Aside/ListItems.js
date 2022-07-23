/**
 * @description      :
 * @author           : HP
 * @group            :
 * @created          : 11/11/2021 - 16:29:08
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 11/11/2021
 * - Author          : HP
 * - Modification    :
 **/
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import PeopleIcon from "@material-ui/icons/People";
import PeopleOutlineTwoTone from "@material-ui/icons/PeopleOutlineTwoTone";
import PeopleAltSharp from "@material-ui/icons/PeopleAltSharp";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AccountBoxSharp from "@material-ui/icons/AccountBoxSharp";
import AccountTreeTwoTone from "@material-ui/icons/AccountTreeTwoTone";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceOutlined from "@material-ui/icons/AccountBalanceOutlined";
import TransferWithinAStationSharp from "@material-ui/icons/TransferWithinAStationSharp";
import AccountTree from "@material-ui/icons/AccountTree";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";

export function MainListItems() {
  const [open, setOpen] = React.useState(false);
  const [openUsers, setOpenUsers] = React.useState(false);
  const [openBookings, setOpenBookings] = React.useState(false);
  const [openSalePoints, setOpenSalePoints] = React.useState(false);
  const [openComments, setOpenComments] = React.useState(false);
  const [openPolicy, setOpenPolicy] = React.useState(false);
  const [openOrders, setOpenOrders] = React.useState(false);
  const [openCategories, setOpenCategories] = React.useState(false);
  const [openClients, setOpenClient] = React.useState(false);
  const [openTransaction, setOpenTransaction] = React.useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 380,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleUsersClick = () => {
    setOpenUsers(!openUsers);
  };
  const handleOrdersClick = () => {
    setOpenOrders(!openOrders);
  };

  const handleTransactionClick = () => {
    setOpenTransaction(!openTransaction);
  };

  const handleCategorysClick = () => {
    setOpenCategories(!openCategories);
  };

  const handleSalePointsClick = () => {
    setOpenSalePoints(!openSalePoints);
  };

  const handleCommentsClick = () => {
    setOpenComments(!openComments);
  };

  const handleClientClisk = () => {
    setOpenClient(!openClients);
  };

  return (
    <div>
      <Link color="inherit" href="/dashboard">
        <ListItem button>
          <ListItemIcon>
            <Tooltip title="Menu Tableau De Bord">
              <DashboardIcon color="primary" style={{ color: "blue" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Tableau De Bord" />
        </ListItem>
      </Link>

      <ListItem button onClick={handleCategorysClick}>
        <ListItemIcon>
          <Tooltip title="GESTION DES CLIENTS">
            <PeopleIcon color="primary" style={{ color: "blue" }} />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="GESTION DES CLIENTS" />
        {openCategories ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link color="inherit" href="/clients">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Tooltip title="Liste des clients non abonnés">
                  <PeopleOutlineTwoTone color="primary" style={{ color: "#FF5C03" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Liste des clients" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <Collapse in={openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link color="inherit" href="/clientsSous">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Tooltip title="Liste des clients souscriptions">
                  <PeopleAltSharp color="primary" style={{ color: "#FF5C03" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Liste des souscriptions" />
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={handleClientClisk}>
        <ListItemIcon>
          <Tooltip title="GESTION DES COMPTES">
            <AccountBalance color="primary" style={{ color: "blue" }} />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="GESTION DES COMPTES" />
        {openCategories ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openClients} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link color="inherit" href="/comptes">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Tooltip title="Liste des COMPTES ">
                  <AccountBalance color="primary" style={{ color: "#FF5C03" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Liste des COMPTES" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <Collapse in={openClients} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link color="inherit" href="/comptes/activated">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Tooltip title="Liste des comptes activés">
                  <AccountBalanceOutlined color="primary" style={{ color: "#FF5C03" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Liste des comptes activés" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <Collapse in={openClients} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link color="inherit" href="/comptes/suspended">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Tooltip title="Liste des comptes suspendu">
                  <AccountTree color="primary" style={{ color: "#FF5C03" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Liste des comptes suspendu" />
            </ListItem>
          </Link>
        </List>
      </Collapse>




      <ListItem button onClick={handleTransactionClick}>
        <ListItemIcon>
          <Tooltip title="GESTION DES TRANSACTIONS">
            <TransferWithinAStationSharp color="primary" style={{ color: "blue" }} />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="GESTION DES TRANSACTIONS" />
        {openTransaction ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openTransaction} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link color="inherit" href="/transactions">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Tooltip title="Liste des Transactions ">
                  <AccountTreeTwoTone color="primary" style={{ color: "#FF5C03" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Liste des Transactions" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <Collapse in={openTransaction} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link color="inherit" href="/transactions/newTransaction">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Tooltip title="EFFECTUER UNE TRANSACTION ">
                  <AccountBalanceWallet color="primary" style={{ color: "#FF5C03" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Effectuer une Transaction" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <Collapse in={openTransaction} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link color="inherit" href="/transactions/getTransaction">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Tooltip title="Consulter Transaction ">
                  <AccountBoxSharp color="primary" style={{ color: "#FF5C03" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Consulter Transaction" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </div>
  );
}
