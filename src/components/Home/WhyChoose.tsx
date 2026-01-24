const WhyChoose = () => {
    return (
        <section id="features" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="font-heading mb-4 text-3xl text-foreground md:text-4xl">
                        Engineered for the Modern Real Estate Ecosystem
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Purpose-built tools for every stakeholder in the global property
                        investment landscape.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Institutional Investors */}
                    <div className="group rounded-md border border-border bg-card p-6 transition-all duration-300 hover:border-sky/50 hover:shadow-lg">
                        <div className="mb-5 flex h-12 w-12 bg-[#EBF6FB] items-center justify-center rounded-md bg-sky/10 transition-colors group-hover:bg-sky/20">
                            <BuildingIcon />
                        </div>
                        <h3 className="font-heading mb-2 text-lg text-[#071636] font-[700]">
                            Institutional Investors
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Standardized, raw historical data integration for risk modeling and
                            large-scale capital allocation.
                        </p>
                    </div>

                    {/* Market Analysts */}
                    <div className="group rounded-md border border-border bg-card p-6 transition-all duration-300 hover:border-sky/50 hover:shadow-lg">
                        <div className="mb-5 flex h-12 w-12 bg-[#EBF6FB] items-center justify-center rounded-md bg-sky/10 transition-colors group-hover:bg-sky/20">
                            <SearchIcon />
                        </div>
                        <h3 className="font-heading mb-2 text-lg text-[#071636] font-[700]">
                            Market Analysts
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Unbiased transparency for feasibility reports, consultancy, and
                            market research.
                        </p>
                    </div>

                    {/* Global Entrepreneurs */}
                    <div className="group rounded-md border border-border bg-card p-6 transition-all duration-300 hover:border-sky/50 hover:shadow-lg">
                        <div className="mb-5 flex h-12 w-12 bg-[#EBF6FB] items-center justify-center rounded-md bg-sky/10 transition-colors group-hover:bg-sky/20">
                            <GlobeIcon />
                        </div>
                        <h3 className="font-heading mb-2 text-lg text-[#071636] font-[700]">
                            Global Entrepreneurs
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Accessible comparative metrics to identify yield gaps and optimize
                            personal portfolios.
                        </p>
                    </div>

                    {/* API Integration */}
                    <div className="group rounded-md border border-border bg-card p-6 transition-all duration-300 hover:border-sky/50 hover:shadow-lg">
                        <div className="mb-5 flex h-12 w-12 bg-[#EBF6FB] items-center justify-center rounded-md bg-sky/10 transition-colors group-hover:bg-sky/20">
                            <LinkIcon />
                        </div>
                        <h3 className="font-heading mb-2 text-lg text-[#071636] font-[700]">
                            API Integration
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Seamlessly integrate validated global property data into your own
                            platforms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;

/* ---------------- Icons ---------------- */

const BuildingIcon = () => (
    <svg
        className="h-6 w-6 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M12 6h.01M16 6h.01" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
        <path d="M8 14h.01M12 14h.01M16 14h.01" />
    </svg>
);

const SearchIcon = () => (
    <svg
        className="h-6 w-6 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.3-4.3" />
    </svg>
);

const GlobeIcon = () => (
    <svg
        className="h-6 w-6 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20" />
        <path d="M2 12h20" />
    </svg>
);

const LinkIcon = () => (
    <svg
        className="h-6 w-6 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path d="M9 17H7a5 5 0 0 1 0-10h2" />
        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
        <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
);
