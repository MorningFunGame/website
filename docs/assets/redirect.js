// Old Blogger URLs (www.morningfungame.com/2017/02/post.html, /search/..., /feeds/...)
// now live on blog.morningfungame.com with the same path.
(function(){
  // Posts whose Blogger URL changed after old links were shared: old path -> current path.
  var renamed={
    '/2020/07/unity.html':'/2020/07/whacamole_4.html'
  };
  var p=location.pathname;
  if(renamed[p])p=renamed[p];
  if(/^\/(\d{4}\/\d{2}\/|p\/|search|feeds\/|\d{4}\/?$)/.test(p)){
    location.replace('https://blog.morningfungame.com'+p+location.search+location.hash);
  }
})();
