var posts=["7b5c3ca4/","1ac9df6e/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };