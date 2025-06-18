import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const NeatBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const config = {
      colors: [
        { color: '#130437', enabled: true },
        { color: '#B34BD0', enabled: true },
        { color: '#210751', enabled: true },
        { color: '#3511A5', enabled: true },
        { color: '#8F3E8D', enabled: false },
      ],
      speed: 7,
      horizontalPressure: 7,
      verticalPressure: 3,
      waveFrequencyX: 0,
      waveFrequencyY: 0,
      waveAmplitude: 0,
      shadows: 4,
      highlights: 0,
      colorBrightness: 1.95,
      colorSaturation: 2,
      wireframe: false,
      colorBlending: 1,
      backgroundColor: '#003FFF',
      backgroundAlpha: 1,
      grainScale: 0,
      grainSparsity: 0,
      grainIntensity: 0,
      grainSpeed: 0,
      resolution: 1,
      yOffset: 0,
    };

    const neat = new NeatGradient({
      ref: canvasRef.current,
      ...config,
    });

    return () => neat.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        display: "block",
      }}
    />
  );
};

export default NeatBackground;
