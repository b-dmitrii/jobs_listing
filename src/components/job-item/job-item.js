import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 0px 5px 5px hsl(180, 80%, 81%);
  background-color: hsl(180, 52%, 96%);
  border-radius: 5px;
  margin-bottom: 25px;
  padding: 30px;

  &:hover {
    border-left: 5px solid hsl(180, 29%, 50%);
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
  }
`;

const JobContent = styled.div`
  width: 100%;

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

const JobInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  margin-bottom: 30px;
  border-bottom: 1px solid hsl(180, 8%, 52%);

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    border-bottom: none;
    margin-left: 25px;
  }
`;

const JobInfo = styled.div`
  margin-bottom: 20px;
  & > span:not(:first-child)::before {
    content: "•";
    margin: 0 5px;
    font-size: 10px;
    color: hsl(180, 8%, 52%);
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    width: 88px;
    height: 88px;
    margin-bottom: 0;
  }
`;

const CompanyName = styled.h2`
  font-size: 16px;
  color: hsl(180, 29%, 50%);
  margin: 0;
  margin-bottom: 15px;
`;

const Position = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
`;

const PostedAt = styled.span`
  font-size: 14px;
  color: hsl(180, 8%, 52%);
`;

const Location = styled.span`
  font-size: 14px;
  color: hsl(180, 8%, 52%);
`;

const Contract = styled.span`
  font-size: 14px;
  color: hsl(180, 8%, 52%);
`;

const NewVacancy = styled.span`
  border-radius: 10px;
  color: hsl(180, 31%, 95%);
  background-color: hsl(180, 29%, 50%);
  height: 8px;
  padding: 3px 5px;
  font-size: 12px;
  text-transform: uppercase;
  margin-left: 10px;
`;

const Featured = styled(NewVacancy)`
  background-color: hsl(180, 14%, 20%);
`;

const SkillsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > span:not(:last-child) {
    margin-right: 30px;
  }
`;

const Skill = styled.span`
  color: hsl(180, 29%, 50%);
  cursor: pointer;
  padding: 10px 0;

  &:hover {
    color: hsl(180, 52%, 96%);
    background-color: hsl(180, 29%, 50%);
    padding: 5px 5px;
    border-radius: 5px;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
`;

const JobItem = ({ job, setFilteringList }) => {
  const {
    company,
    contract,
    featured,
    languages,
    position,
    level,
    location,
    new: newPost,
    postedAt,
    role,
    tools,
    logo,
  } = job;

  const skillsArr = [role, level, ...languages, ...tools];

  const filteringJobs = (skill) => {
    setFilteringList((prev) => [...prev, skill]);
  };

  return (
    <Container>
      <Logo src={logo} />
      <JobContent>
        <JobInfoWrapper>
          <div style={{ display: "flex" }}>
            <CompanyName>{company}</CompanyName>
            {newPost && <NewVacancy>New!</NewVacancy>}
            {featured && <Featured>Featured</Featured>}
          </div>

          <Position>{position}</Position>
          <JobInfo>
            <PostedAt>{postedAt}</PostedAt>
            <Contract>{contract}</Contract>
            <Location>{location}</Location>
          </JobInfo>
        </JobInfoWrapper>
        <SkillsWrapper>
          {skillsArr.map((skill) => (
            <Skill key={skill} onClick={() => filteringJobs(skill)}>
              {skill}
            </Skill>
          ))}
        </SkillsWrapper>
      </JobContent>
    </Container>
  );
};

export default JobItem;
