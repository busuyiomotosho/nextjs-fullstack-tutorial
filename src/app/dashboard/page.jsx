"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

function Dashboard() {
  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res, json());

  const { data, error, isLoading } = useSWR("");

  return <div className={styles.container}>Dashboard</div>;
}

export default Dashboard;
