import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0A1532]">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 border border-sky-500/20 rounded-full"></div>
                <div className="absolute top-40 right-20 w-32 h-32 border border-sky-500/10 rotate-45"></div>
                <div className="absolute bottom-40 left-1/4 w-48 h-48 border border-sky-500/15 rounded-lg rotate-12"></div>
            </div>

            {/* Main content */}
            <div className="container relative z-10 pt-10 pb-16 mx-auto ">
                {/* Header text */}
                <div className="text-center max-w-4xl mx-auto ">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 font-bold">
                        International Real Estate Investing, Powered by Data
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Navigate the fragmented global market with confidence. Estate Atlas provides institutional-grade analytics, yield comparisons, and regulatory insights for Over 15 Countries.
                    </p>
                    <button className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 text-lg rounded-md transition-colors">
                        Analyze Global Markets
                    </button>
                </div>

                {/* Network visualization */}
                <div className="relative w-full mt-8">
                    {/* Gradient fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A1532] to-transparent z-30 pointer-events-none"></div>

                    {/* SVG Network */}
                    <div className="relative min-h-[520px] md:min-h-[600px]">
                        <svg
                            viewBox="0 25 100 60"
                            className=" inset-0 w-full h-full"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <defs>
                                {/* Glow filters */}
                                <filter id="nodeGlow">
                                    <feGaussianBlur stdDeviation="0.4" result="blur" />
                                    <feFlood floodColor="#3ba1df" floodOpacity="0.8" />
                                    <feComposite in2="blur" operator="in" />
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                <filter id="pulseGlow">
                                    <feGaussianBlur stdDeviation="0.8" result="blur" />
                                    <feFlood floodColor="#3ba1df" floodOpacity="1" />
                                    <feComposite in2="blur" operator="in" />
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Background grid dots */}
                            <g opacity="0.3">
                                {[...Array(400)].map((_, i) => {
                                    const x = (i % 25) * 4 + 2;
                                    const y = Math.floor(i / 25) * 4 + 10;
                                    return (
                                        <circle
                                            key={i}
                                            cx={x}
                                            cy={y}
                                            r="0.4"
                                            fill="#38bdf8"
                                        />
                                    );
                                })}

                              {/*<div className="flex">*/}
                              {/*    <circle cx="2" cy="10" r="0.4" fill="#38bdf8"></circle>*/}
                              {/*    <circle cx="2" cy="12" r="0.4" fill="#38bdf8"></circle>*/}
                              {/*    <circle cx="2" cy="10" r="0.4" fill="#38bdf8"></circle>*/}
                              {/*    <circle cx="2" cy="10" r="0.4" fill="#38bdf8"></circle>*/}
                              {/*    <circle cx="2" cy="10" r="0.4" fill="#38bdf8"></circle>*/}
                              {/*    <circle cx="2" cy="10" r="0.4" fill="#38bdf8"></circle>*/}
                              {/*    <circle cx="2" cy="10" r="0.4" fill="#38bdf8"></circle>*/}
                              {/*    <circle cx="2" cy="10" r="0.4" fill="#38bdf8"></circle>*/}
                              {/*    <circle cx="2" cy="10" r="0.4" fill="#38bdf8"></circle>*/}
                              {/*</div>*/}

                            </g>

                            {/* Connection lines */}
                            <g>
                                <path
                                    d="M22,35 Q33.5,22 45,28"
                                    fill="none"
                                    stroke="#3ba1df"
                                    strokeWidth="0.15"
                                    opacity="0.5"
                                />
                                <path
                                    d="M45,28 Q51.5,23 58,42"
                                    fill="none"
                                    stroke="#3ba1df"
                                    strokeWidth="0.15"
                                    opacity="0.5"
                                />
                                <path
                                    d="M58,42 Q66.5,37 75,55"
                                    fill="none"
                                    stroke="#3ba1df"
                                    strokeWidth="0.15"
                                    opacity="0.5"
                                />
                            </g>

                            {/* Network nodes */}
                            <g>
                                {/* London node */}
                                <g>
                                    <circle cx="22" cy="35" r="0.9" fill="#3ba1df" opacity="0.25" />
                                    <circle cx="22" cy="35" r="0.45" fill="#3ba1df" filter="url(#nodeGlow)" />
                                    <circle cx="22" cy="35" r="0.2" fill="white" opacity="0.9" />
                                </g>

                                {/* Intermediate node */}
                                <g>
                                    <circle cx="45" cy="28" r="0.9" fill="#3ba1df" opacity="0.25" />
                                    <circle cx="45" cy="28" r="0.45" fill="#3ba1df" filter="url(#nodeGlow)" />
                                    <circle cx="45" cy="28" r="0.2" fill="white" opacity="0.9" />
                                </g>

                                {/* Dubai node (pulsing) */}
                                <g>
                                    <circle cx="58" cy="42" r="2.5" fill="none" stroke="#3ba1df" strokeWidth="0.1" opacity="0.4">
                                        <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="58" cy="42" r="1.8" fill="#3ba1df" opacity="0.15" />
                                    <circle cx="58" cy="42" r="1.2" fill="#3ba1df" opacity="0.4" />
                                    <circle cx="58" cy="42" r="0.6" fill="#3ba1df" filter="url(#pulseGlow)" />
                                    <circle cx="58" cy="42" r="0.2" fill="white" opacity="0.9" />
                                </g>

                                {/* Singapore node */}
                                <g>
                                    <circle cx="75" cy="55" r="0.9" fill="#3ba1df" opacity="0.25" />
                                    <circle cx="75" cy="55" r="0.45" fill="#3ba1df" filter="url(#nodeGlow)" />
                                    <circle cx="75" cy="55" r="0.2" fill="white" opacity="0.9" />
                                </g>
                            </g>
                        </svg>

                        {/* City data cards - positioned absolutely */}

                        {/* London Card */}
                        <div className="absolute" style={{ left: '23%', top: '20%' }}>
                            <DataCard
                                city="London"
                                yield="4.1%"
                                change="+1.2%"
                                opacity="medium"
                            />
                        </div>

                        {/* Dubai Card (highlighted) */}
                        <div className="absolute" style={{ left: '55%', top: '35%' }}>
                            <DataCard
                                city="Dubai"
                                yield="6.8%"
                                change="+1.5%"
                                highlighted
                            />
                        </div>

                        {/* Singapore Card */}
                        <div className="absolute" style={{ left: '75%', top: '52%' }}>
                            <DataCard
                                city="Singapore"
                                yield="5.2%"
                                change="+0.8%"
                                opacity="medium"
                            />
                        </div>

                        {/* Glow effects */}
                        <div className="absolute top-1/3 left-[45%] w-48 h-48 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-sky-500/8 rounded-full blur-[80px] pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Data Card Component
