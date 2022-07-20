import * as Modules from "../../components/Imports/Index";

function CheckViewDialog(props) {
  const [openAlert, setOpenAlert] = Modules.React.useState();
    //console.log(props)

  const handleClose = () => {
    setOpenAlert(false);
    window.location.reload();
  };

  return (
    <Modules.Dialog
      open={props.open}
      onClose={handleClose}
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
                <strong>CODE</strong> : {props.details.customerId}
              </Modules.DialogContentText>
              <Modules.DialogContentText id="alert-dialog-description">
                <strong>NOM</strong> : {props.details.custName}
              </Modules.DialogContentText>
              <Modules.DialogContentText id="alert-dialog-description">
                <strong>ADRESSE</strong> : {props.details.customerAddress}
              </Modules.DialogContentText>
              <Modules.DialogContentText id="alert-dialog-description">
                <strong>REGION</strong> : {props.details.customerRegion}
              </Modules.DialogContentText>
              <Modules.DialogContentText id="alert-dialog-description">
                <strong>PAYS</strong> : {props.details.customerCountry}
              </Modules.DialogContentText>
            </Modules.Paper>
          </Modules.Grid>
        </Modules.Grid>
      </Modules.DialogContent>

      <Modules.DialogActions>
        <Modules.Button
          onClick={handleClose}
          color="primary"
          type="submit"
          variant="contained"
          autoFocus
        >
          Ok
        </Modules.Button>
      </Modules.DialogActions>
    </Modules.Dialog>
  );
}

export default CheckViewDialog;
