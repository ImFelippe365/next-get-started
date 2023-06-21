"use client";
import { Instagram } from "lucide-react";
import style from "./style.module.scss";
import { usePathname } from "next/navigation";
export function Signin() {
  const pathname = usePathname();

  return pathname === "/sign-in" ? (
    <div className={style.login}>
      <a href="#">Login</a>
    </div>
  ) : (
    <div className={style.loggedContainer}>
      <div className={style.avatar} />
      <div>
        <h4>Felippe Rian</h4>
        <div className={style.instagram}>
          <Instagram size={17} color="#e72c83" />
          <p>@felippe.png</p>
        </div>
      </div>
    </div>
  );
}
