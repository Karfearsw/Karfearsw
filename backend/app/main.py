from datetime import datetime, timezone
from typing import Literal
from uuid import UUID, uuid4

from fastapi import FastAPI, UploadFile
from pydantic import BaseModel, Field

app = FastAPI(
    title="Credit Catalyst AI API",
    version="0.1.0",
    description="MVP API for credit report analysis, dispute workflows, document vault, and financial snapshots.",
)


class CreditReportSummary(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    bureau: Literal["Experian", "Equifax", "TransUnion"]
    score: int = Field(ge=300, le=850)
    negative_accounts: int
    utilization_percent: float
    hard_inquiries: int
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class AnalysisResult(BaseModel):
    score_damage_factors: list[str]
    improvement_opportunities: list[str]
    dispute_opportunities: list[str]
    projected_score_gain: str


class DisputeDraft(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    creditor: str
    bureau: str
    letter_type: str
    status: str = "Draft generated"
    body: str


class FinancialSnapshot(BaseModel):
    net_worth: float
    monthly_cash_flow: float
    total_debt: float
    investments: float


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/reports/upload", response_model=CreditReportSummary)
async def upload_credit_report(file: UploadFile, bureau: Literal["Experian", "Equifax", "TransUnion"]):
    await file.read()
    return CreditReportSummary(
        bureau=bureau,
        score=540,
        negative_accounts=4,
        utilization_percent=68.0,
        hard_inquiries=6,
    )


@app.post("/reports/{report_id}/analyze", response_model=AnalysisResult)
def analyze_credit_report(report_id: UUID):
    return AnalysisResult(
        score_damage_factors=[
            "High revolving utilization across open credit cards",
            "Recent collection account reporting to at least one bureau",
            "Clustered late payments within the last 24 months",
        ],
        improvement_opportunities=[
            "Pay cards below 30% utilization, then optimize toward 10%",
            "Validate collection ownership and reporting accuracy",
            "Request goodwill adjustment for isolated late payment history",
        ],
        dispute_opportunities=[
            "Debt validation letter for collection account",
            "FCRA verification request for inconsistent bureau reporting",
            "Goodwill letter for otherwise positive installment account",
        ],
        projected_score_gain="54-88 points over 90 days",
    )


@app.post("/disputes/draft", response_model=DisputeDraft)
def generate_dispute_draft(creditor: str, bureau: str, letter_type: str):
    return DisputeDraft(
        creditor=creditor,
        bureau=bureau,
        letter_type=letter_type,
        body=(
            f"Please investigate the {creditor} account reporting with {bureau}. "
            "I request verification of the account ownership, balance, dates, and payment history "
            "under applicable consumer reporting laws."
        ),
    )


@app.get("/financial-snapshot", response_model=FinancialSnapshot)
def get_financial_snapshot():
    return FinancialSnapshot(
        net_worth=18420.0,
        monthly_cash_flow=1280.0,
        total_debt=42900.0,
        investments=9750.0,
    )
