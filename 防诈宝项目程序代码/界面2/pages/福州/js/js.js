/*   */
 $(window).load(function(){
             $(".loading").fadeOut()
            })  
$(function () {
    echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();
	echarts_5();
	zb1();
	zb2();
	zb3();
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
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
                color:['#00FFFF','#F0FFFF','#89CFF0','#0000FF','#7393B3'],
                data: [
                  { value: 27.76, name: '90后' },
                  { value: 24.33, name: '80后' },
                  { value: 23.19, name: '00后' },
                  { value: 16.35, name: '70后' },
                  { value: 5.32, name: '60后' },
                  { value: 3.04, name: '其他' },
                 
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
    /*   */
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

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
                color:['#00FFFF','#F0FFFF'],
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
		trigger: 'axis',
		axisPointer: {
			lineStyle: {
				color: '#57617B'
			}
		}
	},
	legend: {
	
		//icon: 'vertical',
			data: ['虚假贷款', '电信诈骗'],
        //align: 'center',
       // right: '35%',
		top:'0',
        textStyle: {
            color: "#fff"
        },
       // itemWidth: 15,
       // itemHeight: 15,
        itemGap: 20,
	},
	grid: {
		left: '0',
		right: '20',
		top:'10',
		bottom: '20',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		boundaryGap: false,
		axisLabel: {
			show: true,
			textStyle: {
                           color: 'rgba(255,255,255,.6)'
                        }
		},
		axisLine: {
			lineStyle: {
				color: 'rgba(255,255,255,.1)'
			}
		},
		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	}, {
		

		
		
	}],
	yAxis: [{
		axisLabel: {
			show: true,
			textStyle: {
                           color: 'rgba(255,255,255,.6)'
                        }
		},
		axisLine: {
			lineStyle: {
				color: 'rgba(255,255,255,.1)'
			}
		},
		splitLine: {
			lineStyle: {
				color: 'rgba(255,255,255,.1)'
			}
		}
	}],
	series: [{
		name: '虚假贷款',
		type: 'line',
		smooth: true,
		symbol: 'circle',
		symbolSize: 5,
		showSymbol: false,
		lineStyle: {
			normal: {
				width: 2
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(24, 163, 64, 0.3)'
				}, {
					offset: 0.8,
					color: 'rgba(24, 163, 64, 0)'
				}], false),
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
		},
		itemStyle: {
			normal: {
				color: '#cdba00',
				borderColor: 'rgba(137,189,2,0.27)',
				borderWidth: 12
			}
		},
		data: [22, 18, 19, 13, 10, 12, 11, 12, 14, 12, 16, 12]
	}, {
		name: '电信诈骗',
		type: 'line',
		smooth: true,
		symbol: 'circle',
		symbolSize: 5,
		showSymbol: false,
		lineStyle: {
			normal: {
				width: 2
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(39, 122,206, 0.3)'
				}, {
					offset: 0.8,
					color: 'rgba(39, 122,206, 0)'
				}], false),
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
		},
		itemStyle: {
			normal: {
				color: '#277ace',
				borderColor: 'rgba(0,136,212,0.2)',
				borderWidth: 12
			}
		},
		data: [12, 11, 12, 15, 12, 16, 12, 22, 18, 11, 13, 15]
	}]
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
                        data: ['其他','刷单返利', '虚假投资', '虚假服务', '虚假贷款', '冒充熟人'],
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
                  data: [34.61,33.84,13.69, 7.98,5.4,4.18],
                  barWidth:'50%', //柱子宽度
                 // barGap: 1, //柱子之间间距
                  itemStyle: {
                      normal: {
                          color:'#00FFFF',
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
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
// 颜色
var lightBlue = {
	type: 'linear',
	x: 0,
	y: 0,
	x2: 0,
	y2: 1,
	colorStops: [{
		offset: 0,
		color: 'rgba(41, 121, 255, 1)'
	}, {
		offset: 1,
		color: 'rgba(0, 192, 255, 1)'
	}],
	globalCoord: false
}

var option = {
	tooltip: {
		show: false
	},
	grid: {
		top: '0%',
		left: '65',
		right: '14%',
		bottom: '0%',
	},
	xAxis: {
		min: 0,
		max: 100,
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			show: false
		}
	},
	yAxis: {
		data: ['字段名称', '字段名称', '字段名称','字段名称','字段名称','字段名称','字段名称','字段名称','字段名称','字段名称','字段名称'],
		//offset: 15,
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			color: 'rgba(255,255,255,.6)',
			fontSize: 14
		}
	},
	series: [{
		type: 'bar',
		label: {
			show: true,
			zlevel: 10000,
			position: 'right',
			padding: 10,
			color: '#49bcf7',
			fontSize: 14,
			formatter: '{c}%'
			
		},
		itemStyle: {
			color:'#49bcf7'
		},
		barWidth: '15',
		data: [49, 80, 67, 99, 12, 19, 39, 84, 28, 47, 57, 100],
		z: 10
	}, {
		type: 'bar',
		barGap: '-100%',
		itemStyle: {
			color:'#fff',
			opacity: 0.1
		},
		barWidth: '15',
		data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
		z: 5
	}],
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
	var v1=298//男消费
		var v2=523//女消费
		var v3=v1+v2//总消费 
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
            value: v2,
            name: '女消费',
            label: {
                normal: {
                    formatter: v2 +'',
                    textStyle: {
                        fontSize: 20,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v1,
            name: '男消费',
            label: {
                normal: {
                 formatter : function (params){
                return '占比'+Math.round( v2/v3*100)+ '%'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 12
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
 var v1=298//男消费
		var v2=523//女消费
		var v3=v1+v2//总消费 
      option = {
	
//animation: false,
    series: [{	
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#cdba00',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '男消费',
            label: {
                normal: {
                    formatter: v1 +'',
                    textStyle: {
                        fontSize: 20,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            name: '女消费',
            label: {
                normal: {
                 formatter : function (params){
                return '占比'+Math.round( v1/v3*100)+ '%'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 12
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
/*   */
function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
		var v1=298//男消费
		var v2=523//女消费
		var v3=v1+v2//总消费 
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
            value: v2,
            name: '女消费',
            label: {
                normal: {
                    formatter: v2 +'',
                    textStyle: {
                        fontSize: 20,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v1,
            name: '男消费',
            label: {
                normal: {
                 formatter : function (params){
                return '占比'+Math.round( v2/v3*100)+ '%'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 12
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



		
		
		


		









