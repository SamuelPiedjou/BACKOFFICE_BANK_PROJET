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
  const handleOrdersClick=()=>{
    setOpenOrders(!openOrders);
  };

  const handleCategorysClick=()=>{
    setOpenCategories(!openCategories);
  };

  const handleBookingsClick = () => {
    setOpenBookings(!openBookings);
  };

  const handleSalePointsClick = () => {
    setOpenSalePoints(!openSalePoints);
  };

  const handleCommentsClick = () => {
    setOpenComments(!openComments);
  };

  const handlePolicyClick = () => {
    setOpenPolicy(!openPolicy);
  };

  return (
    <div>
      <Link color="inherit" href="/dashboard">
        <ListItem button>
          <ListItemIcon>
            <Tooltip title="Menu Tableau De Bord">
              <DashboardIcon color='primary' style={{color: '#FF5C03'}}/>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Tableau De Bord" />
        </ListItem>
      </Link>

      <ListItem button onClick={handleCategorysClick}>
        <ListItemIcon>
          <Tooltip title="GESTION DES CLIENTS">
            <PeopleIcon color="primary" style={{color: '#FF5C03'}}/>
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
                <Tooltip title="Liste des clients">
                  <PeopleIcon color="primary" style={{color: '#FF5C03'}}/>
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Liste des clients" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <Collapse in={openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link color="inherit" href="/clients/newClients">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Tooltip title="Liste des Menu">
                  <PeopleIcon color="primary" style={{color: '#FF5C03'}}/>
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Liste des Clients" />
            </ListItem>
          </Link>
        </List>
      </Collapse> 
    </div>
  );
}
