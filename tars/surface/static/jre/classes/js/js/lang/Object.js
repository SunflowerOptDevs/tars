"use strict";!function(){var t=function(){return(new Date).getTime()},n=Class.forName({name:"class Object",alias:"js.lang.Object",Object:function(){var n=(t()+Math.random()).toString(16);Object.USEECMA?Object.defineProperty(this,"_hashCode",{value:n,writable:!1,enumerable:!1,configurable:!1}):this._hashCode=n},"non-writable non-enumerable non-configurable non-proxy getClass":function(){return this.$class||Object.$class},"non-writable non-enumerable non-configurable non-proxy getVersion":function(){var t="0.1.1.0001";return function(){return this.version||t}}(),equals:function(t){return t===this},hashCode:function(){return this._hashCode||(this._hashCode=(t()+Math.random()).toString(16)),this._hashCode},toString:function(){return this.getClass().getFullName()+"<"+this.hashCode()+">"},clone:function(){var n=null;if(this instanceof Number||this instanceof String||this instanceof Boolean)return this.valueOf();if(this instanceof Function||this instanceof RegExp||this instanceof Error||this instanceof EvalError||this instanceof RangeError||this instanceof ReferenceError||this instanceof SyntaxError||this instanceof TypeError||this instanceof URIError)return this;if(this instanceof Date)return n=new Date,n.setTime(this.getTime()),n;if(Object.isNumber(this)||Object.isString(this)||Object.isBoolean(this))return this;if(this instanceof Array){n=[];var e=Array.prototype.slice.call(this,0,this.length);return Array.prototype.splice.call(e,0,0,0,0),Array.prototype.splice.apply(n,e),n}n=this.$class?this.$class.newInstance():{};for(var i in this)"_hashCode"!==i?this.hasOwnProperty(i)&&(n[i]=this[i]?this[i].clone():this[i]):n[i]=t().toString(16);return n},toJson:function(){var t=window.JSON&&"function"==typeof JSON.stringify&&"0"===JSON.stringify(0)&&"undefined"==typeof JSON.stringify(function(){});return function(){return t?this:this}}(),toQueryString:function(){var t=[];for(var n in this)this[n]&&t.push(n+"="+this[n]);return t.join("&")}});Object.USEECMA?Object.defineProperty(Object,"$class",{value:n,writable:!1,enumerable:!1,configurable:!1}):Object.$class=n}();