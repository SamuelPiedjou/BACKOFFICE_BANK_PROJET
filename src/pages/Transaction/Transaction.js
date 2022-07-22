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
import AssuredWorkloadIcon from "@material-ui/icons/BrandingWatermark";
import Axios from "axios";
import usersService from "../../services/Users";

import { CSVLink } from "react-csv";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";

export default function Transaction(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(true);
  const [openDeleteDialog, setOpenDeleteDialog] = Modules.React.useState(false);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [showLoader, setShowLoader] = Modules.React.useState(true);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);
  const [accountData, setAccountData] = Modules.React.useState();
  const [page, setPage] = Modules.React.useState(0);
  const [openActivateDialog, setOpenActivateDialog] =
    Modules.React.useState(false);
  const [rowsPerPage, setRowsPerPage] = Modules.React.useState(10);
  const [details, setDetails] = Modules.React.useState("");
  const [openDesactivateDialog, setOpenDesactivateDialog] =
    Modules.React.useState(false);

  // setOpenDesactivateDialog
  async function accountList() {
    try {
      const response = await Axios.get(
        // http://localhost:8086/transaction/all
        `http://192.168.0.148:8086/transaction/all`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      //console.log(response)
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error))
      return Promise.reject(error);
    }
  }

  Modules.React.useEffect(async () => {
    try {
      const accountData = await accountList();
      // console.log(accountData);
      setAccountData(accountData);
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
  const handleActivateDialogClose = () => {
    setOpenActivateDialog(false);
  };
  const handleDesactivateDialogClose = () => {
    setOpenDesactivateDialog(false);
  };
  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false);
  };

  const NewComponent = Modules.MainListItems;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const headers = [
    { label: "ID_TRANSACTION", key: "transactionId" },
    { label: "MONTANT", key: "amount" },
    { label: "TRANSACTION_TYPE", key: "transactionType" },
    { label: "DATE", key: "dateTime" },
    { label: "SATUS_DE_LA_TRANSACTION", key: "transactionStatus" },
    { label: "SATUS_DE_LA_REMARQUE", key: "transactionRemarks" },
    { label: "ACCOUNT_ID", key: "accountId" },
  ];

  const csvReport = {
    filname: "transactions.csv",
    headers: headers,
    data: accountData,
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
        <Modules.Toolbar
          className={classes.toolbar}
          style={{ backgroundColor: "blue" }}
        >
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
            MENU TRANSACTION
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
          <AssuredWorkloadIcon style={{ color: "white" }} />
          <span>{} </span>
          <span style={{ color: "white" }}>CELESTA BANK BACKOFFICE</span>
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
                  LISTE DES TRANSACTIONS
                </Modules.Typography>

                <div
                  style={{
                    flexDirection: "row",
                    alignContent: "space-between",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      borderWidth: 2,
                      borderColor: "blue",
                      width: "10%",
                      alignContent: "center",
                    }}
                  >
                    <CSVLink
                      {...csvReport}
                      style={{ MozAnimation: "infinite", fontSize: 18 }}
                    >
                      EXPORTER EN CSV
                      {
                        <FileCopyOutlined
                          color="primary"
                          style={{ color: "blue" }}
                        />
                      }
                    </CSVLink>
                  </div>
                  <Modules.Link
                    color="inherit"
                    href="/transactions/newTransaction"
                  >
                    <Modules.Button
                      aaria-controls="customized-menu"
                      aria-haspopup="true"
                      variant="contained"
                      style={{ backgroundColor: "white", float: "right" }}
                      startIcon={<Modules.AddCircleIcon style={{}} />}
                    >
                      EFFECTUER UNE TRANSACTION
                    </Modules.Button>
                  </Modules.Link>
                </div>
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
                        {"ID_TRANSACTION"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {" MONTANT"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"TRANSACTION_TYPE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"DATE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"SATUS_DE_LA_TRANSACTION"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"ACCOUNT_ID"}
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
                    </Modules.TableRow>
                  </Modules.TableHead>
                  <Modules.TableBody>
                    {accountData
                      .sort(function (s1, s2) {
                        return s2.id - s1.id;
                      })
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
                            {" "}
                            {/* {
                            "transactionId": 1,
                            "amount": 5000000,
                            "transactionType": "CREDIT",
                            "dateTime": [
                              2022,
                              7,
                              18,
                              16,
                              8,
                              47
                            ],
                            "transactionStatus": "SUCCESSFUL",
                            "transactionRemarks": "first deposit",
                            "accountId": 256196009,
                            "account": null,
                            "reason": "VALID"
                          }, */}
                            <Modules.TableCell>
                              {row.transactionId}
                            </Modules.TableCell>
                            <Modules.TableCell>{row.amount}</Modules.TableCell>
                            <Modules.TableCell>
                              {row.transactionType}
                            </Modules.TableCell>
                            <Modules.TableCell>
                              {row.dateTime}
                            </Modules.TableCell>
                            <Modules.TableCell>
                              {row.transactionStatus}
                            </Modules.TableCell>
                            <Modules.TableCell>
                              {row.accountId}
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
                            {props.showActButton === true ? (
                              row.suspended == false ? (
                                <Modules.TableCell>
                                  <Modules.Tooltip title="Désactiver">
                                    <Modules.LockOpenIcon
                                      style={{ color: "chocolate" }}
                                      onClick={() => {
                                        setDetails(row);
                                        setOpenDesactivateDialog(
                                          !openDesactivateDialog
                                        );
                                      }}
                                    />
                                  </Modules.Tooltip>
                                </Modules.TableCell>
                              ) : (
                                <Modules.TableCell>
                                  <Modules.Tooltip title="Activer">
                                    <Modules.LockIcon
                                      style={{ color: "chocolate" }}
                                      onClick={() => {
                                        setDetails(row);
                                        setOpenActivateDialog(
                                          !openActivateDialog
                                        );
                                      }}
                                    />
                                  </Modules.Tooltip>
                                </Modules.TableCell>
                              )
                            ) : null}
                            <Modules.TableCell>
                              <Modules.Tooltip title="Editer">
                                <Modules.Link
                                  color="inherit"
                                  href="/transactions/newTransaction"
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
                title="DETAILS DE LA TRANSACTION"
                operation="transactions"
                open={openAlert}
                onClose={handleDialogClose}
                details={details}
              ></Modules.ViewDialog>

              <Modules.ActivateDialog
                {...props}
                title={"Confirmation D'Activation Du compte"}
                message={
                  "Vous êtes sur le point d'activer le compte ID: " +
                  details.accountId +
                  ". Voulez-vous vraiment continuer le processus d'activation ?"
                }
                operation="account"
                users={usersService}
                open={openActivateDialog}
                details={details}
                onClose={handleActivateDialogClose}
              />
              <Modules.DesactivateDialog
                {...props}
                title={"Confirmation De Désactivation Du Compte"}
                message={
                  "Vous êtes sur le point de désactiver le compte " +
                  details.accountId +
                  ". Voulez-vous vraiment continuer le processus de désactivation ?"
                }
                operation="account"
                users={usersService}
                open={openDesactivateDialog}
                details={details}
                onClose={handleDesactivateDialogClose}
              />

              <Modules.TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={accountData.length}
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
