import {loadFull} from 'tsparticles';

const particlesInit = async (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

const options = {
  fpsLimit: 120,
  interactivity: {
    events: {
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: 'rgb(232,98,43)',
    },
    links: {
      color: 'rgb(232,98,43)',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: {min: 1, max: 5},
    },
  },
  detectRetina: true,
};

export {particlesInit, particlesLoaded, options}
