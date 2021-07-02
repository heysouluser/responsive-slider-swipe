sliderLine.addEventListener('touchstart', handleTouchStart, false);
sliderLine.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
   const firstTouch = event.touches[0];
   x1 = firstTouch.clientX;
   y1 = firstTouch.clientY;
   // console.log(x1, y1);
}

function handleTouchMove(event) {
   if (!x1 || !y1) {
      return false;
   }
   let x2 = event.touches[0].clientX;
   let y2 = event.touches[0].clientY;
   let xDiff = x2 - x1;
   let yDiff = y2 - y1;

   if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
         count--;
         if (count < 0) {
            count = images.length - 1;
         }
         rollSlider();
      }
      else {
         count++;
         if (count >= images.length) {
            count = 0;
         }
         rollSlider();
      }
   }
   // else {
   //    if (yDiff > 0) sliderLine.textContent = 'down';
   //    else sliderLine.textContent = 'top';
   // }
   x1 = null;
   y1 = null;
}