import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Particles from "./scripts/Particles";
import { ParticleContainer } from "./styles";

interface ParticleProps {
  imageSrc: string;
}

const ParticlesComponent: React.FC<ParticleProps> = ({ imageSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particles | null>(null);
  const requestRef = useRef<number>();
  const mouseRef = useRef(new THREE.Vector2());
  const raycasterRef = useRef(new THREE.Raycaster());

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const width = currentContainer.clientWidth;
    const height = currentContainer.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    currentContainer.appendChild(renderer.domElement);

    const fovHeight = 2 * Math.tan((camera.fov * Math.PI) / 180 / 2) * camera.position.z;

    const particles = new Particles({
      fovHeight,
      renderer,
      scene,
      camera,
    });

    particlesRef.current = particles;
    particles.init(imageSrc);
    scene.add(particles.container);

    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      particles.update(delta);
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = currentContainer.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / height) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseRef.current, camera);

      if (particles.hitArea) {
        const intersects = raycasterRef.current.intersectObject(particles.hitArea);

        if (intersects.length > 0) {
          particles.onInteractiveMove(intersects[0].uv!);
        }
      }
    };

    const handleResize = () => {
      if (!currentContainer) return;
      const newWidth = currentContainer.clientWidth;
      const newHeight = currentContainer.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);

      particles.webgl.fovHeight = 2 * Math.tan((camera.fov * Math.PI) / 180 / 2) * camera.position.z;
      particles.resize();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement);
      }
      particles.destroy();
      renderer.dispose();
    };
  }, [imageSrc]);

  return <ParticleContainer ref={containerRef} />;
};

export default ParticlesComponent;
