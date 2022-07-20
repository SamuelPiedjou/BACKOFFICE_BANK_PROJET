import * as Modules from "../../components/Imports/Index";

function ErrorDialog(props) {
  const [openAlert, setOpenAlert] = Modules.React.useState(false);
  const [loading, setLoading] = Modules.React.useState(false);

  const handleClose = () => {
    setLoading(true);
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
        <Modules.DialogContentText id="alert-dialog-description">
          {props.message}
        </Modules.DialogContentText>
      </Modules.DialogContent>
      <Modules.DialogActions>
        <div style={{ position: "relative" }}>
          <Modules.Button
            onClick={handleClose}
            color="secondary"
            type="submit"
            variant="contained"
            autoFocus
            disabled={loading}
          >
            Ok
          </Modules.Button>
          {loading && <Modules.Circular />}
        </div>
      </Modules.DialogActions>
    </Modules.Dialog>
  );
}

export default ErrorDialog;
