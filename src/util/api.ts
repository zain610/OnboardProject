import { ReplayOutlined } from "@material-ui/icons";
import Axios from "axios";

const sendFormData = ({
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
}: any) => {
  const data = {
    tenantId: "reesby",
    heading,
    client,
    industry,
    jobType,
    skills,
    description,
    salary: `${currency} ${salary}`,
    location,
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
      window.alert("Form submitted!");
    })
    .catch((err) => {
      window.alert("Error submitting form");
      console.log("err", err);
    });
};

export default sendFormData;
