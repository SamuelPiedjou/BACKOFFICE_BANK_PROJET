import * as Modules from "../../components/Imports/Index";

function DeleteDialog(props) {
  //console.log(props.details.id);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [openSnackbar, setOpenSnackbar] = Modules.React.useState(false);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);

  const handleAlertYesClose = async () => {
    if (props.operation == "regions") {
      deleteRegion(props.details.id);
    }

    if (props.operation == "cities") {
      deleteCity(props.details.id);
    }

    if (props.operation == "salePoints") {
      deleteSalePoint(props.details.id);
    }

    if (props.operation == "comments") {
      deleteComment(props.details.id);
    }
  };

  const deleteRegion = async (id) => {
    setLoading(true);
    try {
      const regionsService = new props.regions();
      const regionsData = await regionsService.deleteRegion(id);
      console.log(JSON.stringify(regionsData));
      if (regionsData.statusText == "OK") {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      }
      else {
        setLoading(false);
        setErrorMessage(JSON.stringify(regionsData));
        setShowError(true);
      } 
    } catch (errors) {
      if (errors.name == "Error") {
        setLoading(false);
        setErrorMessage(errors.message);
        setShowError(true);
      }
    }
  };

  const deleteCity = async (id) => {
    setLoading(true);
    try {
      const citiesService = new props.cities();
      const citiesData = await citiesService.deleteCity(id);
      //console.log(JSON.stringify(citiesData));
      if (citiesData.statusText == "OK") {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      }
      else {
        setLoading(false);
        setErrorMessage(JSON.stringify(citiesData));
        setShowError(true);
      }  
    } catch (errors) {
      if (errors.name == "Error") {
        setLoading(false);
        setErrorMessage(errors.message);
        setShowError(true);
      }
    }
  };

  const deleteSalePoint = async (id) => {
    setLoading(true);
    try {
      const salepointsService = new props.salePoints();
      const salePointsData = await salepointsService.deleteSalePoint(id);
      //console.log(JSON.stringify(salePointsData));
      if (salePointsData.statusText == "OK") {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      }
      else {
        setLoading(false);
        setErrorMessage(JSON.stringify(salePointsData));
        setShowError(true);
      }  
    } catch (errors) {
      if (errors.name == "Error") {
        setLoading(false);
        setErrorMessage(errors.message);
        setShowError(true);
      }
    }
  };

  const deleteComment = async (id) => {
    setLoading(true);
    try {
      const commentsService = new props.comments();
      const commentsData = await commentsService.deleteComment(id);
      //console.log(JSON.stringify(commentsData));
      if (commentsData.statusText == "OK") {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      }
      else {
        setLoading(false);
        setErrorMessage(JSON.stringify(commentsData));
        setShowError(true);
      }  
    } catch (errors) {
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
      title="Erreur Survenue Lors De La Suppression"
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
          message="Succès De La Suppression !"
          open={openSnackbar}
        />
      </Modules.DialogActions>
    </Modules.Dialog>
  );
}

export default DeleteDialog;
