import { useState, useEffect } from "react";
import { deleteCookie, getCookie } from "../../utils/cookieUtil";
import { CircularProgress } from "@nextui-org/react";
import { getNickname } from "../../api/nicknameAPI";
import { useNavigate } from "react-router-dom";

function LoginSuccessPage() {
  const navigate = useNavigate();
  const [isFinished, setIsFinished] = useState(false);

  // access token 가져오기
  useEffect(() => {
    const accessToken = getCookie("access_token");
    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      deleteCookie("access_token");
    }
  }, []);

  // nickname 가져오기
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const results = await getNickname();
      setNickname(results.data);
      console.log(nickname, "nickname");
    };

    fetchData();

    setIsFinished(true);
  }, [nickname]);

  // 작업이 완료되면 메인 페이지로 이동
  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [isFinished, navigate]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <CircularProgress
        size="lg"
        color="secondary"
        label="로그인 성공! 잠시만 기다려주세요"
      />
    </div>
  );
}

export default LoginSuccessPage;
