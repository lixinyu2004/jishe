
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
                    data: ['刷单返利','贷款信用卡', '冒充客服', '虚假投资', '虚假购物','冒充公检法'],
                   
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
              data: [25.7,22.5,9.3,8,7.4,7.2,6.6],
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
                    name: '受害人年龄分布',
                    type: 'pie',
                    radius: [30, 100],
                    center: ['50%', '55%'],
                    roseType: 'area',
                    itemStyle: {
                      borderRadius: 8
                    },
                    data: [
                      { value: 18.2, name: '18-23' },
                      { value:41.9, name: '24-35' },
                      { value: 22.9, name: '36-45' },
                      { value: 15, name: '46-60' },
                      { value:0.7, name: '60以上' },
                      { value: 1.3, name: '未成年' },
                      
                     
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
                    name: '受害人职业分布',
                    type: 'pie',
                    radius: '50%',
                    data: [
                      { value: 44, name: '无业人员' },
                      { value: 27.9, name: '企业人员' },
                      { value: 16.1, name: '个体户' },
                      { value: 6.6, name: '学生' },
                      { value: 0.7, name: '教师' },
                    
                   
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
               
    
    
    
        
        
        
    
    
        
    
    
    
    
    
    
    
    
    
    