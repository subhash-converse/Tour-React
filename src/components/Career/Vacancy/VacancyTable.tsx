import { faDeleteLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import Vacancylists from "../../../Mock/Vacancylists";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from "react-draggable";



interface table{
  entries:number,
  currentPage:number
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Vacancytable = (props:table) => {
  const [mainDuties, setMainDuties] = React.useState(false);
  const [experience, setExperience] = React.useState(false);
  const [deleteiRow, setDeleteRow] = React.useState(false);

  const MainDutiesClickOpen = () => {
    setMainDuties(true);
  };

  const MainDutiesClickClose = () => {
    setMainDuties(false);
  };

  const ExperienceClickOpen = () => {
    setExperience(true);
  };

  const ExperienceClickClose = () => {
    setExperience(false);
  };

  const DeleteClickOpen = () => {
    setDeleteRow(true);
  };

  const DeleteClickClose = () => {
    setDeleteRow(false);
  };

  return (
    <div className="">
      <table className="w-full">
        <tr className=" bg-white sticky top-0">
          <th className=""> ID</th>
          <th>OPENINGS</th>
          <th>DEPARTMENT</th>
          <th>PUBLISH DATE</th>
          <th>LOCATION</th>
          <th>MAIN DUTIES</th>
          <th>EXPERIENCE</th>
          <th>ACTION</th>
        </tr>

        {Vacancylists.slice((props.currentPage - 1) * props.entries, props.currentPage * props.entries).map((Vacancy) => (
          <tr>
            <td>{Vacancy.id}</td>
            <td>{Vacancy.openings}</td>
            <td>{Vacancy.department}</td>
            <td>{Vacancy.publishDate}</td>
            <td>{Vacancy.location}</td>
            <td>
              <div className=" tb-icon">
                <FileOpenOutlinedIcon className=" tb-icon action-buttons" onClick={MainDutiesClickOpen} />
                <Dialog
        open={mainDuties}
        onClose={MainDutiesClickClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Main Duties
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={MainDutiesClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
                
                <span className=" tb-icon">
                  {/* {Vacancy.mainDuties} */}
                  </span>
              </div>
            </td>
            <td>
              <div className=" tb-icon">
                <FileOpenOutlinedIcon className=" tb-icon action-buttons"  onClick={ExperienceClickOpen} />
                <Dialog
        open={experience}
        onClose={ExperienceClickClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
         Experience
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={ExperienceClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
              </div>
            </td>
            <td>
              <span className="action-buttons">
                <FontAwesomeIcon icon={faPenToSquare} className="tb-icon" />
                <BackspaceOutlinedIcon className="tb-icon" onClick={DeleteClickOpen} />
                <Dialog
        open={deleteiRow}
        onClose={DeleteClickClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
         Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={DeleteClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Vacancytable;
