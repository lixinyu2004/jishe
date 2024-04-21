/**
 * Created by 30947 on 2018/7/18.
 */
$(function(){

    char1();
    char2();
    char3();
    char4();

})

//统计分析图
function char1() {

    var myChart = echarts.init($("#char1")[0]);

   
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
                    data: ['刷单返利','贷款，代办', '虚假投资', '网络招嫖', '冒充客服'],
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
              data: [21,21,11,11,9],
              barWidth:'35%', //柱子宽度
             // barGap: 1, //柱子之间间距
              itemStyle: {
                  normal: {
                      color:'RGB(123,139,111)',
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

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char2() {

    var myChart = echarts.init($("#char2")[0]);
    option = {
        legend: {
          top: 'bottom',
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
            name: '受害人年龄占比',
            type: 'pie',
            radius: [30, 100],
            center: ['50%', '45%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 3, name: '20以内' },
              { value: 20, name: '20-29' },
              { value: 37, name: '30-39' },
              { value: 30, name: '40-49' },
              { value: 16, name: '50-59' },
              { value: 13, name: '60以上' },
             
            ]
          }
        ]
      };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char3() {

    var myChart = echarts.init($("#char3")[0]);

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
            name: '受害人性别分析',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 47.53, name: '男' },
              { value: 52.47, name: '女' },
             
           
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

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char4() {

    var myChart = echarts.init($("#char4")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['客运车','危险品车','网约车','学生校车'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'报警数量',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[2900, 1200, 300, 200, 900, 300]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
