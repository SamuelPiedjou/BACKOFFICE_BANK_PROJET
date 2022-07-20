import React from "react";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function SnackbarComponent(props) {
  //console.log(props.title);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClose = () => {
    setOpenSnackbar(false)
  }

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert onClose={handleClose} variant="filled" severity="success">
        {props.message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarComponent;
