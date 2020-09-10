import React from "react";
import { Fab } from "@material-ui/core";
type props = {
  handleSubmit: () => void;
  Icon: React.ComponentType;
};
export default ({ handleSubmit, Icon }: props) => {
  return (
    <Fab onClick={handleSubmit} className="submit-btn" color="primary">
      <Icon />
    </Fab>
  );
};
