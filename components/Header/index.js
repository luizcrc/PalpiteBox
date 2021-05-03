import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className="container mx-auto">
          <Link href="/">
            <a>
              {" "}
              <img
                className="mx-auto"
                src="/logo.png"
                alt="ComandaX"
                width="100"
                height="100"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-gray-300 p-4 shadow-md text-center">
        <Link href="/sobre">
          <a className="px-2 hover:underline">Sobre</a>
        </Link>
        <Link href="/contato">
          <a className="px-2 hover:underline">Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a className="px-2 hover:underline">Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
