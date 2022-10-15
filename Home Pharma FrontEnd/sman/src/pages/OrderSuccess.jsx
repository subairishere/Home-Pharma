import React from "react";
import Layout from "./Layout";

export default function OrderSuccess() {
  return (
    <Layout>
      <h1 className="p-1">
        <span className="success">You order has been placed.</span>
        <br />
        Please check your email for more deatils.
        <br />
        <br />
        We will keep you updated using emails
      </h1>
    </Layout>
  );
}
