
  
function setupImageScroll() {
  const container = document.getElementById('cover');
  const images = container.getElementsByTagName('img');
  let currentIndex = 0;
  let shouldStop = false; // 增加一个变量来跟踪是否停止滚动
  const delay = 2000; // 停留时间，单位为毫秒

  function scrollAndPause() {
    if (shouldStop) return; // 如果应该停止滚动，则直接返回

    const currentImage = images[currentIndex];
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];

    currentImage.style.display = 'block'; // 显示当前图片

    setTimeout(() => {
      currentImage.style.display = 'none'; // 隐藏当前图片
      nextImage.style.display = 'block'; // 显示下一张图片

      currentIndex = nextIndex; // 更新索引

      setTimeout(scrollAndPause, delay); // 停留一段时间后再继续滚动
    }, delay);
  }

  scrollAndPause();

  // 添加鼠标移入和移出事件监听器
  container.addEventListener('mouseenter', () => {
    shouldStop = true; // 当鼠标移入时停止滚动
  });

  container.addEventListener('mouseleave', () => {
    shouldStop = false; // 当鼠标移出时继续滚动
    scrollAndPause(); // 重新开始滚动
  });
}
setupImageScroll(); // 启动滚动



//顶部 

const closeBtn = document.getElementById('guanbi');
const topPromotion = document.getElementById('J_promotional-top');

closeBtn.addEventListener('click', () => {
  // 将关闭状态保存在 sessionStorage 中
  sessionStorage.setItem('topPromotionClosed', 'true');
  
  // 隐藏顶部推广
  topPromotion.style.display = 'none';
});

// 检查是否已经关闭了顶部推广
const isClosed = sessionStorage.getItem('topPromotionClosed') === 'true';
if (isClosed) {
  topPromotion.style.display = 'none';
}


// 倒计时



window.addEventListener('DOMContentLoaded', () => {
  
  const currentDate = new Date();
  const targetTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0, 0).getTime();

  const hourEle = document.querySelector('.timmer__unit--hour');
  const minuteEle = document.querySelector('.timmer__unit--minute');
  const secondEle = document.querySelector('.timmer__unit--second');

  function updateCountdown() {
    const nowTime = new Date().getTime();
    let remainingTime = targetTime - nowTime;

    if (remainingTime < 0) {
      hourEle.textContent = '00';
      minuteEle.textContent = '00';
      secondEle.textContent = '00';
      return;
    }

    let hours = Math.floor(remainingTime / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    hourEle.textContent = String(hours).padStart(2, '0');
    minuteEle.textContent = String(minutes).padStart(2, '0');
    secondEle.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});





  // nav
  window.addEventListener('scroll', function() {
    var nav = document.getElementById('input_nav');
    if (window.scrollY >800) {
      nav.classList.add('show');
    } else {
      nav.classList.remove('show');
    }
  });


    // nav2
    window.addEventListener('scroll', function() {
      var nav = document.getElementById('recomend_nav1');
      if (window.scrollY >1600) {
        nav.classList.add('show');
      } else {
        nav.classList.remove('show');
      }
    });
  

// 中间右
  function scrollImages() {
    const imageList = document.getElementById('cover_wapper');
    const firstImage = imageList.children[0];
    
    imageList.appendChild(firstImage.cloneNode(true));
    imageList.removeChild(firstImage);

    imageList.style.transform = 'translate3d(0, 0, 0)';
  }
   setInterval(scrollImages, 3000);




  function changeTab(element) {
    var tabs = document.querySelectorAll('.recomend_nav li');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('select');
    }
    element.classList.add('select');
  }


  document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("#myLink"); // 获取所有class为"no-refresh"的链接元素
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            event.preventDefault(); // 阻止默认的跳转行为
            // 在这里可以添加自定义的逻辑
            console.log("链接被点击了，但页面没有刷新！");
        });
    }
});





window.addEventListener('scroll', function() {
  var elevator = document.querySelector('.elevator');
  var threshold = 680; // 设置滚动的阈值，单位为像素
  var fixedClass = 'elevator--fixed'; // 自定义类名

  if (window.pageYOffset > threshold) {
    elevator.classList.add(fixedClass);
  } else {
    elevator.classList.remove(fixedClass);
  }
});