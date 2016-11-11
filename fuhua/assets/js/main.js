
// $(function(){
// /*点击提交按钮，创建一个新的内容块，并将其插入类名.con块内，并保证新插入的块位于第一个位置*/
//  $('#fbsub').bind('click',function () {
// 			var fbdate=new Date();//创建时间对象
// 			var m=fbdate.getMonth()+1;//获取当前月份
// 			var d=fbdate.getDate();//获取当前日期
// 			var h=fbdate.getHours();//获取当前小时
// 			var m=fbdate.getMinutes()+0;//获取当前分钟
// 			/*判断当输入的内容为空时，提示请输入内容。*/
// 			var fb_img = $(".myhonm_uploimg").html();
// 			console.log(fb_img);
// 			if ($('.textarea1').val()!='') {
// 			    $('<div class="bt_zj"><dl><dt class="fl"><a href=""><img src="img/jpg/gr_tx.jpg"/*tpa=http://www.youxiaoyouda.com/assets/js/img/jpg/gr_tx.jpg*/ alt=""></a></dt><dd class="fl fo_18"><a href="">小树林</a></dd><dd class="fl fo_12">'+h+':'+m+'</dd></dl><div class="bt_zj_pl">'+$('#textarea1').val()+''+fb_img+'</div><div class="f_bpl"><a href="javascript::" class="my_plbtn">评论</a><a href="javascript::" class="my_zan">赞</a><a href="javascript::" class="my_xx">x</a></div><div class="pl_conten "><div class="msgbox"></div><textarea   class="edit" name="" rows="" cols=""  style="height: 30px; color: rgb(64, 64, 64);resize: none;" placeholder="我也说一句"></textarea><div class="but"><a href="javascript::" class="btn1">发表</a></div></div></div></div>').prependTo('.pc_fb_con');
// 				pl_qk();
// 				pl_btn();
// 				btn_lok();
// 			$(".myhonm_uploimg .imgBox").remove();

// 			}else {
// 				alert('请输入内容');
// 			}
// 		  $('.textarea1').val("");
// 		 })
// 		/*点击删除按钮，清除对应块*/
// 		$('.my_xx').live('click',function () {
// 			$('.bt_zj').eq($('.my_xx').index(this)).remove();
// 	    });
// 	btn_lok();
// 	function btn_lok(){
// 		$(".btn1").on('click',function () {
//        var dat=new Date();//创建时间对象
// 	   var hour=dat.getHours();//获取当前小时
// 	   var minute=dat.getMinutes();//获取当前分钟
// 	   var txt =$($(this).parent().prev()).val();
// 	 $(this).parent().prev().prev().append("<div class='msginfo'><div class='msg_content'><div class='msg_col'><a class='yh_m' href=''><img src='images/qx.png'/*tpa=http://www.youxiaoyouda.com/assets/js/images/qx.png*/ width='50' height='50' /></a></div><div class='msg_cor'><a href=''>周小轮：</a>"+txt+"<div class='msg_bot'><span>"+hour+":"+minute+"</span><span class='msg_x'>x</span></div></div></div></div>");
// 	$( $(this).parent().prev()).css({"height":"30px","color":"#404040"});
// 	$( $(this).parent().prev()).val("");


// 	});



// 		     $('.msg_x').live('click',function () {
// 				$('.msginfo').eq($('.msg_x').index(this)).remove();
// 			});

// 			  $('.closeA').live('click',function () {
// 					$('.imgBox').eq($('.closeA').index(this)).remove();


// 			  });
// 	}

//  function pl_btn(){
//  	$(".my_plbtn").each(function(index){
//  			$(this).click(function(){
// 	      $(".edit").eq($(this).index()).css("height","90px");
//       })
//  })

//  }
//  pl_btn();

// function pl_qk(){
// 	$(".edit").focus(function(){
//     $(this).text(" ");
//     $(this).css({"height":"90px","color":"#404040"});

//  })
// }
// pl_qk();

// });

//那个input需要移入清空

