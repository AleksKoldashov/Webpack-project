import { useQueryClient } from "@tanstack/react-query";
import React, { useMemo } from "react";
import styled from "styled-components";

const OptionsList = styled.ul`
  position: absolute;
  top: 90px;
  background-color: white;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1;
  width: 500px;
`;

const Option = styled.li`
  padding: 10px;
  cursor: pointer;
  border-bottom: 2px solid #1e90ff;
  &:hover {
    background-color: #f1f1f1;
  }
`;
type TypeUIList = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UIList({ setCity, setIsOpen }: TypeUIList) {
  const queryClient = useQueryClient();
  const handelChange = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setCity(e.currentTarget.innerText);
    setIsOpen(false);
  };
  const allQueries = queryClient.getQueryCache().findAll();
  const data = useMemo(() => {
    return allQueries.reduce((accum: string[], query: any) => {
      console.log(query);

      const queryKey = query.queryKey[0];
      if (!accum.includes(queryKey)) {
        accum.push(queryKey);
      }
      return accum;
    }, []);
  }, [allQueries]);
  return (
    <>
      <OptionsList>
        {data?.map((query) => (
          <Option onClick={handelChange} key={query}>
            {query}
          </Option>
        ))}
      </OptionsList>
    </>
  );
}
