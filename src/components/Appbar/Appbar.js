/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 11/11/2021 - 16:30:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from "../../components/Imports/Index";
import { useStylesTheme } from "../../styles/Style";

function AppBar(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <Modules.CssBaseline />
      <Modules.AppBar
        position="absolute"
        className={Modules.clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Modules.Toolbar className={classes.toolbar}>
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
            TYPES DE PARTENAIRE
          </Modules.Typography>
          <Modules.IconButton color="inherit">
            <Modules.Badge badgeContent={4} color="secondary">
              <Modules.NotificationsIcon />
            </Modules.Badge>
          </Modules.IconButton>
        </Modules.Toolbar>
      </Modules.AppBar>
      <Modules.Drawer
        variant="permanent"
        classes={{
          paper: Modules.clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div
          className={classes.toolbarIcon}
          style={{ backgroundColor: "beige" }}
        >
          <span>IFIRANZ BACKOFFICE</span>
          <Modules.IconButton onClick={handleDrawerClose}>
            <Modules.ChevronLeftIcon />
          </Modules.IconButton>
        </div>
        <Modules.Divider />
        <Modules.List>
          
        </Modules.List>
      </Modules.Drawer>
  </div>
  );
}

export default AppBar;
