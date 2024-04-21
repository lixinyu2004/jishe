$(function () {
    /*echart_1();*/
    echart_2();

    echart_3();
    /*echart_4();*/

    /*echart_map();*/
    echarts_1();
    echarts_4();
    echarts_2();
    char4();


    //echart_1
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));

        var data = [
            {value: 335,name: '客运车'},
            {value: 335,name: '危险品运输车'},
            {value: 315,name: '网约车'},
            {value: 200,name: '学生班车'}
        ];

        option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            legend: { //图例组件，颜色和名字
                left: '65%',
                top: '95',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,

                icon: 'rect',
                data: ['客运车', '危险品运输车', '网约车', '学生班车'],
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name: '车辆类型',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [50, 80], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                    },
                },

                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 45], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_1'));

        var data = [
            {value: 12,name: '20以下'},
            {value: 13,name: '60以上'},
            {value: 70,name: '20-30'},
            {value: 52,name: '30-40'},
            {value: 35,name: '40-60'}
        ];

        option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter: "{b}: <br/>{c} ({d}%)"
            },
            color: ['#af89d6', '#4ac7f5', '#0089ff', '#f36f8a', '#f5c847'],
            legend: { //图例组件，颜色和名字
                x: '70%',
                y: 'center',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 10,
                itemHeight: 10,
                icon: 'rect',
                data: ['20以下', '60以上', '20-30', '30-40', '40-60'],
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name: '行业占比',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [50, 75], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 2,
                    },
                },
                label: { //标签的位置
                    normal: {
                        show: true,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 40], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    //echart_2
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },

            legend: {
                // align: 'center',
                // left: '65%',
                top: '28',
                data: ['行驶', '停车', '熄火', '离线'],
                itemWidth:16,
                itemHeight:12,
                // borderRadius: 0, // 统一设置四个角的圆角大小
                icon: 'rect',
                textStyle: {
                    itemGap: 12, //图例每项之间的间隔
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },

            xAxis: {
                axisLabel: { //调整x轴的lable
                    textStyle: {
                        color: '#fff',
                        fontSize: 13,
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: ['学生班车', '网约车', '危险品运输车', '客运车'],
                axisTick : {show: true},
                axisLabel: { //调整x轴的lable
                    textStyle: {
                        color: '#fff',
                        fontSize: 13,
                    }
                },
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '行驶',
                type: 'bar',
                stack: '总量',
                color:'#0035f9',
                barWidth : 18,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [4, 10, 8, 7]
            }, {
                name: '停车',
                type: 'bar',
                stack: '总量',
                color:'#f36f8a',
                barWidth : 20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [10, 4, 5, 6]
            }, {
                name: '熄火',
                type: 'bar',
                stack: '总量',
                color:'#efe39b',
                barWidth : 20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [4, 10, 8, 7]
            }, {
                name: '离线',
                type: 'bar',
                stack: '总量',
                color:'#25f3e6',
                barWidth : 20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [4, 10, 8, 7]
            }

            ]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    // echart_map
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'));

        
        var app = {};
        option = null;
        var posList = [
            'left', 'right', 'top', 'bottom',
            'inside',
            'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
            'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
        ];

        app.configParameters = {
            rotate: {
                min: -90,
                max: 90
            },
            align: {
                options: {
                    left: 'left',
                    center: 'center',
                    right: 'right'
                }
            },
            verticalAlign: {
                options: {
                    top: 'top',
                    middle: 'middle',
                    bottom: 'bottom'
                }
            },
            position: {
                options: echarts.util.reduce(posList, function (map, pos) {
                    map[pos] = pos;
                    return map;
                }, {})
            },
            distance: {
                min: 0,
                max: 100
            }
        };

        app.config = {
            rotate: 90,
            align: 'left',
            verticalAlign: 'middle',
            position: 'insideBottom',
            distance: 15,
            onChange: function () {
                var labelOption = {
                    normal: {
                        rotate: app.config.rotate,
                        align: app.config.align,
                        verticalAlign: app.config.verticalAlign,
                        position: app.config.position,
                        distance: app.config.distance
                    }
                };
                myChart.setOption({
                    series: [{
                        label: labelOption
                    }, {
                        label: labelOption
                    }, {
                        label: labelOption
                    }, {
                        label: labelOption
                    }]
                });
            }
        };


        var labelOption = {
            show: true,
            position: app.config.position,
            distance: app.config.distance,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            rotate: app.config.rotate,
            formatter: '{c}  {name|{a}}',
            fontSize: 16,
            rich: {
                name: {
                    textBorderColor: '#fff'
                }
            }
        };

        option = {
            color: ['#003366', '#006699', '#4cabce', '#e5323e'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Forest', 'Steppe', 'Desert', 'Wetland']
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {show: false},
                    data: ['2012', '2013', '2014', '2015', '2016']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Forest',
                    type: 'bar',
                    barGap: 0,
                    label: labelOption,
                    data: [320, 332, 301, 334, 390]
                },
                {
                    name: 'Steppe',
                    type: 'bar',
                    label: labelOption,
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: 'Desert',
                    type: 'bar',
                    label: labelOption,
                    data: [150, 232, 201, 154, 190]
                },
                {
                    name: 'Wetland',
                    type: 'bar',
                    label: labelOption,
                    data: [98, 77, 101, 99, 40]
                }
            ]
        };;
        /*if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }*/
        myChart.setOption(option);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

    //echart_3
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        var xAxisData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12'];
        var legendData= ['','',''];
        var title = "";
        var serieData = [];
        var metaDate = [
            [120, 140, 100, 120, 300, 230, 130, 170,140, 120, 300, 230]

        ]
        for(var v=0; v < legendData.length ; v++){
            var serie = {
                name:legendData[v],
                type: 'line',
                symbol:"circle",
                symbolSize:10,
                data: metaDate[v]
            };
            serieData.push(serie)
        }
        var colors = ["#ffff43"];
        var option = {
            backgroundColor: 'transparent',
            title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},

            color:colors,
            grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
            tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
            xAxis: [
                {
                    type: 'category',
                    axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                    axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                    axisTick : {show: false},
                    data:xAxisData,
                },
            ],
            yAxis: [
                {
                    axisTick : {show: false},
                    splitLine: {show:false},
                    axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                    axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                },
            ],
            series:serieData
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));

        /*中间显示的数据*/
        /*中间显示的数据*/
        var myData = ['超速', 'SOS', '偏移', '其他']
        var databeast = {
            1: [38, 25, 26, 32]
        }
        var databeauty = {
            1: [11, 38, 23, 30]
        }
        var timeLineData = [1]

        var option = {
            baseOption: {
                backgroundColor: 'transparent',
                timeline: {
                    show: false,
                    top: 0,
                    data: []
                },
                legend: {
                    show:true,
                    // align: 'center',
                    left: '30%',
                    top: 30,
                    // data: ['行驶', '停车'],
                    // itemWidth:16,
                    // itemHeight:12,
                    // // borderRadius: 0, // 统一设置四个角的圆角大小
                    icon: 'rect',
                    textStyle: {
                        itemGap: 12, //图例每项之间的间隔
                        color: [],
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 14,
                    }
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    formatter: '{b}<br/>{a}: {c}',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: [{
                    show: false,
                    left: '8%',
                    top: 60,
                    bottom: 0,
                    containLabel: true,
                    width: '30%'
                }, {
                    show: false,
                    left: '57%',
                    top: 60,
                    bottom: 0,
                    width: '0%'
                }, {
                    show: false,
                    right: '8%',
                    top: 60,
                    bottom: 0,
                    containLabel: true,
                    width: '30%'
                }],

                xAxis: [{
                    type: 'value',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    gridIndex: 1,
                    show: false
                }, {
                    gridIndex: 2,
                    nameTextStyle: {
                        color: '#50afff',
                        fontSize: 14
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    position: 'right',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: myData
                }, {
                    gridIndex: 1,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }

                    },
                    data: myData.map(function(value) {
                        return {
                            value: value,
                            textStyle: {
                                align: 'center'
                            }
                        }
                    })
                }, {
                    gridIndex: 2,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false

                    },
                    data: myData
                }],
                series: [

                ]

            },
            options: []
        }

        option.baseOption.timeline.data.push(timeLineData[0])
        option.options.push({
            tooltip: {
                trigger: 'axis',
                formatter: '{b}<br/>{c} {a}'
            },
            series: [{
                name: '昨天',
                type: 'bar',
                barWidth: 17,
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#0035f9',
                        // barBorderRadius: 50
                    }
                },

                data: databeast[timeLineData[0]]
            }, {
                name: '今天',
                type: 'bar',
                barWidth: 18,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#25f3e6',
                        // barBorderRadius: 50
                    }
                },
                data: databeauty[timeLineData[0]]
            }]
        })
        
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
            
            emphasis: {
                  label: {
                    show: true
                  }
                },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
              left: 'center',
              top: 'bottom',
              data: [
                'rose1',
                'rose2',
               
              ]
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
                name: '举报案件统计',
                type: 'pie',
                radius: [20, 80],
                center: ['25%', '50%'],
                roseType: 'radius',
                color: ['#af89d6', '#4ac7f5'],
                itemStyle: {
                  borderRadius: 5,
                  
                },
                label: {
                  show: false
                },
                emphasis: {
                  label: {
                    show: true
                  }
                },
                data: [
                  { value: 3803, name: '有效举报事件' },
                  { value: 10090, name: '无效举报事件' },
                
                ]
              },
              {
                name: '举报信息统计',
                type: 'pie',
                radius: [20, 80],
                center: ['75%', '50%'],
                roseType: 'area',
                color: [ '#0089ff', '#f36f8a', '#f5c847'],
                itemStyle: {
                  borderRadius: 5
                },
                data: [
                  { value: 820, name: '有效举报信息（万件）' },
                  { value: 740, name: '无效举报信息（万件）' },
              
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




})


