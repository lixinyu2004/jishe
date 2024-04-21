 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();
	echarts_5();
	zb1();
	zb2();
	zb3();
	zb4();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
      
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
                        name: '诈骗范被判处有期徒刑分布',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: '#fff',
                          borderWidth: 0
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
                        color:['#AFE1AF','#DFFF00','#E4D00A','#00FFFF'],
                        data: [
                          { value: 50.28, name: '三年以下' },
                          { value: 29.1, name: '三年-五年' },
                          { value: 12.82, name: '五年-十年' },
                          { value: 7.8, name: '十年以上' },
                        
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
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        right:10,
                        top:30,
                        height:140,
                        itemWidth:10,
                        itemHeight:10,
                        itemGap:10,
                        textStyle:{
                            color: 'rgba(255,255,255,.6)',
                            fontSize:12
                        },
                        orient:'vertical',
                        data:['20-40','40-50','20以下','50以上']
                    },
                   calculable : true,
                    series : [
                        {
                            name:' ',
							color: ['#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9','#c96262'],	
                            type:'pie',
                            radius : [30, 70],
                            center : ['35%', '50%'],
                            roseType : 'radius',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            lableLine: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            data:[
                                {value:50, name:'20-40'},
                                {value:45, name:'40-50'},
                                {value:35, name:'20以下'},
                                {value:30, name:'50以上'}
                            ]
                        },
                    ]
                };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_3() {
         /*   */
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '10',
		top: '20',
        right: '30',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:16,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:16,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '结算率',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#dddc6b',
                width: 4
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(221, 220, 107, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(221, 220, 107, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]

    }, 

		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
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
                        data: ['冒充熟人', '虚假招聘', '征婚交友', '广告', '虚假购物','冒充公检法'],
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
                  data: [32,19,7,7,9,20],
                  barWidth:'35%', //柱子宽度
                 // barGap: 1, //柱子之间间距
                  itemStyle: {
                      normal: {
                          color:'#50C878',
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
              



        /*   */
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['冒充熟人', '虚假购物'],
        align: 'right',
        right: '40%',
		top:'0%',
        textStyle: {
            color: "#fff",
		    fontSize: '16',

        },
 
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                    fontSize: '16',
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
                    fontSize: '16',
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
    series: [{
        name: '冒充熟人',
        type: 'line',
		
        data: [2, 6, 3, 8, 5, 8, 10, 13, 8, 5, 6, 9],
       
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }, {
        name: '虚假购物',
        type: 'line',
        data: [5, 2, 6, 4, 5, 12, 5, 17, 9, 2, 6, 3],
		barWidth:'15',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};
       

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
		var v1=60//结算数
		var v2=40//未结算数
		var v3=v1+v2//总订单数
option = {	
    series: [{
        type: 'pie',
        radius: ['60%', '70%'],
        color:'#49bcf7',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '数量结算率',
            label: {
                normal: {
                    formatter:Math.round( v1/v3*100)+ '%',
                    textStyle: {
                        fontSize: 30,
						color:'#fff',
                    }
                }
            }
        }, 
			   {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '数量结算率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
 		var v1=80//结算数
		var v2=20//未结算数
		var v3=v1+v2//总订单数
      option = {
	
//animation: false,
    series: [{	
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#49bcf7',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '数量结算率',
            label: {
                normal: {
                    formatter:Math.round( v1/v3*100)+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '数量结算率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
		var v1=30//结算金额
		var v2=70//未结算
		var v3=v1+v2
option = {	
    series: [{
		
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#62c98d',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '金额结算率',
            label: {
                normal: {
                    formatter:Math.round( v1/v3*100)+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '金额结算率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
		var v1=90//结算金额
		var v2=10//未结算
		var v3=v1+v2
option = {	
    series: [{
		
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#29d08a',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '金额结算率',
            label: {
                normal: {
                    formatter:Math.round( v1/v3*100)+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '金额结算率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









