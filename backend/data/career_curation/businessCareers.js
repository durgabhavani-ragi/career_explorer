// Business & Finance Careers (11 Careers)
// All roadmaps contain practical job preparation, 1-6 months per step, months only, zero degree milestones

module.exports = [
  {
    slug: 'chartered-accountant',
    title: 'Chartered Accountant (CA)',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) for Foundation Route, or Bachelor degree (55% commerce, 60% non-commerce) for Direct Entry Route',
      preferredDegree: 'B.Com / BBA in Finance or Accounting',
      requiredProfessionalDegreeOrLicense: 'ICAI Membership & Certificate of Practice (COP) issued by the Institute of Chartered Accountants of India',
      mandatoryRequirements: [
        'Registration with Institute of Chartered Accountants of India (ICAI)',
        'Passing ICAI Foundation, Intermediate, and Final Examinations',
        'Completion of mandatory 2-year practical articleship training under a practicing FCA/ACA',
        'Completion of ICITSS (Information Technology & Soft Skills) and Advanced ICITSS orientation courses'
      ],
      preferredQualifications: [
        'DISA (Diploma in Information Systems Audit) or FAFD certification from ICAI',
        'Advanced financial modeling and SAP ERP / Tally Prime experience'
      ],
      eligibilityCriteria: [
        'Indian citizenship or qualifying foreign national under ICAI reciprocity regulations',
        'No upper age limit for ICAI registration or examinations'
      ],
      regulatoryNotes: 'Chartered Accountancy is a statutory profession governed by the Chartered Accountants Act, 1949. Articleship and degree completion are formal institutional requirements that must precede independent statutory audit practice.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Advanced Financial Reporting & Ind AS Mastery',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master practical application of Indian Accounting Standards (Ind AS), IFRS, and Schedule III presentation of financial statements.',
          tasks: [
            'Study Ind AS 115 (Revenue), Ind AS 116 (Leases), and Ind AS 109 (Financial Instruments)',
            'Prepare and analyze consolidated financial statements for listed entities',
            'Conduct deferred tax computations under Ind AS 12'
          ],
          milestone: 'Draft a complete Schedule III compliant financial statement with notes on accounts',
          prerequisites: ['Basic accounting and intermediate corporate reporting knowledge'],
          resources: [
            { title: 'ICAI Digital Learning Hub - Ind AS Resources', url: 'https://learning.icai.org/', type: 'official', isFree: true },
            { title: 'Ministry of Corporate Affairs - Accounting Standards', url: 'https://www.mca.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Direct & Indirect Tax Advisory and Compliance',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Practical tax return preparation, corporate tax planning, transfer pricing documentation, and GST audit workflows.',
          tasks: [
            'Prepare corporate ITR-6 tax computations with MAT (Section 115JB) calculations',
            'File GSTR-1, GSTR-3B, and reconcile GSTR-9/9C annual returns',
            'Review international taxation concepts and TDS/TCS quarterly compliance returns'
          ],
          milestone: 'Complete simulated tax audit report (Form 3CD) and annual GST reconciliation',
          prerequisites: ['Income Tax Act and CGST Act statutory framework'],
          resources: [
            { title: 'Income Tax Department e-Filing Portal', url: 'https://www.incometax.gov.in/', type: 'official', isFree: true },
            { title: 'GST Council & CBIC Portal', url: 'https://www.gst.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Statutory Audit Tools & Interview Preparation',
          durationMonths: 2,
          durationText: '2 months',
          category: 'interview-prep',
          description: 'Preparation for Big 4, top mid-tier firms, or industry finance controller roles with audit automation tools.',
          tasks: [
            'Practice computer-assisted audit techniques (CAATs) using Excel, IDEA, or Alteryx',
            'Draft internal audit reports, risk registers, and CARO 2020 checklists',
            'Participate in ICAI campus placement mock interviews and technical case study discussions'
          ],
          milestone: 'Deliver an internal control review report and clear technical mock interview rounds',
          prerequisites: ['Standards on Auditing (SAs) and CARO 2020'],
          resources: [
            { title: 'ICAI Committee on Members in Industry (CMII) Placement Portal', url: 'https://cmib.icai.org/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'financial-analyst',
    title: 'Financial Analyst',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Commerce, Finance, Economics, Statistics, or Engineering',
      preferredDegree: 'MBA in Finance, M.Com, or B.Tech with financial acumen',
      requiredProfessionalDegreeOrLicense: 'No statutory license required for corporate roles; SEBI Research Analyst registration required for public equity recommendations',
      mandatoryRequirements: [
        'Recognized undergraduate degree with strong quantitative and analytical orientation',
        'NISM Series XV (Research Analyst) certification if issuing research reports in India'
      ],
      preferredQualifications: [
        'CFA Charterholder or CFA Level 1/2 cleared',
        'Financial Modeling and Valuation Analyst (FMVA) certification'
      ],
      eligibilityCriteria: [
        'Strong mathematical and analytical abilities',
        'Understanding of Indian equity markets and corporate finance'
      ],
      regulatoryNotes: 'Individuals and firms offering financial advice or equity research reports to retail investors in India must adhere to SEBI (Research Analysts) Regulations, 2014.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Advanced Financial Modeling & Excel Analysis',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Build 3-statement dynamic financial models and sensitivity matrices using professional Excel standards.',
          tasks: [
            'Build linked Income Statement, Balance Sheet, and Cash Flow models from annual reports',
            'Implement dynamic debt schedules, working capital schedules, and depreciation waterfall models',
            'Use scenario managers, INDEX/MATCH, XLOOKUP, and sensitivity tables'
          ],
          milestone: 'Construct a fully integrated 5-year historical and projection 3-statement model for an NSE-listed firm',
          prerequisites: ['Corporate accounting principles and basic Excel'],
          resources: [
            { title: 'Corporate Finance Institute - Free Modeling Guidelines', url: 'https://corporatefinanceinstitute.com/', type: 'learning', isFree: true },
            { title: 'NSE India Corporate Filings & Annual Reports', url: 'https://www.nseindia.com/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Company Valuation & Equity Research Methodologies',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Conduct discounted cash flow (DCF) valuation, comparable company analysis (Trading Comps), and precedent transactions.',
          tasks: [
            'Calculate WACC, beta adjustments, and unlevered free cash flows (FCFF / FCFE)',
            'Perform peer-group benchmarking using EV/EBITDA, P/E, P/B, and EV/Sales metrics',
            'Draft comprehensive equity research initiations with investment thesis and price target'
          ],
          milestone: 'Publish a 15-page equity research report on an Indian sector leader with valuation model',
          prerequisites: ['3-statement financial modeling'],
          resources: [
            { title: 'Aswath Damodaran Valuation Resources (NYU Stern)', url: 'https://pages.stern.nyu.edu/~adamodar/', type: 'learning', isFree: true },
            { title: 'BSE India Financial Information Portal', url: 'https://www.bseindia.com/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'NISM Certification & Investment Banking / Analyst Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Pass NISM Series XV exam, prepare financial pitch decks, and crack technical valuation interviews.',
          tasks: [
            'Clear NISM Series XV: Research Analyst Certification Examination',
            'Prepare pitch deck slide presentations summarizing valuation outcomes and risk factors',
            'Practice M&A accretion/dilution questions, LBO basics, and accounting interview cases'
          ],
          milestone: 'Obtain NISM certification and assemble portfolio of 2 completed equity valuation models',
          prerequisites: ['Valuation methodologies and financial analysis'],
          resources: [
            { title: 'NISM Certification Portal', url: 'https://www.nism.ac.in/', type: 'official', isFree: false }
          ]
        }
      ]
    }
  },
  {
    slug: 'company-secretary',
    title: 'Company Secretary (CS)',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) for CSEET Route, or Graduate / Post Graduate degree for Direct Entry Route',
      preferredDegree: 'Bachelor of Laws (LL.B.) or Bachelor of Commerce (B.Com)',
      requiredProfessionalDegreeOrLicense: 'ICSI Membership (ACS) issued by the Institute of Company Secretaries of India',
      mandatoryRequirements: [
        'Registration with Institute of Company Secretaries of India (ICSI)',
        'Passing CSEET (Company Secretary Executive Entrance Test), Executive, and Professional stages',
        'Completion of mandatory 21-month long-term practical training and Corporate Leadership Development Programme (CLDP)'
      ],
      preferredQualifications: [
        'Dual qualification: CS + LL.B. is highly sought after by corporate legal secretarial departments',
        'Certification in Corporate Governance, Insolvency & Bankruptcy Code, or ESG Compliance'
      ],
      eligibilityCriteria: [
        'Indian citizenship',
        'No upper age limit for ICSI registration or examination stages'
      ],
      regulatoryNotes: 'Company Secretaries in India operate under the Company Secretaries Act, 1980. Section 203 of the Companies Act, 2013 mandates a whole-time CS for listed companies and paid-up capital of ₹10 crore or more.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'MCA21 e-Filing & Secretarial Standards Practice',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Hands-on practice with Ministry of Corporate Affairs portal (MCA21 V3), form filings, and Secretarial Standards (SS-1 and SS-2).',
          tasks: [
            'Draft Board meeting notices, agendas, and minutes in compliance with SS-1',
            'Draft General Meeting notices and shareholder resolutions under SS-2',
            'Simulate filing of MGT-7 (Annual Return), AOC-4 (Financial Statements), and DIR-12 on MCA portal'
          ],
          milestone: 'Assemble a complete secretarial compliance folder for a private and a public limited company',
          prerequisites: ['Companies Act, 2013 fundamental provisions'],
          resources: [
            { title: 'ICSI Official Portal & Knowledge Base', url: 'https://www.icsi.edu/', type: 'official', isFree: true },
            { title: 'Ministry of Corporate Affairs (MCA)', url: 'https://www.mca.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'SEBI LODR Compliance & Listed Entity Governance',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Master SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 and insider trading regulations (PIT).',
          tasks: [
            'Prepare quarterly and annual compliance calendars under SEBI LODR',
            'Draft policies on Material Subsidiaries, Related Party Transactions, and Whistleblower Mechanisms',
            'Maintain Structured Digital Database (SDD) logs under SEBI Prohibition of Insider Trading regulations'
          ],
          milestone: 'Draft a complete Corporate Governance Compliance Report for an NSE/BSE listed company',
          prerequisites: ['Securities laws and Companies Act compliance knowledge'],
          resources: [
            { title: 'SEBI Regulations & Guidelines Portal', url: 'https://www.sebi.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Due Diligence, Secretarial Audit & Interview Preparation',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Conduct secretarial audits (Form MR-3), legal due diligence, and prepare for corporate secretarial interview rounds.',
          tasks: [
            'Review checklist for Secretarial Audit under Section 204 of Companies Act',
            'Practice answering legal interpretation scenarios involving FEMA, FDI reporting, and IBC basics',
            'Prepare for corporate placement interviews with top law firms and listed corporate groups'
          ],
          milestone: 'Complete simulated Secretarial Audit Report with mock observations and qualifications',
          prerequisites: ['Corporate secretarial documentation'],
          resources: [
            { title: 'ICSI Placement Portal', url: 'https://www.icsi.edu/placement/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'accountant',
    title: 'Accountant',
    educationQualification: {
      minimumQualification: 'Bachelor of Commerce (B.Com) or Bachelor of Business Administration (BBA) in Finance/Accounts',
      preferredDegree: 'M.Com, B.Com (Honours), or Diploma in Professional Accounting',
      requiredProfessionalDegreeOrLicense: 'No statutory license required for non-audit corporate accounting roles',
      mandatoryRequirements: [
        'Recognized undergraduate degree in Commerce or relevant field',
        'Sound knowledge of double-entry bookkeeping, GST, and TDS compliance'
      ],
      preferredQualifications: [
        'Tally Certified Professional or Zoho Books Certified Partner credential',
        'Advanced Microsoft Excel certification (MOS)'
      ],
      eligibilityCriteria: [
        'Knowledge of Indian taxation framework and basic corporate payroll calculation',
        'Proficiency in accounting software'
      ],
      regulatoryNotes: 'Corporate accountants assist in keeping statutory books under Section 128 of the Companies Act, 2013 and filing periodic tax returns under Indian tax laws.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Tally Prime & Modern Cloud Accounting Software',
          durationMonths: 1,
          durationText: '1 month',
          category: 'fundamentals',
          description: 'Hands-on recording of journal vouchers, ledger master setup, and bank reconciliation statements (BRS).',
          tasks: [
            'Set up company chart of accounts, cost centers, and inventory masters in Tally Prime',
            'Record sales, purchase, payment, receipt, and debit/credit note transactions',
            'Perform monthly bank reconciliation and adjust unpresented cheques'
          ],
          milestone: 'Create a fully reconciled 3-month bookkeeping record for a simulated trading enterprise',
          prerequisites: ['Basic debit/credit rules and ledger balancing'],
          resources: [
            { title: 'Tally Education Official Portal', url: 'https://tallyeducation.com/', type: 'official', isFree: false },
            { title: 'Zoho Books Training & Documentation', url: 'https://www.zoho.com/in/books/help/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'GST, TDS & Payroll Practical Compliance',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Calculate and file monthly GST returns, quarterly TDS returns, and process monthly employee payroll with PF and ESI.',
          tasks: [
            'Generate e-Invoices and e-Way Bills on official government portals',
            'File GSTR-1 and GSTR-3B after reconciling input tax credit with GSTR-2B',
            'Deduct TDS under Sections 194C, 194J, and 194I; prepare Form 26Q return',
            'Prepare payroll register calculating EPF, ESIC, and Professional Tax deductions'
          ],
          milestone: 'File sample GSTR-3B and prepare quarterly TDS return computation sheet',
          prerequisites: ['Tally bookkeeping basics'],
          resources: [
            { title: 'GST Official Portal Guides', url: 'https://www.gst.gov.in/', type: 'official', isFree: true },
            { title: 'EPFO Official Employer Portal', url: 'https://www.epfindia.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Financial Statements Finalization & Job Application',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Year-end adjustments, trial balance scrutiny, balance sheet finalization, and interview preparation.',
          tasks: [
            'Pass depreciation, accrual, and prepaid expense year-end adjustment entries',
            'Draft Profit & Loss Account and Balance Sheet with supporting schedules',
            'Build accounting resume emphasizing GST, TDS, and ERP skills; apply on Naukri and LinkedIn'
          ],
          milestone: 'Finalize trial balance and generate financial statements for an SME audit',
          prerequisites: ['Bookkeeping, GST, and payroll practical knowledge'],
          resources: [
            { title: 'National Career Service Portal - Accounting Roles', url: 'https://www.ncs.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'banking-officer',
    title: 'Banking Officer',
    educationQualification: {
      minimumQualification: 'Bachelor degree in any discipline from a recognized University',
      preferredDegree: 'B.Com, BBA, Economics, or B.Tech with quantitative aptitude',
      requiredProfessionalDegreeOrLicense: 'No license required; qualification through IBPS PO / SBI PO exams for public sector banks, or bank selection processes for private banks',
      mandatoryRequirements: [
        'Recognized undergraduate degree with minimum 55-60% aggregate (varies by bank notification)',
        'Qualifying in written examination and personal interview rounds (IBPS / SBI / Private Bank PO programs)'
      ],
      preferredQualifications: [
        'JAIIB (Junior Associate of Indian Institute of Banking & Finance) certification',
        'Post Graduate Diploma in Banking and Finance (PGDBF)'
      ],
      eligibilityCriteria: [
        'Age 20 to 30 years for General category candidates (relaxation for SC/ST/OBC as per central norms)',
        'Indian citizenship',
        'Good CIBIL credit score and clear police verification record'
      ],
      regulatoryNotes: 'Public sector bank recruitment is conducted centrally through IBPS (Institute of Banking Personnel Selection) and SBI. Private commercial banks hire through direct graduate tests or tie-up banking academies (e.g. Manipal).'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Quantitative Aptitude & Logical Reasoning Mastery',
          durationMonths: 2,
          durationText: '2 months',
          category: 'exam-prep',
          description: 'Prepare high-scoring topics for Prelims and Mains exams (IBPS PO, SBI PO, or private bank tests).',
          tasks: [
            'Master Data Interpretation (DI) sets: pie charts, radar graphs, and caselets',
            'Solve high-level seating arrangement and puzzle questions under strict time limits',
            'Complete timed sectional practice tests for English language comprehension and error spotting'
          ],
          milestone: 'Score above 80% percentile in full-length timed Prelims simulation test',
          prerequisites: ['Basic mathematics and logic fundamentals'],
          resources: [
            { title: 'IBPS Official Examination Portal', url: 'https://www.ibps.in/', type: 'official', isFree: true },
            { title: 'SBI Careers Portal', url: 'https://sbi.co.in/web/careers', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Banking Awareness, RBI Regulations & Financial Systems',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Learn Indian financial architecture, Reserve Bank of India policies, credit appraisal, and retail banking operations.',
          tasks: [
            'Study monetary policy tools: Repo, Reverse Repo, CRR, SLR, and MSF',
            'Learn KYC-AML norms, Negotiable Instruments Act, and SARFAESI Act provisions',
            'Understand priority sector lending (PSL) norms and retail loan appraisal (home, personal, MSME)'
          ],
          milestone: 'Clear comprehensive mock assessment on Indian banking regulations and current economic affairs',
          prerequisites: ['Basic Indian economic awareness'],
          resources: [
            { title: 'Reserve Bank of India (RBI) Official Portal', url: 'https://www.rbi.org.in/', type: 'official', isFree: true },
            { title: 'Indian Institute of Banking and Finance (IIBF)', url: 'https://www.iibf.org.in/', type: 'official', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Mains Descriptive Writing & Bank Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Practice essay/letter writing for Mains exam and prepare for panel interview and group discussions.',
          tasks: [
            'Write timed essays on economic and technological banking trends (UPI, CBDC, Financial Inclusion)',
            'Participate in mock personal interview panels addressing situational banking dilemmas',
            'Prepare customer service, sales pitch, and branch operations case responses'
          ],
          milestone: 'Complete 3 panel mock interviews and submit 10 reviewed banking descriptive essays',
          prerequisites: ['Banking awareness and Prelims qualification standards'],
          resources: [
            { title: 'National Career Service Banking Sector Guide', url: 'https://www.ncs.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'actuary',
    title: 'Actuary',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) with strong Mathematics / Statistics background, or Bachelor degree in Mathematics, Statistics, Actuarial Science, or Engineering',
      preferredDegree: 'B.Sc / M.Sc in Statistics, Mathematics, Data Science, or Actuarial Science',
      requiredProfessionalDegreeOrLicense: 'Fellowship (FIAI) or Associateship (AIAI) from the Institute of Actuaries of India (IAI)',
      mandatoryRequirements: [
        'Passing Actuarial Common Entrance Test (ACET) or non-ACET admission route of IAI',
        'Passing core actuarial examination papers (Core Mathematics, Core Statistics, Core Business)',
        'Completion of professional conduct and ethics modules (CB3 / PPD)'
      ],
      preferredQualifications: [
        'Dual registration with IAI (India) and IFoA (UK) / SOA (US)',
        'Proficiency in R, Python, and Prophet actuarial modeling software'
      ],
      eligibilityCriteria: [
        'Advanced mathematical aptitude and risk modeling capacity',
        'Enrollment as student member of IAI'
      ],
      regulatoryNotes: 'In India, Appointed Actuaries for life and general insurance companies are regulated under the Actuaries Act, 2006 and IRDAI (Appointed Actuary) Regulations.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Actuarial Statistics & Mathematics (CS1 / CM1 Prep)',
          durationMonths: 2,
          durationText: '2 months',
          category: 'exam-prep',
          description: 'Rigorous preparation for Core Statistics (CS1) and Core Mathematics (CM1) actuarial examinations.',
          tasks: [
            'Study probability distributions, hypothesis testing, and generalized linear models (GLMs)',
            'Master time value of money, annuities, life tables, and survival models',
            'Practice actuarial past exam papers under strict 3-hour exam conditions'
          ],
          milestone: 'Score passing marks in 3 consecutive mock papers for CS1/CM1 subjects',
          prerequisites: ['Advanced calculus, probability, and linear algebra'],
          resources: [
            { title: 'Institute of Actuaries of India (IAI) Portal', url: 'https://www.actuariesindia.org/', type: 'official', isFree: false },
            { title: 'Institute and Faculty of Actuaries (IFoA) Syllabus', url: 'https://www.actuaries.org.uk/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Practical Actuarial Modeling in R & Excel',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Hands-on implementation of actuarial models using R programming and advanced stochastic spreadsheets.',
          tasks: [
            'Program mortality decrement models and premium calculation scripts in R',
            'Perform loss reserving computations using Chain Ladder and Bornhuetter-Ferguson methods in Excel',
            'Simulate portfolio claim frequency and severity distributions using Monte Carlo techniques'
          ],
          milestone: 'Build an open-source actuarial reserving and pricing workbook in R and Excel',
          prerequisites: ['Actuarial mathematics and basic R programming'],
          resources: [
            { title: 'CRAN Actuarial Packages & Documentation', url: 'https://cran.r-project.org/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Insurance Product Pricing, Reserving & Analyst Job Prep',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Prepare for entry-level Actuarial Analyst roles in life insurance, general insurance, and reinsurance consultancies.',
          tasks: [
            'Analyze IRDAI solvency margin norms and risk-based capital (RBC) framework',
            'Prepare a life term insurance pricing model with expense and profit testing margins',
            'Prepare for technical interviews with reinsurance companies (Swiss Re, Munich Re, Mercer, Willis Towers Watson)'
          ],
          milestone: 'Complete a full insurance pricing case study and clear mock interview rounds',
          prerequisites: ['Actuarial statistics and pricing modeling'],
          resources: [
            { title: 'Insurance Regulatory and Development Authority of India (IRDAI)', url: 'https://irdai.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'business-consultant',
    title: 'Business Consultant',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Business, Engineering, Commerce, or Economics',
      preferredDegree: 'MBA from a premier business school (IIMs, ISB, XLRI) or master degree in relevant field',
      requiredProfessionalDegreeOrLicense: 'No statutory license required for management consulting',
      mandatoryRequirements: [
        'Recognized undergraduate degree with strong academic record',
        'Strong problem-solving, quantitative reasoning, and structured communication capabilities'
      ],
      preferredQualifications: [
        'Certified Management Consultant (CMC) or PMP / Agile Scrum certification',
        'Hands-on expertise in data analytics tools (Tableau, Power BI, SQL)'
      ],
      eligibilityCriteria: [
        'Demonstrated leadership experience, case analysis skills, and executive presentation capability'
      ],
      regulatoryNotes: 'Business and management consulting operates across advisory firms (McKinsey, BCG, Bain, Big 4, boutiques) and internal corporate strategy groups.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Structured Problem Solving & Case Frameworks',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master hypothesis-driven problem solving, MECE structuring, issue trees, and business case frameworks.',
          tasks: [
            'Practice profitability, market entry, pricing, and growth strategy frameworks',
            'Solve 40+ case interview problems with peer consulting partners',
            'Perform fast market sizing and mental math estimations'
          ],
          milestone: 'Crack 5 live case interview simulations with structured issue trees and synthesis',
          prerequisites: ['Basic business economics and strategic concepts'],
          resources: [
            { title: 'Harvard Business Review Case Studies', url: 'https://hbr.org/', type: 'learning', isFree: false },
            { title: 'Case in Point & Consulting Framework Guides', url: 'https://www.caseinterview.com/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Executive Presentation, Financial Analysis & Storytelling',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Craft board-ready PowerPoint decks, financial payback analyses, and operational improvement roadmaps.',
          tasks: [
            'Build storyline slide decks adhering to Barbara Minto Pyramid Principle',
            'Perform business benchmarking, cost optimization, and unit economic calculations',
            'Design operational change management blueprints for client implementation'
          ],
          milestone: 'Deliver a 15-slide consulting strategy pitch deck for an Indian corporate turnaround scenario',
          prerequisites: ['Case frameworks and business modeling'],
          resources: [
            { title: 'Bain & Company Insights & Publications', url: 'https://www.bain.com/insights/', type: 'learning', isFree: true },
            { title: 'McKinsey & Company Insights', url: 'https://www.mckinsey.com/featured-insights', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Consulting Fit Interview Mastery & Job Applications',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Perfect behavioral/fit interview stories (STAR method) and target tier-1, tier-2, and boutique consultancies.',
          tasks: [
            'Prepare leadership, conflict resolution, and teamwork personal stories',
            'Network with consultants and partners on LinkedIn for referrals',
            'Participate in mock partner interviews evaluating executive presence'
          ],
          milestone: 'Complete 3 partner-level mock interviews and finalize tailored consulting CV',
          prerequisites: ['Case solving and presentation skills'],
          resources: [
            { title: 'IIM Ahmedabad Working Papers & Case Repository', url: 'https://www.iima.ac.in/', type: 'learning', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'human-resources-specialist',
    title: 'Human Resources (HR) Specialist',
    educationQualification: {
      minimumQualification: 'Bachelor degree in any discipline (BBA, B.Com, BA Psychology, etc.)',
      preferredDegree: 'MBA in Human Resource Management (HRM) or Master in Social Work (MSW - HR)',
      requiredProfessionalDegreeOrLicense: 'No license required; SHRM-CP or PHRi certification advantageous',
      mandatoryRequirements: [
        'Recognized undergraduate degree with strong interpersonal and organizational communication skills',
        'Understanding of Indian labor laws and corporate workplace regulations'
      ],
      preferredQualifications: [
        'SHRM Certified Professional (SHRM-CP) or HRCI certification',
        'Hands-on experience with HRMS tools (Darwinbox, Keka, Zoho People, Workday)'
      ],
      eligibilityCriteria: [
        'Professional ethics, confidentiality handling, and organizational conflict management capability'
      ],
      regulatoryNotes: 'Corporate HR practices in India are governed by central and state labor codes, Factories Act, POSH Act (2013), EPF Act, and Industrial Disputes Act.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Talent Acquisition & Modern Sourcing Strategies',
          durationMonths: 1,
          durationText: '1 month',
          category: 'skills',
          description: 'Master end-to-end recruitment lifecycle, Boolean search sourcing, and applicant tracking systems (ATS).',
          tasks: [
            'Write targeted job descriptions (JDs) and conduct candidate screening calls',
            'Master LinkedIn Recruiter, Naukri RMS, and Boolean search strings',
            'Organize candidate evaluation rubrics and interview scheduling workflows'
          ],
          milestone: 'Execute simulated hiring drive from JD creation to issuing offer letter for 3 technical roles',
          prerequisites: ['Basic organizational communication skills'],
          resources: [
            { title: 'SHRM Official India Knowledge Resources', url: 'https://www.shrm.org/', type: 'learning', isFree: false },
            { title: 'Naukri Employer Knowledge Base', url: 'https://www.naukri.com/recruiters', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'HRMS, Payroll, POSH & Statutory Compliance',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Practical administration of HRMS tools, employee onboarding, POSH compliance, and Indian statutory labor rules.',
          tasks: [
            'Configure employee onboarding, leave, and attendance policies in Keka or Darwinbox',
            'Understand POSH (Prevention of Sexual Harassment) Act compliance and Internal Complaints Committee (ICC) procedures',
            'Calculate monthly statutory deductions: EPF, ESI, Gratuity, and Professional Tax'
          ],
          milestone: 'Design a comprehensive Employee Handbook and statutory compliance tracker for an Indian enterprise',
          prerequisites: ['Talent acquisition fundamentals'],
          resources: [
            { title: 'Ministry of Labour & Employment Portal', url: 'https://labour.gov.in/', type: 'official', isFree: true },
            { title: 'Ministry of Women & Child Development (POSH Guidelines)', url: 'https://wcd.nic.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Performance Management, Employee Engagement & Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Implement OKRs/KPIs, employee engagement initiatives, retention strategies, and HR interview preparation.',
          tasks: [
            'Design quarterly OKR frameworks and 360-degree appraisal cycles',
            'Formulate employee wellness and retention interventions based on attrition data analysis',
            'Prepare for HR Generalist / Talent Acquisition specialist interview rounds'
          ],
          milestone: 'Deliver an employee engagement plan with retention metrics and clear interview rounds',
          prerequisites: ['HRMS and labor law compliance'],
          resources: [
            { title: 'National HRD Network (NHRDN) Resources', url: 'https://www.nationalhrd.org/', type: 'official', isFree: false }
          ]
        }
      ]
    }
  },
  {
    slug: 'operations-manager',
    title: 'Operations Manager',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Business Administration, Engineering, Commerce, or related discipline',
      preferredDegree: 'MBA in Operations Management / Supply Chain, or B.Tech with operations experience',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; Six Sigma Green/Black Belt certification preferred',
      mandatoryRequirements: [
        'Recognized undergraduate degree with strong analytical and process management mindset',
        'Understanding of operational metrics, budget planning, and resource allocation'
      ],
      preferredQualifications: [
        'Lean Six Sigma Green Belt or Black Belt certification',
        'APICS / ASCM Certified in Production and Inventory Management (CPIM)'
      ],
      eligibilityCriteria: [
        'Team leadership experience and crisis resolution capabilities'
      ],
      regulatoryNotes: 'Operations management spans manufacturing facilities, e-commerce fulfillment hubs, IT service delivery centers, and healthcare institutions.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Process Mapping, Lean Principles & Bottleneck Analysis',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Learn Value Stream Mapping (VSM), 5S methodology, Kaizen, and Theory of Constraints to optimize business processes.',
          tasks: [
            'Map end-to-end operational workflows using SIPOC and flowchart diagrams',
            'Identify cycle time bottlenecks, idle time, and resource wastage in delivery pipelines',
            'Calculate Overall Equipment Effectiveness (OEE) and process capability (Cp, Cpk)'
          ],
          milestone: 'Conduct a complete Value Stream Mapping audit for a warehouse or service fulfillment process',
          prerequisites: ['Basic business management principles'],
          resources: [
            { title: 'Lean Enterprise Institute Free Articles', url: 'https://www.lean.org/', type: 'learning', isFree: true },
            { title: 'ASQ (American Society for Quality) Tools', url: 'https://asq.org/quality-resources', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Supply Chain, Inventory Control & Vendor Management',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Implement Economic Order Quantity (EOQ), ABC-XYZ inventory classification, and vendor Service Level Agreements (SLAs).',
          tasks: [
            'Build automated Excel models for safety stock, reorder point, and lead time variation',
            'Draft vendor contracts with explicit penalty clauses, KPIs, and quality benchmarks',
            'Analyze warehouse layout and last-mile logistics routing efficiency'
          ],
          milestone: 'Design an inventory optimization model reducing carrying costs by 15% in a case simulation',
          prerequisites: ['Process mapping and basic quantitative analysis'],
          resources: [
            { title: 'Association for Supply Chain Management (ASCM)', url: 'https://www.ascm.org/', type: 'learning', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Data-Driven Operations Dashboarding & Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Build Power BI operations dashboards and prepare for behavioral leadership interviews.',
          tasks: [
            'Build real-time operations dashboard tracking throughput, SLA breach rate, and unit costs',
            'Prepare leadership case responses handling union grievances, supply disruptions, and team scaling',
            'Apply for Assistant Operations Manager and Operations Lead roles across tech and logistics firms'
          ],
          milestone: 'Present an operational turnaround case study with an interactive Power BI dashboard',
          prerequisites: ['Operations metrics and inventory principles'],
          resources: [
            { title: 'Coursera - Operations Management Specialization (Wharton)', url: 'https://www.coursera.org/', type: 'learning', isFree: false }
          ]
        }
      ]
    }
  },
  {
    slug: 'project-manager',
    title: 'Project Manager',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Engineering, Computer Science, Business Administration, or Commerce',
      preferredDegree: 'B.Tech / B.E. or MBA in Project Management / Systems',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; PMP or PRINCE2 certification strongly preferred by employers',
      mandatoryRequirements: [
        'Recognized undergraduate degree with minimum 3-5 years professional project experience for PMP eligibility',
        'Strong grasp of project life cycles, risk management, and cross-functional stakeholder alignment'
      ],
      preferredQualifications: [
        'Project Management Professional (PMP) from Project Management Institute (PMI)',
        'Certified ScrumMaster (CSM) or Professional Scrum Master (PSM I)'
      ],
      eligibilityCriteria: [
        '36 months of project leadership experience if holding a 4-year degree (for PMP eligibility)',
        'Proficiency in project management tooling (Jira, Asana, MS Project)'
      ],
      regulatoryNotes: 'Project managers guide complex software, infrastructure, and engineering projects in accordance with corporate governance frameworks.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Agile, Scrum & Kanban Methodologies with Jira',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master sprint ceremonies, user story estimations, backlog grooming, and workflow tracking in Jira.',
          tasks: [
            'Configure Jira project boards, sprint cadence, story points, and epics',
            'Facilitate sprint planning, daily stand-ups, sprint reviews, and retrospectives',
            'Track velocity charts, sprint burndown, and cumulative flow diagrams'
          ],
          milestone: 'Set up and administer an end-to-end simulated 4-sprint software release in Jira',
          prerequisites: ['Basic understanding of software or business workflows'],
          resources: [
            { title: 'Scrum Guide Official Portal', url: 'https://scrumguides.org/', type: 'official', isFree: true },
            { title: 'Atlassian Jira Agile Coaching Guide', url: 'https://www.atlassian.com/agile', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Scope, Budget, Schedule & Risk Management (PMBOK)',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Master traditional waterfall planning: Work Breakdown Structure (WBS), Critical Path Method (CPM), and Risk Registers.',
          tasks: [
            'Develop detailed Work Breakdown Structures and Gantt charts in Microsoft Project or ClickUp',
            'Calculate Earned Value Management (EVM) metrics: Cost Variance (CV), Schedule Variance (SV), CPI, and SPI',
            'Build a quantitative project risk register with mitigation triggers and contingency budgets'
          ],
          milestone: 'Create a comprehensive Project Charter and integrated project management plan for a $100K initiative',
          prerequisites: ['Agile concepts and basic financial budgeting'],
          resources: [
            { title: 'Project Management Institute (PMI) PMBOK Guide Overview', url: 'https://www.pmi.org/', type: 'official', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'PMP / Scrum Certification & Executive Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Pass PSM I / CSM or prepare PMP exam application, practice situational stakeholder management interview questions.',
          tasks: [
            'Complete PSM I certification assessment from Scrum.org',
            'Prepare answers for crisis scenarios: scope creep, deadline delays, and difficult stakeholders',
            'Assemble project portfolio highlighting delivered projects, budget savings, and time-to-market improvements'
          ],
          milestone: 'Earn PSM I certification and complete 3 behavioral project management mock interviews',
          prerequisites: ['Agile and PMBOK planning mastery'],
          resources: [
            { title: 'Scrum.org Professional Scrum Master Portal', url: 'https://www.scrum.org/', type: 'official', isFree: false }
          ]
        }
      ]
    }
  },
  {
    slug: 'business-development-manager',
    title: 'Business Development Manager',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Business Administration, Marketing, Commerce, or Engineering',
      preferredDegree: 'MBA in Sales & Marketing or International Business',
      requiredProfessionalDegreeOrLicense: 'No statutory license required for corporate business development',
      mandatoryRequirements: [
        'Recognized undergraduate degree with strong persuasive negotiation and business acumen',
        'Demonstrated ability to identify commercial opportunities, build B2B pipelines, and close contracts'
      ],
      preferredQualifications: [
        'HubSpot Inbound Sales or Salesforce Sales Cloud certification',
        'Domain expertise in B2B SaaS, enterprise services, or consumer distribution'
      ],
      eligibilityCriteria: [
        'Excellent verbal communication, consultative selling capability, and commercial contract acumen'
      ],
      regulatoryNotes: 'BDMs structure commercial partnerships, distribution channels, and sales agreements compliant with Indian contract and consumer protection laws.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'B2B Lead Generation & Account-Based Prospecting',
          durationMonths: 1,
          durationText: '1 month',
          category: 'skills',
          description: 'Master buyer persona identification, cold outreach sequences, LinkedIn Sales Navigator, and CRM pipeline management.',
          tasks: [
            'Identify Ideal Customer Profiles (ICPs) and build targeted B2B prospect lists',
            'Write high-converting multi-touch cold email and LinkedIn message sequences',
            'Manage lead stages, deal pipelines, and activity logging in HubSpot or Salesforce'
          ],
          milestone: 'Generate an active qualified pipeline of 25 enterprise prospects using cold outreach campaigns',
          prerequisites: ['Basic market awareness and professional communication'],
          resources: [
            { title: 'HubSpot Academy Inbound Sales Certification', url: 'https://academy.hubspot.com/', type: 'learning', isFree: true },
            { title: 'LinkedIn Sales Navigator Best Practices Guide', url: 'https://business.linkedin.com/sales-solutions', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Consultative Discovery, Pitching & Proposal Building',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Conduct SPICED and MEDDIC discovery calls, customize product demonstration pitches, and draft commercial proposals.',
          tasks: [
            'Execute consultative discovery calls uncovering prospect business pain points and ROI expectations',
            'Design tailored pitch decks highlighting business case value rather than product features',
            'Draft formal Requests for Proposal (RFPs), scope of work (SOW) documents, and commercial pricing models'
          ],
          milestone: 'Deliver a winning mock client pitch and complete a formal enterprise commercial proposal',
          prerequisites: ['Prospecting and B2B communication'],
          resources: [
            { title: 'Gartner B2B Buying Journey Research', url: 'https://www.gartner.com/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Contract Negotiation, Deal Closing & Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Master objection handling, commercial negotiation strategies, contract closing, and sales leadership interview rounds.',
          tasks: [
            'Practice overcoming client price objections and negotiating win-win contract terms',
            'Understand payment terms, MSAs (Master Services Agreements), and renewal structures',
            'Prepare sales quota presentation and deal-closing track record for executive interviews'
          ],
          milestone: 'Complete 3 negotiation simulation rounds and submit deal pitch portfolio',
          prerequisites: ['Discovery pitching and proposal drafting'],
          resources: [
            { title: 'National Career Service Portal - Sales & BD Opportunities', url: 'https://www.ncs.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  }
];
