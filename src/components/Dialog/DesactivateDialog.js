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
import Axios from "axios";

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
    if (props.operation == "account") {
      desactivateAccount(props.details.accountId);
    }
  };
  async function desactiveAccount(accountId) {
    try {
      const response = await Axios.put(
        `http://172.21.253.133:8086/accounts/suspend/${ accountId}`, 
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", 
          },
        }
      );
      //console.log(response)
      return response.data;
    } catch (error) {
      //console.log(JSON.stringify(error))
      return Promise.reject(error);
    }
  }

  const desactivateAccount = async (id) => {
    setLoading(true);
    try {
      const usersData = await desactiveAccount(id);
      //console.log(JSON.stringify(usersData));
      if (usersData.accountStatus == "SUSPENDED") {
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