function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts_2'));

    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{b}  <br/>{c}件"
        },
        legend: {
            x: 'center',
            y: '2%',
            data: ['电信', '投资理财', '网络交友', '杀猪盘', '公检法'],
            icon: 'circle',
            textStyle: {
                color: '#fff',
            }
        },
        calculable: true,
        series: [{
            name: '车型',
            type: 'pie',
            //起始角度，支持范围[0, 360]
            startAngle: 0,
            //饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: [41, 110],
            //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
            center: ['50%', '20%'],
            //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
            // 'radius' 面积展现数据的百分比，半径展现数据的大小。
            //  'area' 所有扇区面积相同，仅通过半径展现数据大小
            roseType: 'area',
            //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    formatter: '{c}件'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length2: 1,
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                value: 600,
                name: '电信',
                itemStyle: {
                    normal: {
                        color: '#f845f1'
                    }
                }
            },
                {
                    value: 1100,
                    name: '投资理财',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 1200,
                    name: '网络交友',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 1300,
                    name: '杀猪盘',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 1400,
                    name: '公检法',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },

                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}


function char4() {

    var myChart = echarts.init($("#char4")[0]);

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
              top:'10%',
              right: '0%',
              bottom: '4%',
             containLabel: true
          },
          xAxis: [{
              type: 'category',
                    data: ['刷单返利类', '虚假购物类', '虚假征信类', '裸聊敲诈类', '网络投资类'],
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
              data: [29.35,14.32,10.61,7.98,6.82],
              barWidth:'35%', //柱子宽度
             // barGap: 1, //柱子之间间距
              itemStyle: {
                  normal: {
                      color:'SKYBLUE',
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
   /* option = {
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
                itemStyle : {
                    normal: {
                        label : {show: true, position: 'inside'},
                        color: '#44aff0'
                    }
                    },
                data:[2900, 1200, 300, 200]
            }
        ]
    };*/
  
    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
