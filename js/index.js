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
