
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
                    data: ['虚假金融理财','身份冒充', '推销违法业务', '推销伪劣产品', '虚假中奖'],
                   
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
              data: [43.2,25.2,10.2,8.4,3.3],
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
                    name: '金融理财诈骗明细',
                    type: 'pie',
                    radius: [30, 100],
                    center: ['50%', '45%'],
                    roseType: 'area',
                    itemStyle: {
                      borderRadius: 8
                    },
                    data: [
                      { value: 32.9, name: '虚假证券' },
                      { value: 24.33, name: '虚假贷款' },
                      { value: 28.7, name: '其他' },
                      
                     
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
                    name: '身份冒充类诈骗电话细分类',
                    type: 'pie',
                    radius: '50%',
                    data: [
                      { value: 26, name: '电信运营商' },
                      { value: 21.2, name: '领导' },
                      { value: 14.3, name: '快递' },
                      { value: 12.5, name: '社保机构' },
                      { value: 5.7, name: '商家客服' },
                      { value: 3.9, name: '公检法' },
                   
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
               
    
    
    
        
        
        
    
    
        
    
    
    
    
    
    
    
    
    
    