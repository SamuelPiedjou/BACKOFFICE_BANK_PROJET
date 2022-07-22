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

export default function NewAccount(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(false);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [showLoader, setShowLoader] = Modules.React.useState(false);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);
  const [accountData, setAccountData] = Modules.React.useState();
  const [page, setPage] = Modules.React.useState(0);
  const [rowsPerPage, setRowsPerPage] = Modules.React.useState(10);
  const [details, setDetails] = Modules.React.useState("");

  const [userName, setUserName] = Modules.React.useState();
  const [userId, setUserId] = Modules.React.useState();
  const [accountType, setAccountType] = Modules.React.useState();
  const [balance, setBalance] = Modules.React.useState();
  const [userProfile, setUserProfile] = Modules.React.useState([]);
  const [profilesData, setProfilesData] = Modules.React.useState([]);

  const apiurl = "http://192.168.0.148:8086/accounts";
  const choice = accountType=== "EPARGNE" ? "savings" : "current";
  // "http://localhost:8086/accounts/current/"
  

  async function newAccount(data) {  
    console.log("choice"+choice); 
    console.log("userId"+data.userId);
    console.log("balance"+data.balance);
    try {
      const response = await Axios.post(
        `${apiurl}/${choice}/${data.userId}`,
        { 
          accountType: data.accountType,
          balance: data.balance,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      //console.log(response);
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error));
      return Promise.reject(error);
    }
    
  }
 
  const history = Modules.useHistory();
const handleSubmit = async (e) => {
    console.log(+e)
    e.preventDefault();
    setLoading(true);
    try {
      
      const usersData = await  newAccount({
        accountType,
        userId,
        balance,
      });
      //console.log(JSON.stringify(usersData));
      setLoading(false);
      if (usersData.returnMsg === 'success"') {
        const timer = setTimeout(() => {
          history.push("/comptes");
        }, 1000);
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
                  AJOUT COMPTE POUR CLIENT
                </Modules.Typography>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
          <Modules.Grid item xs={12}>
            <Modules.Paper className={classes.paper} elevation={10}>
              <Modules.Grid item xs={12}>
                <Modules.Paper className={classes.paper} elevation={10}>
                  <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    style={{ margin: 0 }}
                  >
                    <div>
                      <Modules.FormControl
                        variant="outlined"
                        style={{ width: "97%", margin: 20 }}
                        required
                      >
                        <Modules.InputLabel id="demo-simple-select-outlined-label">
                          TYPE DE COMPTE
                        </Modules.InputLabel>
                        <Modules.Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          name="accountType"
                          value={accountType}
                          onChange={(e) => setAccountType(e.target.value)}
                          label="TYPE DE COMPTE"
                        >
                          <Modules.MenuItem value="COURANT">
                            COURANT
                          </Modules.MenuItem>
                          <Modules.MenuItem value="EPARGNE">
                            EPARGNE
                          </Modules.MenuItem>
                        </Modules.Select>
                      </Modules.FormControl>
                    </div>

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
                        INFORMATION DU CLIENT
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
                        label="ID DU CLIENT"
                        variant="outlined"
                        name="ID"
                        required
                        onChange={(e) => setUserId(e.target.value)}
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
                    </div>

                    <div style={{ position: "relative" }}>
                      <Modules.Button
                        type="submit"
                        variant="contained"
                        style={{}}
                        disabled={loading}
                        //  startIcon={<SaveIcon style={{ color: 'white' }} />}
                      >
                        Enregistrer
                      </Modules.Button>
                      {loading && <Modules.Circular />}
                    </div>
                  </form>
                </Modules.Paper>
              </Modules.Grid>

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
