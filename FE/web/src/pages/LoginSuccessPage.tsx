import { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "../utils/cookieUtil";
function LoginSuccessPage() {
    const [accessToken] = useState<string | null>(getCookie("accessTocken"));
    useEffect(() => {
        if (accessToken != null) {
            localStorage.setItem("accessToken", accessToken);
            console.log("로컬스토리지에 access token 저장됨");
            console.log(localStorage.getItem)
            deleteCookie(accessToken);
            console.log("쿠키 삭제됨");
        } else {
            console.log("쿠키 못받아왔음");
        }
    });

    return (
        <div>토큰 : {accessToken}</div>
    );
}
export default LoginSuccessPage;