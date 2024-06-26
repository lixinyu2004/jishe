/****** PLACE YOUR CUSTOM STYLES HERE ******/
/*青岛研锦网络科技有限公司   版权所有*/
var legal_person_data = {"uploadData":[{"count":630},{"count":986},{"count":792},{"count":642},{"count":521},{"count":573}
					,{"count":832},{"count":747},{"count":983},{"count":836},{"count":831},{"count":633}],
		"updateData":[{"count":110},{"count":181},{"count":123},{"count":197},{"count":123},{"count":173}
					,{"count":123},{"count":151},{"count":101},{"count":152},{"count":101},{"count":177}],
		"viewData":[{"count":651},{"count":842},{"count":223},{"count":223},{"count":221},{"count":812}
					,{"count":928},{"count":219},{"count":613},{"count":254},{"count":981},{"count":301}]};
var people_data = {"uploadData":[{"count":1300},{"count":1686},{"count":1692},{"count":1742},{"count":1621},{"count":773}
				,{"count":832},{"count":1047},{"count":1483},{"count":1336},{"count":831},{"count":973}],
	"updateData":[{"count":103},{"count":281},{"count":203},{"count":197},{"count":173},{"count":154}
				,{"count":223},{"count":251},{"count":201},{"count":252},{"count":201},{"count":277}],
	"viewData":[{"count":651},{"count":842},{"count":223},{"count":223},{"count":221},{"count":812}
				,{"count":928},{"count":219},{"count":613},{"count":254},{"count":981},{"count":301}]};
var picture_data = {"uploadData":[{"count":330},{"count":786},{"count":492},{"count":842},{"count":421},{"count":673}
				,{"count":932},{"count":447},{"count":583},{"count":436},{"count":331},{"count":433}],
	"updateData":[{"count":10},{"count":81},{"count":23},{"count":97},{"count":23},{"count":73}
				,{"count":23},{"count":51},{"count":01},{"count":52},{"count":01},{"count":77}],
	"viewData":[{"count":451},{"count":342},{"count":523},{"count":323},{"count":421},{"count":812}
				,{"count":728},{"count":619},{"count":613},{"count":554},{"count":481},{"count":301}]};
			
var Tpl1 = '<li>' +
			'<p class="data-count">5681</p>' +
			'<span class="data-name">数据总量</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">1331</p>' +
			'<span class="data-name">更新量</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">3753</p>' +
			'<span class="data-name">共享次数</span>' +
			'</li>' ;		
var Tpl2 = '<li>' +
			'<p class="data-count">3971</p>' +
			'<span class="data-name">数据总量</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">1141</p>' +
			'<span class="data-name">更新量</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">3753</p>' +
			'<span class="data-name">共享次数</span>' +
			'</li>' ;
var Tpl3 = '<li>' +
			'<p class="data-count">4742</p>' +
			'<span class="data-name">数据总量</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">1231</p>' +
			'<span class="data-name">更新量</span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count">2983</p>' +
			'<span class="data-name">共享次数</span>' +
			'</li>' ;		
$('.com-screen-content .use-data').html(Tpl1);			
// 基于准备好的dom，初始化echarts实例
var myChart1= echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main3'));
//var myChart4 = echarts.init(document.getElementById('main4'));
var myChart5 = echarts.init(document.getElementById('main5'));
var myChart6 = echarts.init(document.getElementById('main6'));
var myChart7 = echarts.init(document.getElementById('main7'));

getNowFormatDate();
init_myChart1();
init_myChart2();
init_myChart3(legal_person_data);
init_myChart5();
init_myChart6();
init_myChart7();


