import { useEffect, useState } from "react";
import styled from "styled-components";

import { FilterMenu } from "../filter-menu/filter-menu";
import { Header } from "../header/header";
import JobsList from "../jobs-list/jobs-list";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 3rem;
`;

export const Main = ({ jobs, getFilterJobs }) => {
  const [filteringList, setFilteringList] = useState([]);

  useEffect(() => {
    getFilterJobs(filteringList, jobs);
  }, [filteringList, getFilterJobs, jobs]);
  return (
    <>
      <Header />
      <Container>
        {filteringList?.length ? (
          <FilterMenu
            filteringList={filteringList}
            setFilteringList={setFilteringList}
          />
        ) : undefined}
        <JobsList
          jobs={jobs}
          setFilteringList={setFilteringList}
          getFilterJobs={getFilterJobs}
        />
      </Container>
    </>
  );
};
