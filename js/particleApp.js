/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* ----------------------------------------------- */
particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": false,
          "value_area": 500
        }
      },
      "color": {
        "value": "#FFFFFF"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.55,
        "random": false,
        "anim": {
          "enable": false,
          "speed": .7,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 9,
          "size_min": 0.4,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 500,
        "color": "#696969",
        "opacity": 0.30,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": .1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 1000,
          "rotateY": 1500
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 7,
          "duration": 2,
          "opacity": .2,
          "speed": 3
        },
        "repulse": {
          "distance": 60
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);
