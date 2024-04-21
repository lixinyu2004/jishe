// 初始化echart实例对象
var right2Chart = echarts.init(document.getElementById('right2'), 'dark');
//
// ----------右2的配置项-------------------
var  option = {
    title: {
        text: '年龄分布',
        textStyle: {
            color: 'white',
        },
        left: 'left',
    },
    legend: {
      top: 'top',
      textStyle:{
        color:'#fff'
      }
    },
    tooltip: {
       
        formatter: '{a} <br/>{b} : {c} %'
      },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '受害人年龄分布',
        type: 'pie',
        radius: [30, 100],
        center: ['50%', '55%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 29.12, name: '41-50' },
          { value: 27.59, name: '31-40' },
          { value: 26.81, name: '21-30' },
          { value: 11.88, name: '51-60' },
          { value: 1.15, name: '61以上' },
          { value: 3.45, name: '20以下' },
         
        ]
      }
    ]
  };
// 使用刚指定的配置项和数据显示图表。
right2Chart.setOption(option);
