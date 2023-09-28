import * as React from "react";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Link } from "react-router-dom";
import Vacancytable from "./VacancyTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Vacancylist = () => {
;  const [entries, setEntries] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);

 

  return (
    <div className="">
      {/* title,add candidate button */}

      <div className="w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between">
        <div className="text-[#029e9d] text-sm">
          <a href="#" className="anchor-tag">
            Dashboard
          </a>{" "}
          / <a href="/">Candidate</a> /{" "}
          <a href="Vacancylist" className="text-[#7987a1]">
            {" "}
            Vacancy List
          </a>
        </div>

        <div className="">
          <button className="Export-button mt-3 md:mt-0">
            <Link to="/addvacancy">
              <span className="pr-[10px]">
                <FontAwesomeIcon icon={faPlus} />
              </span>{" "}
              Add A Job
            </Link>
          </button>
        </div>
      </div>

      {/* input fields */}

      <div className="shadows  px-[30px] py-[24px] mb-4   lg:items-center lg:justify-end bg-white">
        <div className="flex flex-col  gap-y-7 mt-3 xl:flex-row md:justify-between gap-x-7 lg:mt-0 w-full">
          <input
            type="text"
            placeholder="Search by job Vacancy"
            className="border-[1px] w-[full] border-gray-200  rounded-lg outline-none px-[10px] h-12 md xl:w-[60%]"
          />
<div className="flex flex-col gap-y-6 md:flex-row gap-x-6 justify-stretch xl:w-[40%]" >
          <div className="border-[1px] w-full border-gray-200 rounded-lg px-[10px] h-12 ">
            <select
              name="catogory"
              id="catogory"
              className="drop-down outline-none bg-white text-[#7987AD] w-full h-11 flex items-cente"
            >
              <option value="Show Entries">Department</option>
              <option value="10" className="drop-option">
                Department 1
              </option>
              <option value="20" className="drop-option">
                Department 2
              </option>
              <option value="30" className="drop-option">
                Department 3
              </option>
            </select>
          </div>

          <div className="border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 ">
            <select
              name="catogory"
              id="catogory"
              className=" outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
            >
              <option value="Show Entries">Location</option>
              <option value="10" className="drop-option">
                Location 1
              </option>
              <option value="20" className="drop-option">
                Location 2
              </option>
              <option value="30" className="drop-option">
                Location 3
              </option>
            </select>
          </div>

          <div className="border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 ">
            <select
              name="catogory"
              id="catogory"
              className=" outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
              value={entries}
              onChange={(e) => setEntries(parseInt(e.target.value))}
            >
              <option value="Show Entries">Show Entries</option>
              <option value="10" className="drop-option">
                10
              </option>
              <option value="20" className="drop-option">
                20
              </option>
              <option value="30" className="drop-option">
                30
              </option>
            </select>
          </div>
          </div>
        </div>
      </div>

      {/* candidate table */}
      <div className=" shadows max-h-[496px] overflow-scroll xl:overflow-x-hidden p-[24px] pt-0 bg-white mb-[15px]">
        <Vacancytable entries={entries} currentPage={currentPage} />
      </div>

      {/* pagenation */}
      <div className="w-full">
        <div className="my-8 flex  justify-center lg:justify-start  flex-row ">
          <button
            className="bg-white text-[hsl(180,82%,35%)] hover:text-white  hover:bg-[hsl(180,82%,35%)] py-2  px-3 rounded-lg mr-1 border-[1px] border-gray-200  "
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          >
            Previous
          </button>

          <button
            className={`${
              currentPage === 1
                ? "active-page"
                : "bg-white text-[hsl(180,82%,35%)]"
            } py-2 border-[1px] border-gray-200 px-4 rounded-lg mr-1`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>

          <button
            className={`${
              currentPage === 2
                ? "active-page"
                : "bg-white text-[hsl(180,82%,35%)]"
            } py-2 border-[1px] border-gray-200 px-4 rounded-lg mr-1`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>

          <button
            className={`${
              currentPage === 3
                ? "active-page"
                : "bg-white text-[hsl(180,82%,35%)]"
            } py-2 border-[1px] border-gray-200 px-4 rounded-lg mr-1`}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>

          <button
            className="bg-white text-[hsl(180,82%,35%)] hover:bg-[hsl(180,82%,35%)] hover:text-white py-2  border-[1px] border-gray-200 px-3 rounded-lg mr-1 "
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vacancylist;
