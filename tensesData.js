// IELTS Academic Tenses Master Knowledge Base (B2 Level)
const tensesData = [
  // ==========================================
  // 1. PRESENT SIMPLE
  // ==========================================
  {
    id: "present-simple",
    name: "Present Simple Tense",
    level: "B2 Core",
    formula: {
      affirmative: "Subject + Verb(s/es) [e.g., The data indicates / Students attend]",
      negative: "Subject + do/does not + Base Verb [e.g., It does not represent]",
      question: "Do/Does + Subject + Base Verb? [e.g., Does urbanization impact?]",
      passive: "Subject + is/am/are + Past Participle [e.g., Data is analyzed annually]"
    },
    overview: "The Present Simple is the bedrock of IELTS Academic writing and speaking. At the B2 level, candidates use it not merely for everyday habits, but to state timeless scientific truths, report findings in academic literature, describe recurring statistical patterns, and articulate general arguments in Writing Task 2.",
    examinerTips: "In IELTS Writing Task 2, use the Present Simple to present your thesis and general premises. In Task 1, use it if the chart or diagram has no past date or describes a timeless natural or industrial cycle.",
    commonMistakes: [
      "Omitting third-person '-s' on singular academic subjects (e.g., *'The chart show' instead of 'The chart shows').",
      "Using Present Continuous for stative verbs like *believe, suggest, consist, prefer*.",
      "Overusing Present Simple for historical data locked to past years (e.g., using 'is' instead of 'was' for 2010 figures)."
    ],
    usages: [
      {
        title: "1. Universal Facts, Generalizations & Scientific Laws",
        description: "Expressing accepted scientific realities, natural phenomena, and established sociological principles in Task 2 essays.",
        examples: [
          { sentence: "Deforestation significantly accelerates the rate of topsoil erosion in tropical ecosystems.", tag: "Writing Task 2" },
          { sentence: "Water expands when it freezes, creating immense mechanical pressure within porous rocks.", tag: "Academic Reading" },
          { sentence: "Global trade networks rely heavily on maritime shipping for the transportation of bulk commodities.", tag: "Writing Task 2" },
          { sentence: "Higher carbon dioxide concentrations trap solar radiation within the Earth's atmosphere.", tag: "Writing Task 2" },
          { sentence: "Urban greenery mitigates the heat island effect by providing natural shade and evapotranspiration.", tag: "Writing Task 2" },
          { sentence: "Adolescent brain development influences risk-taking behavior and impulse control.", tag: "Reading / Essay" },
          { sentence: "Bilingual individuals demonstrate greater cognitive flexibility in executive function tasks.", tag: "Speaking Part 3" },
          { sentence: "Solar panels convert photovoltaic energy directly into direct-current electricity.", tag: "Writing Task 1 (Process)" },
          { sentence: "Economic inflation erodes the purchasing power of low-income households over time.", tag: "Writing Task 2" },
          { sentence: "Regular cardiovascular exercise lowers resting blood pressure and strengthens the heart muscle.", tag: "Speaking Part 3" }
        ]
      },
      {
        title: "2. Academic Citation, Reporting Verbs & Diagram Summaries",
        description: "Introducing published research, discussing authors' arguments, and summarizing static charts/maps in Writing Task 1 & 2.",
        examples: [
          { sentence: "The bar chart illustrates the proportion of renewable energy generated across five European nations.", tag: "Writing Task 1" },
          { sentence: "The author argues that government subsidies are essential for sustainable agricultural transition.", tag: "Reading / Essay" },
          { sentence: "Current sociological research suggests that remote work improves employee productivity.", tag: "Writing Task 2" },
          { sentence: "The diagram depicts the step-by-step process of converting sugarcane into bioethanol fuel.", tag: "Writing Task 1" },
          { sentence: "Leading economists maintain that technological automation creates more specialized jobs than it eliminates.", tag: "Writing Task 2" },
          { sentence: "The table provides a breakdown of municipal expenditure allocated to healthcare and education.", tag: "Writing Task 1" },
          { sentence: "Professor Davis contends that early childhood education yields substantial lifelong dividends.", tag: "Writing Task 2" },
          { sentence: "The flow chart shows how wastewater is treated before being discharged into the river.", tag: "Writing Task 1" },
          { sentence: "Modern pedagogical theory emphasizes active learning over passive rote memorization.", tag: "Writing Task 2" },
          { sentence: "The maps highlight key infrastructure developments that occurred in the coastal township.", tag: "Writing Task 1" }
        ]
      },
      {
        title: "3. Stative Verbs (Cognition, Perception, Ownership, Measure)",
        description: "Expressing thoughts, opinions, and relationships with verbs that are never used in continuous forms in academic English.",
        examples: [
          { sentence: "The proposed public transit policy consists of four interconnected developmental phases.", tag: "Writing Task 2" },
          { sentence: "Many educational specialists believe that standardized testing fails to assess creative problem-solving.", tag: "Writing Task 2" },
          { sentence: "The archaeological artifact measures approximately fifteen centimeters in diameter.", tag: "Listening / Reading" },
          { sentence: "This environmental initiative requires substantial collaboration between private and public sectors.", tag: "Writing Task 2" },
          { sentence: "I prefer independent research because it allows me to explore interdisciplinary topics in depth.", tag: "Speaking Part 1" },
          { sentence: "The dataset contains several statistical anomalies that warrant closer inspection.", tag: "Writing Task 1" },
          { sentence: "Such radical educational reforms appear unfeasible given the current budgetary constraints.", tag: "Writing Task 2" },
          { sentence: "The syllabus comprises modules on applied linguistics, phonetics, and curriculum design.", tag: "Speaking Part 1" },
          { sentence: "I realize that transitioning to clean energy entails significant upfront capital expenditures.", tag: "Speaking Part 3" },
          { sentence: "The laboratory sample resembles volcanic basalt in mineral composition and texture.", tag: "Academic Reading" }
        ]
      },
      {
        title: "4. Schedules, Timetables & Official Programmed Events",
        description: "Referring to scheduled future events or established administrative timetables.",
        examples: [
          { sentence: "The international academic conference opens on Monday morning with a keynote address.", tag: "Speaking Part 1" },
          { sentence: "The express train to the university campus departs every fifteen minutes from central station.", tag: "Speaking Part 1" },
          { sentence: "The candidate submission window closes promptly at midnight on the thirty-first of March.", tag: "General Academic" },
          { sentence: "The autumn university term begins in the second week of October across all faculties.", tag: "Speaking Part 1" },
          { sentence: "According to the official schedule, the delegation arrives in Geneva tomorrow at noon.", tag: "Reading / Context" },
          { sentence: "The final examination period commences immediately following the reading week.", tag: "Academic Context" },
          { sentence: "The public exhibition runs from September through December at the national museum.", tag: "Speaking Part 2" },
          { sentence: "The scientific symposium concludes with a panel debate on bioethics on Thursday evening.", tag: "Speaking Part 3" },
          { sentence: "The library shuts its reference archives at eight o'clock on weekend evenings.", tag: "Listening Section 1" },
          { sentence: "The morning lecture series starts at nine sharp in the main auditorium.", tag: "Speaking Part 1" }
        ]
      }
    ]
  },

  // ==========================================
  // 2. PRESENT CONTINUOUS
  // ==========================================
  {
    id: "present-continuous",
    name: "Present Continuous Tense",
    level: "B2 Core",
    formula: {
      affirmative: "Subject + is/am/are + Verb-ing [e.g., Global temperatures are rising]",
      negative: "Subject + is/am/are + not + Verb-ing [e.g., Authorities are not addressing]",
      question: "Is/Am/Are + Subject + Verb-ing? [e.g., Is biodiversity declining?]",
      passive: "Subject + is/am/are + being + Past Participle [e.g., New roads are being constructed]"
    },
    overview: "In IELTS Academic writing and speaking, Present Continuous is crucial for describing ongoing trends, progressive societal shifts, current environmental changes, and temporary situations. It is frequently paired with time markers like *currently, presently, increasingly, at an alarming rate*.",
    examinerTips: "In Task 1 Process diagrams, use the Present Continuous Passive (*is being transferred, are being heated*) to describe active operations. In Task 2, use it to highlight dynamic global trends.",
    commonMistakes: [
      "Using Present Continuous for permanent habits instead of Present Simple.",
      "Incorrectly applying '-ing' to stative verbs (e.g., *'I am knowing the answer'* instead of *'I know'*).",
      "Forgetting the auxiliary verb 'is/are' (e.g., *'The climate changing fast'*)."
    ],
    usages: [
      {
        title: "1. Current Global Trends & Progressive Shifts",
        description: "Describing contemporary developments, technological changes, and social movements happening around now.",
        examples: [
          { sentence: "Renewable energy technologies are rapidly replacing fossil fuels in modern electrical grids.", tag: "Writing Task 2" },
          { sentence: "More and more consumers are adopting plant-based diets to reduce their carbon footprints.", tag: "Writing Task 2" },
          { sentence: "Metropolitan centers are expanding at an unprecedented rate across developing countries.", tag: "Writing Task 2" },
          { sentence: "Global temperatures are climbing steadily as greenhouse gas concentrations continue to rise.", tag: "Writing Task 2" },
          { sentence: "Universities are increasingly incorporating artificial intelligence tools into their curriculum.", tag: "Writing Task 2" },
          { sentence: "E-commerce platforms are transforming traditional retail dynamics worldwide.", tag: "Writing Task 2" },
          { sentence: "Telecommunication companies are upgrading cellular infrastructure to support 5G connectivity.", tag: "Writing Task 2" },
          { sentence: "Automakers are shifting their manufacturing priorities toward fully electric vehicle lineups.", tag: "Writing Task 2" },
          { sentence: "Healthcare institutions are experiencing critical shortages of specialized nursing personnel.", tag: "Writing Task 2" },
          { sentence: "Public libraries are evolving into multifunctional community hubs and digital learning centers.", tag: "Speaking Part 3" }
        ]
      },
      {
        title: "2. Temporary Situations & Ongoing Academic Projects",
        description: "Discussing conditions or projects that are currently underway but not expected to last indefinitely.",
        examples: [
          { sentence: "Dr. Henderson is currently conducting clinical trials on a novel immunotherapy compound.", tag: "Academic Context" },
          { sentence: "Our research group is collaborating with foreign universities on a marine conservation project.", tag: "Speaking Part 1" },
          { sentence: "The city council is testing a congestion pricing scheme in the central business district.", tag: "Writing Task 2" },
          { sentence: "I am currently preparing for my IELTS exam by completing daily reading and listening exercises.", tag: "Speaking Part 1" },
          { sentence: "The engineering faculty is utilizing temporary laboratory modules while renovations take place.", tag: "Academic Context" },
          { sentence: "The government is offering tax rebates this fiscal year to incentivize solar panel installations.", tag: "Writing Task 2" },
          { sentence: "My sister is staying with host parents in Melbourne while completing her exchange semester.", tag: "Speaking Part 1" },
          { sentence: "The meteorological institute is monitoring a severe low-pressure system off the coast.", tag: "Reading / Listening" },
          { sentence: "We are living in rental accommodation until the construction of our house is finished.", tag: "Speaking Part 1" },
          { sentence: "The editorial team is reviewing submissions for the upcoming special issue on bioethics.", tag: "Academic Context" }
        ]
      },
      {
        title: "3. Process Stages in IELTS Task 1 (Passive Continuous)",
        description: "Describing active manufacturing or biological stages as they occur in diagram workflows.",
        examples: [
          { sentence: "At this stage of the cycle, crushed glass is being melted in a high-temperature furnace.", tag: "Writing Task 1" },
          { sentence: "The purified water is being pumped into large containment reservoirs for chlorination.", tag: "Writing Task 1" },
          { sentence: "Organic waste is currently being decomposed by anaerobic bacteria to produce biogas.", tag: "Writing Task 1" },
          { sentence: "The harvested tea leaves are being dried on heated conveyor belts to halt oxidation.", tag: "Writing Task 1" },
          { sentence: "Raw plastic pellets are being extruded into molds to create standardized bottles.", tag: "Writing Task 1" },
          { sentence: "Timber logs are being stripped of their outer bark before entering the pulp mill.", tag: "Writing Task 1" },
          { sentence: "The refined petroleum product is being transferred into rail tank cars for distribution.", tag: "Writing Task 1" },
          { sentence: "Silica sand is being combined with limestone and soda ash in precise proportions.", tag: "Writing Task 1" },
          { sentence: "The clay bricks are being fired in continuous kilns at over one thousand degrees.", tag: "Writing Task 1" },
          { sentence: "The final paper reels are being inspected for thickness and tensile uniformity.", tag: "Writing Task 1" }
        ]
      },
      {
        title: "4. Confirmed Future Arrangements & Personal Plans",
        description: "Talking about fixed upcoming plans that have already been organized with others.",
        examples: [
          { sentence: "The university provost is hosting an orientation gala for international scholars next Friday.", tag: "Speaking Part 1" },
          { sentence: "I am meeting my thesis supervisor tomorrow afternoon to discuss my literature review.", tag: "Speaking Part 1" },
          { sentence: "The delegation is attending a bilateral climate summit in Geneva next week.", tag: "Writing / Speaking" },
          { sentence: "We are presenting our research findings at the regional neurology conference in June.", tag: "Speaking Part 2" },
          { sentence: "The guest lecturer is arriving on the morning flight from London on Thursday.", tag: "Academic Context" },
          { sentence: "Our study group is holding a mock examination session this coming Saturday.", tag: "Speaking Part 1" },
          { sentence: "The environmental club is organizing a beach clean-up drive next weekend.", tag: "Speaking Part 2" },
          { sentence: "The admissions director is interviewing shortlisted candidates throughout the coming week.", tag: "Academic Context" },
          { sentence: "I am flying to Manchester at the end of the month to begin my postgraduate program.", tag: "Speaking Part 1" },
          { sentence: "The department is launching its new digital learning portal at the start of next term.", tag: "Academic Context" }
        ]
      }
    ]
  },

  // ==========================================
  // 3. PRESENT PERFECT SIMPLE
  // ==========================================
  {
    id: "present-perfect",
    name: "Present Perfect Simple Tense",
    level: "B2 Core",
    formula: {
      affirmative: "Subject + have/has + Past Participle [e.g., Researchers have discovered]",
      negative: "Subject + have/has + not + Past Participle [e.g., The team has not verified]",
      question: "Have/Has + Subject + Past Participle? [e.g., Has policy changed?]",
      passive: "Subject + have/has + been + Past Participle [e.g., Solutions have been implemented]"
    },
    overview: "The Present Perfect connects past occurrences directly to the present moment. In IELTS Academic writing and speaking, it is essential for introducing background research, highlighting recent innovations without stating closed dates, and describing changes over time in Task 1 line graphs.",
    examinerTips: "Do not use the Present Perfect if you mention a finished, specific past time marker like *in 2010, yesterday, five years ago*. Use it with *over the last decade, since 2000, recently, so far*.",
    commonMistakes: [
      "Using Present Perfect with finished past years (e.g., *'The sales have increased in 2015'* instead of *'increased in 2015'*).",
      "Confusing 'have gone to' (has not returned) with 'have been to' (visited and returned).",
      "Using 'since' with a duration instead of a starting point (e.g., *'since five years'* instead of *'for five years'* or *'since 2018'*)."
    ],
    usages: [
      {
        title: "1. Research Background & Current State of Knowledge",
        description: "Introducing general literature and consensus in Writing Task 2 without specifying a historical date.",
        examples: [
          { sentence: "Numerous empirical studies have established a clear link between air pollution and respiratory illness.", tag: "Writing Task 2" },
          { sentence: "Linguists have long debated the optimal age for second language acquisition.", tag: "Writing Task 2" },
          { sentence: "Advances in biotechnology have revolutionized modern therapeutic interventions.", tag: "Writing Task 2" },
          { sentence: "Sociologists have identified several socioeconomic factors contributing to youth unemployment.", tag: "Writing Task 2" },
          { sentence: "Several pharmaceutical companies have synthesized potential inhibitors for the targeted enzyme.", tag: "Academic Reading" },
          { sentence: "Educators have observed a marked decline in student attention spans due to smartphone usage.", tag: "Writing Task 2" },
          { sentence: "Economists have proposed diverse fiscal models to stimulate renewable energy investment.", tag: "Writing Task 2" },
          { sentence: "Psychologists have demonstrated that mindfulness meditation reduces cortisol levels under stress.", tag: "Speaking Part 3" },
          { sentence: "Technological innovations have significantly lowered the cost of solar energy production.", tag: "Writing Task 2" },
          { sentence: "Archaeologists have uncovered well-preserved bronze artifacts along the riverbank.", tag: "Academic Reading" }
        ]
      },
      {
        title: "2. Trends Over Time (Since / For / Over the Past Decade)",
        description: "Describing statistical developments bridging past milestones to the present in Task 1 line graphs & Task 2.",
        examples: [
          { sentence: "The proportion of households with high-speed internet access has surged since 2010.", tag: "Writing Task 1" },
          { sentence: "Global carbon emissions have increased by over thirty percent during the past three decades.", tag: "Writing Task 1 / 2" },
          { sentence: "The life expectancy of citizens in the region has risen steadily over the last half-century.", tag: "Writing Task 1" },
          { sentence: "Government spending on public healthcare infrastructure has doubled since the inception of the program.", tag: "Writing Task 1" },
          { sentence: "The number of overseas students entering tertiary education has climbed dramatically over the last ten years.", tag: "Writing Task 1" },
          { sentence: "Consumer demand for organic produce has witnessed exponential growth in recent years.", tag: "Writing Task 2" },
          { sentence: "The unemployment rate in manufacturing sectors has fluctuated considerably since 2015.", tag: "Writing Task 1" },
          { sentence: "Car ownership among young urban adults has declined sharply over the past five years.", tag: "Writing Task 1" },
          { sentence: "Renewable energy output has expanded fourfold since international accords were signed.", tag: "Writing Task 1" },
          { sentence: "Tourist arrivals in the capital city have grown continuously over the preceding decade.", tag: "Writing Task 1" }
        ]
      },
      {
        title: "3. Recent Developments with Current Relevance (Just / Already / Recently)",
        description: "Highlighting newly enacted legislation, breakthroughs, or events with immediate practical ramifications.",
        examples: [
          { sentence: "The regulatory authority has recently introduced stringent safety guidelines for self-driving vehicles.", tag: "Writing Task 2" },
          { sentence: "The university has just inaugurated a multi-million-pound state-of-the-art nanotechnology center.", tag: "Speaking Part 1" },
          { sentence: "Several European municipalities have already banned diesel automobiles from urban centers.", tag: "Writing Task 2" },
          { sentence: "The laboratory team has just finalized the second phase of clinical trials on the vaccine.", tag: "Academic Context" },
          { sentence: "The government has recently enacted comprehensive legislation to combat cyber harassment.", tag: "Writing Task 2" },
          { sentence: "Researchers have already confirmed the presence of organic molecules in the meteorite sample.", tag: "Academic Reading" },
          { sentence: "The administration has just unveiled its twenty-year urban revitalization roadmap.", tag: "Writing Task 2" },
          { sentence: "Many international airlines have already adopted sustainable aviation fuel on test routes.", tag: "Writing Task 2" },
          { sentence: "The committee has recently published a white paper detailing the impacts of automation on labor.", tag: "Writing Task 2" },
          { sentence: "I have just completed my undergraduate dissertation in political philosophy.", tag: "Speaking Part 1" }
        ]
      },
      {
        title: "4. Life Experience & Academic Milestones (Ever / Never / Superlatives)",
        description: "Expressing personal accomplishments and evaluative opinions in IELTS Speaking Parts 1, 2, and 3.",
        examples: [
          { sentence: "This is the most challenging academic assignment that I have ever encountered.", tag: "Speaking Part 2" },
          { sentence: "I have visited several renowned scientific archives across Western Europe during my research.", tag: "Speaking Part 2" },
          { sentence: "She has never compromised her academic integrity despite immense institutional pressure.", tag: "Speaking Part 2" },
          { sentence: "That was the most insightful keynote address that our faculty has ever hosted.", tag: "Speaking Part 3" },
          { sentence: "I have participated in multiple community volunteer initiatives focused on literacy.", tag: "Speaking Part 1" },
          { sentence: "The country has never experienced such a prolonged period of severe ecological drought.", tag: "Writing Task 2" },
          { sentence: "It is the most comprehensive comparative analysis that scholars have produced on the topic.", tag: "Academic Essay" },
          { sentence: "I have lived in three different countries, which has broadened my cultural perspective.", tag: "Speaking Part 1" },
          { sentence: "Our institution has achieved first-class rankings in international engineering benchmarks.", tag: "Speaking Part 1" },
          { sentence: "I have worked with diverse multidisciplinary teams throughout my academic career.", tag: "Speaking Part 2" }
        ]
      }
    ]
  },

  // ==========================================
  // 4. PRESENT PERFECT CONTINUOUS
  // ==========================================
  {
    id: "present-perfect-continuous",
    name: "Present Perfect Continuous Tense",
    level: "B2 Advanced",
    formula: {
      affirmative: "Subject + have/has + been + Verb-ing [e.g., Climatologists have been warning]",
      negative: "Subject + have/has + not + been + Verb-ing [e.g., They have not been cooperating]",
      question: "Have/Has + Subject + been + Verb-ing? [e.g., Have emissions been rising?]",
      passive: "Rarely used in academic English (use Present Perfect Simple Passive instead)"
    },
    overview: "This tense highlights the continuous, unbroken duration of an activity that commenced in the past and is still actively underway right now. In IELTS, it shows superior command of grammatical range when explaining ongoing research, protracted societal dilemmas, and evident results of intensive effort.",
    examinerTips: "Use Present Perfect Continuous when you want to emphasize *how long* an action has been happening (*for decades, since last year*), rather than the completed result.",
    commonMistakes: [
      "Using stative verbs in this tense (e.g., *'I have been knowing him for years'* instead of *'I have known'*).",
      "Using Present Continuous instead of Present Perfect Continuous when 'for' or 'since' is present (e.g., *'I am studying here for two years'*).",
      "Forgetting 'been' (e.g., *'They have studying'*)."
    ],
    usages: [
      {
        title: "1. Protracted Ongoing Research & Academic Inquiry",
        description: "Emphasizing the sustained effort and continuous timeline of scientific or scholarly investigations.",
        examples: [
          { sentence: "Oceanographers have been tracking coral bleaching patterns along the reef for over a decade.", tag: "Writing Task 2" },
          { sentence: "Economists have been analyzing the fiscal ramifications of the new trade agreement since January.", tag: "Writing Task 2" },
          { sentence: "I have been preparing my doctoral thesis proposal under Dr. Jenkins for six consecutive months.", tag: "Speaking Part 1" },
          { sentence: "Astrophysicists have been scanning cosmic microwave background radiation for anomalous signals.", tag: "Academic Reading" },
          { sentence: "Sociologists have been interviewing rural migrant workers to evaluate urban integration hurdles.", tag: "Academic Context" },
          { sentence: "Linguists have been documenting endangered indigenous dialects in the Amazonian highlands.", tag: "Reading / Essay" },
          { sentence: "The medical institute has been testing alternative antiviral therapies since the initial outbreak.", tag: "Writing Task 2" },
          { sentence: "Environmental activists have been lobbying local authorities for stricter conservation policies.", tag: "Writing Task 2" },
          { sentence: "Our research team has been compiling statistical data on consumer habits throughout the semester.", tag: "Speaking Part 2" },
          { sentence: "Climatologists have been warning policymakers about irreversible ice sheet degradation for decades.", tag: "Writing Task 2" }
        ]
      },
      {
        title: "2. Explaining Visible Present Outcomes & Evidence",
        description: "Accounting for a current visible state or condition through recent continuous exertion.",
        examples: [
          { sentence: "The students look visibly exhausted because they have been revising for examinations all morning.", tag: "Speaking Part 1" },
          { sentence: "The laboratory floor is wet because technicians have been pressure-testing the coolant conduits.", tag: "Academic Context" },
          { sentence: "Air quality indices are improving because factories have been adhering to new emission caps.", tag: "Writing Task 2" },
          { sentence: "My eyes are fatigued because I have been editing statistical tables on the screen for five hours.", tag: "Speaking Part 1" },
          { sentence: "Soil salinity has risen sharply because farmers have been over-irrigating arable fields with mineral-rich water.", tag: "Writing Task 2" },
          { sentence: "The roads are heavily congested because transport workers have been resurfacing the highway.", tag: "Speaking Part 3" },
          { sentence: "The athlete is out of breath because she has been doing high-intensity interval drills.", tag: "General Context" },
          { sentence: "The server is running sluggishly because thousands of applicants have been accessing the portal simultaneously.", tag: "Academic Context" },
          { sentence: "His spoken English is remarkably fluent because he has been practicing with native speakers daily.", tag: "Speaking Part 1" },
          { sentence: "The riverbanks are overflowing because torrential rain has been falling continuously for forty-eight hours.", tag: "Reading / Task 2" }
        ]
      }
    ]
  },

  // ==========================================
  // 5. PAST SIMPLE
  // ==========================================
  {
    id: "past-simple",
    name: "Past Simple Tense",
    level: "B2 Core",
    formula: {
      affirmative: "Subject + Past Verb (V2) [e.g., The population grew / Researchers conducted]",
      negative: "Subject + did not + Base Verb [e.g., The trend did not stabilize]",
      question: "Did + Subject + Base Verb? [e.g., Did emissions drop?]",
      passive: "Subject + was/were + Past Participle [e.g., The survey was administered in 2018]"
    },
    overview: "The Past Simple is the primary tense for IELTS Writing Task 1 when describing charts with historical timelines (e.g., data from 1990 to 2020), as well as recounting personal experiences in Speaking Part 2 and citing specific past published research.",
    examinerTips: "In Task 1, if all years in the graph are in the past, your entire report must be consistently written in the Past Simple (with Past Perfect for earlier comparisons). Never mix with Present Simple unless referring to current reality.",
    commonMistakes: [
      "Using Present Simple or Present Perfect for specific dates in the past (e.g., *'In 2012, oil prices have plummeted'* instead of *'plummeted'*).",
      "Confusing irregular past verb forms (e.g., *falled* instead of *fell*, *costed* instead of *cost*, *risen* without auxiliary).",
      "Using 'did not' with a past verb (e.g., *'did not increased'* instead of *'did not increase'*)."
    ],
    usages: [
      {
        title: "1. Historical Trends & Completed Data in Writing Task 1",
        description: "Reporting past movements, fluctuations, peaks, and troughs between fixed historical years.",
        examples: [
          { sentence: "Between 1995 and 2005, the expenditure on renewable energy rose steadily from ten to twenty-five million euros.", tag: "Writing Task 1" },
          { sentence: "The unemployment rate peaked at twelve percent in 2008 before experiencing a gradual decline.", tag: "Writing Task 1" },
          { sentence: "Car ownership in the United Kingdom grew significantly throughout the second half of the twentieth century.", tag: "Writing Task 1" },
          { sentence: "In 2014, the volume of industrial exports plummeted by nearly fifteen percent due to trade restrictions.", tag: "Writing Task 1" },
          { sentence: "The proportion of female university graduates surpassed that of males for the first time in 2012.", tag: "Writing Task 1" },
          { sentence: "Coal consumption fell substantially between 2000 and 2018, bottoming out at just five thousand metric tons.", tag: "Writing Task 1" },
          { sentence: "The figure for domestic water usage remained relatively stable throughout the entire ten-year period.", tag: "Writing Task 1" },
          { sentence: "In the final quarter of 2019, tourism revenue reached an all-time high of forty million dollars.", tag: "Writing Task 1" },
          { sentence: "The two lines converged in 2006, after which nuclear energy generation overtook hydroelectric power.", tag: "Writing Task 1" },
          { sentence: "From 1980 to 2000, literacy rates in rural provinces increased by an impressive twenty-eight percent.", tag: "Writing Task 1" }
        ]
      },
      {
        title: "2. Citing Dated Academic Research & Historical Milestones",
        description: "Referencing landmark discoveries and experiments conducted at explicit points in history.",
        examples: [
          { sentence: "In their landmark 1953 publication, Watson and Crick proposed the double helix structure of DNA.", tag: "Academic Reading" },
          { sentence: "Alexander Fleming discovered penicillin by accident in 1928 after observing fungal contamination in a petri dish.", tag: "Academic Reading" },
          { sentence: "The United Nations General Assembly adopted the Universal Declaration of Human Rights in 1948.", tag: "Writing Task 2" },
          { sentence: "During the 1970s energy crisis, Western economies suffered severe inflationary shocks.", tag: "Academic Essay" },
          { sentence: "In 1969, Apollo 11 successfully landed the first humans on the lunar surface.", tag: "Academic Reading" },
          { sentence: "The Chernobyl nuclear disaster in 1986 prompted global reassessment of atomic reactor safety.", tag: "Writing Task 2" },
          { sentence: "Dr. Salk developed the first inactivated polio vaccine in the mid-1950s.", tag: "Academic Reading" },
          { sentence: "The Kyoto Protocol established legally binding emission reduction targets for industrialized nations in 1997.", tag: "Writing Task 2" },
          { sentence: "In a 2016 psychological study, researchers observed that sleep deprivation impaired cognitive memory retention.", tag: "Academic Essay" },
          { sentence: "The Industrial Revolution transformed predominantly agrarian societies into mechanized urban economies.", tag: "Writing Task 2" }
        ]
      },
      {
        title: "3. Personal Anecdotes & Past Narratives in Speaking Part 2",
        description: "Describing memorable past events, educational journeys, and childhood experiences.",
        examples: [
          { sentence: "When I was in secondary school, I participated in a national mathematics olympiad in the capital.", tag: "Speaking Part 2" },
          { sentence: "Three years ago, I decided to change my career path and enroll in a computer science degree.", tag: "Speaking Part 2" },
          { sentence: "During my gap year, I traveled through Southeast Asia and volunteered at a rural wildlife sanctuary.", tag: "Speaking Part 2" },
          { sentence: "I first met my mentor at an academic conference held in Singapore during my undergraduate studies.", tag: "Speaking Part 2" },
          { sentence: "Last summer, our family organized a reunion trip to the coastal region where my grandparents lived.", tag: "Speaking Part 2" },
          { sentence: "When the power failed during my final presentation, I had to improvise using printed handouts.", tag: "Speaking Part 2" },
          { sentence: "I received my acceptance letter from the university while I was working at a local community center.", tag: "Speaking Part 2" },
          { sentence: "As a child, I spent hours reading encyclopedias in my local municipal library.", tag: "Speaking Part 2" },
          { sentence: "I bought my first acoustic guitar with the earnings from my part-time tutoring job.", tag: "Speaking Part 1" },
          { sentence: "We completed the arduous mountain trek in five days despite harsh weather conditions.", tag: "Speaking Part 2" }
        ]
      }
    ]
  },

  // ==========================================
  // 6. PAST CONTINUOUS
  // ==========================================
  {
    id: "past-continuous",
    name: "Past Continuous Tense",
    level: "B2 Core",
    formula: {
      affirmative: "Subject + was/were + Verb-ing [e.g., The team was conducting experiments]",
      negative: "Subject + was/were + not + Verb-ing [e.g., The systems were not operating]",
      question: "Was/Were + Subject + Verb-ing? [e.g., Were prices dropping?]",
      passive: "Subject + was/were + being + Past Participle [e.g., Data was being gathered]"
    },
    overview: "Past Continuous portrays an action that was actively unfolding at a specific moment in the past, setting background scenery or serving as the longer continuous action interrupted by a shorter Past Simple event (using *while, as, when*).",
    examinerTips: "In Speaking Part 2, pairing the Past Continuous with the Past Simple (*'While I was studying for my finals, an unexpected opportunity arose'*) demonstrates complex sentence coordination for Band 7+ Grammar.",
    commonMistakes: [
      "Using Past Continuous for completed habits (e.g., *'I was playing football every Sunday as a child'* instead of *'I played'* or *'used to play'*).",
      "Incorrect subject-verb agreement (e.g., *'The data were being'* vs *'The scientist were'*).",
      "Using 'during' with a clause instead of 'while' (e.g., *'during I was walking'*)."
    ],
    usages: [
      {
        title: "1. Interrupted Past Actions (While / When / As)",
        description: "A continuous background activity interrupted by a sudden, completed past event.",
        examples: [
          { sentence: "While the chemists were calibrating the spectrometer, a power surge damaged the sensor array.", tag: "Academic Context" },
          { sentence: "I was reviewing my dissertation draft when my professor called to discuss the methodological changes.", tag: "Speaking Part 2" },
          { sentence: "As the surveyors were mapping the forest boundary, they uncovered remnants of a medieval settlement.", tag: "Academic Reading" },
          { sentence: "The turbine was operating at maximum velocity when an emergency shutdown protocol was triggered.", tag: "Academic Context" },
          { sentence: "While the sociologists were conducting door-to-door interviews, heavy snow began to fall.", tag: "Academic Context" },
          { sentence: "I was cycling to the university library when my front tire blew out on the bridge.", tag: "Speaking Part 2" },
          { sentence: "The surgical team was performing the heart bypass when the backup generator kicked in.", tag: "Reading Context" },
          { sentence: "While the delegates were debating the treaty clauses, an unscheduled recess was announced.", tag: "Reading / Listening" },
          { sentence: "The computer was compiling the simulation data when the operating system crashed.", tag: "Speaking Part 1" },
          { sentence: "As the aircraft was approaching the landing strip, extreme wind shear caused turbulence.", tag: "Reading Context" }
        ]
      },
      {
        title: "2. Parallel Simultaneous Past Actions",
        description: "Two or more continuous actions occurring simultaneously in the past connected by 'while' or 'whereas'.",
        examples: [
          { sentence: "While Dr. Alvarez was recording the audio responses, his colleague was taking detailed notes on non-verbal cues.", tag: "Academic Context" },
          { sentence: "Some lab assistants were preparing chemical reagents while others were sanitizing the glassware.", tag: "Academic Context" },
          { sentence: "During the 1990s, heavy industrial output was declining while the service sector was expanding rapidly.", tag: "Writing Task 1" },
          { sentence: "While the audience was listening attentively, the guest speaker was illustrating key points on the board.", tag: "Speaking Part 2" },
          { sentence: "My brother was studying for his bar examination while I was completing my medical residency.", tag: "Speaking Part 2" },
          { sentence: "In the control room, technicians were monitoring pressure valves while engineers were adjusting fuel flow.", tag: "Academic Reading" },
          { sentence: "While domestic consumption was plateauing, international export figures were climbing exponentially.", tag: "Writing Task 1" },
          { sentence: "The primary students were working on art projects while their teacher was grading reading journals.", tag: "Speaking Part 2" },
          { sentence: "While renewable sector jobs were proliferating, fossil fuel extraction employment was shrinking.", tag: "Writing Task 2" },
          { sentence: "I was transcribing interview recordings while my research partner was coding qualitative themes.", tag: "Academic Context" }
        ]
      },
      {
        title: "3. Setting Scene, Context & Atmosphere in Speaking Part 2",
        description: "Describing background conditions, weather, and atmosphere at a specific historical point.",
        examples: [
          { sentence: "At ten o'clock that morning, the autumn sun was shining brightly over the university courtyard.", tag: "Speaking Part 2" },
          { sentence: "The wind was howling fiercely and waves were crashing against the harbor wall as we embarked.", tag: "Speaking Part 2" },
          { sentence: "When the keynote speaker stepped onto the stage, hundreds of delegates were applauding enthusiastically.", tag: "Speaking Part 2" },
          { sentence: "Crowds of excited students were bustling through the corridors on the first day of the academic term.", tag: "Speaking Part 2" },
          { sentence: "At midnight, the entire research station was sleeping peacefully beneath the polar aurora.", tag: "Speaking Part 2" },
          { sentence: "Rain was pouring steadily outside while we were finalizing the debate strategy inside the hall.", tag: "Speaking Part 2" },
          { sentence: "Musicians were tuning their instruments as patrons were taking their seats in the concert hall.", tag: "Speaking Part 2" },
          { sentence: "The fireplace was crackling warmly in the corner of the historic library room.", tag: "Speaking Part 2" },
          { sentence: "Steam was rising from the geothermal vents across the volcanic plateau as dawn broke.", tag: "Reading / Speaking" },
          { sentence: "Colleagues were chatting animatedly about the upcoming conference over morning coffee.", tag: "Speaking Part 2" }
        ]
      }
    ]
  },

  // ==========================================
  // 7. PAST PERFECT SIMPLE
  // ==========================================
  {
    id: "past-perfect",
    name: "Past Perfect Simple Tense",
    level: "B2 Advanced",
    formula: {
      affirmative: "Subject + had + Past Participle [e.g., The government had passed the law]",
      negative: "Subject + had + not + Past Participle [e.g., They had not completed the review]",
      question: "Had + Subject + Past Participle? [e.g., Had production ceased?]",
      passive: "Subject + had + been + Past Participle [e.g., The pipeline had been constructed]"
    },
    overview: "The Past Perfect establishes clear temporal hierarchy: it describes an action that was finished *before* another event in the past. In IELTS Writing Task 1, it allows accurate comparisons across earlier time brackets (*'By 2010, the company had already quadrupled its revenue'*). In Task 2, it articulates causal retrospectives.",
    examinerTips: "Use the Past Perfect when you have a past anchor point (e.g. *By 2005 / Before the trial commenced*). Do not use it as a substitute for Past Simple when there is only one past event.",
    commonMistakes: [
      "Using Past Perfect when events are listed in simple chronological order with 'and' (e.g., *'He entered the room and had sat down'*).",
      "Using Present Perfect instead of Past Perfect with past anchors (e.g., *'By 2000, sales have grown'* instead of *'had grown'*).",
      "Overusing Past Perfect throughout an entire paragraph."
    ],
    usages: [
      {
        title: "1. Prior Past Actions with 'By the time / By [Past Year]'",
        description: "Reporting milestones completed before a specific past deadline in Writing Task 1 & 2.",
        examples: [
          { sentence: "By 2010, the proportion of households utilizing solar panels had risen to fifteen percent.", tag: "Writing Task 1" },
          { sentence: "By the time the statutory audit commenced, the financial directors had resolved all accounting discrepancies.", tag: "Academic Context" },
          { sentence: "The urban population had doubled by the turn of the century, putting severe strain on sanitation systems.", tag: "Writing Task 1 / 2" },
          { sentence: "By the time emergency services arrived at the site, the fire had already consumed the storage facility.", tag: "Reading Context" },
          { sentence: "The committee had finalized the revised guidelines long before the conference opened.", tag: "Academic Context" },
          { sentence: "By 1990, coal generation had fallen behind natural gas as the primary energy source in the nation.", tag: "Writing Task 1" },
          { sentence: "The museum had acquired over five thousand rare manuscripts before the founder passed away.", tag: "Academic Reading" },
          { sentence: "By the end of the fiscal year, the corporation had eliminated sixty percent of its carbon liabilities.", tag: "Writing Task 2" },
          { sentence: "I had completed all prerequisite coursework before enrolling in the advanced econometrics seminar.", tag: "Speaking Part 1" },
          { sentence: "By the time international peacekeepers intervened, the civil conflict had displaced thousands of citizens.", tag: "Writing Task 2" }
        ]
      },
      {
        title: "2. Causal Relationships in the Past (Because / Reason)",
        description: "Explaining why a past decision, failure, or result occurred based on an earlier occurrence.",
        examples: [
          { sentence: "The ethics board rejected the trial proposal because the authors had not secured informed consent.", tag: "Academic Context" },
          { sentence: "The bridge collapsed during the gale because engineers had miscalculated the resonant wind frequency.", tag: "Academic Reading" },
          { sentence: "The airline cancelled the trans-Atlantic flight because mechanics had detected metal fatigue in the wing.", tag: "Reading Context" },
          { sentence: "I felt confident during the defense because I had rehearsed my responses thoroughly with my peers.", tag: "Speaking Part 2" },
          { sentence: "The crop harvest failed catastrophically because a severe drought had decimated seedling germination.", tag: "Writing Task 2" },
          { sentence: "The historical journal retracted the paper because researchers had fabricated their primary survey data.", tag: "Academic Context" },
          { sentence: "The city council abandoned the light-rail project because costs had escalated beyond projected revenues.", tag: "Writing Task 2" },
          { sentence: "She won the prestigious scholarship because she had published two peer-reviewed articles as an undergraduate.", tag: "Speaking Part 2" },
          { sentence: "The computer network shut down automatically because a security protocol had identified malicious traffic.", tag: "Academic Context" },
          { sentence: "The expedition team turned back because avalanche warnings had intensified overnight.", tag: "Reading Context" }
        ]
      },
      {
        title: "3. Academic Inversion with 'Hardly / Scarcely / No sooner...'",
        description: "Demonstrating high-level stylistic grammatical inversion for Band 8+ Writing & Speaking.",
        examples: [
          { sentence: "Hardly had the scientific team published their findings when rival laboratories challenged the methodology.", tag: "Academic Writing" },
          { sentence: "No sooner had the legislation been ratified than environmental groups demanded even stricter enforcement.", tag: "Academic Writing" },
          { sentence: "Scarcely had the keynote speaker begun her address when a power blackout darkened the auditorium.", tag: "Speaking Part 2" },
          { sentence: "Hardly had the vaccine entered distribution when unexpected supply chain bottlenecks arose.", tag: "Writing Task 2" },
          { sentence: "No sooner had the treaty taken effect than border tariffs were completely eliminated between both states.", tag: "Academic Reading" },
          { sentence: "Scarcely had the hurricane made landfall when emergency evacuation shelters reached maximum capacity.", tag: "Reading Context" },
          { sentence: "Hardly had I submitted my application when the admissions officer contacted me for an interview.", tag: "Speaking Part 2" },
          { sentence: "No sooner had the merger concluded than the parent company announced widespread restructuring.", tag: "Academic Reading" },
          { sentence: "Scarcely had the archaeological excavation begun when workers uncovered a royal burial chamber.", tag: "Academic Reading" },
          { sentence: "Hardly had the new curriculum been implemented when student assessment scores showed noticeable improvement.", tag: "Writing Task 2" }
        ]
      }
    ]
  },

  // ==========================================
  // 8. PAST PERFECT CONTINUOUS
  // ==========================================
  {
    id: "past-perfect-continuous",
    name: "Past Perfect Continuous Tense",
    level: "B2 Advanced",
    formula: {
      affirmative: "Subject + had + been + Verb-ing [e.g., They had been researching for years]",
      negative: "Subject + had + not + been + Verb-ing [e.g., The system had not been functioning properly]",
      question: "Had + Subject + been + Verb-ing? [e.g., Had they been monitoring the fault line?]",
      passive: "Avoided in standard academic English"
    },
    overview: "Past Perfect Continuous emphasizes the continuous progression and uninterrupted duration of an action up to a specific past milestone or interruption. It is particularly effective for describing the culmination of lengthy experiments, prolonged economic conditions, or causes of past physical states.",
    examinerTips: "Use this tense to express *cause and effect over a sustained past timeframe* in Writing Task 2 or Speaking Part 2.",
    commonMistakes: [
      "Confusing Past Continuous (*was doing*) with Past Perfect Continuous (*had been doing for hours*).",
      "Using stative verbs in this aspect (e.g., *'had been knowing'* instead of *'had known'*).",
      "Omitting 'been' or 'had'."
    ],
    usages: [
      {
        title: "1. Sustained Duration Prior to a Past Event / Interruption",
        description: "Quantifying an ongoing period of work or activity that led up to a past climax or interruption.",
        examples: [
          { sentence: "The climatologists had been gathering telemetry data for twenty consecutive hours before the storm damaged their radar.", tag: "Academic Context" },
          { sentence: "Economists had been predicting a major market correction for months before the real estate bubble finally burst.", tag: "Writing Task 2" },
          { sentence: "The university had been operating the particle accelerator for over thirty years before it was decommissioned.", tag: "Academic Reading" },
          { sentence: "I had been studying classical Arabic for two full years before I undertook fieldwork in Cairo.", tag: "Speaking Part 2" },
          { sentence: "The mining corporation had been extracting minerals illegally in the reserve for years before sanctions were imposed.", tag: "Writing Task 2" },
          { sentence: "Medical researchers had been testing candidate compounds for nearly a decade before discovering the effective antibody.", tag: "Academic Reading" },
          { sentence: "The factory had been discharging chemical residues into the aquifer for months before inspections revealed the contamination.", tag: "Writing Task 2" },
          { sentence: "The engine had been overheating intermittently for several days before the cylinder head cracked completely.", tag: "Reading Context" },
          { sentence: "Our debating team had been rehearsing arguments every evening for weeks before winning the championship.", tag: "Speaking Part 2" },
          { sentence: "The regional government had been subsidizing fossil fuels for generations before pivoting to wind power.", tag: "Writing Task 2" }
        ]
      },
      {
        title: "2. Explaining Past Visible Evidence / Consequences",
        description: "Providing the continuous antecedent reason for a visible past physical or structural condition.",
        examples: [
          { sentence: "The archaeologists were covered in fine dust because they had been excavating the trench all afternoon.", tag: "Academic Context" },
          { sentence: "The runner collapsed near the finish line because she had been pushing through severe dehydration.", tag: "Speaking Part 2" },
          { sentence: "The river water was muddy and turbid because heavy rain had been eroding upstream topsoil for days.", tag: "Reading Context" },
          { sentence: "My eyes were bloodshot during the lecture because I had been proofreading my thesis all night.", tag: "Speaking Part 1" },
          { sentence: "The soil was completely depleted of nutrients because intensive farming had been exhausting the land without crop rotation.", tag: "Writing Task 2" },
          { sentence: "The technicians were mentally exhausted because they had been troubleshooting the reactor glitch around the clock.", tag: "Academic Context" },
          { sentence: "The city streets were submerged in water because monsoon downpours had been lashing the coast since dawn.", tag: "Reading Context" },
          { sentence: "Her presentation was remarkably polished because she had been practicing with her supervisor throughout the week.", tag: "Speaking Part 2" },
          { sentence: "The servers overheated because high volumes of automated queries had been bombarding the database for hours.", tag: "Academic Context" },
          { sentence: "The forest undergrowth was bone-dry because a severe heatwave had been baking the region for two months.", tag: "Writing Task 2" }
        ]
      }
    ]
  },

  // ==========================================
  // 9. FUTURE SIMPLE (WILL & SHALL)
  // ==========================================
  {
    id: "future-simple",
    name: "Future Simple Tense (Will)",
    level: "B2 Core",
    formula: {
      affirmative: "Subject + will + Base Verb [e.g., Automation will transform employment]",
      negative: "Subject + will not (won't) + Base Verb [e.g., Subsidies will not suffice]",
      question: "Will + Subject + Base Verb? [e.g., Will renewable energy replace oil?]",
      passive: "Subject + will be + Past Participle [e.g., The policy will be implemented]"
    },
    overview: "Future Simple with 'will' is the primary grammatical structure for making formal predictions, academic hypotheses, proposing solutions in Writing Task 2, and spontaneous communication in Speaking.",
    examinerTips: "In Task 2, pair 'will' with adverbs of certainty/probability like *undoubtedly, inevitably, likely, arguably* to demonstrate academic hedging and sophisticated modal control.",
    commonMistakes: [
      "Using 'will' in subordinate time clauses (e.g., *'When the government will pass the law'* instead of *'When the government passes'*).",
      "Overusing absolute 'will' without academic hedging (e.g., *'This will solve all crime'* instead of *'This will likely alleviate...'*).",
      "Confusing 'will' (predictions/spontaneous) with 'present continuous' (fixed diary arrangements)."
    ],
    usages: [
      {
        title: "1. Formal Academic Predictions & Hedged Assertions in Task 2",
        description: "Forecasting the long-term societal, economic, or environmental consequences of current phenomena.",
        examples: [
          { sentence: "Artificial intelligence will undoubtedly reshape the fundamental skill requirements of future job markets.", tag: "Writing Task 2" },
          { sentence: "Without immediate intervention, rising sea levels will inevitably displace millions of coastal inhabitants.", tag: "Writing Task 2" },
          { sentence: "Investments in early childhood nutrition will yield profound economic dividends for future generations.", tag: "Writing Task 2" },
          { sentence: "The transition toward decentralized energy grids will likely enhance national energy security.", tag: "Writing Task 2" },
          { sentence: "Automating routine administrative workflows will enable healthcare workers to focus more on patient care.", tag: "Writing Task 2" },
          { sentence: "Urban congestion charges will effectively disincentivize private car usage in metropolitan cores.", tag: "Writing Task 2" },
          { sentence: "Climate change will exert immense pressure on global freshwater availability over the coming decades.", tag: "Writing Task 2" },
          { sentence: "Advances in quantum computing will revolutionize cryptographic security and drug discovery pipelines.", tag: "Writing Task 2" },
          { sentence: "Higher carbon taxation will encourage corporations to innovate cleaner production methodologies.", tag: "Writing Task 2" },
          { sentence: "Greater accessibility to broadband internet will bridge the educational divide between urban and rural youth.", tag: "Writing Task 2" }
        ]
      },
      {
        title: "2. Proposing Policy Solutions & Recommendations in Task 2",
        description: "Stating what governments, institutions, and citizens will accomplish through structured measures.",
        examples: [
          { sentence: "Subsidizing public transport will encourage commuters to leave private automobiles at home.", tag: "Writing Task 2" },
          { sentence: "Implementing vocational training programs will equip redundant workers with modern technical skills.", tag: "Writing Task 2" },
          { sentence: "Mandating energy-efficiency standards for new constructions will significantly curb urban emissions.", tag: "Writing Task 2" },
          { sentence: "Strict penalties on industrial polluters will deter corporations from dumping toxic waste into waterways.", tag: "Writing Task 2" },
          { sentence: "Investing in agricultural desalination will secure food production in arid and semi-arid zones.", tag: "Writing Task 2" },
          { sentence: "Diversifying national energy portfolios will insulate domestic economies against global price volatility.", tag: "Writing Task 2" },
          { sentence: "Introducing financial literacy into secondary school curricula will foster responsible personal spending habits.", tag: "Writing Task 2" },
          { sentence: "Expanding protected marine reserves will enable overexploited fish stocks to regenerate naturally.", tag: "Writing Task 2" },
          { sentence: "Enacting robust data privacy regulations will protect consumer autonomy in the digital economy.", tag: "Writing Task 2" },
          { sentence: "Providing universal access to mental health services will reduce societal healthcare burdens over time.", tag: "Writing Task 2" }
        ]
      },
      {
        title: "3. Spontaneous Offers & Decisions in Speaking",
        description: "Making immediate on-the-spot decisions, offers, or promises in conversational IELTS contexts.",
        examples: [
          { sentence: "If you need assistance with calibrating the software, I will gladly guide you through the process.", tag: "Speaking Part 1" },
          { sentence: "I will summarize the primary takeaways of our research group before the committee convenes.", tag: "Speaking Part 2" },
          { sentence: "That sounds like a fascinating documentary; I think I will watch it this weekend.", tag: "Speaking Part 1" },
          { sentence: "Wait a moment; I will fetch the printed survey questionnaires from the department office.", tag: "Speaking Part 1" },
          { sentence: "I will give you a concrete example from my own experience to illustrate this sociological trend.", tag: "Speaking Part 3" },
          { sentence: "If selected for this postgraduate fellowship, I will dedicate my efforts to renewable energy materials.", tag: "Speaking Part 2" },
          { sentence: "I will gladly elaborate on that point if the examiner requires additional contextual details.", tag: "Speaking Part 3" },
          { sentence: "Don't worry about reserving the study cubicle; I will handle the library booking right away.", tag: "Speaking Part 1" },
          { sentence: "I will outline the methodology in the next slide before analyzing the statistical findings.", tag: "Academic Presentation" },
          { sentence: "I think I will pursue a master's degree in public health once I complete my clinical licensing.", tag: "Speaking Part 1" }
        ]
      }
    ]
  },

  // ==========================================
  // 10. 'BE GOING TO' & IMMEDIATE FUTURE
  // ==========================================
  {
    id: "be-going-to",
    name: "'Be Going To' & Immediate Future",
    level: "B2 Core",
    formula: {
      affirmative: "Subject + is/am/are + going to + Base Verb [e.g., The reservoir is going to overflow]",
      negative: "Subject + is/am/are + not + going to + Base Verb [e.g., The plan is not going to succeed]",
      question: "Is/Am/Are + Subject + going to + Base Verb? [e.g., Are prices going to rise?]",
      immediate: "Subject + is/am/are + about to / on the verge of + Verb [e.g., It is about to collapse]"
    },
    overview: "'Be going to' is used when predictions are rooted in clear, observable present evidence, or when expressing prior intentions and pre-meditated plans. Phrases like 'be about to' and 'be on the verge of' express events on the immediate horizon.",
    examinerTips: "In Speaking Part 1 & 2, use 'be going to' when explaining goals and career intentions you have already deliberated on.",
    commonMistakes: [
      "Using 'will' when there is clear observable present physical evidence pointing to an inevitable outcome.",
      "Writing informal contractions like *'gonna'* in academic writing essays.",
      "Using 'be about to' with distant future time frames."
    ],
    usages: [
      {
        title: "1. Predictions Based on Observable Present Evidence",
        description: "Drawing immediate conclusions from current data, visible meteorological signs, or laboratory symptoms.",
        examples: [
          { sentence: "Look at the severe structural cracking along the foundation; the retaining wall is going to collapse.", tag: "Academic Context" },
          { sentence: "With current inventory levels dropping so rapidly, consumer prices are going to increase next quarter.", tag: "Writing Task 2" },
          { sentence: "The pressure gauge is rising beyond safety limits; the steam boiler is going to overheat.", tag: "Academic Context" },
          { sentence: "Given the unprecedented rate of polar melting, coastal lowlands are going to experience frequent tidal surges.", tag: "Writing Task 2" },
          { sentence: "Judging by the overwhelming survey response, the proposed elective course is going to be oversubscribed.", tag: "Academic Context" },
          { sentence: "The test tube liquid is turning dark blue, which means a chemical precipitation is going to occur.", tag: "Academic Reading" },
          { sentence: "With funding cuts already approved, the research department is going to downsize its auxiliary staff.", tag: "Academic Context" },
          { sentence: "Look at the dark clouds gathering along the mountain ridge; a violent thunderstorm is going to hit.", tag: "Speaking Part 1" },
          { sentence: "The economic indicators show negative growth for two quarters; the nation is going to enter a recession.", tag: "Writing Task 2" },
          { sentence: "Given his extraordinary academic track record, he is going to graduate at the top of his cohort.", tag: "Speaking Part 2" }
        ]
      },
      {
        title: "2. Premeditated Intentions & Personal Future Plans",
        description: "Expressing prior decisions and strategic intentions in Speaking Part 1 & 2.",
        examples: [
          { sentence: "After completing my undergraduate studies, I am going to pursue a master's degree in sustainable engineering.", tag: "Speaking Part 1" },
          { sentence: "Our university student union is going to launch a comprehensive mental health awareness campaign.", tag: "Speaking Part 2" },
          { sentence: "I am going to conduct sixty in-depth qualitative interviews for my doctoral fieldwork next spring.", tag: "Speaking Part 2" },
          { sentence: "The municipal government is going to construct three dedicated bicycle corridors through the downtown district.", tag: "Writing Task 2" },
          { sentence: "I am going to spend my summer vacation interning at an international environmental non-governmental organization.", tag: "Speaking Part 1" },
          { sentence: "The faculty is going to revise the curriculum to incorporate modern data science methodologies.", tag: "Academic Context" },
          { sentence: "We are going to submit our grant application to the National Science Foundation before Friday's deadline.", tag: "Speaking Part 1" },
          { sentence: "I am going to take a professional certification exam in project management next month.", tag: "Speaking Part 1" },
          { sentence: "The hospital trust is going to expand its emergency pediatric wing to accommodate rising patient numbers.", tag: "Reading Context" },
          { sentence: "I am going to learn Python programming because it is indispensable for modern statistical data analysis.", tag: "Speaking Part 2" }
        ]
      },
      {
        title: "3. Imminent Future (Be about to / On the verge of)",
        description: "Indicating events that will happen in the immediate next seconds, minutes, or days.",
        examples: [
          { sentence: "Biochemists believe they are on the verge of discovering a universal vaccine for respiratory viruses.", tag: "Academic Reading" },
          { sentence: "Silence in the auditorium, please; the keynote speaker is about to deliver her opening remarks.", tag: "Speaking Part 2" },
          { sentence: "The volcanic caldera is on the brink of erupting after seismic tremors intensified dramatically.", tag: "Reading Context" },
          { sentence: "The two telecom conglomerates are about to finalize a historic multi-billion-dollar merger.", tag: "Reading Context" },
          { sentence: "The rare white rhino species is on the verge of extinction unless poaching is eradicated.", tag: "Writing Task 2" },
          { sentence: "The laboratory centrifuge is about to finish its final cycle of high-speed separation.", tag: "Academic Context" },
          { sentence: "The economic coalition is on the point of signing a comprehensive free-trade agreement.", tag: "Writing Task 2" },
          { sentence: "I was about to leave the library when I finally located the rare reference manuscript.", tag: "Speaking Part 2" },
          { sentence: "The endangered wetland ecosystem is on the verge of irreversible ecological collapse.", tag: "Writing Task 2" },
          { sentence: "The academic journal is about to publish a groundbreaking retraction regarding the disputed clinical trial.", tag: "Academic Context" }
        ]
      }
    ]
  },

  // ==========================================
  // 11. FUTURE CONTINUOUS
  // ==========================================
  {
    id: "future-continuous",
    name: "Future Continuous Tense",
    level: "B2 Advanced",
    formula: {
      affirmative: "Subject + will be + Verb-ing [e.g., Delegates will be debating policy]",
      negative: "Subject + will not be + Verb-ing [e.g., We will not be utilizing the old facility]",
      question: "Will + Subject + be + Verb-ing? [e.g., Will you be using the equipment?]",
      passive: "Avoided in standard academic English"
    },
    overview: "Future Continuous depicts an action that will be actively in progress at a specific moment in the future, or describes scheduled routines and polite inquiries. In Task 1 line graph projections extending to future years (e.g. 2030, 2050), it is a vital tool for varying sentence structures.",
    examinerTips: "When Task 1 charts project trends into future years (e.g., *'By 2040, renewable sources will be providing over 60% of total energy'*), using Future Continuous adds high-level grammatical variety.",
    commonMistakes: [
      "Using Future Continuous for momentary events (e.g., *'The plane will be landing at 5'* instead of *'will land'* unless emphasizing the in-progress state).",
      "Using stative verbs in continuous form.",
      "Omitting 'be' (e.g., *'will studying'*)."
    ],
    usages: [
      {
        title: "1. Actions in Progress at a Specific Future Time / Projected Trends",
        description: "Describing activities that will be underway at a designated future milestone or throughout a future timeframe in Task 1.",
        examples: [
          { sentence: "At this exact time next week, international delegates will be debating the emissions treaty in Geneva.", tag: "Writing Task 2" },
          { sentence: "By the year 2040, millions of autonomous vehicles will be navigating metropolitan roadways worldwide.", tag: "Writing Task 2" },
          { sentence: "Throughout July and August, our oceanographic team will be collecting deep-sea coral core samples in the Pacific.", tag: "Academic Context" },
          { sentence: "In 2035, according to demographic projections, urban centers will be housing over seventy percent of the global population.", tag: "Writing Task 1" },
          { sentence: "At midnight tomorrow, the computational cluster will be executing complex weather simulation algorithms.", tag: "Academic Context" },
          { sentence: "Over the next decade, developing economies will be investing heavily in photovoltaic infrastructure.", tag: "Writing Task 2" },
          { sentence: "During the entire winter semester, I will be attending specialized seminars in international human rights law.", tag: "Speaking Part 1" },
          { sentence: "At 10:00 AM tomorrow, candidate students will be sitting their final clinical diagnostic examination.", tag: "Speaking Part 1" },
          { sentence: "By mid-century, renewable power installations will be generating the lion's share of worldwide electricity.", tag: "Writing Task 1" },
          { sentence: "This time next year, I will be working as a licensed environmental consultant for a renewable firm.", tag: "Speaking Part 2" }
        ]
      },
      {
        title: "2. Polite Inquiries & Expected Routine Events in Speaking",
        description: "Asking about someone's plans politely without imposing, or describing the natural flow of future events.",
        examples: [
          { sentence: "Will you be using the digital scanning apparatus this afternoon, or may I digitize my questionnaires?", tag: "Speaking Part 1" },
          { sentence: "Professor Vance will be delivering his customary open lecture on macroeconomics tomorrow morning.", tag: "Speaking Part 1" },
          { sentence: "Will you be attending the faculty welcome reception for international scholars on Thursday evening?", tag: "Speaking Part 1" },
          { sentence: "I will be passing by the university bookshop on my way home, so I can pick up the recommended course reader.", tag: "Speaking Part 1" },
          { sentence: "Will your research team be presenting findings at the annual biochemical congress in Berlin?", tag: "Speaking Part 2" },
          { sentence: "The department administrator will be circulating the finalized examination schedule via email later today.", tag: "Academic Context" },
          { sentence: "Will you be traveling back to your home country during the upcoming winter recess?", tag: "Speaking Part 1" },
          { sentence: "The library staff will be conducting guided reference orientation tours every afternoon this week.", tag: "Listening Section 1" },
          { sentence: "Will you be needing any specialized laboratory apparatus for your titration experiment tomorrow?", tag: "Speaking Part 1" },
          { sentence: "The admissions dean will be reviewing postgraduate bursary applications throughout the coming fortnight.", tag: "Academic Context" }
        ]
      }
    ]
  },

  // ==========================================
  // 12. FUTURE PERFECT & FUTURE PERFECT CONTINUOUS
  // ==========================================
  {
    id: "future-perfect",
    name: "Future Perfect Simple & Continuous",
    level: "B2 Advanced",
    formula: {
      perfectSimple: "Subject + will have + Past Participle [e.g., The project will have completed]",
      perfectContinuous: "Subject + will have been + Verb-ing [e.g., She will have been teaching for 20 years]",
      passive: "Subject + will have been + Past Participle [e.g., Roads will have been constructed]"
    },
    overview: "Future Perfect Simple looks back from a future vantage point to an action that will be completed *before or by* that time (*'By 2050, temperatures will have risen by 1.5 degrees'*). Future Perfect Continuous projects the ongoing, cumulative duration of an activity up to a designated future milestone.",
    examinerTips: "In Task 1 line graphs featuring future forecasts, sentences utilizing *'By 2030, production will have surpassed...'* provide the gold-standard demonstration of complex grammatical structures.",
    commonMistakes: [
      "Using Present Simple or Future Simple after 'by the year 2040' when expressing completed milestones.",
      "Confusing 'by the time' (takes Present Simple) with the main clause (takes Future Perfect).",
      "Using 'will have been' as passive when an active verb is intended."
    ],
    usages: [
      {
        title: "1. Future Completion Deadlines in Task 1 Projections (By [Future Date])",
        description: "Expressing target completions, capacity thresholds, or milestone dates in forecast charts.",
        examples: [
          { sentence: "By the year 2035, the municipality will have converted all public transit buses to hydrogen fuel cells.", tag: "Writing Task 1 / 2" },
          { sentence: "Demographers estimate that global population will have surpassed nine billion before the year 2045.", tag: "Writing Task 1 / 2" },
          { sentence: "By the end of this decade, artificial intelligence will have automated over forty percent of repetitive clerical tasks.", tag: "Writing Task 2" },
          { sentence: "According to the graph, solar generation will have overtaken coal power output by 2030.", tag: "Writing Task 1" },
          { sentence: "By the time the new medical facility opens in 2028, authorities will have invested fifty million pounds in equipment.", tag: "Writing Task 1" },
          { sentence: "The corporation projects that it will have eliminated all single-use plastics from packaging by next year.", tag: "Writing Task 2" },
          { sentence: "By 2040, electric vehicles will have captured more than sixty percent of the global automobile market share.", tag: "Writing Task 1" },
          { sentence: "Before the next general election, the government will have implemented comprehensive secondary education reforms.", tag: "Writing Task 2" },
          { sentence: "By the conclusion of the trial, the pharmaceutical firm will have administered the treatment to ten thousand volunteers.", tag: "Academic Context" },
          { sentence: "I will have submitted my complete doctoral dissertation before the international scholarship deadline expires.", tag: "Speaking Part 1" }
        ]
      },
      {
        title: "2. Cumulative Continuous Duration Up to a Future Point (Future Perfect Continuous)",
        description: "Calculating the total continuous duration of an ongoing occupation, residency, or study up to a future milestone.",
        examples: [
          { sentence: "By December, Professor Vance will have been teaching comparative sociology at this university for thirty years.", tag: "Speaking Part 2" },
          { sentence: "Next month, our research institute will have been monitoring this seismic fault line for half a century.", tag: "Academic Context" },
          { sentence: "By the time I graduate next summer, I will have been studying environmental biotechnology for five consecutive years.", tag: "Speaking Part 1" },
          { sentence: "By the end of the day, the automated drilling rig will have been boring through bedrock for forty-eight uninterrupted hours.", tag: "Academic Reading" },
          { sentence: "In 2030, the United Nations environmental committee will have been overseeing the global climate pact for twenty-five years.", tag: "Writing Task 2" },
          { sentence: "By midnight, the supercomputer will have been processing satellite climate data for three straight days.", tag: "Academic Context" },
          { sentence: "Next year, my parents will have been living in this coastal town for a quarter of a century.", tag: "Speaking Part 1" },
          { sentence: "By the time the clinical study concludes, the patients will have been receiving the therapeutic regimen for eighteen months.", tag: "Academic Context" },
          { sentence: "By next week, our team will have been developing the mobile educational application for over a year.", tag: "Speaking Part 2" },
          { sentence: "When he retires, Dr. Gallagher will have been managing the clinical genetics department for two decades.", tag: "Speaking Part 2" }
        ]
      }
    ]
  },

  // ==========================================
  // 13. ADVANCED IELTS TENSE STRUCTURES (CONDITIONALS, PASSIVES, TIME CLAUSES)
  // ==========================================
  {
    id: "advanced-structures",
    name: "Advanced IELTS Tense Structures",
    level: "B2 to C1",
    formula: {
      conditionals: "Zero, 1st, 2nd, 3rd, and Mixed Conditionals [e.g., If policy were implemented, emissions would fall / Had we known...]",
      timeClauses: "Time Connectors (When, As soon as, Once, Until, By the time) + Present Tense -> Main Clause in Future",
      passiveTenses: "Full Passive Paradigm across simple, continuous, perfect, and modal aspects",
      inversions: "Inverted structures with Had, Were, Should, Hardly, Scarcely, No sooner"
    },
    overview: "To achieve Band 7.0+ in Grammatical Range and Accuracy, candidates must demonstrate control over complex multi-clause sentences, including zero to mixed conditionals, formal conditional inversions, future time clauses, and sophisticated passive voice constructions.",
    examinerTips: "Use conditional sentences in Task 2 to hypothesize outcomes of policies (*'If governments subsidize green energy, carbon emissions will decline'*). Use passive tenses in Task 1 process diagrams to maintain academic objectivity.",
    commonMistakes: [
      "Putting 'will' or 'would' inside the 'if'-clause (e.g., *'If it will rain'* or *'If he would have known'*).",
      "Confusing Second Conditional (unreal present) with Third Conditional (unreal past).",
      "Forgetting subject-auxiliary inversion after negative adverbs (*'Hardly had he...'*)."
    ],
    usages: [
      {
        title: "1. Conditionals (Zero, 1st, 2nd, 3rd & Mixed) in IELTS Writing Task 2",
        description: "Constructing persuasive hypothetical arguments, counterfactuals, and cause-effect scenarios.",
        examples: [
          { sentence: "If municipal authorities invest in rapid transit infrastructure, downtown vehicular congestion will decrease noticeably.", tag: "1st Conditional (Task 2)" },
          { sentence: "If national governments imposed steeper carbon levies on heavy industries, multinational corporations would transition to cleaner energy.", tag: "2nd Conditional (Task 2)" },
          { sentence: "If safety inspectors had identified the metallurgical fault earlier, the industrial explosion would not have occurred.", tag: "3rd Conditional (Task 2)" },
          { sentence: "If she had passed her doctoral defense last month, she would be eligible to apply for the university professorship today.", tag: "Mixed Conditional (Past->Present)" },
          { sentence: "When ambient temperatures reach extreme thresholds, agricultural crop yields drop precipitously.", tag: "Zero Conditional (Task 2)" },
          { sentence: "If the educational institution were not so globally renowned, it would not have attracted such substantial research grants last year.", tag: "Mixed Conditional (Present->Past)" },
          { sentence: "Provided that citizens separate organic waste diligently, municipal recycling facilities can operate with maximal efficiency.", tag: "Conditional (Task 2)" },
          { sentence: "Unless international treaties mandate binding emissions caps, voluntary corporate pledges will fail to mitigate global warming.", tag: "Conditional (Task 2)" },
          { sentence: "If developing nations were given fair access to modern desalination patents, global water poverty would diminish substantially.", tag: "2nd Conditional (Task 2)" },
          { sentence: "Had the initial clinical trial included a broader demographic sample, the adverse side effects would have been discovered sooner.", tag: "3rd Conditional (Inversion)" }
        ]
      },
      {
        title: "2. Future Time Clauses (When, As soon as, Once, Until, By the time)",
        description: "Subordinate time clauses referring to the future using Present Simple / Present Perfect.",
        examples: [
          { sentence: "As soon as the laboratory results become available, the medical team will publish their findings in the journal.", tag: "Writing Task 2" },
          { sentence: "Once the trial participants have signed the informed consent documents, the psychometric evaluation will commence.", tag: "Academic Context" },
          { sentence: "The observational study will continue until the subjects reach the designated age milestone of eighteen.", tag: "Academic Reading" },
          { sentence: "By the time the economic relief packages take full effect, many small enterprises will have closed permanently.", tag: "Writing Task 2" },
          { sentence: "Before the delegation departs for the summit, the prime minister will finalize the trade negotiation draft.", tag: "Writing Task 2" },
          { sentence: "When raw materials arrive at the secondary refinement plant, they are immediately inspected for chemical purity.", tag: "Writing Task 1 (Process)" },
          { sentence: "The system will remain in diagnostic mode until all security credentials have been verified by the administrator.", tag: "Academic Context" },
          { sentence: "As soon as renewable battery storage becomes affordable, fossil-fuel power stations will be phased out.", tag: "Writing Task 2" },
          { sentence: "Once governments implement stricter data encryption standards, online banking fraud will decline significantly.", tag: "Writing Task 2" },
          { sentence: "By the time the environmental remediation project concludes, thousands of native trees will have been planted.", tag: "Writing Task 2" }
        ]
      },
      {
        title: "3. Formal Inversions & Subjunctive Structures (Band 8+ Excellence)",
        description: "Demonstrating sophisticated syntax via conditional inversions and mandative subjunctives.",
        examples: [
          { sentence: "Had the lead investigator known about the data discrepancies, he would have halted the experiment immediately.", tag: "Conditional Inversion" },
          { sentence: "Should you require further clarification regarding the methodology, please consult the supplementary appendices.", tag: "Formal Inversion" },
          { sentence: "Were the editorial board to discover academic plagiarism, the author's published paper would be retracted at once.", tag: "Conditional Inversion" },
          { sentence: "It is imperative that every laboratory assistant follow standardized biosafety protocols without exception.", tag: "Mandative Subjunctive" },
          { sentence: "It is crucial that the regulatory committee demand full transparency from pharmaceutical manufacturers.", tag: "Mandative Subjunctive" },
          { sentence: "Under no circumstances should hazardous chemical residues be disposed of through municipal sewer systems.", tag: "Negative Inversion" },
          { sentence: "Not only does early bilingual exposure enhance cognitive flexibility, but it also fosters greater intercultural empathy.", tag: "Negative Inversion (Task 2)" },
          { sentence: "Seldom have economists observed such rapid industrial modernization in a developing agrarian state.", tag: "Negative Inversion (Task 2)" },
          { sentence: "It is essential that policymakers consider the socioeconomic ramifications of automation before passing new tax laws.", tag: "Mandative Subjunctive" },
          { sentence: "Only by adopting circular economic models can human societies decouple economic growth from resource depletion.", tag: "Limiting Inversion (Task 2)" }
        ]
      },
      {
        title: "4. Academic Passive Voice Systems (Process Diagrams, Impersonal Reports, Participles)",
        description: "Applying passive structures across various tenses to achieve academic tone and objectivity in Task 1 & 2.",
        examples: [
          { sentence: "It is widely believed that early childhood bilingualism accelerates cognitive executive development.", tag: "Impersonal Passive (Task 2)" },
          { sentence: "The collected recyclable materials are transported to a central sorting facility where contaminants are removed.", tag: "Present Passive (Task 1)" },
          { sentence: "Substantial empirical evidence has been gathered over the past two decades to support the anthropogenic climate hypothesis.", tag: "Present Perfect Passive" },
          { sentence: "While the initial survey was being conducted, several methodological flaws were identified by the peer reviewers.", tag: "Past Continuous Passive" },
          { sentence: "The ancient monument is believed to have been constructed during the late Neolithic epoch.", tag: "Subject-Raised Passive" },
          { sentence: "Strict statistical controls must be applied to ensure that the experimental results remain free from researcher bias.", tag: "Modal Passive (Task 2)" },
          { sentence: "Having passed the rigorous clinical evaluation, the new pharmaceutical treatment was authorized for nationwide distribution.", tag: "Perfect Participle Active" },
          { sentence: "Having been tested under extreme temperatures and radiation, the titanium alloy exhibited superior structural resilience.", tag: "Perfect Participle Passive" },
          { sentence: "The contaminated soil should have been neutralized immediately after the chemical spillage occurred last week.", tag: "Past Modal Passive" },
          { sentence: "By the year 2035, more than half of municipal bus fleets will have been converted to zero-emission electric powertrains.", tag: "Future Perfect Passive (Task 1/2)" }
        ]
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = tensesData;
}
