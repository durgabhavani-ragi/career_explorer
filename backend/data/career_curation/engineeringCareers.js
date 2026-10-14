// Engineering Sector Careers (10 Careers)
// Standardized Education Qualifications & Job-Preparation Roadmaps (Months Only)

module.exports = {
  'mechanical-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Mechanical Engineering (B.Tech / B.E.) or 3-Year Polytechnic Diploma in Mechanical Engineering for junior engineer cadres.",
      preferredDegree: "B.Tech / B.E. in Mechanical Engineering from an AICTE / UGC approved institution.",
      requiredProfessionalDegreeOrLicense: "No statutory license required for private corporate roles; chartership (IEI Chartered Engineer) or state PWD registration is optional for independent consulting.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics (PCM).",
        "Completion of B.Tech / B.E. degree or polytechnic diploma prior to industrial onboarding."
      ],
      preferredQualifications: [
        "Proficiency in 3D CAD modeling (SolidWorks, CATIA, or AutoCAD) and FEA simulation (ANSYS).",
        "Understanding of Geometric Dimensioning and Tolerancing (GD&T) according to ASME Y14.5 standards."
      ],
      eligibilityCriteria: "Core manufacturing, automotive, and industrial firms (Tata Motors, L&T, Mahindra) evaluate engineering design drawings, material mechanics, thermal systems, and manufacturing processes.",
      regulatoryNotes: "PSU recruitment mandates GATE qualifying score; private sector recruitment depends on technical CAD/CAE assessments."
    },
    roadmap: {
      title: "Mechanical Engineer Job-Preparation Roadmap",
      description: "Practical curriculum covering parametric CAD modeling, GD&T manufacturing drawings, FEA stress simulation, and manufacturing plant interview readiness.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Parametric 3D CAD Modeling & Assembly Design",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master parametric 3D solid modeling, sheet metal design, weldments, and complex assembly constraints using SolidWorks or CATIA.",
          tasks: [
            "Model 20+ complex mechanical machine parts with fully constrained sketches and fillets",
            "Assemble multi-part systems (e.g., internal gearbox, centrifugal pump assembly) checking for motion interference",
            "Generate production-ready 2D manufacturing drawings with orthogonal and section views"
          ],
          milestone: "Complete an error-free 3D mechanical assembly model containing 15+ interacting components.",
          prerequisites: ["Engineering graphics and basic machine drawing concepts"],
          resources: [
            { title: "SolidWorks Official Tutorials", url: "https://www.solidworks.com/support/home", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Geometric Dimensioning & Tolerancing (GD&T) Standards",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Apply ASME Y14.5 GD&T standards: datums, feature control frames, form/orientation/location tolerances, and tolerance stack-up analysis.",
          tasks: [
            "Annotate production drawings with positional tolerances, parallelism, perpendicularity, and runout symbols",
            "Perform 1D linear and worst-case tolerance stack-up calculations on mechanical assemblies",
            "Audit supplier fabrication drawings ensuring compliance with shop-floor CNC machining capabilities"
          ],
          milestone: "Produce 5 fully toleranced GD&T production drawings compliant with ASME Y14.5 standards.",
          prerequisites: ["Step 1: Parametric 3D CAD Modeling & Assembly Design"],
          resources: [
            { title: "ASME Standards Overview", url: "https://www.asme.org/codes-standards", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Finite Element Analysis (FEA) Stress & Thermal Simulation",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Perform static structural, modal, and thermal simulation using ANSYS or SolidWorks Simulation with mesh convergence validation.",
          tasks: [
            "Set up boundary conditions, load cases, and contact definitions for structural components",
            "Perform mesh refinement studies to ensure stress singularity avoidance and convergence",
            "Calculate factor of safety (FoS) and propose design modifications to eliminate stress concentrations"
          ],
          milestone: "Author an engineering FEA simulation report evaluating structural safety under operational loads.",
          prerequisites: ["Step 2: Geometric Dimensioning & Tolerancing (GD&T) Standards"],
          resources: [
            { title: "ANSYS Innovation Courses", url: "https://innovationspace.ansys.com/courses/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Manufacturing Portfolio & Core Engineering Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Compile a mechanical design portfolio, revise manufacturing metallurgy and thermodynamics, and apply for engineering roles.",
          tasks: [
            "Assemble a PDF engineering portfolio showcasing 3 complete mechanical design projects with CAD renders and FEA results",
            "Review core interview topics: heat treatment, machining tolerances, casting defects, and strength of materials",
            "Apply to 25+ mechanical engineering and CAD design roles across automotive, aerospace, and heavy equipment firms"
          ],
          milestone: "Pass 5 mock technical design review interviews and submit job applications.",
          prerequisites: ["Step 3: Finite Element Analysis (FEA) Stress & Thermal Simulation"],
          resources: [
            { title: "NPTEL Mechanical Engineering Courses", url: "https://nptel.ac.in/courses", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'civil-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Civil Engineering (B.Tech / B.E.) or 3-Year Polytechnic Diploma in Civil Engineering.",
      preferredDegree: "B.Tech / B.E. in Civil Engineering from an AICTE approved college.",
      requiredProfessionalDegreeOrLicense: "No statutory license required for corporate site execution; municipal chartered engineer license is required for independent building plan approvals.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics (PCM).",
        "Graduation or polytechnic diploma completed prior to site joining."
      ],
      preferredQualifications: [
        "Proficiency in structural design software (STAAD.Pro or ETABS) and AutoCAD Civil 2D/3D.",
        "Understanding of Indian Standard codes (IS 456 for Reinforced Concrete, IS 800 for Steel Structures)."
      ],
      eligibilityCriteria: "Infrastructure firms (L&T, Shapoorji Pallonji, Afcons) and real estate builders evaluate structural analysis, bar bending schedules (BBS), quantity surveying, and site safety management.",
      regulatoryNotes: "Government jobs (CPWD, State PWD, Railways) require SSC JE or State PSC examination qualification."
    },
    roadmap: {
      title: "Civil Engineer Job-Preparation Roadmap",
      description: "Practical curriculum covering structural design with STAAD.Pro/ETABS, Indian Standard codes (IS 456), AutoCAD drafting, bar bending schedules, and site execution.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Architectural & Structural Drafting in AutoCAD",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Draft structural plans, column layouts, beam centerlines, foundation details, and architectural working drawings.",
          tasks: [
            "Draft complete residential architectural floor plans, elevations, and cross-sections in AutoCAD",
            "Generate structural working drawings: column grid layouts, footing details, and slab reinforcement layouts",
            "Verify local municipal building bylaws (setbacks, Floor Area Ratio / FSI, ground coverage)"
          ],
          milestone: "Deliver a complete municipal approval drawing set for a G+2 residential structure.",
          prerequisites: ["Basic civil engineering drawing principles"],
          resources: [
            { title: "Autodesk AutoCAD Learning Hub", url: "https://www.autodesk.com/learn", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Structural Modeling & Analysis with STAAD.Pro / ETABS",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Model reinforced concrete frame structures, assign dead/live/wind loads according to IS 875, and design RCC elements per IS 456.",
          tasks: [
            "Model multi-story RCC frames assigning material properties, support conditions, and load combinations",
            "Perform seismic analysis per IS 1893 and design columns, beams, and isolated footings",
            "Extract shear force, bending moment diagrams, and reinforcement area schedules"
          ],
          milestone: "Complete structural analysis and reinforcement detailing for a G+4 residential building frame.",
          prerequisites: ["Step 1: Architectural & Structural Drafting in AutoCAD"],
          resources: [
            { title: "Bureau of Indian Standards (BIS) Civil Codes", url: "https://www.standardsbis.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Quantity Estimation, BBS & Project Planning",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Calculate concrete and steel material takeoffs, prepare Bar Bending Schedules (BBS), rate analysis, and project scheduling.",
          tasks: [
            "Prepare detailed Bill of Quantities (BOQ) for earthwork, concrete, brickwork, and finishing",
            "Calculate accurate Bar Bending Schedules (BBS) for footings, columns, and slabs with cutting lengths",
            "Build a construction progress schedule using Microsoft Project or Excel tracking critical path"
          ],
          milestone: "Deliver a comprehensive BOQ and Bar Bending Schedule for an entire residential building project.",
          prerequisites: ["Step 2: Structural Modeling & Analysis with STAAD.Pro / ETABS"],
          resources: [
            { title: "CPWD Specifications & Schedule of Rates", url: "https://cpwd.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Site Execution Protocols & Civil Engineering Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Master on-site quality testing (slump test, cube compressive strength), safety protocols, and apply for site engineer roles.",
          tasks: [
            "Review site quality compliance: concrete slump testing, curing protocols, formwork inspection, and cover block verification",
            "Prepare civil site interview topics: mix design (M20, M25), soil bearing capacity, and honeycombing remedies",
            "Apply to 25+ junior civil engineer, site engineer, and billing engineer openings across construction contractors"
          ],
          milestone: "Pass 5 mock structural and site engineering interviews and submit job applications.",
          prerequisites: ["Step 3: Quantity Estimation, BBS & Project Planning"],
          resources: [
            { title: "National Building Code of India (NBC)", url: "https://www.bis.gov.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'electrical-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Electrical Engineering (B.Tech / B.E.) or 3-Year Polytechnic Diploma in Electrical Engineering.",
      preferredDegree: "B.Tech / B.E. in Electrical & Electronics Engineering (EEE) or Electrical Engineering.",
      requiredProfessionalDegreeOrLicense: "State Electrical Inspectorate 'A' or 'B' grade supervisor license is preferred for high-voltage industrial installations.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics (PCM).",
        "Degree or polytechnic diploma completed prior to joining electrical utility or corporate operations."
      ],
      preferredQualifications: [
        "Hands-on proficiency in electrical CAD drafting (AutoCAD Electrical), switchgear sizing, and power systems simulation (ETAP/MATLAB).",
        "Understanding of Central Electricity Authority (CEA) safety regulations and Indian Standards (IS 732, IS 3043 for Earthing)."
      ],
      eligibilityCriteria: "Power utilities, switchgear manufacturers (Schneider, ABB, Siemens), and EPC contractors evaluate single line diagrams (SLD), protection relays, transformer sizing, and cable selection.",
      regulatoryNotes: "PSU careers (NTPC, PowerGrid, BHEL) require GATE qualification; corporate careers evaluate industrial electrical design proficiency."
    },
    roadmap: {
      title: "Electrical Engineer Job-Preparation Roadmap",
      description: "Practical curriculum covering industrial Single Line Diagrams (SLD), switchgear selection, cable and transformer sizing, ETAP power flow, and safety.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Single Line Diagram (SLD) & Electrical CAD Drafting",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Draft industrial power distribution Single Line Diagrams (SLD), substation layouts, and motor control schematics.",
          tasks: [
            "Draft complete industrial HT/LT Single Line Diagrams (SLDs) with transformer and busbar ratings in AutoCAD Electrical",
            "Design motor control center (MCC) control wiring schematics: DOL, Star-Delta, and VFD feeders",
            "Apply standardized IEC/IS electrical graphic symbols for circuit breakers, CT/PTs, and isolators"
          ],
          milestone: "Produce an end-to-end industrial plant SLD from 11kV grid incoming to 415V LT distribution panels.",
          prerequisites: ["Basic circuit theory and power engineering concepts"],
          resources: [
            { title: "Central Electricity Authority (CEA) Regulations", url: "https://cea.nic.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Transformer, Switchgear & Cable Sizing Calculations",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Perform engineering calculations for transformer kVA capacity, HT/LT circuit breaker breaking capacities, and cable voltage drop.",
          tasks: [
            "Calculate connected load, maximum demand, and transformer sizing applying diversity factors",
            "Perform cable sizing calculations factoring continuous current, derating factors, short-circuit withstand, and voltage drop",
            "Select and coordinate circuit breakers (ACB, MCCB, MCB) ensuring selective discrimination"
          ],
          milestone: "Author an electrical load calculation and cable sizing schedule for a 500 kVA manufacturing facility.",
          prerequisites: ["Step 1: Single Line Diagram (SLD) & Electrical CAD Drafting"],
          resources: [
            { title: "Schneider Electric Technical Electrical Guides", url: "https://www.se.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Power System Simulation with ETAP & Earthing Design",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Simulate power flow, short-circuit faults, and motor acceleration using ETAP; design plant earthing per IS 3043.",
          tasks: [
            "Model an industrial electrical network in ETAP and run load flow analysis optimizing power factor correction",
            "Execute three-phase symmetrical and unsymmetrical short-circuit fault analysis to determine switchgear ratings",
            "Calculate earthing conductor size, earth pit quantities, and step/touch potentials conforming to IS 3043"
          ],
          milestone: "Deliver an ETAP simulation and earthing design report for an industrial distribution substation.",
          prerequisites: ["Step 2: Transformer, Switchgear & Cable Sizing Calculations"],
          resources: [
            { title: "ETAP Official Video Tutorials", url: "https://etap.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Testing, Commissioning Protocols & Technical Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Master substation testing procedures (insulation resistance, relay testing), safety norms, and apply for electrical engineer roles.",
          tasks: [
            "Review commissioning procedures: Megger insulation resistance testing, transformer oil breakdown voltage (BDV) tests",
            "Practice core interview topics: synchronous machines, protection relays (overcurrent, earth fault, differential), and VFD harmonics",
            "Apply to 25+ electrical engineer, design engineer, and project commissioning roles across EPC and manufacturing firms"
          ],
          milestone: "Pass 5 mock electrical technical interviews and submit targeted job applications.",
          prerequisites: ["Step 3: Power System Simulation with ETAP & Earthing Design"],
          resources: [
            { title: "NPTEL Power Systems Engineering", url: "https://nptel.ac.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'electronics-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Electronics & Communication (ECE), Electronics & Instrumentation, or related engineering discipline.",
      preferredDegree: "B.Tech / B.E. in Electronics & Communication Engineering.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; technical competency in schematic capture, PCB layout, and circuit debugging determines hiring.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics (PCM).",
        "Graduation completed prior to corporate engineering onboarding."
      ],
      preferredQualifications: [
        "Proficiency in PCB design CAD software (Altium Designer, KiCad, or Eagle).",
        "Experience in circuit simulation (LTspice) and hardware soldering/oscilloscope debugging."
      ],
      eligibilityCriteria: "Consumer hardware, IoT, aerospace, and medical device companies evaluate circuit simulation, impedance control, EMI/EMC compliance, and component selection.",
      regulatoryNotes: "Recruitment criteria depend on specific hardware product architecture and manufacturing scale."
    },
    roadmap: {
      title: "Electronics Engineer Job-Preparation Roadmap",
      description: "Hands-on preparation in analog/digital circuit design, LTspice simulation, KiCad multi-layer PCB layout, component selection, and hardware testing.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Analog & Digital Circuit Simulation with LTspice",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Simulate operational amplifiers, power supplies (LDO, Buck/Boost DC-DC converters), active filters, and transistor switches.",
          tasks: [
            "Design and simulate active bandpass and low-pass filters in LTspice verifying Bode magnitude/phase plots",
            "Model switched-mode power supply (SMPS) step-down buck circuits calculating ripple voltage and component stress",
            "Analyze circuit performance across temperature variations using Monte Carlo simulation"
          ],
          milestone: "Deliver a validated LTspice simulation report for a low-noise regulated dual-rail power supply.",
          prerequisites: ["Analog electronics and semiconductor physics fundamentals"],
          resources: [
            { title: "Analog Devices LTspice Guide", url: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Schematic Capture & Component Selection",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Select production electronic components, study technical datasheets, and capture structured multi-sheet schematics in KiCad.",
          tasks: [
            "Source components from global distributors (DigiKey/Mouser) verifying operating temperature, package, and lifecycle availability",
            "Design multi-sheet schematics with hierarchical blocks: power management, microcontroller, and sensor interfaces",
            "Incorporate decoupling capacitors, ESD protection diodes, and pull-up/pull-down resistor networks"
          ],
          milestone: "Complete an industry-standard, multi-sheet schematic diagram for an IoT telemetry device.",
          prerequisites: ["Step 1: Analog & Digital Circuit Simulation with LTspice"],
          resources: [
            { title: "KiCad Official Documentation", url: "https://docs.kicad.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Multi-Layer PCB Layout & DFM Design Rules",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Route 2-layer and 4-layer PCBs in KiCad applying high-speed layout rules, ground planes, impedance control, and DFM constraints.",
          tasks: [
            "Define 4-layer PCB stackup (Signal-GND-Power-Signal) maintaining continuous reference ground return paths",
            "Route differential pairs (USB, Ethernet) maintaining controlled impedance and length matching",
            "Generate production Gerber files, drill files, Bill of Materials (BOM), and Pick-and-Place coordinates"
          ],
          milestone: "Fabricate a working 4-layer custom PCB prototype through an online fabrication service (JLCPCB/PCBWay).",
          prerequisites: ["Step 2: Schematic Capture & Component Selection"],
          resources: [
            { title: "Texas Instruments High-Speed PCB Layout Guide", url: "https://www.ti.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Hardware Debugging, Soldering & Technical Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Assemble SMD circuit boards using reflow/soldering iron, debug with oscilloscopes, and apply for hardware engineer roles.",
          tasks: [
            "Hand-solder SMD components down to 0603 passive sizes and QFN packages using hot air rework tools",
            "Probe power rail ripples, clock signals, and digital SPI/I2C buses using an oscilloscope to isolate hardware faults",
            "Apply to 20+ electronics engineer and hardware design engineer openings across hardware startups and tech multinationals"
          ],
          milestone: "Assemble and bring up a physical PCB prototype demonstrating verified hardware operation.",
          prerequisites: ["Step 3: Multi-Layer PCB Layout & DFM Design Rules"],
          resources: [
            { title: "EEVblog Electronics Engineering Forum", url: "https://www.eevblog.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'chemical-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Chemical Engineering (B.Tech / B.E.) or 3-Year Polytechnic Diploma in Chemical Technology.",
      preferredDegree: "B.Tech / B.E. in Chemical Engineering from an AICTE approved institution.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required for corporate roles; DISH (Directorate of Industrial Safety & Health) certifications are beneficial for safety officers.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics (PCM).",
        "Graduation completed prior to chemical process plant onboarding."
      ],
      preferredQualifications: [
        "Familiarity with process simulation software (Aspen Plus, DWSIM, or HYSYS).",
        "Understanding of Process Flow Diagrams (PFD), Piping and Instrumentation Diagrams (P&ID), and HAZOP studies."
      ],
      eligibilityCriteria: "Petrochemical, pharmaceutical, specialty chemical, and fertilizer companies (Reliance, IOCL, Asian Paints, Dr. Reddy's) evaluate mass/energy balances, distillation design, and chemical reaction engineering.",
      regulatoryNotes: "PSU careers (IOCL, BPCL, ONGC, GAIL) mandate GATE scores; private sector evaluates unit operations and simulation ability."
    },
    roadmap: {
      title: "Chemical Engineer Job-Preparation Roadmap",
      description: "Practical curriculum covering mass and energy balance calculations, process simulation with DWSIM/Aspen, P&ID drafting, equipment sizing, and plant safety.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Steady-State Mass & Energy Balances",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master steady-state material and heat balances across complex unit operations: distillation columns, absorbers, reactors, and recycle streams.",
          tasks: [
            "Perform rigorous material balance calculations with and without chemical reactions for continuous processes",
            "Calculate enthalpy balances around heat exchangers, reboilers, and exothermic chemical reactors",
            "Solve multi-component vapor-liquid equilibrium (VLE) calculations using Raoult's and Henry's laws"
          ],
          milestone: "Deliver comprehensive spreadsheet-based mass and energy balance sheets for a multi-stage chemical plant.",
          prerequisites: ["Chemical engineering thermodynamics and stoichiometry"],
          resources: [
            { title: "NPTEL Chemical Engineering Stoichiometry", url: "https://nptel.ac.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Process Simulation with Aspen Plus / DWSIM",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Model process flowsheets in Aspen Plus or open-source DWSIM: thermodynamic property packages, distillation columns, and heat exchanger networks.",
          tasks: [
            "Select appropriate thermodynamic property methods (NRTL, UNIQUAC, Peng-Robinson) based on chemical polarity",
            "Simulate continuous fractional distillation column optimizing reflux ratio and tray count for target product purity",
            "Perform sensitivity analysis evaluating utility consumption variations across fluctuating feed temperatures"
          ],
          milestone: "Complete an optimized flowsheet simulation of a continuous distillation train with zero convergence errors.",
          prerequisites: ["Step 1: Steady-State Mass & Energy Balances"],
          resources: [
            { title: "DWSIM Open Source Process Simulator", url: "https://dwsim.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "P&ID Drafting, Equipment Sizing & HAZOP Analysis",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Size chemical process equipment (pumps, heat exchangers, control valves), draft P&ID schematics, and conduct HAZOP reviews.",
          tasks: [
            "Size shell-and-tube heat exchangers and centrifugal process pumps calculating Net Positive Suction Head (NPSH)",
            "Draft Piping & Instrumentation Diagrams (P&ID) with ISA standard instrument tags, interlocks, and bypass lines",
            "Participate in a Hazard and Operability (HAZOP) workshop analyzing process deviations (More Flow, Less Pressure)"
          ],
          milestone: "Produce an equipment technical datasheet and validated P&ID drawing set for a chemical reaction section.",
          prerequisites: ["Step 2: Process Simulation with Aspen Plus / DWSIM"],
          resources: [
            { title: "American Institute of Chemical Engineers (AIChE) Safety Resources", url: "https://www.aiche.org/ccps", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Plant Operations Review & Technical Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Review unit operations troubleshooting (column flooding, cavitation), environmental norms, and apply for process engineer roles.",
          tasks: [
            "Review core interview topics: reaction kinetics, catalyst deactivation, drying curves, and wastewater treatment",
            "Assemble a technical portfolio containing simulation flowsheet outputs, P&ID drafts, and equipment calculation sheets",
            "Apply to 25+ process engineer and graduate engineer trainee (GET) roles across chemical, pharma, and energy firms"
          ],
          milestone: "Pass 5 mock technical chemical engineering interviews and submit job applications.",
          prerequisites: ["Step 3: P&ID Drafting, Equipment Sizing & HAZOP Analysis"],
          resources: [
            { title: "Indian Chemical Council (ICC)", url: "https://www.indianchemicalcouncil.com/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'aerospace-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Aerospace, Aeronautical, or Mechanical Engineering (B.Tech / B.E.).",
      preferredDegree: "B.Tech / B.E. in Aerospace or Aeronautical Engineering from an AICTE recognized university.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required for design engineering; DGCA Aircraft Maintenance Engineer (AME) license applies specifically to maintenance cadres.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics (PCM).",
        "Graduation completed prior to corporate or defence establishment onboarding."
      ],
      preferredQualifications: [
        "Proficiency in aerodynamic simulation (Ansys Fluent, OpenFOAM) and structural CAD tools (CATIA, Siemens NX).",
        "Strong foundations in compressible fluid dynamics, propulsion cycles, and aerospace composite structures."
      ],
      eligibilityCriteria: "Aerospace defense organizations (HAL, ISRO, DRDO) and commercial aerospace multinationals (Boeing India, Airbus India, Collins Aerospace) evaluate aerodynamics, flight dynamics, structural integrity, and propulsion efficiency.",
      regulatoryNotes: "Defence and space organizations (ISRO, DRDO) recruit via ICRB or GATE entrance examinations."
    },
    roadmap: {
      title: "Aerospace Engineer Job-Preparation Roadmap",
      description: "Rigorous preparation in aerodynamic CFD modeling (Ansys Fluent), structural analysis of composite airframes, propulsion cycle analysis, and flight dynamics.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Airfoil Aerodynamics & Compressible Flow Analysis",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Analyze 2D airfoils and 3D finite wings across subsonic and supersonic regimes: lift, drag, shockwaves, and boundary layer behavior.",
          tasks: [
            "Model NACA 4-digit and 5-digit airfoils using XFLR5 and extract polar curves (Cl vs Cd, Cl vs Alpha)",
            "Calculate normal and oblique shock wave properties across supersonic wedges and converging-diverging nozzles",
            "Understand aerodynamic stall mechanisms, induced drag mitigation, and winglet design"
          ],
          milestone: "Deliver aerodynamic performance comparison reports for 3 distinct airfoil geometries across varying Reynolds numbers.",
          prerequisites: ["Fluid mechanics and thermodynamics fundamentals"],
          resources: [
            { title: "NASA Glenn Aerodynamics Portal", url: "https://www.grc.nasa.gov/www/k-12/airplane/index.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Aerodynamic CFD Simulation with Ansys Fluent",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Perform computational fluid dynamics (CFD) simulation of aircraft geometries, meshing boundary layer prisms, and turbulence modeling.",
          tasks: [
            "Generate structured and unstructured meshes around wing profiles ensuring appropriate y+ values for turbulence resolution",
            "Set up k-omega SST and k-epsilon turbulence models in Ansys Fluent or OpenFOAM",
            "Post-process pressure contours, streamline plots, and calculate aerodynamic coefficients of lift and drag"
          ],
          milestone: "Execute a fully converged 3D wing CFD simulation matching wind-tunnel experimental benchmark data within 5% error.",
          prerequisites: ["Step 1: Airfoil Aerodynamics & Compressible Flow Analysis"],
          resources: [
            { title: "OpenFOAM Official User Guide", url: "https://www.openfoam.com/documentation/user-guide", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Airframe Structural Analysis & Propulsion Sizing",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Design aerospace lightweight composite structures in CATIA, evaluate wing-box bending, and calculate gas turbine propulsion cycles.",
          tasks: [
            "Design aircraft wing-box internal structure: spars, ribs, and skin stringers in CATIA or Siemens NX",
            "Calculate Brayton cycle efficiency, thrust specific fuel consumption (TSFC), and bypass ratios for turbofan engines",
            "Conduct static structural stress analysis on aircraft fuselage sections under peak maneuvering load factors (+2.5g)"
          ],
          milestone: "Deliver an integrated aircraft wing-box structural analysis and propulsion sizing design dossier.",
          prerequisites: ["Step 2: Aerodynamic CFD Simulation with Ansys Fluent"],
          resources: [
            { title: "AIAA Education Resources", url: "https://www.aiaa.org/get-involved/students-educators", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Aerospace Engineering Portfolio & Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Compile engineering design portfolio, review aviation regulatory compliance (FAA/EASA/DGCA), and apply for aerospace engineering roles.",
          tasks: [
            "Publish technical engineering portfolio showcasing CFD flowfields, structural models, and propulsion calculations",
            "Prepare technical interview questions on flight dynamics stability derivatives, Mach divergence, and aeroelastic flutter",
            "Apply to 20+ aerospace engineering, stress analyst, and aerothermal roles across commercial and defence aerospace firms"
          ],
          milestone: "Pass 5 mock technical aerospace engineering interviews and submit tailored job applications.",
          prerequisites: ["Step 3: Airframe Structural Analysis & Propulsion Sizing"],
          resources: [
            { title: "DGCA India Civil Aviation Guidelines", url: "https://www.dgca.gov.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'robotics-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Mechatronics, Robotics, Mechanical, Electrical, Electronics, or Computer Science Engineering.",
      preferredDegree: "B.Tech in Mechatronics / Robotics Engineering or Mechanical / Electronics with robotics projects.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; hiring is portfolio and hands-on robotics system implementation driven.",
      mandatoryRequirements: [
        "10+2 with Physics and Mathematics.",
        "Graduation degree completed prior to corporate robotics lab onboarding."
      ],
      preferredQualifications: [
        "Hands-on proficiency with Robot Operating System (ROS / ROS 2) and Gazebo simulation.",
        "Strong grasp of forward/inverse kinematics, trajectory planning, and computer vision (OpenCV)."
      ],
      eligibilityCriteria: "Warehouse automation, industrial robotics, autonomous vehicles, and drone companies evaluate candidate's integration of mechanics, electronics, and control algorithms.",
      regulatoryNotes: "Recruitment criteria depend on specific robotics product applications (AMRs, robotic manipulators, drones)."
    },
    roadmap: {
      title: "Robotics Engineer Job-Preparation Roadmap",
      description: "Interdisciplinary training in robot kinematics, Robot Operating System 2 (ROS 2), Gazebo physical simulation, sensor fusion, and autonomous navigation (Nav2).",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Robot Kinematics & Mathematical Modeling",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master spatial transformations, Denavit-Hartenberg (DH) parameters, forward/inverse kinematics, and Jacobians for robotic arms.",
          tasks: [
            "Derive forward kinematics equations for a 6-DOF industrial robotic arm using DH transformation matrices",
            "Implement numerical inverse kinematics solvers in Python calculating joint angles for target end-effector coordinates",
            "Simulate robot arm reachability and workspace visualization using Python Robotics toolbox"
          ],
          milestone: "Write a working Python script computing forward and inverse kinematics for a 6-DOF robotic manipulator.",
          prerequisites: ["Linear algebra, matrix operations, and Python programming"],
          resources: [
            { title: "Modern Robotics Course by Northwestern University", url: "https://modernrobotics.northwestern.edu/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Robot Operating System 2 (ROS 2) Architecture",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Build distributed robotics systems using ROS 2 (Humble/Iron): nodes, topics, services, actions, custom message types, and launch files.",
          tasks: [
            "Develop publisher and subscriber nodes in C++ and Python streaming sensor telemetry over DDS middleware",
            "Implement custom ROS 2 services and action servers handling multi-step robotic tasks with progress feedback",
            "Model a custom mobile robot chassis using Unified Robot Description Format (URDF) and Xacro"
          ],
          milestone: "Build a modular multi-node ROS 2 package controlling a virtual robot with custom sensor topics.",
          prerequisites: ["Step 1: Robot Kinematics & Mathematical Modeling"],
          resources: [
            { title: "ROS 2 Official Documentation", url: "https://docs.ros.org/en/humble/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Gazebo Physics Simulation & Sensor Fusion",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Simulate mobile robots in Gazebo with realistic physics, differential drive controllers, LiDAR, and depth camera integration.",
          tasks: [
            "Spawn custom URDF mobile robot in a multi-room Gazebo environment with collision physics and friction parameters",
            "Fuse wheel odometry and IMU sensor data using an Extended Kalman Filter (robot_localization package)",
            "Process 2D LiDAR laser scans and extract obstacle distance point clouds"
          ],
          milestone: "Simulate an Autonomous Mobile Robot (AMR) in Gazebo navigating obstacles with sensor fusion odometry.",
          prerequisites: ["Step 2: Robot Operating System 2 (ROS 2) Architecture"],
          resources: [
            { title: "Gazebo Simulation Tutorials", url: "https://gazebosim.org/docs", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Autonomous Navigation (SLAM, Nav2) & Interviews",
          durationMonths: 2,
          durationText: "2 months",
          category: "job_search",
          description: "Generate 2D occupancy grid maps using SLAM Toolbox, configure autonomous path planning with Nav2, and apply for robotics roles.",
          tasks: [
            "Map unknown environments using SLAM Toolbox and tune costmaps for global and local path planners",
            "Configure Nav2 navigation stack autonomously steering robot to goal coordinates avoiding dynamic obstacles",
            "Publish video demonstrations and GitHub code of autonomous robot navigation and apply to 20+ robotics startups"
          ],
          milestone: "Deliver a live demonstration of autonomous navigation and obstacle avoidance in Gazebo and submit job applications.",
          prerequisites: ["Step 3: Gazebo Physics Simulation & Sensor Fusion"],
          resources: [
            { title: "Nav2 Navigation Stack Documentation", url: "https://navigation.ros.org/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'biomedical-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Biomedical Engineering (B.Tech / B.E.), Medical Electronics, or Biotechnology Engineering.",
      preferredDegree: "B.Tech / B.E. in Biomedical Engineering from an AICTE recognized institution.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required for corporate medical device design; AERB certification is required for radiological equipment operators.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Biology/Mathematics (PCB/PCM).",
        "Graduation completed prior to hospital or medical device company onboarding."
      ],
      preferredQualifications: [
        "Knowledge of medical device regulatory compliance (ISO 13485, IEC 60601 electrical medical device safety standards).",
        "Experience in biosignal acquisition (ECG, EMG, EEG), medical imaging modalities, and physiological sensors."
      ],
      eligibilityCriteria: "Medical device manufacturers (GE Healthcare, Philips, Siemens Healthineers) and hospital chains (Apollo, Fortis) evaluate biomedical instrumentation, signal processing, patient safety isolation, and calibration.",
      regulatoryNotes: "Recruitment criteria depend on whether the role is in medical device R&D, manufacturing quality, or hospital biomedical engineering."
    },
    roadmap: {
      title: "Biomedical Engineer Job-Preparation Roadmap",
      description: "Practical curriculum covering biosignal processing (ECG, EMG), medical sensor frontends, IEC 60601 safety standards, hospital equipment calibration, and ISO 13485.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Biosignal Acquisition & Sensor Frontend Design",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Design analog frontends for biopotential acquisition: instrumentation amplifiers, right-leg drive circuits, and active analog filtering.",
          tasks: [
            "Design an ECG analog frontend circuit with high Common Mode Rejection Ratio (CMRR > 100 dB)",
            "Implement passive and active notch filters removing 50 Hz power-line interference from raw biosignals",
            "Calculate patient leakage currents ensuring compliance with micro-shock and macro-shock safety limits"
          ],
          milestone: "Simulate and assemble an analog biopotential acquisition circuit extracting clean ECG waveforms.",
          prerequisites: ["Analog electronics and human physiology fundamentals"],
          resources: [
            { title: "PhysioNet Open Biomedical Signal Database", url: "https://physionet.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Digital Biosignal Processing with Python / MATLAB",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Filter and analyze physiological signals: digital bandpass filtering, Pan-Tompkins QRS detection algorithm, and spectral analysis.",
          tasks: [
            "Implement digital Butterworth and Chebyshev filters removing baseline wander from ECG recordings",
            "Write Python implementation of the Pan-Tompkins algorithm detecting heart rate and R-peak intervals",
            "Analyze heart rate variability (HRV) metrics in time and frequency domains from continuous telemetry data"
          ],
          milestone: "Develop an automated Python pipeline detecting cardiac arrhythmias from PhysioNet ECG records.",
          prerequisites: ["Step 1: Biosignal Acquisition & Sensor Frontend Design"],
          resources: [
            { title: "SciPy Signal Processing Guide", url: "https://docs.scipy.org/doc/scipy/reference/signal.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Medical Device Standards (IEC 60601 & ISO 13485)",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Master medical device regulatory frameworks: ISO 13485 Quality Management Systems, IEC 60601 electrical safety, and risk analysis (ISO 14971).",
          tasks: [
            "Conduct structured risk analysis (FMEA) for a critical medical device identifying hazard mitigation controls",
            "Draft Design History File (DHF) documentation conforming to Indian Medical Device Rules (MDR 2017)",
            "Review hospital preventive maintenance, electrical safety analyzer testing, and calibration protocols for defibrillators and patient monitors"
          ],
          milestone: "Author an ISO 14971 risk management file and electrical safety testing protocol for an electronic medical device.",
          prerequisites: ["Step 2: Digital Biosignal Processing with Python / MATLAB"],
          resources: [
            { title: "Central Drugs Standard Control Organization (CDSCO) Medical Device Rules", url: "https://cdsco.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Equipment Calibration & Biomedical Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Master hospital equipment maintenance workflows (ventilators, hemodialysis, MRI/CT basics), and apply for biomedical engineering roles.",
          tasks: [
            "Review operating principles and calibration of key hospital equipment: ventilators, infusion pumps, and ultrasound machines",
            "Prepare technical interview questions on optical sensors (pulse oximetry), biopotential electrodes, and electromagnetic compatibility",
            "Apply to 25+ biomedical engineer and medical device R&D openings across hospital chains and medical technology companies"
          ],
          milestone: "Pass 5 mock biomedical technical interviews and submit targeted job applications.",
          prerequisites: ["Step 3: Medical Device Standards (IEC 60601 & ISO 13485)"],
          resources: [
            { title: "World Health Organization (WHO) Medical Devices Guidance", url: "https://www.who.int/health-topics/medical-devices", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'renewable-energy-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Electrical, Mechanical, Energy, Environmental, or Civil Engineering (B.Tech / B.E.).",
      preferredDegree: "B.Tech / B.E. in Electrical Engineering, Energy Engineering, or Mechanical Engineering.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; National Institute of Solar Energy (NISE) solar professional certifications are recognized.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics (PCM).",
        "Graduation completed prior to renewable energy EPC or developer onboarding."
      ],
      preferredQualifications: [
        "Proficiency in solar photovoltaic design software (PVsyst, Helioscope, AutoCAD).",
        "Understanding of grid integration norms, Power Purchase Agreements (PPA), and wind/solar resource assessment."
      ],
      eligibilityCriteria: "Solar developers (Tata Power Solar, Adani Green, ReNew Power) and EPC contractors evaluate solar string sizing, yield simulation, shadow analysis, and transmission evacuation.",
      regulatoryNotes: "Recruitment criteria depend on specific utility-scale vs commercial & industrial (C&I) rooftop solar project mandates."
    },
    roadmap: {
      title: "Renewable Energy Engineer Job-Preparation Roadmap",
      description: "Hands-on preparation in solar resource assessment, PVsyst solar plant design, electrical single line diagrams, inverter sizing, and grid compliance.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Solar Resource Assessment & PV System Physics",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master solar geometry: solar irradiance (GHI, DNI, DHI), tilt/azimuth optimization, photovoltaic cell physics, and temperature derating.",
          tasks: [
            "Analyze solar meteorological datasets (NASA SSE, Meteonorm, MNRE solar resource maps) for Indian project locations",
            "Calculate optimal seasonal tilt angles and inter-row pitch spacing to eliminate mutual shading losses",
            "Understand photovoltaic module technologies: Mono-PERC, TOPCon, and bifacial solar panel generation gains"
          ],
          milestone: "Deliver a site solar irradiation and shading loss assessment report for an Indian industrial rooftop project.",
          prerequisites: ["Basic physics, electrical engineering, and spreadsheet calculations"],
          resources: [
            { title: "Ministry of New and Renewable Energy (MNRE) Guidelines", url: "https://mnre.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Solar Plant Design & Simulation with PVsyst",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Design utility-scale and commercial rooftop solar projects in PVsyst: string sizing, inverter matching, loss trees, and generation yield.",
          tasks: [
            "Model 3D shadow scenes in PVsyst representing building parapets and surrounding obstructions",
            "Perform DC string sizing calculations matching module open-circuit voltage (Voc) to inverter MPPT voltage windows",
            "Analyze the complete PVsyst loss diagram (soiling, thermal losses, clipping, and AC cable ohmic losses)"
          ],
          milestone: "Generate an industry-standard PVsyst simulation report calculating Performance Ratio (PR) and annual generation yield (kWh/kWp).",
          prerequisites: ["Step 1: Solar Resource Assessment & PV System Physics"],
          resources: [
            { title: "PVsyst Official Documentation & Tutorials", url: "https://www.pvsyst.com/help/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Balance of System (BOS) Design & Electrical SLD",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Size solar inverters, DC/AC cables, string combiner boxes (SCB), transformers, and lightning protection systems in AutoCAD.",
          tasks: [
            "Draft complete electrical Single Line Diagrams (SLD) from solar strings to the HT grid interconnection point",
            "Calculate DC and AC cable voltage drops, selecting appropriate cross-sections to keep losses under 1.5%",
            "Design lightning protection and earthing systems conforming to Indian Central Electricity Authority regulations"
          ],
          milestone: "Produce an engineering Balance of System (BOS) specification sheet and electrical SLD for a 1 MW solar plant.",
          prerequisites: ["Step 2: Solar Plant Design & Simulation with PVsyst"],
          resources: [
            { title: "National Institute of Solar Energy (NISE) Knowledge Hub", url: "https://nise.res.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Grid Regulations & Renewable Energy Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Review Indian grid code standards, battery energy storage systems (BESS) integration, and apply for solar engineer roles.",
          tasks: [
            "Review CEA technical standards for grid connectivity of renewable plants (anti-islanding, low-voltage ride through / LVRT)",
            "Understand battery energy storage system (BESS) sizing for peak shaving and round-the-clock (RTC) power supply",
            "Apply to 25+ solar design engineer, renewable project engineer, and technical sales roles across solar EPCs and developers"
          ],
          milestone: "Pass 5 mock technical renewable energy engineering interviews and submit job applications.",
          prerequisites: ["Step 3: Balance of System (BOS) Design & Electrical SLD"],
          resources: [
            { title: "Solar Energy Corporation of India (SECI) Tenders Portal", url: "https://www.seci.co.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'vlsi-design-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Electronics & Communication (ECE), Electrical Engineering, Microelectronics, or Computer Science.",
      preferredDegree: "M.Tech in VLSI Design / Microelectronics or B.Tech in Electronics & Communication from an elite institution.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; semiconductor companies evaluate RTL coding, CMOS digital design, and STA mastery.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics (PCM).",
        "Graduation completed prior to semiconductor corporate onboarding."
      ],
      preferredQualifications: [
        "Strong proficiency in Verilog / SystemVerilog and Universal Verification Methodology (UVM) or physical design tools.",
        "Deep understanding of CMOS digital circuits, setup and hold time analysis, and clock domain crossing (CDC)."
      ],
      eligibilityCriteria: "Semiconductor multinationals (Intel, Qualcomm, Texas Instruments, AMD, NVIDIA, MediaTek) conduct rigorous assessments in digital logic, CMOS transistor physics, timing closure, and RTL coding.",
      regulatoryNotes: "Recruitment criteria depend on front-end RTL design/verification vs back-end physical design specialization."
    },
    roadmap: {
      title: "VLSI Design Engineer Job-Preparation Roadmap",
      description: "Specialized semiconductor curriculum covering digital CMOS design, Verilog/SystemVerilog RTL coding, Static Timing Analysis (STA), and verification.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Digital Logic Design & CMOS Transistor Physics",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master combinational/sequential logic, CMOS inverter characteristics, propagation delay, and finite state machines (FSM).",
          tasks: [
            "Design and analyze static CMOS logic gates calculating logical effort and parasitic delays",
            "Design robust Mealy and Moore Finite State Machines (FSM) with clean state encoding (One-Hot, Gray)",
            "Solve 50+ complex digital design interview problems on multiplexers, counters, and sequence detectors"
          ],
          milestone: "Design an optimized FSM controller on paper with complete state transition diagrams and truth tables.",
          prerequisites: ["Digital electronics and semiconductor device theory"],
          resources: [
            { title: "NPTEL VLSI Design Course by IIT Madras", url: "https://nptel.ac.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Verilog / SystemVerilog RTL Modeling",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Write synthesizable RTL code in Verilog and SystemVerilog for digital blocks: FIFOs, ALUs, memory controllers, and serial buses.",
          tasks: [
            "Write synthesizable Verilog for synchronous and asynchronous FIFOs with gray-code pointer synchronization",
            "Model an 8-bit pipelined Arithmetic Logic Unit (ALU) with hazard detection and forwarding",
            "Simulate RTL designs using open-source tools (Icarus Verilog + GTKWave) verifying cycle-accurate timing"
          ],
          milestone: "Design, simulate, and verify a parameterizable asynchronous FIFO in SystemVerilog without metastability bugs.",
          prerequisites: ["Step 1: Digital Logic Design & CMOS Transistor Physics"],
          resources: [
            { title: "ASIC World Verilog Tutorials", url: "http://www.asic-world.com/verilog/veritut.html", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Static Timing Analysis (STA) & Timing Closure",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Master timing constraints: setup and hold time calculations, clock skew, clock jitter, false paths, and multi-cycle paths.",
          tasks: [
            "Calculate maximum operating clock frequencies, setup slack, and hold slack across varying PVT operating corners",
            "Analyze and resolve setup and hold timing violations using buffer insertion and cell sizing",
            "Write Synopsys Design Constraints (SDC) defining clock periods, input/output delays, and false paths"
          ],
          milestone: "Resolve all setup and hold violations on a complex digital block achieving timing closure.",
          prerequisites: ["Step 2: Verilog / SystemVerilog RTL Modeling"],
          resources: [
            { title: "Static Timing Analysis for Nanometer Designs Overview", url: "https://www.springer.com/gp/book/9780387938196", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "VLSI Technical Portfolio & Semiconductor Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Assemble an RTL verification portfolio, practice semiconductor interview questions, and apply for junior VLSI positions.",
          tasks: [
            "Publish GitHub repository containing verified SystemVerilog RTL designs with testbenches and GTKWave screenshots",
            "Practice core semiconductor interview questions on metastability, clock domain crossing, and gate-level simulation",
            "Apply to 20+ junior VLSI design, digital verification, and physical design openings across Indian semiconductor centers (Bangalore, Hyderabad, Noida)"
          ],
          milestone: "Pass 5 mock semiconductor technical design interviews and submit targeted job applications.",
          prerequisites: ["Step 3: Static Timing Analysis (STA) & Timing Closure"],
          resources: [
            { title: "VLSI Expert Technical Guides", url: "https://www.vlsi-expert.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  }
};
