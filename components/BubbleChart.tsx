import ReactChart from 'echarts-for-react'
import React from 'react'

interface BubbleChartProps {
  [key: string]: any;
}

// function BubbleChart({ data }: BubbleChartProps) {
  const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  const [ option, setOption ] = React.useState({})

  // console.log("DATA", data);

  React.useEffect(() => {
    const nodes: any[] = [];

    data.data.forEach((o: any) => {
      if ( o.quote["USD"].market_cap > 10000000000 ) {
        nodes.push({
          id: o.name,
          name: o.name,
          symbolSize: o.quote["USD"].market_cap / 10000000000,
        })
      }

    });

    const bubbleChartOptions = {
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: nodes,
          label: {
            show: true,
            fontSize: '.6rem',
            color: '#373737'
          }
        },
      ],
    };

    setOption(bubbleChartOptions)

  }, [])

  return <ReactChart option={option} />
}

export default BubbleChart