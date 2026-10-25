// Old Blogger URLs (www.morningfungame.com/2020/07/unity.html, /search/..., /feeds/...)
// now live on blog.morningfungame.com with the same path.
(function(){
  var p=location.pathname;
  if(/^\/(\d{4}\/\d{2}\/|p\/|search|feeds\/|\d{4}\/?$)/.test(p)){
    location.replace('https://blog.morningfungame.com'+p+location.search+location.hash);
  }
})();
