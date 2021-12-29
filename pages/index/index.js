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
    ec51: {
      onInit: initChart51
    },
    ec52: {
      onInit: initChart52
    },
  },
});

function initChart3(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  return new Promise((resolve, reject) => {
    wx.request({
      //仅为示例，并非真实的接口地址
      url: 'http://10.100.45.70:8000/indoor-query?addressId=1',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) { //需要注意的是，这里也可以是箭头函数，也有必须使用箭头函数的情况
        const indoorMonitor = res.data
        const indoorTemperature = [];
        const indoorHumidity = [];
        const indoorPM25 = [];
        const indoorPM10 = [];
        const indoorFormaldehyde = [];
        const indoorTVOC = [];
        const indoorCO2 = [];
        indoorMonitor?.forEach(element => {
          indoorTemperature.push(element.fields.indoorTemperature);
          indoorHumidity.push(element.fields.indoorHumidity);
          indoorPM25.push(element.fields.indoorPM25);
          indoorPM10.push(element.fields.indoorPM10);
          indoorFormaldehyde.push(element.fields.indoorFormaldehyde);
          indoorTVOC.push(element.fields.indoorTVOC);
          indoorCO2.push(element.fields.indoorCO2);
        });

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
            data: ['00:00',  '4:00',  '8:00',  '12:00',  '16:00',  '20:00', '24:00'],
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
              data: indoorTemperature
            },
            {
              type: 'line',
              smooth: true, // 圆滑的线
              name: '湿度',
              data: indoorHumidity
            }
          ]
        };
        chart.setOption(option);
        resolve(chart);
      }
    })
  })
}

function initChart31(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  return new Promise((resolve, reject) => {
    wx.request({
      //仅为示例，并非真实的接口地址
      url: 'http://10.100.45.70:8000/indoor-query?addressId=1',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) { //需要注意的是，这里也可以是箭头函数，也有必须使用箭头函数的情况
        const indoorMonitor = res.data
        const indoorTemperature = [];
        const indoorHumidity = [];
        const indoorPM25 = [];
        const indoorPM10 = [];
        const indoorFormaldehyde = [];
        const indoorTVOC = [];
        const indoorCO2 = [];
        indoorMonitor?.forEach(element => {
          indoorTemperature.push(element.fields.indoorTemperature);
          indoorHumidity.push(element.fields.indoorHumidity);
          indoorPM25.push(element.fields.indoorPM25);
          indoorPM10.push(element.fields.indoorPM10);
          indoorFormaldehyde.push(element.fields.indoorFormaldehyde);
          indoorTVOC.push(element.fields.indoorTVOC);
          indoorCO2.push(element.fields.indoorCO2);
        });

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
            data: ['00:00',  '4:00',  '8:00',  '12:00',  '16:00',  '20:00', '24:00'],
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
              data: indoorPM25
            },
            {
              type: 'line',
              smooth: true, // 圆滑的线
              name: 'PM10',
              data: indoorPM10
            }
          ]
        };
        chart.setOption(option);
        resolve(chart);
      }
    })
  })
}
function initChart4(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  return new Promise((resolve, reject) => {
    wx.request({
      //仅为示例，并非真实的接口地址
      url: 'http://10.100.45.70:8000/indoor-query?addressId=1',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) { //需要注意的是，这里也可以是箭头函数，也有必须使用箭头函数的情况
        const indoorMonitor = res.data
        const indoorTemperature = [];
        const indoorHumidity = [];
        const indoorPM25 = [];
        const indoorPM10 = [];
        const indoorFormaldehyde = [];
        const indoorTVOC = [];
        const indoorCO2 = [];
        indoorMonitor?.forEach(element => {
          indoorTemperature.push(element.fields.indoorTemperature);
          indoorHumidity.push(element.fields.indoorHumidity);
          indoorPM25.push(element.fields.indoorPM25);
          indoorPM10.push(element.fields.indoorPM10);
          indoorFormaldehyde.push(element.fields.indoorFormaldehyde);
          indoorTVOC.push(element.fields.indoorTVOC);
          indoorCO2.push(element.fields.indoorCO2);
        });

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
            data: ['00:00',  '4:00',  '8:00',  '12:00',  '16:00',  '20:00', '24:00'],
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
              data: indoorCO2
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
              data: indoorTVOC
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
              data: indoorFormaldehyde
            }
          ]
        };
        chart.setOption(option);
        resolve(chart);
      }
    })
  })
}

