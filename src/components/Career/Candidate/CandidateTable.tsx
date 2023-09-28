import { faDeleteLeft, faLink, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import Candidatelists from "../../../Mock/Candidatelists";
import user from "../../../assets/images/1.jpg"


interface table{
  entries:number,
  currentPage:number,
  
}

const CandidateTable = (props:table) => {
  return (
    <div>
      <table className="w-full ">
        <tr className=" bg-white sticky top-0">
          <th className="">ID</th>
          <th>IMG</th>
          <th>DOB</th>
          <th>ADDRESS</th>
          <th>lINKED IN URL</th>
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

        {Candidatelists.slice((props.currentPage - 1) * props.entries, props.currentPage * props.entries).map((candidate) => (
          <tr className="">
            <td>{candidate.id}</td>
            <td ><img className='rounded-md h-[32px] w-[35px]' src={user} alt="user img" /></td>
            <td>{candidate.dob}</td>
            <td>{candidate.address}</td>
            <td><a href={candidate.linkedinurl} target="_blank"><FontAwesomeIcon icon={faLink} className="tb-icon"/></a></td>
            <td>{candidate.maritalstatus}</td>
            <td>{candidate.currentjob}</td>
            <td>{candidate.currentcompany}</td> 
            <td>{candidate.jobtitle}</td>
            <td>{candidate.salary}</td>
            <td>{candidate.education}</td>
            <td><FileOpenOutlinedIcon className=" tb-icon action-buttons"/></td>
            <td><FileOpenOutlinedIcon className=" tb-icon action-buttons"/></td>
            <td><FileOpenOutlinedIcon className=" tb-icon action-buttons"/></td>
            <td>
              <span className=" action-buttons">
                <FontAwesomeIcon icon={faPenToSquare} className="tb-icon" />
                <BackspaceOutlinedIcon className="tb-icon" />
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CandidateTable;