window.onload = function(){
	//demo4
	var easySlideFocus4 = document.querySelectorAll('.easySlideFocus4 span');
	var easySlidele = document.querySelectorAll('.easySlideWrap4 ul li');

	var es4 = new EasySlide('.easySlideWrap4',{
		    speed :1500,   //切换速度
		    type : 'x',   //切换类型，有3个选项，x，y，fade（这个代表渐隐渐现）
		    time : 3000,  //自动播放间隔时间
		    auto : true,  //是否自动播放
		before :  function(n){
			for(var i=0;i<easySlidele.length;i++){
				easySlideFocus4[i].className = '';
			};
			easySlideFocus4[n].className='active';
		}
	});
	for(var i=0;i<easySlideFocus4.length;i++){
		;(function(i){
			easySlideFocus4[i].onclick = function(){
				es4.to(i)
			}
		})(i);
	};
	document.querySelector('.enext').onclick = function(){
		es4.next();
	}
	document.querySelector('.eprev').onclick = function(){
		es4.prev();
	}


	var box_ul = document.querySelectorAll('.box ul li');
	var sd01 = new EasySlide('.box',{
	 speed :600,   //切换速度
		    type : 'x',   //切换类型，有3个选项，x，y，fade（这个代表渐隐渐现）
		    time : 2000,  //自动播放间隔时间
		    auto : true,  //是否自动播放
	});
	document.querySelector('.box .next.htm'/*tpa=http://www.youxiaoyouda.com/assets/js/.box .next*/).onclick = function(){
		sd01.next();
	}
	document.querySelector('.box .prev.htm'/*tpa=http://www.youxiaoyouda.com/assets/js/.box .prev*/).onclick = function(){
		sd01.prev();
	}


}

