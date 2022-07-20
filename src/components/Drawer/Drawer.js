import * as Modules from "../../components/Imports/Index";
import { useStylesTheme } from "../../styles/Style";

function Drawer(props) {
  const classes = useStylesTheme();
  const [open, setOpen] = Modules.React.useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Modules.Drawer
      variant="permanent"
      classes={{
        paper: Modules.clsx(
          classes.drawerPaper,
          !open && classes.drawerPaperClose
        ),
      }}
      open={props.open}
    >
      <div className={classes.toolbarIcon} style={{ backgroundColor: "beige" }}>
        <span>AKENO BACKOFFICE</span>
        <Modules.IconButton onClick={handleDrawerClose}>
          <Modules.ChevronLeftIcon />
        </Modules.IconButton>
      </div>
      <Modules.Divider />
      <Modules.List>
        <Modules.MainListItems />
      </Modules.List>
    </Modules.Drawer>
  );
}

export default Drawer;
