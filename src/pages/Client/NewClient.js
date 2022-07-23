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
export default function NewClient(props) {
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
  const [name, setName] = Modules.React.useState();
  const [password, setPassword] = Modules.React.useState();
  const [accountType, setAccountType] = Modules.React.useState();
  const [email, setEmail] = Modules.React.useState();
  const [phone, setPhone] = Modules.React.useState();


  const [dateNaiss, setDateNaiss] = Modules.React.useState();
  const [endDate, setEndDate] = Modules.React.useState();
  const [genre, setGenre] = Modules.React.useState();
  const [newSelected2, setNewSelected2] = Modules.React.useState([]);
  const [openConfirmationDialog, setOpenConfirmationDialog] =
    Modules.React.useState(false);

  const [openSnackbar, setOpenSnackbar] = Modules.React.useState(false);
  const [openBalanceInsuf, setOpenBalanceInsuf] = Modules.React.useState(false);

  const apiurl = "http://172.21.253.133:8086/accounts";

  const choice = accountType === "RETRAIT" ? "withdraw" : "deposit";

  console.log("N°COMPTE SENDER   " + name);
  console.log("BALANCE   " + email);
  async function newTransaction(data) {
    try {
      const response = await Axios.post(
        `${apiurl}/${choice}`,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
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
  async function createCustomer(data) {
    try {
      const response = await Axios.post(
        // `http://192.168.0.148:8086/accounts/transfer`,
        `http://172.21.253.133:8086/customer/add`,
        // http://localhost:8086/customer/add
        {
          birthday: data.dateNaiss,
          customerName: data.name,
          emailId: data.email,
          gender: data.genre,
          password:data.password,
          phoneNo: data.phone,
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
  const handleTransfert = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const usersData = await createCustomer({
        dateNaiss,
        name,
        email,
        genre,
        password,
        phone
      });
      setLoading(false); 
      if (usersData.userId != null) {
        setOpenSnackbar(true);
      }
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
                  ENREGISTRER UN CLIENT
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
                          margin: 20,
                        }}
                      >
                        INFORMATIONS SUR LE CLIENT
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: 20,
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection:"row", 
                      }}
                    >
                      <div className={classes.form90} style={{width:'100%',marginRight:10}}>
                        <Modules.TextField
                          id="start"
                          label="DATE NAiSSANCE"
                          type="date" 
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="startDate"
                          variant="outlined"
                          required
                          onChange={(e) => setDateNaiss(e.target.value)}
                        />
                         
                        <Modules.FormControl
                          variant="outlined"
                          style={{
                            width: "20%",
                          }}
                          required
                        >
                          <Modules.InputLabel id="demo-simple-select-outlined-label22">
                            GENRE
                          </Modules.InputLabel>
                          <Modules.Select
                            labelId="demo-simple-select-outlined-label22"
                            id="genre"
                            value={genre ? genre : ""}
                            label="GENRE"
                            onChange={(e) => setGenre(e.target.value)}
                          >
                              <Modules.MenuItem value={"MALE"}>
                                 MASCULIN
                              </Modules.MenuItem>
                              <Modules.MenuItem value={"FEMALE"}>
                                 FEMININ
                              </Modules.MenuItem>
                          </Modules.Select>
                        </Modules.FormControl>  
                      </div>
                    </div> 
                    <div style={{ alignItems: "center" }}>
                      <div
                        style={{
                          backgroundColor: "blue",
                          opacity: 0.6,
                          color: "#fff",
                          padding: 10,
                          borderRadius: 10,
                          margin:15
                        }}
                      >
                        2 étapes
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
                        label="NOM CLIENT"
                        variant="outlined"
                        name="NAME"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                      <Modules.TextField
                        style={{ width: "50%", margin: 20 }}
                        id="outlined-basic"
                        label="EMAIL"
                        type="EMAIL"
                        variant="outlined"
                        name="EMAIL"
                        required
                        // type="password"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Modules.TextField
                        style={{ width: "50%", margin: 20 }}
                        id="outlined-basic"
                        label="N°PHONE"
                        variant="outlined"
                        name="phone"
                        required
                        // type="password"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <Modules.TextField
                        style={{ width: "50%", margin: 20 }}
                        id="outlined-basic"
                        label="OTP"
                        variant="outlined"
                        name="password"
                        type="password"
                        required
                        // type="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div style={{ position: "relative" }}>
                      <Modules.Button
                        type="submit"
                        variant="contained"
                        style={{backgroundColor:"blue", color:"white" ,fontSize:"30", fontWeight:"bold"}}
                        disabled={loading}
                        //  startIcon={<SaveIcon style={{ color: 'white' }} />}
                      >
                        ENREGISTRER
                      </Modules.Button>
                      {loading && <Modules.Circular />}
                    </div>
                  </form>
                 
                  {/*/***********************  FORMULAIRE TRANSFERT ********************************/}
                </Modules.Paper>
              </Modules.Grid>
              <Modules.SnackbarComponent
                {...props}
                title="Titre"
                message="OPERATION AFFECTUE"
                open={openSnackbar}
              />
              <Modules.SnackbarComponent
                {...props}
                title="Titre"
                message="SOLDE INSUFFISANT"
                open={openBalanceInsuf}
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
