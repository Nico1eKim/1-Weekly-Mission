import "./Nav.css";
import logo from "../../image/logo.svg";
import NavProfile from "./NavProfile";
import NavLogin from "./NavLogin";
import { getResponse } from "../../api";
import { useCallback, useEffect, useState } from "react";

const Nav = ({ pageType }) => {
  const [user, setUser] = useState(false);

  const handleLoad = useCallback(async () => {
    const result = await getResponse("sample/user");
    if (!result) {
      return;
    }

    setUser(result);
  }, []);

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <nav className={`nav_bar ${pageType}`}>
      <a className="logo_button" href="/">
        <img className="logo" src={logo} alt="로고 이미지" />
      </a>
      {user ? <NavProfile {...user} /> : <NavLogin>로그인</NavLogin>}
    </nav>
  );
};

export default Nav;
