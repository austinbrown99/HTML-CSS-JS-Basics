var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" isActive", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " isActive";
}

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer",
    {
      backgroundColor: "#000",
      axisY: {
        tickThickness: 0,
        lineThickness: 0,
        gridThickness: 0,
      },

      axisX: {
        labelFontColor: "white",
        tickLength: 10
      },

      dataPointWidth: 20,
      data: [
        {
          type: "column",
          color: "#fc5200",
          dataPoints: [
            { label: "Mar", y: 0 },
            { label: "Apr", y: 0 },
            { label: "May", y: 8 },
            { label: "Jun", y: 10 },
            { label: "Jul", y: 5 },
            { label: "Aug", y: 3 },
            { label: "Sep", y: 16 },
            { label: "Oct", y: 9 },
            { label: "Nov", y: 6 },
            { label: "Dec", y: 5 },
            { label: "Jan", y: 8 },
            { label: "Feb", y: 8 },

          ]
        }
      ]
    });

  chart.render();
}