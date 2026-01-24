import React from "react";

type InsightCardProps = {
    category: string;
    title: string;
    description: string;
    date: string;
};

const InsightCard: React.FC<InsightCardProps> = ({ category, title, description, date }) => {
    return (
        <div className="group cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm border-border transition-colors hover:border-sky/30">
            {/* Image/Gradient */}
            <div
                className="relative overflow-hidden h-48 bg-[#293852]"

            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center w-20 h-20 border-2 border-[#4FAADD] rounded-full">
                        <div className="w-12 h-12 border border-[#4FAADD] rounded-full"></div>
                    </div>
                </div>
                <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-heading bg-[#3BAADD] text-white rounded-md">
            {category}
          </span>
                </div>
            </div>

            {/* Title */}
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
                <h3 className="line-clamp-2 text-lg font-heading text-card-foreground transition-colors group-hover:text-sky">
                    {title}
                </h3>
            </div>

            {/* Description */}
            <div className="p-6 pt-0 pb-2">
                <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 pt-4">
                <span className="text-xs text-muted-foreground">{date}</span>
                <ArrowRightIcon className="w-4 h-4 text-sky opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    );
};

const MarketInsights: React.FC = () => {
    const insights: InsightCardProps[] = [
        {
            category: "Market Trends",
            title: "2025 Rental Yield Forecast: Europe vs. Asia",
            description:
                "A comprehensive analysis of expected rental yields across major metropolitan areas in both regions.",
            date: "Jan 8, 2026",
        },
        {
            category: "Regulation",
            title: "Tax Implications for US Investors in Spain",
            description:
                "Navigate the complex tax landscape for American investors looking at Spanish real estate opportunities.",
            date: "Jan 5, 2026",
        },
        {
            category: "Growth",
            title: "Emerging Markets: The Rise of Vietnam",
            description:
                "Why Southeast Asia's fastest-growing economy is attracting serious institutional capital.",
            date: "Jan 2, 2026",
        },
    ];

    return (
        <section id="insights" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-heading text-foreground md:text-4xl">
                        Global Market Intelligence
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Expert insights and analysis from our research team to keep you ahead
                        of market movements.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-3">
                    {insights.map((insight, idx) => (
                        <InsightCard key={idx} {...insight} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketInsights;

/* ---------------- Icons ---------------- */
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
    </svg>
);
