import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Vacancylists from "../../../Mock/Vacancylists";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { log } from "console";

interface addJob {
  id: number;
  openings: string;
  department: string;
  location: string;
  publishDate: string;
  mainDuties: string;
  experience: string;
}

const Addjobvacancy = () => {
  const validationSchema = Yup.object().shape({
    Openings: Yup.string().required("Openings is required"),
    Department: Yup.string().required("Department is required"),
    location: Yup.string().required("location is required"),
    PublishedDate: Yup.string().required("PublishedDate is required"),
    MainDuties: Yup.string().required("MainDuties is required"),
    Experience: Yup.string().required("Experience is required"),
  });

  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState<addJob>({
    id: 0,
    openings: "",
    department: "",
    location: "",
    publishDate: "",
    mainDuties: "",
    experience: "",
  });

  const [formData, setFormData] = useState<addJob>({
    id: 0,
    openings: "",
    department: "",
    location: "",
    publishDate: "",
    mainDuties: "",
    experience: "",
  });

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  const page = useLocation();
  const idSplit = page.search.split("=");
  const findId = Number(idSplit[1]);
  useEffect(() => {
    if (findId) {
      setEditMode(!editMode);
    }
  }, [findId]);

  useEffect(() => {
    let editObj = Vacancylists.forEach((a) => {
      if (a.id == findId) {
        setEditData(a);
      }
    });
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleChangeMainDuties = (
    content: any,
    delta: any,
    source: any,
    editor: any
  ) => {
    setFormData({ ...formData, mainDuties: editor.getHTML() });
  };
  const handleChangeExperience = (
    content: any,
    delta: any,
    source: any,
    editor: any
  ) => {
    setFormData({ ...formData, experience: editor.getHTML() });
  };

  const handleOnChange = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    let publishDateVal = new Date().toLocaleDateString();

    setFormData({ ...formData, [name]: value, publishDate: publishDateVal });

  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    Vacancylists.push(formData);
  };

  return (
    <div className="w-full">
      {/* Button */}
      <div className="w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between">
        <div className="text-[#029e9d] text-sm">
          <Link to="#" className="anchor-tag">
            Dashboard
          </Link>{" "}
          /{" "}
          <span className="text-[#7987a1]">
            {editMode ? "Update A Vacancy" : "Add A Vacancy"}{" "}
          </span>
        </div>

        <div className="">
          <button className="Export-button">
            <Link to="/vacancylist">
              <span>
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              <span className="pl-[10px]">Back to List</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Add candidate form */}
      <div className="py-4 add-vacancy-form px-[3.5rem]">
        <div className="mt-5">
          <span className="text-[1.25rem] font-bold">
            {editMode ? "Update A Vacancy" : "Add A Vacancy"}{" "}
          </span>
        </div>

        <form onSubmit={submitHandler}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-x-10 gap-y-10 mt-10">
            <div className="flex flex-col w-full gap-2">
              <input
                type="text"
                id="openings"
                placeholder="Openings"
                required
                name="openings"
                // {...register("Openings")}
                className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
                onChange={handleOnChange}
              />
              <div className="invalid-feedback text-red-700 text-[12px]">
                <span className="absolute z-10">
                  {errors.Openings?.message}
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 ">
                <select
                  name="department"
                  id="department"
                  // value={editData.department ?? editData.department}
                  required
                  className=" outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
                  onChange={handleOnChange}
                >
                  <option value="">Select Department</option>
                  <option value="Department 1" className="drop-option">
                    Department 1
                  </option>
                  <option value="Department 2" className="drop-option">
                    Department 2
                  </option>
                  <option value="Department 3" className="drop-option">
                    Department 3
                  </option>
                </select>
              </div>
              <div className="invalid-feedback  text-red-700 text-[12px]">
                <span className="absolute z-10">
                  {errors.Department?.message}
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 ">
                <select
                  id="location"
                  required
                  name="location"
                  // {...register("location")}
                  // value={formData.location || editData.location}
                  className=" outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
                  onChange={handleOnChange}
                >
                  <option value="">Select location</option>
                  <option value="location 1" className="drop-option">
                    location 1
                  </option>
                  <option value="location 2" className="drop-option">
                    location 2
                  </option>
                  <option value="Location 3" className="drop-option">
                    location 3
                  </option>
                </select>
              </div>
              <div className="invalid-feedback  text-red-700 text-[12px]">
                <span className="absolute z-10">
                  {errors.location?.message}
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2"></div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-7">
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="MainDuties">Main Duties</label>
              <div className="p-[1px] min-h-[340px]">
                <ReactQuill
                  className="h-[200px]"
                  modules={module}
                  theme="snow"
                  placeholder="Enter main duties"
                  onChange={handleChangeMainDuties}
                  // value={formData.mainDuties || editData.mainDuties}
                  id="mainDuties"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="Experience">Experience</label>
              <div className="p-[1px] min-h-[340px]">
                <ReactQuill
                  className="h-[200px]"
                  modules={module}
                  theme="snow"
                  placeholder="Enter main experience"
                  onChange={handleChangeExperience}
                  // value={formData.experience || editData.experience}
                  id="experience"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-9">
            <button type="submit" className="Export-button">
              <span className="text-[15px]">
                {editMode ? "Updete" : "Submit"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addjobvacancy;