export const creditInsights = [
  { label: "Negative Accounts", value: "4", detail: "2 collections, 1 charge-off, 1 late payment cluster" },
  { label: "Utilization", value: "68%", detail: "Target under 30%; best impact target is 10%" },
  { label: "Hard Inquiries", value: "6", detail: "3 may be dispute candidates after validation" },
  { label: "Projected Gain", value: "+72", detail: "Estimated 90-day improvement range: 54–88 points" }
];

export const actionPlan = [
  "Upload latest tri-bureau credit report and proof documents.",
  "Review AI-flagged dispute opportunities and approve letters.",
  "Pay revolving utilization below 30%, prioritizing cards above 80%.",
  "Open a credit-builder recommendation only after cash-flow review."
];

export const disputes = [
  { creditor: "Metro Collections", type: "Debt validation", status: "Ready for review", bureau: "Experian" },
  { creditor: "Summit Bank Card", type: "Late payment goodwill", status: "Draft generated", bureau: "TransUnion" },
  { creditor: "North Auto Finance", type: "FCRA verification", status: "Awaiting documents", bureau: "Equifax" }
];

export const financialSnapshot = {
  netWorth: "$18,420",
  cashFlow: "$1,280",
  debt: "$42,900",
  investments: "$9,750"
};
