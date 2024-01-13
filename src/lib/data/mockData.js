export const data = [
  {
    id: "Companies",
    data: [
      {
        name: "Vue js",
        qauntite: 161,
      },
      {
        name: "React js",
        qauntite: 260,
      },
      {
        name: "Sveltekit",
        qauntite: 36,
      },
      {
        name: "others",
        qauntite: 200,
      },
    ],
  },
  {
    id: "Freelancers",
    data: [
      {
        name: "Vue js",
        qauntite: 212,
      },
      {
        name: "React js",
        qauntite: 190,
      },
      {
        name: "Sveltekit",
        qauntite: 270,
      },
      {
        name: "others",
        qauntite: 251,
      },
    ],
  }
];

export const clients = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const areaOptions = {
  series: [
    {
      name: "series1",
      data: [60, 30, 45, 33, 65, 23, 55],
    },
    {
      name: "series2",
      data: [30, 45, 33, 65, 23, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2024-01-12T00:00:00.000Z",
      "2024-01-12T01:30:00.000Z",
      "2024-01-12T02:30:00.000Z",
      "2024-01-12T03:30:00.000Z",
      "2024-01-12T04:30:00.000Z",
      "2024-01-12T05:30:00.000Z",
      "2024-01-12T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  title: {
    text: "Area Graph",
  }
};

export const barGraphoptions = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
  title: {
    text: "Bar Graph",
  }
};

export const donutOptions = {
  series: [44, 55, 41, 17, 15],
  chart: {
    type: "donut",
    height: 350,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
  title: {
    text: "Donut Graph",
  }
};

export const radarOptions = {
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ],
  chart: {
    height: 350,
    type: "radar",
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
  },
  title: {
    text: "Radar Chart - Multi Series",
  },
  stroke: {
    width: 2,
  },
  fill: {
    opacity: 0.1,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
  },
};

export const timeLineOptions = {
  series: [
    {
      data: [
        {
          x: "Analysis",
          y: [
            new Date("2023-02-27").getTime(),
            new Date("2023-03-04").getTime(),
          ],
          fillColor: "#008FFB",
        },
        {
          x: "Design",
          y: [
            new Date("2023-03-04").getTime(),
            new Date("2023-03-08").getTime(),
          ],
          fillColor: "#00E396",
        },
        {
          x: "Coding",
          y: [
            new Date("2023-03-07").getTime(),
            new Date("2023-03-10").getTime(),
          ],
          fillColor: "#775DD0",
        },
        {
          x: "Testing",
          y: [
            new Date("2023-03-08").getTime(),
            new Date("2023-03-12").getTime(),
          ],
          fillColor: "#FEB019",
        },
        {
          x: "Deployment",
          y: [
            new Date("2023-03-12").getTime(),
            new Date("2023-03-17").getTime(),
          ],
          fillColor: "#FF4560",
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: "rangeBar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false,
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      var label = opts.w?.globals?.labels[opts.dataPointIndex];
      return label;
    },
    style: {
      colors: ["#f3f4f5", "#fff"],
    },
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    show: false,
  },
  grid: {
    row: {
      colors: ["#f3f4f5", "#fff"],
      opacity: 1,
    },
  },
  title: {
    text: "TimeLine Graph",
  }
};

export const pieOptions = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 350,
    type: "pie",
  },
  legend: {
    position: "bottom",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  responsive: [
    {
      breakpoint: 1000,
      options: {
        chart: {
          width: 250,
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ],
  title: {
    text: "Pie Graph",
  }
};

export const lineOptions = {
  series: [
    {
      name: "series1",
      data: [60, 30, 45, 33, 65, 23, 55],
    },
    {
      name: "series2",
      data: [30, 45, 33, 65, 23, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "line",
  },
  stroke: {
    width: 5,
    curve: "smooth",
  },
  title: {
    text: "Line Graph",
  }
};

export const lineColumnOptions = {
  series: [{
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
  chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Line & Column graph'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Website Blog',
    },

  }, {
    opposite: true,
    title: {
      text: 'Social Media'
    }
  }]
};

export const multipleAxisOptions = {
  series: [{
    name: 'Income',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  }, {
    name: 'Cashflow',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }],
  chart: {
    height: 350,
    type: 'line',
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4]
  },
  title: {
    text: 'Multiple Y-Axis graph',
    align: 'left',
    offsetX: 110
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#008FFB'
      },
      labels: {
        style: {
          colors: '#008FFB',
        }
      },
      title: {
        text: "Income (thousand crores)",
        style: {
          color: '#008FFB',
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Income',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#00E396'
      },
      labels: {
        style: {
          colors: '#00E396',
        }
      },
      title: {
        text: "Operating Cashflow (thousand crores)",
        style: {
          color: '#00E396',
        }
      },
    },
    {
      seriesName: 'Revenue',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#FEB019'
      },
      labels: {
        style: {
          colors: '#FEB019',
        },
      },
      title: {
        text: "Revenue (thousand crores)",
        style: {
          color: '#FEB019',
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  }
};

export const lineAreaOptions = {
  series: [{
    name: 'TEAM A',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    name: 'TEAM B',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
  chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'solid',
    opacity: [0.35, 1],
  },
  labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Series A',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Series B',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      }
    }
  },
  title: {
    text: "Mixed line & Area graph"
  }
};

export const lineColumnAreaOptions = {
  series: [{
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },

  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Points',
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;

      }
    }
  },
  title: {
    text: "Mixed Line & Column & Area"
  }
};
