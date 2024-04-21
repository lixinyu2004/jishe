
$(function () {
  echarts_1();
  echarts_2();
  echarts_3();
  echarts_4();
  
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
                  data: ['大专', '本科', '初中', '高中', '小学','硕士'],
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
            data: [28,22,21,11,4,2],
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
              trigger: 'item',
              formatter: '{c}%'
            },
            legend: {
              top: '0%',
              left: 'center',
              textStyle:{
                color:'#fff'
              }

            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 26,name: '无业' },
                  { value: 17, name: '务工' },
                  { value: 9, name: '学生' },
                  { value: 8, name: '个体' },
                  { value: 6, name: '服务业' },
                  { value: 5,name: '教师' },
                  { value: 3, name: '医护' },
                  { value: 12, name: '职员' },
                  { value: 2, name: '销售' },
                  { value: 2, name: '公职' }
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
      function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
       
        option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center',
            textStyle:{
              color:'#fff'
            }
          },
        series: [
            {
              name: '男女受骗比例',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 62, name: '女性' },
                { value: 38, name: '男性' },
              
              ]
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));


        option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },

          dataset: {
              source: [
                  ['score', 'amount', 'product'],
                  [89.3, 10,'30岁以上'],
                  [57.1, 17, '40-50'],
                  [74.4, 37, '30-40'],
                  [50.1, 45, '20-30'],
                  [89.7, 5, '20岁以下'],
                 
              ]
          },
          grid: {
              left: '0',
              top: '0',
              right: '0',
              bottom: '20',
              containLabel: true
          },
          xAxis: {
              name: 'amount',
              axisPointer: {
                  z: 100
              },
              splitLine: {
                  show: false
              },
          },
          yAxis: {
              type: 'category',
              axisLabel: {
                  //show:true,
                  color: "#fff"
              },

          },
          visualMap: {
              orient: 'horizontal',
              left: 'center',
              min: 10,
              max: 100,
           
              itemHeight:0,
              // Map the score column to color
              dimension: 0,
             /* inRange: {
                  color: ['#65B581', '#FFCE34', '#FD665F']
              }*/
          },
          series: [
              {
                  type: 'bar',
                  
                  encode: {
                      // Map the "amount" column to X axis.
                      x: 'amount',
                      // Map the "product" column to Y axis
                      y: 'product'
                  },
                  
              }
          ]
      };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
  
  
  
  
        
          // 使用刚指定的配置项和数据显示图表。
          
      
          
    
  })
  
  
  
      
      
      
  
  
      
  
  
  
  
  
  
  
  
  
  