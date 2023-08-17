import { LinearProgress } from "@mui/material";

export const PageLoading = () => {
  return (
    <div
      style={{ position: "absolute", width: "100%", top: "0px", left: "0px" }}
    >
      <LinearProgress />
    </div>
  );
};
