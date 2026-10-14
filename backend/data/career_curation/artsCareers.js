// Arts, Design, Media & Architecture Careers (11 Careers)
// All roadmaps contain practical job preparation, 1-6 months per step, months only, zero degree milestones

module.exports = [
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Design, Computer Applications, Engineering, Fine Arts, Psychology, or any discipline with design aptitude',
      preferredDegree: 'B.Des / M.Des (Interaction Design, Industrial Design) from NID, IIT IDC, or recognized design schools',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; portfolio of real-world design case studies is the primary qualification evaluated by industry',
      mandatoryRequirements: [
        'Recognized undergraduate degree or certified professional design diploma',
        'Proven digital design portfolio demonstrating user research, wireframing, interactive prototyping, and design systems'
      ],
      preferredQualifications: [
        'Google UX Design Professional Certificate or Nielsen Norman Group (NN/g) certification',
        'Proficiency in Figma, FigJam, and design system tokens'
      ],
      eligibilityCriteria: [
        'Strong visual design sense, empathetic user research skills, and information architecture knowledge'
      ],
      regulatoryNotes: 'UI/UX designers work in software product companies, digital agencies, and startups. Employment decisions are primarily portfolio-driven.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Design Thinking, User Research & Information Architecture',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Learn the 5-stage design thinking framework, user interviews, persona creation, empathy mapping, and card sorting.',
          tasks: [
            'Conduct 5 user discovery interviews for a specific digital product problem',
            'Synthesize research into user personas, journey maps, and problem statements',
            'Develop site maps, user task flows, and low-fidelity paper wireframes'
          ],
          milestone: 'Complete a documented user research synthesis and information architecture report',
          prerequisites: ['Basic computer literacy and visual curiosity'],
          resources: [
            { title: 'Nielsen Norman Group (NN/g) Articles & Videos', url: 'https://www.nngroup.com/articles/', type: 'learning', isFree: true },
            { title: 'Interaction Design Foundation Open Literature', url: 'https://www.interaction-design.org/literature', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Figma Mastery, UI Typography, Color & Design Systems',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master industry-standard Figma: auto-layout, interactive components, responsive constraints, and atomic design systems.',
          tasks: [
            'Master Figma auto-layout, component variants, interactive states, and variables',
            'Apply typography scales, WCAG 2.1 color contrast standards, and spacing grids',
            'Build a modular UI design system with buttons, input fields, navigation bars, and modals'
          ],
          milestone: 'Design a high-fidelity interactive prototype of a 10-screen mobile and web application',
          prerequisites: ['User research and wireframing fundamentals'],
          resources: [
            { title: 'Figma Community & Official Tutorials', url: 'https://help.figma.com/hc/en-us', type: 'official', isFree: true },
            { title: 'Google Material Design 3 Guidelines', url: 'https://m3.material.io/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Usability Testing, Portfolio Case Studies & Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'portfolio',
          description: 'Conduct usability tests, document 2 in-depth case studies on Behance/personal website, and prepare for design whiteboarding interviews.',
          tasks: [
            'Run moderated usability tests with 5 users and document design iterations based on insights',
            'Publish 2 polished case studies highlighting the problem, research, wireframes, iterations, and final UI',
            'Practice app critique and whiteboard design challenges commonly asked by product companies'
          ],
          milestone: 'Publish live portfolio with 2 end-to-end case studies and clear mock design interview',
          prerequisites: ['Figma prototyping and design systems'],
          resources: [
            { title: 'UX Coffee Hours Mentorship Guides', url: 'https://www.uxcoffeehours.com/', type: 'learning', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'digital-marketer',
    title: 'Digital Marketing Executive',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Marketing, Mass Communication, Business, Commerce, or any discipline',
      preferredDegree: 'BBA / MBA in Marketing, or Post Graduate Diploma in Digital Marketing',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; industry certifications from Google, Meta, and HubSpot serve as primary validation',
      mandatoryRequirements: [
        'Recognized undergraduate degree',
        'Hands-on familiarity with search engine optimization, paid advertising platforms, content strategy, and analytics tools'
      ],
      preferredQualifications: [
        'Google Ads Search & Measurement Certifications',
        'Meta Certified Digital Marketing Associate',
        'HubSpot Inbound Marketing & Content Marketing Certifications'
      ],
      eligibilityCriteria: [
        'Analytical capability to interpret campaign data and creative communication skills'
      ],
      regulatoryNotes: 'Digital marketers must comply with ASCI (Advertising Standards Council of India) advertising codes and Digital Personal Data Protection (DPDP) Act rules regarding tracking and consent.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'SEO Fundamentals, Keyword Research & Content Planning',
          durationMonths: 1,
          durationText: '1 month',
          category: 'fundamentals',
          description: 'Master on-page SEO, technical SEO audits, keyword research, and high-ranking content strategy.',
          tasks: [
            'Conduct keyword research and intent mapping using Google Keyword Planner and free SEO tools',
            'Optimize meta titles, descriptions, headers, URL structures, and internal linking for a website',
            'Run technical site audits identifying broken links, slow page speed, and schema markup needs'
          ],
          milestone: 'Complete an end-to-end SEO audit and content calendar for a live website or e-commerce store',
          prerequisites: ['Basic internet and web navigation literacy'],
          resources: [
            { title: 'Google Search Central Documentation & SEO Starter Guide', url: 'https://developers.google.com/search/docs', type: 'official', isFree: true },
            { title: 'Ahrefs Free SEO Training Course', url: 'https://ahrefs.com/academy/seo-training-course', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Paid Advertising (Google Ads & Meta Ads) & Campaign Setup',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Plan, set up, and optimize search, display, and social ad campaigns with budget allocation and conversion tracking.',
          tasks: [
            'Set up Google Search and Performance Max campaigns with ad copy, negative keywords, and bidding strategies',
            'Configure Meta Business Suite, Facebook Pixel, custom audiences, and lookalike targeting',
            'Conduct A/B testing of creatives, headlines, and call-to-actions to lower Cost Per Acquisition (CPA)'
          ],
          milestone: 'Earn Google Ads and Meta certifications and launch a simulated multi-channel ad campaign',
          prerequisites: ['SEO and digital audience fundamentals'],
          resources: [
            { title: 'Google Skillshop - Google Ads Certifications', url: 'https://skillshop.withgoogle.com/', type: 'official', isFree: true },
            { title: 'Meta Blueprint Training Courses', url: 'https://www.facebook.com/business/learn', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Web Analytics (GA4), Social Media Strategy & Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Track campaign performance in Google Analytics 4 (GA4), automate reporting, and prepare for marketing interviews.',
          tasks: [
            'Configure GA4 custom events, conversions, UTM parameter tracking, and Looker Studio dashboards',
            'Develop organic social media growth strategies for Instagram, LinkedIn, and YouTube',
            'Build a digital marketing project portfolio showcasing campaign ROAS, organic traffic gains, and live samples'
          ],
          milestone: 'Build an automated GA4 client performance dashboard and prepare interview case responses',
          prerequisites: ['Paid ads and SEO campaign knowledge'],
          resources: [
            { title: 'Google Analytics Academy / Skillshop GA4 Certification', url: 'https://skillshop.exceedlms.com/student/path/65611-google-analytics-certification', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'graphic-designer',
    title: 'Graphic Designer',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) or Bachelor degree in Fine Arts, Applied Arts, Visual Communication, or any discipline',
      preferredDegree: 'BFA / B.Des in Graphic Design, Applied Arts, or Visual Communication',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; hiring is almost exclusively based on creative portfolio quality and tool mastery',
      mandatoryRequirements: [
        'Recognized degree or diploma in visual arts/design or equivalent verified portfolio',
        'Demonstrated expertise in Adobe Photoshop, Adobe Illustrator, layout composition, and typography'
      ],
      preferredQualifications: [
        'Adobe Certified Professional in Visual Design',
        'Familiarity with motion design basics (After Effects) or 3D illustration (Blender)'
      ],
      eligibilityCriteria: [
        'Creative visual thinking, color theory understanding, and attention to detail'
      ],
      regulatoryNotes: 'Graphic designers work across advertising agencies, publishing houses, design studios, e-commerce brands, and freelance platforms.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Design Fundamentals, Typography & Vector Art (Illustrator)',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master design hierarchy, color harmony, font pairing, grid systems, and vector artwork in Adobe Illustrator.',
          tasks: [
            'Study typography rules: kerning, leading, hierarchy, and font classifications (serif, sans, display)',
            'Master pen tool, vector shapes, pathfinders, gradient meshes, and pattern design in Adobe Illustrator',
            'Design 5 original brand logos following standard identity guidelines'
          ],
          milestone: 'Create a complete corporate Brand Identity Guide (logo, color palette, typography, brand assets)',
          prerequisites: ['Basic computer skills and artistic interest'],
          resources: [
            { title: 'Adobe Illustrator User Guide & Tutorials', url: 'https://helpx.adobe.com/illustrator/user-guide.html', type: 'official', isFree: true },
            { title: 'Butterick’s Practical Typography Online', url: 'https://practicaltypography.com/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Photo Manipulation, Layout & Digital Assets (Photoshop & InDesign)',
          durationMonths: 1,
          durationText: '1 month',
          category: 'skills',
          description: 'Master photo retouching, compositing, masking, digital social banners, and multi-page print layout.',
          tasks: [
            'Master layer masking, frequency separation retouching, and realistic photo manipulation in Photoshop',
            'Design high-converting social media marketing carousels and YouTube thumbnails',
            'Create print-ready brochures, packaging mockups, and flyers with bleed, trim, and CMYK profiles'
          ],
          milestone: 'Complete 10 professional digital advertising banners and 2 print-ready packaging designs',
          prerequisites: ['Design fundamentals and Illustrator basics'],
          resources: [
            { title: 'Adobe Photoshop User Guide', url: 'https://helpx.adobe.com/photoshop/user-guide.html', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Portfolio Building on Behance & Agency Interview Preparation',
          durationMonths: 1,
          durationText: '1 month',
          category: 'portfolio',
          description: 'Package creative work into professional Behance/Dribbble case studies and prepare for design tests.',
          tasks: [
            'Assemble 4 comprehensive project presentations on Behance displaying creative brief, sketches, and 3D mockups',
            'Complete timed design briefs simulating agency hiring assessments (e.g. 4-hour rebrand challenge)',
            'Apply for Junior Graphic Designer and Visual Designer roles across agencies and corporate marketing teams'
          ],
          milestone: 'Publish a Behance portfolio with 4 in-depth visual design projects and complete mock design test',
          prerequisites: ['Photoshop and Illustrator asset creation'],
          resources: [
            { title: 'Behance Creative Portfolio Platform', url: 'https://www.behance.net/', type: 'learning', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'animator',
    title: 'Animator & 3D Artist',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) or Bachelor degree in Animation, Multimedia, Fine Arts, or Computer Graphics',
      preferredDegree: 'B.Sc / B.Des / BFA in 3D Animation, VFX, or Digital Arts',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; industry demo reel demonstrating animation principles and character motion is essential',
      mandatoryRequirements: [
        'Recognized degree or professional diploma in animation or equivalent self-taught demo reel',
        'Solid foundation in the 12 principles of animation, character rigging, and keyframing'
      ],
      preferredQualifications: [
        'Autodesk Certified Professional (Maya or 3ds Max) or Blender Foundation recognized coursework',
        'Familiarity with Unreal Engine, Unity, or real-time animation pipelines'
      ],
      eligibilityCriteria: [
        'Strong spatial awareness, artistic timing, and understanding of biomechanics and weight'
      ],
      regulatoryNotes: 'Animators work in gaming studios, VFX production houses, animation film studios, and advertising agencies.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: '12 Principles of Animation & 3D Software Foundations (Blender / Maya)',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master squash and stretch, anticipation, staging, timing, and 3D viewport navigation in Blender or Maya.',
          tasks: [
            'Animate the classic bouncing ball with different materials (rubber, bowling ball, ping pong)',
            'Animate pendulum swing, obstacle course ball, and flour sack character expressions',
            'Master graph editor, dope sheet, tangent handles, and keyframing curves'
          ],
          milestone: 'Deliver a 30-second mechanics reel demonstrating weight, momentum, and elasticity',
          prerequisites: ['Basic computer graphics familiarity'],
          resources: [
            { title: 'Blender Studio Training & Documentation', url: 'https://www.blender.org/support/', type: 'official', isFree: true },
            { title: 'The 12 Principles of Animation (Alan Becker Video Guide)', url: 'https://www.youtube.com/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Biped Character Rigging, Walk Cycles & Body Mechanics',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Animate standard humanoid character walk cycles, runs, jumps, weight shifts, and physical combat actions.',
          tasks: [
            'Animate seamless personality walk cycles (happy, sad, stealthy, exhausted)',
            'Animate complex athletic movements: parkour jump, lifting a heavy box, and throwing an object',
            'Understand IK/FK switching, pole vectors, and constraint systems on 3D rigs'
          ],
          milestone: 'Complete 3 polished character body mechanics shots with clean arcs and believable weight',
          prerequisites: ['Animation principles and viewport navigation'],
          resources: [
            { title: 'Autodesk Maya Free Educational Resources', url: 'https://www.autodesk.com/education', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Facial Acting, Demo Reel Assembly & Studio Applications',
          durationMonths: 2,
          durationText: '2 months',
          category: 'portfolio',
          description: 'Add lip-sync dialogue acting, assemble a tight 60-second animation demo reel, and apply to gaming and VFX studios.',
          tasks: [
            'Animate a 10-second dialogue scene using audio clips focusing on eye darts, brow movement, and phonemes',
            'Edit and render a 60-second high-impact showreel with breakdown clips',
            'Apply for Junior 3D Animator positions at Indian gaming studios (Lakshya, Ubisoft Pune, Technicolor, MPC)'
          ],
          milestone: 'Publish a finished 60-second professional animation demo reel on Vimeo/YouTube',
          prerequisites: ['Body mechanics and character animation'],
          resources: [
            { title: '11 Second Club Monthly Animation Competition', url: 'https://www.11secondclub.com/', type: 'learning', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'video-editor',
    title: 'Video Editor',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) or Bachelor degree in Film Making, Mass Media, Journalism, or any discipline',
      preferredDegree: 'Bachelor in Media Studies, Film & TV Production, or Visual Communication',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; high-quality editing showreel demonstrating storytelling and pacing is mandatory',
      mandatoryRequirements: [
        'Recognized degree or diploma or equivalent creative video editing showreel',
        'Proficiency in non-linear editing software (Adobe Premiere Pro, DaVinci Resolve, or Final Cut Pro)'
      ],
      preferredQualifications: [
        'DaVinci Resolve Certified End User / Colorist',
        'Motion graphics competence in Adobe After Effects'
      ],
      eligibilityCriteria: [
        'Sense of rhythm, narrative pacing, audio mixing, and visual continuity'
      ],
      regulatoryNotes: 'Video editors work in YouTube creator studios, digital marketing agencies, OTT production teams, television broadcasters, and freelance networks.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'NLE Editing Workflow & Narrative Storytelling (Premiere Pro)',
          durationMonths: 1,
          durationText: '1 month',
          category: 'fundamentals',
          description: 'Master project organization, J/L cuts, match cuts, three-point editing, and narrative pacing in Adobe Premiere Pro.',
          tasks: [
            'Organize media with bin structures, metadata tagging, and proxy workflows for 4K footage',
            'Edit a 2-minute dialogue scene maintaining the 180-degree rule and eyeline continuity',
            'Master keyboard shortcuts, ripple/roll edits, slip/slide tools, and multi-cam editing'
          ],
          milestone: 'Complete rough and fine cuts for a short documentary or scripted dialogue scene',
          prerequisites: ['Basic computer literacy and file management'],
          resources: [
            { title: 'Adobe Premiere Pro Official User Guide', url: 'https://helpx.adobe.com/premiere-pro/user-guide.html', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Color Grading (DaVinci Resolve) & Sound Design',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Learn color correction, primary/secondary grading, LUT application, audio noise cleanup, and sound mixing.',
          tasks: [
            'Master node-based grading in DaVinci Resolve: primaries, curves, qualifiers, and power windows',
            'Match skin tones across cameras and transform Log/RAW footage into cinematic rec.709 color profiles',
            'Clean audio with EQ, compression, de-reverb, and balance dialogue, Foley, sound effects, and background music'
          ],
          milestone: 'Deliver a fully color-graded and sound-mixed 3-minute commercial video project',
          prerequisites: ['NLE editing workflows'],
          resources: [
            { title: 'Blackmagic Design DaVinci Resolve Official Training Videos & Books', url: 'https://www.blackmagicdesign.com/products/davinciresolve/training', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Short-Form Content, Motion Graphics & Showreel Assembly',
          durationMonths: 1,
          durationText: '1 month',
          category: 'portfolio',
          description: 'Master high-retention short-form video (Reels/Shorts/TikTok), kinetic typography in After Effects, and cut a 60-second showreel.',
          tasks: [
            'Create 5 fast-paced Instagram Reels / YouTube Shorts with animated subtitles, zoom cuts, and sound design',
            'Design basic motion titles, lower thirds, and callout graphics in Adobe After Effects',
            'Assemble a dynamic 60-second editing showreel and apply to agencies, studios, and creator teams'
          ],
          milestone: 'Publish a 60-second showreel and secure 2 freelance or agency editing test assignments',
          prerequisites: ['Color grading, sound design, and Premiere Pro mastery'],
          resources: [
            { title: 'Motion Array Creative Community Guides', url: 'https://motionarray.com/learn/', type: 'learning', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'photographer',
    title: 'Professional Photographer',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) or Bachelor degree in Photography, Fine Arts, Visual Communication, or any discipline',
      preferredDegree: 'Diploma / Degree in Commercial Photography or Photojournalism',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; technical camera mastery, lighting skills, and specialized portfolio drive client commissions',
      mandatoryRequirements: [
        'Formal or self-taught mastery of exposure triangle, manual camera operations, and studio lighting',
        'Specialized portfolio in a niche (e.g. fashion, weddings, e-commerce products, architectural, or wildlife)'
      ],
      preferredQualifications: [
        'Adobe Certified Professional in Adobe Lightroom and Photoshop',
        'Drone Pilot License (DGCA certified) for aerial photography in India'
      ],
      eligibilityCriteria: [
        'Visual composition, client coordination, and post-processing capabilities'
      ],
      regulatoryNotes: 'Commercial photographers operate as independent studio owners or agency freelancers compliant with GST and contract laws.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Manual Exposure, Composition & Natural Light Mastery',
          durationMonths: 1,
          durationText: '1 month',
          category: 'fundamentals',
          description: 'Master shutter speed, aperture, ISO, depth of field, metering modes, focal lengths, and framing composition.',
          tasks: [
            'Shoot in full manual mode across varied lighting conditions (harsh sun, golden hour, blue hour)',
            'Apply composition rules: rule of thirds, leading lines, framing, negative space, and symmetry',
            'Understand lens selections (prime vs zoom, 35mm, 50mm, 85mm, wide angle) for various genres'
          ],
          milestone: 'Complete a photo series of 30 technically well-exposed images with diverse composition techniques',
          prerequisites: ['DSLR or Mirrorless camera operations'],
          resources: [
            { title: 'Cambridge in Colour - Photography Tutorials', url: 'https://www.cambridgeincolour.com/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Studio Lighting, Off-Camera Flash & Commercial Shoot Staging',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master studio strobes, speedlights, softboxes, reflectors, key/fill/rim lighting setups for portraits and products.',
          tasks: [
            'Set up 1-light, 2-light, and 3-light portrait studio setups (Rembrandt, butterfly, split, loop lighting)',
            'Photograph reflective e-commerce products (glass, jewelry, apparel) on white cyclorama backgrounds',
            'Coordinate live model directing, styling mood boards, and location scouting'
          ],
          milestone: 'Produce a 10-look fashion/portrait studio series and an e-commerce product catalog shoot',
          prerequisites: ['Manual exposure and composition'],
          resources: [
            { title: 'Strobist Lighting 101 Guide', url: 'https://strobist.blogspot.com/2006/03/lighting-101.html', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Lightroom / Photoshop Retouching, Portfolio & Business Setup',
          durationMonths: 1,
          durationText: '1 month',
          category: 'portfolio',
          description: 'Color grade RAW files in Lightroom, perform skin cleanup in Photoshop, launch a website, and pitch clients.',
          tasks: [
            'Batch edit and color grade RAW photos in Adobe Lightroom Classic using custom presets and curves',
            'Perform frequency separation skin retouching and background object cleanup in Adobe Photoshop',
            'Build a photography portfolio website, create pricing packages, and initiate outreach to brands/couples'
          ],
          milestone: 'Launch a professional photography portfolio website with 3 curated niche galleries',
          prerequisites: ['Studio lighting and shoot staging'],
          resources: [
            { title: 'Adobe Lightroom User Guide', url: 'https://helpx.adobe.com/lightroom-classic/user-guide.html', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'fashion-designer',
    title: 'Fashion Designer',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) or Bachelor degree in Fashion Design, Apparel Production, or Textile Technology',
      preferredDegree: 'B.Des / M.Des in Fashion Design from NIFT (National Institute of Fashion Technology) or recognized institutes',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; collection lookbook, garment construction skills, and design portfolio are primary',
      mandatoryRequirements: [
        'Undergraduate degree or diploma in fashion/textile design',
        'Competence in fashion illustration, garment draping, pattern making, and fabric selection'
      ],
      preferredQualifications: [
        'Proficiency in CLO 3D or Browzwear digital fashion software',
        'Industry internship with recognized export houses, designer labels, or retail brands'
      ],
      eligibilityCriteria: [
        'Creative silhouette visualization, trend forecasting awareness, and textile construction understanding'
      ],
      regulatoryNotes: 'Fashion designers work in retail fashion houses (e.g. Aditya Birla Fashion, Reliance Retail), designer pret/couture labels, export apparel houses, and direct-to-consumer (D2C) brands.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Fashion Illustration, Textile Knowledge & Trend Forecasting',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Learn croquis sketching, fabric weaves, surface ornamentation, color theory, and WGSN trend research.',
          tasks: [
            'Master 9-head fashion figure croquis sketching and technical flat drawings',
            'Study Indian and global textiles: natural fibers, synthetics, weaves, and GSM weights',
            'Develop a mood board, color palette, and trend forecast for an upcoming seasonal collection'
          ],
          milestone: 'Produce a 20-sketch themed collection concept board with fabric swatch pairings',
          prerequisites: ['Basic freehand drawing and design appreciation'],
          resources: [
            { title: 'NIFT Official Research & Academic Portal', url: 'https://www.nift.ac.in/', type: 'official', isFree: true },
            { title: 'Textile Exchange Resource Center', url: 'https://textileexchange.org/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Pattern Making, Draping & Tech Pack Creation',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Draft flat patterns, drape muslin on dress forms, and create production-ready tech packs for manufacturing.',
          tasks: [
            'Draft basic bodice, skirt, trouser, and sleeve slopers with grading rules',
            'Drape asymmetrical silhouettes and cowl necklines on a mannequin using muslin cloth',
            'Create detailed technical specifications (tech packs) with measurement charts, bill of materials, and stitching callouts'
          ],
          milestone: 'Construct 2 finished garment prototypes and deliver comprehensive factory tech packs',
          prerequisites: ['Fashion illustration and textile knowledge'],
          resources: [
            { title: 'The Cutting Class - Pattern Cutting Insights', url: 'https://www.thecuttingclass.com/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Digital 3D Fashion (CLO 3D), Lookbook & Brand Applications',
          durationMonths: 1,
          durationText: '1 month',
          category: 'portfolio',
          description: 'Simulate garments in CLO 3D, photograph physical collection lookbook, and prepare for retail brand/studio interviews.',
          tasks: [
            'Build 3D digital apparel garments and render runway simulations in CLO 3D',
            'Shoot and curate a professional fashion lookbook showcasing 5 finished garments',
            'Assemble physical and digital portfolio for assistant designer interviews at retail brands or export houses'
          ],
          milestone: 'Publish a 12-page fashion design collection lookbook with both physical and 3D renders',
          prerequisites: ['Pattern making and garment construction'],
          resources: [
            { title: 'CLO 3D Official Tutorials & Community', url: 'https://www.clo3d.com/', type: 'official', isFree: false }
          ]
        }
      ]
    }
  },
  {
    slug: 'interior-designer',
    title: 'Interior Designer',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) or Bachelor degree / Diploma in Interior Design, Architecture, or Civil Technology',
      preferredDegree: 'B.Des / B.Sc in Interior Design from a recognized university or CEPT',
      requiredProfessionalDegreeOrLicense: 'No statutory license required for non-structural interior design in India; professional association membership (IIID - Institute of Indian Interior Designers) is valued',
      mandatoryRequirements: [
        'Recognized degree or diploma in interior design or comprehensive architectural drafting portfolio',
        'Expertise in AutoCAD for 2D drafting, 3ds Max / SketchUp for 3D visualization, and knowledge of building materials'
      ],
      preferredQualifications: [
        'Institute of Indian Interior Designers (IIID) Associate Membership',
        'Knowledge of sustainable green interior certifications (IGBC / GRIHA)'
      ],
      eligibilityCriteria: [
        'Spatial planning, material estimation, lighting design, and contractor management skills'
      ],
      regulatoryNotes: 'Interior designers coordinate interior fit-outs, residential revamps, and corporate offices while adhering to local municipal bylaws and National Building Code (NBC).'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Spatial Planning & 2D Drafting (AutoCAD)',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master interior zoning, ergonomics, furniture layouts, electrical/plumbing drawings, and drafting in AutoCAD.',
          tasks: [
            'Draw measured floor plans, furniture layouts, and internal wall elevations in AutoCAD',
            'Create reflected ceiling plans (RCP), lighting fixtures, and electrical switchboard layouts',
            'Design plumbing and sanitary layouts for modern bathrooms and modular kitchens'
          ],
          milestone: 'Produce a complete set of municipal and contractor-ready 2D working drawings for a 3BHK residence',
          prerequisites: ['Basic geometry and spatial visualization'],
          resources: [
            { title: 'Autodesk AutoCAD Learning Guides', url: 'https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/AutoCAD-Tutorials.html', type: 'official', isFree: true },
            { title: 'Institute of Indian Interior Designers (IIID)', url: 'https://www.iiid.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: '3D Modeling, Photorealistic Rendering & Material Estimation (SketchUp + V-Ray)',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Model interiors in SketchUp, apply realistic materials (wood, marble, fabrics), illuminate with V-Ray/Lumion, and calculate BOQ.',
          tasks: [
            'Build detailed 3D interior models of living rooms, bedrooms, and modular kitchens in SketchUp',
            'Configure realistic materials, IES lighting, daylight parameters, and render in V-Ray / Enscape',
            'Prepare a detailed Bill of Quantities (BOQ) with material rates, carpentry labor, and vendor quotes'
          ],
          milestone: 'Render 6 photorealistic interior views and compile an accurate BOQ costing sheet',
          prerequisites: ['2D AutoCAD drafting'],
          resources: [
            { title: 'SketchUp Campus Official Video Courses', url: 'https://learn.sketchup.com/', type: 'official', isFree: true },
            { title: 'Chaos V-Ray Official Documentation', url: 'https://www.chaos.com/vray', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Site Execution, Vendor Management & Design Portfolio',
          durationMonths: 1,
          durationText: '1 month',
          category: 'portfolio',
          description: 'Learn site supervision protocols, carpentry finishes (plywood, laminate, veneer, acrylic), and assemble job portfolio.',
          tasks: [
            'Study site supervision checklists: false ceiling leveling, tile laying, and modular cabinetry assembly',
            'Understand material selection: BWR/BWP plywood, laminates, quartz, and hardware fittings (Blum, Hettich)',
            'Assemble a 15-page interior design portfolio and prepare for design firm interviews'
          ],
          milestone: 'Finalize client presentation deck with mood boards, 3D renders, working drawings, and BOQ',
          prerequisites: ['3D rendering and BOQ calculation'],
          resources: [
            { title: 'National Building Code of India (NBC) Summary', url: 'https://www.bis.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'architect',
    title: 'Architect',
    educationQualification: {
      minimumQualification: 'Bachelor of Architecture (B.Arch - 5-year degree) from an institution recognized by the Council of Architecture (COA)',
      preferredDegree: 'B.Arch / M.Arch (Urban Design, Sustainable Architecture, Landscape Architecture)',
      requiredProfessionalDegreeOrLicense: 'Mandatory Registration Certificate and CA number issued by the Council of Architecture (COA) under the Architects Act, 1972',
      mandatoryRequirements: [
        'Completion of 5-year recognized B.Arch degree program approved by COA',
        'Valid COA Registration Certificate (holding CA/XXXXX registration number) required to use the title "Architect" or practice architecture in India',
        'Passing NATA (National Aptitude Test in Architecture) or JEE Main (Paper 2) for admission to COA-recognized B.Arch degree'
      ],
      preferredQualifications: [
        'IGBC AP (Indian Green Building Council Accredited Professional) or GRIHA Certified Professional',
        'Advanced BIM (Building Information Modeling) Revit Architecture certification'
      ],
      eligibilityCriteria: [
        'Registration with Council of Architecture is a legal statutory requirement in India under the Architects Act, 1972'
      ],
      regulatoryNotes: 'The title "Architect" is statutorily protected in India. Multi-year B.Arch degree completion is a mandatory prerequisite that cannot be substituted by short-term software training.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Building Information Modeling (BIM) with Autodesk Revit',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master parametric architectural modeling, families, BIM coordination, and automated drafting schedules.',
          tasks: [
            'Model multi-story residential and commercial building envelopes in Autodesk Revit',
            'Create custom parametric Revit families for doors, windows, curtain walls, and shading louvers',
            'Generate automated material takeoffs, door-window schedules, and wall area quantities'
          ],
          milestone: 'Build a coordinated multi-story BIM model with integrated architectural schedules',
          prerequisites: ['Architectural fundamentals and spatial design'],
          resources: [
            { title: 'Council of Architecture (COA) Official Portal', url: 'https://www.coa.gov.in/', type: 'official', isFree: true },
            { title: 'Autodesk Revit Official Architectural Tutorials', url: 'https://help.autodesk.com/view/RVT/2024/ENU/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Working Drawings, Municipal Bylaws & Statutory Approvals',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Draft contractor-grade structural coordination sheets, service coordination, and municipal sanction drawings under local bylaws.',
          tasks: [
            'Draft municipal sanction drawings complying with local Development Control Regulations (DCR) and FSI/FAR rules',
            'Generate comprehensive GFC (Good for Construction) architectural working drawings with detailed section callouts',
            'Coordinate structural grid alignment with civil/structural and MEP engineer drawings'
          ],
          milestone: 'Deliver a complete GFC submission package for a commercial or institutional building project',
          prerequisites: ['Revit BIM modeling and basic National Building Code understanding'],
          resources: [
            { title: 'Bureau of Indian Standards - National Building Code of India (NBC 2016)', url: 'https://www.bis.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Sustainable Design (GRIHA/IGBC) & Studio Interview Preparation',
          durationMonths: 2,
          durationText: '2 months',
          category: 'portfolio',
          description: 'Incorporate solar passive design, prepare for IGBC/GRIHA accreditation, and curate architectural studio portfolio.',
          tasks: [
            'Perform sun-path and daylight analysis using climate analysis tools (Climate Studio, Insight 360)',
            'Incorporate rainwater harvesting, solar PV layout, and low-embodied-energy material specs',
            'Assemble a high-impact architectural portfolio showcasing conceptual design, BIM proficiency, and GFC details'
          ],
          milestone: 'Publish a 25-page architectural portfolio and prepare for leading design studio interviews',
          prerequisites: ['BIM and construction working drawings'],
          resources: [
            { title: 'Indian Green Building Council (IGBC) Student Education', url: 'https://igbc.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'content-writer',
    title: 'Content Writer',
    educationQualification: {
      minimumQualification: 'Bachelor degree in English, Journalism, Mass Communication, Literature, Marketing, or any discipline',
      preferredDegree: 'BA / MA in English Literature, Mass Media, or Journalism',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; published writing samples, clarity of thought, and SEO knowledge are evaluated',
      mandatoryRequirements: [
        'Recognized undergraduate degree',
        'Strong command of English grammar, tone adaptability, research capability, and headline crafting'
      ],
      preferredQualifications: [
        'HubSpot Content Marketing Certification',
        'Basic SEO tools proficiency (SurferSEO, Semrush, WordPress CMS)'
      ],
      eligibilityCriteria: [
        'Excellent written vocabulary, original storytelling, and fast turnaround research abilities'
      ],
      regulatoryNotes: 'Content writers produce digital articles, white papers, SaaS product copy, and scripts complying with copyright and intellectual property norms.'
    },
    roadmap: {
      totalDurationMonths: 3,
      totalDurationFormatted: '3 months',
      steps: [
        {
          stepNumber: 1,
          title: 'SEO Article Writing, Research & Content Structuring',
          durationMonths: 1,
          durationText: '1 month',
          category: 'fundamentals',
          description: 'Master search intent, secondary keyword integration, readability grading (Flesch-Kincaid), and CMS publishing.',
          tasks: [
            'Conduct competitor research and outline articles addressing primary and secondary user queries',
            'Draft long-form (1,500+ words) informational blog posts with scannable headers, bullet points, and citations',
            'Format and publish directly on WordPress CMS with images, alt text, and meta descriptions'
          ],
          milestone: 'Publish 3 SEO-optimized long-form articles on Medium, Substack, or WordPress',
          prerequisites: ['Good English reading and writing literacy'],
          resources: [
            { title: 'HubSpot Content Marketing Free Certification', url: 'https://academy.hubspot.com/courses/content-marketing', type: 'learning', isFree: true },
            { title: 'Purdue Online Writing Lab (OWL)', url: 'https://owl.purdue.edu/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Copywriting Frameworks (AIDA / PAS) & Conversion Writing',
          durationMonths: 1,
          durationText: '1 month',
          category: 'skills',
          description: 'Learn persuasion copywriting formulas (AIDA, PAS, BAB) for landing pages, email newsletters, and social media.',
          tasks: [
            'Write high-converting SaaS landing page copy: value proposition, feature-benefit mapping, and social proof',
            'Draft a 5-part email nurture sequence for a B2B product trial onboarding campaign',
            'Create engaging LinkedIn thought leadership posts and Twitter/X threads'
          ],
          milestone: 'Build a copywriting portfolio containing 2 landing pages, 1 email sequence, and 5 social posts',
          prerequisites: ['SEO article writing basics'],
          resources: [
            { title: 'Copyblogger Content & Copywriting Tutorials', url: 'https://copyblogger.com/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Portfolio Assembly (Contently / Notion) & Freelance/Job Outreach',
          durationMonths: 1,
          durationText: '1 month',
          category: 'portfolio',
          description: 'Organize digital writing clips, pitch prospective editors/agencies, and prepare for writing interview tests.',
          tasks: [
            'Set up a clean writing portfolio on Contently, Clippings.me, or Notion showcasing 6 distinct writing clips',
            'Pitch 10 marketing managers and digital agencies with customized writing angles and relevant clips',
            'Practice completing 2-hour timed writing assessment assignments for agency hiring rounds'
          ],
          milestone: 'Launch a portfolio website and apply for junior content writer or freelance assignments',
          prerequisites: ['Copywriting and content structuring'],
          resources: [
            { title: 'Contently Portfolio Platform', url: 'https://contently.com/', type: 'learning', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'public-relations-specialist',
    title: 'Public Relations (PR) Specialist',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Public Relations, Journalism, Mass Communication, English, or Marketing',
      preferredDegree: 'Master / Post Graduate Diploma in PR & Corporate Communications (e.g. IIMC, Xavier Institute, Symbiosis)',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; media relations network, press release drafting, and crisis communication skills are vital',
      mandatoryRequirements: [
        'Recognized undergraduate degree',
        'Strong verbal/written articulation, press release drafting skill, and news sense'
      ],
      preferredQualifications: [
        'Public Relations Society of India (PRSI) student/professional affiliation',
        'Experience with media monitoring software (Meltwater, Cision, PR Newswire)'
      ],
      eligibilityCriteria: [
        'Network building acumen, crisis calmness, and media landscape familiarity'
      ],
      regulatoryNotes: 'PR specialists coordinate with journalists, media houses, and corporate spokespersons to protect and enhance brand reputation.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Press Release Drafting, Media Kit & News Angle Pitching',
          durationMonths: 1,
          durationText: '1 month',
          category: 'fundamentals',
          description: 'Master inverted pyramid writing, corporate press releases, media advisories, and journalist pitch angles.',
          tasks: [
            'Draft corporate press releases for product launches, funding rounds, and executive appointments',
            'Assemble media kits containing executive bios, brand fact sheets, and high-resolution images',
            'Write personalized email pitches tailored to mainstream financial and technology journalists in India'
          ],
          milestone: 'Draft a complete media launch kit and press release for a tech startup launch',
          prerequisites: ['Strong written English and media awareness'],
          resources: [
            { title: 'Public Relations Society of India (PRSI)', url: 'https://www.prsi.co.in/', type: 'official', isFree: true },
            { title: 'PR Daily Educational Articles & Guides', url: 'https://www.prdaily.com/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Media Relations, Crisis Communication & Influencer Outreach',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Build journalist contact databases, simulate corporate crisis responses, and coordinate executive interview opportunities.',
          tasks: [
            'Build targeted media lists of journalists across print, digital, wire agencies (PTI, ANI), and television',
            'Draft crisis management holding statements and Q&A documents for sensitive corporate scenarios',
            'Coordinate thought-leadership authored articles (op-eds) for CXOs in leading publications'
          ],
          milestone: 'Develop a 360-degree crisis communication playbook and draft 2 executive thought-leadership op-eds',
          prerequisites: ['Press release drafting'],
          resources: [
            { title: 'Chartered Institute of Public Relations (CIPR) Skills Guides', url: 'https://www.cipr.co.uk/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Media Monitoring, Coverage Measurement & Agency Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Track media clippings, calculate Advertising Value Equivalency (AVE) / Share of Voice, and prepare for PR agency interviews.',
          tasks: [
            'Compile monthly media coverage evaluation reports with Share of Voice (SOV) metrics',
            'Prepare for behavioral and scenario-based interviews at top PR firms (Adfactors, Edelman, MSL, Genesis BCW)',
            'Assemble a PR portfolio with published press releases, pitch notes, and campaign coverage binders'
          ],
          milestone: 'Present a comprehensive PR campaign case study report in a mock interview panel',
          prerequisites: ['Media relations and crisis communication'],
          resources: [
            { title: 'Reputation Today Magazine & Resources', url: 'https://reputationtoday.in/', type: 'learning', isFree: true }
          ]
        }
      ]
    }
  }
];
