import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { Container, Typography, Grid, Box } from '@mui/material';
import DaySelector from './DaySelector';
import { getMultifirm, numberFormatter } from '../utils/chart';
import './Chart.css';

const dateList = ['7', '14', '30', '90', '180', '365', 'all'];

interface ChartInfo {
  asset: string;
  farm: string;
  tvlStakedHistory: [];
}

const Chart = (props: any) => {
  const { name } = props;
  const [chartInfo, setChartInfo] = useState<ChartInfo>();
  const [data, setData] = useState([]);
  const [day, setDay] = useState(2);

  const updateChartData = () => {
    (async () => {
      const chartData = await getMultifirm();
      const showData = (dateList[day] !== 'all') ? chartData.tvlStakedHistory.slice(0, dateList[day]) : chartData.tvlStakedHistory;
      showData.sort((x: any, y: any) => (x.date > y.date) ? 1 : (x.date < y.date) ? -1 : 0);

      // Set show data
      setData(showData);
      setChartInfo(chartData);
    })();
  }

  useEffect(() => {
    updateChartData();
  });

  const updateDay = (newValue: number) => {
    setDay(newValue);
    updateChartData();
  }

  return (
    <Container maxWidth="md">
      <Box className="subTitle">
        <Typography variant="subtitle1" color="text.secondary" align="left">{chartInfo ? `${chartInfo.farm}` : ''}</Typography>
        <Typography variant="subtitle2" color="white" align="left">{chartInfo ? `: ${chartInfo.asset}` : ''}</Typography>
      </Box>
      <Box className="chartContainer">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8} md={6}>
            <Typography className="chartTitle" variant="body2" color="white" align="left">{name}</Typography>
          </Grid>
          <Grid item xs={8} md={10}>
            <DaySelector updateDay={updateDay} day={day} />
          </Grid>
        </Grid>
        {data &&
          <AreaChart width={750} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d64ffe" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} tickFormatter={numberFormatter} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#d64ffe" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        }
      </Box>
    </Container>
  )
};

export default Chart;