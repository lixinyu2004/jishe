
$(function () {
    echarts_1();
    echarts_2();
    echarts_4();
    echarts_31();
    echarts_32();
    echarts_33();
    echarts_5();
    echarts_6();
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
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['广东', '山东', '河南', '江苏', '四川', '河北', '浙江', '贵州', '云南', '陕西'],
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
                axisLabel: {
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
                    show: true,
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
                    data: [8.8, 7.2, 6.8, 6.5, 6.4, 5.7, 5.0, 4.0, 3.9, 3.9],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#2f89cf',
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

      
        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['虚假购物', '赌博博彩', '网游交易', '金融理财', '身份冒充', '虚假兼职', '交友'],
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
                axisLabel: {
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
                    show: true,
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
                    data: [2.6, 2.6, 4.8, 7.8, 14.9, 23.4, 41.3],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#27d08a',
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
       

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
                    [89.3, 30.98,'刷单类'],
                    [57.1, 18.44, '冒充公检法/客服/熟人身份类'],
                    [74.4, 15.24, '虚假交易类'],
                    [50.1, 10.4, '游戏虚拟物品类'],
                    [89.7, 7.23, '色情类'],
                    [68.1, 6.3, '杀猪盘类'],
                    [19.6, 4.73, '中奖返利类'],
                    [10.6, 3.57, '网络婚恋交友类'],
                    [32.7, 3.12, '信贷类']
                ]
            },
            grid: {
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
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
                inRange: {
                    color: ['#65B581', '#FFCE34', '#FD665F']
                }
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

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));


        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['刷单类', '冒充类', '虚假交易类', '游戏虚拟物品类', '色情类', '杀猪盘类', '中奖返利类', '网络婚恋交友类', '信贷类'],
                textStyle: {
                    color: "#fff",
                   
                }
            },
            grid: {
                left: '5',
                right: '0',
                bottom: '2',
                top: '35',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {

               axisLabel: {
                    show:false,
                    
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'cadetblue',
                    },
                },
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

            },
            yAxis: {
                type: 'value',
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'cadetblue',
                    },
                },
                
                axisLabel: {
                    show:true,
                    lineStyle:{
                        color:'#fff',
                    },
                    axisPointer: {
                        z: 100,
                    },
                },
                
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: '刷单类',
                    type: 'line',
                    stack: 'Total',
                    data: [65, 60, 25, 20, 80, 10, 5]
                },
                {
                    name: '冒充类',
                    type: 'line',
                    stack: 'Total',
                    data: [75, 70, 12.5, 30, 20, 20, 0]
                },
                {
                    name: '虚假交易类',
                    type: 'line',
                    stack: 'Total',
                    data: [65, 60, 20, 30, 21, 29, 25, 30, 20]
                },
                {
                    name: '游戏虚拟物品类',
                    type: 'line',
                    stack: 'Total',
                    data: [50, 80, 50, 25, 15, 20, 0]
                },
                {
                    name: '色情类',
                    type: 'line',
                    stack: 'Total',
                    data: [45, 20, 35, 25, 50, 60, 50]
                },
                {
                    name: '杀猪盘类类',
                    type: 'line',
                    stack: 'Total',
                    data: [85, 75, 50, 65, 50, 45, 40]
                },
                {
                    name: '中奖返利类',
                    type: 'line',
                    stack: 'Total',
                    data: [75.100, 100, 45, 60, 50, 0]
                },
                {
                    name: '网络婚恋交友类',
                    type: 'line',
                    stack: 'Total',
                    data: [90, 70, 50, 75, 60, 55, 70]
                },
                {
                    name: '信贷类',
                    type: 'line',
                    stack: 'Total',
                    data: [50, 30, 25, 23, 15, 10]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        option = {
            tooltip: {
              trigger: 'item'
            },
          
            grid: {
                left: '5',
                right: '0',
                bottom: '5',
                top: '0',
                containLabel: true
            },
            legend: {
              
                bottom:0,
                height:10,
                left: 'center',
                textStyle:{
                    show:true,
                    color:'#fff', 
                },
                // doesn't perfectly work with our tricks, disable it
                selectedMode: false
              },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '90%'],
                center: ['50%', '60%'],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: true,
                  formatter(param) {
                    // correct the percentage
                    return param.name + ' (' + param.percent * 2 + '%)';
                  }
                },
                data: [
                  { value: 2.6, name: '虚假购物' },
                  { value: 2.6, name: '赌博博彩' },
                  { value: 2.6, name: '虚拟商品' },
                  { value: 4.8, name: '网游交易' },
                  { value: 7.8, name: '金融理财' },
                  { value: 14.9, name: '身份冒充' },
                  { value: 23.4, name: '虚假兼职' },
                  { value: 41.3, name: '交友' },
                  {
                    // make an record to fill the bottom 50%
                     value: 100,
                 
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: 'none',
                      decal: {
                        symbol: 'none'
                      }
                    },
                    label: {
                      show: false
                    }
                  }
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
    function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));
        option = {

            title: [{
                text: '年龄分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '65%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['16岁以下', '16-25岁', '26-35岁', '36-45岁', '46-55岁', '56-65岁', '65岁以上'],
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 0.53, name: '16岁以下' },
                        { value: 4.44, name: '16-25岁' },
                        { value: 3.52, name: '26-35岁' },
                        { value: 0.85, name: '36-45岁' },
                        { value: 0.45, name: '46-55岁' },
                        { value: 0.15, name: '56-65岁' },
                        { value: 0.06, name: '65岁以上' }
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

    function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {
            title: [{
                text: '性别分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '65%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['男性', '女性'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '性别分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 6.9, name: '女性' },
                        { value: 3.1, name: '男性' }
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
    function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {

            title: [{
                text: '文化程度分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '65%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['文盲', '小学', '初中', '中职', '高中', '高职', '本科以上'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [//7106
                        { value: 0.042, name: '文盲' },
                        { value: 1.531, name: '小学' },
                        { value: 5.546, name: '初中' },
                        { value: 0.939, name: '中职' },
                        { value: 0.991, name: '高中' },
                        { value: 0.857, name: '高职' },
                        { value: 0.297, name: '本科以上' }
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


})


















