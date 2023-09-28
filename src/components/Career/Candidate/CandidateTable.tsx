import { faDeleteLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import Candidatelists from "../../../Mock/Candidatelists";

interface table{
  entries:number,
  currentPage:number
}

const CandidateTable = (props:table) => {
  return (
    <div>
      <table className="w-full ">
        <tr className=" bg-white sticky top-0 ">
          <th className="">ID</th>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>DOB</th>
          <th>GENDER</th>
          <th>DEPRTMENT</th>
          <th>ACTION</th>
        </tr>

        {Candidatelists.slice((props.currentPage - 1) * props.entries, props.currentPage * props.entries).map((candidate) => (
          <tr className="">
            <td>{candidate.id}</td>
            <td ><img className='rounded-md h-[39px] w-[35px]' src={candidate.img} alt="user img" /></td>
            <td>{candidate.name}</td>
            <td>{candidate.email}</td>
            <td>{candidate.phone}</td>
            <td>{candidate.dob}</td>
            <td>{candidate.gender}</td>
            <td>{candidate.openings}</td>
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
