import * as echarts from '../../ec-canvas/echarts';

Page({
  data: {
    ec3: {
      onInit: initChart3
    },
    ec31: {
      onInit: initChart31
    },
    ec4: {
      onInit: initChart4
    },
    ec5: {
      onInit: initChart5
    },
  }
});

function initChart3(canvas, width, height, dpr) {
  wx.request({
    //仅为示例，并非真实的接口地址
    url: 'https://miniapp.sjw2l3.com/test', 
    data: {
      x: '',
      y: ''
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success (res) { //需要注意的是，这里也可以是箭头函数，也有必须使用箭头函数的情况
      console.log(res.data)
    }
  })
  // 年份对应数据
  var yearData = [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ];

  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
      right: '10%',
    },
    grid: {
      top: "12%",
      left: '3%',
      right: '2%',
      bottom: '14%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: 'rgba( 255, 255, 255, 0.5)' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba( 255, 255, 255, 0.8)" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba( 255, 255, 255, 0.8)" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "rgba( 255, 255, 255, 0.2)"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '温度',
        data: yearData[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '湿度',
        data: yearData[1]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}
function initChart31(canvas, width, height, dpr) {
  // 年份对应数据
  var yearData = [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ];

  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
      right: '10%',
    },
    grid: {
      top: "12%",
      left: '3%',
      right: '2%',
      bottom: '14%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: 'rgba( 255, 255, 255, 0.5)' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba( 255, 255, 255, 0.8)" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba( 255, 255, 255, 0.8)" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "rgba( 255, 255, 255, 0.2)"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: 'PM2.5',
        data: yearData[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: 'PM10',
        data: yearData[1]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}
function initChart4(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      right: '10%',
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '10%',
      left: '10',
      right: '2%',
      bottom: '14%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.8)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: 'CO2',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
        //   color: new echarts.graphic.LinearGradient(
        //     0,
        //     0,
        //     0,
        //     1,
        //     [{
        //         offset: 0,
                color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
        //       },
        //       {
        //         offset: 0.8,
        //         color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
        //       }
        //     ],
        //     false
        //   ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [30, 40, 60, 90, 60, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 80, 100, 60, 40, 30, 40, 30, 40, 20, 60, 50, 40]
      },
      {
        name: "TVOC",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            // color: new echarts.graphic.LinearGradient(
            //   0,
            //   0,
            //   0,
            //   1,
            //   [{
            //       offset: 0,
                  color: "rgba(0, 216, 135, 0.4)",
            //     },
            //     {
            //       offset: 0.8,
            //       color: "rgba(0, 216, 135, 0.1)"
            //     }
            //   ],
            //   false
            // ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      },
      {
        name: "甲醛",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            // color: new echarts.graphic.LinearGradient(
            //   0,
            //   0,
            //   0,
            //   1,
            //   [{
            //       offset: 0,
                  color: "rgba(0, 216, 135, 0.4)",
            //     },
            //     {
            //       offset: 0.8,
            //       color: "rgba(0, 216, 135, 0.1)"
            //     }
            //   ],
            //   false
            // ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

function initChart5(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} \n {b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',
      bottom: '14%',
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: '年龄分布',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 1,
          name: "0岁以上"
        },
        {
          value: 4,
          name: "20-29岁"
        },
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}