$(document).ready(function(){
    // $(document).scroll(function(){
    //     var top = $(document).scrollTop();
    //     if(top >= 50){
    //         $(".nav-com").addClass("fixed");
    //         $(".log_img").addClass("log_img_f");
    //         $(".logo a em").addClass("em");
    //         $(".nav_nav_pg .pg_a").addClass("pg_a_f");
    //         $(".pg_xlbtn").addClass("pg_xlbtn_f");
    //         $(".main").css({'marginTop':'138px'})
    //           $(".hender").css({'background':'#fff'});
    //            $(".logo").addClass("logo-f");
    //     }else{
    //         $(".nav-com").removeClass("fixed");
    //          $(".log_img").removeClass("log_img_f");
    //         $(".logo a em").removeClass("em");
    //          $(".logo").removeClass("logo-f");
    //         $(".nav_nav_pg .pg_a").removeClass("pg_a_f");
    //         $(".pg_xlbtn").removeClass("pg_xlbtn_f");
    //           $(".main").css({'marginTop':'0px'});
    //             $(".hender").css({'background':'#313539'})
    //     }

    // });

    $(".nav_pag_xm").mouseover(function(){
             $(".pg_xlbtn").addClass("bor-l");
             $(".nav_pag_xm .pg_a").addClass("bor-blue");
        });
     $(".nav_pag_xm").mouseout(function(){
             $(".pg_xlbtn").removeClass("bor-l");
               $(".nav_pag_xm .pg_a").removeClass("bor-blue");
        });


    $('textarea:not(:disabled)').each(function(){
        $(this).val($.trim($(this).val()));
    });

	function bss(){
		$(".box ul li:first").addClass("active");
	}
bss();
$('.cj-close').live('click',function () {
			$('.singleAttachment').eq($('.cj-close').index(this)).remove();
});
$(".ck-xstet").blur(function(){
	$(".jj-p").hide();
})
$(".cj-xm-filer").hover(function(){
	$(".tp-hgxs").show();
    },function(){
$(".tp-hgxs").hide();
})
$(".tx_xqbtn").hover(function(){
    $(".tx_xqbtn_ts").show();
    },function(){
$(".tx_xqbtn_ts").hide();
})
$(".ck-xstet").focus(function(){
	$(".jj-p").show();
})

	//	创客搜索展开
	function zj_zc_dq(){
	  var zcag =0;
	   $(".zj-zz-btn").click(function(){
		if(zcag == 0){
			$(".of-zj-dq").css({"width":"778px","height":"100%"});
		    $(".zj-zz-btn").html("收起-");
		    zcag = 1;
		}else if(zcag == 1){
	  		$(".of-zj-dq").css({"width":"605px","height":"30px"});
		    $(".zj-zz-btn").html("展开+");
	  		zcag = 0;
	  	}

	 })
	}
	zj_zc_dq();
	$(".fb_scimgbtn").change(function(){
     xzlenght();
    });

	function xzlenght(){
	    if($("#divNewPreview .imgBox").length==5){
		$("#divNewPreview .imgBox:last").remove();
//		alert("最多可以插入5张图片！");
//		$(".ts_scimg").text("最多可以插入5张图片！");
	 }
	}
//股权投资tab
$(".captrz_conterbt_l span").click(function(){
		$(this).addClass("cowt").siblings().removeClass();
		$(".cap_trz_conter .gq_index").hide().eq($(this).index()).show();
	})
//股权投资tab
//轮播
first_banner();
function first_banner(){
	$(".easySlideFocus span:first").addClass("active");
    $(".easySlideWrap li:first").addClass("active");
}

//轮播
//组队
   zd_jr_gjc_1();
	function zd_jr_gjc_1(){
	$(".zd_jr_gjc_1 a").each(function(index){
        $(this).click(function(){
           $(".zd_jr_gjc_1 a").removeClass("zd_span");
           $(".zd_jr_gjc_1 a").eq(index).addClass("zd_span");
        });
      });
   }
	zd_jr_gjc_2();
	function zd_jr_gjc_2(){
	$(".zd_jr_gjc_2 a").each(function(index){
        $(this).click(function(){
           $(".zd_jr_gjc_2 a").removeClass("zd_span");
           $(".zd_jr_gjc_2 a").eq(index).addClass("zd_span");
        });
      });
   }
    of_sx_1();
	function of_sx_1(){
	$(".of_sx_rm_1 a").each(function(index){
        $(this).click(function(){
        	 $(".of_sx_rm_1 a").removeClass("hover");
             $(".of_sx_rm_1 a").eq(index).addClass("hover");
        });
      });
   }
	 of_sx_2();
	function of_sx_2(){
	$(".of_sx_rm_2 a").each(function(index){
        $(this).click(function(){
        	 $(".of_sx_rm_2 a").removeClass("hover");
             $(".of_sx_rm_2 a").eq(index).addClass("hover");
        });
      });
   }
	 of_sx_3();
	function of_sx_3(){
	$(".of_sx_rm_3 a").each(function(index){
        $(this).click(function(){
        	 $(".of_sx_rm_3 a").removeClass("hover");
             $(".of_sx_rm_3 a").eq(index).addClass("hover");
        });
      });
   }
	 of_sx_4();
	function of_sx_4(){
	$(".of_sx_rm_4 a").each(function(index){
        $(this).click(function(){
        	 $(".of_sx_rm_4 a").removeClass("hover");
             $(".of_sx_rm_4 a").eq(index).addClass("hover");
        });
      });
   }
	 of_sx_5();
	function of_sx_5(){
	$(".of_sx_rm_5 a").each(function(index){
        $(this).click(function(){
        	 $(".of_sx_rm_5 a").removeClass("hover");
             $(".of_sx_rm_5 a").eq(index).addClass("hover");
        });
      });
   }
	hot_list();
	function hot_list(){
	$(".hot_list div").each(function(index){
        $(this).click(function(){
           $(".hot_list div a").removeClass("col_b");
           $(".hot_list div a").eq(index).addClass("col_b");
        });
      });
   }
	hot_co_bt();
	function hot_co_bt(){
	$(".hot_co_bt a").each(function(index){
        $(this).click(function(){
           $(".hot_co_bt a").removeClass("gy_axs");
           $(".hot_co_bt a").eq(index).addClass("gy_axs");
        });
      });
   }
//	组队展开
zd_zk();
function zd_zk(){
	  var zg =0;
	   $(".zd_Btn_co_2").click(function(){
		if(zg == 0){
			$(".zd_jr_gjc_2").css({"width":"1080","height":"138"});
		    $(".zd_Btn_co_2").html("收起-");
		    zg = 1;
		}else if(zg == 1){
	  		$(".zd_jr_gjc_2").css({"width":"550","height":"50"});
		    $(".zd_Btn_co_2").html("展开+");
	  		zg = 0;
	  	}

	 })
	}
	zd_k();

//	组队展开
function zd_k(){
	  var zlag =0;
	   $(".zd_Btn_co").click(function(){
		if(zlag == 0){
			$(".zd_dq_xx").css("width","1100px");
		    $(".zd_Btn_co").html("收起-");
		    zlag = 1;
		}else if(zlag == 1){
	  		$(".zd_dq_xx").css("width","800px");
		    $(".zd_Btn_co").html("展开+");
	  		zlag = 0;
	  	}

	 })
	}
	zd_k();
	//	创客搜索展开
	function zd_k(){
	  var zlag =0;
	   $(".zd_Btn_co").click(function(){
		if(zlag == 0){
			$(".zd_dq_xx").css("width","1100px");
		    $("zd_Btn_co").html("收起-");
		    zlag = 1;
		}else if(zlag == 1){
	  		$(".zd_dq_xx").css("width","800px");
		    $(".zd_Btn_co").html("展开+");
	  		zlag = 0;
	  	}

	 })
	}
	zd_k();
	//	创客搜索展开
	function zk_k(){
	  var flag =0;
	   $(".of_Btn_co").click(function(){
		if(flag == 0){
			$(".of_sx_dq").css({"width":"930px","height":"100%"});
		    $(".of_Btn_co").html("收起-");
		    flag = 1;
		}else if(flag == 1){
	  		$(".of_sx_dq").css({"width":"581px","height":"30px"});
		    $(".of_Btn_co").html("展开+");
	  		flag = 0;
	  	}

	 })
	}
	zk_k();
//组队
//	创建项目
	xm_xzbq();
	function xm_xzbq(){
	  $(".checkbox label").each(function(index){
	   var xlh =0;
        $(this).click(function(){
         if(xlh == 0){
			 $(".checkbox label").eq(index).addClass("xm_xzbq");
		    xlh = 1;
		}else if(xlh == 1){
	  		 $(".checkbox label").eq(index).removeClass("xm_xzbq");
	  		xlh = 0;

  	     }//	else if($(".xm_xzbq").length>3){
//            	$(".jg").html("最多可选3个！")
//            	 $(".checkbox label").eq(index).removeClass("xm_xzbq");
//
//            }
        });

      });
   }



	 function xm_bt(){
	   	var xm_bt = $("#xm_bt").val();
	    if(xm_bt==""){
	      $(".ts_bt").html("请填写项目标题!");
	    }else if(!xm_bt==""){
	         $(".ts_bt").html("");
	       }
	  }
	   function xm_ms(){
	   var xm_ms = $("#xm_ms").val();
	    if(xm_ms==""){
	      $(".ts_ms").html("请填写项目描述!");
	    }else if(!xm_ms==""){
	         $(".ts_ms").html("");
	       }
	  }
	  function xm_ys(){
	   var xm_ys = $("#xm_ys").val();
	    if(xm_ys==""){
	     $(".ts_ys").html("请填写项目优势!");
	    }else if(!xm_ys==""){
	         $(".ts_ys").html("");
	       }
	  }
	$("#xm_bt").blur(function(){
		xm_bt();
	})
	$("#xm_ms").blur(function(){
		xm_ms();
	})
	$("#xm_ys").blur(function(){
		xm_ys();
	})
	$("#xm_tjsh").click(function(){
	 	xm_ms();
	 	xm_ys();
	 	xm_bt();
	 })
//	创建项目
 $("#xm_ms").focus(function(){
      $(".popover").show();
    })
  $("#xm_ms").blur(function(){
      $(".popover").hide();
    })

//$("#xm_ys").focus(function(){
//    $(".ts_ys").html("asdasd");
// })
//	商品兑换
$(".sc_sp_dh_btn").click(function(){
	$(".sc_sp_xqtc").show();
})
$(".tc_chander_x").click(function(){
	$(".sc_sp_xqtc").hide();
})


  function sc_xm(){
    var sc_xm = $(".sc_dz").val();
    if(sc_xm==""){
      $(".spxm").html("*"+"请输入姓名！");
    }else if(!sc_xm==""){
       $(".spxm").html("");
       }
     }
 function sc_dz(){
    var sc_dz = $(".sc_dz").val();
    if(sc_dz==""){
      $(".spdz").html("*"+"请输入收货地址！");
    }else if(!sc_dz==""){
       $(".spdz").html("");
       }
     }
 function sc_sj(){
      var search = /^1[3|4|5|8][0-9]\d{4,8}$/;
      var sc_sj = $(".sc_sj").val();
      if(sc_sj==""){
         $(".spsj").html("*"+"手机号码格式为空");
      }else if(!search.test(sc_sj)){
         $(".spsj").html("*"+"手机格式不正确");
      }else if(search.test(sc_sj)){
         $(".spsj").html("");
      }
     }
//商品兑换


//	创客搜索展开结束
//技术支持商品排序
    sc_px();
	function sc_px(){
	$("#sc_sc_px a").each(function(index){
        $(this).click(function(){
           $("#sc_sc_px a").removeClass("sc_ys");
           $("#sc_sc_px a").eq(index).addClass("sc_ys");
        });
      });
   }
//技术支持商品排序
//活动票种
    clxy_xq_bt();
	function clxy_xq_bt(){
      $(".wybm_btnl").click(function(){
       var uid = $(this).attr('data-id');
       if(uid==''){
           $(".dl_dl").show();
           return false;
       }
      	$(".clxy_xq_bqxx").show();
      })

      $(".gm_hd_btnfh").click(function(){
      	$(".clxy_xq_bqxx").hide();
      })
        $(".bqx-gb").click(function(){
      	$(".clxy_xq_bqxx").hide();
      })
   }
//活动票种
	nav_lsit();
	function nav_lsit(){
	$(".pg_a").each(function(index){
        $(this).click(function(){
           $(".pg_a").removeClass("nav_axs");
           $(".pg_a").eq(index).addClass("nav_axs");
           $(".clxy_xq_bt_ts span").hide().eq($(this).index()).show();
        });
      });
   }
 lc_px();
	function lc_px(){
	$(".nav_pag_xl a").each(function(index){
        $(this).click(function(){
           $(".nav_pag_xl a").removeClass("xl_a");
           $(".nav_pag_xl a").eq(index).addClass("xl_a");
        });
      });
   }
sc_lsit();
 function sc_lsit(){
	$(".sc_nav li a").each(function(index){
        $(this).click(function(){

           $(".sc_nav li a").removeClass("sc_pg_a");
           $(".sc_nav li a").eq(index).addClass("sc_pg_a");
        });
      });
   }
  $(".wap").hover(function(){
   $(".none").fadeToggle();
//$(".none").show();
  });
  $(".index_dl").click(function(){
    $(".dl_dl").fadeIn();
  });
  $(".index_zc").click(function(){
    $(".dl_zc").fadeIn();
  });
// $(".tc_dl").click(function(){
//  $(".tc_dl").hide();
//});
   $(".gb_01").click(function(){
    $(".dl_dl").fadeOut();
     $(".emile_fc_content").fadeOut();

  });
  $(".gb_02").click(function(){
    $(".dl_zc").fadeOut();
  });

  var wait=60;
  function time(o) {
	if (wait == 0) {
		o.removeAttribute("disabled");
		o.value="免费获取验证码";
		wait = 60;
	} else {
		o.setAttribute("disabled", true);
		o.value="重新发送(" + wait + ")";
		wait--;
		setTimeout(function() {
		time(o)
		},
		1000)
	}
}
document.getElementById("zc_hq").onclick=function(){time(this);
}



  $(window).scroll( function(){
		var top= document.body.scrollTop || document.documentElement.scrollTop;
		//$top = $("body").scrollTop();
		if(top > 800){
			$(".v_main_back").show();
		}
		else if(top < 800){
			$(".v_main_back").hide();
		}
	})
	$(".v_main_back").click(function(){
		$("body,html").animate({scrollTop:0},1500);
	})

	$("#tab_title div").click(function(){
		$(this).addClass("selected").siblings().removeClass();
		$("#tab_con  .ss").hide().eq($(this).index()).show();
	})
//	学院课程
	$(".ck_hdr_nav span").click(function(){
		$(this).addClass("kc_hover").siblings().removeClass();
		$(".ck_hdr .ck_xykc").hide().eq($(this).index()).show();
	})
//	学院课程
//我要加入

//我要加入
	$(".eml_btn").click(function(){
		$(".tc_dl_mb_02").css("height","571");
		$(".tc_dl_mb_02_dd").css("height","571");
	})
	$("#sx").click(function(){
		$(".tc_dl_mb_02").css("height","708");
		$(".tc_dl_mb_02_dd").css("height","708");
	})

  $(".dl_tz").click(function(){
		$(".dl_zc").hide();
	    $(".dl_dl").show();

	})
  $(".ljzc").click(function(){
		$(".dl_zc").show();
	    $(".dl_dl").hide();

	})
   $(".dl_btn").click(function(){
		$(".dl_zc").hide();
	    $(".dl_dl").show();

	})
 $(".zc_btn").click(function(){
		$(".dl_zc").show();
	    $(".dl_dl").hide();

	})


//我要组队
$(".zform_xyb_btn").click(function(){
//$(".myzd_conter").eq(0).fadeIn();
//$(".myzd_conter").eq(1).fadeOut();
   $(".myzd_conter").eq(0).hide(300);
  $(".myzd_conter").eq(1).show(300);
})
$(".zdcj_tx").click(function(){
  $(".myzd_conter").eq(1).hide(300);
  $(".myzd_conter").eq(2).show(300);
})
$(".zdcj_ts").click(function(){
  $(".myzd_conter").eq(1).hide(300);
  $(".myzd_conter").eq(0).show(300);
})
$(".zdwy_fbr_sybtn").click(function(){
  $(".myzd_conter").eq(2).hide(300);
  $(".myzd_conter").eq(1).show(300);
})
$(".tjhhr_btn").click(function(){
  $(".tjhhr_fc_con").show(300);
})

$(".fbcon_x").click(function(){
  $(".tjhhr_fc_con").hide();
})

$('#tj_bc_btn').bind('click',function () {
 $(".tjhhr_fc_con").hide();
  var date=new Date();
  var year = date.getFullYear()
  var month=date.getMonth()+1;//获取当前月份
  var day=date.getDate();//获取当前日期
  var hours=date.getHours();//获取当前小时
  var minutes=date.getMinutes();//获取当前分钟
  if ($('.tjhhr_tc_fbcon input').val()!='') {
  $('<div class="zd_form_cjb"><input class="ap_px" type="text" name="ap_px[]" value="" readonly="readonly"><input class="ap_gz xg_input" type="text" name="ap_gz[]" value="'+$('.tjhhr_tc_gwmc').val()+'" readonly="readonly"><input class="ap_wz xg_input" type="text"  name="ap_wz[]" value="'+$('.tjhhr_tc_ytdd').val()+'" readonly="readonly"><input  class="ap_gq xg_input" type="text" name="ap_gq[]" value="'+$('.tjhhr_tc_gwzz').val()+'" readonly="readonly"><input  class="ap_sj xg_input" type="text" name="ap_sj[]" value="'+$('.tjhhr_tc_hbfs').val()+'" readonly="readonly"><input  class="ap_ms" type="text" name="ap_ms[]" value="'+year+'-'+month+'-'+day+'" readonly="readonly"><span ><a href="javascript::" class="gcs_zdbj">编辑</a>&nbsp;|&nbsp;<a href="javascript::" class="gcs_zdsc">删除</a></span></div>').prependTo('.zd_form_hbnr');
	changeNum();
    $(".tjhhr_tc_fbcon p input").val("").focus(); // 清空并获得焦点
    $(".tjhhr_tc_fbcon p .lc.htm"/*tpa=http://www.youxiaoyouda.com/assets/js/.tjhhr_tc_fbcon p .lc*/).val("").focus(); // 清空并获得焦点
	$(".form_hbnr-lhide").hide();


  }else{
		alert('请输入内容');
}
  bj_btn();
})


bj_btn();
function bj_btn(){
     var llag =0;
 $(".gcs_zdbj").bind("click",function(){
     // alert("asdasd");
var ll = $(this).parent().siblings(".xg_input");
 if(llag == 0){
        $(ll).addClass("bjspan").removeAttr("readonly");//去除input元素的readonly属性 
            // $(this).html("完成");
            llag = 1;
        }else if(llag == 1){
         $(ll).removeClass("bjspan");
        $(ll).attr({ readonly: 'true' });
            // $(this).html("编辑");
            llag = 0;
    }


       
 });

$(".zd_form_cjb .xg_input").blur(function (){ 
    $(this).removeClass("bjspan");
    $(this).attr({ readonly: 'true' });

    // alert('请输入内容');
 });

}
function changeNum(){
	 var ul1s = $(".zd_form_cjb");
		for (var i = 0; i < ul1s.length; i++){
			$(".zd_form_cjb .ap_px").eq(i).val(i+1);
		}
	}
$('.gcs_zdsc').live('click',function () {
        var id = $(this).attr('data-id');
        $('.zd_form_cjb').eq($('.gcs_zdsc').index(this)).remove();
      /*  changeNum();*/
        var action = '/project/delPartner';
        if(id){
            $.post(action,{id:id},function(data){
                if(data.code == 0){
                    sweetAlert(data.message);
                }else{
                    sweetAlert(data.message);
                }
            },'json');
        }
	});

$(".zd_form_fbr_had span").click(function(){
        $(this).addClass("fbr_had_btn").siblings().removeClass("fbr_had_btn");
		$(".zd_form_fbr_grxxcon").hide().eq($(this).index()).show();
 });

//我要组队


  $('#test2').click(function(){                        //点击发布的事件
        if($('#test1')[0].value==""){
            var finish=$('<div class="error"></div>').appendTo($('#outer')).hide().fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200);
            return;
        }else{
            $('#test2')[0].disabled=true;                //发布成功后，禁止
            var timer=new Date();
            //微博
            $('<div class="test"><span class="imgOut"><img src="img/jpg/fb_ss.jpg"/*tpa=http://www.youxiaoyouda.com/assets/js/img/jpg/fb_ss.jpg*/ class="imgs"/></span><span class="outnm">绿箭侠</span></span><span class="outdata">'+timer.getHours()+"时"+timer.getMinutes()+"分"+timer.getSeconds()+"秒"+'</span><div class="con"></div><div class="inf"><input type="button" value="删除" class="bu"/></div></div>').prependTo($('#test3'));
            $('.con')[0].innerText=$('#test1')[0].value;
            //头像信息
//          $('.imgs:eq(0)').hover(
//              function(){$('<ul class="imgInf"><li>名字：sfdsf</li><li></li><li>现居：石景山</li></ul>').appendTo($(this).parent());},
//              function(){$('.imgInf').remove();}
//          )
            //清空
            $('#test1')[0].value="";
            //发布成功时动画
            $('<div class="finish">发布成功</div>').appendTo($('#outer')).hide().fadeIn(500).fadeOut(500,function(){$('#test2')[0].disabled=false;});
            //插入节点时的动画效果
            $('.test:first').hide().slideDown("slow");
            //删除按钮的事件
            $('.bu:eq(0)').click(function(){
                if(confirm('确定删除吗？')){
                    $(this).parent().parent().hide(1000,function(){
                        $(this).remove();
                    });
                }
            });
        }
    })
			var jiathis_config = {
			    url: "http://www.chuangke.com/",
			    title: "百度主页分享",
			    summary:"我们试试分享百度主页!"
			}


//	eml_btn
//登陆注册
function text_dl(){
	$(".yhxy_ope").click(function(){
		$(".zc_fwxy_wc").show();
	})
	$(".zc_fwxy_gbtn").click(function(){
		$(".zc_fwxy_wc").hide();
	})
	$(".zc_fwxy-button-text").click(function(){
		$(".zc_fwxy_wc").hide();
	})

	$(".yh_dl").hover(function(){
		$(".xl_cd").show();
	})
	$(".yh_xx").hover(function(){
     $("._xx_tx").show();
       },function(){
   $("._xx_tx").hide();
    });
	$(".yh_dl").hover(function(){
		$(".xl_cd").show();
	},function(){
		$(".xl_cd").hide();
	});
	$('#txtUserName').focus(function () {
	$('#txtUserName').val('');
	})
	$('#txtPassWord').focus(function () {
	$('#txtPassWord').val('');
	})
	$('#txtUserName').blur(function () {
	if ($('#txtUserName').val() =='')
	{
	$('#txtyh').show();
	$('#txtyh').html('用户名不能为空');
	//重新获得焦点
//	 $('#txtUserName').focus();
	}
	if ($('#txtUserName').val() !=='')
	{
	$('#txtyh').hide();
	//重新获得焦点
//	 $('#txtUserName').focus();
	}
	})
	$('#txtPassWord').blur(function () {
	if ($('#txtPassWord').val() == '') {
	$('#txtmm').show();
	$('#txtmm').html('密码不能为空');
	}
	if ($('#txtUserName').val() !=='')
	{
	$('#txtmm').hide();
	//重新获得焦点
//	 $('#txtUserName').focus();
	}
	})
}
	text_dl();

	$('.btnSubmit').click(function () {
		text_dl();

	})
//注册

	 $(".subm_btn").click(function(){
    	  val_one();
//phone();
     })
	$(".emile").blur(function(){
     emile();
    })
	$(".phone").blur(function(){
     phone();
    })

	$(".phone_yzm").blur(function(){
     phone_yzm();
    })
	$(".phoneyan").blur(function(){
     phoneyan();
    })
	$(".passwor").blur(function(){
      passwor();
    })
  $(".passwor_ol").blur(function(){
      passwor_ol();
    })
    function emile(){
      var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
      var mailbox = $(".emile").val();
      if(mailbox==""){
        $(".sp").html("邮箱格式为空！");
      }else if(!search_str.test(mailbox)){
        $(".sp").html("邮箱格式不正确！");
     }else if(search_str.test(mailbox)){
        $(".sp").html("");
     }
   }

    function phone(){
      var search = /^1[3|4|5|8][0-9]\d{4,8}$/;
      var phone_1 = $(".phone").val();
      if(phone_1==""){
         $(".sp1").html("手机号码格式为空");
         $(".wc_zd").show();
      }else if(!search.test(phone_1)){
    	   $(".wc_zd").show();
         $(".sp1").html("手机格式不正确");
      }else if(search.test(phone_1)){
    	   $(".wc_zd").hide();
         $(".sp1").html("");
      }
     }

     function phone_yzm(){
      var phone_yzm = $(".phone_yzm").val();
      if(phone_yzm==""){
         $(".yzm").html("验证码不能为空");
      }else if(!phone_yzm==""){
       $(".yzm").html("");
      }
    }

     function phoneyan(){
      var phoneyan = $(".phoneyan").val();
      if(phoneyan==""){
         $(".phyan").html("手机验证码不能为空");
       } else if(!phoneyan==""){
       $(".phyan").html("");
    }
     }
      function passwor(){
      var passwor = $(".passwor").val();
      if(passwor==""){
         $(".pas").html("密码不能为空");
       }else if(!passwor==""){
       $(".pas").html("");
       }
     }
      function passwor_ol(){
      var passwor_ol = $(".passwor_ol").val();
      if(passwor_ol==""){
         $(".pas_ol").html("密码不能为空");
       }else if(!passwor==""){
       $(".pas_ol").html("");
       }
     }
//注册
//登陆注册结束

//联系我们
  $(".new_lx").blur(function(){
  	lx_phone();
  })
  $(".lx_xq").blur(function(){
  	lx_xq();
  })
  $(".lx_fsbtn").submit(function(e){
    	lx_xq();
     	lx_phone();
   });
  function lx_phone(){
      var search = /^1[3|4|5|8][0-9]\d{4,8}$/;
      var phone_1 = $(".new_lx").val();
      if(phone_1==""){
         $(".ts_sp").html("手机号码格式为空！");
      }else if(!search.test(phone_1)){
         $(".ts_sp").html("手机格式不正确!");
      }else if(search.test(phone_1)){
         $(".ts_sp").html("");
      }
     }
   function lx_xq(){
      var lx_xq = $(".lx_xq").val();
      if(lx_xq==""){
         $(".tc_lx_xq").html("了解详情不能为空！");
       }else if(!lx_xq==""){
       $(".tc_lx_xq").html("");
       }
     }
//联系我们

});