function init_myChart3(data) {

	var uploadCnt = [];
	var updateCnt = [];

	var viewCnt = [];
	if (data.uploadData != null) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
		}
	}
	if (data.updateData != null) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}

	if (data.viewData != null) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {

		tooltip: {
			trigger: 'axis',
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		legend: {
			icon: 'circle',
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 10,
			top: '16',
			right: '10',
			data: ['虚假贷款','投资理财','刷单'],
			textStyle: {
				fontSize: 14,
				color: '#a0a8b9'
			}
		},
		grid: {
			top: '46',
			left: '13%',
			right: '10',
			//bottom: '10%',
			containLabel: false
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				interval: 0,
				fontSize:14
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisTick: {
				show: false
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
			offset: 10
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14
				}
			},
			splitLine: {
				lineStyle: {
					color: '#2b3646'
				}
			},
			axisTick: {
				show: false
			}
		}],
		series: [{
			name: '虚假贷款',
			type: 'line',
			smooth: true,
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
						color: 'rgba(137, 189, 27, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(137, 189, 27, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#1cc840'
				}
			},
			data: uploadCnt
		}, {
			name: '投资理财',
			type: 'line',
			smooth: true,
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
						color: 'rgba(219, 50, 51, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(219, 50, 51, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#eb5690'
				}
			},
			data: viewCnt
		},  {
			name: '刷单',
			type: 'line',
			smooth: true,
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
						color: 'rgba(0, 136, 212, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(0, 136, 212, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#43bbfb'
				}
			},
			data: updateCnt
		}
		]
	};
	myChart3.setOption(option);
}
function init_myChart2() {
	var data = {"uploadData":[{"count":323},{"count":298},{"count":339},{"count":264},{"count":352},{"count":257}
							,{"count":313},{"count":314},{"count":328},{"count":336},{"count":383},{"count":363}],
				"updateData":[{"count":310},{"count":281},{"count":123},{"count":97},{"count":323},{"count":373}
							,{"count":423},{"count":451},{"count":501},{"count":452},{"count":201},{"count":177}],
				"viewData":[{"count":165},{"count":182},{"count":222},{"count":212},{"count":202},{"count":181}
							,{"count":192},{"count":201},{"count":261},{"count":275},{"count":298},{"count":300}]};
	var uploadCnt = [];
	var updateCnt = [];

	var viewCnt = [];
	if (data.uploadData != null) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
		}
	}
	if (data.updateData != null) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}

	if (data.viewData != null) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {
	
		tooltip: {
			trigger: 'axis',
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		legend: {
			icon: 'circle',
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 10,
			top: '16',
			right: '10',
			data: ['虚假贷款','投资理财','刷单'],
			textStyle: {
				fontSize: 10,
				color: '#a0a8b9'
			}
		},
		grid: {
			top:'46',
			left: '13%',
			right: '10',
			//bottom: '10%',
			containLabel: false
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				interval: 0,
				fontSize:10
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisTick: {
				show: false
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
			offset: 10
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 10
				}
			},
			splitLine: {
				lineStyle: {
					color: '#2b3646'
				}
			},
			axisTick: {
				show: false
			}
		}],
		series: [{
			name: '虚假贷款',
			type: 'line',
			smooth: true,
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
						color: 'rgba(137, 189, 27, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(137, 189, 27, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#1cc840'
				}
			},
			data: uploadCnt
		}, {
			name: '投资理财',
			type: 'line',
			smooth: true,
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
						color: 'rgba(219, 50, 51, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(219, 50, 51, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#eb5690'
				}
			},
			data: viewCnt
		},  {
			name: '刷单',
			type: 'line',
			smooth: true,
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
						color: 'rgba(0, 136, 212, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(0, 136, 212, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#43bbfb'
				}
			},
			data: updateCnt
		}
		]
	};
	myChart2.setOption(option);
}
function init_myChart1(){
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
			color:['#40E0D0','#082E54','#228B22'],
			data: [
			  { value: 46.84, name: '30以下' },
			  { value:42.42, name: '30-50' },
			  { value: 10.74, name: '50以上' },     
			]
		  }
		]
	  };
// 使用刚指定的配置项和数据显示图表。
	myChart1.setOption(option);
}

function init_myChart5(){
	//var XData=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
	//var yData=[1243,2315,1164,3021,3521,4121,2001,1983,2541,2612,2331,1992];
	var XData=["一月","二月","三月","四月","五月","六月","七月","八月","九月"];
	var yData=[1243,2315,1164,3021,3521,4121,2001,1983,1432];
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
		  color:['#40E0D0'],
          series: [
              {
              type: 'bar',
              data: [21,21,11,11,9],
              barWidth:'35%', //柱子宽度
             // barGap: 1, //柱子之间间距
              itemStyle: {
                  normal: {
                     
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
	myChart5.setOption(option);
}
//刷新myChart5数据



function init_myChart6(){
	var data = {"uploadData":[{"count":5421,"areaName":"公共服务"},{"count":6512,"areaName":"健康保障"},{"count":3721,"areaName":"安全生产"},{"count":2842,"areaName":"价格监督"}
							,{"count":6427,"areaName":"能源安全"},{"count":4422,"areaName":"信用体系"},{"count":1020,"areaName":"城乡建设"},{"count":1421,"areaName":"社区治理"},{"count":1776,"areaName":"生态环保"}
							,{"count":2428,"areaName":"应急维稳"}]};
	var uploadCnt = [];
	var updateCnt = [];
	//var collectionCnt = [];
	//var dailyCnt = [];
	var viewCnt = [];
	var areaNameS = [];
	if (data.uploadData) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
			areaNameS.push(data.uploadData[i].areaName);
		}
	}
	if (data.updateData) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}
	if (data.viewData) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
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
			radius: '70%',
			color:['#F0FFFF','#B6D0E2'],
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
	myChart6.setOption(option);
}

function init_myChart7(){

	
var colorList = [
    '#ff2600',
    '#ffc000',
    '#00ad4e',
    '#0073c2',
    '#165868',
    '#e76f00',
    '#316194',
    '#723761',
    '#00b2f1',
    '#4d6022',
    '#4b83bf',
    '#f9c813',
    '#0176c0'
];
var xData = ['公共服务','健康保障','安全生产','价格监督','能源安全','信用体系', '城乡建设', '社区治理', '生态环保','应急维稳'];
var yData = [2912,3991,4621,3941,3313,6631,5543,4463,6541,3381];
option = {
    color:colorList,
    "tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
    toolbox: {
        show : true,
        feature : {
            mark : {
                show: true
            },

        }
    },
    grid: {
       "borderWidth": 0,
			"top": '40',
			"left": '30',
			"right": '10',
			"bottom": '40',
			textStyle: {
				color: "#fff"
			}
    },
    xAxis : [
       {
			'type': 'category',
			"axisTick": {
				"show": false
			},
			"axisLine": {
				"show": false,
				lineStyle: {
					color: '#868c96'
				}
			},
			"axisLabel": {
				"interval": 0,
				fontSize:14,
				formatter:function(value)
				{
					var ret = "";//拼接加\n返回的类目项
					var maxLength = 2;//每项显示文字个数
					var valLength = value.length;//X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1)//如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = "";//每次截取的字符串
							var start = i * maxLength;//开始截取的位置
							var end = start + maxLength;//结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					}
					else {
						return value;
					}
				}
			},
			"splitArea": {
				"show": false
			},
			'data': xData,
			splitLine: {
				show: false
			},
		
		}
    ],
    yAxis : [
      {
				"type": "value",
				offset: -14,
				"splitLine": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisTick": {
					"show": false
				},
				"axisLabel": {
					"interval": 0,
					fontSize:14

				},
				"splitArea": {
					"show": false
				}
			}

    ],
    series : [
        {
            name:'共享次数',
            type:'bar',
            data:yData,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#ff2600',
                            '#ffc000',
                            '#00ad4e',
                            '#0073c2',
                            '#165868',
                            '#e76f00',
                            '#316194',
                            '#723761',
                            '#00b2f1',
                            '#4d6022',
                            '#4b83bf',
                            '#f9c813',
                            '#0176c0'
                        ];
                        return colorList[params.dataIndex]
                    },
                   
                }
            },
			 barWidth: 14,
			 label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
        },
		{
			name:'折线',
			type:'line',
			itemStyle : {  /*设置折线颜色*/
				normal : {
				  color:'#d3d5fd'
				}
			},
			data:yData
		}
     
    ]
};


