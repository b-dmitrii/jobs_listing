import { useEffect, useState } from "react";
import styled from "styled-components";
// @ts-ignore
import { FilterMenu } from "../filter-menu/filter-menu.tsx";
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
    getFilterJobs(filteringList);
    // eslint-disable-next-line
  }, [filteringList]);
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
