
$(function () {
    echarts_1();
    echarts_2();
    
    function echarts_1() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart1'));
    
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
                        [89.3, 29.6,'贷款/代办信用卡类'],
                        [57.1, 19.7, '刷单返利类'],
                        [74.4, 14.8, '冒充客服类'],
                        [50.1, 8.6, '冒充军警购物类'],
                        [89.7, 7.4, '虚假网络投资理财类'],
                        [68.1, 6.2, '虚假购物服务类'],
                        [19.6, 4.9, '冒充领导熟人类'],
                    ]
                },
                grid: {
                    left: '0',
                    top: '0',
                    right: '0',
                    bottom: '25',
                    containLabel: true
                },
                xAxis: {
                    name: 'amount',
                    axisPointer: {
                        z: 100
                    },
                    axisLabel:{
                      show:false
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
                  /*  inRange: {
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
                      { value: 59, name: '男' },
                      { value: 41, name: '女' },
                     
                   
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
    
    
    
    
          
            // 使用刚指定的配置项和数据显示图表。
            
        
                    
        
    })
    
    
    
            
            
            
    
    
            
    
    
    
    
    
    
    
    
    
    