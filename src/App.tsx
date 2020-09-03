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
          options={["AUD", "USD", "INR"]}
          overrideClass={textClasses}
        />
      </Container>
    </div>
  );
}

export default App;
