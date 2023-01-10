import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
export default function ErrorAlert({ message, open }) {
  return (
    <div>
      {open ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>{message}</strong>
        </Alert>
      ) : null}
    </div>
  );
}
