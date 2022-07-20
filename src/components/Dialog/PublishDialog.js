import * as Modules from "../../components/Imports/Index";

function PublishDialog(props) {
  //console.log(props.operation);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [openSnackbar, setOpenSnackbar] = Modules.React.useState(false);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);

  const handleAlertYesClose = async () => {
    if (props.operation == "partners") {
      publishPartner();
    }
  };

  const publishPartner = async () => {
    setLoading(true);
    try {
      const partnersService = new props.partners();
      const partnersData = await partnersService.publishPartner();
      //console.log(JSON.stringify(partnersData));
      if (partnersData.success == true) {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      } else {
        setLoading(false);
        setErrorMessage(partnersData.message);
        setShowError(true);
      }
    } catch (errors) {
      //console.log(JSON.stringify(errors.name));
      if (errors.name == "Error") {
        setLoading(false);
        setErrorMessage(errors.message);
        setShowError(true);
      }
    }
  };

  return showError == true ? (
    <Modules.ErrorDialog
      {...props}
      title="Erreur Survenue Lors De La Publication"
      message={errorMessage}
    />
  ) : (
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
        <div style={{ position: "relative" }}>
          <Modules.Button
            onClick={handleAlertYesClose}
            color="primary"
            type="submit"
            variant="contained"
            autoFocus
            disabled={loading}
          >
            Oui
          </Modules.Button>
          {loading && <Modules.Circular />}
        </div>
        <Modules.SnackbarComponent
          {...props}
          title="Titre"
          message="Succès De La Publication !"
          open={openSnackbar}
        />
      </Modules.DialogActions>
    </Modules.Dialog>
  );
}

export default PublishDialog;
