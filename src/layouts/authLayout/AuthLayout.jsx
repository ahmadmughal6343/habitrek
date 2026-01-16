import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const AuthLayout = () => {
  const isloading = useNavigation();
  if (isloading.state === "loading" || isloading.state === "submitting")
    return <Loader />;

  return <Outlet />;
};

export default AuthLayout;
