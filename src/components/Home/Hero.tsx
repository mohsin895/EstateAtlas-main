'use client';

import React, { useEffect, useRef } from 'react';

interface City {
    x: number;
    y: number;
}

interface Cities {
    newYork: City;
    london: City;
    dubai: City;
    singapore: City;
}

const MapVisualization = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let frame = 0;
        let animationId: number;
        let width: number, height: number;

        // Land polygons data - Mercator projection
        const landPolygons: { [key: string]: number[][] } = {
            // North America
            alaska: [[3,12],[8,10],[12,14],[10,18],[5,16]],
            canada: [[8,12],[12,10],[22,10],[28,12],[30,18],[26,22],[18,24],[12,22],[8,18]],
            usa: [[12,22],[26,22],[28,30],[24,36],[18,38],[14,36],[12,30]],
            mexico: [[14,36],[20,34],[24,40],[22,46],[16,44],[14,38]],

            // Central America & Caribbean
            centralAmerica: [[18,44],[24,42],[26,50],[22,52],[18,48]],
            cuba: [[20,38],[26,36],[28,40],[24,42],[20,40]],

            // South America
            colombia: [[22,50],[30,48],[32,56],[26,58],[22,54]],
            brazil: [[26,54],[38,50],[42,60],[38,74],[30,78],[24,70],[24,60]],
            argentina: [[24,70],[30,72],[32,88],[26,92],[22,84],[22,74]],
            chile: [[20,70],[24,72],[24,92],[20,90]],

            // Europe
            uk: [[44,18],[48,16],[50,22],[48,26],[44,24]],
            ireland: [[42,20],[44,18],[46,22],[44,24],[42,22]],
            iceland: [[40,12],[44,10],[46,14],[44,16],[40,14]],
            scandinavia: [[48,10],[54,8],[58,12],[56,20],[50,22],[48,16]],
            westernEurope: [[46,22],[54,20],[58,26],[56,32],[50,34],[46,30]],
            easternEurope: [[54,18],[64,14],[70,20],[68,30],[60,32],[54,26]],
            iberia: [[44,30],[50,28],[52,34],[48,38],[44,36]],
            italy: [[50,30],[54,28],[56,36],[52,42],[50,38]],
            balkans: [[52,32],[58,30],[60,38],[56,42],[52,38]],

            // Africa
            northAfrica: [[44,36],[58,34],[68,38],[66,48],[54,50],[44,46]],
            westAfrica: [[44,46],[54,44],[58,54],[52,62],[44,58]],
            centralAfrica: [[52,54],[62,50],[68,58],[64,68],[54,70],[52,62]],
            eastAfrica: [[58,48],[68,44],[72,56],[68,64],[60,66],[58,56]],
            southernAfrica: [[52,66],[64,64],[66,78],[58,84],[50,80],[50,70]],
            madagascar: [[68,66],[72,64],[74,74],[70,78],[68,72]],

            // Middle East
            arabianPeninsula: [[58,38],[70,36],[76,48],[70,56],[60,52],[58,44]],
            iran: [[66,32],[76,30],[80,38],[76,44],[68,42],[66,36]],
            turkey: [[56,30],[66,28],[68,34],[62,36],[56,34]],

            // Russia & Central Asia
            russia: [[58,10],[96,6],[100,14],[98,24],[88,28],[78,30],[70,26],[64,20],[58,14]],
            centralAsia: [[66,26],[78,24],[82,32],[78,38],[70,36],[66,30]],

            // South Asia
            india: [[72,36],[82,32],[86,44],[82,58],[74,54],[72,44]],
            sriLanka: [[80,56],[84,54],[86,60],[82,62],[80,58]],

            // East Asia
            china: [[80,26],[98,22],[102,34],[98,46],[88,48],[82,42],[80,32]],
            mongolia: [[86,22],[98,20],[100,28],[96,32],[88,30],[86,26]],
            korea: [[96,30],[100,28],[102,36],[98,40],[96,34]],
            japan: [[100,28],[104,26],[106,36],[102,42],[100,36]],
            taiwan: [[100,42],[104,40],[104,46],[100,46]],

            // Southeast Asia
            myanmar: [[86,42],[92,40],[94,52],[90,56],[86,50]],
            thailand: [[90,48],[96,46],[98,56],[94,60],[90,54]],
            vietnam: [[94,46],[100,44],[102,56],[98,60],[94,54]],
            malaysia: [[92,58],[100,56],[102,62],[96,64],[92,62]],
            indonesia: [[94,62],[108,58],[114,66],[106,70],[96,68],[94,64]],
            philippines: [[104,48],[110,46],[112,56],[108,60],[104,54]],

            // Oceania
            papuaNewGuinea: [[108,62],[116,58],[120,66],[114,70],[108,66]],
            australia: [[104,68],[122,64],[128,76],[120,86],[106,84],[104,74]],
            newZealand: [[126,78],[130,76],[132,84],[128,88],[126,82]],
            tasmania: [[112,82],[116,80],[118,86],[114,88],[112,84]],
        };

        const cities: Cities = {
            newYork: { x: 23, y: 28 },
            london: { x: 48, y: 21 },
            dubai: { x: 66, y: 44 },
            singapore: { x: 94, y: 58 }
        };

        const connections: [keyof Cities, keyof Cities][] = [
            ['newYork', 'london'],
            ['london', 'dubai'],
            ['dubai', 'singapore']
        ];

        function isPointInPolygon(x: number, y: number, polygon: number[][]): boolean {
            let inside = false;
            for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
                const xi = polygon[i][0], yi = polygon[i][1];
                const xj = polygon[j][0], yj = polygon[j][1];
                if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
                    inside = !inside;
                }
            }
            return inside;
        }

        function generateDots() {
            const dots: { x: number; y: number }[] = [];
            const spacing = 0.6; // Tighter spacing for more data points

            for (let x = 0; x <= 135; x += spacing) {
                for (let y = 0; y <= 95; y += spacing) {
                    for (const [, polygon] of Object.entries(landPolygons)) {
                        if (isPointInPolygon(x, y, polygon)) {
                            // Minimal randomization for uniform, engineered look
                            dots.push({
                                x: x + (Math.random() - 0.5) * 0.05,
                                y: y + (Math.random() - 0.5) * 0.05
                            });
                            break;
                        }
                    }
                }
            }
            return dots;
        }

        const dots = generateDots();

        function resize() {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            width = rect.width;
            height = rect.height;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        }

        function animate() {
            frame++;
            ctx.clearRect(0, 0, width, height);

            // Draw uniform dots forming the world map - thousands of small data points
            dots.forEach(dot => {
                const x = (dot.x / 135) * width;
                const y = (dot.y / 95) * height;
                ctx.beginPath();
                ctx.arc(x, y, 2.5, 0, Math.PI * 2);
                // Light blue dots - representing data points
                ctx.fillStyle = '#5FB6FF';
                ctx.fill();
            });

            // Draw connection arcs - very thin, semi-transparent for global connectivity
            connections.forEach(([from, to]) => {
                const c1 = cities[from];
                const c2 = cities[to];
                const x1 = (c1.x / 135) * width;
                const y1 = (c1.y / 95) * height;
                const x2 = (c2.x / 135) * width;
                const y2 = (c2.y / 95) * height;

                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2;
                const dist = Math.hypot(x2 - x1, y2 - y1);
                const arc = dist * 0.12; // Gentle curve for connectivity

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.quadraticCurveTo(midX, midY - arc, x2, y2);
                // Very thin, semi-transparent sky blue arc
                ctx.strokeStyle = 'rgba(59, 161, 223, 0.12)';
                ctx.lineWidth = 0.7;
                ctx.stroke();

                // Moving particle along the arc - data flow visualization
                const t = ((frame * 0.4) % 220) / 220;
                const px = (1-t)*(1-t)*x1 + 2*(1-t)*t*midX + t*t*x2;
                const py = (1-t)*(1-t)*y1 + 2*(1-t)*t*(midY - arc) + t*t*y2;

                ctx.beginPath();
                ctx.arc(px, py, 1.8, 0, Math.PI * 2);
                // Sky blue particle
                ctx.fillStyle = 'rgba(59, 161, 223, 0.5)';
                ctx.fill();
            });

            // Draw city nodes - glowing Sky Blue (#3ba1df) pulse dots
            Object.values(cities).forEach(city => {
                const x = (city.x / 135) * width;
                const y = (city.y / 95) * height;

                // Smooth pulse animation
                const pulse = 1 + Math.sin(frame * 0.04) * 0.25;
                const pulseOpacity = 0.2 - Math.sin(frame * 0.04) * 0.08;

                // Outer pulse ring - expanding glow
                ctx.beginPath();
                ctx.arc(x, y, 14 * pulse, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(59, 161, 223, ${pulseOpacity})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Glow halo - radial gradient
                const glow = ctx.createRadialGradient(x, y, 0, x, y, 9);
                glow.addColorStop(0, 'rgba(59, 161, 223, 0.7)');
                glow.addColorStop(0.5, 'rgba(59, 161, 223, 0.3)');
                glow.addColorStop(1, 'rgba(59, 161, 223, 0)');
                ctx.beginPath();
                ctx.arc(x, y, 9, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                // Main node - solid sky blue
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#3ba1df';
                ctx.fill();

                // Center highlight - bright white core
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        }

        resize();
        animate();

        const handleResize = () => resize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="relative min-h-screen w-full pt-[112px] overflow-hidden bg-[#0a1532]">
            <div className="container relative z-10 pt-10 pb-16 mx-auto">
                {/* Header Text */}
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 font-bold">
                        International Real Estate Investing, Powered by Data
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Navigate the fragmented global market with confidence. Estate Atlas
                        provides institutional-grade analytics, yield comparisons, and
                        regulatory insights for over 15 countries.
                    </p>
                    <button className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 text-lg rounded-md transition-colors">
                        Analyze Global Markets
                    </button>
                </div>

                {/* Map Container */}
                <div className="relative w-full max-w-[1200px] h-[420px] md:h-[520px] mx-auto overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full"
                    />

                    {/* Glassmorphism Data Cards with Clean Connectors */}
                    <div className="absolute left-[44%] top-[6%] z-20 opacity-0 animate-[card-enter_0.5s_ease-out_0.3s_forwards]">
                        <DataCard city="London" yield="4.1%" change="+1.2%" connectorDirection="bottom" />
                    </div>

                    <div className="absolute left-[58%] top-[28%] z-20 opacity-0 animate-[card-enter_0.5s_ease-out_0.5s_forwards]">
                        <DataCard city="Dubai" yield="6.8%" change="+1.5%" connectorDirection="bottom" />
                    </div>

                    <div className="absolute right-[15%] top-[46%] z-20 opacity-0 animate-[card-enter_0.5s_ease-out_0.7s_forwards]">
                        <DataCard city="Singapore" yield="5.2%" change="+0.8%" connectorDirection="bottom-left" />
                    </div>

                    <style jsx>{`
                        @keyframes card-enter {
                            from {
                                opacity: 0;
                                transform: translateY(10px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
};

interface DataCardProps {
    city: string;
    yield: string;
    change: string;
    connectorDirection?: 'bottom' | 'bottom-left' | 'bottom-right';
}

const DataCard = ({ city, yield: yieldValue, change, connectorDirection = 'bottom' }: DataCardProps) => {
    // Calculate connector position based on direction
    const getConnectorStyles = () => {
        switch (connectorDirection) {
            case 'bottom':
                return { left: '50%', top: '100%', transform: 'translateX(-50%)' };
            case 'bottom-left':
                return { left: '30%', top: '100%', transform: 'translateX(-50%)' };
            case 'bottom-right':
                return { left: '70%', top: '100%', transform: 'translateX(-50%)' };
            default:
                return { left: '50%', top: '100%', transform: 'translateX(-50%)' };
        }
    };

    return (
        <div className="relative">
            {/* Clean Vertical Connector Line */}
            <svg
                className="absolute pointer-events-none"
                style={{
                    ...getConnectorStyles(),
                    width: '2px',
                    height: '36px',
                }}
            >
                <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="36"
                    stroke="#3ba1df"
                    strokeWidth="1"
                    opacity="0.4"
                />
            </svg>

            {/* Glassmorphism Card */}
            <div
                className="relative rounded-lg px-4 py-3 min-w-[120px] transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                style={{
                    background: 'rgba(10, 21, 50, 0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid #3ba1df',
                }}
            >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#3ba1df] shadow-[0_0_8px_#3ba1df]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wide">{city}</span>
                </div>

                {/* Metrics */}
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#3ba1df] font-mono">{yieldValue}</span>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 font-mono">
                        <svg width="10" height="10" viewBox="0 0 10 10">
                            <path d="M5 2L8 6H2L5 2Z" fill="currentColor" />
                        </svg>
                        {change}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapVisualization;