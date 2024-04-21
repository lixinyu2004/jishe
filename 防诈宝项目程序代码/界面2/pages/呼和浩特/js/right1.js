// 初始化echart实例对象
//
var right1Chart = echarts.init(document.getElementById('right1'), 'dark');


// ----------右1的配置项-------------------
var  /*option = {
    title: {
        text: "全国确诊省市TOP10",
        textStyle: {
            color: 'white',
        },
        left: 'left'
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        //指示器
        axisPointer: {
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: [] // ['湖北','广州','北京']
    },
    yAxis: {
        type: 'value',
        //y轴字体设置
        axisLabel: {
            show: true,
            color: 'white',
            fontSize: 12,
            formatter: function(value) {
                if (value >= 1000) {
                    value = value / 1000 + 'k';
                }
                return value;
            }
        },
    },
    series: [{
        data: [], // [582, 300, 100]
        type: 'bar',
        barMaxWidth: "50%"
    }]
};


// 获取中国各省市特区
var provinces = data.areaTree[0].children

var topData = []
    // 遍历每一个省自治区、直辖市
for (var province of provinces) {
    // 将每个省的累计确诊病例数添加到配置项的data中
    topData.push({
        'name': province.name,
        'value': province.children[0].total.confirm
    })
}

topData.sort(function(a, b) {
    return b.value - a.value
})
topData.length = 10

// console.log(topData)

for (var province of topData) {
    // 将每个省的累计确诊病例数添加到配置项的data中
    option.xAxis.data.push(province.name)
    option.series[0].data.push(province.value)

}*/
option = {
    //  backgroundColor: '#00265f',
    title: {
        text: '常见诈骗类型',
        textStyle: {
            color: 'white',
        },
        left: 'left',
    },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          left: '0%',
          top:'10px',
          right: '0%',
          bottom: '15%',
         containLabel: true
      },
      xAxis: [{
          type: 'category',
                data: ['刷单类','虚假投资', '虚假贷款', '冒充客服', '虚假购物','冒充熟人'],
               
          axisLine: {
              show: true,
           lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  width: 1,
                  type: "solid"
              },
          },
          
          axisTick: {
              show: false,
          },
         
          axisLabel:  {
                  interval: 0,
                 // rotate:50,
                  show: true,
                  splitNumber: 15,
                  textStyle: {
                       color: "rgba(255,255,255,.6)",
                      fontSize: '12',
                  },
              },
      }],
      yAxis: [{
          type: 'value',
          axisLabel: {
             //formatter: '{value} %'
              show:true,
               textStyle: {
                       color: "rgba(255,255,255,.6)",
                      fontSize: '12',
                  },
          },
          axisTick: {
              show: false,
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color: "rgba(255,255,255,.1	)",
                  width: 1,
                  type: "solid"
              },
          },
          splitLine: {
              lineStyle: {
                 color: "rgba(255,255,255,.1)",
              }
          }
      }],
      series: [
          {
          type: 'bar',
          data: [44.44,18.77,16.09,6.9,4.98,2.3],
          barWidth:'40%', //柱子宽度
         // barGap: 1, //柱子之间间距
          itemStyle: {
              normal: {
                  color:'#FA8072',
                  opacity: 1,
                  barBorderRadius: 0,
              }
          },
          label: {
              show: true,
              position: 'top',
              formatter: '{c}%' // 在这里设置百分数格式
          }
      }
          
      ]
  };


// 使用刚指定的配置项和数据显示图表。
right1Chart.setOption(option);
