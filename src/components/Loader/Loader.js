import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// import logo from "../../assets/img/logo.png";
import Lottie from "react-lottie";
import logo from "../../assets/lotties/logo.json";

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        {/* <img src={logo} alt="Logo" style={{ width: 200, height: 200 }} /> */}
        <Lottie options={defaultOptions} height={400} width={400} />
      </DialogContent>
    </Dialog>
  );
}

export default Loader;
