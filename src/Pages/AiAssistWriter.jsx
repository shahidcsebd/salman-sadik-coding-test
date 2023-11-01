import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RiRouteLine } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import Label from "../components/Label";
import Option from "../components/Option";
import { useNavigate } from "react-router-dom";
import InputRadio from "../components/InputRadio";

const AiAssistWriter = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [realTimeDataWarning, setRealTimeDataWarning] = useState(false);
  const [aiGeneratedTitleChecking, setAiGeneratedTitleChecking] =
    useState(true);
  const submit = (data) => {
    console.log(data);
    if (data) {
      navigate("/outline");
    }
  };
  useEffect(() => {
    const subscription = watch(({ RealTimeData, aiGeneratedTitle }) => {
      RealTimeData
        ? setRealTimeDataWarning(true)
        : setRealTimeDataWarning(false);
      aiGeneratedTitle
        ? setAiGeneratedTitleChecking(false)
        : setAiGeneratedTitleChecking(true);
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <div className="max-w-full md:py-10 px-6">
      <form
        className="shadow-lg w-full mx-auto p-10 rounded-md flex flex-wrap gap-3 max-w-3xl md:justify-between justify-center bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col gap-5">
          <h3 className="flex text-3xl font-thin items-center gap-3">
            {" "}
            <RiRouteLine className="bg-blue-100 p-1 rounded text-blue-600" /> AI
            Assisted Writer
          </h3>
          <p className="text-gray-500 font-extralight">
            Provide your keyword and get your outline. Modify and edit your
            outline and get article generated with AI depending on that outline
            in an interactive editor.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full mt-6">
          <input
            type="checkbox"
            name="RealTimeData"
            id="RealTimeData"
            className="toggle toggle-primary toggle-md"
            {...register("RealTimeData")}
          />
          <label
            className="font-normal text-lg hover:cursor-pointer"
            htmlFor="RealTimeData"
          >
            Real Time Data
          </label>
          <div className="bg-white text-xs  delay-300 animate-bounce  text-green-500 border-green-500 border font-semibold z-auto px-1 shadow-sm py-[1px] rounded-sm">
            New
          </div>
        </div>
        {realTimeDataWarning && (
          <div className="flex items-center gap-3 w-full">
            <div className=" w-[16px] h-[10px] rounded-full bg-red-600 relative animate-ping"></div>

            <p className="text-red-600 text-md font-medium">
              Real-time data is highly effective for articles necessitating the
              latest information. For optimal quality, consider deactivating it
              when not necessary.
            </p>
          </div>
        )}
        <div className="flex flex-col gap-3 mt-6 w-full">
          <Label> Your Target Keyword</Label>
          <p className="text-gray-500 font-extralight flex gap-2 items-center">
            <AiFillInfoCircle /> Write down your main keyword for the article
          </p>
          <input
            placeholder="Your Main Keyword"
            type="text"
            name="mainKeyword"
            className="w-full px-4 py-4 text-gray-700 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("mainKeyword", {
              required: "Main Keyword is required",
            })}
          />
          {errors.mainKeyword?.message && (
            <small className="text-orange-700">
              {errors.mainKeyword.message}
            </small>
          )}
        </div>
        <div className="flex items-center gap-3 w-full mt-6">
          <input
            type="checkbox"
            name="aiGeneratedTitle"
            className="toggle toggle-primary toggle-md"
            {...register("aiGeneratedTitle")}
            id="aiGeneratedTitle"
          />
          <label
            className="font-normal text-lg hover:cursor-pointer"
            htmlFor="aiGeneratedTitle"
          >
            Ai Generated Title
          </label>
        </div>
        {aiGeneratedTitleChecking && (
          <div className="flex flex-col gap-3 w-full">
            <Label>Input your Title</Label>
            <input
              type="text"
              name="mainTitle"
              className="w-full px-4 py-4 text-gray-700 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              {...register("mainTitle")}
              placeholder="Your Main Title"
            />
          </div>
        )}
        <div className="flex flex-col gap-3 mt-6 w-full">
          <Label>Choose Type of Info Article</Label>
          <select
            name="type"
            id="type"
            {...register("type")}
            className="w-full px-4 py-4 text-gray-700 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          >
            <Option value="long">Long Post Form</Option>
            <Option value="short">Short Post Form</Option>
          </select>
        </div>
        <div className="flex flex-col gap-3 mt-2 w-full">
          <Label>Number of Sub-headings</Label>
          <select
            name="subHeadingNumber"
            id="subHeadingNumber"
            {...register("subHeadingNumber")}
            className="w-full px-4 py-4 text-gray-700 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          >
            <Option value="random">Random (Ai will creatively think)</Option>
            {Array.from({ length: 18 }, (_, index) => index + 3).map((v) => (
              <Option value={v} key={v}>
                {v}
              </Option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-3 mt-2 w-full">
          <Label>Number of FAQ&apos;s</Label>
          <select
            name="numberOfFAQ"
            id="numberOfFAQ"
            {...register("numberOfFAQ")}
            className="w-full px-4 py-4 text-gray-700 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          >
            <Option value="random">Random (Ai will creatively think)</Option>
            {Array.from({ length: 8 }, (_, index) => index + 3).map((v) => (
              <Option value={v} key={v}>
                {v}
              </Option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3 w-full mt-2">
          <input
            type="checkbox"
            name="includeFAQ"
            className="toggle toggle-primary toggle-md"
            {...register("includeFAQ")}
            id="includeFAQ"
            checked
          />
          <label
            className="font-normal text-lg hover:cursor-pointer"
            htmlFor="includeFAQ"
          >
            Include FAQ Schema
          </label>
        </div>
        <div className="flex flex-col gap-3 mt-2 w-full">
          <Label>Number of FAQ&apos;s</Label>
          <InputRadio id="noImage" register={register} isChecked={true}>
            Don&apos;t Use Image
          </InputRadio>
          <InputRadio id="pixabay" register={register} isChecked={false}>
            Use Pixabay Image
          </InputRadio>
          <InputRadio id="googleImage" register={register} isChecked={false}>
            Use Google Image
          </InputRadio>
        </div>
        <div className="flex w-full justify-between items-center mt-6">
          <button className="btn btn-lg w-full btn-primary normal-case text-white text-lg">
            Create Article Outline
          </button>
        </div>
      </form>
    </div>
  );
};

export default AiAssistWriter;
