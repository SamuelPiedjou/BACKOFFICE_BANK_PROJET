/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 28/12/2021 - 13:06:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/12/2021
    * - Author          : HP
    * - Modification    : 
**/
import React from "react";
import { useHistory } from "react-router";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

import erreur404 from '../../assets/lotties/erreur404.json';
import help from '../../assets/lotties/help.json';

import SnackbarComponent from "../Snackbar/Snackbar";
import DialogComponent from "../Dialog/Dialog";
import CheckViewDialog from "../Dialog/CheckViewDialog";
import ViewDialog from "../Dialog/ViewDialog";
import DeleteDialog from "../Dialog/DeleteDialog";
import DesactivateDialog from "../Dialog/DesactivateDialog";
import ActivateDialog from "../Dialog/ActivateDialog";
import ErrorDialog from "../Dialog/ErrorDialog";
import PublishDialog from "../Dialog/PublishDialog";
import CheckDialog from "../Dialog/CheckDialog";
import UnpublishDialog from "../Dialog/UnpublishDialog";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";

import background from "../../assets/img/background.PNG";
import logo from "../../assets/img/logo.png";
// import Lottie from 'react-lottie';

import Copyright from "../../components/Footer/Copyright";
import Loader from "../../components/Loader/Loader";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Link from "@material-ui/core/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleIcon from "@material-ui/icons/People";
import SearchBar from "material-ui-search-bar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import DialogTitle from "@material-ui/core/DialogTitle";
import SaveIcon from "@material-ui/icons/Save";
import Orders from "../../pages/Dashboard/Orders";
import Users from "../../pages/Dashboard/Users";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LockOpen from "@material-ui/icons/LockOpen";
import Lock from "@material-ui/icons/Lock";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Avatar from "@material-ui/core/Avatar";
import RefreshIcon from "@material-ui/icons/Refresh";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import SearchIcon from "@material-ui/icons/Search";


import Error from "../../pages/Error/Error";
import Searchbar from "../../components/Searchbar/Searchbar";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CircularProgress from '@material-ui/core/CircularProgress';
import Circular from "../Circular/Circular";


import { MainListItems } from "../../components/Aside/ListItems";
import Tooltip from "@material-ui/core/Tooltip";
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

export {
  React,
  useHistory,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  makeStyles,
  Alert,
  Snackbar,
  background,
  logo,
  Copyright,
  Loader,
  MainListItems,
  Orders,
  NotificationsIcon,
  ChevronLeftIcon,
  MenuIcon,
  Container,
  Badge,
  erreur404,
  help,
  Divider,
  IconButton,
  List,
  Toolbar,
  AppBar,
  Drawer,
  clsx,
  PeopleIcon,
  SearchBar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SaveIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Menu,
  MenuItem,
  ImportExportIcon,
  AddCircleIcon,
  Link,
  FormControl,
  InputLabel,
  Select,
  StepLabel,
  Step,
  Stepper,
  Error,
  ErrorIcon,
  SnackbarComponent,
  DialogComponent,
  DeleteIcon,
  EditIcon,
  VisibilityIcon,
  LockIcon,
  LockOpenIcon,
  Searchbar,
  Avatar,
  Tooltip,
  ViewDialog,
  DeleteDialog,
  ActivateDialog,
  DesactivateDialog,
  RefreshIcon,
  jsPDF,
  html2canvas,
  SearchIcon,
  PresentToAllIcon,
  CancelPresentationIcon,
  UnpublishDialog,
  PublishDialog,
  ErrorDialog,
  ImportContactsIcon,
  PermDataSettingIcon,
  EqualizerIcon,
  EmojiPeopleIcon,
  CheckDialog,
  CheckViewDialog,
  CircularProgress,
  Circular,
  Users,
};
