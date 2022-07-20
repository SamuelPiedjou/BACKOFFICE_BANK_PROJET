/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 28/12/2021 - 14:26:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from "../../components/Imports/Index";

function DesactivateDialog(props) {
  //console.log(props.operation);
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [openSnackbar, setOpenSnackbar] = Modules.React.useState(false);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);

  const handleClose = () => {
    setOpenAlert(false);
    window.location.reload();
  };

  const handleAlertYesClose = async () => {
    if (props.operation == "users") {
      desactivateUser();
    }
  };

  const desactivateUser = async () => {
    setLoading(true);
    try {
      const usersService = new props.users();
      const usersData = await usersService.desactivate({
        id: props.details.id,
        login: props.details.user.login,
        firstName: props.details.user.firstName,
        lastName: props.details.user.lastName,
        email: props.details.user.email,
        langKey: props.details.user.langKey,
        imageUrl: props.details.user.imageUrl
      });
      //console.log(JSON.stringify(usersData));
      if (usersData.id) {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
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

  const desactivatePartner = async () => {
    setLoading(true);
    try {
      const partnersService = new props.partners();
      const partnersData = await partnersService.desactivatePartner();
      //console.log(JSON.stringify(partnersData));
      if (partnersData.success == true) {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
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

  const desactivatePartnerAccount = async () => {
    setLoading(true);
    try {
      const partnersService = new props.partners();
      const partnersData = await partnersService.desactivatePartnerAccount();
      //console.log(JSON.stringify(partnersData));
      if (partnersData.success == true) {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
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

  const desactivateFee = async () => {
    setLoading(true);
    try {
      const feesService = new props.fees();
      const feesData = await feesService.desactivateFee();
      //console.log(JSON.stringify(partnersData));
      if (feesData.success == true) {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
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

  const desactivateOperation = async () => {
    setLoading(true);
    try {
      const operationsService = new props.operations();
      const operationsData = await operationsService.desactivateOperation();
      console.log(JSON.stringify(operationsData));
      if (operationsData.success == true) {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
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

  const desactivatePartnerFee = async () => {
    setLoading(true);
    try {
      const partnersFeesService = new props.partnersFees();
      const partnersFeesData = await partnersFeesService.desactivatePartnerFee();
      //console.log(JSON.stringify(partnersFeesData));
      if (partnersFeesData.success == true) {
        setOpenSnackbar(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
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
      title="Erreur Survenue Lors De La Désactivation"
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
          message="Succès De La Désactivation !"
          open={openSnackbar}
        />
      </Modules.DialogActions>
    </Modules.Dialog>
  );
}

export default DesactivateDialog;
