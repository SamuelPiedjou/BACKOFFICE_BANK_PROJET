/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 15/12/2021 - 10:55:57
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from "../../components/Imports/Index";
import { useStylesTheme } from "../../styles/Style";

export default function Error(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(false);
  const [showLoader, setShowLoader] = Modules.React.useState(true);
  const [loading, setLoading] = Modules.React.useState(false);

  Modules.React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  const refresh = async (e) => {
    setLoading(true);
    window.location.reload();
  };

  return showLoader == true ? (
    <Modules.Loader />
  ) : (
    <div className={classes.root}>
      <Modules.CssBaseline />
      <Modules.AppBar
        position="absolute"
        className={Modules.clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Modules.Toolbar className={classes.toolbar} style={{backgroundColor: '#0FCCCE'}}>
          <Modules.Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Erreur Survenue
          </Modules.Typography>
          {/* <Modules.IconButton color="inherit">
            <Modules.Badge badgeContent={4} color="secondary">
              <Modules.NotificationsIcon />
            </Modules.Badge>
          </Modules.IconButton> */}
        </Modules.Toolbar>
      </Modules.AppBar>
      <main className={classes.content} style={{ overflowY: "hidden" }}>
        <div className={classes.appBarSpacer} />
        <Modules.Container maxWidth="lg" className={classes.container}>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item xs={12}>
              <Modules.Paper className={classes.paper} elevation={10}>
                <Modules.ErrorIcon color="primary" />
                <Modules.Typography variant="h6">
                  Détails De L'Erreur
                </Modules.Typography>
              </Modules.Paper>
            </Modules.Grid>
            <Modules.Grid item xs={12}>
              <Modules.Paper
                className={classes.paper}
                elevation={10}
                style={{ maxHeight: "100%", overflow: "auto" }}
              >
                {JSON.stringify(props)}
              </Modules.Paper>
            </Modules.Grid>
            <Modules.Grid item xs={12}>
              <Modules.Paper className={classes.paper} elevation={10}>
                <div style={{ position: "relative" }}>
                  <Modules.Button
                    disabled={loading}
                    style={{backgroundColor: '#0FCCCE'}}
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={refresh}
                    className={classes.submit}
                    startIcon={
                      <Modules.RefreshIcon style={{ color: "white" }} />
                    }
                  >
                    Actualiser
                  </Modules.Button>
                  {loading && <Modules.Circular />}
                </div>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.Container>
      </main>
    </div>
  );
}
