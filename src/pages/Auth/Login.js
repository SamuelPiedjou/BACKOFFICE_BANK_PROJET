import * as Modules from "../../components/Imports/Index";
import { useStyles } from "../../styles/Style";

export default function Login(props) {
  const classes = useStyles();
  const [open, setOpen] = Modules.React.useState(false);
  const [username, setUserName] = Modules.React.useState();
  const [password, setPassword] = Modules.React.useState();

  const [showLoader, setShowLoader] = Modules.React.useState(true);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);

  Modules.React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  const history = Modules.useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
   // this.setState({ isLoading: true });
    setLoading(true);
    try {
      const authService = new props.logUserIn();
      const id_token = await authService.login({
        username,
        password,
      });
      if (id_token) {
        //setLoading(false);
        setOpen(true);
        const timer = setTimeout(() => {
          history.push("/dashboard");
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      }
    } catch (errors) {
      if (errors.errors.name == 'Error') {
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
    <Modules.Grid container component="main" className={classes.root}>
      <Modules.CssBaseline />
      <Modules.Grid item xs={false} sm={6} md={8} className={classes.image} />
      <Modules.Grid
        item
        xs={8}
        sm={6}
        md={4}
        component={Modules.Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <img src={Modules.logo} alt="Logo" className={classes.avatar} />
          {/* <div className={classes.alert}>
            <Modules.Alert severity="info">
              <Modules.Typography variant="h6">
                AKENO BACKOFFICE 👋
              </Modules.Typography>
            </Modules.Alert>
          </div> */}
          <form
            className={classes.form}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Modules.TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nom D'Utilisateur"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUserName(e.target.value)}
            />
            <Modules.TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot De Passe"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ position: "relative" }}>
              <Modules.Button
                disabled={loading}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Se Connecter
              </Modules.Button>
              {loading && <Modules.Circular />}
            </div>
          </form>
          <Modules.SnackbarComponent
            {...props}
            message="Connexion Etablie !"
            open={open}
          />
          <Modules.Box mt={5}>
            <Modules.Copyright />
          </Modules.Box>
        </div>
      </Modules.Grid>
    </Modules.Grid>
  );
}