const DataCard = ({ city, yield: yieldValue, change, highlighted = false, opacity = 'full' }) => {
    const opacityClass = opacity === 'medium' ? 'opacity-70 scale-[0.92]' : 'scale-100';
    const bgClass = highlighted
        ? 'bg-[#0d1b3a]/95 border-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.25)]'
        : 'bg-[#0d1b3a]/80 border-sky-500/30';

    const textColorClass = highlighted ? 'text-white' : 'text-gray-300';
    const yieldColorClass = highlighted ? 'text-sky-400' : 'text-sky-500/70';

    return (
        <div className={`relative transition-all duration-300 ${opacityClass}`}>
            {/* Connecting line */}
            <svg
                className="absolute pointer-events-none"
                style={{
                    left: '50%',
                    top: '100%',
                    width: '2px',
                    height: highlighted ? '70px' : '55px',
                    transform: 'translateX(-50%)'
                }}
            >
                <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="100%"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    opacity={highlighted ? "0.6" : "0.3"}
                />
            </svg>

            {/* Card */}
            <div
                className={`backdrop-blur-md rounded-xl px-5 py-3.5 border-2 ${bgClass} min-w-[180px]`}
                style={{ backdropFilter: 'blur(16px)' }}
            >
                {/* City name */}
                <div className="flex items-center gap-2 mb-2.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        highlighted ? 'bg-sky-400/20' : 'bg-sky-500/10'
                    }`}>
                        <MapPin className={`w-3 h-3 ${
                            highlighted ? 'text-sky-400' : 'text-sky-500/60'
                        }`} />
                    </div>
                    <span className={`text-base font-bold tracking-wide ${textColorClass}`}>
                        {city}
                    </span>
                </div>

                {/* Yield data */}
                <div className="space-y-1">
                    <div className={`text-3xl font-bold leading-none ${yieldColorClass}`}>
                        {yieldValue}
                    </div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider font-medium">
                        Gross Yield
                    </p>
                </div>

                {/* Change badge */}
                <div className="mt-2.5">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${
                        highlighted
                            ? 'bg-green-500/15 border border-green-400/30'
                            : 'bg-green-500/10 border border-green-500/20'
                    }`}>
                        <TrendingUp className={`w-3.5 h-3.5 ${
                            highlighted ? 'text-green-400' : 'text-green-500/70'
                        }`} />
                        <span className={`text-sm font-semibold ${
                            highlighted ? 'text-green-400' : 'text-green-500/70'
                        }`}>
                            {change}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;