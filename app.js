$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    console.log("ee2d")
});

  const sourceDiv = document.getElementById('world-peace-forum-mari');
  const targetDiv = document.getElementById('world-peace-forum-bg');
  const targetDiv2 = document.getElementById('world-peace-forum');

  const observer = new ResizeObserver(() => {
    const sourceHeight = sourceDiv.offsetHeight;
    targetDiv.style.height = sourceHeight + 'px';
  });

  observer.observe(sourceDiv);
  console.log(`Source Height: ${sourceDiv.offsetHeight}px`);

