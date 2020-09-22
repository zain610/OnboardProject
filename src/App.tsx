import React, { useState } from "react";
import "./App.css";
import { Box, Grid } from "@material-ui/core";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import MultiDropdown from "./components/MultiDropdown";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ActionButton from "./components/Button";
import Constants from "./Constants";
import sendFormData from "./util/api";
import cloneObject from "./util/cloneObject";

function App() {
  const [form, setFormData] = useState(Constants.defaultFormData);
  const [errors, setErrors] = useState({
    ...cloneObject(Constants.defaultFormData),
  });

  const handleInputChanges = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...form,
      [name]: value,
    });
  };
  const validate = () => {
    //we will clone the current errors object, then validate all form fields and set new errors.
    //so if the form is validated, we shoudl expect this method to return true, based on the check if all errors === ""

    //input error handling
    let temp = { ...errors };
    console.log(temp);
    console.log(form.location);
    temp.heading = form.heading.length > 0 ? "" : "Heading is required";
    temp.client = form.client.length > 0 ? "" : "Client is required";
    temp.email = /^\S+@\S+$/.test(form.email) ? "" : "Email is not valid";
    temp.phoneNo = form.phoneNo.length > 9 ? "" : "Phone number is not valid";
    temp.contact = form.contact.length > 0 ? "" : "Contact is required";
    temp.description =
      form.description.length > 0 ? "" : "Description is required";
    temp.salary =
      Number(form.salary) > 0 ? "" : "Salary should be greater than 0";
    temp.location =
      form.location.length > 0 ? "" : "Select appropriate locations";
    temp.jobCandidateRating =
      form.jobCandidateRating.length > 0 ? "" : "Select appropriate rating";
    temp.jobStage = form.jobStage.length > 0 ? "" : "Select appropriate Stage";
    temp.jobType = form.jobType.length > 0 ? "" : "Select appropriate Stage";
    temp.currency = form.currency.length > 0 ? "" : "Select appropriate Stage";
    temp.skills = form.skills.length > 0 ? "" : "Select appropriate skills";
    temp.industry =
      form.industry.length > 0 ? "" : "Select appropriate industry";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = () => {
    //create post request passing the form data in body.
    //extract data form form state
    if (validate()) {
      sendFormData(form);
    }
  };
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
            value={form.heading}
            name="heading"
            label="Job Title"
            helper="E.g: Front-End Developer, Project Manager"
            handleChanges={handleInputChanges}
            error={errors.heading}
          />
          <Input
            value={form.email}
            name="email"
            label="Email address"
            helper="E.g: Jessica@Reesby.com.au"
            handleChanges={handleInputChanges}
            error={errors.email}
          />
          <Input
            value={form.client}
            name="client"
            label="Company"
            helper="E.g: Reesby, IoT, PwC"
            handleChanges={handleInputChanges}
            error={errors.client}
          />
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <Input
            value={form.phoneNo}
            handleChanges={handleInputChanges}
            name="phoneNo"
            label="Phone"
            helper="E.g +61 459735924"
            error={errors.phoneNo}
          />
          <MultiDropdown
            value={form.location}
            name="location"
            options={Constants.locations}
            label="Location"
            handleChanges={handleInputChanges}
            error={errors.location}
          />
          <Input
            value={form.contact}
            handleChanges={handleInputChanges}
            name="contact"
            label="Contact"
            helper="Main contact person for the job"
            error={errors.contact}
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Input
            value={form.description}
            handleChanges={handleInputChanges}
            name="description"
            label="Description"
            helper="Brief description of Job"
            error={errors.description}
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Dropdown
            handleChanges={handleInputChanges}
            value={form.currency}
            name="currency"
            label="Select"
            options={Constants.currency}
            helperText="Please select your currency"
            variant="outlined"
            error={errors.currency}
          />
          <Input
            handleChanges={handleInputChanges}
            name="salary"
            label="Amount"
            helper="Please select your expected amount"
            labelProps={{
              shrink: true,
            }}
            type="number"
            error={errors.salary}
          />
          <Dropdown
            value={form.jobCandidateRating}
            handleChanges={handleInputChanges}
            name="jobCandidateRating"
            label="Select"
            options={Constants.default}
            helperText="Please select your rate types"
            variant="outlined"
            error={errors.jobCandidateRating}
          />
          <Dropdown
            value={form.jobStage}
            handleChanges={handleInputChanges}
            name="jobStage"
            label="Job Progress"
            options={Constants.default}
            variant="standard"
            error={errors.jobStage}
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <MultiDropdown
            value={form.jobType}
            handleChanges={handleInputChanges}
            name="jobType"
            label="Job Types"
            options={Constants.rateTypes}
            variant="standard"
            error={errors.jobType}
          />
          <MultiDropdown
            value={form.skills}
            handleChanges={handleInputChanges}
            name="skills"
            label="Skills"
            options={Constants.default}
            variant="standard"
            error={errors.skills}
          />

          <MultiDropdown
            value={form.industry}
            handleChanges={handleInputChanges}
            name="industry"
            label="Industry"
            options={Constants.default}
            variant="standard"
            error={errors.industry}
          />
        </Grid>
        <ActionButton
          handleSubmit={handleSubmit}
          Icon={KeyboardArrowRightIcon}
        />
      </Box>
    </div>
  );
}

export default App;
