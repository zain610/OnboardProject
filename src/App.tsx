import React, { useState } from "react";
import "./App.css";
import { Box, Grid } from "@material-ui/core";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ActionButton from "./components/Button";
import Constants from "./Constants";
import Axios from "axios";

function App() {
  const formData = {
    heading: "",
    client: "",
    industry: "",
    jobType: "",
    skills: "",
    description: "",
    location: "",
    contact: "",
    email: "",
    phoneNo: "",
    jobCandidateRating: "",
    jobStage: "",
    salary: "",
    currency: "AUD",
  };
  // const [heading, setHeading] = useState("");
  // const [client, setClient] = useState("");
  // const [industry, setIndustry] = useState("");
  // const [jobType, setJobType] = useState("");
  // const [skills, setSkills] = useState("");
  // const [description, setDescription] = useState("");
  // const [location, setLocation] = useState("");
  // const [contact, setContact] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [jobCandidateRating, setJobCandidateRating] = useState("");
  // const [jobStage, setJobStage] = useState("");
  // const [salary, setSalary] = useState("");
  const [form, setFormData] = useState(formData);
  // const [currency, changeCurrency] = useState("AUD");

  const handleInputChanges = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    //create post request passing the form data in body.

    //extract data form form state
    const {
      heading,
      client,
      industry,
      jobType,
      skills,
      description,
      location,
      contact,
      email,
      phoneNo,
      jobStage,
      salary,
      currency,
    } = form;
    const headers = {
      "Content-Type": "application/json",
      accept: "*/*",
    };
    const data = {
      jobId: "000001",
      tenantId: "reesby",
      heading,
      client,
      industry: [industry],
      jobType: [jobType],
      skills: [skills],
      description,
      salary: `${currency} ${salary}`,
      location: [location],
      contact,
      email,
      phoneNo,
      jobCandidateRating: "test",
      jobStage,
    };
    Axios.post(
      "http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/job/addJob",
      data
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const locationOptions = Constants.locations;
  const defaultDummyOptions = Constants.default;
  const currencyOptions = Constants.currency;
  const rateTypes = Constants.rateTypes;
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
          />
          <Input
            value={form.email}
            name="email"
            label="Email address"
            helper="E.g: Jessica@Reesby.com.au"
            handleChanges={handleInputChanges}
          />
          <Input
            value={form.client}
            name="client"
            label="Company"
            helper="E.g: Reesby, IoT, PwC"
            handleChanges={handleInputChanges}
          />
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <Input
            value={form.phoneNo}
            handleChanges={handleInputChanges}
            name="phoneNo"
            label="Phone"
            helper="E.g +61 459735924"
          />
          <Dropdown
            value={form.location}
            name="location"
            options={locationOptions}
            label="Location"
            handleChanges={handleInputChanges}
          />
          <Input
            value={form.contact}
            handleChanges={handleInputChanges}
            name="contact"
            label="Contact"
            helper="Main contact person for the job"
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Input
            value={form.description}
            handleChanges={handleInputChanges}
            name="description"
            label="Description"
            helper="Brief description of Job"
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Dropdown
            handleChanges={handleInputChanges}
            value={form.currency}
            name="currency"
            label="Select"
            options={currencyOptions}
            helperText="Please select your currency"
            variant="outlined"
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
          />
          <Dropdown
            value={form.jobCandidateRating}
            handleChanges={handleInputChanges}
            name="jobCandidateRating"
            label="Select"
            options={defaultDummyOptions}
            helperText="Please select your rate types"
            variant="outlined"
          />
          <Dropdown
            value={form.jobStage}
            handleChanges={handleInputChanges}
            name="jobStage"
            label="Job Progress"
            options={defaultDummyOptions}
            variant="standard"
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Dropdown
            value={form.jobType}
            handleChanges={handleInputChanges}
            name="jobType"
            label="Job Types"
            options={rateTypes}
            variant="standard"
          />
          <Dropdown
            value={form.skills}
            handleChanges={handleInputChanges}
            name="skills"
            label="Skills"
            options={defaultDummyOptions}
            variant="standard"
          />

          <Dropdown
            value={form.industry}
            handleChanges={handleInputChanges}
            name="industry"
            label="Industry"
            options={defaultDummyOptions}
            variant="standard"
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
