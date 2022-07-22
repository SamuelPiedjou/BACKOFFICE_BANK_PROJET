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
import Lottie from "react-lottie";
import logo from "../../assets/lotties/logo.json";
import { TrainRounded, TrendingUpRounded } from "@material-ui/icons";
// 143670816
export default function NewTransaction(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(false);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [showLoader, setShowLoader] = Modules.React.useState(false);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);
  const [page, setPage] = Modules.React.useState(0);
  const [rowsPerPage, setRowsPerPage] = Modules.React.useState(10);
  const [details, setDetails] = Modules.React.useState("");
  const [accountId, setAccountId] = Modules.React.useState();
  const [accountIdBenef, setAccountIdBenef] = Modules.React.useState();
  const [accountType, setAccountType] = Modules.React.useState();
  const [balance, setBalance] = Modules.React.useState();
  const [reason, setReason] = Modules.React.useState();

  const [openSnackbar, setOpenSnackbar] = Modules.React.useState(false);

  const apiurl = "http://192.168.0.148:8086/accounts";

  const choice = accountType === "RETRAIT" ? "withdraw" : "deposit";

 console.log(accountType)
  async function newTransaction(data) {
    try {
      const response = await Axios.post(
        `${apiurl}/${choice}`,
        {
          accountId: data.accountId,
          balance: data.balance,
          reason: data.reason,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
  async function newTransfert(data) {
    try {
      const response = await Axios.post(
        `http://192.168.0.148:8086/accounts/transfer`,
        {
          amount: data.amount,
          receiver: data.receiver,
          sender: data.accountId,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  const history = Modules.useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const usersData = await newTransaction({
        accountId,
        balance,
        reason,
      });
      setLoading(false);
      console.log(usersData.transactionStatus);

      console.log("_______________________");
      console.log(usersData.transactionStatus);
      if (usersData.transactionStatus === "SUCCESSFUL") {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          history.push("/transactions");
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      }
    } catch (errors) {
      if (errors.name === "Error") {
        setLoading(false);
        setErrorMessage(errors);
        setShowError(true);
      }
    }
  };
   
  const handleTransfert = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const usersData = await newTransfert({
        balance,
        accountIdBenef,
        accountId
      });
      setLoading(false);
      console.log(usersData.transactionStatus);

      console.log("_______________________");
      console.log(usersData.transactionStatus);
      if (usersData.transactionStatus === "SUCCESSFUL") {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          history.push("/transactions");
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      }
    } catch (errors) {
      if (errors.name === "Error") {
        setLoading(false);
        setErrorMessage(errors);
        setShowError(true);
      }
    }
  };

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
                  EFFECTUER UNE TRANSACTION
                </Modules.Typography>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
          <Modules.Grid item xs={12}>
            <Modules.Paper className={classes.paper} elevation={10}>
              <Modules.Grid item xs={12}>
                <Modules.Paper className={classes.paper} elevation={10}>

                <div>
                      <Modules.FormControl
                        variant="outlined"
                        style={{ width: "97%", margin: 20 }}
                        required
                      >
                        <Modules.InputLabel id="demo-simple-select-outlined-label">
                          TYPE DE L'OPERATION
                        </Modules.InputLabel>
                        <Modules.Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          name="accountType"
                          value={accountType}
                          onChange={(e) => setAccountType(e.target.value)}
                          label="TYPE DE OPERATION"
                        >
                          <Modules.MenuItem value="deposit">
                            DEPOT
                          </Modules.MenuItem>
                          <Modules.MenuItem value="withdraw">
                            RETRAIT
                          </Modules.MenuItem>
                          <Modules.MenuItem value="transfer">
                            COMPTE A COMPTE
                          </Modules.MenuItem>
                        </Modules.Select>
                      </Modules.FormControl>
                    </div>
                    {console.log(accountType)}
                  {accountType === "transfer" ? <form
                    autoComplete="off"
                    onSubmit={handleTransfert}
                    style={{ margin: 0 }}
                  >
                    <div style={{ alignItems: "center" }}>
                      <div
                        style={{
                          backgroundColor: "blue",
                          opacity: 0.6,
                          color: "#fff",
                          padding: 10,
                          borderRadius: 10,
                          margin: 20
                        }}
                      >
                        EFFECTUER UN TRANSFERT INTRA BANCAIRE
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: 20,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Modules.TextField
                        style={{ width: "50%", margin: 20 }}
                        id="outlined-basic"
                        label="N° COMPTE BANCAIRE EXPEDITEUR"
                        variant="outlined"
                        name="ID"
                        required
                        onChange={(e) => setAccountId(e.target.value)}
                      />
                      <Modules.TextField
                        style={{ width: "50%", margin: 20 }}
                        id="outlined-basic"
                        label="N° COMPTE BANCAIRE EXPEDITEUR"
                        variant="outlined"
                        name="ID"
                        required
                        // type="password"
                        onChange={(e) => setAccountIdBenef(e.target.value)}
                      />
                      <Modules.TextField
                        style={{ width: "50%", margin: 20 }}
                        id="outlined-basic"
                        label="MONTANT"
                        variant="outlined"
                        name="RAISON"
                        required
                        // type="password"
                        onChange={(e) => setBalance(e.target.value)}
                      />
                    </div>

                    <div style={{ position: "relative" }}>
                      <Modules.Button
                        type="submit"
                        variant="contained"
                        style={{}}
                        disabled={loading}
                        //  startIcon={<SaveIcon style={{ color: 'white' }} />}
                      >
                        VALIDER
                      </Modules.Button>
                      {loading && <Modules.Circular />}
                    </div>
                  </form>  : <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    style={{ margin: 0 }}
                  >
                    
                    <div style={{ alignItems: "center" }}>
                      <div
                        style={{
                          backgroundColor: "blue",
                          opacity: 0.6,
                          color: "#fff",
                          padding: 10,
                          borderRadius: 10,
                        }}
                      >
                        EFFECTUER UNE OPERATION
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: 20,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Modules.TextField
                        style={{ width: "50%", margin: 20 }}
                        id="outlined-basic"
                        label="N° COMPTE BANCAIRE"
                        variant="outlined"
                        name="ID"
                        required
                        onChange={(e) => setAccountId(e.target.value)}
                      />
                      <Modules.TextField
                        style={{ width: "50%", margin: 20 }}
                        id="outlined-basic"
                        label="BALANCE"
                        variant="outlined"
                        name="BALANCE"
                        required
                        // type="password"
                        onChange={(e) => setBalance(e.target.value)}
                      />
                      <Modules.TextField
                        style={{ width: "50%", margin: 20 }}
                        id="outlined-basic"
                        label="RAISON"
                        variant="outlined"
                        name="RAISON"
                        required
                        // type="password"
                        onChange={(e) => setReason(e.target.value)}
                      />
                    </div>

                    <div style={{ position: "relative" }}>
                      <Modules.Button
                        type="submit"
                        variant="contained"
                        style={{}}
                        disabled={loading}
                        //  startIcon={<SaveIcon style={{ color: 'white' }} />}
                      >
                        EFFECTUER
                      </Modules.Button>
                      {loading && <Modules.Circular />}
                    </div>
                  </form>  
                  
                }

                  

                  {/*/***********************  FORMULAIRE TRANSFERT ********************************/}

                  
                </Modules.Paper>
              </Modules.Grid>
              <Modules.SnackbarComponent
                {...props}
                title="Titre"
                message="OPERATION AFFECTUE"
                open={openSnackbar}
              />
              <Modules.ViewDialog
                {...props}
                title="Details Info clients"
                operation="bookings"
                open={openAlert}
                onClose={handleDialogClose}
                details={details}
              ></Modules.ViewDialog>
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
