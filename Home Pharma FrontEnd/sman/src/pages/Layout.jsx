import React from "react";
import MyHeader from "../components/MyHeader";
import Navbar from "../components/Navbar";
import MyFooter from "../components/MyFooter";

export default function Layout(props) {
  return (
    <>
      <MyHeader />
      <Navbar />
      {props.children}
      <MyFooter />
    </>
  );
}
