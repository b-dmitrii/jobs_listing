import axios from "axios";

class JobsModelStatic {
  getJobs = async () => {
    return axios.get("./data.json").then(({ data }) => data);
  };
}

export const JobsModel = new JobsModelStatic();
