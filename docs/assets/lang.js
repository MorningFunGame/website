(function(){
  var langs=['zh-TW','zh-CN','en','ru','ja','es'],h=document.documentElement,sel=document.getElementById('lang'),k='lang';
  function set(l){h.lang=l;sel.value=l;try{localStorage.setItem(k,l)}catch(e){}}
  function guess(){
    var list=navigator.languages||[navigator.language||'en'];
    for(var i=0;i<list.length;i++){
      var c=list[i].toLowerCase();
      if(/^zh-(cn|sg|hans)/.test(c))return 'zh-CN';
      if(c.indexOf('zh')===0)return 'zh-TW';
      var b=c.split('-')[0];
      if(['en','ru','ja','es'].indexOf(b)>=0)return b;
    }
    return 'en';
  }
  var s;try{s=localStorage.getItem(k)}catch(e){}
  set(langs.indexOf(s)>=0?s:guess());
  sel.onchange=function(){set(sel.value)};
})();
