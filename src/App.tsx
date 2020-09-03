import React from "react";
import "./App.css";
import { Button, Container, Typography, TextField } from "@material-ui/core";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

function App() {
  const textClasses = "input";
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
      <Container maxWidth="lg" className="container">
        <Input
          label="Job Title"
          helper="E.g: Front-End Developer, Project Manager"
          overrideClass={textClasses}
        />
        <Input
          label="Email address"
          helper="E.g: Jessica@Reesby.com.au"
          overrideClass={textClasses}
        />
        <Input
          label="Company"
          helper="E.g: Reesby, IoT, PwC"
          overrideClass={textClasses}
        />
      </Container>
      <Container maxWidth="lg" className="container">
        <Input
          label="Phone"
          helper="E.g +61 459735924"
          overrideClass={textClasses}
        />
        <Dropdown
          options={locationOptions}
          label="Location"
          overrideClass={textClasses}
        />
        <Input
          label="Contact"
          helper="Main contact person for the job"
          overrideClass={textClasses}
        />
      </Container>
      <Container maxWidth="lg" className="container">
        <Input
          label="Description"
          helper="Brief description of Job"
          overrideClass={textClasses}
        />
      </Container>
      <Container maxWidth="lg" className="container">
        <Dropdown
          label="Select"
          options={currencyOptions}
          overrideClass={textClasses}
          helperText="Please select your currency"
          variant="outlined"
        />
        <Input
          label="Amount"
          helper="Please select your expected amount"
          overrideClass={textClasses}
          labelProps={{
            shrink: true,
          }}
          type="number"
        />
        <Dropdown
          label="Select"
          options={rateTypes}
          overrideClass={textClasses}
          helperText="Please select your rate types"
          variant="outlined"
        />
        <Dropdown
          label="Job Progress"
          options={defaultDummyOptions}
          overrideClass={textClasses}
          variant="standard"
        />
      </Container>
      <Container maxWidth="lg" className="container">
        <Dropdown
          label="Job Types"
          options={defaultDummyOptions}
          overrideClass={textClasses}
          variant="standard"
        />
        <Dropdown
          label="Skills"
          options={defaultDummyOptions}
          overrideClass={textClasses}
          variant="standard"
        />
        <Dropdown
          label="Industry"
          options={defaultDummyOptions}
          overrideClass={textClasses}
          variant="standard"
        />
      </Container>
    </div>
  );
}

export default App;
