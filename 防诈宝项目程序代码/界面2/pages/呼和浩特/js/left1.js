// 初始化echart实例对象
var left1Chart = echarts.init(document.getElementById('left1'), 'dark');

// 指定图表的配置项和数据
// ----------左1的配置项-------------------
var option = {
    title: {
        text: '性别分布',
        textStyle: {
            color: 'white',
        },
        left: 'left',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{c}%' 
    },
    legend: {
      orient: 'vertical',
      textStyle:{
        color:'#fff'
      },
      left: 'left'
    },
    series: [
      {
        name: '刷单受害人性别分布',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 62.07, name: '男性' },
          { value: 33.62, name: '女性' },
         
        
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

// 使用刚指定的配置项和数据显示图表。
left1Chart.setOption(option);