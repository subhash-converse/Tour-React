import {
  faArrowLeft,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import {
  EditorState,
  ContentState,
  convertToRaw,
  Modifier,
  getDefaultKeyBinding,
} from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Addjobvacancy = () => {
  const validationSchema = Yup.object().shape({
    Openings: Yup.string().required("Openings is required"),
    Department: Yup.string().required("Department is required"),
    Location: Yup.string().required("Location is required"),
    PublishedDate: Yup.string().required("PublishedDate is required"),
    MainDuties: Yup.string().required("MainDuties is required"),
    Experience: Yup.string().required("Experience is required"),
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    // Display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  };

  return (
    <div className="w-full">
      {/* Button */}
      <div className="w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between">
        <div className="text-[#029e9d] text-sm">
          <a href="#" className="anchor-tag">
            Dashboard
          </a>{" "}
          / <span className="text-[#7987a1]">Add A Vacancy</span>
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
          <span className="text-[1.25rem] font-bold">Add A Job</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-x-10 gap-y-10 mt-10">
            <div className="flex flex-col w-full gap-2">
              <input
                type="text"
                id="Openings"
                placeholder="Openings"
                {...register("Openings")}
                className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
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
                  // name="Department"
                  id="Department"
                  {...register("Department")}
                  className=" outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
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
                  // name="Location"
                  id="Location"
                  {...register("Location")}
                  className=" outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
                >
                  <option value="">Select Location</option>
                  <option value="Location 1" className="drop-option">
                    Location 1
                  </option>
                  <option value="Location 2" className="drop-option">
                    Location 2
                  </option>
                  <option value="Location 3" className="drop-option">
                    Location 3
                  </option>
                </select>
              </div>
              <div className="invalid-feedback  text-red-700 text-[12px]">
                <span className="absolute z-10">
                  {errors.Location?.message}
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2"></div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-7">
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="MainDuties">Main Duties</label>
              <div className="border-[1px] p-[1px] min-h-[340px]">
                <Editor
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={onEditorStateChange}
                  mention={{
                    separator: " ",
                    trigger: "@",
                    suggestions: [
                      { text: "APPLE", value: "apple", url: "apple" },
                      { text: "BANANA", value: "banana", url: "banana" },
                      { text: "CHERRY", value: "cherry", url: "cherry" },
                      { text: "DURIAN", value: "durian", url: "durian" },
                      { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                      { text: "FIG", value: "fig", url: "fig" },
                      {
                        text: "GRAPEFRUIT",
                        value: "grapefruit",
                        url: "grapefruit",
                      },
                      { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
                    ],
                  }}
                  hashtag={{}}
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="Experience">Experience</label>
              <div className="border-[1px] p-[1px] min-h-[340px]">
                <Editor
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={onEditorStateChange}
                  mention={{
                    separator: " ",
                    trigger: "@",
                    suggestions: [
                      { text: "APPLE", value: "apple", url: "apple" },
                      { text: "BANANA", value: "banana", url: "banana" },
                      { text: "CHERRY", value: "cherry", url: "cherry" },
                      { text: "DURIAN", value: "durian", url: "durian" },
                      { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                      { text: "FIG", value: "fig", url: "fig" },
                      {
                        text: "GRAPEFRUIT",
                        value: "grapefruit",
                        url: "grapefruit",
                      },
                      { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
                    ],
                  }}
                  hashtag={{}}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-9">
            <button type="submit" className="Export-button">
              <span className="text-[15px]">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addjobvacancy;
