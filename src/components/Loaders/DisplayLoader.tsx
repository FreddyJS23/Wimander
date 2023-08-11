import { Backdrop } from "@mui/material";
import {LoaderSpinner} from "./LoaderSpinner";

export const DisplayLoader = () => {
  return (
    <Backdrop open={true}>
      <LoaderSpinner />
    </Backdrop>
  );
};


