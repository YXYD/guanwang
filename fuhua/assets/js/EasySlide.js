window.EasySlide = (function(w,d){	
	var isIE =/*@cc_on!@*/false;
	function es(a,b){
		this.dom = (typeof a=='object') ? a : d.querySelector(a);
		this.wrap = this.dom.children[0].children;
		this.num =this.active =this.num2 =  0;
		this.timer = this.timer2 = null;
		this.flag = true;
		this.len = this.wrap.length;
		this.set = {
			speed :500,
			type : 'x',
			time : 3000,
			auto : true,
			before : null,
			after : null
		};
 		if(b) this.extend(this.set,b);
 		addClass(this.wrap[0],'active');
 		if(this.len==1) return false;
		this.ts =this.set.type.toLowerCase()=='fade' ? 'opacity' : ( this.set.type.toLowerCase()=='x' ? 'left' : 'top');
		this.init();
	};
	es.prototype = {
		init : function(){
			var _t = this;
			addEvent(this.dom,'mouseover',function(){
				clearInterval(_t.timer2)
			});
			addEvent(this.dom,'mouseout',function(){
				_t.set.auto && _t.start();
			});
			_t.set.auto && _t.start();
		},
		stop : function(){
			this.set.auto = false;
			clearInterval(this.timer2)
		},
		start : function(){
			var _t = this;
			_t.set.auto = true;
			_t.timer2 = setInterval(function(){ _t.next();},_t.set.time)
		},
		to:function(n){
			if(n == Math.abs(this.num) || !this.flag) return
 			var der = n > this.num ? 'prevList' : 'nextList'
 			this.num = n;
			this.move(der);
		},
		next : function(){
			if(!this.flag) return
			this.num ++;
 			this.move('prevList');
		},
		prev : function(){
			if(!this.flag) return
			this.num = this.num==0? this.len-1:--this.num;
			this.move('nextList');
		},
		move : function(m){
			var _t = this;
			var startTime = nowTime();
			clearInterval(_t.timer );
			var nn = 100;
			_t.flag = false;
 			for(var i=0;i<_t.len;i++){ delClass(_t.wrap[i],m);	};
			_t.num = Math.abs(_t.num)  %_t.len;
			this.active =   _t.num ;
			_t.set.before && _t.set.before.call(_t.dom,_t.num);
  			addClass(this.wrap[  _t.num   ],m);
  			_t.timer = setInterval(function(){
 				var t = _t.set.speed - Math.max(0,startTime - nowTime() + _t.set.speed);  
				var value = Tween['easeOut'](t,0, nn - 0,_t.set.speed);
 				if(_t.ts=='opacity'){
 					_t.wrap[_t.num2].style[_t.ts] = (100-value)/100;
 					_t.wrap[_t.num ].style[_t.ts] =value/100 ;
  					_t.wrap[_t.num2].style['filter']="alpha(opacity:"+(100-value)+")";
  					_t.wrap[_t.num2].style['filter']="alpha(opacity:"+(value)+")";
 				}else{
  					_t.wrap[ _t.num2].style[_t.ts] = (m=='prevList' ?-1 : 1)*(value<0 ? 0 : value) +'%';
					_t.wrap[ _t.num  ].style[_t.ts] = (m=='prevList' ?(100-value) :  (-100+value))+'%';
				};
  				if(t==_t.set.speed){
					clearInterval(_t.timer );
					_t.num2 = _t.num ;
					_t.set.after && _t.set.after.call(_t.dom,_t.num2);
					for(var i=0;i<_t.len;i++){
						delClass(_t.wrap[i],'active');
						delClass(_t.wrap[i],m);
 					};
 					_t.flag = true;
 					addClass(_t.wrap[Math.abs(_t.num )],'active')
 				};
			},13);
		},
	    extend : function(n,n1){ for(var i in n1){n[i] = n1[i]};  }
	};
	function addEvent (obj,name,fn){
		return obj.addEventListener? obj.addEventListener(name, fn, false):obj.attachEvent('on'+name,fn);
	};
    function hasClass(_object,_clsname){  
        var _clsname = _clsname.replace(".","");  
        var _sCls = " "+(_object.className)+" ";  
        return (_sCls.indexOf(" "+_clsname+" ") != -1) ? true : false;  
    };  
	function nowTime(){
		return (new Date()).getTime();
	};
    function addClass(_object,_clsname){ 
    	if (!isIE) {
    		_object.classList.add(_clsname)
    	}else{
	        var _clsname = _clsname.replace(".","");  
	        if(!hasClass(_object,_clsname)){  
	            _object.className = _object.className+(" "+_clsname);  
	        };  
        }
    };  
    function delClass(_object,_clsname){  
    	if (!isIE) {
    		_object.classList.remove(_clsname)
    	}else{
        var _clsname = _clsname.replace(".","");  
	        if(hasClass(_object,_clsname)){  
	            _object.className = _object.className.replace(new RegExp("(?:^|\\s)"+_clsname+"(?=\\s|$)","g")," ");  
	        }; 
        }; 
    };  
 	var Tween = { easeOut: function(t, b, c, d){  return -c *(t/=d)*(t-2) + b;}	}
	return es;
})(window,document);