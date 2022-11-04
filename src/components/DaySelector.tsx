import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: transparent;
  width: 100%;
  padding: 8px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #3399FF;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #80BFFF;
  }

  &.${tabUnstyledClasses.selected} {
    background: linear-gradient(92.27deg,#32bbff,#1f7099);
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 360px;
  background-color: #373d66;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);

interface DayProps {
  updateDay: (newValue: number) => void;
  day: number;
}

const DaySelector = ({ updateDay, day } : DayProps) => {
  const handleChange = (event: React.SyntheticEvent, newValue: string | number | boolean) => {
    const value: number = Number(newValue);
    updateDay(value);
  };

  return (
    <TabsUnstyled value={day} defaultValue={day} onChange={handleChange}>
      <TabsList>
        <Tab>7d</Tab>
        <Tab>14d</Tab>
        <Tab>30d</Tab>
        <Tab>90d</Tab>
        <Tab>180d</Tab>
        <Tab>1y</Tab>
        <Tab>Max</Tab>
      </TabsList>
    </TabsUnstyled>
  );
}

export default DaySelector;