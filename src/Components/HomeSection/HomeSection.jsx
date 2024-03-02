import React from "react";
import { useFormik } from "formik";
import { Avatar, Button } from "@mui/material";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import TweetCard from "./TweetCard";

const validationschema = Yup.object().shape({
  content: Yup.string().required("Text is required"),
});

const HomeSection = () => {
  const [UploadingImage, setUploadingImage] = React.useState(false);
  const [SelectedImage, setSelectedImage] = React.useState("");
  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };
  const handleSubmit = (values) => {
    console.log("values ", values);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationschema,
  });
  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://cdn-icons-png.freepik.com/256/1144/1144760.png"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening?"
                  className={`border-none outline-none text-xl bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodOutlinedIcon className="text-[#1d9bf0]" />
                  <TagFacesOutlinedIcon className="text-[#1d9bf0]" />
                </div>
                <Button
                  sx={{
                    width: "20%",
                    borderRadius: "10px",
                    paddingY: "8px",
                    paddingX: "20px",
                    bgcolor: "#1e88e5",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Post
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        {[1,1,1,1,1].map((item)=><TweetCard/>)}
      </section>
    </div>
  );
};

export default HomeSection;
