import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faMagnifyingGlass,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";
import "../App.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import img from "../assets/images/1.jpg";
import logo from "../assets/images/logo.png";
import Candidatelist from "../components/Career/Candidate/CandidateList";
import Vacancylist from "../components/Career/Vacancy/VacancyList";
import Addjovvacancy from "../components/Career/AddJob";

interface CommonLayoutProps {
  children: ReactNode;
}

const Sidenavbar: React.FC<CommonLayoutProps> = ({ children }) => {
  const [packageVisible, setPackageVisible] = useState(false);
  const [packageButtonColor, setPackageButtonColor] = useState("black");
  const [userListVisible, setUserListVisible] = useState(false);
  const [userButtonColor, setUserButtonColor] = useState("black");
  const [CareerListVisible, setCareerListVisible] = useState(true);
  const [careerButtonColor, setCareerButtonColor] = useState("black");
  const [navVisible, setNavVisible] = useState(true);

  const packageToggle = () => {
    setPackageVisible(!packageVisible);
    setPackageButtonColor(packageButtonColor ? "black" : "#20B2AA");
    console.log(userButtonColor);
  };

  const userToggle = () => {
    setUserListVisible(!userListVisible);
    setUserButtonColor(userListVisible ? "black" : "#20B2AA");
    console.log(userButtonColor);
  };

  const careerToggle = () => {
    setCareerListVisible(!CareerListVisible);
    setCareerButtonColor(CareerListVisible ? "#20B2AA" : "black");
  };

  const navication = () => {
    setNavVisible(!navVisible);
  };

  const Blink = () => {
    return <div className="notification-circle"></div>;
  };

  return (
    <div className="h-screen ">
      {/* logo,search */}
      <div className="w-full sticky top-0 flex border-b-[1px] border-gray-200 h-[60px] ">
        {/* logo */}
        {navVisible ? (
          <div className="menu-bar  bg-white  border-r-[1px] border-gray-200 pt-1 flex items-center min-w-[240px] px-[25px] ">
            <a href="" className="w-full">
              <img
                src={logo}
                alt="logo"
                className="  h-[29px] w-[131px]  lg:inline-block lg:justify-self-start logo-trans"
              />
            </a>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-[rgb(121,135,161)] flex justify-self-center text-xl"
              onClick={navication}
            />
          </div>
        ) : (
          <div>
            <div className="menu-bar  min-w-[70px] z-[1] border-r-[1px] bg-white border-gray-200 p-5 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faBars}
                className="text-[rgb(121,135,161)] text-lg "
                onClick={navication}
              />
            </div>
          </div>
        )}

        {/* search */}
        <div className="bg-white  w-full  flex items-center justify-between px-2 md:px-[25px]">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" hidden text-[rgb(121,135,161)] text-lg  md:inline-block"
            />
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none hidden text-sm  py-[12px] px-[15px]  md:inline-block  md:w-[400px]"
            />
          </div>

          <div className="flex items-center">
            <div className="w-[30px] ">
              <NotificationsNoneIcon className="text-[#232323]" /> <Blink />
            </div>
            <div className="w-[30px] mx-[5px]">
              <Avatar
                alt="Remy Sharp"
                src={img}
                style={{ height: "28px", width: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* sidebar,contents */}
      <div className="flex">
        {navVisible ? (
          <div className="menu-bar  fixed pt-[25px] pb-[50px] z-10 bg-white flex flex-col h-[92vh] border-r-[1px] border-gray-200 lg:relative lg:inline-block min-w-[240px]  ">
            {/* pack management */}
            <div className=" px-[25px] border-b-[1px] border-dashed border-gray-200">
              <button
                className="nav-button flex items-center py-[10px] justify-betweenc  w-full "
                style={{ color: packageButtonColor }}
                onClick={packageToggle}
              >
                <span className="flex  items-center w-full">
                  <span className="text-start">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="navbar-icon"
                    />
                  </span>
                  <div className="w-full flex justify-between pl-2 ">
                    <span className="navbar-list">PackageManagement</span>
                    <span className="text-[#6A6B6B]">
                      {packageVisible ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </span>
                  </div>
                </span>
              </button>
              {packageVisible && (
                <ul className="list-type">
                  <li className="nav-list">
                    <a href="/allpackagelist"> All Package List</a>
                  </li>
                  <li className="nav-list">
                    <a href="/addpackage">Add Package</a>
                  </li>
                </ul>
              )}
            </div>

            {/* user management */}
            <div className="px-[25px] border-b-[1px] border-dashed border-gray-200">
              <button
                className="flex items-center  py-[10px] w-full  nav-button"
                style={{ color: userButtonColor }}
                onClick={userToggle}
              >
                <span className="flex items-center w-full ">
                  <span className=" text-start">
                    <FontAwesomeIcon icon={faUser} className="navbar-icon" />
                  </span>
                  <div className="w-full flex justify-between pl-2">
                    <span className="navbar-list">User Management</span>
                    <span className="text-[#6A6B6B]">
                      {userListVisible ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </span>
                  </div>
                </span>
              </button>

              {userListVisible && (
                <ul className="list-type">
                  <li className="nav-list">All User Lists</li>
                  <li className="nav-list">Add User</li>
                </ul>
              )}
            </div>

            {/* candidate */}
            <div className=" px-[25px] border-b-[1px] border-dashed border-gray-200">
              <button
                className="nav-button flex items-center py-[10px] justify-betweenc  w-full "
                style={{ color: careerButtonColor }}
                onClick={careerToggle}
              >
                <span className="flex  items-center w-full">
                  <span className="text-start">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="navbar-icon"
                    />
                  </span>
                  <div className="w-full flex justify-between pl-2 ">
                    <span className="navbar-list">Career Management</span>
                    <span className="text-[#6A6B6B]">
                      {CareerListVisible ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </span>
                  </div>
                </span>
              </button>
              {CareerListVisible && (
                <ul className="list-type">
                  <li className="nav-list">
                    <a href="/"> All Candidate List</a>
                  </li>
                  <li className="nav-list">
                    <a href=" /vacancylist"> All Job vacancies</a>
                  </li>
                  <li className="nav-list">
                    <a href="/addvacancy">Add Job Vacancy</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {/* table or form content */}
        <div className="table-con shadow-inner flex flex-col bg-[#F9FAFB] shadow-gray-200 overflow-scroll w-full lg:h-[93vh]  md:justify-between ">
          <div className="p-[25px]"> <main>{children}</main></div>

          {/* copy right */}
          <div className=" w-full flex px-[25px] py-2 flex-col text-[#029e9d] text-[13px] items-center border-t-[1px] border-gray-200 md:flex-row md: justify-between">
            <span>
              Copyright <span>&copy;</span>2022{" "}
              <a
                href="https://htmldesigntemplates.com/html/travelin/index.html"
                target="_blank"
              >
                Travalin
              </a>
            </span>
            <span className="text-[#7987a1]">
              Powered By{" "}
              <span className="text-[#0d6efd]">
                <FavoriteBorderIcon />
              </span>{" "}
              Converse Data Solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
