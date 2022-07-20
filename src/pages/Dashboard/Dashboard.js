/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 11/11/2021 - 16:32:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from "../../components/Imports/Index";
import { useStylesTheme } from "../../styles/Style";
import BookingsService from "../../services/Bookings.js";
import UsersService from "../../services/Users.js";

export default function Dashboard(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(true);
  const [showLoader, setShowLoader] = Modules.React.useState(true);
  const [dashboardData, setDashboardData] = Modules.React.useState();
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();

  Modules.React.useEffect(async () => {
    try {
      //const dashboardService = new props.dashboard();
      //const dashboardData = await dashboardService.getDashboard();
      //console.log(JSON.stringify(dashboardData.value.montantTotal));
      //setDashboardData(dashboardData);
      setShowLoader(false);
    } catch (errors) {
      //console.log(JSON.stringify(errors.name));
      setShowLoader(false);
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

  const fixedHeightPaper = Modules.clsx(classes.paper, classes.fixedHeight);
  const NewComponent = Modules.MainListItems;

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
        <Modules.Toolbar className={classes.toolbar} style={{backgroundColor: 'blue'}}>
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
            TABLEAU DE BORD
          </Modules.Typography>
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
            <Modules.Grid item xs={12} md={12} lg={12}>
              <Modules.Paper className={fixedHeightPaper} elevation={10}>
                <Modules.Users {...props} users={UsersService} />
              </Modules.Paper>
            </Modules.Grid>
            <Modules.Grid item xs={12}>
              <Modules.Paper className={classes.paper} elevation={10}>
                <Modules.Orders {...props} bookings={BookingsService} />
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
          <Modules.Box pt={4}>
            <Modules.Copyright />
          </Modules.Box>
        </Modules.Container>
      </main>
    </div>
  );
}
