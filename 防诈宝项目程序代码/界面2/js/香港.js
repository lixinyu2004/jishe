
$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    
    function echarts_1() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart1'));
    
           
        
    option = {
        //  backgroundColor: '#00265f',
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
                    data: ['刷单类','冒充客服', '冒充公检法', '杀猪盘', '网络贷款','冒充领导'],
                   
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
              data: [29.54,19.51,10.84,8.94,6.78,2.98],
              barWidth:'35%', //柱子宽度
             // barGap: 1, //柱子之间间距
              itemStyle: {
                  normal: {
                      color:'#2f89cf',
                      opacity: 1,
                      barBorderRadius: 5,
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
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
           
        }
    function echarts_2() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart2'));
            option = {
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
                    name: '损失占比',
                    type: 'pie',
                    radius: [30, 100],
                    center: ['50%', '55%'],
                    roseType: 'area',
                    itemStyle: {
                      borderRadius: 8
                    },
                    data: [
                      { value: 26.74, name: '网络刷单' },
                      { value: 15.72, name: '杀猪盘' },
                      { value: 16.55, name: '冒充客服' },
                      { value: 12.98, name: '冒充公检法' },
                      { value: 12.18, name: '网络贷款' },
                      { value: 6.87, name: '冒充熟人' },
                     
                    ]
                  }
                ]
              };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }
        function echarts_3() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart3'));
    
             
            option = {
 
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
                    name: '性别分布',
                    type: 'pie',
                    radius: '50%',
                    data: [
                      { value: 38.3, name: '男性' },
                      { value: 61.7, name: '女性' },
                     
                    
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
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
           
        }
      })     
               
    
    
    
        
        
        
    
    
        
    
    
    
    
    
    
    
    
    
    