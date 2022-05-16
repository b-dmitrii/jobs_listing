import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -90px;
  margin-bottom: 35px;
  padding: 20px 20px;
  border-radius: 5px;
  background-color: hsl(180, 31%, 95%);
`;

const SelectedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1440px) {
    flex-wrap: no-wrap;
  }
`;

const Item = styled.span`
  color: hsl(180, 29%, 50%);
  margin-right: 20px;
  padding: 5px 0;

  @media (min-width: 1440px) {
    padding: 0;
  }
`;

const DelButton = styled.button`
  border: none;
  background-color: hsl(180, 29%, 50%);
  color: hsl(180, 31%, 95%);
  padding: 5px 8px;
  border-radius: 0 5px 5px 0;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`;

const ClearButton = styled.button`
  background-color: inherit;
  border: none;
  color: hsl(180, 29%, 50%);
  cursor: pointer;
  padding: 0;

  &:hover {
    border-bottom: 1px solid hsl(180, 29%, 50%);
  }
`;

export const FilterMenu = ({ filteringList, setFilteringList }) => {
  const filteringListSet = [...new Set(filteringList)];
  const onClearMenu = () => {
    setFilteringList([]);
  };

  const deleteSelectedEl = (el) => {
    setFilteringList(() => {
      return filteringListSet.filter((item) => item !== el);
    });
  };
  return (
    <Container>
      <SelectedContainer>
        {filteringListSet.map((el) => (
          <Item key={el}>
            {el}
            {<DelButton onClick={() => deleteSelectedEl(el)}>X</DelButton>}
          </Item>
        ))}
      </SelectedContainer>
      <ClearButton onClick={onClearMenu}>Clear</ClearButton>
    </Container>
  );
};
