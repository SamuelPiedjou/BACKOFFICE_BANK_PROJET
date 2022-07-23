/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 28/12/2021 - 14:24:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import { bpfrpt_proptype_ScrollIndices } from "react-virtualized/dist/commonjs/ArrowKeyStepper";
import * as Modules from "../../components/Imports/Index";
import Axios from "axios";

function ActivateDialog(props) {
  //console.log(JSON.stringify(props.details.user));
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [openSnackbar, setOpenSnackbar] = Modules.React.useState(false);
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [loading, setLoading] = Modules.React.useState(false);



  async function activeAccount(accountId) {
    try {
      const response = await Axios.put(
        `http://172.21.253.133:8086/accounts/activeAcc/${ accountId}`,  
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




  const handleAlertYesClose = async () => {
    if (props.operation == "account") {
      desactivateAccount(props.details.accountId);
    }
  };

  const desactivateAccount = async (id) => {
    setLoading(true);
    try {
      const usersData = await activeAccount(id);
      //console.log(JSON.stringify(usersData));
      if (usersData.accountStatus == "ACTIVATED") {
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
      title="Erreur Survenue Lors De L'Activation"
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
          message="Succès De L'Activation !"
          open={openSnackbar}
        />
      </Modules.DialogActions>
    </Modules.Dialog>
  );
}

export default ActivateDialog;
