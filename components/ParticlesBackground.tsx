"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100, // distance to push dots when hover
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#ffffff", "#cf3f9a"],
            },
            links: {
              color: "#cf3f9a",
              distance: 150, // change how far line going to connect to dot
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2, // change the speed of dots movement
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 200, // change no. of dots to show
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
