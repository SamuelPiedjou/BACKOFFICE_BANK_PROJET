import * as Modules from "../../components/Imports/Index";

function CheckDialog(props) {
  const [openCheckAlert, setOpenCheckAlert] = Modules.React.useState(
    props.open
  );
  const [dangoteConfigData, setDangoteConfigData] = Modules.React.useState();
  const [showError, setShowError] = Modules.React.useState(false);
  const [errorMessage, setErrorMessage] = Modules.React.useState();
  const [customerCode, setCustomerCode] = Modules.React.useState();
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [details, setDetails] = Modules.React.useState('');
  const [loading, setLoading] = Modules.React.useState(false);

  const handleClose = () => {
    setOpenCheckAlert(false);
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const dangoteConfigService = new props.dangoteConfig();
      const dangoteConfigData = await dangoteConfigService.checkCustomer({
        customerCode,
      });
      setDangoteConfigData(dangoteConfigData.value);
      //console.log(JSON.stringify(dangoteConfigData.value))
      if (dangoteConfigData.value.valid == true) {
        setDetails(dangoteConfigData.value);
        localStorage.setItem(
          "checkCustomerData",
          JSON.stringify(dangoteConfigData)
        );
        setOpenAlert(true);
      }
      if (dangoteConfigData.value.valid === false) {
        setLoading(false);
        setErrorMessage(dangoteConfigData.value.errorsMsg);
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
      title="Erreur Survenue Lors De La Vérification Du Client"
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
          <Modules.Grid container spacing={3}>
            <Modules.Grid item md={12}>
              <Modules.Paper elevation={10} style={{ padding: 25 }}>
                <Modules.DialogContentText id="alert-dialog-description">
                  Veuillez saisir le code du client à vérifier
              </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <Modules.TextField
                    autoFocus
                    variant="outlined"
                    name="customerCode"
                    label="Code Client"
                    fullWidth
                    required
                    onChange={(e) => setCustomerCode(e.target.value)}
                  />
                </Modules.DialogContentText>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.DialogContent>
        <Modules.DialogActions>
          <Modules.Button
            onClick={props.onClose}
            color="secondary"
            type="submit"
            variant="contained"
          >
            Annuler
        </Modules.Button>
          <div style={{ position: "relative" }}>
            <Modules.Button
              disabled={loading}
              onClick={handleSubmit}
              color="primary"
              type="submit"
              variant="contained"
            >
              Verifier
        </Modules.Button>
            {loading && <Modules.Circular />}
          </div>
        </Modules.DialogActions>
        <Modules.CheckViewDialog
          {...props}
          title="Vérification Du Client Terminé"
          operation="checkCustomer"
          //checkCustomerData={dangoteConfigData}
          open={openAlert}
          details={details}
        ></Modules.CheckViewDialog>
      </Modules.Dialog>
    );
}

export default CheckDialog;
