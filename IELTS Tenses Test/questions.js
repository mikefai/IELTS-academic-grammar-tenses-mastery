// 100 MCQ Questions Covering All English Tenses for IELTS B2 Level
const tensesQuestions = [
  // --- SECTION 1: PRESENT TENSES (1-18) ---
  {
    id: 1,
    category: "Present Simple & Continuous",
    tense: "Present Simple vs Present Continuous",
    question: "According to recent survey data, the global consumption of renewable energy _______ steadily each decade.",
    options: [
      "is increasing",
      "increases",
      "has been increasing",
      "increase"
    ],
    answer: 1,
    explanation: "Present Simple ('increases') is used here to state a general factual trend or law-like observation described by statistical data over regular recurring intervals ('each decade')."
  },
  {
    id: 2,
    category: "Present Simple & Continuous",
    tense: "Present Continuous (Trends)",
    question: "Currently, more and more developing nations _______ substantial funds into solar infrastructure to reduce carbon emissions.",
    options: [
      "invest",
      "are investing",
      "have invested",
      "were investing"
    ],
    answer: 1,
    explanation: "'Currently' along with 'more and more' indicates an ongoing, progressive trend occurring around the present moment, requiring the Present Continuous ('are investing')."
  },
  {
    id: 3,
    category: "Present Simple & Continuous",
    tense: "Stative Verbs",
    question: "The research committee _______ that the proposed urban transit model is economically viable for mid-sized cities.",
    options: [
      "is believing",
      "believes",
      "is having believed",
      "believe"
    ],
    answer: 1,
    explanation: "'Believe' is a stative verb expressing a cognitive state/opinion and is not normally used in the continuous aspect in academic English."
  },
  {
    id: 4,
    category: "Present Simple & Continuous",
    tense: "Present Simple (Habits & Routines)",
    question: "The university library _______ its archives to postgraduate students every morning at eight o'clock.",
    options: [
      "is opening",
      "opens",
      "has opened",
      "open"
    ],
    answer: 1,
    explanation: "A fixed schedule or routine event ('every morning at eight o'clock') with a singular subject ('library') requires the third-person singular Present Simple ('opens')."
  },
  {
    id: 5,
    category: "Present Simple & Continuous",
    tense: "Present Continuous (Temporary Situations)",
    question: "Dr. Evans usually lectures in Hall A, but this semester he _______ his seminars online due to campus renovations.",
    options: [
      "conducts",
      "is conducting",
      "conducted",
      "has conducted"
    ],
    answer: 1,
    explanation: "'This semester' specifies a temporary situation contrasting with a general habit ('usually lectures'), which takes the Present Continuous ('is conducting')."
  },
  {
    id: 6,
    category: "Present Simple & Continuous",
    tense: "Stative vs Dynamic (Taste/Smell/Feel)",
    question: "The chemical sample _______ sweet, which suggests that an ester was formed during the reaction.",
    options: [
      "is smelling",
      "smells",
      "has been smelling",
      "smell"
    ],
    answer: 1,
    explanation: "When 'smell' denotes possessing a sensory quality or aroma (linking verb), it is stative and uses the Present Simple ('smells')."
  },
  {
    id: 7,
    category: "Present Simple & Continuous",
    tense: "Present Continuous (Annoyance / Frequent Habit)",
    question: "My research partner is so disorganized; he _______ his notes before group meetings.",
    options: [
      "is always misplacing",
      "always misplaces",
      "has always misplaced",
      "was always misplacing"
    ],
    answer: 0,
    explanation: "Present Continuous with 'always' ('is always misplacing') is used to express irritation or criticism regarding a repeated, annoying habit."
  },
  {
    id: 8,
    category: "Present Simple & Continuous",
    tense: "Present Simple (Formal Declarations/Reports)",
    question: "In the concluding chapter, the author _______ several policy reforms to combat juvenile delinquency.",
    options: [
      "is proposing",
      "proposes",
      "was proposing",
      "propose"
    ],
    answer: 1,
    explanation: "When describing the contents or arguments of books, articles, or research papers, academic convention uses the timeless Present Simple ('proposes')."
  },
  {
    id: 9,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect Simple (Life Experience)",
    question: "The environmental agency _______ several conservation programs in the Amazon basin since its establishment.",
    options: [
      "launched",
      "has launched",
      "is launching",
      "had launched"
    ],
    answer: 1,
    explanation: "The preposition 'since' connects an inception point in the past to the present time frame, necessitating the Present Perfect ('has launched')."
  },
  {
    id: 10,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect Continuous (Ongoing Duration)",
    question: "Economists _______ the long-term impact of artificial intelligence on employment for over five years now.",
    options: [
      "debate",
      "are debating",
      "have been debating",
      "debated"
    ],
    answer: 2,
    explanation: "'For over five years now' emphasizes an activity that started in the past, has continued without interruption, and is still actively in progress, requiring Present Perfect Continuous."
  },
  {
    id: 11,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect Simple (Completed Result with Present Relevance)",
    question: "The government _______ a new bill that mandates strict carbon emission limits on all heavy industries.",
    options: [
      "passed",
      "has passed",
      "had passed",
      "is passing"
    ],
    answer: 1,
    explanation: "Present Perfect ('has passed') focuses on the recent completion of an action with immediate legal impact and relevance in the present."
  },
  {
    id: 12,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect Simple vs Continuous (Quantity/Number of Times)",
    question: "Professor Higgins _______ four comprehensive articles on renewable energy policy this year.",
    options: [
      "has been publishing",
      "has published",
      "published",
      "is publishing"
    ],
    answer: 1,
    explanation: "When mentioning the specific number of completed outputs or achievements ('four comprehensive articles') within an unfinished time period ('this year'), use Present Perfect Simple."
  },
  {
    id: 13,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect Continuous (Evidence of Recent Activity)",
    question: "Look at the students' exhausted faces; they _______ on their dissertation proposals all night.",
    options: [
      "have worked",
      "worked",
      "have been working",
      "were working"
    ],
    answer: 2,
    explanation: "Present Perfect Continuous ('have been working') is used to explain visible present physical evidence or results resulting from an intensive recent continuous activity."
  },
  {
    id: 14,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect Simple (Unfinished Time Period)",
    question: "So far this semester, our tutorial group _______ any significant academic hurdles.",
    options: [
      "has not encountered",
      "did not encounter",
      "had not encountered",
      "is not encountering"
    ],
    answer: 0,
    explanation: "The time marker 'so far this semester' indicates a period leading up to right now, which requires the Present Perfect ('has not encountered')."
  },
  {
    id: 15,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect with Superlatives",
    question: "This is undoubtedly the most comprehensive literature review that I _______ on modern linguistics.",
    options: [
      "ever read",
      "have ever read",
      "had ever read",
      "am ever reading"
    ],
    answer: 1,
    explanation: "Sentences starting with superlative structures ('This is the most... that...') typically take the Present Perfect ('have ever read') to denote experience up to now."
  },
  {
    id: 16,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect vs Past Simple (Definite vs Indefinite Time)",
    question: "Although the team _______ the initial clinical trials in 2021, they have not yet received approval for mass distribution.",
    options: [
      "has finished",
      "finished",
      "had finished",
      "was finishing"
    ],
    answer: 1,
    explanation: "A specific, completed time marker in the past ('in 2021') strictly mandates the Past Simple ('finished'), not the Present Perfect."
  },
  {
    id: 17,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect Simple with Just/Already/Yet",
    question: "The university authorities _______ the revised examination timetable on the student portal.",
    options: [
      "have just uploaded",
      "just uploaded",
      "had just uploaded",
      "are just uploading"
    ],
    answer: 0,
    explanation: "'Just' combined with Present Perfect ('have just uploaded') emphasizes an action completed a very short time before the present moment with present relevance."
  },
  {
    id: 18,
    category: "Present Perfect & Continuous",
    tense: "Present Perfect Continuous with Stative Verb Exceptions",
    question: "The lead researcher _______ about the validity of the control group's data for several weeks.",
    options: [
      "has been knowing",
      "has known",
      "knows",
      "is knowing"
    ],
    answer: 1,
    explanation: "Even though 'for several weeks' expresses duration, 'know' is a stative verb that cannot take continuous form, so Present Perfect Simple ('has known') must be used."
  },

  // --- SECTION 2: PAST TENSES (19-40) ---
  {
    id: 19,
    category: "Past Simple & Continuous",
    tense: "Past Simple (Sequential Actions in Past)",
    question: "The scientist entered the laboratory, _______ the protective goggles, and began the titration procedure.",
    options: [
      "was putting on",
      "put on",
      "had put on",
      "has put on"
    ],
    answer: 1,
    explanation: "When narrating a consecutive sequence of completed past events (entered, put on, began), all verbs remain in the Past Simple ('put on')."
  },
  {
    id: 20,
    category: "Past Simple & Continuous",
    tense: "Past Continuous (Interrupted Action)",
    question: "While the sociologists _______ the respondents, the power grid suddenly failed across the testing facility.",
    options: [
      "interviewed",
      "were interviewing",
      "had interviewed",
      "have interviewed"
    ],
    answer: 1,
    explanation: "Past Continuous ('were interviewing') represents the longer background activity that was in progress when interrupted by a sudden past event ('failed')."
  },
  {
    id: 21,
    category: "Past Simple & Continuous",
    tense: "Past Continuous (Parallel Actions in Past)",
    question: "While Dr. Alvarez was recording the audio responses, his colleague _______ detailed notes on non-verbal cues.",
    options: [
      "took",
      "was taking",
      "had taken",
      "has taken"
    ],
    answer: 1,
    explanation: "When two continuous actions were happening simultaneously in the past connected by 'while', both verbs take the Past Continuous ('was taking')."
  },
  {
    id: 22,
    category: "Past Simple & Continuous",
    tense: "Past Simple with Historical Context",
    question: "The Industrial Revolution _______ profound socioeconomic transformations throughout Western Europe during the 18th century.",
    options: [
      "has triggered",
      "triggered",
      "was triggering",
      "had triggered"
    ],
    answer: 1,
    explanation: "Events completed within a closed historical epoch ('during the 18th century') require the Past Simple ('triggered')."
  },
  {
    id: 23,
    category: "Past Simple & Continuous",
    tense: "Past Continuous (Atmosphere / Scene Setting)",
    question: "When the conference commenced, delegates _______ enthusiastically about the latest aerospace breakthroughs.",
    options: [
      "debated",
      "were debating",
      "had debated",
      "have debated"
    ],
    answer: 1,
    explanation: "Setting the background scene or atmosphere at a specific precise moment in the past ('When the conference commenced') calls for the Past Continuous ('were debating')."
  },
  {
    id: 24,
    category: "Past Simple & Continuous",
    tense: "Past Simple (Duration in Completed Past)",
    question: "Marie Curie _______ in Paris for several decades before receiving her second Nobel Prize.",
    options: [
      "lived",
      "has lived",
      "is living",
      "was lived"
    ],
    answer: 0,
    explanation: "For a completed period of residence in the life of a historical figure who is no longer living, Past Simple ('lived') is used."
  },
  {
    id: 25,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect Simple (Earlier Past Action)",
    question: "By the time the symposium organizers realized the technical malfunction, the guest speaker _______ her presentation.",
    options: [
      "already completed",
      "had already completed",
      "has already completed",
      "was already completing"
    ],
    answer: 1,
    explanation: "'By the time' combined with a past clause ('realized') indicates that the presentation occurred and finished before that past point, requiring the Past Perfect ('had already completed')."
  },
  {
    id: 26,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect Continuous (Duration Before Past Event)",
    question: "The climatologists _______ data for twenty consecutive hours before the storm disrupted their weather satellite link.",
    options: [
      "had been gathering",
      "were gathering",
      "have gathered",
      "gathered"
    ],
    answer: 0,
    explanation: "An ongoing process extending over a duration ('for twenty consecutive hours') up to a specific event in the past ('before the storm disrupted...') requires Past Perfect Continuous."
  },
  {
    id: 27,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect Simple (Reason / Cause in Past)",
    question: "The dean rejected the grant application because the research team _______ sufficient preliminary findings.",
    options: [
      "did not provide",
      "had not provided",
      "has not provided",
      "was not providing"
    ],
    answer: 1,
    explanation: "The failure to provide findings occurred before the dean made the decision to reject the grant, so Past Perfect ('had not provided') clarifies the causal sequence."
  },
  {
    id: 28,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect with 'Hardly / Scarcely... when'",
    question: "Hardly _______ the questionnaire when the computer laboratory suffered an unexpected server blackout.",
    options: [
      "the students had submitted",
      "had the students submitted",
      "did the students submit",
      "were the students submitting"
    ],
    answer: 1,
    explanation: "Inverted negative adverbial structures ('Hardly had + subject + past participle ... when') require auxiliary inversion and Past Perfect."
  },
  {
    id: 29,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect Continuous (Visible Effect in Past)",
    question: "The archaeologists were covered in dust because they _______ ancient pottery fragments in the trench all afternoon.",
    options: [
      "had been excavating",
      "excavated",
      "have excavated",
      "were excavating"
    ],
    answer: 0,
    explanation: "Explaining a physical condition or evidence situated in the past ('were covered in dust') due to an intensive prior activity requires Past Perfect Continuous ('had been excavating')."
  },
  {
    id: 30,
    category: "Past Perfect & Continuous",
    tense: "Past Simple vs Past Perfect (Before / After)",
    question: "After the peer reviewers _______ the statistical methodology, the academic journal officially accepted the manuscript.",
    options: [
      "checked",
      "had checked",
      "were checking",
      "have checked"
    ],
    answer: 1,
    explanation: "Past Perfect ('had checked') emphasizes that the review was completely concluded prior to acceptance, adhering to rigorous academic narrative structure."
  },
  {
    id: 31,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect (Unfulfilled Intention / Expectation)",
    question: "The university _______ to construct a new biotechnology wing, but funding cuts forced them to postpone the project.",
    options: [
      "had hoped",
      "has hoped",
      "was hoping",
      "hopes"
    ],
    answer: 0,
    explanation: "Past Perfect with verbs of intention (hope, intend, plan, wish) indicates a past hope that was unfulfilled or thwarted ('had hoped')."
  },
  {
    id: 32,
    category: "Past Simple & Continuous",
    tense: "Past Continuous with Definite Past Time Point",
    question: "At 10:00 PM yesterday, the surveillance team _______ the migrating herd through infrared drone cameras.",
    options: [
      "tracked",
      "was tracking",
      "had tracked",
      "has been tracking"
    ],
    answer: 1,
    explanation: "At an exact point in past time ('At 10:00 PM yesterday'), an action was actively taking place, requiring the Past Continuous ('was tracking')."
  },
  {
    id: 33,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect with Time Clause 'Until'",
    question: "Until the publication of the 2019 white paper, few scholars _______ the correlation between sleep patterns and cognitive retention.",
    options: [
      "recognized",
      "had recognized",
      "have recognized",
      "were recognizing"
    ],
    answer: 1,
    explanation: "'Until + past noun phrase' establishes a past boundary; the state of non-recognition existed before that milestone, requiring Past Perfect ('had recognized')."
  },
  {
    id: 34,
    category: "Past Simple & Continuous",
    tense: "Used to vs Past Simple",
    question: "Prior to the digital era, students _______ encyclopedias manually in reference libraries for their assignments.",
    options: [
      "used to consult",
      "are used to consulting",
      "were used to consult",
      "use to consult"
    ],
    answer: 0,
    explanation: "'Used to + infinitive' denotes a discontinued past routine or habit that is no longer practiced in the modern era."
  },
  {
    id: 35,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect with 'It was the first time...'",
    question: "It was the first time that the young scholar _______ a plenary address before such an esteemed international audience.",
    options: [
      "delivered",
      "had delivered",
      "has delivered",
      "was delivering"
    ],
    answer: 1,
    explanation: "Expressions like 'It was the first/second time...' set in the past require the Past Perfect ('had delivered')."
  },
  {
    id: 36,
    category: "Past Simple & Continuous",
    tense: "Past Simple in Time Expressions (Ago)",
    question: "The primary fieldwork _______ three months ago, but the laboratory analysis is still underway.",
    options: [
      "concluded",
      "has concluded",
      "had concluded",
      "was concluding"
    ],
    answer: 0,
    explanation: "'Ago' always denotes a specific completed past time measured backwards from the present, mandating Past Simple ('concluded')."
  },
  {
    id: 37,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect Continuous (Negation / Stoppage)",
    question: "The engine _______ smoothly for very long before a severe oil leak caused it to seize up completely.",
    options: [
      "had not been running",
      "was not running",
      "has not been running",
      "did not run"
    ],
    answer: 0,
    explanation: "'For very long before [past event]' emphasizes duration and continuity prior to a sudden past stoppage, which uses Past Perfect Continuous ('had not been running')."
  },
  {
    id: 38,
    category: "Past Simple & Continuous",
    tense: "Past Simple with Inanimate Subjects (Academic Writing)",
    question: "The statistical correlation between dietary habits and cardiovascular diseases _______ evident across all age cohorts in the 1995 study.",
    options: [
      "became",
      "has become",
      "was becoming",
      "had become"
    ],
    answer: 0,
    explanation: "A historical finding locked to a specific past study ('in the 1995 study') is stated in the Past Simple ('became')."
  },
  {
    id: 39,
    category: "Past Perfect & Continuous",
    tense: "Past Perfect with 'No sooner... than'",
    question: "No sooner _______ the agreement than both parties began renegotiating the contractual clauses.",
    options: [
      "they had ratified",
      "had they ratified",
      "did they ratify",
      "were they ratifying"
    ],
    answer: 1,
    explanation: "'No sooner had + subject + past participle ... than' is an academic inversion pattern indicating two past actions happening in immediate succession."
  },
  {
    id: 40,
    category: "Past Simple & Continuous",
    tense: "Past Continuous vs Past Simple Nuance",
    question: "As the temperature _______, the crystal structures began to reform into a more stable hexagonal lattice.",
    options: [
      "was falling",
      "fell",
      "had fallen",
      "has fallen"
    ],
    answer: 0,
    explanation: "'As' here indicates a gradual, continuous transition in progress during which another event began to occur, best expressed with Past Continuous ('was falling')."
  },

  // --- SECTION 3: FUTURE FORMS (41-60) ---
  {
    id: 41,
    category: "Future Forms",
    tense: "Future Simple vs 'Be going to' (Evidence/Intention)",
    question: "Look at the dark clouds gathering over the coastal bay; a tropical storm _______ within the hour.",
    options: [
      "will hit",
      "is going to hit",
      "hits",
      "is hitting"
    ],
    answer: 1,
    explanation: "When a future prediction is grounded in tangible, observable present evidence ('Look at the dark clouds gathering'), English prefers 'be going to' ('is going to hit')."
  },
  {
    id: 42,
    category: "Future Forms",
    tense: "Future Continuous (Action in Progress in Future)",
    question: "At this exact time next week, the delegates _______ the environmental accords at the United Nations headquarters.",
    options: [
      "will sign",
      "will be signing",
      "will have signed",
      "sign"
    ],
    answer: 1,
    explanation: "'At this exact time next week' refers to an activity that will be actively ongoing at a specific moment in the future, requiring Future Continuous ('will be signing')."
  },
  {
    id: 43,
    category: "Future Forms",
    tense: "Future Perfect Simple (Completed by Future Deadline)",
    question: "By the end of the current fiscal year, the municipality _______ the construction of twenty new cycling lanes.",
    options: [
      "will complete",
      "will have completed",
      "is completing",
      "will be completing"
    ],
    answer: 1,
    explanation: "'By the end of [future time]' signifies a completion deadline before or by which an action will be finished, which takes the Future Perfect ('will have completed')."
  },
  {
    id: 44,
    category: "Future Forms",
    tense: "Future Perfect Continuous (Duration by Future Point)",
    question: "By December, Professor Vance _______ tenure-track sociology courses at this institution for thirty years.",
    options: [
      "will teach",
      "will be teaching",
      "will have been teaching",
      "has been teaching"
    ],
    answer: 2,
    explanation: "'By December ... for thirty years' projects the continuous duration of an activity up to a milestone in the future, necessitating Future Perfect Continuous ('will have been teaching')."
  },
  {
    id: 45,
    category: "Future Forms",
    tense: "Present Continuous for Fixed Future Arrangements",
    question: "The Minister of Higher Education _______ the newly refurbished engineering complex next Tuesday morning.",
    options: [
      "will inaugurate",
      "is inaugurating",
      "inaugurates",
      "is about to inaugurating"
    ],
    answer: 1,
    explanation: "A confirmed, pre-arranged official itinerary with specific time and participants ('next Tuesday morning') is standardly expressed with the Present Continuous ('is inaugurating')."
  },
  {
    id: 46,
    category: "Future Forms",
    tense: "Present Simple for Timetables / Schedules",
    question: "The express shuttle to the regional medical center _______ at 07:15 AM from platform 4.",
    options: [
      "is leaving",
      "leaves",
      "will leave",
      "is going to leave"
    ],
    answer: 1,
    explanation: "Official public transportation schedules, timetables, and recurring programs take the Present Simple ('leaves') even when referring to future events."
  },
  {
    id: 47,
    category: "Future Forms",
    tense: "Future Simple (Instant Decision / Spontaneous Offer)",
    question: "I see you are struggling to calibrate the spectrometer; I _______ you with the software settings.",
    options: [
      "am going to help",
      "will help",
      "help",
      "am helping"
    ],
    answer: 1,
    explanation: "A spontaneous, on-the-spot offer or willingness made at the moment of speaking requires Future Simple with 'will' ('will help')."
  },
  {
    id: 48,
    category: "Future Forms",
    tense: "Future Perfect Simple (Projections in Task 1/Academic Writing)",
    question: "Demographers project that the world population _______ nine billion before the year 2040.",
    options: [
      "will surpass",
      "will have surpassed",
      "is surpassing",
      "surpasses"
    ],
    answer: 1,
    explanation: "'Before the year 2040' marks a cutoff point by which the milestone is expected to have occurred, requiring Future Perfect ('will have surpassed')."
  },
  {
    id: 49,
    category: "Future Forms",
    tense: "Be about to + Infinitive (Immediate Future)",
    question: "Silence, please; the keynote speaker _______ her opening remarks to the auditorium.",
    options: [
      "is about to deliver",
      "will deliver",
      "is delivering",
      "delivers"
    ],
    answer: 0,
    explanation: "'Be about to + infinitive' denotes an action imminent in the immediate next seconds or minutes ('is about to deliver')."
  },
  {
    id: 50,
    category: "Future Forms",
    tense: "Future Continuous (Routine / Expected Normal Flow)",
    question: "Will you _______ the scanner later this afternoon? If not, I would like to digitize these survey sheets.",
    options: [
      "use",
      "be using",
      "have used",
      "be used"
    ],
    answer: 1,
    explanation: "'Will you be using...?' (Future Continuous) is polite academic phrasing inquiring about someone's existing plans without imposing or asking for a favour."
  },
  {
    id: 51,
    category: "Future Forms",
    tense: "Be on the verge of / point of",
    question: "Biochemists believe they are _______ a cure for this rare autoimmune condition.",
    options: [
      "on the verge of discovering",
      "about to discover",
      "to discover",
      "will discover"
    ],
    answer: 0,
    explanation: "'On the verge of + gerund' (-ing) is an advanced idiomatic structure indicating that an event or discovery is extremely close to happening."
  },
  {
    id: 52,
    category: "Future Forms",
    tense: "Future in the Past (Was/Were going to)",
    question: "We _______ our findings at the Paris conference, but our flight was cancelled due to air traffic control strikes.",
    options: [
      "will present",
      "were going to present",
      "are presenting",
      "had presented"
    ],
    answer: 1,
    explanation: "'Was/Were going to + infinitive' (Future in the Past) expresses a past plan or intention that could not be fulfilled due to subsequent circumstances."
  },
  {
    id: 53,
    category: "Future Forms",
    tense: "Future Continuous (Fixed Future Period)",
    question: "Throughout July and August, the research vessel _______ oceanographic samples in the Arctic Circle.",
    options: [
      "will be collecting",
      "will collect",
      "collects",
      "is collected"
    ],
    answer: 0,
    explanation: "'Throughout July and August' specifies an extended continuous duration in the future, best represented by the Future Continuous ('will be collecting')."
  },
  {
    id: 54,
    category: "Future Forms",
    tense: "Future Perfect Simple with Passive",
    question: "By next September, all outdated server architectures _______ with cloud-native infrastructure.",
    options: [
      "will replace",
      "will have replaced",
      "will have been replaced",
      "are replaced"
    ],
    answer: 2,
    explanation: "'By next September' indicates a future deadline, and 'server architectures' receives the action, requiring Future Perfect Passive ('will have been replaced')."
  },
  {
    id: 55,
    category: "Future Forms",
    tense: "Future Perfect Continuous (Duration Confirmation)",
    question: "Next month, our department head _______ this laboratory for a quarter of a century.",
    options: [
      "will manage",
      "will have been managing",
      "is managing",
      "will be managing"
    ],
    answer: 1,
    explanation: "'Next month ... for a quarter of a century' establishes the cumulative duration of an ongoing role reaching a milestone, requiring Future Perfect Continuous."
  },
  {
    id: 56,
    category: "Future Forms",
    tense: "Future Simple (Formal Prediction / IELTS Writing Task 2)",
    question: "Technological automation _______ undoubtedly reshape the skills demanded by future employment markets.",
    options: [
      "is going to",
      "will",
      "is about to",
      "shall"
    ],
    answer: 1,
    explanation: "In formal academic writing and predictions with adverbs of probability ('undoubtedly', 'inevitably'), 'will' is the standard modal future auxiliary."
  },
  {
    id: 57,
    category: "Future Forms",
    tense: "Be to + Infinitive (Formal Obligation / Schedule)",
    question: "The international summit _______ on Monday with an opening address by the Secretary-General.",
    options: [
      "is to commence",
      "commenced",
      "is commencing to",
      "will have commenced"
    ],
    answer: 0,
    explanation: "'Be + to + infinitive' ('is to commence') is formal journalistic and academic register used for official schedules and designated obligations."
  },
  {
    id: 58,
    category: "Future Forms",
    tense: "Future Simple with Stative Verbs",
    question: "I am confident that the university panel _______ your revised dissertation proposal next week.",
    options: [
      "is understanding",
      "will understand",
      "is to understanding",
      "will have been understanding"
    ],
    answer: 1,
    explanation: "'Understand' is a stative verb that cannot be used continuously. In a future prediction clause introduced by 'I am confident that...', use Future Simple ('will understand')."
  },
  {
    id: 59,
    category: "Future Forms",
    tense: "Future Continuous vs Simple Nuance",
    question: "Don't phone the laboratory at 1:00 PM; the staff _______ their lunch break.",
    options: [
      "will take",
      "will be taking",
      "take",
      "have taken"
    ],
    answer: 1,
    explanation: "At the specific time mentioned (1:00 PM), the action of taking lunch will be in progress, so Future Continuous ('will be taking') is correct."
  },
  {
    id: 60,
    category: "Future Forms",
    tense: "Future Perfect Simple with Negation",
    question: "Unless additional funds arrive, the researchers _______ the second phase of the trial by autumn.",
    options: [
      "will not finish",
      "will not have finished",
      "do not finish",
      "are not finishing"
    ],
    answer: 1,
    explanation: "'By autumn' denotes a completion deadline; expressing failure to complete the task prior to this time requires Future Perfect Simple ('will not have finished')."
  },

  // --- SECTION 4: TIME CLAUSES & CONDITIONAL TENSES (61-80) ---
  {
    id: 61,
    category: "Time Clauses & Conditionals",
    tense: "Future Time Clauses (Present Simple after 'when / as soon as')",
    question: "As soon as the laboratory results _______ available, the medical team will publish their findings.",
    options: [
      "will become",
      "become",
      "are becoming",
      "became"
    ],
    answer: 1,
    explanation: "In subordinate time clauses starting with 'as soon as', 'when', 'until', 'before', or 'after', the Present Simple ('become') must be used instead of 'will'."
  },
  {
    id: 62,
    category: "Time Clauses & Conditionals",
    tense: "Future Time Clauses (Present Perfect after 'once')",
    question: "Once the participants _______ the consent forms, the psychometric evaluation will commence.",
    options: [
      "will sign",
      "have signed",
      "will have signed",
      "signed"
    ],
    answer: 1,
    explanation: "In time clauses introduced by 'once' referring to the future, the Present Perfect ('have signed') emphasizes the necessity of completing the prerequisite action first."
  },
  {
    id: 63,
    category: "Time Clauses & Conditionals",
    tense: "First Conditional (Real Present / Future Possibility)",
    question: "If the local council _______ investments in public transport, traffic congestion in the city center will inevitably worsen.",
    options: [
      "will reduce",
      "reduces",
      "reduced",
      "had reduced"
    ],
    answer: 1,
    explanation: "In a First Conditional 'if'-clause referring to real future possibilities, use Present Simple ('reduces'), paired with 'will + verb' in the main clause."
  },
  {
    id: 64,
    category: "Time Clauses & Conditionals",
    tense: "Second Conditional (Hypothetical / Unreal Present)",
    question: "If governments _______ stricter tax penalties on high-polluting corporations, global emissions would decline rapidly.",
    options: [
      "impose",
      "imposed",
      "had imposed",
      "would impose"
    ],
    answer: 1,
    explanation: "In a Second Conditional structure describing an unreal or hypothetical present scenario, the 'if'-clause requires the Past Simple ('imposed') while the main clause uses 'would + verb'."
  },
  {
    id: 65,
    category: "Time Clauses & Conditionals",
    tense: "Third Conditional (Hypothetical Past / Regret)",
    question: "If the engineering team _______ the stress sensors earlier, the structural failure would not have occurred.",
    options: [
      "checked",
      "had checked",
      "would check",
      "have checked"
    ],
    answer: 1,
    explanation: "Third Conditional discusses hypothetical past events. The 'if'-clause takes the Past Perfect ('had checked') and the result clause takes 'would have + past participle'."
  },
  {
    id: 66,
    category: "Time Clauses & Conditionals",
    tense: "Mixed Conditional (Past Cause -> Present Result)",
    question: "If she _______ her doctoral defense last month, she would be eligible to apply for the professorship today.",
    options: [
      "passed",
      "had passed",
      "would pass",
      "has passed"
    ],
    answer: 1,
    explanation: "Mixed Conditional type: an unfulfilled past condition ('had passed last month') has a direct consequence on the present situation ('would be eligible today')."
  },
  {
    id: 67,
    category: "Time Clauses & Conditionals",
    tense: "Mixed Conditional (Present State -> Past Result)",
    question: "If the institution _______ so reputable in the scientific community, it would not have attracted such substantial research grants last year.",
    options: [
      "were not",
      "had not been",
      "is not",
      "would not be"
    ],
    answer: 0,
    explanation: "A permanent or general present state ('If the institution were not so reputable') causing a past outcome ('would not have attracted... last year') uses 'were/was' in the condition."
  },
  {
    id: 68,
    category: "Time Clauses & Conditionals",
    tense: "Conditional Inversion (Had he known...)",
    question: "_______ known about the impending budget reductions, the director would have scaled down the exploratory project.",
    options: [
      "If had he",
      "Had he",
      "Did he",
      "Should he"
    ],
    answer: 1,
    explanation: "Formal academic conditional inversion for Third Conditional replaces 'If he had known' with 'Had he known'."
  },
  {
    id: 69,
    category: "Time Clauses & Conditionals",
    tense: "Conditional Inversion (Should you require...)",
    question: "_______ any further clarification regarding the methodology, please do not hesitate to contact the department administrator.",
    options: [
      "Should you require",
      "If you required",
      "Had you required",
      "Were you requiring"
    ],
    answer: 0,
    explanation: "'Should + subject + infinitive' ('Should you require') is formal first-conditional inversion equivalent to 'If you require'."
  },
  {
    id: 70,
    category: "Time Clauses & Conditionals",
    tense: "Conditional Inversion (Were they to...)",
    question: "_______ to discover discrepancies in the data, the editorial board would retract the published article immediately.",
    options: [
      "Were the reviewers",
      "If the reviewers",
      "Had the reviewers",
      "Should the reviewers"
    ],
    answer: 0,
    explanation: "Inverted Second Conditional: 'Were + subject + to-infinitive' ('Were the reviewers to discover') expresses a formal hypothetical condition."
  },
  {
    id: 71,
    category: "Time Clauses & Conditionals",
    tense: "Time Clause with 'Until'",
    question: "The participants will remain in the observation chamber until the heart rate monitors _______ a return to baseline levels.",
    options: [
      "will indicate",
      "indicate",
      "indicated",
      "are indicating"
    ],
    answer: 1,
    explanation: "In future time clauses with 'until', use Present Simple ('indicate'), not future with 'will'."
  },
  {
    id: 72,
    category: "Time Clauses & Conditionals",
    tense: "Time Clause with 'By the time'",
    question: "By the time the emergency response units _______ at the chemical spill site, the hazardous vapors will have dissipated.",
    options: [
      "arrive",
      "will arrive",
      "arrived",
      "have arrived"
    ],
    answer: 0,
    explanation: "In clauses starting with 'by the time' referring to future situations, the verb is in Present Simple ('arrive'), while the main clause uses Future Perfect."
  },
  {
    id: 73,
    category: "Time Clauses & Conditionals",
    tense: "Zero Conditional (Scientific Fact)",
    question: "When water _______ a temperature of 100 degrees Celsius at sea level, it boils and transforms into steam.",
    options: [
      "will reach",
      "reaches",
      "reached",
      "is reaching"
    ],
    answer: 1,
    explanation: "Zero Conditional describes universal scientific facts and general truths using Present Simple in both clauses ('reaches ... boils')."
  },
  {
    id: 74,
    category: "Time Clauses & Conditionals",
    tense: "Subjunctive / 'It is crucial that...'",
    question: "It is imperative that every researcher _______ the ethical guidelines stipulated by the institutional review board.",
    options: [
      "follows",
      "follow",
      "followed",
      "is following"
    ],
    answer: 1,
    explanation: "The mandative subjunctive following adjectives like 'imperative', 'crucial', or 'essential' takes the base form of the verb without third-person -s ('follow')."
  },
  {
    id: 75,
    category: "Time Clauses & Conditionals",
    tense: "Wish / If only (Present Regret)",
    question: "Many developing nations wish they _______ access to modern desalination technology to alleviate acute water shortages.",
    options: [
      "have",
      "had",
      "have had",
      "would have had"
    ],
    answer: 1,
    explanation: "'Wish + Past Simple' ('had') is used to express a desire for a present situation to be different from reality."
  },
  {
    id: 76,
    category: "Time Clauses & Conditionals",
    tense: "Wish / If only (Past Regret)",
    question: "The conservationists wish the local authorities _______ the ancient woodland from commercial development last year.",
    options: [
      "protected",
      "had protected",
      "would protect",
      "have protected"
    ],
    answer: 1,
    explanation: "'Wish + Past Perfect' ('had protected') expresses regret about an action or omission in the past ('last year')."
  },
  {
    id: 77,
    category: "Time Clauses & Conditionals",
    tense: "As if / As though",
    question: "The patient behaved as though he _______ the potential side effects of the experimental treatment.",
    options: [
      "did not understand",
      "had not understood",
      "does not understand",
      "will not understand"
    ],
    answer: 0,
    explanation: "'As though + Past Simple' ('did not understand') describes an unreal or hypothetical impression in the past."
  },
  {
    id: 78,
    category: "Time Clauses & Conditionals",
    tense: "It's high time + Past Simple",
    question: "It is high time that policymakers _______ decisive steps to mitigate greenhouse gas emissions.",
    options: [
      "take",
      "took",
      "have taken",
      "will take"
    ],
    answer: 1,
    explanation: "'It is (high/about) time + subject + Past Simple' ('took') is an idiomatic subjunctive structure meaning an action is overdue."
  },
  {
    id: 79,
    category: "Time Clauses & Conditionals",
    tense: "Provided that / As long as",
    question: "Students may utilize the specialized recording studio provided they _______ the equipment safely and efficiently.",
    options: [
      "will operate",
      "operate",
      "operated",
      "had operated"
    ],
    answer: 1,
    explanation: "'Provided (that)' functions as a conditional connector ('if/on condition that') and takes Present Simple ('operate') when referring to future conditions."
  },
  {
    id: 80,
    category: "Time Clauses & Conditionals",
    tense: "Unless + Present Simple",
    question: "The statistical model cannot deliver accurate forecasts unless all missing values _______ properly imputed.",
    options: [
      "will be",
      "are",
      "were",
      "have been"
    ],
    answer: 1,
    explanation: "'Unless' ('if not') introduces a conditional clause that requires Present Simple ('are') to express general truth or condition."
  },

  // --- SECTION 5: PASSIVE TENSES & ADVANCED IELTS STRUCTURES (81-100) ---
  {
    id: 81,
    category: "Passive Voice & Academic Tenses",
    tense: "Present Continuous Passive (Process Description)",
    question: "In IELTS Writing Task 1 process diagrams: Currently, the collected recyclable plastic _______ into fine pellets in the secondary processing unit.",
    options: [
      "is shredding",
      "is being shredded",
      "has shredded",
      "was being shredded"
    ],
    answer: 1,
    explanation: "Describing an ongoing stage in an active industrial process requires the Present Continuous Passive ('is being shredded')."
  },
  {
    id: 82,
    category: "Passive Voice & Academic Tenses",
    tense: "Present Perfect Passive",
    question: "Substantial empirical evidence _______ over the past two decades to support the hypothesis of global climate change.",
    options: [
      "has accumulated",
      "has been accumulated",
      "is accumulated",
      "had been accumulated"
    ],
    answer: 1,
    explanation: "'Over the past two decades' links past to present, and evidence is the object receiving the action of collection, taking Present Perfect Passive ('has been accumulated')."
  },
  {
    id: 83,
    category: "Passive Voice & Academic Tenses",
    tense: "Past Continuous Passive",
    question: "When the health inspector visited the plant, raw effluent _______ directly into the adjacent river.",
    options: [
      "discharged",
      "was discharging",
      "was being discharged",
      "had discharged"
    ],
    answer: 2,
    explanation: "At the moment of the past visit, the action of discharging was continuously happening to the effluent, requiring Past Continuous Passive ('was being discharged')."
  },
  {
    id: 84,
    category: "Passive Voice & Academic Tenses",
    tense: "Past Perfect Passive",
    question: "Before the statutory audit commenced, all financial irregularities _______ by the internal oversight team.",
    options: [
      "had been resolved",
      "were resolved",
      "have been resolved",
      "resolved"
    ],
    answer: 0,
    explanation: "'Before the statutory audit commenced' indicates that the resolution was fully completed prior to the audit, requiring Past Perfect Passive ('had been resolved')."
  },
  {
    id: 85,
    category: "Passive Voice & Academic Tenses",
    tense: "Future Simple Passive",
    question: "The complete findings of this longitudinal study _______ in an upcoming special edition of the journal.",
    options: [
      "will publish",
      "will be published",
      "are published",
      "will have published"
    ],
    answer: 1,
    explanation: "A future action where the subject ('findings') is acted upon requires Future Simple Passive ('will be published')."
  },
  {
    id: 86,
    category: "Passive Voice & Academic Tenses",
    tense: "Future Perfect Passive",
    question: "By the year 2035, more than half of urban transport fleets _______ to zero-emission electric engines.",
    options: [
      "will convert",
      "will have converted",
      "will have been converted",
      "are being converted"
    ],
    answer: 2,
    explanation: "'By the year 2035' sets a future deadline for a passive action ('fleets' will be converted by authorities), requiring Future Perfect Passive ('will have been converted')."
  },
  {
    id: 87,
    category: "Passive Voice & Academic Tenses",
    tense: "Impersonal Passive / Reporting Verbs",
    question: "It _______ that language acquisition occurs most rapidly during early childhood.",
    options: [
      "is widely assumed",
      "is widely assuming",
      "has widely assumed",
      "was widely assuming"
    ],
    answer: 0,
    explanation: "'It is + past participle + that-clause' ('It is widely assumed that...') is standard academic hedging and impersonal reporting in IELTS writing."
  },
  {
    id: 88,
    category: "Passive Voice & Academic Tenses",
    tense: "Subject-Raised Impersonal Passive",
    question: "The ancient monument is believed _______ constructed around 2500 BCE.",
    options: [
      "to be",
      "to have been",
      "having been",
      "being"
    ],
    answer: 1,
    explanation: "When reporting a past event with a present belief ('is believed'), the perfect infinitive passive ('to have been constructed') must be used."
  },
  {
    id: 89,
    category: "Passive Voice & Academic Tenses",
    tense: "Modal Passive (Present / General)",
    question: "Strict statistical controls must _______ to ensure that the experimental results remain free from researcher bias.",
    options: [
      "apply",
      "be applied",
      "have applied",
      "be applying"
    ],
    answer: 1,
    explanation: "Modal verb of obligation ('must') with a passive subject ('controls') takes 'must + be + past participle' ('must be applied')."
  },
  {
    id: 90,
    category: "Passive Voice & Academic Tenses",
    tense: "Modal Passive (Past Deductions / Regrets)",
    question: "The contaminated soil should _______ immediately after the chemical spillage occurred last week.",
    options: [
      "be neutralized",
      "have been neutralized",
      "neutralize",
      "have neutralized"
    ],
    answer: 1,
    explanation: "'Should have been + past participle' expresses an unfulfilled past obligation or recommended action in the passive voice."
  },
  {
    id: 91,
    category: "Passive Voice & Academic Tenses",
    tense: "Gerund Passive",
    question: "The junior researchers resented _______ from the critical decision-making meetings.",
    options: [
      "excluding",
      "being excluded",
      "to be excluded",
      "having excluded"
    ],
    answer: 1,
    explanation: "The verb 'resent' is followed by a gerund. In the passive voice, it takes 'being + past participle' ('being excluded')."
  },
  {
    id: 92,
    category: "Passive Voice & Academic Tenses",
    tense: "Perfect Participle Clause (Active vs Passive)",
    question: "_______ the rigorous clinical evaluation, the vaccine was approved for widespread administration.",
    options: [
      "Having passed",
      "Passing",
      "Having been passed",
      "Being passed"
    ],
    answer: 0,
    explanation: "The vaccine itself underwent and completed the evaluation successfully (active relationship), so the active perfect participle ('Having passed') is correct."
  },
  {
    id: 93,
    category: "Passive Voice & Academic Tenses",
    tense: "Passive Perfect Participle Clause",
    question: "_______ by extreme temperatures and intense radiation, the alloy displayed remarkable structural integrity.",
    options: [
      "Having tested",
      "Having been tested",
      "Testing",
      "To be tested"
    ],
    answer: 1,
    explanation: "The alloy was tested by the researchers (passive relationship) before it displayed integrity, requiring the Passive Perfect Participle ('Having been tested')."
  },
  {
    id: 94,
    category: "Reported Speech & Backshift",
    tense: "Reported Speech (Tense Backshift)",
    question: "The spokesperson announced that the company _______ an investment of ten million dollars into green hydrogen.",
    options: [
      "is authorizing",
      "had authorized",
      "authorizes",
      "will authorize"
    ],
    answer: 1,
    explanation: "When reporting past speech with a past reporting verb ('announced'), the past simple/present perfect from direct speech backshifts to Past Perfect ('had authorized')."
  },
  {
    id: 95,
    category: "Reported Speech & Backshift",
    tense: "Reported Speech (Universal Truth Exception)",
    question: "The physics lecturer reminded us that light _______ faster than sound in a vacuum.",
    options: [
      "travelled",
      "travels",
      "had travelled",
      "was travelling"
    ],
    answer: 1,
    explanation: "When reporting timeless universal scientific laws or immutable facts, the verb retains the Present Simple ('travels') despite a past reporting verb."
  },
  {
    id: 96,
    category: "Reported Speech & Backshift",
    tense: "Future in Reported Speech (Will -> Would)",
    question: "The city council confirmed that the new subway line _______ operational by the following December.",
    options: [
      "will be",
      "would be",
      "is to be",
      "has been"
    ],
    answer: 1,
    explanation: "In reported speech introduced by past verb 'confirmed', direct future 'will be' backshifts to conditional 'would be'."
  },
  {
    id: 97,
    category: "Present Perfect vs Past Simple Nuances",
    tense: "Academic Research Verbs",
    question: "In their landmark 2008 paper, Smith and Johnson _______ that cognitive fatigue directly impacts decision-making speed.",
    options: [
      "have demonstrated",
      "demonstrated",
      "had demonstrated",
      "are demonstrating"
    ],
    answer: 1,
    explanation: "Academic citation referencing a specific year/paper ('In their landmark 2008 paper') uses Past Simple ('demonstrated'), not Present Perfect."
  },
  {
    id: 98,
    category: "Present Perfect vs Past Simple Nuances",
    tense: "Current Field Consensus (General Research)",
    question: "Recent studies _______ that regular physical exercise significantly improves memory consolidation in older adults.",
    options: [
      "demonstrated",
      "have demonstrated",
      "had demonstrated",
      "were demonstrating"
    ],
    answer: 1,
    explanation: "When citing 'Recent studies' without a specific historic date to establish the current state of knowledge, Present Perfect ('have demonstrated') is required."
  },
  {
    id: 99,
    category: "Passive Voice & Academic Tenses",
    tense: "Causative Form (Have something done)",
    question: "The research institute _______ all laboratory sensors calibrated by certified technicians once every quarter.",
    options: [
      "has",
      "is having",
      "had",
      "will have"
    ],
    answer: 0,
    explanation: "A regular recurring arrangement ('once every quarter') using the causative structure 'have + object + past participle' takes the Present Simple ('has')."
  },
  {
    id: 100,
    category: "Mixed Tenses & Time Clauses",
    tense: "Complex Time Anchor (Past Perfect -> Past Simple -> Future in Past)",
    question: "After the committee _______ the revised proposal, they agreed that the trial would proceed as planned.",
    options: [
      "has reviewed",
      "had reviewed",
      "reviewed",
      "was reviewing"
    ],
    answer: 1,
    explanation: "The review occurred prior to the past agreement ('they agreed'), requiring the Past Perfect ('had reviewed') to clearly sequence the events."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = tensesQuestions;
}
