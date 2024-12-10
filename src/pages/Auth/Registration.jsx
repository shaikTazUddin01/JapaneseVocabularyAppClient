import { useState } from "react";

import login1 from "../../assets/login1.webp";
import loginImage from "../../assets/japan.webp";
import JPForm from "../../components/Form/JPForm";

import JPInput from "../../components/Form/JPInput";
import { useSignupApiMutation } from "../../redux/Features/Auth/aurhApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const nevigate=useNavigate()
  // create user
  const [createUser] = useSignupApiMutation();
  

  // console.log(imagePreview);
  // handle login
  const handleSignUp = async (fieldsValue) => {
    const toastId=toast.loading("Loading..")
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(fieldsValue));
      formData.append("image", imageFile);

      const res = await createUser(formData);
      console.log(res?.error?.data?.message);
      if (res?.data) {
        toast.success("registration success",{id:toastId,duration:3000})
        nevigate('/login')
      }else{
        toast.error(res?.error?.data?.message,{id:toastId,duration:3000})
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageSubmit = (e) => {
    const file = e.target.files[0];

    setImageFile(file);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className=" min-h-screen w-full lg:p-20 bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${login1})` }}
    >
      <div className="bg-white rounded-2xl h-full  grid  grid-cols-1 lg:grid-cols-2 shadow items-center mx-auto">
        <div>
          <img
            alt="sign image"
            className="rounded-2xl hidden lg:flex object-cover w-full h-full"
            src={loginImage}
          />
        </div>
        <div className="text-center mx-auto w-full lg:w-[90%] p-10 md:min-w-[550px] lg:min-w-[300px]">
          <div className="space-y-1 mb-2">
            <h1 className="text-sky-600 text-3xl lg:text-5xl font-bold">
              Wellcome
            </h1>
            <p>Registration with your Information</p>
          </div>
          <JPForm onSubmit={handleSignUp}>
            <div className="text-left space-y-2">
              {/* <JPInput required={true} name="name" type="text" label="Name" /> */}
              <JPInput
                label="Name"
                name="name"
                required={true}
                type="text"
                variant="bordered"
              />
              <JPInput
                label="Email"
                name="email"
                required={true}
                type="email"
                variant="bordered"
              />

              <JPInput
                label="Password"
                name="password"
                required={true}
                type="password"
                variant="bordered"
              />

              <div className="w-full flex">
                {/* <p>Select</p> */}
                <label
                  className="border-2 w-full border-[#e6e6e6] text-left p-3 text-[15px] text-default-500 font-normal rounded-xl"
                  htmlFor="image"
                >
                  {imageFile ? (
                    imageFile.name
                  ) : (
                    <span className="text-[#A3A9B5]">Select Profile Image</span>
                  )}
                </label>
              </div>
              <input
                className="hidden"
                id="image"
                type="file"
                onChange={(e) => handleImageSubmit(e)}
              />
              <div>
                {imagePreview && (
                  <div>
                    <img
                      alt="image"
                      className="rounded-xl object-cover size-[100px]"
                      src={imagePreview}
                    />
                  </div>
                )}
              </div>
              {/* { */}
              {/* // isLoading?
                // <Button isLoading className="w-full" color="primary" />
                // : */}
              <button
                className="w-full border bg-sky-600 rounded-xl py-[6px] text-white font-semibold hover:bg-sky-700
              "
                type="submit"
              >
                Registration
              </button>
              {/* } */}
            </div>
          </JPForm>
          <p>
            I have an accout{" "}
            <a
              className="text-blue-800 mt-1 hover:text-blue-700"
              href={"/login"}
            >
              LogIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
