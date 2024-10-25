"use client";
import { useEffect, useState } from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGeneration";
import { Button } from "../ui/Button";

const Hero: React.FC = () => {
    const [beams, setBeams] = useState<{ x: number; y: number; id: number; fadeOut: boolean }[]>([]);
    let beamId = 0;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const newBeam = { x: event.clientX, y: event.clientY, id: beamId++, fadeOut: false };
            setBeams(prevBeams => [...prevBeams, newBeam]);

            setTimeout(() => {
                setBeams(prevBeams => prevBeams.map(beam => beam.id === newBeam.id ? { ...beam, fadeOut: true } : beam));
            }, 1000);
        };

        const heroSection = document.getElementById('hero-section');
        if (heroSection) {
            heroSection.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (heroSection) {
                heroSection.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [beamId]);

    return (
        <div id="home" className="pb-20 pt-36 relative">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Innovative Solutions for Modern Challenges
                    </p>

                    <TextGenerateEffect
                        words="Transforming Concepts into Seamless User Experiences"
                        className="text-center text-[20px] md:text-2xl lg:text-4xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
                        Hi! I&apos;m Khizer Malik, a React.js Developer based in Pakistan.
                    </p>

                    <a href="#about">
                        <Button
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>

            {/* Shining Beam Effect */}
            {beams.map(beam => (
                <div
                    key={beam.id}
                    className={`absolute pointer-events-none transition-opacity duration-100 ${beam.fadeOut ? 'opacity-0' : 'opacity-0.7'}`}
                    style={{
                        left: beam.x,
                        top: beam.y,
                        transform: 'translate(-50%, -50%)',
                        width: '25px',
                        height: '35px',
                        background: 'rgba(255, 255, 255, 0.3)',
                        filter: 'blur(12px)',
                    }}
                />
            ))}
        </div>
    );
}

export default Hero;
