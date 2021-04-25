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
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ]
      }
    ]
  };
  // (3) 配置项和数据给实例化对象
  myChart.setOption(option);
})()
