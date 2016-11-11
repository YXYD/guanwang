	    var clock;
	
	    $(function(){
	        $('.bxslider').bxSlider({
	            adaptiveHeight: true,
	            adaptiveWidth: true,
	            mode: 'fade',
	            auto: true,
				stopAutoOnClick: true,
				autoHover: true,
	            pause: 6000
	        });

			var mySlider = $(".home_product_scroller").slider({
				ticks: [0, 100, 200, 300],
				ticks_labels: ['找外包', '找程序员', '项目众包', '有小有大服务'],
				ticks_snap_bounds: 30,
				step: 100,
				tooltip:'hide'
			});
			mySlider.on('change', function(){
				var handler = $(".home_product .min-slider-handle");
				var v = mySlider.slider('getValue');
				if(v == 0){
					handler.addClass("outsource");
					handler.removeClass("developer");
					handler.removeClass("crowedsource");
					handler.removeClass("yxyd");

					$(".home_product_item.outsource").addClass("active").siblings().removeClass("active");
				}
				else if(v == 100){
					handler.removeClass("outsource");
					handler.addClass("developer");
					handler.removeClass("crowedsource");
					handler.removeClass("yxyd");

					$(".home_product_item.developer").addClass("active").siblings().removeClass("active");
				}
				else if(v == 200){
					handler.removeClass("outsource");
					handler.removeClass("developer");
					handler.addClass("crowedsource");
					handler.removeClass("yxyd");

					$(".home_product_item.crowedsource").addClass("active").siblings().removeClass("active");
				}
				else if(v == 300){
					handler.removeClass("outsource");
					handler.removeClass("developer");
					handler.removeClass("crowedsource");
					handler.addClass("yxyd");

					$(".home_product_item.yxyd").addClass("active").siblings().removeClass("active");
				}
			});
	 
	    });
		
		
		
		$(function(){

			var manualClose = $.cookie("bottom_manual_close");
			var visits = $.cookie("visits");
			if(!(manualClose && visits >= 1)){
				$(window).scroll(function(){
					var now_height = $(document).scrollTop();//当前滚动条位置
					if(now_height > 0){
						$("#isClose").show();
					}
					else{
						$("#isClose").hide();
					}
				})

				$("#closeP").click(function(){
					$("#isClose").remove();
					$.cookie("bottom_manual_close",1);
				});
			}

			var features_selected = 0;
			var featureTimer = null;

			function featureMove() {
				features_selected++;
				if(features_selected >4)features_selected = 0;
				$(".home_main_section_02_sixpic div.home_main_section_items").eq(features_selected).show().siblings().not("ul.icons").hide();
			    $(".home_main_section_02_sixpic .icons li").eq(features_selected).addClass('active').siblings().removeClass('active');
			}
			featureTimer = window.setInterval(featureMove, 5000);

			$(".home_main_section_02_sixpic .icons li").click(function(){
				window.clearInterval(featureTimer);

				var index = $(this).index()-1;
				if(index < 0) index=-1;
				features_selected = index;
				featureMove();

				featureTimer = window.setInterval(featureMove, 5000);
			})

			$(".home_main_section_title").hover(function(){
				window.clearInterval(featureTimer);
			},function(){
				featureTimer = window.setInterval(featureMove, 5000);
			})
			$(".home_main_section_content").hover(function(){
				window.clearInterval(featureTimer);
			},function(){
				featureTimer = window.setInterval(featureMove, 5000);
			})
		})

		
			function inputonfocusoronblur(ele, val, flag) {
				//获得焦点
				if (flag == 1) {
					if (ele.value.trim() == val) {
						ele.value = " ";
					}
				} else if (flag == 2) { //失去焦点
					if (!ele.value.trim()) {
						ele.value = val;
					}
				}
			}
	
			function textareaonfocusoronblur(ele, val, flag) {
				//获得焦点
				if (flag == 1) {
					if (ele.innerHTML.trim() == val) {
						ele.innerHTML = " ";
					}
				} else if (flag == 2) { //失去焦点
					if (!ele.innerHTML.trim()) {
						ele.innerHTML = val;
					}
				}
			}
			
			$(".index_request_btn").click(function(){
				var name = $.trim($('input[name=user_name]').val());
				var mobile = $.trim($('input[name=mobile]').val());
				var description = $.trim($('textarea[name=description]').val());
				if(name == "您的姓名" || name.length < 1){
					KM.modal.alert("请填写您的姓名");
					return false;
				}
				
				var reg =/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/; 
		        if(!reg.test(mobile)) 
		        { 
		            KM.modal.alert("请输入正确的手机号码"); 
		            return false; 
		        }
		        
				if(description == "简要描述开发需求" || description.length < 1){
					KM.modal.alert("请填写简要描述开发需求");
					return false;
				}
				
				$.post('http://www.kuai.ma/request-release.html',{'contact_person':name,'mobile':mobile,'description':description,'reuqest_type':"1"},function(msg){
					if(msg == 'succ'){
						$('input[name=user_name]').val('');
						$('input[name=mobile]').val('');
						$('textarea[name=description]').val('');
						$("#isClose").remove();
						$("#tankuang").modal("show");
					}
				});
			})