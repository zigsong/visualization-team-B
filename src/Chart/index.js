/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsiveBullet } from '@nivo/bullet';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveFunnel } from '@nivo/funnel';
import { ResponsiveWaffle } from '@nivo/waffle';
import { ResponsiveLine } from '@nivo/line';

const ChartBox = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
  margin: 20px auto 80px auto;
`;

const SmallChartBox = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
  margin: 0 auto;
  margin-bottom: 80px;
`;

const Chart = () => {
  // 기업 데이터 양식 순서
  // var 기업명 = [
  //   시가총액, PER, ROE, 외국인 소유 비중, 거래량 최대, 거래량 최저, 평균 거래량, 현재 거래량,
  //   현재 시가 총액, 1년 전 시가 총액, 배당성향
  //   2020년 6월 ~ 2021년 5월까지의 월간 주가 데이터(단위 : 만 원)
  // ]
  // 시가 총액은 삼성 100%(478조 1796억 기준)

  // 삼성전자 데이터
  const Samsung = [
    50,
    19.23,
    13.12,
    53.72,
    286.4,
    124,
    229.6,
    166.4,
    478,
    291,
    77.95,
    5.3,
    5.8,
    5.4,
    5.82,
    5.66,
    66.7,
    81,
    82,
    82.5,
    81.4,
    81.5,
    80.1,
  ];

  // 하이닉스
  const Skhynix = [
    18.6,
    18.75,
    17.22,
    48.95,
    120.05,
    30.62,
    68.6,
    50.2,
    89,
    60,
    16.83,
    8.51,
    8.28,
    7.51,
    8.4,
    7.99,
    9.75,
    11.85,
    12.25,
    14.15,
    13.25,
    12.8,
    12.25,
  ];

  // LG화학
  const Lgchemistry = [
    13.2,
    38.92,
    16.7,
    45.7,
    125.16,
    10.73,
    28.61,
    17.88,
    63,
    25,
    151.84,
    49,
    57,
    74,
    65.4,
    61.1,
    80,
    82.4,
    91.7,
    83.1,
    80.5,
    93.2,
    89.4,
  ];

  // 네이버
  const Naver = [
    12.3,
    59.05,
    103.41,
    56.56,
    82.8,
    14.4,
    19.5,
    21.96,
    55.4,
    35.4,
    5.92,
    26.7,
    30.1,
    32.25,
    29.65,
    29.0,
    27.75,
    29.25,
    34.3,
    37.5,
    37.7,
    35.95,
    36,
  ];

  // 삼성 바이오로직스
  const Samsungbio = [
    11.9,
    214.71,
    7.29,
    10.27,
    86.1,
    6.88,
    10.21,
    17.22,
    57.3,
    40,
    0,
    77.5,
    73.3,
    77.8,
    69,
    68.2,
    78.6,
    82.6,
    79.3,
    75,
    74.8,
    80.4,
    86.1,
  ];

  // 카카오
  // 현대차
  // 삼성SDI
  // 셀트리온
  // 기아

  // 서머리 데이터
  const summaryData = [
    {
      INDEX: '시가총액',
      선택기업1: Samsung[0],
      선택기업2: Skhynix[0],
      선택기업3: Lgchemistry[0],
    },
    {
      INDEX: 'PER',
      선택기업1: Samsung[1],
      선택기업2: Skhynix[1],
      선택기업3: Lgchemistry[1],
    },
    {
      INDEX: 'ROE',
      선택기업1: Samsung[2],
      선택기업2: Skhynix[2],
      선택기업3: Lgchemistry[2],
    },
    {
      INDEX: '외국인 비중',
      선택기업1: Samsung[3],
      선택기업2: Skhynix[3],
      선택기업3: Lgchemistry[3],
    },
  ];

  // 거래량 데이터
  const tradeData = [
    {
      id: '선택기업1',
      ranges: [Samsung[4], Samsung[5], Samsung[4] + 50],
      measures: [Samsung[7]],
      markers: [Samsung[6]],
    },
    {
      id: '선택기업2',
      ranges: [Skhynix[4], Skhynix[5], Skhynix[4] + 50],
      measures: [Skhynix[7]],
      markers: [Skhynix[6]],
    },
    {
      id: '선택기업3',
      ranges: [Lgchemistry[4], Lgchemistry[5], Lgchemistry[4] + 50],
      measures: [Lgchemistry[7]],
      markers: [Lgchemistry[6]],
    },
  ];

  // 시가총액 데이터
  const totalData = [
    {
      company: '선택기업1',
      '작년 시가총액': Samsung[8] - Samsung[9],
      friesColor: 'hsl(42, 70%, 50%)',
      '올해 성장': Samsung[9],
      donutColor: 'hsl(320, 70%, 50%)',
    },
    {
      company: '선택기업2',
      '작년 시가총액': Skhynix[8] - Skhynix[9],
      friesColor: 'hsl(301, 70%, 50%)',
      '올해 성장': Skhynix[9],
      donutColor: 'hsl(180, 70%, 50%)',
    },
    {
      company: '선택기업3',
      '작년 시가총액': Lgchemistry[8] - Lgchemistry[9],
      friesColor: 'hsl(263, 70%, 50%)',
      '올해 성장': Lgchemistry[9],
      donutColor: 'hsl(62, 70%, 50%)',
    },
  ];

  // 배당성향 데이터 3개
  const dividendData1 = [
    {
      id: 'step_sent',
      value: 100,
      label: 'Sent',
    },
    {
      id: 'step_viewed',
      value: Samsung[10],
      label: 'Viewed',
    },
  ];

  const dividendData2 = [
    {
      id: '당기순이익',
      value: 100,
      label: '당기순이익',
    },
    {
      id: '배당금총액',
      value: Skhynix[10],
      label: '배당금총액',
    },
  ];

  const dividendData3 = [
    {
      id: '단기순이익',
      value: 100,
      label: '당기순이익',
    },
    {
      id: '배당금총액',
      value: Lgchemistry[10],
      label: '배당금총액',
    },
  ];

  // 외국인 보유 비중 데이터 3개
  const foreignData1 = [
    {
      id: '내국인',
      label: '내국인',
      value: 100 - Samsung[3],
      color: '#468df3',
    },
    {
      id: '외국인',
      label: '외국인',
      value: Samsung[3],
      color: '#ba72ff',
    },
  ];

  const foreignData2 = [
    {
      id: '내국인',
      label: '내국인',
      value: 100 - Skhynix[3],
      color: '#468df3',
    },
    {
      id: '외국인',
      label: '외국인',
      value: Skhynix[3],
      color: '#ba72ff',
    },
  ];

  const foreignData3 = [
    {
      id: '내국인',
      label: '내국인',
      value: 100 - Lgchemistry[3],
      color: '#468df3',
    },
    {
      id: '외국인',
      label: '외국인',
      value: Lgchemistry[3],
      color: '#ba72ff',
    },
  ];

  // 주가데이터
  const stockData = [
    {
      id: '선택기업1',
      color: 'hsl(242, 70%, 50%)',
      data: [
        {
          x: '2020-6',
          y: Samsung[11],
        },
        {
          x: '2020-7',
          y: Samsung[12],
        },
        {
          x: '2020-8',
          y: Samsung[13],
        },
        {
          x: '2020-9',
          y: Samsung[14],
        },
        {
          x: '2020-10',
          y: Samsung[15],
        },
        {
          x: '2020-11',
          y: Samsung[16],
        },
        {
          x: '2020-12',
          y: Samsung[17],
        },
        {
          x: '2021-01',
          y: Samsung[18],
        },
        {
          x: '2021-02',
          y: Samsung[19],
        },
        {
          x: '2021-03',
          y: Samsung[20],
        },
        {
          x: '2021-04',
          y: Samsung[21],
        },
        {
          x: '2021-05',
          y: Samsung[22],
        },
      ],
    },
    {
      id: '선택기업2',
      color: 'hsl(242, 70%, 50%)',
      data: [
        {
          x: '2020-6',
          y: Skhynix[11],
        },
        {
          x: '2020-7',
          y: Skhynix[12],
        },
        {
          x: '2020-8',
          y: Skhynix[13],
        },
        {
          x: '2020-9',
          y: Skhynix[14],
        },
        {
          x: '2020-10',
          y: Skhynix[15],
        },
        {
          x: '2020-11',
          y: Skhynix[16],
        },
        {
          x: '2020-12',
          y: Skhynix[17],
        },
        {
          x: '2021-01',
          y: Skhynix[18],
        },
        {
          x: '2021-02',
          y: Skhynix[19],
        },
        {
          x: '2021-03',
          y: Skhynix[20],
        },
        {
          x: '2021-04',
          y: Skhynix[21],
        },
        {
          x: '2021-05',
          y: Skhynix[22],
        },
      ],
    },
    {
      id: '선택기업3',
      color: 'hsl(242, 70%, 50%)',
      data: [
        {
          x: '2020-6',
          y: Lgchemistry[11],
        },
        {
          x: '2020-7',
          y: Lgchemistry[12],
        },
        {
          x: '2020-8',
          y: Lgchemistry[13],
        },
        {
          x: '2020-9',
          y: Lgchemistry[14],
        },
        {
          x: '2020-10',
          y: Lgchemistry[15],
        },
        {
          x: '2020-11',
          y: Lgchemistry[16],
        },
        {
          x: '2020-12',
          y: Lgchemistry[17],
        },
        {
          x: '2021-01',
          y: Lgchemistry[18],
        },
        {
          x: '2021-02',
          y: Lgchemistry[19],
        },
        {
          x: '2021-03',
          y: Lgchemistry[20],
        },
        {
          x: '2021-04',
          y: Lgchemistry[21],
        },
        {
          x: '2021-05',
          y: Lgchemistry[22],
        },
      ],
    },
  ];

  // 서머리 차트
  const MyResponsiveRadar = ({ data }) => (
    <ResponsiveRadar
      data={data}
      keys={['선택기업1', '선택기업2', '선택기업3']}
      indexBy="INDEX"
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: 'color' }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={25}
      enableDots
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      enableDotLabel
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={{ scheme: 'pastel1' }}
      fillOpacity={0.25}
      blendMode="multiply"
      animate
      motionConfig="wobbly"
      isInteractive
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );

  // 거래량 차트
  const MyResponsiveBullet = ({ data /* see data tab */ }) => (
    <ResponsiveBullet
      data={data}
      margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
      spacing={46}
      titleAlign="start"
      titleOffsetX={-70}
      measureSize={0.2}
    />
  );

  // 시가총액 차트
  const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
      data={data}
      keys={['작년 시가총액', '올해 성장']}
      indexBy="company"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'pastel1' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate
      motionStiffness={90}
      motionDamping={15}
    />
  );

  // 배당 성향 차트 3개
  const MyResponsiveFunnel1 = ({ data /* see data tab */ }) => (
    <ResponsiveFunnel
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      valueFormat=">-.4s"
      colors={{ scheme: 'spectral' }}
      borderWidth={20}
      labelColor={{ from: 'color', modifiers: [['darker', 3]] }}
      beforeSeparatorLength={100}
      beforeSeparatorOffset={20}
      afterSeparatorLength={100}
      afterSeparatorOffset={20}
      currentPartSizeExtension={10}
      currentBorderWidth={40}
      motionConfig="wobbly"
    />
  );

  const MyResponsiveFunnel2 = ({ data /* see data tab */ }) => (
    <ResponsiveFunnel
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      valueFormat=">-.4s"
      colors={{ scheme: 'spectral' }}
      borderWidth={20}
      labelColor={{ from: 'color', modifiers: [['darker', 3]] }}
      beforeSeparatorLength={100}
      beforeSeparatorOffset={20}
      afterSeparatorLength={100}
      afterSeparatorOffset={20}
      currentPartSizeExtension={10}
      currentBorderWidth={40}
      motionConfig="wobbly"
    />
  );

  const MyResponsiveFunnel3 = ({ data /* see data tab */ }) => (
    <ResponsiveFunnel
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      valueFormat=">-.4s"
      colors={{ scheme: 'spectral' }}
      borderWidth={20}
      labelColor={{ from: 'color', modifiers: [['darker', 3]] }}
      beforeSeparatorLength={100}
      beforeSeparatorOffset={20}
      afterSeparatorLength={100}
      afterSeparatorOffset={20}
      currentPartSizeExtension={10}
      currentBorderWidth={40}
      motionConfig="wobbly"
    />
  );

  // 외국인 보유 비중 차트 3개
  const MyResponsiveWaffle1 = ({ data /* see data tab */ }) => (
    <ResponsiveWaffle
      data={data}
      total={100}
      rows={18}
      columns={14}
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      colors={{ scheme: 'pastel1' }}
      borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
      animate
      motionStiffness={90}
      motionDamping={11}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          justify: false,
          translateX: -100,
          translateY: 0,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          itemTextColor: '#777',
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
                itemBackground: '#f7fafb',
              },
            },
          ],
        },
      ]}
    />
  );

  const MyResponsiveWaffle2 = ({ data /* see data tab */ }) => (
    <ResponsiveWaffle
      data={data}
      total={100}
      rows={18}
      columns={14}
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      colors={{ scheme: 'pastel1' }}
      borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
      animate
      motionStiffness={90}
      motionDamping={11}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          justify: false,
          translateX: -100,
          translateY: 0,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          itemTextColor: '#777',
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
                itemBackground: '#f7fafb',
              },
            },
          ],
        },
      ]}
    />
  );

  const MyResponsiveWaffle3 = ({ data /* see data tab */ }) => (
    <ResponsiveWaffle
      data={data}
      total={100}
      rows={18}
      columns={14}
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      colors={{ scheme: 'pastel1' }}
      borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
      animate
      motionStiffness={90}
      motionDamping={11}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          justify: false,
          translateX: -100,
          translateY: 0,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          itemTextColor: '#777',
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
                itemBackground: '#f7fafb',
              },
            },
          ],
        },
      ]}
    />
  );

  // 주가 차트
  const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <>
      <h1>주요 지표 요약</h1>
      <ChartBox>
        <MyResponsiveRadar data={summaryData} />
      </ChartBox>
      <h1>거래량 차트</h1>
      <h3>(현재 주가로 보정)</h3>
      <ChartBox>
        <MyResponsiveBullet data={tradeData} />
      </ChartBox>
      <h1>시가총액</h1>
      <h3>(단위 : 조 원)</h3>
      <ChartBox>
        <MyResponsiveBar data={totalData} />
      </ChartBox>
      <h1>배당 성향</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SmallChartBox>
          <h3>선택기업1</h3>
          <MyResponsiveFunnel1 data={dividendData1} />
        </SmallChartBox>
        <SmallChartBox>
          <h3>선택기업2</h3>
          <MyResponsiveFunnel2 data={dividendData2} />
        </SmallChartBox>
        <SmallChartBox>
          <h3>선택기업3</h3>
          <MyResponsiveFunnel3 data={dividendData3} />
        </SmallChartBox>
      </div>
      <h1>외국인 보유 비중</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SmallChartBox>
          <h3>선택기업1</h3>
          <MyResponsiveWaffle1 data={foreignData1} />
        </SmallChartBox>
        <SmallChartBox>
          <h3>선택기업2</h3>
          <MyResponsiveWaffle2 data={foreignData2} />
        </SmallChartBox>
        <SmallChartBox>
          <h3>선택기업3</h3>
          <MyResponsiveWaffle3 data={foreignData3} />
        </SmallChartBox>
      </div>
      <br />
      <br />
      <h1>최근 1년 간 주가</h1>
      <h3>(단위 : 만 원)</h3>
      <ChartBox>
        <MyResponsiveLine data={stockData} />
      </ChartBox>
    </>
  );
};

export default Chart;
