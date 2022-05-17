import axios from "axios";

export interface Jobs {
  company: string;
  contract: string;
  featured: boolean;
  id: number;
  languages: string[];
  level: string;
  location: string;
  logo: string;
  new: boolean;
  position: string;
  postedAt: string;
  role: string;
  tools: string[];
}

class JobsModelStatic {
  getJobs = async (): Promise<Jobs[]> => {
    return axios.get("./data.json").then(({ data }) => data);
  };
}

export const JobsModel = new JobsModelStatic();