function initChart5(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  return new Promise((resolve, reject) => {
    wx.request({
      //仅为示例，并非真实的接口地址
      url: 'http://10.100.45.70:8000/indoor-query?addressId=1',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) { //需要注意的是，这里也可以是箭头函数，也有必须使用箭头函数的情况
        const indoorMonitor = res.data;
        const param = (Math.abs(indoorMonitor[5].fields.indoorTemperature-26)/10+Math.abs(indoorMonitor[5].fields.indoorHumidity-55)*100/25)/2;
        console.log('ec5',param);
        var option = {
          title: {
            text: grade(param),
            left: "48%",
            top: "42%",
            textAlign: "center",
            textStyle: {
              fontSize: "20",
              fontWeight: "500",
              color: "#F57474",
              textAlign: "center",
            },
          },
          color: ["#F57474", "rgba(175,143,230,.5)"],
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
                value: 100-param,
              },
              {
                value: param,
              },
            ]
          }]
        };
        chart.setOption(option);
        resolve(chart);
      }
    })
  })
}
function initChart51(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  return new Promise((resolve, reject) => {
    wx.request({
      //仅为示例，并非真实的接口地址
      url: 'http://10.100.45.70:8000/indoor-query?addressId=1',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) { //需要注意的是，这里也可以是箭头函数，也有必须使用箭头函数的情况
        const indoorMonitor = res.data;
        const param = (indoorMonitor[5].fields.indoorPM25/75+indoorMonitor[5].fields.indoorPM10/150)*100/2;
        console.log('ec51',param);
        var option = {
          title: {
            text: grade(param),
            left: "48%",
            top: "42%",
            textAlign: "center",
            textStyle: {
              fontSize: "20",
              fontWeight: "500",
              color: "#F57474",
              textAlign: "center",
            },
          },
          color: ["#F57474", "rgba(175,143,230,.5)"],
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
                value: param,
              },
              {
                value: 100-param,
              },
            ]
          }]
        };
        chart.setOption(option);
        resolve(chart);
      }
    })
  })
}
function initChart52(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  return new Promise((resolve, reject) => {
    wx.request({
      //仅为示例，并非真实的接口地址
      url: 'http://10.100.45.70:8000/indoor-query?addressId=1',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) { //需要注意的是，这里也可以是箭头函数，也有必须使用箭头函数的情况
        const indoorMonitor = res.data;
        const param = (indoorMonitor[5].fields.indoorFormaldehyde/80+indoorMonitor[5].fields.indoorTVOC/500+indoorMonitor[5].fields.indoorCO2/1000)*100/3;
        console.log('ec52',param);
        var option = {
          title: {
            text: grade(param),
            left: "48%",
            top: "42%",
            textAlign: "center",
            textStyle: {
              fontSize: "20",
              fontWeight: "500",
              color: "#F57474",
              textAlign: "center",
            },
          },
          color: ["#F57474", "rgba(175,143,230,.5)"],
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
                value: param,
              },
              {
                value: 100-param,
              },
            ]
          }]
        };
        chart.setOption(option);
        resolve(chart);
      }
    })
  })
}

function grade(params){
  const score=params/100;
  switch(true){
    case score<0.33: return "优";
    case score>0.33&&score<0.66: return "良";
    case score>0.66&&score<1: return "中";
    default: return "差"
  }
}
