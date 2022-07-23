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
import Lottie from "react-lottie"; 
import excell from "../../assets/lotties/excell.json"
import pdf from "../../assets/lotties/pdf.json"

{/* <Lottie options={defaultOptions} height={400} width={400} /> */}
export default function ClientList(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pdf,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(true);
  const [openDeleteDialog, setOpenDeleteDialog] = Modules.React.useState(false);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [showLoader, setShowLoader] = Modules.React.useState(true);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState(); 
  const [accountData, setAccountData] = Modules.React.useState();
  const [page, setPage] = Modules.React.useState(0);
  const [openActivateDialog, setOpenActivateDialog] =
    Modules.React.useState(false);
  const [rowsPerPage, setRowsPerPage] = Modules.React.useState(10);
  const [details, setDetails] = Modules.React.useState("");
  const [openDesactivateDialog, setOpenDesactivateDialog] =
    Modules.React.useState(false);

  // setOpenDesactivateDialog
  async function customerList() {
    try {
      const response = await Axios.get(
        // http://localhost:8086/transaction/all
        // `http://172.21.253.133:8086/transaction/all`,
        `http://172.21.253.133:8086/customer/allCustDetails`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", 
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
      const accountData = await customerList();
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
    filname:'customerList.csv',
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
            MENU GESTION DES CLIENTS
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
                  LISTE DES CLIENTS
                </Modules.Typography>

                <div
                  style={{
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                >
                  {" "}
                  <div 
                  >
                    <CSVLink
                      {...csvReport}
                      style={{fontSize: 18, color:"white" ,fontWeight:"bold", alignContent:"center",justifyContent:"center"}}
                    >
                       
                       <Lottie options={defaultOptions} height={40} width={40} /> 
                    </CSVLink>
                  </div>
                  <Modules.Link
                    color="inherit"
                    href="/clients/new"
                  >
                    <Modules.Button
                      aaria-controls="customized-menu"
                      aria-haspopup="true"
                      variant="contained"
                      style={{ backgroundColor: "white", float: "right" , color:"green", fontSize:20,fontWeight:"bold"}}
                      startIcon={<Modules.AddCircleIcon style={{}} />}
                    >
                      AJOUTER UN CLIENT
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
                        {"ID_CLIENT"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          minWidth: 170,
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"NOM"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {" EMAIL"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"DATE DE SOUSCRIPTION"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"N°PHONE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                      >
                        {"DATE_NAISSANCE"}
                      </Modules.TableCell>
                      <Modules.TableCell
                        style={{
                          backgroundColor: "blue",
                          color: "#fff",
                        }}
                        align="center"
                        colSpan={2}
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
                            <Modules.TableCell>
                              {row.userId}
                              {/* {console.log(row.accountALLDtos[key].accountId)} */}
                            </Modules.TableCell>
                            <Modules.TableCell>{row.customerName}</Modules.TableCell>
                            <Modules.TableCell>
                              {row.emailId}
                            </Modules.TableCell>
                            <Modules.TableCell>
                              {row.date_inscription}
                            </Modules.TableCell>
                            <Modules.TableCell>
                              {row.phoneNo}
                            </Modules.TableCell>
                            <Modules.TableCell>
                            {row.birthday}
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
                            <Modules.TableCell>
                              <Modules.Tooltip title="Editer">
                                <Modules.Link
                                  color="inherit"
                                  href="/client/updateClient"
                                  onClick={() => {
                                    localStorage.setItem('userDetails', JSON.stringify(row));
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
                title="DETAILS DE SUR LE CLIENT"
                operation="client"
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
