(function(){
  var b=document.getElementById('lang'),h=document.documentElement,k='lang';
  function set(zh){h.lang=zh?'zh-TW':'en';b.textContent=zh?'English':'繁體中文';try{localStorage.setItem(k,zh?'zh':'en')}catch(e){}}
  b.onclick=function(){set(h.lang!=='zh-TW')};
  var s;try{s=localStorage.getItem(k)}catch(e){}
  if(s?s==='zh':/^zh/i.test(navigator.language))set(true);
})();
