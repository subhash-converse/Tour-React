import { faLink, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";

interface table {
  entries: number;
  currentPage: number;
  datas: any[];
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const CandidateTable: React.FC<table> = (props) => {
  const [coverLetter, setCoverLetter] = React.useState<number | null>(null);
  const [coverLetterValue, setCoverLetterValue] = React.useState("");

  const [cv, setCv] = React.useState<boolean>(false);
  const [cvValue, setCvValue] = React.useState("");

  const [otherFiles, setOtherFiles] = React.useState<boolean>(false);
  const [otherFilesValue, setOtherFilesValue] = React.useState("");

  const [deleteRow, setDeleteRow] = React.useState<number | null>(null);

  const coverLetterClickOpen = (row: number, val: string) => {
    setCoverLetter(row);
    setCoverLetterValue(val);
  };

  const coverLetterClickClose = () => {
    setCoverLetter(null);
  };

  const cvClickOpen = (val: string) => {
    setCv(true);
    setCvValue(val);
  };

  const cvClickClose = () => {
    setCv(false);
  };

  const otherFilesClickOpen = (val: string) => {
    setOtherFiles(true);
    setOtherFilesValue(val);
  };

  const otherFilesClickClose = () => {
    setOtherFiles(false);
  };

  const deleteClickOpen = (row: number) => {
    setDeleteRow(row);
  };

  const deleteClickClose = () => {
    setDeleteRow(null);
  };

  const deleteConfirm = (row: number) => {
    console.log(`Deleting row with ID: ${row}`);
    deleteClickClose();
  };

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="bg-white sticky top-0">
            <th>ID</th>
            <th>IMG</th>
            <th>DOB</th>
            <th>ADDRESS</th>
            <th>LINKED IN URL</th>
            <th>MARITAL STATUS</th>
            <th>CURRENT JOB</th>
            <th>CURRENT COMPANY</th>
            <th>JOB TITLE</th>
            <th>SALARY</th>
            <th>EDUCATION</th>
            <th>COVER LETTER</th>
            <th>CV</th>
            <th>OTHER FILES</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.datas
            .slice((props.currentPage - 1) * props.entries, props.currentPage * props.entries)
            .map((candidate: any, i: number) => (
              <tr className="" key={i}>
                <td>{candidate.id}</td>
                <td>
                  <img
                    className="rounded-md h-[32px] w-[35px]"
                    src={candidate.img}
                    alt="user img"
                  />
                </td>
                <td>{candidate.dob}</td>
                <td>{candidate.address}</td>
                <td>
                  <a href={candidate.linkedinurl} target="_blank">
                    <FontAwesomeIcon icon={faLink} className="tb-icon" />
                  </a>
                </td>
                <td>{candidate.maritalstatus}</td>
                <td>{candidate.currentjob}</td>
                <td>{candidate.currentcompany}</td>
                <td>{candidate.jobtitle}</td>
                <td>{candidate.salary}</td>
                <td>{candidate.education}</td>
                <td>
                  <div className="tb-icon">
                    <FileOpenOutlinedIcon
                      className="tb-icon action-buttons"
                      onClick={() => {
                        coverLetterClickOpen(candidate.id, candidate.coverLetter);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="tb-icon">
                    <FileOpenOutlinedIcon
                      className="tb-icon action-buttons"
                      onClick={() => {
                        cvClickOpen(candidate.cv);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="tb-icon">
                    <FileOpenOutlinedIcon
                      className="tb-icon action-buttons"
                      onClick={() => {
                        otherFilesClickOpen(candidate.otherFiles);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <span className="action-buttons">
                    <a href="/addpackage"><FontAwesomeIcon icon={faPenToSquare} className="tb-icon" /></a>
                    
                    <BackspaceOutlinedIcon
                      className="tb-icon"
                      onClick={() => {
                        deleteClickOpen(candidate.id);
                      }}
                    />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* cover letter dialog */}
      <Dialog
        open={coverLetter !== null}
        onClose={coverLetterClickClose}
        PaperComponent={(props) => (
          <PaperComponent
            {...props}
            style={{ width: '400px', height: '300px' }} // Adjust the width and height as needed
          />
        )}
        aria-labelledby="draggable-dialog-title"
      >
        <img src="" alt="" />
        <DialogContent>
          <DialogContentText>{coverLetterValue}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={coverLetterClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* cv dialog */}
      <Dialog
        open={cv}
        onClose={cvClickClose}
        PaperComponent={(props) => (
          <PaperComponent
            {...props}
            style={{ width: "400px", height: "300px" }}
          />
        )}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          CV
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{cvValue}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cvClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* other files dialodue */}
      <Dialog
        open={otherFiles}
        onClose={otherFilesClickClose}
        PaperComponent={(props) => (
          <PaperComponent
            {...props}
            style={{ width: '400px', height: '300px' }} // Adjust the width and height as needed
          />
        )}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        otherFiles
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {otherFilesValue}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={otherFilesClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {/* delete Dialog */}
      <Dialog
        open={deleteRow !== null}
        onClose={deleteClickClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to delete this row?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={() => deleteConfirm(deleteRow!)}>
            Confirm
          </Button>
          <Button  onClick={deleteClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CandidateTable;
