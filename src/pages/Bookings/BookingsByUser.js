/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 30/08/2021 - 12:46:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/08/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from "../../components/Imports/Index";
import { useStylesTheme } from "../../styles/Style";

export default function SalePointsByCity(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(true);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [showLoader, setShowLoader] = Modules.React.useState(true);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);
  const [usersData, setUsersData] = Modules.React.useState();
  const [user, setUser] = Modules.React.useState();

  const [bookingsData, setBookingsData] = Modules.React.useState([]);
  const [page, setPage] = Modules.React.useState(0);
  const [rowsPerPage, setRowsPerPage] = Modules.React.useState(10);
  const [details, setDetails] = Modules.React.useState("");

  Modules.React.useEffect(async () => {
    try {
      const usersService = new props.users();
      const usersData = await usersService.getUsers();
      //console.log(JSON.stringify(usersData));
      setUsersData(usersData);
      setShowLoader(false);
    } catch (errors) {
      //console.log(JSON.stringify(errors.name));
      if (errors.name == "Error") {
        setErrorMessage(errors);
        setShowError(true);
      }
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDialogClose = () => {
    setOpenAlert(false);
  };

  const NewComponent = Modules.MainListItems;

  const history = Modules.useHistory();
  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const bookingsService = new props.bookings();
      const bookingsData = await bookingsService.searchBookings({
        user,
      });
      setLoading(false);
      //console.log(JSON.stringify(salePointsData))
      setBookingsData(bookingsData);
      setShowLoader(false);
    } catch (errors) {
      //console.log(JSON.stringify(errors));
      if (errors.name) {
        setErrorMessage(errors);
        setShowError(true);
      }
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return showLoader == true ? (
    <Modules.Loader />
  ) : showError == true ? (
    <Modules.Error {...props} message={errorMessage} />
  ) : (
    <div className={classes.root}>
      <Modules.CssBaseline />
      <Modules.AppBar
        position="absolute"
        className={Modules.clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Modules.Toolbar className={classes.toolbar}>
          <Modules.IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={Modules.clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <Modules.MenuIcon />
          </Modules.IconButton>
          <Modules.Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            RESERVATIONS PAR UTILISATEUR
          </Modules.Typography>
          {/* <Modules.IconButton color="inherit">
            <Modules.Badge badgeContent={4} color="secondary">
              <Modules.NotificationsIcon />
            </Modules.Badge>
          </Modules.IconButton> */}
        </Modules.Toolbar>
      </Modules.AppBar>
      <Modules.Drawer
        variant="permanent"
        classes={{
          paper: Modules.clsx(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          ),
        }}
        open={open}
      >
        <div
          className={classes.toolbarIcon}
          style={{ backgroundColor: "beige" }}
        >
          <img
            src={Modules.logo}
            alt="Logo"
            style={{ width: 80, height: 80 }}
          />
          <span>AKENO BACKOFFICE</span>
          <Modules.IconButton onClick={handleDrawerClose}>
            <Modules.ChevronLeftIcon />
          </Modules.IconButton>
        </div>
        <Modules.Divider />
        <Modules.List>
          <NewComponent />
        </Modules.List>
      </Modules.Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Modules.Container maxWidth="lg" className={classes.container}>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item xs={12}>
              <Modules.Paper className={classes.paper} elevation={10}>
                <Modules.PeopleIcon color="primary" />
                <Modules.Typography variant="h6">
                  Recherche De Réservations
                </Modules.Typography>
              </Modules.Paper>
            </Modules.Grid>
            <Modules.Grid item xs={12}>
              <Modules.Paper className={classes.paper} elevation={10}>
                <form
                  className={classes.form30}
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <Modules.FormControl
                      variant="outlined"
                      style={{
                        width: "65%",
                        marginTop: 8,
                        marginLeft: 24,
                        marginRight: 8,
                      }}
                      required
                    >
                      <Modules.InputLabel id="demo-simple-select-outlined-label">
                        Utilisateur
                      </Modules.InputLabel>
                      <Modules.Select
                        labelId="demo-simple-select-outlined-label11"
                        id="user"
                        value={user ? user : ""}
                        label="Utilisateur"
                        onChange={(e) => setUser(e.target.value)}
                      >
                        {usersData.map((row, key) => (
                          <Modules.MenuItem value={row.id} key={key}>
                            {row.user.lastName} {row.user.firstName}
                          </Modules.MenuItem>
                        ))}
                      </Modules.Select>
                    </Modules.FormControl>
                    <Modules.Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: 24, marginTop: 8, height: 50 }}
                      disabled={loading}
                      startIcon={
                        <Modules.SaveIcon style={{ color: "white" }} />
                      }
                    >
                      Rechercher
                    </Modules.Button>
                    {loading && <Modules.Circular />}
                  </div>
                </form>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
          <Modules.Grid item xs={12}>
            <Modules.Paper className={classes.paper} elevation={10}>
              <Modules.TableContainer style={{ maxHeight: 340, marginTop: 20 }}>
                <Modules.Table
                  stickyHeader
                  aria-label="sticky table"
                  id="divToDisplay"
                >
                  <Modules.TableHead>
                    <Modules.TableRow>
                      <Modules.TableCell
                        style={{
                          minWidth: 170,
                          backgroundColor: "#3f51b5",
                          color: "#fff",
                        }}
                      >
                        {"VILLE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "#3f51b5",
                          color: "#fff",
                        }}
                      >
                        {"UTILISATEUR"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "#3f51b5",
                          color: "#fff",
                        }}
                      >
                        {"CONTACT"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "#3f51b5",
                          color: "#fff",
                        }}
                      >
                        {"DATE DE LIVRAISON"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "#3f51b5",
                          color: "#fff",
                        }}
                        align="center"
                      >
                        {"ACTION"}
                      </Modules.TableCell>
                    </Modules.TableRow>
                  </Modules.TableHead>
                  <Modules.TableBody>
                    {bookingsData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, key) => {
                        return (
                          <Modules.TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={key}
                          >
                            <Modules.TableCell>
                              {row.salepoint.city.name}
                            </Modules.TableCell>
                            <Modules.TableCell>
                              {row.userExtra ? row.userExtra.user.lastName : ""}
                            </Modules.TableCell>
                            <Modules.TableCell>
                              {row.userExtra ? row.userExtra.user.login : ""}
                            </Modules.TableCell>
                            <Modules.TableCell>
                              {row.dateDelivery}
                            </Modules.TableCell>
                            <Modules.TableCell align="center">
                              <Modules.Tooltip title="Visualiser">
                                <Modules.VisibilityIcon
                                  color="primary"
                                  onClick={() => {
                                    setDetails(row);
                                    setOpenAlert(!openAlert);
                                  }}
                                />
                              </Modules.Tooltip>
                            </Modules.TableCell>
                          </Modules.TableRow>
                        );
                      })}
                  </Modules.TableBody>
                </Modules.Table>
              </Modules.TableContainer>
              <Modules.ViewDialog
                {...props}
                title="Visualisation De La Réservation"
                operation="bookings"
                open={openAlert}
                onClose={handleDialogClose}
                details={details}
              ></Modules.ViewDialog>
              <Modules.TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={bookingsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Modules.Paper>
          </Modules.Grid>
          <Modules.Box pt={4}>
            <Modules.Copyright />
          </Modules.Box>
        </Modules.Container>
      </main>
    </div>
  );
}
