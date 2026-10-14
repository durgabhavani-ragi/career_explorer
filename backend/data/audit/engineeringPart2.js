/**
 * Engineering Careers Audit Data - Part 2 (Remaining 5 Careers)
 * Covers: aerospace-engineer, robotics-engineer, biomedical-engineer, renewable-energy-engineer, vlsi-design-engineer
 * Validated for Indian employment market, realistic compensation benchmarks,
 * eligible education pathways, and sequential roadmap milestones.
 */

const engineeringPart2 = [
  {
    slug: 'aerospace-engineer',
    title: 'Aerospace Engineer',
    description: 'Designs, manufactures, and tests aircraft, spacecraft, satellites, propulsion systems, and defense missiles. Employs computational fluid dynamics (CFD), structural mechanics, and flight avionics across Indian space research and private aerospace defense suppliers.',
    educationRequirements: 'B.Tech/B.E. in Aerospace or Aeronautical Engineering (or Mechanical with aerospace minor) via JEE Advanced (for IIST/IITs) or JEE Main. Proficiency in ANSYS Fluent, CATIA, and MATLAB.',
    educationPathways: [
      'B.Tech in Aerospace Engineering from IIST (Indian Institute of Space Science and Technology) with direct ISRO absorption quota',
      'B.Tech in Aerospace/Aeronautical Engineering from IITs/NITs (4 years via JEE Advanced / JEE Main)',
      'B.Tech Mechanical Engineering followed by M.Tech in Aerospace Engineering / Propulsion (2 years via GATE AE/ME)'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Mathematics (minimum 60% aggregate). Qualifying JEE Main / JEE Advanced or state engineering entrance tests.',
    certificationsAndExams: [
      'JEE Advanced / GATE (Aerospace Engineering - AE)',
      'CATIA Mechanical & Surface Design Certification',
      'ANSYS CFD Certification'
    ],
    workEnvironment: 'Space launch centers, defense R&D laboratories, aircraft manufacturing hangars, and engineering design centers in Bengaluru, Hyderabad, Thiruvananthapuram, and Kanpur.',
    marketDemand: 'Moderate',
    jobOutlook: 'Rapidly expanding with India’s private space tech sector (IN-SPACe deregulation, Skyroot, Agnikul) and HAL/DRDO indigenous aerospace programs.',
    salaryRange: { min: 450000, max: 2000000, currency: 'INR', source: 'AmbitionBox Aerospace Salaries 2024, ISRO/DRDO Scientist Pay Scales (7th CPC Level 10)' },
    salarySource: 'AmbitionBox Aerospace Salaries 2024, ISRO/DRDO Scientist Pay Scales (7th CPC Level 10)',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 800000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 800000, max: 1400000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1400000, max: 2400000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'ISRO/DRDO Scientist/Engineer \'SC\' starts at 7th Pay Commission Level 10 (~₹80,000–95,000/month gross plus housing & benefits). Private spacetech startups offer equity plus ₹8–18 LPA.'
    },
    careerProgression: [
      'Graduate Engineer Trainee / Junior Aerospace Engineer',
      'Scientist/Engineer \'SC\' (ISRO/DRDO) / Aerospace Systems Design Engineer',
      'Scientist/Engineer \'SD\' / Senior Propulsion Engineer',
      'Project Director / Flight Operations Lead',
      'Chief Technical Officer / Outstanding Scientist'
    ],
    employmentSectors: {
      government: 'ISRO (VSSC, URSC, LPSC), DRDO, Hindustan Aeronautics Limited (HAL), National Aerospace Laboratories (NAL)',
      privateSector: 'Spacetech Startups (Skyroot Aerospace, Agnikul Cosmos, Pixxel), Private Aerospace Defense (Tata Advanced Systems, L&T Defense, Mahindra Aerostructures)'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Tech Degree) + 6 Months ICRB / DRDO RAC preparation',
      educationDuration: '4 Years (8 Semesters)',
      prepDuration: '6–12 Months focused preparation for ISRO Centralised Recruitment Board (ICRB) or GATE AE',
      practicalTrainingDuration: '2–4 Months internship at HAL, NAL, or aerotech design facilities',
      jobSearchDuration: '3–6 Months recruitment notification cycle',
      overlapNotes: 'Aerodynamics software projects and flight simulations are developed during undergraduate semesters.',
      confidenceNote: 'IIST graduates maintaining CGPA > 7.5 are prioritized for direct absorption into ISRO centers.'
    },
    sources: [
      { title: 'IIST Academic & Absorption Guidelines', url: 'https://www.iist.ac.in', sourceAuthority: 'IIST / Department of Space', verifiedDate: '2024-10-14' },
      { title: 'ISRO Centralised Recruitment Board (ICRB)', url: 'https://www.isro.gov.in/Careers.html', sourceAuthority: 'ISRO', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Aerospace Engineer Career Roadmap',
      description: 'Progression pathway across aerodynamics, propulsion, orbital mechanics, structural airframe design, and ISRO/private spacetech qualification.',
      totalEstimatedDuration: '4.5 Years',
      durationBreakdown: 'Core Aerodynamics & Flight Mechanics: 2 Years | CAD/CFD Simulation & Avionics: 1 Year | Major Aerospace Project & Internship: 1 Year | ISRO/GATE Preparation: 6 Months',
      overlapNotes: 'GATE preparation is conducted in parallel with final year undergraduate coursework.',
      steps: [
        {
          stepNumber: 1,
          title: 'Foundational Mathematics, Aerodynamics & Thermodynamics',
          stageType: 'education',
          duration: 'Year 1–2 (Undergraduate)',
          description: 'Master vector calculus, fluid dynamics, compressibility, gas dynamics, and thermodynamic cycles governing aircraft and rocket propulsion.',
          topics: ['Incompressible & Compressible Flow', 'Thermodynamics of Propulsion', 'Engineering Mechanics', 'Material Science for Aerospace'],
          skillsToAcquire: ['Fluid Mechanics Problem Solving', 'Thermodynamic Cycle Calculation', 'Differential Equations'],
          activities: ['Complete fluid mechanics laboratory experiments', 'Model airfoil lift and drag characteristics analytically'],
          completionCriteria: 'Clear 1st and 2nd year B.Tech coursework with CGPA > 7.5; understand subsonic and supersonic flow theory.',
          dependencies: '10+2 with PCM (Physics, Chemistry, Math)',
          resources: [
            { name: 'NPTEL Introduction to Aerospace Engineering (IIT Bombay)', url: 'https://nptel.ac.in/courses/101101001', type: 'Course', isFree: true },
            { name: 'MIT OpenCourseWare: Aircraft Systems Engineering', url: 'https://ocw.mit.edu', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Aero-Structures, Flight Dynamics & Avionics',
          stageType: 'skill_acquisition',
          duration: 'Year 3 (Semesters 5–6)',
          description: 'Study aircraft stability and control, structural stress analysis of thin-walled airframes, satellite orbital mechanics, and propulsion components.',
          topics: ['Rocket Propulsion Principles', 'Flight Stability & Control', 'Finite Element Analysis (FEA)', 'Avionics & Radar Systems'],
          skillsToAcquire: ['3D Airframe CAD Modeling (CATIA/SolidWorks)', 'Mesh Generation & ANSYS Fluent CFD', 'MATLAB Simulink Flight Modeling'],
          activities: ['Perform CFD simulation of NACA airfoil profiles at various angles of attack', 'Build RC aircraft or model rocket payload'],
          completionCriteria: 'Complete a functional computational fluid dynamic simulation and airframe stress analysis project.',
          dependencies: 'Foundational Aerodynamics & Thermodynamics',
          resources: [
            { name: 'NPTEL Flight Dynamics - II (Stability) (IIT Kanpur)', url: 'https://nptel.ac.in/courses/101104006', type: 'Course', isFree: true },
            { name: 'ANSYS Innovation Courses: Fluid Dynamics', url: 'https://innovationspace.ansys.com', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Aerospace Capstone Project & Industrial Training',
          stageType: 'practical_experience',
          duration: 'Year 4 (Semesters 7–8)',
          description: 'Complete hands-on aerospace engineering internship at HAL, NAL, or a spacetech startup, followed by an industry capstone project.',
          topics: ['Propulsion Nozzle Design', 'Orbital Mechanics & Satellite Trajectories', 'Composite Materials Manufacturing'],
          skillsToAcquire: ['Telemetry Data Interpretation', 'Composite Layup & Testing', 'Systems Engineering Documentation'],
          activities: ['Internship at HAL, ISRO center, or private spacetech startup', 'Publish capstone research on micro-propulsion or launch vehicle aerodynamics'],
          completionCriteria: 'Submission and viva-voce defense of major aerospace project; completion of 6–8 week industrial training.',
          dependencies: 'Core Aero-structures and Simulation Tools',
          resources: [
            { name: 'ISRO Student Internship Portal', url: 'https://www.isro.gov.in/Internship.html', type: 'Portal', isFree: true },
            { name: 'AIAA Student Branch Competitions', url: 'https://www.aiaa.org', type: 'Organization', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'ISRO ICRB, GATE AE & Defense Spacetech Induction',
          stageType: 'job_search',
          duration: '3–6 Months Post-Degree',
          description: 'Appear for ISRO Centralised Recruitment Board (ICRB) exam, GATE Aerospace for PSU/M.Tech admissions, or apply to private spacetech firms.',
          topics: ['GATE AE Core Syllabus', 'Engineering Aptitude', 'Technical Interview in Aerodynamics & Propulsion'],
          skillsToAcquire: ['Speed Problem Solving for Competitive Exams', 'Oral Technical Interview Defense'],
          activities: ['Solve past 10 years ICRB & GATE AE question papers', 'Apply for aerospace trainee roles in Skyroot, Agnikul, Tata Advanced Systems'],
          completionCriteria: 'Securing qualifying rank in GATE/ICRB or offer letter from private aerospace engineering firm.',
          dependencies: 'Completed B.Tech in Aerospace/Aeronautical/Mechanical Engineering',
          resources: [
            { name: 'GATE Official Aerospace Syllabus & Papers', url: 'https://gate.iitk.ac.in', type: 'Official Portal', isFree: true },
            { name: 'IN-SPACe Digital Platform', url: 'https://www.inspace.gov.in', type: 'Government Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'robotics-engineer',
    title: 'Robotics Engineer',
    description: 'Designs, programs, and integrates robotic manipulators, autonomous mobile robots (AMRs), and industrial automation systems. Combines kinematics, computer vision, Robot Operating System (ROS2), and embedded microcontrollers across Indian warehouse logistics, automotive plants, and surgical healthcare.',
    educationRequirements: 'B.Tech in Mechatronics, Robotics, Mechanical, Electrical, or Computer Science followed by specialized projects in ROS/ROS2, kinematics, and embedded C++.',
    educationPathways: [
      'B.Tech in Robotics & Automation / Mechatronics Engineering (4 years via JEE Main or State CETs)',
      'B.Tech in Mechanical / Electrical / CS with specialized robotics capstone and ROS2 certification',
      'M.Tech in Robotics & Autonomous Systems (2 years via GATE from IITs, IISc, or IIIT Hyderabad)'
    ],
    eligibilityRequirements: '10+2 with PCM (minimum 55-60%). Strong aptitude in mathematics (linear algebra, calculus) and C++/Python programming.',
    certificationsAndExams: [
      'ROS2 (Robot Operating System) Developer Certificate',
      'NVIDIA Deep Learning Institute: AI for Robotics & Jetson Nano',
      'Fanuc / ABB Industrial Robot Programming Certification'
    ],
    workEnvironment: 'Industrial robotics labs, automated warehouse fulfillment centers (Gurugram, Bengaluru, Pune, Chennai), electronics manufacturing units, and R&D tech parks.',
    marketDemand: 'High',
    jobOutlook: 'Rapid hiring driven by warehouse automation (GreyOrange, Addverb), automotive robotic assembly lines, and industrial smart manufacturing (Industry 4.0).',
    salaryRange: { min: 450000, max: 2200000, currency: 'INR', source: 'AmbitionBox Robotics Engineer Salary 2024, Glassdoor India' },
    salarySource: 'AmbitionBox Robotics Engineer Salary 2024, Glassdoor India',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 800000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 800000, max: 1500000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1500000, max: 2600000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Leading Indian robotics OEMs (Addverb Technologies, GreyOrange) and global robotics R&D centers offer ₹7–14 LPA for fresh robotics graduates with strong ROS/C++ skills.'
    },
    careerProgression: [
      'Robotics Software / Controls Engineer Trainee',
      'Autonomous Systems / Perception Engineer',
      'Senior Robotics Engineer / Fleet Automation Lead',
      'Principal Robotics Architect / Systems Lead',
      'Director of Robotics Engineering / VP Hardware-Software Integration'
    ],
    employmentSectors: {
      government: 'DRDO (Center for Artificial Intelligence and Robotics - CAIR), ISRO Robotics divisions, BARC Automation',
      privateSector: 'Indian Robotics OEMs (Addverb Technologies, GreyOrange, Cynlr), Automotive Assembly (Maruti, Hyundai, Tata Motors), Healthcare surgical robotics firms'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Tech) + 4–6 Months specialized ROS2/perception portfolio development',
      educationDuration: '4 Years (8 Semesters)',
      prepDuration: '4–6 Months building physical AMR prototypes or simulation environments (Gazebo/Isaac Sim)',
      practicalTrainingDuration: '3–6 Months industrial automation or robotics startup internship',
      jobSearchDuration: '2–4 Months recruitment cycle',
      overlapNotes: 'Robotics club activities, hackathons, and hardware projects run concurrent with college semesters.',
      confidenceNote: 'A demonstrable GitHub repository featuring ROS2 packages and Gazebo simulation videos drastically reduces fresher job search time.'
    },
    sources: [
      { title: 'AmbitionBox Robotics Engineer Salaries in India', url: 'https://www.ambitionbox.com/salaries/robotics-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' },
      { title: 'IEEE Robotics and Automation Society India', url: 'https://www.ieee-ras.org', sourceAuthority: 'IEEE RAS', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Robotics Engineer Career Roadmap',
      description: 'End-to-end robotics pathway: linear algebra, forward/inverse kinematics, microcontroller interfacing, ROS2 middleware, SLAM navigation, and sensor fusion.',
      totalEstimatedDuration: '4.5 Years',
      durationBreakdown: 'Foundations & Embedded Systems: 1.5 Years | Kinematics, Dynamics & Control: 1 Year | ROS2, SLAM & Computer Vision: 1.5 Years | Industry Project & Internship: 6 Months',
      overlapNotes: 'Hardware prototyping and simulation projects are executed concurrently during college semesters.',
      steps: [
        {
          stepNumber: 1,
          title: 'Mathematics, C++ Programming & Embedded Hardware',
          stageType: 'education',
          duration: 'Year 1–2',
          description: 'Build strong foundations in linear algebra (matrices, transformations, quaternions), object-oriented C++20, and microcontroller programming (STM32/ESP32).',
          topics: ['Linear Algebra & Coordinate Transformations', 'Modern C++ (Pointers, Memory Management, STL)', 'Embedded Systems (UART, I2C, SPI, PWM)', 'Linux Environment & Git'],
          skillsToAcquire: ['C++ Development on Linux', 'Microcontroller Interfacing', 'Circuit Prototyping'],
          activities: ['Interface DC motor encoders and ultrasonic sensors to an ESP32', 'Write PID controller in C++ for motor velocity control'],
          completionCriteria: 'Build a functioning 2-wheel differential drive robot controlled via embedded C++ and telemetry.',
          dependencies: '10+2 with Physics and Mathematics',
          resources: [
            { name: 'NPTEL Introduction to Embedded Systems (IIT Kharagpur)', url: 'https://nptel.ac.in/courses/106105193', type: 'Course', isFree: true },
            { name: 'Learn Modern C++ for Robotics (The Construct)', url: 'https://www.theconstruct.ai', type: 'Course', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Robot Kinematics, Dynamics & Simulation',
          stageType: 'skill_acquisition',
          duration: 'Year 3 (Semesters 5–6)',
          description: 'Master forward and inverse kinematics using Denavit-Hartenberg (DH) parameters, trajectory generation, and simulation in Gazebo/Webots.',
          topics: ['Forward & Inverse Kinematics', 'Jacobians & Singularity Analysis', 'Gazebo & URDF Robot Modeling', 'Rigid Body Dynamics'],
          skillsToAcquire: ['URDF / Xacro Modeling', 'Gazebo Physics Simulation', 'Kinematic Calculation in Python/MATLAB'],
          activities: ['Model a 6-DOF robotic manipulator arm in URDF and simulate trajectory planning', 'Simulate differential drive vehicle navigation in Gazebo'],
          completionCriteria: 'Successful simulation of a robotic arm moving between cartesian coordinates with obstacle avoidance.',
          dependencies: 'Linear Algebra and C++ Foundations',
          resources: [
            { name: 'Modern Robotics: Mechanics, Planning, and Control (Coursera/Northwestern)', url: 'https://www.coursera.org/specializations/modernrobotics', type: 'Course', isFree: true },
            { name: 'ROS 2 Official Documentation', url: 'https://docs.ros.org/en/humble/', type: 'Documentation', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'ROS 2 Middleware, Sensor Fusion & SLAM Navigation',
          stageType: 'skill_acquisition',
          duration: 'Year 4 (Semesters 7–8)',
          description: 'Implement modern ROS 2 (Humble/Iron) nodes, LiDAR-based 2D/3D SLAM (Simultaneous Localization and Mapping), Nav2 stack, and camera sensor fusion.',
          topics: ['ROS 2 Nodes, Topics, Services, Actions', 'LiDAR & Depth Camera Sensor Fusion', 'Cartographer / Fast-LIO SLAM', 'Nav2 Path Planning (A*, TEB Local Planner)'],
          skillsToAcquire: ['ROS 2 C++ Architecture', 'Autonomous Mobile Robot (AMR) Navigation', 'Point Cloud Processing (PCL)'],
          activities: ['Build an autonomous mobile robot with 2D LiDAR that maps a room and autonomously plans paths to designated waypoints using Nav2', 'Integrate OpenCV for object detection and visual servoing'],
          completionCriteria: 'Demonstrate end-to-end autonomous navigation and mapping on a physical robot or high-fidelity simulation.',
          dependencies: 'Robot Kinematics and C++ Proficiency',
          resources: [
            { name: 'Nav2 Documentation & Tutorials', url: 'https://navigation.ros.org', type: 'Documentation', isFree: true },
            { name: 'NVIDIA Isaac Sim & Isaac ROS Tutorials', url: 'https://developer.nvidia.com/isaac-sim', type: 'Platform', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Industrial Automation Internship & Robotics Portfolio',
          stageType: 'practical_experience',
          duration: '3–6 Months',
          description: 'Undertake an internship at a robotics OEM (Addverb, GreyOrange) or automation supplier, finalize GitHub repository with video demonstrations, and secure full-time placement.',
          topics: ['Industrial Robot Safety Standards (ISO 10218)', 'Fleet Management Protocols', 'Technical System Architecture Interviews'],
          skillsToAcquire: ['Deployment on Edge Hardware (NVIDIA Jetson, Industrial PCs)', 'Field Troubleshooting & Hardware Commissioning'],
          activities: ['Deploy ROS2 packages on an edge computing platform', 'Complete 10+ code reviews and system integration tests during internship'],
          completionCriteria: 'Received internship certificate or offer letter for Robotics Software / Automation Engineer role.',
          dependencies: 'Complete ROS2 & SLAM project portfolio',
          resources: [
            { name: 'Addverb Technologies Careers', url: 'https://addverb.com/careers/', type: 'Company Portal', isFree: true },
            { name: 'GreyOrange Careers', url: 'https://www.greyorange.com/careers/', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'biomedical-engineer',
    title: 'Biomedical Engineer',
    description: 'Designs, evaluates, calibrates, and maintains medical equipment, diagnostic instruments, surgical robotics, and life-support systems. Bridges engineering principles with human physiology across Indian hospital networks, medical device manufacturers, and diagnostic imaging firms.',
    educationRequirements: 'B.Tech/B.E. in Biomedical Engineering, Medical Electronics, or Electronics & Communication with biomedical specialization. Knowledge of biomedical signal processing, sensors, and CDSCO/ISO 13485 regulations.',
    educationPathways: [
      'B.Tech / B.E. in Biomedical Engineering (4 years via JEE Main or State CETs)',
      'B.Tech in Electronics & Communication / Instrumentation Engineering followed by M.Tech in Biomedical Engineering (2 years via GATE BM/EC)',
      'Diploma in Medical Electronics (3 years) with lateral entry to 2nd year B.Tech'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Mathematics or Biology (PCB/PCM) with minimum 55% aggregate. Qualifying engineering entrance exams.',
    certificationsAndExams: [
      'GATE (Biomedical Engineering - BM)',
      'Certified Clinical Engineer (CCE) / Biomedical Equipment Technician (CBET)',
      'ISO 13485 Medical Devices Quality Management System Lead Auditor'
    ],
    workEnvironment: 'Tertiary hospitals (Apollo, Fortis, Manipal), medical device R&D centers, healthcare testing labs, and diagnostic manufacturing plants in Bengaluru, Chennai, Hyderabad, and Delhi NCR.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Rapidly growing driven by medical device manufacturing promotion under Make in India (Medical Device Parks in AP, Telangana, TN), hospital expansion, and telemedicine diagnostics.',
    salaryRange: { min: 350000, max: 1400000, currency: 'INR', source: 'AmbitionBox Biomedical Engineer Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Biomedical Engineer Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 350000, max: 600000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 600000, max: 1100000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1100000, max: 1800000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'MNC medical tech corporations (GE Healthcare, Siemens Healthineers, Philips Healthcare) offer starting packages of ₹6–10 LPA for R&D and application specialists.'
    },
    careerProgression: [
      'Biomedical Service Engineer / Clinical Trainee',
      'Hospital Biomedical Engineer / Product Specialist',
      'Senior Medical Device R&D Engineer / Regulatory Affairs Specialist',
      'Chief Biomedical Engineer / Clinical Technology Manager',
      'Director of Healthcare Technology / VP Medical Device Engineering'
    ],
    employmentSectors: {
      government: 'AIIMS hospital biomedical divisions, Sree Chitra Tirunal Institute (SCTIMST), National Health Systems Resource Centre (NHSRC)',
      privateSector: 'MNC Healthcare OEMs (GE Healthcare, Siemens Healthineers, Philips Healthcare), Indian MedTech Startups (Agappe, Forus Health, Tricog), Super-specialty Hospital Chains'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Tech Degree) + 2–4 Months hospital clinical internship',
      educationDuration: '4 Years (8 Semesters)',
      prepDuration: '3–6 Months regulatory standards (ISO 13485) and biosignal processing training',
      practicalTrainingDuration: '3–6 Months mandatory hospital biomedical department internship',
      jobSearchDuration: '2–4 Months campus placement or direct hospital application',
      overlapNotes: 'Clinical training is conducted during 7th and 8th semester rotations.',
      confidenceNote: 'Direct hospital engineering roles require hands-on troubleshooting experience with patient monitors, ventilators, and dialysis machines.'
    },
    sources: [
      { title: 'Central Drugs Standard Control Organisation (CDSCO) Medical Devices Division', url: 'https://cdsco.gov.in', sourceAuthority: 'Ministry of Health & Family Welfare', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Biomedical Engineer Salaries in India', url: 'https://www.ambitionbox.com/salaries/biomedical-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Biomedical Engineer Career Roadmap',
      description: 'Structured clinical and technical pathway: human physiology, bio-instrumentation, biosignal processing (ECG/EEG), hospital safety standards, and medical device regulations.',
      totalEstimatedDuration: '4.5 Years',
      durationBreakdown: 'Human Anatomy & Engineering Science: 1 Year | Biomedical Sensors & Electronics: 1 Year | Biosignal Processing & Imaging Systems: 1 Year | Hospital Clinical Rotations & Regulatory Standards: 1 Year',
      overlapNotes: 'Hospital rotations and equipment calibration training occur during summer and winter breaks.',
      steps: [
        {
          stepNumber: 1,
          title: 'Human Anatomy, Physiology & Electrical Circuits',
          stageType: 'education',
          duration: 'Year 1–2',
          description: 'Understand physiological systems (cardiovascular, respiratory, nervous), cellular electrophysiology, circuit analysis, and bio-potential electrodes.',
          topics: ['Human Anatomy & Physiology for Engineers', 'Analog & Digital Electronics', 'Biopotential Electrodes (Ag/AgCl)', 'Operational Amplifiers in Medical Circuits'],
          skillsToAcquire: ['Analog Circuit Design', 'Bioelectric Signal Sensing', 'Laboratory Measurement Techniques'],
          activities: ['Construct a basic instrumentation amplifier circuit for pulse detection', 'Measure electrical safety and leakage currents of test circuits'],
          completionCriteria: 'Clear university coursework in physiology and basic electronic circuits with > 65% aggregate.',
          dependencies: '10+2 with Science (PCM/PCB)',
          resources: [
            { name: 'NPTEL Introduction to Biomedical Engineering (IIT Madras)', url: 'https://nptel.ac.in/courses/127106009', type: 'Course', isFree: true },
            { name: 'Coursera Anatomy for Biomedical Engineers', url: 'https://www.coursera.org', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Diagnostic Instruments & Biosignal Processing',
          stageType: 'skill_acquisition',
          duration: 'Year 3 (Semesters 5–6)',
          description: 'Design and calibrate electrocardiograms (ECG), photoplethysmography (PPG), pulse oximeters, and apply digital filters in MATLAB/Python.',
          topics: ['Biomedical Instrumentation Architecture', 'ECG, EEG, EMG Signal Processing', 'Digital Filters (Butterworth, Notch)', 'Pulse Oximetry & Blood Gas Analyzers'],
          skillsToAcquire: ['MATLAB Biosignal Analysis', 'Hardware PCB Layout for Low-Noise Biosensors', 'Filter Design for Baseline Drift Removal'],
          activities: ['Acquire real-time 3-lead ECG data and implement a QRS detection algorithm in Python', 'Calibrate pressure transducers for arterial blood pressure monitoring'],
          completionCriteria: 'Build an operational biosensor hardware circuit with digital signal display and filtering.',
          dependencies: 'Circuit Design and Physiology Foundations',
          resources: [
            { name: 'NPTEL Biomedical Signal Processing (IIT Kharagpur)', url: 'https://nptel.ac.in/courses/108105101', type: 'Course', isFree: true },
            { name: 'PhysioNet Open Medical Data & Algorithms', url: 'https://physionet.org', type: 'Resource Repository', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Medical Imaging Systems & Healthcare Regulatory Affairs',
          stageType: 'skill_acquisition',
          duration: 'Year 4 (Semester 7)',
          description: 'Master physics and engineering of X-Ray, CT scan, MRI, and Ultrasound imaging, along with CDSCO Medical Device Rules 2017 and ISO 13485 standards.',
          topics: ['Medical Imaging Principles (CT, MRI, Ultrasound)', 'AERB Radiation Safety Norms', 'CDSCO Medical Device Rules 2017', 'ISO 13485 & IEC 60601-1 Electrical Safety'],
          skillsToAcquire: ['DICOM Image Processing', 'Medical Device Risk Management (ISO 14971)', 'Hospital Electrical Safety Verification'],
          activities: ['Perform safety and radiation leak testing under supervision on X-ray apparatus', 'Document an ISO 14971 compliant risk analysis matrix for a diagnostic device'],
          completionCriteria: 'Complete certification or academic module in medical device regulatory frameworks and imaging physics.',
          dependencies: 'Biomedical Instrumentation and Signal Processing',
          resources: [
            { name: 'AERB Radiation Safety Guidelines', url: 'https://www.aerb.gov.in', type: 'Government Portal', isFree: true },
            { name: 'CDSCO Medical Device Regulatory Guidance', url: 'https://cdsco.gov.in', type: 'Government Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Hospital Clinical Internship & Equipment Commissioning',
          stageType: 'practical_experience',
          duration: '4–6 Months',
          description: 'Undertake clinical engineering internship in an accredited hospital (NABH/JCI), conducting preventive maintenance, calibration, and emergency troubleshooting.',
          topics: ['Preventive Maintenance Protocols', 'Ventilators, Defibrillators & Dialysis Maintenance', 'NABH Equipment Management Standards'],
          skillsToAcquire: ['Hands-on Life Support Equipment Calibration', 'Vendor Negotiation & Equipment Procurement', 'Clinical Fault Diagnosis'],
          activities: ['Log 100+ hours maintaining ICU monitors, anesthesia workstations, and infant incubators', 'Complete hospital NABH audit documentation for medical equipment'],
          completionCriteria: 'Obtain clinical internship completion certificate and secure placement in medical device firm or hospital chain.',
          dependencies: 'Degree completion or 8th semester eligibility',
          resources: [
            { name: 'NABH Accreditation Standards for Hospitals', url: 'https://www.nabh.co', type: 'Accreditation Board', isFree: true },
            { name: 'GE Healthcare India Careers', url: 'https://jobs.gecareers.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'renewable-energy-engineer',
    title: 'Renewable Energy Engineer',
    description: 'Plans, models, installs, and optimizes clean energy generation infrastructure including solar photovoltaic (PV) power plants, wind farms, green hydrogen electrolyzers, and battery energy storage systems (BESS). Conducts yield assessments, grid synchronization, and techno-economic feasibility studies.',
    educationRequirements: 'B.Tech/B.E. in Renewable Energy, Electrical, Mechanical, or Civil Engineering. Proficiency in PVsyst, Helioscope, AutoCAD, and Indian Central Electricity Authority (CEA) grid integration standards.',
    educationPathways: [
      'B.Tech / B.E. in Renewable Energy / Energy Engineering (4 years via JEE Main or State CETs)',
      'B.Tech in Electrical / Mechanical Engineering followed by M.Tech in Renewable Energy / Solar Power (2 years via GATE EE/ME)',
      'National Skill Development Corporation (NSDC) Suryamitra Certified Solar PV Engineer'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Mathematics (minimum 50-55% aggregate). Entrance through national or state engineering tests.',
    certificationsAndExams: [
      'PVsyst Solar PV System Design Professional Certification',
      'MNRE Suryamitra / Master Trainer Skill Certification',
      'Bureau of Energy Efficiency (BEE) Certified Energy Manager / Auditor'
    ],
    workEnvironment: 'Utility-scale solar parks (Rajasthan, Gujarat, Andhra Pradesh, Karnataka), wind farms (Tamil Nadu, Maharashtra), EPC engineering offices in Gurugram, Bengaluru, and Pune.',
    marketDemand: 'High',
    jobOutlook: 'Rapid expansion catalyzed by India’s national target of 500 GW non-fossil electricity capacity by 2030, PM Surya Ghar Muft Bijli Yojana, and green hydrogen subsidies.',
    salaryRange: { min: 380000, max: 1500000, currency: 'INR', source: 'AmbitionBox Energy Engineer Salaries 2024, MNRE Industry Reports' },
    salarySource: 'AmbitionBox Energy Engineer Salaries 2024, MNRE Industry Reports',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 650000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 650000, max: 1200000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1200000, max: 2000000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Leading green energy developers (Adani Green, Tata Power Solar, ReNew, Avaada) offer ₹6–11 LPA for design engineers with verified PVsyst yield simulation experience.'
    },
    careerProgression: [
      'Graduate Solar / Wind Design Engineer Trainee',
      'Renewable Energy Project Engineer / PVsyst Modeler',
      'Senior EPC Project Manager / Grid Integration Lead',
      'Head of Renewable Engineering & Asset Management',
      'Chief Technology Officer / VP Clean Energy Development'
    ],
    employmentSectors: {
      government: 'Solar Energy Corporation of India (SECI), NTPC Green Energy, IREDA (Indian Renewable Energy Development Agency), State Nodal Renewable Agencies (MEDA, KREDL)',
      privateSector: 'Renewable Power Producers (Tata Power Solar, Adani Green, ReNew Power, Acme Solar), EPC Contractors (Sterling & Wilson, L&T Solar), Global Consultancies'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Tech) + 3 Months PVsyst & grid-tie project portfolio',
      educationDuration: '4 Years (8 Semesters)',
      prepDuration: '3–6 Months specialized solar/wind simulation software and CEA regulations training',
      practicalTrainingDuration: '2–4 Months on-site installation and commissioning internship',
      jobSearchDuration: '2–4 Months campus placement or EPC developer hiring',
      overlapNotes: 'PVsyst simulations and CAD layouts are completed during 7th and 8th semester electives.',
      confidenceNote: 'Strong proficiency in string sizing, inverter clipping ratio calculations, and shading analysis is essential for private EPC interviews.'
    },
    sources: [
      { title: 'Ministry of New and Renewable Energy (MNRE) Schemes & Reports', url: 'https://mnre.gov.in', sourceAuthority: 'MNRE India', verifiedDate: '2024-10-14' },
      { title: 'Central Electricity Authority (CEA) Grid Standards', url: 'https://cea.nic.in', sourceAuthority: 'CEA India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Renewable Energy Engineer Career Roadmap',
      description: 'Comprehensive pathway: solar radiation physics, photovoltaic array design, inverter sizing, wind aerodynamics, grid synchronization, and energy storage systems.',
      totalEstimatedDuration: '4.5 Years',
      durationBreakdown: 'Core Electrical/Mechanical Engineering: 2 Years | Solar PV & Wind Energy Systems: 1 Year | PVsyst Simulation & BESS Modeling: 1 Year | Site Commissioning & EPC Internship: 6 Months',
      overlapNotes: 'PVsyst modeling projects and industry certifications occur concurrently with academic coursework.',
      steps: [
        {
          stepNumber: 1,
          title: 'Power Systems, Thermodynamics & Solar Radiation Physics',
          stageType: 'education',
          duration: 'Year 1–2',
          description: 'Build foundations in electrical circuits, AC machines, transformers, thermodynamics, solar geometry, and direct/diffuse radiation mechanics.',
          topics: ['AC Power Systems & Power Factor', 'Solar Angles (Zenith, Azimuth, Tilt)', 'Semiconductor Physics of PV Cells', 'Thermodynamic Power Cycles'],
          skillsToAcquire: ['Single-line Diagram Interpretation', 'Solar Resource Assessment', 'Basic Circuit Simulation in MATLAB/Simulink'],
          activities: ['Calculate peak solar hours (PSH) for major Indian cities using NASA SSE / Solargis data', 'Measure I-V characteristics of a crystalline silicon PV cell under varying irradiance'],
          completionCriteria: 'Clear foundational university engineering courses in electrical networks and thermodynamics.',
          dependencies: '10+2 with Physics, Chemistry, and Mathematics',
          resources: [
            { name: 'NPTEL Non-Conventional Energy Resources (IIT Madras)', url: 'https://nptel.ac.in/courses/112106291', type: 'Course', isFree: true },
            { name: 'National Institute of Solar Energy (NISE) Knowledge Portal', url: 'https://nise.res.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Solar PV Array Design & PVsyst Yield Simulation',
          stageType: 'skill_acquisition',
          duration: 'Year 3 (Semesters 5–6)',
          description: 'Design grid-connected and rooftop solar power plants using PVsyst, calculate string configurations, module tilt optimization, and inverter DC/AC loading ratios.',
          topics: ['PV Module Technologies (Mono PERC, TOPCon, HJT)', 'String Inverter vs Central Inverter Sizing', 'PVsyst 3D Shading Scene Construction', 'Balance of System (BOS) Component Sizing'],
          skillsToAcquire: ['PVsyst Yield Simulation', 'AutoCAD Solar Layout Drafting', 'Loss Analysis (Soiling, Temperature, LID, Wiring)'],
          activities: ['Perform a comprehensive 10 MW ground-mount solar PV yield simulation in PVsyst', 'Generate an AutoCAD electrical layout showing string routing and combiner boxes'],
          completionCriteria: 'Produce a complete bankable techno-economic yield report (P50/P90 generation values) for a commercial solar project.',
          dependencies: 'Solar Radiation and Electrical Circuit Foundations',
          resources: [
            { name: 'PVsyst Official Tutorials & Documentation', url: 'https://www.pvsyst.com/help/', type: 'Documentation', isFree: true },
            { name: 'Coursera Renewable Energy Technology (TU Delft)', url: 'https://www.coursera.org', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Wind Energy, Battery Storage (BESS) & CEA Grid Compliance',
          stageType: 'skill_acquisition',
          duration: 'Year 4 (Semester 7)',
          description: 'Understand wind turbine power curves, wake modeling, battery energy storage chemistry (LFP), and Central Electricity Authority (CEA) grid connectivity regulations.',
          topics: ['Wind Turbine Generator Aerodynamics & Betz Limit', 'Battery Energy Storage Systems (BESS) Integration', 'CEA Technical Standards for Grid Connectivity', 'Harmonics, Voltage Ride-Through (LVRT/HVRT)'],
          skillsToAcquire: ['BESS Capacity Dimensioning', 'Grid Synchronization Analysis', 'Power Quality Assessment'],
          activities: ['Model battery charging/discharging cycles for peak shaving with solar generation', 'Study Indian grid code compliance documents for 33kV/132kV solar substations'],
          completionCriteria: 'Pass examination or capstone project on hybrid solar-wind-storage system design.',
          dependencies: 'PVsyst System Design Knowledge',
          resources: [
            { name: 'CEA Technical Standards for Connectivity to the Grid', url: 'https://cea.nic.in', type: 'Government Regulations', isFree: true },
            { name: 'NPTEL Energy Storage Systems (IIT Roorkee)', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'EPC On-Site Commissioning & Career Placement',
          stageType: 'practical_experience',
          duration: '3–6 Months',
          description: 'Undertake on-site engineering internship with a solar EPC contractor or developer, inspecting string installations, transformer testing, and SCADA monitoring.',
          topics: ['Pre-Commissioning Testing (Megger, Open Circuit Voltage, Polarity)', 'Solar SCADA & Weather Monitoring Stations (WMS)', 'Contracts, Bidding & SECI Reverse Auctions'],
          skillsToAcquire: ['On-site Solar Plant Commissioning', 'Thermographic Drone Inspection Analysis', 'Operation & Maintenance (O&M) Protocols'],
          activities: ['Participate in pre-commissioning testing of 100+ strings on an operational solar site', 'Prepare punch list and as-built documentation for grid synchronisation handover'],
          completionCriteria: 'Complete industrial site training and receive job offer as Graduate Renewable Energy Engineer.',
          dependencies: 'B.Tech completion and software project portfolio',
          resources: [
            { name: 'SECI Tenders & Auction Notices', url: 'https://www.seci.co.in', type: 'Government Portal', isFree: true },
            { name: 'Tata Power Solar Careers', url: 'https://www.tatapowersolar.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'vlsi-design-engineer',
    title: 'VLSI Design Engineer',
    description: 'Designs, verifies, synthesizes, and tests microchips, integrated circuits (ICs), and system-on-chip (SoC) architectures for semiconductor processors and telecommunications. Employs hardware description languages (SystemVerilog/VHDL), UVM verification, and EDA tools (Synopsys/Cadence).',
    educationRequirements: 'B.Tech/B.E. in Electronics & Communication (ECE), Electrical Engineering (EE), or Microelectronics. M.Tech in VLSI Design via GATE ECE strongly preferred for frontend architecture and physical design roles.',
    educationPathways: [
      'B.Tech in ECE / Electrical Engineering (4 years via JEE Main or State CETs) + specialized VLSI certified diploma (CDAC / Maven Silicon)',
      'M.Tech in VLSI Design / Microelectronics (2 years via GATE ECE from IITs, IISc, NITs, BITS)',
      'Dual Degree (B.Tech + M.Tech) in VLSI / Microelectronics (5 years via JEE Advanced)'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Mathematics (minimum 60% aggregate). Strong digital electronics aptitude and C/C++ or Verilog proficiency.',
    certificationsAndExams: [
      'GATE ECE (Electronics and Communication Engineering)',
      'CDAC Post Graduate Diploma in VLSI Design (PG-DVLSI)',
      'UVM (Universal Verification Methodology) Practitioner Certification'
    ],
    workEnvironment: 'Semiconductor design centers, EDA software offices, and fabless chip startups in Bengaluru, Hyderabad, Noida, and Pune.',
    marketDemand: 'Very High',
    jobOutlook: 'Surging demand backed by the India Semiconductor Mission ($10B incentive scheme), Tata Electronics fab plants in Dholera/Morigaon, and global chip MNC design expansions.',
    salaryRange: { min: 600000, max: 2800000, currency: 'INR', source: 'AmbitionBox VLSI Design Engineer Salary 2024, India Semiconductor Association (IESA)' },
    salarySource: 'AmbitionBox VLSI Design Engineer Salary 2024, India Semiconductor Association (IESA)',
    salaryByExperience: {
      entryLevel: { min: 600000, max: 1200000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1200000, max: 2200000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 2200000, max: 4000000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Top semiconductor giants (Qualcomm, Intel, NVIDIA, Texas Instruments, AMD, MediaTek) offer ₹14–26 LPA for fresh M.Tech / Tier-1 B.Tech campus recruits.'
    },
    careerProgression: [
      'Associate Hardware / VLSI Verification Engineer',
      'Silicon Design Engineer / Physical Design Engineer',
      'Senior ASIC / SoC Verification Lead',
      'Principal VLSI Architect / Staff Physical Design Engineer',
      'Director of Silicon Engineering / VP Hardware Architecture'
    ],
    employmentSectors: {
      government: 'Semi-Conductor Laboratory (SCL Mohali), DRDO Solid State Physics Laboratory (SSPL), ISRO Semiconductor Fab',
      privateSector: 'Global Chip Design MNCs (Qualcomm, Intel, NVIDIA, AMD, Texas Instruments, MediaTek, Broadcom), EDA Tool Vendors (Synopsys, Cadence, Siemens EDA), ASIC Design Services (Wipro, Tessolve, Mirafra)'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Tech) + 2 Years (M.Tech VLSI via GATE) or 6 Months CDAC PG-DVLSI',
      educationDuration: '4 Years B.Tech + 2 Years M.Tech (recommended for core Tier-1 MNC hiring)',
      prepDuration: '6–12 Months GATE ECE preparation during 3rd/4th year B.Tech',
      practicalTrainingDuration: '6–11 Months mandatory industrial internship during 2nd year M.Tech',
      jobSearchDuration: 'Direct campus recruitment during M.Tech 3rd semester',
      overlapNotes: 'Semiconductor MNCs hire M.Tech interns for 10-month internships that almost always convert to full-time PPOs.',
      confidenceNote: 'Pure B.Tech freshers from non-premier colleges typically enter through 6-month specialized post-grad diplomas (CDAC/Maven Silicon) or design service consultancies.'
    },
    sources: [
      { title: 'India Semiconductor Mission (ISM) Guidelines', url: 'https://ism.gov.in', sourceAuthority: 'Ministry of Electronics and IT (MeitY)', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox VLSI Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/vlsi-design-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'VLSI Design Engineer Career Roadmap',
      description: 'End-to-end silicon design pathway: digital logic design, Verilog/SystemVerilog RTL modeling, UVM verification, static timing analysis (STA), and physical design flow.',
      totalEstimatedDuration: '5–6 Years (including B.Tech + M.Tech/PG-Diploma)',
      durationBreakdown: 'Digital Electronics & Verilog: 2 Years (Undergraduate) | GATE ECE Preparation: 1 Year | M.Tech VLSI / SystemVerilog & UVM: 1 Year | Semiconductor MNC Internship: 1 Year',
      overlapNotes: 'GATE preparation runs parallel to 6th and 7th semester B.Tech courses.',
      steps: [
        {
          stepNumber: 1,
          title: 'Digital Electronics, CMOS Fundamentals & Verilog HDL',
          stageType: 'education',
          duration: 'Undergraduate Years 2–3',
          description: 'Master Boolean algebra, combinational and sequential circuit design, finite state machines (FSM), CMOS logic inverter characteristics, and Verilog RTL.',
          topics: ['Combinational & Sequential Circuits', 'CMOS Inverter VTC & Propagation Delay', 'Verilog HDL (Behavioral, Dataflow, Structural)', 'Testbench Writing in Verilog'],
          skillsToAcquire: ['RTL Coding in Verilog', 'ModelSim / Vivado Functional Simulation', 'FSM Optimization'],
          activities: ['Code and simulate a parameterized FIFO buffer and dual-port RAM in Verilog', 'Implement a traffic light controller FSM and verify on Xilinx FPGA board'],
          completionCriteria: 'Zero simulation timing violations; successful FPGA bitstream synthesis and functional hardware test.',
          dependencies: 'Basic Circuit Theory and Digital Logic',
          resources: [
            { name: 'NPTEL Digital Electronic Circuits (IIT Kharagpur)', url: 'https://nptel.ac.in/courses/108105132', type: 'Course', isFree: true },
            { name: 'HDLBits Interactive Verilog Practice', url: 'https://hdlbits.01xz.net', type: 'Practice Platform', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Computer Architecture, SystemVerilog & OOP Verification',
          stageType: 'skill_acquisition',
          duration: '6–9 Months (Final Year B.Tech / M.Tech Year 1)',
          description: 'Study pipelined RISC processor architectures, instruction set architectures (RISC-V), and advanced SystemVerilog object-oriented constructs.',
          topics: ['Pipelined CPU Architecture & Hazards', 'RISC-V Instruction Set Architecture', 'SystemVerilog OOP (Classes, Polymorphism)', 'Constrained Random Verification & Functional Coverage'],
          skillsToAcquire: ['SystemVerilog Testbench Architecture', 'Assertion-Based Verification (SVA)', 'Coverage-Driven Verification Planning'],
          activities: ['Design a single-cycle or 5-stage pipelined RISC-V processor in Verilog/SystemVerilog', 'Build a layered SystemVerilog testbench with constrained random stimulus generators'],
          completionCriteria: 'Achieve 100% functional and code coverage on the RISC-V core testbench.',
          dependencies: 'Verilog HDL and Digital Design Foundations',
          resources: [
            { name: 'NPTEL Computer Architecture (IIT Delhi)', url: 'https://nptel.ac.in/courses/106102062', type: 'Course', isFree: true },
            { name: 'Verification Academy (Siemens EDA)', url: 'https://verificationacademy.com', type: 'Learning Platform', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Universal Verification Methodology (UVM) & Static Timing Analysis',
          stageType: 'skill_acquisition',
          duration: '6 Months (M.Tech / Specialized Diploma)',
          description: 'Master industrial UVM hierarchy (uvm_driver, uvm_monitor, uvm_scoreboard, uvm_agent, uvm_env), along with static timing analysis (STA) setup/hold time concepts.',
          topics: ['UVM Phases, Factory, TLM Ports', 'Virtual Sequences & Register Abstraction Layer (RAL)', 'Static Timing Analysis (Setup, Hold, Clock Skew, Jitter)', 'Synthesis & Gate-Level Simulation'],
          skillsToAcquire: ['UVM Environment Development from Scratch', 'STA Constraint Writing (SDC files)', 'Timing Violation Debugging'],
          activities: ['Build an end-to-end UVM verification environment for an AXI/APB bus protocol interface', 'Run Synopsys Design Compiler or OpenLane synthesis flow and analyze timing reports'],
          completionCriteria: 'Successful execution of UVM test suites without memory leaks; clean timing closure report.',
          dependencies: 'SystemVerilog OOP and Computer Architecture',
          resources: [
            { name: 'UVM 1.2 User Guide (Accellera Systems Initiative)', url: 'https://www.accellera.org', type: 'Official Standard', isFree: true },
            { name: 'VLSI System Design (VSD) Physical Design & OpenLane Tutorials', url: 'https://www.vlsisystemdesign.com', type: 'Platform', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Semiconductor MNC Internship & Physical Design Tapeout',
          stageType: 'practical_experience',
          duration: '10–12 Months',
          description: 'Complete year-long silicon verification or physical design (floorplanning, placement, routing, DRC/LVS) internship at a semiconductor MNC leading to a full-time offer.',
          topics: ['Floorplanning, Clock Tree Synthesis (CTS), Routing', 'Design Rule Check (DRC) & Layout Versus Schematic (LVS)', 'Tapeout Signoff Protocols'],
          skillsToAcquire: ['Industrial EDA Toolchains (Synopsys Verdi/VCS, Cadence Innovus)', 'Cross-functional Silicon Bring-Up'],
          activities: ['Contribute to block-level physical design or verification in active commercial chip tapeout project', 'Defend internship project during company engineering review'],
          completionCriteria: 'Successful conversion of M.Tech internship to full-time Silicon Design Engineer offer.',
          dependencies: 'UVM & Static Timing Analysis Proficiency',
          resources: [
            { name: 'Qualcomm India Careers', url: 'https://www.qualcomm.com/company/careers', type: 'Company Portal', isFree: true },
            { name: 'Texas Instruments India Careers', url: 'https://careers.ti.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  }
];

module.exports = engineeringPart2;
