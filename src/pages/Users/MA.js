/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 11/11/2021 - 16:31:45
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2021
    * - Author          : HP
    * - Modification    : 
**/
import * as Modules from "../../components/Imports/Index";
import { useStylesTheme } from "../../styles/Style";
import usersService from '../../services/Users';

export default function MA(props) {
    const classes = useStylesTheme();
    const [open, setOpen] = Modules.React.useState(true);
    const [openAlert, setOpenAlert] = Modules.React.useState(false);
    const [showLoader, setShowLoader] = Modules.React.useState(true);
    const [showError, setShowError] = Modules.React.useState(false);
    const [errorMessage, setErrorMessage] = Modules.React.useState();
    const [loading, setLoading] = Modules.React.useState(false);
    const [usersData, setUsersData] = Modules.React.useState();
    const [page, setPage] = Modules.React.useState(0);
    const [rowsPerPage, setRowsPerPage] = Modules.React.useState(10);
    const [details, setDetails] = Modules.React.useState("");
    const [openActivateDialog, setOpenActivateDialog] = Modules.React.useState(false);
    const [openDesactivateDialog, setOpenDesactivateDialog] = Modules.React.useState(false);

    Modules.React.useEffect(async () => {
        try {
            const usersService = new props.users();
            const usersData = await usersService.getMA();
            //console.log(JSON.stringify(citiesData));
            setUsersData(usersData);
            setShowLoader(false);
        } catch (errors) {
            //console.log(JSON.stringify(errors.name));
            if (errors.name == "Error") {
                setErrorMessage(errors);
                setShowError(true);
            }
        }
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDialogClose = () => {
        setOpenAlert(false);
    };

    const handleActivateDialogClose = () => {
        setOpenActivateDialog(false);
    };

    const handleDesactivateDialogClose = () => {
        setOpenDesactivateDialog(false);
    };

    const NewComponent = Modules.MainListItems;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return showLoader == true ? (
        <Modules.Loader />
    ) : showError == true ? (
        <Modules.Error {...props} message={errorMessage} />
    ) : (
        <div className={classes.root}>
            <Modules.CssBaseline />
            <Modules.AppBar
                position="absolute"
                className={Modules.clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Modules.Toolbar className={classes.toolbar} style={{ backgroundColor: '#0FCCCE' }}>
                    <Modules.IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={Modules.clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <Modules.MenuIcon />
                    </Modules.IconButton>
                    <Modules.Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        UTILISATEURS
                    </Modules.Typography>
                    {/*  <Modules.IconButton color="inherit">
            <Modules.Badge badgeContent={4} color="secondary">
              <Modules.NotificationsIcon />
            </Modules.Badge>
          </Modules.IconButton> */}
                </Modules.Toolbar>
            </Modules.AppBar>
            <Modules.Drawer
                variant="permanent"
                classes={{
                    paper: Modules.clsx(
                        classes.drawerPaper,
                        !open && classes.drawerPaperClose
                    ),
                }}
                open={open}
            >
                <div
                    className={classes.toolbarIcon}
                    style={{ backgroundColor: "beige" }}
                >
                    <img
                        src={Modules.logo}
                        alt="Logo"
                        style={{ width: 40, height: 40 }}
                    />
                    <span>CELESTA_BANK</span>
                    <Modules.IconButton onClick={handleDrawerClose}>
                        <Modules.ChevronLeftIcon />
                    </Modules.IconButton>
                </div>
                <Modules.Divider />
                <Modules.List>
                    <NewComponent />
                </Modules.List>
            </Modules.Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Modules.Container maxWidth="lg" className={classes.container}>
                    <Modules.Grid container spacing={3}>
                        <Modules.Grid item xs={12}>
                            <Modules.Paper className={classes.paper} elevation={10}>
                                <Modules.PeopleIcon color="primary" />
                                <Modules.Typography variant="h6">
                                    Etablissement Marie Albert
                                </Modules.Typography>
                            </Modules.Paper>
                        </Modules.Grid>
                    </Modules.Grid>
                    <Modules.Grid item xs={12}>
                        <Modules.Paper className={classes.paper} elevation={10}>
                            <Modules.TableContainer style={{ maxHeight: 340, marginTop: 20 }}>
                                <Modules.Table
                                    stickyHeader
                                    aria-label="sticky table"
                                    id="divToDisplay"
                                >
                                    <Modules.TableHead>
                                        <Modules.TableRow>
                                            <Modules.TableCell
                                                style={{
                                                    minWidth: 170,
                                                    backgroundColor: "#0FCCCE",
                                                    color: "#fff",
                                                }}
                                            >
                                                {"NOM"}
                                            </Modules.TableCell>
                                            <Modules.TableCell
                                                style={{
                                                    minWidth: 170,
                                                    backgroundColor: "#0FCCCE",
                                                    color: "#fff",
                                                }}
                                            >
                                                {"PRENOM"}
                                            </Modules.TableCell>
                                            <Modules.TableCell
                                                style={{
                                                    minWidth: 170,
                                                    backgroundColor: "#0FCCCE",
                                                    color: "#fff",
                                                }}
                                            >
                                                {"TELEPHONE"}
                                            </Modules.TableCell>
                                            <Modules.TableCell
                                                style={{
                                                    minWidth: 170,
                                                    backgroundColor: "#0FCCCE",
                                                    color: "#fff",
                                                }}
                                            >
                                                {"ACTIF"}
                                            </Modules.TableCell>
                                            <Modules.TableCell
                                                style={{
                                                    minWidth: 170,
                                                    backgroundColor: "#0FCCCE",
                                                    color: "#fff",
                                                }}
                                            >
                                                {"ACTION"}
                                            </Modules.TableCell>
                                        </Modules.TableRow>
                                    </Modules.TableHead>
                                    <Modules.TableBody>
                                        {usersData
                                            .sort(function (s1, s2) {
                                                return s2.id - s1.id;
                                            }).slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            )
                                            .map((row, key) => {
                                                return (
                                                    <Modules.TableRow
                                                        hover
                                                        role="checkbox"
                                                        tabIndex={-1}
                                                        key={key}
                                                    >
                                                        <Modules.TableCell>
                                                            {row.user.lastName}
                                                        </Modules.TableCell>
                                                        <Modules.TableCell>
                                                            {row.user.firstName}
                                                        </Modules.TableCell>
                                                        <Modules.TableCell>
                                                            {row.user.login}
                                                        </Modules.TableCell>
                                                        <Modules.TableCell>
                                                            {row.user.activated.toString()}
                                                        </Modules.TableCell>
                                                        {row.user.activated == true ? (
                                                            <Modules.TableCell>
                                                                <Modules.Tooltip title="Désactiver">
                                                                    <Modules.LockOpenIcon
                                                                        style={{ color: 'chocolate' }}
                                                                        onClick={() => {
                                                                            setDetails(row);
                                                                            setOpenDesactivateDialog(!openDesactivateDialog);
                                                                        }}
                                                                    />
                                                                </Modules.Tooltip>
                                                            </Modules.TableCell>
                                                        ) : (
                                                            <Modules.TableCell>
                                                                <Modules.Tooltip title="Activer">
                                                                    <Modules.LockIcon
                                                                        style={{ color: 'chocolate' }}
                                                                        onClick={() => {
                                                                            setDetails(row);
                                                                            setOpenActivateDialog(!openActivateDialog);
                                                                        }}
                                                                    />
                                                                </Modules.Tooltip>
                                                            </Modules.TableCell>
                                                        )}
                                                    </Modules.TableRow>
                                                );
                                            })}
                                    </Modules.TableBody>
                                </Modules.Table>
                            </Modules.TableContainer>
                            <Modules.ViewDialog
                                {...props}
                                title="Visualisation De L'Utilisateur"
                                operation="users"
                                users={usersService}
                                open={openAlert}
                                onClose={handleDialogClose}
                                details={details}
                            ></Modules.ViewDialog>
                            <Modules.ActivateDialog
                                {...props}
                                title={"Confirmation D'Activation De L'Utilisateur"}
                                message={
                                    "Vous êtes sur le point d'activer cet utilisateur. Voulez-vous vraiment continuer le processus d'activation ?"
                                }
                                operation="users"
                                users={usersService}
                                open={openActivateDialog}
                                details={details}
                                onClose={handleActivateDialogClose}
                            ></Modules.ActivateDialog>
                            <Modules.DesactivateDialog
                                {...props}
                                title={"Confirmation De Désactivation De L'Utilisateur"}
                                message={
                                    "Vous êtes sur le point de désactiver cet utilisateur. Voulez-vous vraiment continuer le processus de désactivation ?"
                                }
                                operation="users"
                                users={usersService}
                                open={openDesactivateDialog}
                                details={details}
                                onClose={handleDesactivateDialogClose}
                            ></Modules.DesactivateDialog>
                            <Modules.TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={usersData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Modules.Paper>
                    </Modules.Grid>
                    <Modules.Box pt={4}>
                        <Modules.Copyright />
                    </Modules.Box>
                </Modules.Container>
            </main>
        </div>
    );
}
