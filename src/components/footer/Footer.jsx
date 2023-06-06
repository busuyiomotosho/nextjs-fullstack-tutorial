"use client";
import React from "react";
import styles from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        Copyright 2023. Designed by Busuyi Omotosho. All rights reserved.
      </div>
      <div className={styles.social}>
        <FacebookIcon width={15} height={15} className={styles.icon} />
        <InstagramIcon width={15} height={15} className={styles.icon} />
        <TwitterIcon width={15} height={15} className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
