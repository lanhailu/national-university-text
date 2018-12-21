
         //二级菜单
			$(function() {
				hide(); /*DOM元素加载完就执行隐藏函数*/
			});

			function hide() {
				$(".menu").css("display", "none"); /*隐藏函数，就是将二级菜单隐藏*/
			}
			/*以下是第二部分*/
			$(".ul2 li").mouseenter(
				function() {
					$(this).find(".menu").css("display", "block"); /*鼠标移动到.t1 li上就执行显示函数*/
				}
			);
			$(".ul2 li").mouseleave(
				function() {
					$(this).find(".menu").css("display", "none");
					//hide(); /*鼠标离开后又隐藏*/
				}
			);
			
        //中间新闻点击事件
            $(".bbstab a").click(function() {
			$(".now").removeClass("now");
			$(this).addClass("now");
		    var index = $(".bbstab a").index($(this));
			$(".center").css("display", "none");
			$(".center:eq("+ index +")").css("display", "block");
		    })