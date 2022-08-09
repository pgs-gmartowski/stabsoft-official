import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';

export default function Home() {

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
    background: {
      color: {
        value: '#E9612D',
      },
    },
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
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 6,
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


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Particles id="tsparticles" init={particlesInit} options={options} />
        <h1 style={{zIndex: 999, color: '#fff'}}>
          Stabsoft
          <img src={"data:image/png;base64,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"} alt="logo"/>
        </h1>
        <h2 style={{zIndex: 999, color: '#fff'}}>Grzegorz Martowski</h2>
        <h3 style={{zIndex: 999, color: '#fff'}}>Frontend Developer</h3>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
