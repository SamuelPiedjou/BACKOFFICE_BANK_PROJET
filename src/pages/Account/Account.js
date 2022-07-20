/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 30/08/2021 - 12:42:57
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/08/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from "../../components/Imports/Index";
import { useStylesTheme } from "../../styles/Style";
import AssuredWorkloadIcon from '@material-ui/icons/BrandingWatermark';

export default function Account(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(true);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [showLoader, setShowLoader] = Modules.React.useState(true);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);
  const [customerData, setcustomerData] = Modules.React.useState();
  const [page, setPage] = Modules.React.useState(0);
  const [rowsPerPage, setRowsPerPage] = Modules.React.useState(10);
  const [details, setDetails] = Modules.React.useState("");

  Modules.React.useEffect(async () => {
    try {
      const bookingsService = new props.bookings();
      const customerData = await bookingsService.getBookings();
      //console.log(JSON.stringify(customerData));
      setcustomerData(customerData);
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
        <Modules.Toolbar className={classes.toolbar} style={{ backgroundColor: 'blue' }}>
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
            GESTIONS DES COMPTES
          </Modules.Typography>
          {/*  <Modules.IconButton color="inherit">
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
          style={{ backgroundColor: "blue" }}
        >
          <AssuredWorkloadIcon   style={{color: 'white'}}/>
          <span>{   } </span>
          <span style={{color:'white'}}>CELESTA BANK BACKOFFICE</span>
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
                <Modules.BankBal color="primary" />
                <Modules.Typography variant="h6">
                  LISTE DES COMPTES
                </Modules.Typography>
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
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"N°COMPTE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {" SOLDE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"DATE DE LE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"STATUS DU COMPTE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"TYPE DE COMPTE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                        align="center"
                        colSpan={2}
                      >
                        {"ACTION"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                        align="center"
                        colSpan={2}
                      >
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                        align="center"
                        colSpan={2}
                      >
                        
                      </Modules.TableCell>
                    </Modules.TableRow>
                  </Modules.TableHead>
                  <Modules.TableBody>
                    {customerData
                      .sort(function (s1, s2) {
                        return s2.id - s1.id;
                      }).slice(
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
                                    {console.log("")}                   
                            </Modules.TableCell>
                            <Modules.TableCell>
                              
                            </Modules.TableCell>
                            <Modules.TableCell>
                              
                            </Modules.TableCell>
                            <Modules.TableCell>
                               
                            </Modules.TableCell>
                            <Modules.TableCell>
                              
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
                            <Modules.TableCell align="center">
                              <Modules.Tooltip title="Activer/désactiver">
                                <Modules.LockIcon
                                  color="primary"
                                  onClick={() => { }}
                                />
                              </Modules.Tooltip>
                            </Modules.TableCell>
                            <Modules.TableCell>
                      <Modules.Tooltip title="Editer">
                        <Modules.Link
                          color="inherit"
                          href="/update-booking"
                          onClick={() => {
                            localStorage.setItem(
                              "bookingDetails",
                              JSON.stringify(row)
                            );
                          }}
                        >
                          <Modules.EditIcon
                            style={{ color: "darkturquoise" }}
                          />
                        </Modules.Link>
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
                title="Details Info clients"
                operation="bookings"
                open={openAlert}
                onClose={handleDialogClose}
                details={details}
              ></Modules.ViewDialog>
              <Modules.TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={customerData.length}
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
