
import { Link } from "react-router-dom";
import loginImage from "../../assets/login1.webp"
import login1 from "../../assets/japan.webp"
import JPForm from "../../components/Form/JPForm";
import JPInput from "../../components/Form/JPInput";



const Login = () => {

  const handleLogin=(data)=>{
    console.log(data);
  }
    return (
        <div
      className=" min-h-screen w-full lg:p-20 bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="bg-white rounded-2xl h-full  grid  grid-cols-1 lg:grid-cols-2 shadow items-center mx-auto ">
        <div className="min-w-[500px]">
          <img
            alt="login image"
            className="rounded-2xl hidden lg:flex object-cover w-full h-full ml-10"
            src={login1}
          />
        </div>
        <div className="text-center mx-auto w-full lg:w-[80%] p-10">
          <div className="space-y-1 mb-2">
            <h1 className="text-sky-600 text-3xl lg:text-5xl font-bold ">
              Wellcome
            </h1>
            <p>To Learn Japanese Language</p>
          </div>
          <JPForm
            onSubmit={handleLogin}
          >
            <div className="space-y-2 text-left">
              <JPInput
                label="Email"
                name="email"
                required={true}
                type="email"
                variant="bordered"
                // defaultvalue="sakib@gmail.com"
              />
              <JPInput
                label="Password"
                name="password"
                required={true}
                type="password"
                variant="bordered"
                // defaultvalue="1234567"
              />
              <Link href={"/forgotPassword"}>
                <p className="text-right text-[14px] text-default-500 hover:text-blue-600">
                  Forgot Password?
                </p>
              </Link>
              <button className="w-full border bg-sky-600 rounded-xl py-[6px] text-white font-semibold hover:bg-sky-700
              " type="submit">
                Login
              </button>
            </div>
          </JPForm>
          <p>
            I Don&#39;t have an accout.?{" "}
            <Link
              className="text-blue-800 mt-1 hover:text-blue-700"
              href={"/signup"}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Login;