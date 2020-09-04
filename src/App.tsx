import React from "react";
import "./App.css";
import { Box, Grid } from "@material-ui/core";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ActionButton from "./components/Button";

function App() {
  const locationOptions = [
    "Melbourne",
    "Sydney",
    "Brisbane",
    "Gold Coast",
    "Adelaide",
  ];

  const defaultDummyOptions = ["Option A", "Option B", "Option C"];
  const currencyOptions = ["AUD", "USD", "INR"];
  const rateTypes = ["Contract", "Full Time", "Part Time", "Casual"];
  return (
    <div className="App">
      <Box
        border={1}
        width="75%"
        margin="auto"
        boxShadow={1}
        maxWidth="lg"
        padding="1rem"
      >
        <Grid container item xs={12} spacing={3}>
          <Input
            label="Job Title"
            helper="E.g: Front-End Developer, Project Manager"
          />
          <Input label="Email address" helper="E.g: Jessica@Reesby.com.au" />
          <Input label="Company" helper="E.g: Reesby, IoT, PwC" />
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <Input label="Phone" helper="E.g +61 459735924" />
          <Dropdown options={locationOptions} label="Location" />
          <Input label="Contact" helper="Main contact person for the job" />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Input label="Description" helper="Brief description of Job" />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Dropdown
            label="Select"
            options={currencyOptions}
            helperText="Please select your currency"
            variant="outlined"
          />
          <Input
            label="Amount"
            helper="Please select your expected amount"
            labelProps={{
              shrink: true,
            }}
            type="number"
          />
          <Dropdown
            label="Select"
            options={rateTypes}
            helperText="Please select your rate types"
            variant="outlined"
          />
          <Dropdown
            label="Job Progress"
            options={defaultDummyOptions}
            variant="standard"
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Dropdown
            label="Job Types"
            options={defaultDummyOptions}
            variant="standard"
          />
          <Dropdown
            label="Skills"
            options={defaultDummyOptions}
            variant="standard"
          />

          <Dropdown
            label="Industry"
            options={defaultDummyOptions}
            variant="standard"
          />
        </Grid>
        <ActionButton Icon={KeyboardArrowRightIcon} />
      </Box>
    </div>
  );
}

export default App;
