import React from "react";
import { Fab } from "@material-ui/core";
type props = {
  Icon: React.ComponentType;
};
export default ({ Icon }: props) => {
  return (
    <Fab className="submit-btn" color="primary">
      <Icon />
    </Fab>
  );
};
