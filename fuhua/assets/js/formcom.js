
             var validator1;
		    var validator2;
		    var validator3;
		    var validator4;
		    var validator_yjfk;
		    $(document).ready(function () {
		    	
		        validator1 = $("#demoForm").validate({
		            	 errorPlacement: function(error, element) { //指定错误信息位置 
					if (element.is(':radio') || element.is(':checkbox')) { //如果是radio或checkbox 
					var eid = element.attr('name'); //获取元素的name属性 
					error.appendTo(element.parent()); //将错误信息添加当前元素的父结点后面 
					} else { 
					error.insertAfter(element); 
					} 
					}, 
		            rules: {
		                username: {
		                    required: true
		                    minlength: 2,
		                    maxlength: 10
		                },
		                password: {
		                    required: true,
		                    minlength: 2,
		                    maxlength: 16
		                }
		              
		            },
		            messages: {
		                username: {
		                    required: '请输入用户名',
		                    minlength: '用户名不能小于2个字符',
		                    maxlength: '用户名不能超过10个字符',
		                    remote: '用户名不存在'
		                },
		                password: {
		                    required: '请输入密码',
		                    minlength: '密码不能小于2个字符',
		                    maxlength: '密码不能超过16个字符'
		                }
		            }
		            
		        });
		
//		        $("#check").click(function () {
//		            console.log($("#demoForm").valid() ? "填写正确" : "填写不正确");
//		        });
				 validator2 = $("#eml_zc").validate({
				 	     rules: {
						      email: {
						        required: true,
						        email: true
						      },
						      password: {
						        required: true,
						        minlength: 5
						      },
						         agree:{
						           required: true
						         }
						    },
						    messages: {
						    	 email: {  
                                  required: "请输入Email地址",  
                                   email: "请输入正确的email地址"  
                               }, 
						      password: {
						        required: "请输入密码",
						        minlength: "密码长度不能小于 5 个字母"
						      },
						        agree: "请接受我们的声明"
						    }
						    
		                  
					});
					
			  jQuery.validator.addMethod("isMobile", function(value, element) {
					var length = value.length;
					var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
					return this.optional(element) || (length == 11 && mobile.test(value));
				}, "请正确填写您的手机号码"); 
				
			    validator3 = $("#phone_zc").validate({
				 	    rules: {
							phone : {
					            required : true,
					            minlength : 11,
					            // 自定义方法：校验手机号在数据库中是否存在
					            // checkPhoneExist : true,
					            isMobile : true
					        },
					        code : {
//					            digits : true,
					            required : true
					        },
					        codet : {
//					            digits : true,
					            required : true
					        },
						      password: {
						        required: true,
//						        minlength: 5
						      },
						        agree:{
						           required: true
						         } 
						    },
						    messages: {
						      password: {
						        required: "请输入密码",
//						        minlength: "密码长度不能小于 5 个字母"
						      },
						       phone : {
						            required : "请输入手机号",
						            minlength : "手机不能小于11个字符",
						            isMobile : "请正确填写您的手机号码"
						        },
						      code : {
					            required : "请输入验证码"
//					            digits : "验证码应该输入数字"
					         },
					           codet : {
					            required : "请输入手机验证码",
//					            digits : "验证码应该输入数字"
					         },
						        agree: "请接受我们的声明"
						    }
		                
					});
					
			  
			    validator_yjfk = $("#yjfk_form").validate({
				 	     rules: {
						      jj_email: {
						        required: true,
						        email: true
						      },
						      jj_name: {
						        required: true
//						        minlength:2
						      },
						         agree:{
						           required: true
						         }
						    },
						    messages: {
						    	jj_email: {  
                                  required: "请输入Email！",  
                                   email: "email格式错误！"  
                               }, 
						      jj_name: {
						        required: "称呼不能为空！",
						        minlength: "请认真填写！"
						      }
						    }
					});
				
		        validator4 = $("#new_file").validate({
				 	    rules: {
							phone : {
					            required : true,
					            minlength : 11,
					            // 自定义方法：校验手机号在数据库中是否存在
					            // checkPhoneExist : true,
					            isMobile : true
					        },
					        cod:{
					           required:true
					        }
						     
						    },
						    messages: {
						       phone : {
						            required : "请输入手机号",
						            minlength : "手机不能小于11个字符",
						            isMobile : "请正确填写您的手机号码"
						        },
						      cod : {
					           required: '请输入想了解的信息',
		                      
					         }
						    }
		                  
					});
					 
					  validator_cjxm = $("#cjxm_form").validate({
				 	    rules: {
							xmbt: {
					           required : true
//					           minlength:6
					        },
					        xm_ms:{
					           required:true
					        },
					         topic: {
							        required: "#newsletter:checked"
//							        minlength: 2
							      },
						      xm_ys:{
					           required:true
					        }
						   },
						    messages: {
						       xmbt : {
						            required : "请输入项目标题"
//						            minlength : "项目标题不能小于6个字符",
						            
						        },
						      xm_ms: {
					           required: '请输入项目描述',
		                      
					        },
					         xm_ys:{
					           required:"请输入项目优势"
					        },
					       topic: "请选择两个标签"
						    }
		                  
					});
					
					$(function(){
						$(".close").each(function(index){
						$(this).click(function(){ 
					  	 $(this).parent().remove();
//					  	  alert("您确定要删除吗？")
  					    })
})
						
					})
		    });