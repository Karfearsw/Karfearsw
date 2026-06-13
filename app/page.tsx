import { DashboardCard } from "@/components/dashboard-card";
import { actionPlan, creditInsights, disputes, financialSnapshot } from "@/lib/mvp-data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-catalyst-100">Credit Catalyst AI</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              AI credit repair and financial command center.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Upload credit reports, generate compliant dispute workflows, track debt, and receive a personalized AI action plan from one MVP dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-catalyst-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-catalyst-900/30" href="#upload">
                Upload credit report
              </a>
              <a className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white" href="#disputes">
                Review disputes
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm text-slate-300">AI score simulator</p>
            <p className="mt-3 text-5xl font-black">540 → 612</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">
              If utilization is lowered to 10% and one collection is removed within 90 days.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          <DashboardCard title="Net Worth" value={financialSnapshot.netWorth} description="Assets minus liabilities across linked accounts." />
          <DashboardCard title="Monthly Cash Flow" value={financialSnapshot.cashFlow} description="Income left after recurring bills and debt payments." />
          <DashboardCard title="Tracked Debt" value={financialSnapshot.debt} description="Credit cards, loans, collections, and installment accounts." />
          <DashboardCard title="Investments" value={financialSnapshot.investments} description="Portfolio balances prepared for Phase 3 integrations." />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" id="upload">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">AI credit analysis</h2>
              <p className="mt-2 text-slate-600">MVP report parser summary for Experian, Equifax, and TransUnion imports.</p>
            </div>
            <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">Analyze sample</button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {creditInsights.map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="mt-2 text-3xl font-black text-catalyst-600">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">AI action plan</h2>
          <ol className="mt-6 space-y-4">
            {actionPlan.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-catalyst-100 font-bold text-catalyst-900">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20" id="disputes">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Dispute engine</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3">Creditor</th>
                  <th className="px-4 py-3">Letter Type</th>
                  <th className="px-4 py-3">Bureau</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {disputes.map((dispute) => (
                  <tr key={dispute.creditor}>
                    <td className="px-4 py-4 font-semibold text-slate-900">{dispute.creditor}</td>
                    <td className="px-4 py-4 text-slate-600">{dispute.type}</td>
                    <td className="px-4 py-4 text-slate-600">{dispute.bureau}</td>
                    <td className="px-4 py-4"><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">{dispute.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