// 使用刚指定的配置项和数据显示图表。
	myChart7.setOption(option);
}
//获取当前时间
function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var Hour =  date.getHours();       // 获取当前小时数(0-23)
    var Minute =  date.getMinutes();     // 获取当前分钟数(0-59)
    var Second = date.getSeconds();     // 获取当前秒数(0-59)
    var show_day=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
    var day=date.getDay();
    if (Hour<10) {
        Hour = "0" + Hour;
    }
    if (Minute <10) {
        Minute = "0" + Minute;
    }
    if (Second <10) {
        Second = "0" + Second;
    }
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = '<div><p>'+year + '年' + month +'月' + strDate+'号</p><p>'+show_day[day]+'</p></div>';
    var HMS = Hour + ':' + Minute +':' + Second;
	var temp_time = year+'-'+month+'-'+strDate+' '+HMS;
    $('.nowTime li:nth-child(1)').html(HMS);
    $('.nowTime li:nth-child(2)').html(currentdate);
	//$('.topRec_List li div:nth-child(3)').html(temp_time);
    setTimeout(getNowFormatDate,1000);//每隔1秒重新调用一次该函数
}
var resourceDataType = $('.data-label li.active').data('type');//用于切换基础库
function urlType() {
    resourceDataType = $('.data-label li.active').data('type');
    if (resourceDataType == 1) {
        init_myChart3(legal_person_data);
		$('.com-screen-content .use-data').html(Tpl1);
    } else if (resourceDataType == 2) {
        init_myChart3(people_data);
		$('.com-screen-content .use-data').html(Tpl2);
    } else if (resourceDataType == 3) {
        init_myChart3( picture_data);
		$('.com-screen-content .use-data').html(Tpl3);
    }
}
var num =0 ;
//    资源类型定时器
function resourceType() {
    $('.data-label li').eq(num).addClass('active').siblings().removeClass('active');
    //$('.active-data-label').html($('.canvas-pic-two .data-label li.active').html());
    urlType();
    num++;
    if (num >= 3) {
        num = 0;
    }
}

//    资源类型点击切换
$('.data-label').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.active-data-label').html($('.data-label li.active').html());
    urlType();
});
var oTimer = setInterval(resourceType, 3000);
//    hover清除定时器
$('.data-label').hover(function () {
    clearInterval(oTimer);
}, function () {
    oTimer = setInterval(resourceType, 3000);
});

/*function resize(){
	window.addEventListener("resize", () => { 
  	this.myChart1.resize;
	this.myChart2.resize;
	this.myChart3.resize;
	this.myChart5.resize;
	this.myChart6.resize;
	this.myChart7.resize;
});
}*/

setInterval(function (){
    window.onresize = function () {
		this.myChart1.resize;
		this.myChart2.resize;
		this.myChart3.resize;
		this.myChart5.resize;
		this.myChart6.resize;
		this.myChart7.resize;
    }
},200)

//myChart7.resize();
