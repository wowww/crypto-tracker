import ReactChart from 'echarts-for-react'

import React from 'react'

const BubbleChart = () => {
  const [ option, setOption ] = React.useState({})

  React.useEffect(() => {
    const bubbleChartOptions = {
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: [
            {
              id: "test",
              symbolSize: 30,
              itemStyle: {
                color: "#000",
              }
            }
          ]
        }
      ]
    }
    setOption(bubbleChartOptions)

  }, [])

  return <ReactChart option={option} />
}

export default BubbleChart