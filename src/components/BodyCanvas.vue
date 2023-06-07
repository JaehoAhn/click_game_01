<template>
  <div class="container">
    <canvas id="myCanvas"></canvas>
  </div>

</template>

<script>

export default {
  name: 'BodyCanvas',

  methods() {
    
  },

  mounted() {
    let audio = new Audio('#');

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    c.width = window.innerWidth - 80;
    c.height = window.innerWidth - 80;

    function draw_circle(x_pos, y_pos) {
        ctx.clearRect(0, 0, c.height, c.width);

        //String
        ctx.beginPath();

        ctx.moveTo(c.width / 2, c.height / 2);
        ctx.lineTo(x_pos, y_pos);
        ctx.closePath();

        ctx.lineWidth = 5;
        ctx.stroke();

        //Outer circle
        ctx.beginPath()

        ctx.arc(x_pos, y_pos, 15, 0, Math.PI * 2);
        ctx.closePath();

        ctx.fillStyle = 'White';
        ctx.fill();
        ctx.stroke();

        //Inner circle
        ctx.beginPath()

        ctx.arc(x_pos, y_pos, 5, 0, Math.PI * 2);
        ctx.closePath();

        ctx.fillStyle = 'White';
        ctx.fill();
        ctx.stroke();


        // console.log('draw');

        //requestAnimationFrame(draw);
        
    }

    draw_circle(c.width / 2, c.height / 2);


    c.addEventListener('touchmove', e => {
      console.log(e.changedTouches[0].clientX);

      draw_circle(e.changedTouches[0].clientX - 30, e.changedTouches[0].clientY - 130);


      if (e.changedTouches[0].clientX > c.width + window.innerWidth * 0.1) {
        draw_circle(c.width - 20, e.changedTouches[0].clientY - 130);
      }

      if (e.changedTouches[0].clientX < window.innerWidth * 0.1) {
        draw_circle(20, e.changedTouches[0].clientY - 130);
      }

      if (e.changedTouches[0].clientY > c.height + window.innerHeight * 0.2) {
        draw_circle(e.changedTouches[0].clientX - 30, c.height - 20);
      }

      if (e.changedTouches[0].clientY < window.innerHeight * 0.2) {
        draw_circle(e.changedTouches[0].clientX - 30, 0 + 20);
      }


      
    });

    c.addEventListener('touchend', () => {
      draw_circle(c.width / 2, c.height / 2);

      audio.play();
    });

    console.log(window.innerWidth * 0.1)

  }
}

</script>

<style>

    #myCanvas {
        background-color:aliceblue;
        margin: 0;
        padding: 0;
        position: absolute;
        left: 10vw;
        top: 20vh;
    }

    .container {
      display: flex;
      justify-content: center;

    }

</style>