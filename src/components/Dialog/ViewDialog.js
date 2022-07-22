/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 15/12/2021 - 10:19:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from "../../components/Imports/Index";

function ViewDialog(props) {
  return (
    <Modules.Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Modules.DialogTitle id="alert-dialog-title">
        {props.title}
      </Modules.DialogTitle>
      {props.operation == "regions" ? (
        <Modules.DialogContent>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item md={12}>
              <Modules.Paper elevation={10} style={{ padding: 25 }}>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>ID</strong> : {props.details.id}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>NOM</strong> : {props.details.name}
                </Modules.DialogContentText>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.DialogContent>
      ) : null}

      {props.operation == "cities" ? (
        <Modules.DialogContent>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item md={12}>
              <Modules.Paper elevation={10} style={{ padding: 25 }}>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>ID</strong> : {props.details.id}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>REGION</strong> :{" "}
                  {props.details.division ? props.details.division.name : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>NOM</strong> : {props.details.name}
                </Modules.DialogContentText>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.DialogContent>
      ) : null}

      {props.operation == "salePoints" ? (
        <Modules.DialogContent>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item md={12}>
              <Modules.Paper elevation={10} style={{ padding: 25 }}>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>VILLE</strong> :{" "}
                  {props.details.city ? props.details.city.name : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>LOCALISATION</strong> : {props.details.location}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>RESPONSABLE</strong> : {props.details.owner}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>TELEPHONE</strong> : {props.details.phone}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>DESCRIPTION</strong> : {props.details.description}
                </Modules.DialogContentText>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.DialogContent>
      ) : null}

      {props.operation == "users" ? (
        <Modules.DialogContent>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item md={12}>
              <Modules.Paper elevation={10} style={{ padding: 25 }}>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>NOM</strong> :{" "}
                  {props.details ? props.details.lastName : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>PRENOM</strong> :{" "}
                  {props.details ? props.details.firstName : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>CONTACT</strong> :{" "}
                  {props.details ? props.details.login : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>EMAIL</strong> :{" "}
                  {props.details ? props.details.email : ""}
                </Modules.DialogContentText>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.DialogContent>
      ) : null}

      {props.operation == "account" ? (
        <Modules.DialogContent>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item md={12}>
              <Modules.Paper elevation={10} style={{ padding: 25 }}>
              <Modules.DialogContentText id="alert-dialog-description">
                <strong>n°compte</strong> :{" "}
                  {props.details ? props.details.accountId : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>SOLDE</strong> :{" "}
                  {props.details ? props.details.balance : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>Date</strong> :{" "}
                  {props.details ? props.details.createdAt : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>Status du compte</strong> :{" "}
                  {props.details ? props.details.accountStatus : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>TYPE DE COMPTE </strong> :{" "}
                  {props.details.accountType}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>DETENTEUR</strong> :{" "}
                  {props.details.customerDto ? props.details.customerDto.customerName : ""}
                  {/* {props.details.customerDto ? }:{props.details.customerDto.customerName} */}
                </Modules.DialogContentText>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.DialogContent>
      ) : null}
      {props.operation == "transactions" ? (
        <Modules.DialogContent>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item md={12}>
              <Modules.Paper elevation={10} style={{ padding: 25 }}>
              <Modules.DialogContentText id="alert-dialog-description">
                <strong>ID_TRANSACTION</strong> :{" "}
                  {props.details ? props.details.accountId : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>MONTANT</strong> :{" "}
                  {props.details ? props.details.amount : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>TRANSACTION_TYPE</strong> :{" "}
                  {props.details ? props.details.transactionType : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>DATE</strong> :{" "}
                  {props.details ? props.details.dateTime : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>SATUS_DE_LA_TRANSACTION</strong> :{" "}
                  {props.details.transactionStatus}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>ACCOUNT_ID</strong> :{" "}
                  {props.details  ? props.details.accountId: ""} 
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>REMARQUE_DE_LA_TRANSACTION</strong> :{" "}
                  {props.details  ? props.details.transactionRemarks  : ""} 
                </Modules.DialogContentText>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.DialogContent>
      ) : null}
      {props.operation == "transactions" ? (
        <Modules.DialogContent>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item md={12}>
              <Modules.Paper elevation={10} style={{ padding: 25 }}>
              <Modules.DialogContentText id="alert-dialog-description">
                <strong>ID_TRANSACTION</strong> :{" "}
                  {props.details ? props.details.accountId : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>MONTANT</strong> :{" "}
                  {props.details ? props.details.amount : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>TRANSACTION_TYPE</strong> :{" "}
                  {props.details ? props.details.transactionType : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>DATE</strong> :{" "}
                  {props.details ? props.details.dateTime : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>SATUS_DE_LA_TRANSACTION</strong> :{" "}
                  {props.details.transactionStatus}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>ACCOUNT_ID</strong> :{" "}
                  {props.details  ? props.details.accountId: ""} 
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>REMARQUE_DE_LA_TRANSACTION</strong> :{" "}
                  {props.details  ? props.details.transactionRemarks  : ""} 
                </Modules.DialogContentText>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.DialogContent>
      ) : null}

      {props.operation == "comments" ? (
        <Modules.DialogContent>
          <Modules.Grid container spacing={3}>
            <Modules.Grid item md={12}>
              <Modules.Paper elevation={10} style={{ padding: 25 }}>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>ID</strong> : {props.details.id}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>UTILISATEUR</strong> :{" "}
                  {props.details.userExtra ? props.details.userExtra.user.lastName +' '+props.details.userExtra.user.lastName : ""}
                </Modules.DialogContentText>
                <Modules.DialogContentText id="alert-dialog-description">
                  <strong>COMMENTAIRE</strong> : {props.details.avis}
                </Modules.DialogContentText>
              </Modules.Paper>
            </Modules.Grid>
          </Modules.Grid>
        </Modules.DialogContent>
      ) : null}

      <Modules.DialogActions>
        <Modules.Button
          onClick={props.onClose}
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

export default ViewDialog;
