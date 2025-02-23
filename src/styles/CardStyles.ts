import styled from "styled-components";
interface DayProps {
    isselected: boolean;
  }
export const CardDay = styled.div`
  border: 1px solid #bae6fa;
  padding: 10px;
  width: 800px;
  height: 670px;
`;
export const CardTime = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px 100px;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
export const HeaderCardDay = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 100px 100px 100px 100px 100px 100px;
`;
export const CellCardDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LayoutDays = styled.div`
  display: flex;
  gap: 5px;
`;
export const Day = styled.div<DayProps>`
  display: flex;
  font-size: 12px;
  font-weight: 600;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: ${props =>(props.isselected && 'inset 0 0 10px #1e90ff')};
  justify-content: center;
  align-items: center;
  border: 1px solid #bae6fa;
  border-bottom: 1px solid white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 156px;
  height: 50px;
  cursor: pointer;
`;