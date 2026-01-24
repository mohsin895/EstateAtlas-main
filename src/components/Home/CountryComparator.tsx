import React from "react";
import Link from "next/link";

type ComparatorRowProps = {
    leftValue: string;
    rightValue: string;
    label: string;
    icon: React.ReactNode;
    leftColor?: string;
    rightColor?: string;
};

const ComparatorRow: React.FC<ComparatorRowProps> = ({
                                                         leftValue,
                                                         rightValue,
                                                         label,
                                                         icon,
                                                         leftColor = "text-foreground",
                                                         rightColor = "text-sky",
                                                     }) => {
    return (
        <div className="flex items-center p-3 bg-muted/50 rounded-md">
            <span className={`font-heading w-16 text-right ${leftColor}`}>{leftValue}</span>
            <div className="flex-1 flex items-center justify-center gap-2 px-4">
                {icon}
                <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
            <span className={`font-heading w-16 text-left ${rightColor}`}>{rightValue}</span>
        </div>
    );
};

const CountryComparator: React.FC = () => {
    return (
        <section className="py-24 bg-[#E5E5E5]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Comparator Card */}
                    <div className="order-2 lg:order-1">
                        <div className="overflow-hidden rounded-md border border-border bg-card shadow-xl">
                            {/* Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                                <div className="h-3 w-3 rounded-full bg-destructive/60"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-500/60"></div>
                                <div className="h-3 w-3 rounded-full bg-green-500/60"></div>
                                <span className="ml-4 text-sm font-heading text-muted-foreground">
                  Country Comparator Tool
                </span>
                            </div>

                            {/* Comparator Content */}
                            <div className="p-6">
                                {/* Country Compare Row */}
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex-1 rounded-md bg-muted p-3 text-center">
                                        <span className="text-xs text-muted-foreground">Compare</span>
                                        <p className="font-heading text-foreground">Spain</p>
                                    </div>
                                    <ArrowRightIcon />
                                    <div className="flex-1 rounded-md bg-muted p-3 text-center">
                                        <span className="text-xs text-muted-foreground">With</span>
                                        <p className="font-heading text-foreground">Portugal</p>
                                    </div>
                                </div>

                                {/* Data Rows */}
                                <div className="space-y-3">
                                    <ComparatorRow
                                        leftValue="4.2%"
                                        rightValue="5.8%"
                                        label="Avg. Yield"
                                        icon={<PercentIcon />}
                                    />
                                    <ComparatorRow
                                        leftValue="€2,850"
                                        rightValue="€1,920"
                                        label="Price/sqm"
                                        icon={<DollarIcon />}
                                    />
                                    <ComparatorRow
                                        leftValue="+18%"
                                        rightValue="+32%"
                                        label="5Y Growth"
                                        icon={<TrendingUpIcon />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Description */}
                    <div className="order-1 lg:order-2">
                        <h2 className="mb-6 text-3xl leading-tight text-[#071636] font-[700] font-heading  md:text-4xl">
                            Smarter Decisions When Investing in Foreign Real Estate.
                        </h2>
                        <p className="mb-6 leading-relaxed text-muted-foreground">
                            Cross-border investing is complex. Different currencies, measurement
                            units, tax regimes, and regulatory frameworks make comparisons nearly
                            impossible without the right tools.
                        </p>
                        <p className="mb-8 leading-relaxed text-muted-foreground">
                            Our platform normalizes data across all these variables, giving you an
                            apples-to-apples comparison of ROI potential. Make informed decisions
                            backed by verified, institutional-grade data.
                        </p>

                        <Link href="/pricing" className="inline-block">
                            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#4CAFDE] px-4 text-sm font-heading text-accent-foreground transition-colors hover:bg-sky/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                                Unlock Comparison Tool
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountryComparator;

/* ---------------- Icons ---------------- */
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={`flex-shrink-0 w-5 h-5 text-muted-foreground ${className || ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
    </svg>
);

const PercentIcon: React.FC = () => (
    <svg
        className="w-4 h-4 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        <line x1={19} y1={5} x2={5} y2={19}></line>
        <circle cx={6.5} cy={6.5} r={2.5}></circle>
        <circle cx={17.5} cy={17.5} r={2.5}></circle>
    </svg>
);

const DollarIcon: React.FC = () => (
    <svg
        className="w-4 h-4 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        <line x1={12} y1={2} x2={12} y2={22}></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

const TrendingUpIcon: React.FC = () => (
    <svg
        className="w-4 h-4 text-sky"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
);
