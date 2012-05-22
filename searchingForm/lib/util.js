/**
 * Created by JetBrains WebStorm.
 * User: hanyee
 * Date: 12-5-21
 * Time: 下午2:00
 * To change this template use File | Settings | File Templates.
 */

var UtilTools = UtilTools || {};

UtilTools.isObject = function(obj){
    return /\bObject\b/.test(Object.prototype.toString.call(obj));
};

UtilTools.isArray = function(obj){
    return /\bArray\b/.test(Object.prototype.toString.call(obj));
};

UtilTools.copy = function(obj){
    if (!UtilTools.isObject(obj)) return obj;
    return UtilTools.isArray(obj) ? obj.slice() : UtilTools.mix({},obj);
};

UtilTools.mix = function(){
    var ret = arguments[0] || {};
    for(var i=1, l=arguments.length; i<l; i++){
        var t = arguments[i];
        if(typeof t === 'object'){ // if Array is not allowed --> UtilTools.isObject(t)
            for(var n in t){
                ret[n] = t[n];
            }
        }
    }
    return ret;
};

UtilTools.deepMix = function(){
    var ret = arguments[0] || {};
    for(var i=1, l=arguments.length; i<l; i++){
        var t = arguments[i];
        if(typeof t === 'object'){ // if Array is not allowed --> UtilTools.isObject(t)
            for(var n in t){/*
                if(typeof ret[n] === 'object' && typeof t[n] === 'object'){
                    ret[n] = this.deepMix(ret[n], t[n]);
                }else{
                    ret[n] = t[n];
                }
                */
                typeof ret[n] === 'object' && typeof t[n] === 'object' ? ret[n] = this.deepMix(ret[n], t[n]) : ret[n] = t[n];
            }
        }
    }
    return ret;
};

UtilTools.getFirstPropName = function(obj){
    if(UtilTools.isObject(obj)){
        for(var name in obj){
            return name;
        }
    }
};

var UT = UtilTools;
