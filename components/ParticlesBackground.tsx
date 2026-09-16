"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles"
        className={className}
        aria-hidden="true"
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 60,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    value: 80,
                  },
                },
              },
            },
          ],
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
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            paint: {
              color: {
                value: "#000000",
              },
            },
            color: {
              value: "#000000",
            },
            stroke: {
              color: "#000000",
              width: 1,
            },
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 120,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
              options: {
                circle: {
                  fill: true,
                },
              },
            },
            size: {
              value: { min: 2, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}