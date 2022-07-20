import * as Modules from "../Imports/Index";

function Circular() {

  return (
    <Modules.CircularProgress
      size={24}
      style={{
        color: 'red',
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -10,
        marginLeft: -12,
      }}
    />
  );
}

export default Circular;
