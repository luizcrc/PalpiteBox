import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto font-bold text-white text-center">
        Projeto desenvolvido por:{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/luiz-carlos-ruiz-cestaro-625b1243/"
        >
          Luiz Carlos
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/luiz-carlos-ruiz-cestaro-625b1243/"
        >
          Linkdin
        </a>
        <div className="mt-4">
          <img
            className="inline p-4"
            src="/fullstack.png"
            alt="FullStack"
            width="100"
            height="100"
          />
          <img
            className="inline p-4"
            src="/devpleno.png"
            alt="DevPleno"
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
