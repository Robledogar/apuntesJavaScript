new roughBars.Bar(
  {
    element: '#example',
    data: 'https://gist.githubusercontent.com/mbostock/3310560/raw/98311dc46685ed02588afdcb69e5fa296febc1eb/letter-frequency.tsv',
     labels: 'letter',
     values: 'frequency',
     height: window.innerHeight * 0.7,
     width: window.innerWidth * 0.8,
     roughness: 3,
     color: 'pink',
     fillWeight: 1,
     strokeWidth: 0.5,
     stroke: 'black',
  }
);