import * as Modules from "../../components/Imports/Index";

function DialogComponent(props) {
  //console.log(props.open);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [openSnackbar, setOpenSnackbar] = Modules.React.useState(false);
 /*  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  }; */

  const handleClose = () => {
    setOpenAlert(false);
    window.location.reload();
  };

  const handleAlertYesClose = () => {
    setOpenSnackbar(true);
  };

  return (
    <Modules.Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Modules.DialogTitle id="alert-dialog-title">
        {props.title}
      </Modules.DialogTitle>
      <Modules.DialogContent>
        <Modules.DialogContentText id="alert-dialog-description">
          {props.message}
        </Modules.DialogContentText>
      </Modules.DialogContent>
      <Modules.DialogActions>
        <Modules.Button
          onClick={props.onClose}
          color="secondary"
          type="submit"
          variant="contained"
        >
          Non
        </Modules.Button>
        <Modules.Button
          onClick={handleAlertYesClose}
          color="primary"
          type="submit"
          variant="contained"
          autoFocus
        >
          Oui
        </Modules.Button>
        <Modules.SnackbarComponent
          {...props}
          title="Titre"
          message="Succès De L'Enregistrement !"
          open={openSnackbar}
        />
      </Modules.DialogActions>
    </Modules.Dialog>
  );
}

export default DialogComponent;
