import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/japan-bg.png";
import login1 from "../../assets/japan2.jpg";
import JPForm from "../../components/Form/JPForm";
import JPInput from "../../components/Form/JPInput";
import { toast } from "sonner";
import { useLoginApiMutation } from "../../redux/Features/Auth/authApi";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { authInfo } from "../../redux/Features/Auth/authSlice";
const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginApiMutation();
  // dispatch
  const dispatch = useDispatch();
  const handleLogin = async (data) => {
    const toastId = toast.loading("Loading..");
    try {
      const res = await login(data);
      // console.log(res);
      if (res?.data) {
        // set and decode data
        const token = res?.data?.data;
        const userInfo = jwtDecode(token);
        // dispatch user
        dispatch(authInfo({ data: userInfo, token: token }));

        toast.success("login success", { id: toastId, duration: 3000 });
        if (userInfo?.role=="USER") {
          navigate("/");
        }else if(userInfo?.role=="ADMIN"){
          navigate("/admin");

        }else{
          navigate("/login");

        }
      } else {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 3000 });
      }
    } catch (error) {
      toast.error(error, { id: toastId, duration: 3000 });
    }
  };
  return (
    <div
      className=" min-h-screen w-full lg:p-20 bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="bg-white rounded-2xl h-full grid grid-cols-1 lg:grid-cols-2 shadow items-center mx-auto overflow-hidden">
        <div className="">
          <img
            alt="login image"
            className="hidden lg:flex object-cover w-full h-full"
            src={login1}
          />
        </div>
        <div className="text-center mx-auto w-full lg:w-[80%] p-10">
          <div className="space-y-1 ">
            <h1 className="text-sky-600 text-3xl lg:text-5xl font-bold ">
              Wellcome
            </h1>
            <p>日本語を学ぶには学びましょう</p>
          </div>
          <JPForm onSubmit={handleLogin}>
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
             
              <button
                className="w-full border bg-sky-600 rounded-xl py-[7px] text-white font-semibold hover:bg-sky-700
              "
                type="submit"
              >
                Login
              </button>
            </div>
          </JPForm>
          <p>
            I Don&#39;t have an accout.?{" "}
            <a
              className="text-blue-800 hover:text-blue-700"
              href={"/registration"}
            >
              Registration
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
