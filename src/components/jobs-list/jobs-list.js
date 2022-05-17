import styled from "styled-components";
import JobItem from "../job-item/job-item.tsx";

const Container = styled.div``;

const JobsList = ({ jobs, setFilteringList, getFilterJobs }) => {
  return (
    <Container>
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          setFilteringList={setFilteringList}
          getFilterJobs={getFilterJobs}
        />
      ))}
    </Container>
  );
};

export default JobsList;
