/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveFunnel } from '@nivo/funnel';
import { ResponsiveWaffle } from '@nivo/waffle';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import { ResponsivePie } from '@nivo/pie';
import pointerImg from '../assets/pointer.png';
import HighlightText from '../HighlightText';

const Container = styled.div`
  /* visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)}; */
  background-color: ${({ clear }) => clear && '#fff'};
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 1s ease;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.15rem;
  line-height: 1.75rem;
`;

const Pointer = styled.img`
  width: 40px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  transition: transform 0.4s;
`;

const TransactionTitle = styled.h2`
  font-size: 1.5rem;
  transform: translateY(80px);
`;

const ScrollToTop = styled.div`
  font-size: 1.25rem;
  padding: 8px 12px;
  border-bottom: 1px solid #333;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  transition: transform 0.4s;
`;

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

const Chart = ({ corporations }) => {
  const chart_1 = useRef(null);
  const chart_2 = useRef(null);
  const chart_3 = useRef(null);
  const chart_4 = useRef(null);
  const chart_5 = useRef(null);
  const chart_6 = useRef(null);
  const chart_7 = useRef(null);

  const chartRefs = [
    chart_1,
    chart_2,
    chart_3,
    chart_4,
    chart_5,
    chart_6,
    chart_7,
  ];

  const [visibleCharts, setVisibleCharts] = useState([]);

  // ?????? ????????? ?????? ??????
  // const ????????? = [
  //   ????????????, PER, ROE, ????????? ?????? ??????, ????????? ??????, ????????? ??????, ?????? ?????????, ?????? ?????????,
  //   ?????? ?????? ??????, 1??? ??? ?????? ??????, ????????????
  //   2020??? 6??? ~ 2021??? 5???????????? ?????? ?????? ?????????(?????? : ??? ???)
  // ]
  // ?????? ????????? ?????? 100%(478??? 1796??? ??????)

  const corpData = {
    //???????????? ?????????
    Samsung: [
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
      6.67,
      8.1,
      8.2,
      8.25,
      8.14,
      8.15,
      8.01,
      59.7,
      18.06,
      51.7,
      43.7,
      40.17,
      42.63,
      32.7,
      49.6,
      53,
      76.5,
      43.3,
      38.8,
      37.3,
      26.4,
      36.8,
    ],

    //????????????
    Skhynix: [
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
      7.28,
      18.2,
      9.16,
      7.35,
      8.84,
      8.55,
      6.2,
      7.47,
      9.66,
      12.77,
      10.2,
      10.54,
      7.56,
      6,
      9.61,
    ],

    //LG??????
    Lgchemistry: [
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
      0.7,
      45.33,
      1.5,
      1.03,
      1.87,
      1.85,
      0.88,
      1.15,
      0.81,
      1.15,
      0.8,
      1.11,
      0.87,
      0.36,
      3.6,
    ],

    //?????????
    Naver: [
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
      1.64,
      2.64,
      2.85,
      2.1,
      1.72,
      1.38,
      1.88,
      1.35,
      3.22,
      2,
      2.27,
      1.32,
      0.96,
      14.9,
    ],

    //?????? ??????????????????
    Samsungbio: [
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
      0.66,
      95.77,
      0.71,
      0.44,
      0.5,
      0.24,
      0.22,
      0.356,
      0.355,
      0.435,
      0.017,
      0.017,
      0.022,
      0.445,
      0.33,
    ],

    //????????? ?????????
    Kakao: [
      10.86,
      329.58,
      11.69,
      32.69,
      0,
      0,
      0,
      0,
      51.93,
      18.85,
      8.29,
      5.37,
      6.9,
      8.17,
      7.32,
      6.62,
      7.4,
      7.81,
      8.85,
      9.8,
      10,
      11.35,
      11.7,
      4.44,
      95.77,
      2.77,
      3.1,
      2.8,
      1.67,
      1,
      1.34,
      1.35,
      2.17,
      1.43,
      1.21,
      7.1,
      3.15,
      0.83,
    ],

    //???????????????
    Hyundai: [
      10,
      44.23,
      7.72,
      29.89,
      0,
      0,
      0,
      0,
      48.6,
      19.89,
      55.15,
      9.77,
      12.65,
      17.65,
      17.85,
      16.45,
      18.15,
      19.2,
      22.9,
      23.7,
      21.8,
      21.2,
      22.75,
      2.13,
      3.53,
      5.04,
      7.9,
      5.2,
      4.2,
      4.16,
      4,
      9.85,
      3,
      2.32,
      2.07,
      1.44,
      6.01,
    ],

    //??????SDI
    SamsungSDI: [
      9.24,
      62.98,
      7.41,
      42.4,
      0,
      0,
      0,
      0,
      44.2,
      21.28,
      11.65,
      36.35,
      39.75,
      45.25,
      43.35,
      44.2,
      53.3,
      62.8,
      73.4,
      67.4,
      66,
      65.4,
      64.3,
      0.68,
      34.27,
      1.56,
      1.12,
      1.53,
      0.8,
      0.6,
      1.21,
      0.78,
      1.3,
      0.72,
      0.95,
      0.7,
      0.38,
      1.09,
    ],

    //???????????? ?????????
    cell: [
      7.8,
      61.6,
      21.87,
      20.59,
      0,
      0,
      0,
      0,
      37.31,
      29,
      0.52,
      30,
      29,
      29,
      25.3,
      23.7,
      33.4,
      35.9,
      32.4,
      29.75,
      32.45,
      26.6,
      26.85,
      1.38,
      112.79,
      4.5,
      2.4,
      2.1,
      2.2,
      1.34,
      3.5,
      5.3,
      3.6,
      2.6,
      1.42,
      1.5,
      1.2,
      0.82,
    ],

    //?????? ?????????
    kia: [
      7,
      14.86,
      12.75,
      32.45,
      0,
      0,
      0,
      0,
      33.52,
      12,
      26.95,
      3.19,
      4,
      4.2,
      4.7,
      5,
      5.8,
      6.24,
      8.25,
      7.94,
      8.29,
      7.7,
      8.27,
      4,
      34.27,
      4.37,
      4.66,
      4.84,
      4.37,
      5.62,
      5.44,
      4.59,
      18.4,
      17.7,
      8.3,
      6.4,
      3.43,
      4.05,
    ],

    //?????????
    Posco: [
      29.76,
      13.03,
      8.52,
      53.96,
      0,
      0,
      0,
      0,
      29.76,
      17.3,
      38.72,
      17.4,
      19.35,
      18.45,
      19.6,
      20.8,
      23.4,
      27.2,
      24.55,
      28.15,
      32,
      36.4,
      35.5,
      0.87,
      21.68,
      0.95,
      0.81,
      0.71,
      0.72,
      0.78,
      0.75,
      0.83,
      1.02,
      0.73,
      1.73,
      1,
      11.4,
      4.22,
    ],
    //???????????????
    Mobis: [
      27.25,
      15.34,
      7.85,
      36.48,
      0,
      0,
      0,
      0,
      27.25,
      30.39,
      24.2,
      19.2,
      20.55,
      22.4,
      23,
      22.5,
      24.4,
      25.5,
      31.75,
      30.3,
      29.2,
      27,
      28,
      0.94,
      28.31,
      0.83,
      0.92,
      1.12,
      0.88,
      1.047,
      0.86,
      0.89,
      2.8,
      1.32,
      0.9,
      1.14,
      0.72,
      2.66,
    ],

    //?????? ??????
    SamsungMul: [
      26.16,
      16.68,
      5.02,
      14.78,
      0,
      0,
      0,
      0,
      26.16,
      21.02,
      36.64,
      11.6,
      10.6,
      10.8,
      10.5,
      11,
      12,
      13.8,
      13,
      12.15,
      12.45,
      13.6,
      13.85,
      1.86,
      17.38,
      2.11,
      0.9,
      1.78,
      1.03,
      2.03,
      1.35,
      1.96,
      2.87,
      1.23,
      0.99,
      1.54,
      0.94,
      1.74,
    ],

    //SK ???????????????
    SkIno: [
      25.38,
      29.87,
      5.76,
      23.03,
      0,
      0,
      0,
      0,
      25.38,
      11.6,
      0,
      13.1,
      12.7,
      14.5,
      13.9,
      12.55,
      17.3,
      19,
      28,
      26,
      21.9,
      27,
      26.5,
      0.92,
      281.13,
      2.1,
      1.5,
      4,
      1.78,
      0.68,
      2.3,
      1.9,
      4.52,
      3.25,
      2.24,
      2.56,
      1.89,
      0.86,
    ],
    //LG ??????
    LgElectro: [
      24.6,
      14.02,
      17.95,
      30.49,
      0,
      0,
      0,
      0,
      24.6,
      10.9,
      11.02,
      6.32,
      7.07,
      8.42,
      9.17,
      8.4,
      8.55,
      13.5,
      15.3,
      14.65,
      15,
      15.75,
      15.2,
      1.63,
      14.86,
      2.4,
      2.2,
      3.2,
      2.6,
      1.7,
      1.8,
      8.36,
      10.8,
      4.87,
      3.32,
      4.5,
      1.84,
      3.22,
    ],
    //LG????????????
    LgLife: [
      23.69,
      32.7,
      18.04,
      45.32,
      0,
      0,
      0,
      0,
      23.69,
      21.46,
      23.12,
      134.6,
      137.1,
      147.3,
      144.8,
      150,
      151.4,
      162,
      155.7,
      151.3,
      157,
      153.9,
      155.9,
      0.15,
      65.67,
      0.095,
      0.092,
      0.076,
      0.05,
      0.05,
      0.061,
      0.068,
      0.1,
      0.061,
      0.075,
      0.062,
      0.06,
      0.93,
    ],
    //KB ??????
    Kb: [
      23.66,
      5.92,
      9.37,
      68.9,
      0,
      0,
      0,
      0,
      23.66,
      16,
      19.96,
      3.39,
      3.52,
      3.68,
      3.75,
      4,
      4.53,
      4.34,
      4.03,
      4.38,
      5.62,
      5.47,
      5.88,
      4.15,
      5.55,
      6.49,
      4.22,
      4.94,
      3.24,
      3.86,
      4.36,
      3.9,
      5.8,
      4.1,
      5.78,
      3.85,
      3.17,
      4.15,
    ],
    //SK ?????????
    Skt: [
      23.6,
      15.08,
      9.19,
      92.89,
      0,
      0,
      0,
      0,
      23.6,
      17.84,
      47.53,
      21.1,
      22,
      24.8,
      23.8,
      21.4,
      23.75,
      23.8,
      24.4,
      24.75,
      27.5,
      30.35,
      31.7,
      0.72,
      13.48,
      0.7,
      0.87,
      1.5,
      0.6,
      0.56,
      0.73,
      0.67,
      1.2,
      0.72,
      0.7,
      0.66,
      0.6,
      2.24,
    ],
    //????????????
    Shinhan: [
      21.77,
      5.91,
      8.8,
      60.75,
      0,
      0,
      0,
      0,
      21.77,
      16.67,
      23.54,
      2.87,
      3.01,
      2.96,
      2.76,
      3.03,
      3.22,
      3.2,
      3,
      3.29,
      3.74,
      4,
      4.24,
      5.16,
      5.55,
      6.11,
      3.73,
      4.56,
      4.21,
      5.97,
      7.17,
      6,
      7.51,
      4.28,
      6.12,
      3.67,
      3.25,
      4.08,
    ],
    //SK
    Sk: [
      18.9,
      31.33,
      7.14,
      20.39,
      0,
      0,
      0,
      0,
      18.9,
      17.8,
      195.45,
      29.1,
      22.15,
      21.4,
      19.85,
      18.25,
      21.15,
      24.05,
      31.1,
      26.25,
      28.2,
      27.6,
      26.5,
      0.7,
      17.38,
      2.53,
      1.74,
      0.71,
      0.44,
      0.27,
      0.66,
      0.8,
      1.96,
      0.82,
      0.78,
      0.72,
      0.4,
      2.81,
    ],
    //???????????????
    Nc: [
      18.8,
      39.84,
      21.95,
      52.01,
      0,
      0,
      0,
      0,
      18.8,
      17.56,
      30,
      89.1,
      81.1,
      82.5,
      80.6,
      77.6,
      81,
      93.1,
      95.3,
      93.6,
      87.3,
      83,
      86.8,
      0.22,
      32.89,
      0.22,
      0.33,
      0.29,
      0.18,
      0.2,
      0.2,
      0.22,
      0.25,
      0.23,
      0.24,
      0.18,
      0.18,
      0.72,
    ],
    //?????? ??????
    KoreaElectro: [
      16.8,
      8.19,
      2.91,
      15.9,
      0,
      0,
      0,
      0,
      16.8,
      14.47,
      39.2,
      1.95,
      1.91,
      2.05,
      2.04,
      1.99,
      2.14,
      2.74,
      2.28,
      2.27,
      2.31,
      2.36,
      2.58,
      6.41,
      9.78,
      6,
      6.59,
      11.23,
      5.65,
      5.74,
      8.95,
      20.73,
      11.22,
      6.38,
      7.19,
      5.77,
      8.81,
      0,
    ],
    //?????? ??????
    SamsungLife: [
      16.5,
      7.77,
      4.32,
      13.25,
      0,
      0,
      0,
      0,
      16.5,
      10.06,
      35.47,
      4.47,
      4.75,
      6.12,
      6.1,
      6.32,
      7.13,
      7.91,
      7.06,
      7.5,
      7.81,
      8.17,
      8.38,
      2,
      7.56,
      1.37,
      0.88,
      3.61,
      1.56,
      1.34,
      1.53,
      1.43,
      2.09,
      1.1,
      1.08,
      1.02,
      1.1,
      1.81,
    ],
    //??????????????????
    Amore: [
      16.4,
      196.64,
      8.48,
      33.72,
      0,
      0,
      0,
      0,
      16.4,
      10.29,
      156.13,
      16.75,
      16.6,
      16.8,
      16.4,
      15.8,
      17.9,
      20.6,
      22.3,
      23.45,
      25.85,
      27,
      28.7,
      0.58,
      65.67,
      1.03,
      0.61,
      0.89,
      0.41,
      0.41,
      0.76,
      0.58,
      0.76,
      0.51,
      0.49,
      0.42,
      0.44,
      0.37,
    ],
    //LG
    LG: [
      15.4,
      8.98,
      7.5,
      33.3,
      0,
      0,
      0,
      0,
      15.4,
      12.5,
      29.99,
      6.72,
      6.99,
      7.81,
      7,
      6.4,
      6.67,
      8.26,
      9.36,
      8.87,
      8.54,
      11.95,
      10.1,
      1.57,
      17.38,
      0.86,
      0.64,
      0.9,
      0.62,
      0.45,
      0.83,
      1.97,
      2.27,
      0.98,
      0.85,
      1.29,
      0.36,
      2.31,
    ],
    //HMM
    Hmm: [
      15.1,
      41.47,
      96.66,
      12.67,
      0,
      0,
      0,
      0,
      15.1,
      1.67,
      0,
      0.47,
      0.58,
      0.57,
      0.72,
      0.9,
      1.33,
      1.39,
      1.36,
      1.9,
      2.9,
      3.92,
      4.79,
      3.45,
      42.22,
      11.1,
      5.39,
      10,
      12,
      12.5,
      29.5,
      15.1,
      18.2,
      15.7,
      40.2,
      21.78,
      31.6,
      3.88,
    ],
    //?????? sds
    SamsungSDS: [
      14.4,
      22.87,
      10.43,
      11.61,
      0,
      0,
      0,
      0,
      14.4,
      14.2,
      41.86,
      16.85,
      16.65,
      15.75,
      16.95,
      16.85,
      17.3,
      17.85,
      19.55,
      19.45,
      19.35,
      18.3,
      18.15,
      0.77,
      22.65,
      0.4,
      0.28,
      0.35,
      0.5,
      0.4,
      0.36,
      0.41,
      1.18,
      0.42,
      0.29,
      0.32,
      0.24,
      0.74,
    ],
    //?????? ?????? ??????
    Hana: [
      13.8,
      4.91,
      9.43,
      68.71,
      0,
      0,
      0,
      0,
      13.8,
      9.28,
      20.45,
      2.7,
      2.95,
      2.82,
      2.81,
      3.04,
      3.385,
      3.45,
      3.265,
      3.7,
      4.28,
      4.565,
      4.655,
      3,
      5.55,
      4.6,
      3.58,
      3.51,
      2.42,
      3.7,
      4.32,
      3.37,
      5.28,
      3.5,
      4,
      2.67,
      2.5,
      3.03,
    ],

    //?????? ??????
    SamsungElectro: [
      13.34,
      19.2,
      14.97,
      31,
      0,
      0,
      0,
      0,
      13.34,
      9.6,
      17.54,
      12.9,
      14.05,
      12.45,
      13.9,
      13.35,
      15.6,
      17.8,
      20.4,
      18.95,
      18.75,
      17.9,
      17.05,
      0.747,
      31.35,
      1.5,
      1.4,
      1.06,
      1.46,
      0.78,
      1.43,
      1.42,
      2.2,
      1,
      1.1,
      0.92,
      1.29,
      0.96,
    ],
    //?????????
    Netmarble: [
      11,
      37.68,
      5.83,
      23.34,
      0,
      0,
      0,
      0,
      11.9,
      8.39,
      20.05,
      10.15,
      12.8,
      16.65,
      16.6,
      11.7,
      12.5,
      13.15,
      13.15,
      12.35,
      12.9,
      12.95,
      13.95,
      0.86,
      32.89,
      0.87,
      0.83,
      1.62,
      1.3,
      2.24,
      1.2,
      0.75,
      0.66,
      1.28,
      0.885,
      0.44,
      0.84,
      0.35,
    ],
  };

  const corp1 = corpData[corporations[0]['eng']];
  const corp2 = corpData[corporations[1]['eng']];
  const corp3 = corpData[corporations[2]['eng']];

  //????????? ?????????
  const summaryData = [
    {
      INDEX: '?????????',
      [corporations[0].name]: Math.round((corp1[8] / corp1[9]) * 100 - 100),
      [corporations[1].name]: Math.round((corp2[8] / corp2[9]) * 100 - 100),
      [corporations[2].name]: Math.round((corp3[8] / corp3[9]) * 100 - 100),
    },
    {
      INDEX: 'PER',
      [corporations[0].name]: corp1[1],
      [corporations[1].name]: corp2[1],
      [corporations[2].name]: corp3[1],
    },
    {
      INDEX: 'ROE',
      [corporations[0].name]: corp1[2],
      [corporations[1].name]: corp2[2],
      [corporations[2].name]: corp3[2],
    },
    {
      INDEX: '????????? ??????',
      [corporations[0].name]: corp1[3],
      [corporations[1].name]: corp2[3],
      [corporations[2].name]: corp3[3],
    },
  ];

  function chooseColor(data, company) {
    var total = 0;
    for (let i = 0; i < 12; i++) {
      total += company[i];
    }
    total = total / 12;
    if (data < total / 2) {
      return 'hsl(26,100%,93%)';
    } else if (data > total / 2 && data < total) {
      return 'hsl(26,100%,65%)';
    } else if (data > total && data < (total * 3) / 2) {
      return 'hsl(0,100%,73%)';
    } else {
      return 'hsl(0,100%,50%)';
    }
  }

  // ????????? ????????? ?????? ?????????/??????????????????/??????????????????
  const totalCount = 12;

  const corpTradeData = (corp) => corp.slice(25, 37);

  const meanTradeVol = (corp) =>
    (
      corpTradeData(corp).reduce((acc, curr) => acc + curr) / totalCount
    ).toFixed(2);

  // dataset: tradeData1, 2, 3
  const maxTradeDate = (corp, dataset) => {
    const maxVal = Math.max(...corpTradeData(corp));

    return Object.keys(dataset[0])
      .find((month) => dataset[0][month] === maxVal)
      .replace('-', '??? ');
  };

  const minTradeDate = (corp, dataset) => {
    const minVal = Math.min(...corpTradeData(corp));

    return Object.keys(dataset[0])
      .find((month) => dataset[0][month] === minVal)
      .replace('-', '???');
  };

  // ????????? ?????????
  var tradeData1 = [
    {
      country: '?????????',
      '2020-06': corp1[25],
      'hot dogColor': chooseColor(corp1[25], corp1),
      '2020-07': corp1[26],
      burgerColor: chooseColor(corp1[26], corp1),
      '2020-08': corp1[27],
      sandwichColor: chooseColor(corp1[27], corp1),
      '2020-09': corp1[28],
      kebabColor: chooseColor(corp1[28], corp1),
      '2020-10': corp1[29],
      friesColor: chooseColor(corp1[29], corp1),
      '2020-11': corp1[30],
      donutColor: chooseColor(corp1[30], corp1),
      '2020-12': corp1[31],
      junkColor: chooseColor(corp1[31], corp1),
      '2021-01': corp1[32],
      sushiColor: chooseColor(corp1[32], corp1),
      '2021-02': corp1[33],
      ramenColor: chooseColor(corp1[33], corp1),
      '2021-03': corp1[34],
      curryColor: chooseColor(corp1[34], corp1),
      '2021-04': corp1[35],
      udonColor: chooseColor(corp1[35], corp1),
      '2021-05': corp1[36],
      udonColor: chooseColor(corp1[36], corp1),
    },
  ];

  var tradeData2 = [
    {
      country: '?????????',
      '2020-06': corp2[25],
      'hot dogColor': chooseColor(corp2[25], corp2),
      '2020-07': corp2[26],
      burgerColor: chooseColor(corp2[26], corp2),
      '2020-08': corp2[27],
      sandwichColor: chooseColor(corp2[27], corp2),
      '2020-09': corp2[28],
      kebabColor: chooseColor(corp2[28], corp2),
      '2020-10': corp2[29],
      friesColor: chooseColor(corp2[29], corp2),
      '2020-11': corp2[30],
      donutColor: chooseColor(corp2[30], corp2),
      '2020-12': corp2[31],
      junkColor: chooseColor(corp2[31], corp2),
      '2021-01': corp2[32],
      sushiColor: chooseColor(corp2[32], corp2),
      '2021-02': corp2[33],
      ramenColor: chooseColor(corp2[33], corp2),
      '2021-03': corp2[34],
      curryColor: chooseColor(corp2[34], corp2),
      '2021-04': corp2[35],
      udonColor: chooseColor(corp2[35], corp2),
      '2021-05': corp2[36],
      udonColor: chooseColor(corp2[36], corp2),
    },
  ];

  var tradeData3 = [
    {
      country: '?????????',
      '2020-06': corp3[25],
      'hot dogColor': chooseColor(corp3[25], corp3),
      '2020-07': corp3[26],
      burgerColor: chooseColor(corp3[26], corp3),
      '2020-08': corp3[27],
      sandwichColor: chooseColor(corp3[27], corp3),
      '2020-09': corp3[28],
      kebabColor: chooseColor(corp3[28], corp3),
      '2020-10': corp3[29],
      friesColor: chooseColor(corp3[29], corp3),
      '2020-11': corp3[30],
      donutColor: chooseColor(corp3[30], corp3),
      '2020-12': corp3[31],
      junkColor: chooseColor(corp3[31], corp3),
      '2021-01': corp3[32],
      sushiColor: chooseColor(corp3[32], corp3),
      '2021-02': corp3[33],
      ramenColor: chooseColor(corp3[33], corp3),
      '2021-03': corp3[34],
      curryColor: chooseColor(corp3[34], corp3),
      '2021-04': corp3[35],
      udonColor: chooseColor(corp3[35], corp3),
      '2021-05': corp3[36],
      udonColor: chooseColor(corp3[36], corp3),
    },
  ];

  // ???????????? ??????
  // corporations[0], [1], [2]
  const bestTotalCorporation = () => {
    const maxTotal = Math.max(corp1[8], corp2[8], corp3[8]);
    const bestCorporation = corporations.find(
      (corporation) => corpData[corporation['eng']][8] === maxTotal
    );

    return bestCorporation;
  };

  const growthRate = () => {
    const maxTotal = Math.max(corp1[8], corp2[8], corp3[8]);
    const bestCorp = [corp1, corp2, corp3].find((corp) => corp[8] === maxTotal);

    return (bestCorp[8] - bestCorp[9]).toFixed(2);
  };

  const restCorps = () => {
    const bestCorporation = bestTotalCorporation();

    return corporations
      .filter((corporation) => corporation.id !== bestCorporation.id)
      .map((corporation) => corporation.name)
      .join(', ');
  };

  // ???????????? ?????????
  var totalData = [
    {
      company: corporations[0].name,
      '?????? ????????????': corp1[8] - corp1[9],
      friesColor: 'hsl(42, 70%, 50%)',
      '?????? ??????': corp1[9],
      donutColor: 'hsl(320, 70%, 50%)',
    },
    {
      company: corporations[1].name,
      '?????? ????????????': corp2[8] - corp2[9],
      friesColor: 'hsl(301, 70%, 50%)',
      '?????? ??????': corp2[9],
      donutColor: 'hsl(180, 70%, 50%)',
    },
    {
      company: corporations[2].name,
      '?????? ????????????': corp3[8] - corp3[9],
      friesColor: 'hsl(263, 70%, 50%)',
      '?????? ??????': corp3[9],
      donutColor: 'hsl(62, 70%, 50%)',
    },
  ];

  // ???????????? ??????
  const bestDividend = () => {
    const maxTotal = Math.max(corp1[10], corp2[10], corp3[10]);
    const bestCorporation = corporations.find(
      (corporation) => corpData[corporation['eng']][10] === maxTotal
    );

    return bestCorporation;
  };

  // ???????????? ????????? 3???
  var dividendData1 = [
    {
      id: 'step_sent',
      value: 100 * corp1[37],
      label: 'Sent',
    },
    {
      id: 'step_viewed',
      value: corp1[10],
      label: 'Viewed',
    },
  ];

  var dividendData2 = [
    {
      id: '???????????????',
      value: 100 * corp2[37],
      label: '???????????????',
    },
    {
      id: '???????????????',
      value: corp2[10],
      label: '???????????????',
    },
  ];

  var dividendData3 = [
    {
      id: '???????????????',
      value: 100 * corp3[37],
      label: '???????????????',
    },
    {
      id: '???????????????',
      value: corp3[10],
      label: '???????????????',
    },
  ];

  // PER ??????
  const getPotential = (corp) => corp[1] / corp[24];

  const bestPotential = () => {
    const minEvaluated = Math.min(
      getPotential(corp1),
      getPotential(corp2),
      getPotential(corp3)
    );
    const bestCorporation = corporations.find(
      (corporation) =>
        getPotential(corpData[corporation['eng']]) === minEvaluated
    );

    return bestCorporation;
  };
  // PER ?????????
  var per1 = [
    {
      id: '?????? PER',
      label: '?????? PER',
      value: corp1[1],
      color: 'hsl(345, 70%, 50%)',
    },
    {
      id: '???????????? PER',
      label: '???????????? PER',
      value: corp1[24],
      color: 'hsl(120, 70%, 50%)',
    },
  ];

  var per2 = [
    {
      id: '?????? PER',
      label: '?????? PER',
      value: corp2[1],
      color: 'hsl(345, 70%, 50%)',
    },
    {
      id: '???????????? PER',
      label: '???????????? PER',
      value: corp2[24],
      color: 'hsl(120, 70%, 50%)',
    },
  ];

  var per3 = [
    {
      id: '?????? PER',
      label: '?????? PER',
      value: corp3[1],
      color: 'hsl(345, 70%, 50%)',
    },
    {
      id: '???????????? PER',
      label: '???????????? PER',
      value: corp3[24],
      color: 'hsl(120, 70%, 50%)',
    },
  ];

  // ????????? ?????? ?????? ??????
  const bestForeign = () => {
    const maxTotal = Math.max(corp1[3], corp2[3], corp3[3]);
    const bestCorporation = corporations.find(
      (corporation) => corpData[corporation['eng']][3] === maxTotal
    );

    return bestCorporation;
  };

  // ????????? ?????? ?????? ????????? 3???
  var foreignData1 = [
    {
      id: '?????????',
      label: '?????????',
      value: 100 - corp1[3],
      color: '#468df3',
    },
    {
      id: '?????????',
      label: '?????????',
      value: corp1[3],
      color: '#ba72ff',
    },
  ];

  var foreignData2 = [
    {
      id: '?????????',
      label: '?????????',
      value: 100 - corp2[3],
      color: '#468df3',
    },
    {
      id: '?????????',
      label: '?????????',
      value: corp2[3],
      color: '#ba72ff',
    },
  ];

  var foreignData3 = [
    {
      id: '?????????',
      label: '?????????',
      value: 100 - corp3[3],
      color: '#468df3',
    },
    {
      id: '?????????',
      label: '?????????',
      value: corp3[3],
      color: '#ba72ff',
    },
  ];

  //???????????????
  var stockData = [
    {
      id: corporations[0].name,
      color: 'hsl(242, 70%, 50%)',
      data: [
        {
          x: '2020-6',
          y: corp1[11],
        },
        {
          x: '2020-7',
          y: corp1[12],
        },
        {
          x: '2020-8',
          y: corp1[13],
        },
        {
          x: '2020-9',
          y: corp1[14],
        },
        {
          x: '2020-10',
          y: corp1[15],
        },
        {
          x: '2020-11',
          y: corp1[16],
        },
        {
          x: '2020-12',
          y: corp1[17],
        },
        {
          x: '2021-01',
          y: corp1[18],
        },
        {
          x: '2021-02',
          y: corp1[19],
        },
        {
          x: '2021-03',
          y: corp1[20],
        },
        {
          x: '2021-04',
          y: corp1[21],
        },
        {
          x: '2021-05',
          y: corp1[22],
        },
      ],
    },
    {
      id: corporations[1].name,
      color: 'hsl(242, 70%, 50%)',
      data: [
        {
          x: '2020-6',
          y: corp2[11],
        },
        {
          x: '2020-7',
          y: corp2[12],
        },
        {
          x: '2020-8',
          y: corp2[13],
        },
        {
          x: '2020-9',
          y: corp2[14],
        },
        {
          x: '2020-10',
          y: corp2[15],
        },
        {
          x: '2020-11',
          y: corp2[16],
        },
        {
          x: '2020-12',
          y: corp2[17],
        },
        {
          x: '2021-01',
          y: corp2[18],
        },
        {
          x: '2021-02',
          y: corp2[19],
        },
        {
          x: '2021-03',
          y: corp2[20],
        },
        {
          x: '2021-04',
          y: corp2[21],
        },
        {
          x: '2021-05',
          y: corp2[22],
        },
      ],
    },
    {
      id: corporations[2].name,
      color: 'hsl(242, 70%, 50%)',
      data: [
        {
          x: '2020-6',
          y: corp3[11],
        },
        {
          x: '2020-7',
          y: corp3[12],
        },
        {
          x: '2020-8',
          y: corp3[13],
        },
        {
          x: '2020-9',
          y: corp3[14],
        },
        {
          x: '2020-10',
          y: corp3[15],
        },
        {
          x: '2020-11',
          y: corp3[16],
        },
        {
          x: '2020-12',
          y: corp3[17],
        },
        {
          x: '2021-01',
          y: corp3[18],
        },
        {
          x: '2021-02',
          y: corp3[19],
        },
        {
          x: '2021-03',
          y: corp3[20],
        },
        {
          x: '2021-04',
          y: corp3[21],
        },
        {
          x: '2021-05',
          y: corp3[22],
        },
      ],
    },
  ];

  //????????? ??????
  const MyResponsiveRadar = ({ data /* see data tab */ }) => (
    <ResponsiveRadar
      data={data}
      keys={corporations.map((corporation) => corporation.name)}
      indexBy="INDEX"
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: 'color' }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={25}
      enableDots={true}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={{ scheme: 'pastel1' }}
      fillOpacity={0.25}
      blendMode="multiply"
      animate={true}
      motionConfig="wobbly"
      isInteractive={true}
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

  //????????? ??????
  const MyResponsiveHeatMap = ({ data /* see data tab */ }) => (
    <ResponsiveHeatMap
      data={data}
      keys={[
        '2020-06',
        '2020-07',
        '2020-08',
        '2020-09',
        '2020-10',
        '2020-11',
        '2020-12',
        '2021-01',
        '2021-02',
        '2021-03',
        '2021-04',
        '2021-05',
      ]}
      indexBy="country"
      // margin={{ right: 60, left: 60 }}
      forceSquare={true}
      axisTop={{
        orient: 'top',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: '',
        legendOffset: 36,
      }}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      cellOpacity={1}
      cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
      defs={[
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(0, 0, 0, 0.1)',
          rotation: -45,
          lineWidth: 4,
          spacing: 7,
        },
      ]}
      fill={[{ id: 'lines' }]}
      animate={true}
      motionConfig="wobbly"
      motionStiffness={80}
      motionDamping={9}
      hoverTarget="cell"
      cellHoverOthersOpacity={0.25}
    />
  );

  //???????????? ??????
  const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
      data={data}
      keys={['?????? ????????????', '?????? ??????']}
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
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );

  //?????? ?????? ?????? 3???
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
      colors={{ scheme: 'yellow_orange_red' }}
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
      colors={{ scheme: 'blues' }}
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

  //PER ??????
  // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.
  const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.1}
      padAngle={8}
      cornerRadius={32}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'pastel1' }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
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

  //????????? ?????? ?????? ?????? 3???
  const MyResponsiveWaffle1 = ({ data /* see data tab */ }) => (
    <ResponsiveWaffle
      data={data}
      total={100}
      rows={18}
      columns={14}
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      colors={{ scheme: 'pastel1' }}
      borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
      animate={true}
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
      animate={true}
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
      animate={true}
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

  //?????? ??????
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
      useMesh={true}
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

  const moveNextChart = (chartRef) => {
    chartRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollPointer = (chartNumber) => (
    <Pointer
      src={pointerImg}
      alt="pointer"
      onClick={() => moveNextChart(chartNumber)}
    />
  );

  // const onIntersect = async (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       observer.unobserve(entry.target);
  //       console.log(entry.target);
  //       setVisibleCharts((prevVisibleCharts) => [
  //         ...prevVisibleCharts,
  //         entry.target,
  //       ]);
  //       observer.observe(entry.target);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   console.log(chartRefs[0].current);
  //   const observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });

  //   chartRefs.forEach((chartRef) => observer.observe(chartRef.current));

  //   return () => observer.disconnect();
  // }, []);

  return (
    <>
      <Container
        ref={chart_1}
        visible={visibleCharts.includes(chart_1.current)}
      >
        <h1>?????? ?????? ??????</h1>
        <ChartBox>
          <MyResponsiveRadar data={summaryData} />
        </ChartBox>
        {scrollPointer(chart_2)}
      </Container>

      <Container
        clear={true}
        ref={chart_2}
        visible={visibleCharts.includes(chart_2.current)}
      >
        <h1>????????? ??????</h1>
        <h3 style={{ marginBottom: '24px' }}>(?????? ????????? ??????)</h3>
        <Description>
          ????????? ?????? ???????????? ??????, ?????? ??? ???????????? ?????? ?????? ??????????????????,
          ????????? ?????? ?????????? <br />
          ???? ?????? 1??? ?????? ?????? ???????????? ????????? ?????????????????????. <br />
          ???????????? ??? ???????????? ????????? ????????? ???????????? ????????????
        </Description>
        <ChartBox>
          <TransactionTitle>{corporations[0].name}</TransactionTitle>
          <MyResponsiveHeatMap data={tradeData1} />
          <Description>
            <HighlightText>{corporations[0].name}</HighlightText>??? ?????? ??????
            ????????????&nbsp;
            <HighlightText>{meanTradeVol(corp1)}</HighlightText>????????????. <br />
            ??????
            <HighlightText>{maxTradeDate(corp1, tradeData1)}???</HighlightText>???
            ?????? ???????????? ?????????, ???????????? ?????? ????????? ?????????&nbsp;
            <HighlightText>{minTradeDate(corp1, tradeData1)}???</HighlightText>
            ?????????.
          </Description>
        </ChartBox>
        <ChartBox>
          <TransactionTitle>{corporations[1].name}</TransactionTitle>
          <MyResponsiveHeatMap data={tradeData2} />
          <Description>
            <HighlightText>{corporations[1].name}</HighlightText>??? ?????? ??????
            ????????????&nbsp;
            <HighlightText>{meanTradeVol(corp2)}</HighlightText>????????????.
            <br />
            ??????
            <HighlightText>{maxTradeDate(corp2, tradeData2)}???</HighlightText>???
            ?????? ???????????? ?????????, ???????????? ?????? ????????? ?????????&nbsp;
            <HighlightText>{minTradeDate(corp2, tradeData2)}???</HighlightText>
            ?????????.
          </Description>
        </ChartBox>
        <ChartBox>
          <TransactionTitle>{corporations[2].name}</TransactionTitle>
          <MyResponsiveHeatMap data={tradeData3} />
          <Description>
            <HighlightText>{corporations[2].name}</HighlightText>??? ?????? ??????
            ????????????&nbsp;
            <HighlightText>{meanTradeVol(corp3)}</HighlightText>????????????. <br />
            ??????
            <HighlightText>{maxTradeDate(corp3, tradeData3)}???</HighlightText>???
            ?????? ???????????? ?????????, ???????????? ?????? ????????? ?????????&nbsp;
            <HighlightText>{minTradeDate(corp3, tradeData3)}???</HighlightText>
            ?????????.
          </Description>
        </ChartBox>
        {scrollPointer(chart_3)}
      </Container>

      <Container
        ref={chart_3}
        visible={visibleCharts.includes(chart_3.current)}
      >
        <h1>????????????</h1>
        <h3>(?????? : ??? ???)</h3>
        <ChartBox>
          <MyResponsiveBar data={totalData} />
          <Description>
            ??????????????? ????????? ?????? ????????? ????????? ????????? ???????????? ????????????.
            <br />
            ?????? ????????? ????????? ??? ????????? ????????? ????????? ?????? ????????? ???????????????.
            <br />??? ????????? ????????? ?????? ????????? ?????? ?????????, ????????? ????????? 1???
            ????????? ????????? ??????????????? ??????????????? ???????????? ?????????. <br />
            ????????? ?????? 3??? ????????? ??? ?????? ?????? ?????? ????????? ????????? ????????????
            ???????????????? <br />
            <br />
            ???? ????????? ????????? 3??? ?????? ???, ?????? ????????? ?????? ?????? ????????? ??????
            ??????&nbsp;
            <HighlightText>
              {bestTotalCorporation().name}
            </HighlightText>?????????. <br />
            ?????? ??? ?????? ?????? ?????? <HighlightText>{growthRate()}</HighlightText>
            ???????????? ??????????????? ????????????. <br />
            ????????? <HighlightText>{restCorps()}</HighlightText>??? ???????????? 30???
            ?????? ?????? ????????? ?????????????????? ???, ?????? ?????????????. <br />
            <br />
            ???????????? ?????? ????????? ??? ???????????????. ????
          </Description>
        </ChartBox>
        {scrollPointer(chart_4)}
      </Container>

      <Container
        clear={true}
        ref={chart_4}
        visible={visibleCharts.includes(chart_4.current)}
      >
        <h1>?????? ??????</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SmallChartBox>
            <h3>{corporations[0].name}</h3>
            <MyResponsiveFunnel1 data={dividendData1} />
          </SmallChartBox>
          <SmallChartBox>
            <h3>{corporations[1].name}</h3>
            <MyResponsiveFunnel2 data={dividendData2} />
          </SmallChartBox>
          <SmallChartBox>
            <h3>{corporations[2].name}</h3>
            <MyResponsiveFunnel3 data={dividendData3} />
          </SmallChartBox>
        </div>
        <Description>
          ??????????????? ????????? <b>?????????????????</b>??? ????????? ????????? ??? ?????? ?????????
          ???????????? ??????????????????. <br />
          ????????? ????????? ????????? ??????????????? ???????????? ?????? ?????????.
          <br />
          ????????? ?????? <HighlightText>{corporations[0].name}</HighlightText>,
          <HighlightText>{corporations[1].name}</HighlightText>,
          <HighlightText>{corporations[2].name}</HighlightText>??? ????????? ??????,
          ??? ?????????????????? ???????????? ?????? ?????? ?????????.
          <br />
          ????????? ??? ????????? ????????? ?????? ????????? ???????????????, ????????? ????????? ??????
          ?????? ???????????? ?????? ?????? ?????????.
          <br />
          <br />
          ????????? ????????? 3??? ?????? ???, ????????? ?????? ???????????? ?????? ?????? ?????????
          ????????? <HighlightText>{bestDividend().name}</HighlightText>?????????. ????
        </Description>
        <br />
        <br />
        {scrollPointer(chart_5)}
      </Container>

      <Container
        ref={chart_5}
        visible={visibleCharts.includes(chart_5.current)}
      >
        <h1>PER ??????</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SmallChartBox>
            <h3>{corporations[0].name}</h3>
            <MyResponsivePie data={per1} />
          </SmallChartBox>
          <SmallChartBox>
            <h3>{corporations[1].name}</h3>
            <MyResponsivePie data={per2} />
          </SmallChartBox>
          <SmallChartBox>
            <h3>{corporations[2].name}</h3>
            <MyResponsivePie data={per3} />
          </SmallChartBox>
        </div>
        <Description>
          ?????? ????????? ????????? ???????????? ????????? ????????? ????????? ?????????? <br />
          ???????????? ????????? <b>?????????????????</b>??? ????????? ??? ?????? ????????? ????????????
          ??????????????????. <br />
          ????????? ??? ?????? ?????? PER??? ???????????? ?????? ????????? ?????? ????????? ?????????
          ???????????? ??????????????? ??? ??? ?????????. <br />
          ???????????? ??????????????? ???????????? ????????? ???????????? ???????????? ????????????. ????
          <br />
          ????????? ????????? ?????? ?????? ??? ????????? ????????? ???????????? ?????? ????????????
          ??????????????? ??? ??? ?????????.
          <br />
          <br />
          ????????? ????????????, ????????? ????????? 3??? ?????? ??? ?????? ?????? ?????? ????????????
          ?????? ?????? ????????? <HighlightText>{bestPotential().name}</HighlightText>
          ?????????.
        </Description>
        <br />
        <br />
        {scrollPointer(chart_6)}
      </Container>

      <Container
        clear={true}
        ref={chart_6}
        visible={visibleCharts.includes(chart_6.current)}
      >
        <h1>????????? ?????? ??????</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SmallChartBox>
            <h3>{corporations[0].name}</h3>
            <MyResponsiveWaffle1 data={foreignData1} />
          </SmallChartBox>
          <SmallChartBox>
            <h3>{corporations[1].name}</h3>
            <MyResponsiveWaffle2 data={foreignData2} />
          </SmallChartBox>
          <SmallChartBox>
            <h3>{corporations[2].name}</h3>
            <MyResponsiveWaffle3 data={foreignData3} />
          </SmallChartBox>
        </div>
        <Description>
          ??????????????? ????????? ???????????? ???????????? ????????? ??????????????? ?????? ????????????
          ????????? ?????? ????????? ??????. <br />
          ????????? ????????? ????????? ????????? ????????? ??? ???????????? ???????????? ???????????? ??? ???
          ????????? ??? ??? ?????????. <br />
          ????????? ?????? ????????? ????????? ????????? ??? ?????? ?????? ??? ????????? ????????????
          ???????????????. <br /> <br />
          ?????? ????????? ???????????? ???????????? ???????????? ?????? ????????? ????????????, ????????????
          ?????? ?????? ????????? ????????? ????????? ?????? ???????????????. <br />
          ????????? ????????? 3??? ?????? ??? ?????? ???????????????????? ????????? ????????????
          ?????????&nbsp;
          <HighlightText>{bestForeign().name}</HighlightText>(???)?????????.
        </Description>
        <br />
        <br />
        {scrollPointer(chart_7)}
      </Container>

      <Container
        ref={chart_7}
        visible={visibleCharts.includes(chart_7.current)}
      >
        <h1>?????? 1??? ??? ??????</h1>
        <h3>(?????? : ??? ???)</h3>
        <ChartBox>
          <MyResponsiveLine data={stockData} />
        </ChartBox>
        <Description>
          ??????????????? ?????? 1??? ?????? ?????? ????????? ????????? ?????????????????? ???????????????.
          <br />
          ????????? ????????? ??? ????????? ?????? ???????????? ?????? ??? ???????????? ???????????? ??????
          ??? ???????????? ???????????????. <br />
        </Description>
        <br />
        <ScrollToTop onClick={() => moveNextChart(chart_1)}>
          ???????????? ??????
        </ScrollToTop>
      </Container>
    </>
  );
};

export default Chart;
