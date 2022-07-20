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

export default function NewUser(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(true);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [showLoader, setShowLoader] = Modules.React.useState(true);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);
  const [userLastName, setUserLastName] = Modules.React.useState('');
  const [userFirstName, setUserFirstName] = Modules.React.useState('');
  const [userAddress, setUserAddress] = Modules.React.useState('');
  const [userCNI, setUserCNI] = Modules.React.useState('');
  const [userPhone, setUserPhone] = Modules.React.useState('');
  const [userPassword, setUserPassword] = Modules.React.useState('');
  const [file, setFile] = Modules.React.useState();
  const [baseImage, setBaseImage] =  Modules.React.useState();


  Modules.React.useEffect(async () => {
    try {
      setShowLoader(false);
    } catch (errors) {
      //console.log(JSON.stringify(errors.name));
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const NewComponent = Modules.MainListItems;

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFile(base64);
    console.log(base64)
    setBaseImage(base64)
    console.log(baseImage)
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const history = Modules.useHistory();
  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const usersService = new props.users();
      const usersData = await usersService.newUser({
        userLastName,
        userFirstName,
        userPhone,
        userAddress,
        userCNI,
        userPassword, 
        baseImage
      });
      //console.log(JSON.stringify(usersData));
      if (usersData === "") {
        setLoading(false);
        setOpenAlert(true);
        const timer = setTimeout(() => {
          history.push("/moto-list");
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      } else {
        setLoading(false);
        setErrorMessage(JSON.stringify(usersData));
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
        <Modules.Toolbar className={classes.toolbar} style={{ backgroundColor: '#0FCCCE' }}>
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
            MOTOMAN
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
                  Nouveau Motoman
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
                  <Modules.TextField
                    type='file'
                    id="outlined-basic"
                    name="file"
                    required
                    inputProps={{ accept: 'image/*' }} 
                    onChange={(e) => {
                      uploadImage(e);
                    }}
                    variant="outlined"
                  />
                  <div className={classes.form50}>
                    <Modules.TextField
                      id="outlined-basic"
                      label="Nom Du Motoman"
                      variant="outlined"
                      name="userLastName"
                      value={userLastName}
                      required
                      autoFocus
                      onChange={(e) => setUserLastName(e.target.value)}
                    />
                    <Modules.TextField
                      id="outlined-basic"
                      label="Prénom"
                      variant="outlined"
                      name="userFirstName"
                      value={userFirstName}
                      required
                      autoFocus
                      onChange={(e) => setUserFirstName(e.target.value)}
                    />
                  </div>

                  <div className={classes.form50}>
                    <Modules.TextField
                      id="outlined-basic"
                      label="Téléphone"
                      variant="outlined"
                      name="userPhone"
                      value={userPhone}
                      required
                      autoFocus
                      onChange={(e) => setUserPhone(e.target.value)}
                    />
                    <Modules.TextField
                      id="outlined-basic"
                      label="Adresse"
                      variant="outlined"
                      name="userAddress"
                      value={userAddress}
                      required
                      autoFocus
                      onChange={(e) => setUserAddress(e.target.value)}
                    />
                  </div>

                  <div className={classes.form50}>
                    <Modules.TextField
                      id="outlined-basic"
                      label="CNI"
                      variant="outlined"
                      name="userCNI"
                      value={userCNI}
                      required
                      autoFocus
                      onChange={(e) => setUserCNI(e.target.value)}
                    />
                    <Modules.TextField
                      id="outlined-basic"
                      label="Mot De Passe"
                      variant="outlined"
                      name="userPassword"
                      value={userPassword}
                      required
                      autoFocus
                      onChange={(e) => setUserPassword(e.target.value)}
                    />
                  </div>

                  <div style={{ position: "relative" }}>
                    <Modules.Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      style={{ marginLeft: "3%",backgroundColor: '#0FCCCE'  }}
                      disabled={loading}
                      startIcon={
                        <Modules.SaveIcon style={{ color: "white" }} />
                      }
                    >
                      Enregistrer
                    </Modules.Button>
                    {loading && <Modules.Circular />}
                  </div>
                </form>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
          <Modules.DialogComponent
            {...props}
            title="Confirmation D'Enregistrement Du Type De Partenaire"
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
