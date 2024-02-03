import { useEffect, useState } from "react";
import { axiosAuthApi } from "../utils/instance";
import { deleteCookie, getCookie } from "../utils/cookieUtil";
function LoginSuccessPage() {
  const [accessToken] = useState<string | null>(getCookie("access_token"));
  useEffect(() => {
    accessToken && localStorage.setItem("access_token", accessToken);
    deleteCookie("access_token");
  }, [accessToken]);
  const handleClick = (): void => {
    console.log("눌렀다");
    axiosAuthApi()
      .get("/login-test")
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      토큰 : {accessToken}
      <button
        className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleClick}
      >
        테스트버튼
      </button>
    </div>
  );
}
export default LoginSuccessPage;