function PreviewImage(obj) {
    var _divNewPreview = document.getElementById('divNewPreview');
    var allowExtention = ".jpg,.bmp,.gif,.png"/*tpa=http://www.youxiaoyouda.com/assets/js/.jpg,.bmp,.gif,.png*/;
    //,允许上传文件的后缀名
    var extention = obj.value.substring(obj.value.lastIndexOf(".") + 1).toLowerCase();
    var browserVersion = window.navigator.userAgent.toUpperCase();
    if (allowExtention.indexOf(extention) > -1) {
        //判断是否是IE浏览器
        if ( obj.files ) {
            //兼容HTML5获取路径
            if ( typeof FileReader !== "undefined") {
                for(var i = 0;i < obj.files.length;i++){
                    var file = obj.files[i];
                    var reader = new FileReader();
                    reader.readAsDataURL(obj.files[i]);
                    reader.onload = function(e) {
                        //添加图片
                        _divNewPreview.insertAdjacentHTML("beforeend", '<div class="imgBox"><a index="1" href="javascript:;" class="closeA"></a><a class="fancybox" href="'+this.result+'" data-fancybox-group="gallery"><img src="'+this.result+'" alt=""></a></div>');

                    };
                };
            };
        }else{
            //添加图片
            obj.select();
            obj.blur();
            _divNewPreview.insertAdjacentHTML("beforeend", '<div class="imgBox"></div>');
            _divNewPreview.lastChild.style.filter = " progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            _divNewPreview.lastChild.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = document.selection.createRange().text;
        };
    } else {
        alert("仅支持jpg,bmp,gif,png为后缀名的文件!");
        obj.value = "";
    };

};
function _hdm(obj1,obj2,obj3){
	$(obj1).click(
		function(){
			$(obj1).removeClass(obj3);
			$(this).addClass(obj3);
			var id = $(obj1).index(this);
			$(obj2).hide();
			$(obj2).eq(id).show();
		}
	)
}
