// 监控区域模块制作。
(function () {
  // 点击切换tab
  $(".monitor .tabs").on("click", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    // 点击tab时，显示相应的content
    $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
  })
  // 克隆marquee里面所有的行（row）
  $(".marquee-view .marquee").each(function () {
    var rows = $(this).children().clone();
    $(this).append(rows);
  })
})();

// 点位分布统计模块
(function () {
  // (1) 实例化对象
  var myChart = echarts.init(document.querySelector(".pie"));
  // (2) 指定配置项和数据
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: '点位统计',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 6,
          // 连接到文字的线长度
          length2: 8
        }
      }
    ]
  };
  // (3) 配置项和数据给实例化对象
  myChart.setOption(option);
  // (4) 当浏览器缩放的时候，图标等比例缩放
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

// 柱形图模块
(
  function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
    // 2. 指定配置和数据
    var option = {
      color: new echarts.graphic.LinearGradient(
        // (x1, y1)到点(x2, y2)之间渐变
        0, 0, 0, 1,
        [
          { offset: 0, color: "#00fffb" }, //0 起始颜色
          { offset: 1, color: "#0061ce" } //1 结束颜色
        ]
      ),
      tooltip: {
        trigger: 'item',
      },
      grid: {
        left: '0%',
        right: '3%',
        bottom: '3%',
        top: '3%',
        // 图表位置紧贴画布边缘是否显示刻度以及label文字，防止坐标轴标签溢出，跟grid区域有关系。
        containLabel: true,
        // 是否显示直角坐标系网格
        show: true,
        // grid 四条边框的颜色
        borderColor: "rgba(0, 240, 255, 0.3)"
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            // 让x轴每一个bar的描述和bar在刻度之间
            alignWithLabel: false,
            // 隐藏x轴刻度
            show: false
          },
          axisLabel: {
            color: '#4c9bfd'
          },
          // x轴这条线的颜色
          axisLine: {
            lineStyle: {
              color: 'rgba(0,240,255,0.3)'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            // 隐藏y轴刻度
            show: false
          },
          axisLabel: {
            color: '#4c9bfd'
          },
          // y轴这条线的颜色样式
          axisLine: {
            lineStyle: {
              color: 'rgba(0,240,255,0.3)'
            }
          },
          // y轴分割线的颜色样式
          splitLine: {
            lineStyle: {
              color: 'rgba(0, 240, 255,0.3)'
            }
          }
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
  }
)();