/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 15/12/2021 - 09:48:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import React from 'react';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © piedjou's_technology "}
      {/* <Link color="inherit" href="#">
        
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;