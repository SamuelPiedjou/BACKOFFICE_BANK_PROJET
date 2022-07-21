/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 15/12/2021 - 10:28:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from "../../components/Imports/Index";
import { useStylesTheme } from "../../styles/Style";

export default function UpdateBooking(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(true);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [showLoader, setShowLoader] = Modules.React.useState(true);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);
  const [motoData, setMotoData] = Modules.React.useState([]);
  const [bookingId, setBookingid] = Modules.React.useState(
    JSON.parse(localStorage.getItem("bookingDetails")).id);
    const [moto, setMoto] = Modules.React.useState(
      JSON.parse(localStorage.getItem("bookingDetails")).motoExtra.id
    );


    Modules.React.useEffect(async () => {
        try {
          const usersService = new props.users();
          const motoData = await usersService.getMotos();
          //console.log(JSON.stringify(motoData));
          setMotoData(motoData);
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

  const NewComponent = Modules.MainListItems;

  const history = Modules.useHistory();
  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const bookingsService = new props.bookings();
      const bookingsData = await bookingsService.updateBooking({
        bookingId,
        moto
      });
      //console.log(JSON.stringify(bookingsData));
      if (bookingsData.data.id) {
        setLoading(false);
        setOpenAlert(true);
        const timer = setTimeout(() => {
          history.push("/clients");
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      } else {
        setLoading(false);
        setErrorMessage(JSON.stringify(bookingsData));
        setShowError(true);
      }
    } catch (errors) {
      //console.log(JSON.stringify(errors));
      if (errors.name == "Error") {
        setLoading(false);
        setErrorMessage(errors);
        setShowError(true);
      }
    }
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
        <Modules.Toolbar className={classes.toolbar} style={{backgroundColor: '#0FCCCE'}}>
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
            EDITION DE RESERVATION
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
            style={{ width: 40, height: 40 }}
          />
          <span>FOOD DELIVER BACKOFFICE</span>
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
                  Affectation De La Réservation A Un Motoman
                </Modules.Typography>
              </Modules.Paper>
            </Modules.Grid>
            <Modules.Grid item xs={12}>
              <Modules.Paper className={classes.paper} elevation={10}>
                <form
                  className={classes.form}
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div>
                  <Modules.FormControl
                      variant="outlined"
                      style={{
                        width: "95%",
                        marginTop: 8,
                        marginLeft: 24,
                        marginRight: 8,
                      }}
                      required
                    >
                      <Modules.InputLabel id="demo-simple-select-outlined-label">
                        Motoman
                      </Modules.InputLabel>
                      <Modules.Select
                        labelId="demo-simple-select-outlined-label11"
                        id="motoman"
                        value={moto ? moto : ""}
                        label="Motoman"
                        onChange={(e) => setMoto(e.target.value)}
                      >
                        {motoData.map((row, key) => (
                          <Modules.MenuItem value={row.id} key={key}>
                            {row.user.lastName} {row.user.firstName} ({row.cni})
                          </Modules.MenuItem>
                        ))}
                      </Modules.Select>
                    </Modules.FormControl>
                  </div>
                  
                  <div style={{ position: "relative" }}>
                    <Modules.Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      disabled={loading}
                      style={{backgroundColor: '#0FCCCE', marginLeft: "3%", marginTop: 16}}
                      startIcon={
                        <Modules.SaveIcon style={{ color: "white" }} />
                      }
                    >
                      Enregistrer COMPTE COURANT
                    </Modules.Button>
                    {loading && <Modules.Circular />}
                  </div>
                </form>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
          <Modules.DialogComponent
            {...props}
            title="Ajout compte COURANT"
            message="Vous êtes sur le point d'enregister les informations du type de partenaire saisies
            dans le formulaire. Voulez-vous vraiment continuer le processus d'enregistrement
            ?"
          //open={openAlert}
          ></Modules.DialogComponent>
          <Modules.Box pt={4}>
            <Modules.Copyright />
          </Modules.Box>
        </Modules.Container>
      </main>
    </div>
  );
}
