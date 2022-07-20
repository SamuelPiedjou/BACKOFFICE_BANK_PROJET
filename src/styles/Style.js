/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 11/11/2021 - 16:42:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from '../components/Imports/Index';

export const useStyles = Modules.makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  alert: {
    width: "80%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  image: {
    backgroundImage: `url(${Modules.background})`,
    backgroundRepeat: "no-repeat",
    /* backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900], */
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
  },
  form: {
    width: "80%", 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#0FCCCE'
  },
}));

const drawerWidth = 320;
const drawerWidth1 = 20;

export const useStylesTheme = Modules.makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: "95%",
    },
  },
  form20: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20%',
    },
  },
  form30: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30%",
    },
  },
  form50: {
      "& .MuiTextField-root": {
        margin: theme.spacing(2),
        width: "45%",
      },
  },
  stepper: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShift1: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth1}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaper1: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth1,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));