import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../../firebase";
import "./login.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from '../../assets/image/logo.png'
const Login = () => {
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#000",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: true,
            smooth: 10,
            force: 60,
          },
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    background: {
      color: "#C0C0C0",
      image:"",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };

  return (
    <div className="login-page">
      <Particles
        class="tsparticles"
        init={particlesInit}
        options={options}
      />
      <div className="login">
        <div className="logo">
          <p className="title-logo"> Cooking Receipt </p>
          <img src={logo} alt="logo" />
        </div>
        <div className="btn-login">
          <button className="btn-google" onClick={handleLogin}>Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
