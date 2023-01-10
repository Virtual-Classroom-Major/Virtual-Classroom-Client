import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
export default function SuccessAlert({ message, open }) {
  return (
    <div>
      {open ? (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong>{message}</strong>
        </Alert>
      ) : null}
    </div>
  );
}
