import React, { ReactNode } from "react";

type FeatureCardProps = {
    title: string;
    description: string;
    icon: ReactNode;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
    return (
        <div className="group rounded-md border border-border bg-card p-6 transition-colors hover:border-sky/30">
            <div className="mb-4 flex h-12 w-12 bg-[#EBF6FB] items-center justify-center rounded-md bg-sky/10">
                {icon}
            </div>
            <h3 className="mb-2 text-lg font-heading text-[#071636] font-[700] ">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
};

const WhyGlobal: React.FC = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left Card */}
                    <div className="flex bg-[#0A1532] flex-col justify-between min-h-[400px] rounded-md bg-navy p-10">
                        <div>
                            <h2 className="mb-4 text-3xl leading-tight text-primary-foreground font-heading md:text-4xl">
                                Why Top International Real Estate Companies Rely on Us.
                            </h2>
                            <p className="text-primary-foreground/70">
                                The market is no longer local; it's global. We replace guesswork
                                with verified data sources.
                            </p>
                        </div>

                        {/* Pie Chart */}
                        <div className="relative mt-8">
                            <svg viewBox="0 0 200 200" className="mx-auto w-48 h-48">
                                <defs>
                                    <linearGradient id="pieGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(199, 71%, 55%)" />
                                        <stop offset="100%" stopColor="hsl(199, 71%, 45%)" />
                                    </linearGradient>
                                    <linearGradient id="pieGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(199, 71%, 35%)" />
                                        <stop offset="100%" stopColor="hsl(199, 71%, 25%)" />
                                    </linearGradient>
                                </defs>

                                <circle
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="none"
                                    stroke="url(#pieGradient1)"
                                    strokeWidth="30"
                                    strokeDasharray="200 503"
                                    transform="rotate(-90 100 100)"
                                />
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="none"
                                    stroke="url(#pieGradient2)"
                                    strokeWidth="30"
                                    strokeDasharray="150 503"
                                    strokeDashoffset={-200}
                                    transform="rotate(-90 100 100)"
                                />
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="none"
                                    stroke="hsl(199, 71%, 65%)"
                                    strokeWidth="30"
                                    strokeDasharray="100 503"
                                    strokeDashoffset={-350}
                                    transform="rotate(-90 100 100)"
                                    opacity={0.6}
                                />
                                <circle cx="100" cy="100" r="50" fill="hsl(221, 76%, 12%)" />
                                <text
                                    x="100"
                                    y="95"
                                    textAnchor="middle"
                                    className="font-heading text-lg"
                                    fill="white"
                                >
                                    15+
                                </text>
                                <text
                                    x="100"
                                    y="115"
                                    textAnchor="middle"
                                    fontSize="12"
                                    fill="hsl(199, 71%, 55%)"
                                >
                                    Countries
                                </text>
                            </svg>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <FeatureCard
                            title="Global Market Coverage"
                            description="Data from over 15 countries with localized insights."
                            icon={<GlobeIcon />}
                        />
                        <FeatureCard
                            title="Optimize Strategy"
                            description="Identify high-yield regions instantly."
                            icon={<ChartIcon />}
                        />
                        <FeatureCard
                            title="Mitigate Risk"
                            description="Regulatory and tax insights for every market."
                            icon={<ShieldIcon />}
                        />
                        <FeatureCard
                            title="Data Integration"
                            description="Custom API solutions to suit your needs."
                            icon={<WorkflowIcon />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyGlobal;

/* ---------------- Icons ---------------- */
const GlobeIcon: React.FC = () => (
    <svg
        className="h-6 w-6 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        <circle cx={12} cy={12} r={10} />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
    </svg>
);

const ChartIcon: React.FC = () => (
    <svg
        className="h-6 w-6 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
    </svg>
);

const ShieldIcon: React.FC = () => (
    <svg
        className="h-6 w-6 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
);

const WorkflowIcon: React.FC = () => (
    <svg
        className="h-6 w-6 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        <rect x={3} y={3} width={8} height={8} rx={2} />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect x={13} y={13} width={8} height={8} rx={2} />
    </svg>
);
