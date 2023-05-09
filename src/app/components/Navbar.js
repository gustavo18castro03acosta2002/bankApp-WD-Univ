import { ArrowBack } from "@/Images/ArrowBack";
import Link from "next/link";

export function Navbar({ homeNav }) {
  return homeNav ? (
    <nav className="NavbarSettings ">
      <div className="NavbarLogoSettings FlexLikeSettings">
        {/* LOGO */}
        <div className="LogoBox">
          <h1 className="LogoNavbar">Logo</h1>
        </div>
      </div>
      <div className="NavbarBtnSettings FlexLikeSettings">
        {/* BTNS */}
        {/* Actualizar Links */}
        <Link href="/ingresar">
          <button className="GeneralBtnSettings BtnMain">ingresar</button>
        </Link>
        <Link href="/registrate">
          <button className="GeneralBtnSettings BtnSecond">Resgistrate</button>
        </Link>
      </div>
    </nav>
  ) : (
    <nav className="NavbarSettingsNotHome">
      <div className="NavbarBtnSettingsNotHome FlexLikeSettings">
        {/* BTNS */}
        <Link href="/">
          <button className="GeneralBtnSettings BtnBack">
            <ArrowBack />
          </button>
        </Link>
      </div>
      <div className="NavbarLogoSettingsNotHome FlexLikeSettings">
        {/* LOGO */}

        <div className="LogoBox">
          <h1 className="LogoNavbar">Logo</h1>
        </div>
      </div>
    </nav>
  );
}
