
$(function () {
    echarts_1();
    echarts_2();
    
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
                    bottom: '4%',
                   containLabel: true
                },
                xAxis: [{
                    type: 'category',
                          data: ['虚假购物类', '游戏虚假交易', '刷单返利类', '冒充客服类', '虚假贷款类'],
                          
                          axisLabel: {
                              // x轴文本换行
                              formatter: function (params) {
                                var newParamsName = '' // 最终拼接成的字符串
                                var paramsNameNumber = params.length // 实际标签的个数
                                var provideNumber = 4 // 每行能显示的字的个数
                                var rowNumber = Math.ceil(paramsNameNumber / provideNumber) // 换行的话，需要显示几行，向上取整
                                // 条件等同于rowNumber>1
                                if (paramsNameNumber > provideNumber) {
                                  // 循环每一行,p表示行
                                  for (var p = 0; p < rowNumber; p++) {
                                    var tempStr = "" // 表示每一次截取的字符串
                                    var start = p * provideNumber // 开始截取的位置
                                    var end = start + provideNumber // 结束截取的位置
                                    // 此处特殊处理最后一行的索引值
                                    if (p == rowNumber - 1) tempStr = params.substring(start, paramsNameNumber)
                                    else tempStr = params.substring(start, end) + "\n" // 每一次拼接字符串并换行
                                    newParamsName += tempStr // 最终拼成的字符串
                                  }
                                } else {
                                  newParamsName = params // 将旧标签的值赋给新标签
                                }
                                return newParamsName
                              }
                            },
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
                    data: [27.19,14.91,13.15,8.77,6.57],
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
                
                
                tooltip: {
                  trigger: 'item'
                },
                visualMap: {
                  show: false,
                  min: 0,
                  max: 100,
                  inRange: {
                    colorLightness: [0, 1]
                  }
                },
                series: [
                  {
                    name: '受骗年龄占比',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '50%'],
                    data: [
                      { value: 65.5, name: '18-35' },
                      { value: 31.1, name: '36-59' },
                      { value: 1.4, name: '>60' },
                     
                    ].sort(function (a, b) {
                      return a.value - b.value;
                    }),
                    roseType: 'radius',
                    label: {
                      color: 'rgba(255, 255, 255, 0.3)'
                    },
                    labelLine: {
                      lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                      },
                      smooth: 0.2,
                      length: 10,
                      length2: 20
                    },
                    itemStyle: {
                      color: 'RED',
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    label: {
                      show: true,
                      position: 'top',
                      formatter: '{c}%' // 在这里设置百分数格式
                  },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                      return Math.random() * 200;
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
    
    
    
    
          
            // 使用刚指定的配置项和数据显示图表。
            
        
                    
        
    })
    
    
    
            
            
            
    
    
            
    
    
    
    
    
    
    
    
    
    