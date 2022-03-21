import { toast } from "react-toastify";
import axios from "axios";
import { baseurl } from "../utils/forApi";


const signUpHandler = async (userName, email, password, loginHandler) => {
    const toastId = toast.loading("Signing up");
    try {
      const response = await axios.post(
        `${baseurl}/user/signup`,
        { name: userName, password, email },
        {
          headers: {
            ContentType: "application/json",
          },
        }
      );
      console.log(response)
      if (response.status === 200) {
        toast.update(toastId, {
          render: "Signup Complete",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        loginHandler(userName, password);
      } else {
          console.log("Hii")
        toast.update(toastId, {
          render: "Check the details and try again",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Technical Error",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });

      console.log(error.response);
    }
  };

  export default signUpHandler;