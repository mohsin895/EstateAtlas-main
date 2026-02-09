// components/RecentReferralActivity.tsx
import React from "react";

type ReferralStatus = "Paid" | "Pending" | "Trial";

interface Referral {
    date: string;
    user: string;
    plan: string;
    commission: string;
    status: ReferralStatus;
}

const referrals: Referral[] = [
    { date: "Oct 24, 2025", user: "m***@gmail.com", plan: "Premium Monthly", commission: "+$14.70", status: "Paid" },
    { date: "Oct 18, 2025", user: "j***@outlook.com", plan: "Premium Annual", commission: "+$58.80", status: "Pending" },
    { date: "Oct 12, 2025", user: "s***@yahoo.com", plan: "Premium Monthly", commission: "+$14.70", status: "Paid" },
    { date: "Oct 5, 2025", user: "a***@gmail.com", plan: "Premium Monthly", commission: "+$14.70", status: "Trial" },
    { date: "Sep 28, 2025", user: "r***@proton.me", plan: "Premium Annual", commission: "+$58.80", status: "Paid" },
];

const statusColors: Record<ReferralStatus, string> = {
    Paid: "bg-emerald-100 text-emerald-700",
    Pending: "bg-amber-100 text-amber-700",
    Trial: "bg-blue-100 text-blue-700",
};

const RecentReferralActivity: React.FC = () => {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold tracking-tight text-lg font-heading">Recent Referral Activity</h3>
                <p className="text-sm text-muted-foreground">
                    Track conversions and commission earnings from your referrals.
                </p>
            </div>
            <div className="p-6 pt-0">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">User</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Plan</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Commission</th>
                            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Status</th>
                        </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                        {referrals.map((referral, idx) => (
                            <tr
                                key={idx}
                                className="border-b transition-colors hover:bg-muted/50"
                            >
                                <td className="p-4 align-middle text-sm text-muted-foreground font-mono">
                                    {referral.date}
                                </td>
                                <td className="p-4 align-middle text-sm font-mono">{referral.user}</td>
                                <td className="p-4 align-middle text-sm">{referral.plan}</td>
                                <td className="p-4 align-middle text-right font-medium text-emerald-600">{referral.commission}</td>
                                <td className="p-4 align-middle text-right">
                                    <div
                                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-opacity-80 ${statusColors[referral.status]}`}
                                    >
                                        {referral.status}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecentReferralActivity;
