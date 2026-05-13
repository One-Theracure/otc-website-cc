export type Lang = "en" | "hi" | "mr";

export type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  "nav.about": "About",
  "nav.platform": "Platform",
  "nav.flow": "Ecosystem",
  "nav.solutions": "Solutions",
  "nav.trust": "Trust",
  "nav.team": "Team",
  "nav.cta": "Request a Demo",

  // Hero
  "hero.eyebrow": "The AI Healthcare Operating System",
  "hero.sub":
    "We connect doctors, clinics, hospitals and families, so a patient's story is never lost between visits.",
  "hero.human": "One patient. One story. One connected care journey.",
  "hero.cta.primary": "Request a Demo",
  "hero.cta.secondary": "Explore Platform",
  "hero.proof.a": "Born from India's healthcare complexity.",
  "hero.proof.b": "Built for fragmented care systems worldwide.",

  // About
  "about.eyebrow": "Why we exist",
  "about.title": "A patient is not one appointment. A patient is a story.",
  "about.subtitle":
    "Healthcare needs memory, not more disconnected software. We are building the layer that remembers, so care does not start over every time.",
  "about.mission.label": "Our mission",
  "about.mission.body":
    "One visit becomes the start of a connected system. The clinic generates care. The companion continues it.",
  "about.pair.0.a": "Less chaos",
  "about.pair.0.b": "More structure",
  "about.pair.1.a": "Less friction",
  "about.pair.1.b": "More trust",
  "about.pair.2.a": "Less burden",
  "about.pair.2.b": "More clarity",
  "about.pair.3.a": "Less noise",
  "about.pair.3.b": "More continuity",
  "about.backed": "Backed and recognized by",

  // Problem
  "problem.eyebrow": "What we saw",
  "problem.title": "Care should not get lost between papers, people and places.",
  "problem.subtitle":
    "Doctors write in one system. Patients carry another. Follow-ups slip through the gap.",
  "problem.0.t": "Documentation burden",
  "problem.0.d": "Doctors spend half their day typing, not treating.",
  "problem.1.t": "Scattered records",
  "problem.1.d": "Reports live in folders, phones, WhatsApp and memory.",
  "problem.2.t": "Missed follow-ups",
  "problem.2.d": "Care ends the moment the patient walks out.",
  "problem.3.t": "Broken referrals",
  "problem.3.d": "The next doctor starts from zero.",
  "problem.4.t": "Low care visibility",
  "problem.4.d": "Clinics cannot see what they are missing.",
  "problem.5.t": "Emergency confusion",
  "problem.5.d": "When minutes matter, no one has the full picture.",
  "problem.closing":
    "Care should not depend on what a patient remembers in a moment of panic.",

  // Platform
  "platform.eyebrow": "The platform",
  "platform.title": "One platform. Two sides of the same care.",
  "platform.subtitle":
    "The wedge is workflow. The care layer is the opportunity.",
  "platform.clinic.tag": "ClinicOS",
  "platform.clinic.title": "For doctors, clinics and hospitals.",
  "platform.clinic.desc":
    "For the doctor's hands. Notes, records, follow-ups and referrals, in one calm flow.",
  "platform.clinic.f0": "EHR / EMR Co-Pilot",
  "platform.clinic.f1": "Speech recognition",
  "platform.clinic.f2": "Clinical decision support",
  "platform.clinic.f3": "ICD-10 and CPT coding",
  "platform.clinic.f4": "Refer letters and after-visit summaries",
  "platform.clinic.f5": "ABDM / ABHA-ready records",
  "platform.clinic.price": "From",
  "platform.clinic.priceUnit": "/ doctor / month.",
  "platform.patient.tag": "AI Health Companion",
  "platform.patient.title": "For patients and families.",
  "platform.patient.desc":
    "For the patient's life. A timeline, reminders, summaries and a profile that travels with them.",
  "platform.patient.f0": "Symptom intake",
  "platform.patient.f1": "Suggested specialist",
  "platform.patient.f2": "Digital health locker",
  "platform.patient.f3": "Medication and follow-up reminders",
  "platform.patient.f4": "Family and emergency profiles",
  "platform.patient.f5": "Multilingual after-visit summaries",

  // Product showcase
  "product.eyebrow": "The product",
  "product.title": "Care, before the visit, during the visit, and long after.",
  "product.subtitle":
    "Most tools solve a moment. One TheraCure connects the journey.",
  "product.0.eyebrow": "Before visit",
  "product.0.title": "The doctor knows the patient before they walk in.",
  "product.0.desc":
    "Symptoms, history and records reach the doctor first, so the visit starts with context, not questions.",
  "product.1.eyebrow": "During visit",
  "product.1.title": "AI writes. The doctor decides.",
  "product.1.desc":
    "AI handles the typing. The doctor stays with the patient, fully in control.",
  "product.2.eyebrow": "After visit",
  "product.2.title": "The visit ends. The care does not.",
  "product.2.desc":
    "Summaries, reminders, referrals and labs continue beyond the clinic door.",

  // Ecosystem
  "flow.eyebrow": "Ecosystem flow",
  "flow.title": "From one visit to one continuous story.",
  "flow.subtitle": "The visit is the beginning of care, not the end of it.",
  "flow.0": "Symptoms",
  "flow.1": "AI intake",
  "flow.2": "Right doctor",
  "flow.3": "Clinical visit",
  "flow.4": "Structured summary",
  "flow.5": "Patient record",
  "flow.6": "Follow-up loop",
  "flow.7": "Labs / pharmacy",
  "flow.8": "Continuous care",

  // Solutions
  "solutions.eyebrow": "Features",
  "solutions.title": "Seven pieces. One thread.",
  "solutions.subtitle": "Each part makes the next one stronger.",
  "solutions.0.t": "EHR / EMR Co-Pilot",
  "solutions.0.d": "The record writes itself, so the doctor doesn't have to.",
  "solutions.1.t": "Speech recognition",
  "solutions.1.d": "A multilingual scribe that listens through the noise.",
  "solutions.2.t": "Clinical decision support",
  "solutions.2.d": "Drug-interaction alerts and evidence the doctor can trust.",
  "solutions.3.t": "Integrated coding",
  "solutions.3.d": "ICD-10 and CPT codes the clinic does not have to chase.",
  "solutions.4.t": "Refer letters and after-visit summaries",
  "solutions.4.d": "Follow-up the patient actually understands.",
  "solutions.5.t": "Patient continuity layer",
  "solutions.5.d": "An app that helps families ask, find, and follow up.",
  "solutions.6.t": "ABHA integration",
  "solutions.6.d": "Records ready for the Ayushman Bharat Digital Mission.",

  // Differentiation
  "diff.eyebrow": "Beyond point solutions",
  "diff.title": "Where others stop, we keep going.",
  "diff.subtitle":
    "Most tools end with the consultation. We stay with the patient.",
  "diff.0.a": "Not just notes.",
  "diff.0.b": "The whole care loop.",
  "diff.1.a": "Not just records.",
  "diff.1.b": "Action a family can follow.",
  "diff.2.a": "Not just software.",
  "diff.2.b": "A care layer between every visit.",
  "diff.3.a": "Not just one country.",
  "diff.3.b": "A model for fragmented care anywhere.",

  // Trust
  "trust.eyebrow": "Trust and safety",
  "trust.title": "AI helps. Doctors decide.",
  "trust.subtitle": "We support clinicians. We never replace them.",
  "trust.headline": "AI drafts. The doctor signs. The care is owned.",
  "trust.body":
    "Nothing leaves the room without a physician. Every suggestion can be explained. Every action is traceable.",
  "trust.tag": "Doctor in the loop, by design.",
  "trust.0.t": "Doctor in the loop",
  "trust.0.d": "Every clinical action needs the physician's nod.",
  "trust.1.t": "Clinical safety guardrails",
  "trust.1.d": "Conservative by default. Clear paths to escalate.",
  "trust.2.t": "Explainable suggestions",
  "trust.2.d": "Every recommendation traces back to its source.",
  "trust.3.t": "Privacy-first records",
  "trust.3.d": "End-to-end encryption, role-based access, ABDM-grade.",
  "trust.4.t": "Human review before action",
  "trust.4.d": "AI drafts. Clinicians decide. Nothing leaves without sign-off.",
  "trust.5.t": "Safe patient guidance",
  "trust.5.d": "We educate and triage. We do not claim to diagnose.",

  // Global Positioning
  "global.eyebrow": "Global by design",
  "global.title": "Built in complexity. Made for the world.",
  "global.subtitle":
    "Fragmented care is not only an Indian problem. It is everyone's problem.",
  "global.0.t": "Born in high-volume care",
  "global.0.d":
    "Built for busy clinics where time is short and context goes missing.",
  "global.1.t": "Built for multilingual reality",
  "global.1.d":
    "Care conversations are human and messy. We meet them where they are.",
  "global.2.t": "Made for fragmented systems",
  "global.2.d":
    "Records, referrals, labs and follow-ups, on one connected layer.",
  "global.closing":
    "Built where healthcare is most complex. Designed for everywhere care is fragmented.",

  // Team
  "team.eyebrow": "The people behind it",
  "team.title": "Built by lived experience. Guided by clinical excellence.",
  "team.subtitle":
    "One TheraCure combines founder conviction with senior clinical guidance to build healthcare infrastructure that is human, safe and practical.",
  "team.0.role": "Founder, One TheraCure",
  "team.0.cred": "",
  "team.1.role": "Advisor, One TheraCure",
  "team.1.cred": "Padma Shri. Surgical Oncologist.",
  "team.2.role": "Advisor, One TheraCure",
  "team.2.cred": "Director, Himedia Labs.",

  // Founder story
  "founder.eyebrow": "Founder story",
  "founder.title": "Why this exists.",
  "founder.p1":
    "One TheraCure began with a family, a hospital, and a question no one could answer.",
  "founder.p2":
    "No patient should be lost between symptoms, doctors, papers and follow-ups.",
  "founder.p3":
    "A global healthcare company, born from a very human problem.",
  "founder.role": "Founder and CEO, One TheraCure",

  // Final CTA
  "cta.eyebrow": "Build with us",
  "cta.title": "Build the future of connected healthcare.",
  "cta.subtitle":
    "We are working with a small group of clinics, hospitals and partners shaping the care layer with us.",
  "cta.primary": "Request a Demo",
  "cta.secondary": "Contact Founder",

  // Footer
  "footer.tagline": "The AI Healthcare Operating System",
  "footer.desc":
    "One care layer for doctors, clinics, hospitals and families. Worldwide.",
  "footer.col.platform": "Platform",
  "footer.col.platform.0": "ClinicOS",
  "footer.col.platform.1": "Patient App",
  "footer.col.platform.2": "Ecosystem",
  "footer.col.platform.3": "Features",
  "footer.col.company": "Company",
  "footer.col.company.0": "About",
  "footer.col.company.1": "Safety",
  "footer.col.company.2": "Team",
  "footer.col.company.3": "Contact",
  "footer.col.social": "Follow us",
  "footer.rights": "All rights reserved.",
  "footer.made": "Made in India.",

  // Language switch
  "lang.label": "Language",
};

const hi: Dict = {
  "nav.about": "हमारे बारे में",
  "nav.platform": "प्लेटफ़ॉर्म",
  "nav.flow": "ईकोसिस्टम",
  "nav.solutions": "समाधान",
  "nav.trust": "विश्वास",
  "nav.team": "टीम",
  "nav.cta": "डेमो का अनुरोध करें",

  "hero.eyebrow": "The AI Healthcare Operating System",
  "hero.sub":
    "हम डॉक्टरों, क्लीनिकों, अस्पतालों और परिवारों को जोड़ते हैं, ताकि किसी मरीज़ की कहानी विज़िट के बीच कभी न खोए।",
  "hero.human": "एक मरीज़। एक कहानी। एक जुड़ी हुई केयर यात्रा।",
  "hero.cta.primary": "डेमो का अनुरोध करें",
  "hero.cta.secondary": "प्लेटफ़ॉर्म देखें",
  "hero.proof.a": "भारत की हेल्थकेयर जटिलता से जन्मा।",
  "hero.proof.b": "दुनिया भर की बिखरी केयर प्रणालियों के लिए बना।",

  "about.eyebrow": "हम क्यों हैं",
  "about.title": "मरीज़ एक अपॉइंटमेंट नहीं है। मरीज़ एक कहानी है।",
  "about.subtitle":
    "हम वह परत बना रहे हैं जो याद रखती है, ताकि केयर हर बार शुरू से न शुरू हो।",
  "about.mission.label": "हमारा मिशन",
  "about.mission.body":
    "हेल्थकेयर भूल जाती है। परिवार पीड़ा सहते हैं। One TheraCure कहानी को जोड़ता है।",
  "about.pair.0.a": "कम अव्यवस्था",
  "about.pair.0.b": "अधिक संरचना",
  "about.pair.1.a": "कम रुकावट",
  "about.pair.1.b": "अधिक भरोसा",
  "about.pair.2.a": "कम बोझ",
  "about.pair.2.b": "अधिक स्पष्टता",
  "about.pair.3.a": "कम शोर",
  "about.pair.3.b": "अधिक निरंतरता",
  "about.backed": "द्वारा समर्थित और मान्यता प्राप्त",

  "problem.eyebrow": "जो हमने देखा",
  "problem.title": "केयर काग़ज़, लोगों और जगहों के बीच खोनी नहीं चाहिए।",
  "problem.subtitle":
    "डॉक्टर एक सिस्टम में लिखते हैं। मरीज़ दूसरा साथ ले जाते हैं। फ़ॉलो-अप बीच में फिसल जाते हैं।",
  "problem.0.t": "दस्तावेज़ का बोझ",
  "problem.0.d": "डॉक्टर अपना आधा दिन इलाज की जगह टाइप करने में बिताते हैं।",
  "problem.1.t": "बिखरे रिकॉर्ड",
  "problem.1.d": "रिपोर्ट फ़ोल्डर, फ़ोन, WhatsApp और याददाश्त में बिखरी होती हैं।",
  "problem.2.t": "छूटे फ़ॉलो-अप",
  "problem.2.d": "मरीज़ बाहर निकलते ही केयर ख़त्म हो जाती है।",
  "problem.3.t": "टूटे रेफ़रल",
  "problem.3.d": "अगला डॉक्टर शून्य से शुरू करता है।",
  "problem.4.t": "कम केयर विज़िबिलिटी",
  "problem.4.d": "क्लीनिक देख ही नहीं पाते कि क्या छूट रहा है।",
  "problem.5.t": "आपात स्थिति में भ्रम",
  "problem.5.d": "जब मिनट मायने रखते हैं, किसी के पास पूरी तस्वीर नहीं होती।",
  "problem.closing":
    "केयर इस पर निर्भर नहीं होनी चाहिए कि घबराहट में मरीज़ क्या याद रख पाए।",

  "platform.eyebrow": "प्लेटफ़ॉर्म",
  "platform.title": "एक प्लेटफ़ॉर्म। एक ही केयर के दो पहलू।",
  "platform.subtitle": "क्लीनिक केयर बनाता है। कम्पेनियन उसे घर तक ले जाता है।",
  "platform.clinic.tag": "ClinicOS",
  "platform.clinic.title": "डॉक्टरों, क्लीनिकों और अस्पतालों के लिए।",
  "platform.clinic.desc":
    "डॉक्टर के हाथों के लिए। नोट्स, रिकॉर्ड, फ़ॉलो-अप और रेफ़रल, एक शांत प्रवाह में।",
  "platform.clinic.f0": "EHR / EMR सह-पायलट",
  "platform.clinic.f1": "वाणी पहचान",
  "platform.clinic.f2": "क्लीनिकल निर्णय सहायता",
  "platform.clinic.f3": "ICD-10 और CPT कोडिंग",
  "platform.clinic.f4": "रेफ़र पत्र और विज़िट सारांश",
  "platform.clinic.f5": "ABDM / ABHA-तैयार रिकॉर्ड",
  "platform.clinic.price": "केवल",
  "platform.clinic.priceUnit": "/ डॉक्टर / माह।",
  "platform.patient.tag": "AI Health Companion",
  "platform.patient.title": "मरीज़ों और परिवारों के लिए।",
  "platform.patient.desc":
    "मरीज़ की ज़िंदगी के लिए। एक टाइमलाइन, रिमाइंडर, सारांश और एक प्रोफ़ाइल जो साथ चलती है।",
  "platform.patient.f0": "लक्षण दर्ज करना",
  "platform.patient.f1": "सुझाया गया विशेषज्ञ",
  "platform.patient.f2": "डिजिटल हेल्थ लॉकर",
  "platform.patient.f3": "दवा और फ़ॉलो-अप रिमाइंडर",
  "platform.patient.f4": "परिवार और इमरजेंसी प्रोफ़ाइल",
  "platform.patient.f5": "बहुभाषी विज़िट सारांश",

  "product.eyebrow": "उत्पाद",
  "product.title": "विज़िट से पहले, विज़िट के दौरान, और लंबे समय बाद की केयर।",
  "product.subtitle":
    "अधिकांश सॉफ़्टवेयर कंसल्टेशन पर ख़त्म होता है। हम कहानी को जारी रखते हैं।",
  "product.0.eyebrow": "विज़िट से पहले",
  "product.0.title": "मरीज़ के अंदर आने से पहले डॉक्टर उसे जानता है।",
  "product.0.desc":
    "लक्षण, इतिहास और रिकॉर्ड डॉक्टर तक पहले पहुँचते हैं, ताकि विज़िट सवालों से नहीं, संदर्भ से शुरू हो।",
  "product.1.eyebrow": "विज़िट के दौरान",
  "product.1.title": "एआई लिखता है। डॉक्टर निर्णय लेता है।",
  "product.1.desc":
    "एआई टाइपिंग संभालता है। डॉक्टर मरीज़ के साथ रहता है, पूरी तरह नियंत्रण में।",
  "product.2.eyebrow": "विज़िट के बाद",
  "product.2.title": "विज़िट ख़त्म होती है। केयर नहीं।",
  "product.2.desc":
    "सारांश, रिमाइंडर, रेफ़रल और लैब क्लीनिक के दरवाज़े के बाद भी चलते रहते हैं।",

  "flow.eyebrow": "ईकोसिस्टम प्रवाह",
  "flow.title": "एक विज़िट से एक निरंतर कहानी तक।",
  "flow.subtitle": "विज़िट केयर का अंत नहीं, शुरुआत है।",
  "flow.0": "लक्षण",
  "flow.1": "एआई इनटेक",
  "flow.2": "सही डॉक्टर",
  "flow.3": "क्लीनिकल विज़िट",
  "flow.4": "संरचित सारांश",
  "flow.5": "मरीज़ रिकॉर्ड",
  "flow.6": "फ़ॉलो-अप लूप",
  "flow.7": "लैब / फार्मेसी",
  "flow.8": "निरंतर केयर",

  "solutions.eyebrow": "विशेषताएँ",
  "solutions.title": "सात हिस्से। एक धागा।",
  "solutions.subtitle": "हर हिस्सा अगले को मज़बूत करता है।",
  "solutions.0.t": "EHR / EMR सह-पायलट",
  "solutions.0.d": "रिकॉर्ड ख़ुद लिख जाता है, ताकि डॉक्टर को न लिखना पड़े।",
  "solutions.1.t": "वाणी पहचान",
  "solutions.1.d": "एक बहुभाषी स्क्राइब जो शोर के बीच भी सुनता है।",
  "solutions.2.t": "क्लीनिकल निर्णय सहायता",
  "solutions.2.d": "दवा-इंटरैक्शन अलर्ट और प्रमाण जिन पर डॉक्टर भरोसा कर सके।",
  "solutions.3.t": "एकीकृत कोडिंग",
  "solutions.3.d": "ICD-10 और CPT कोड जिनके पीछे क्लीनिक को भागना न पड़े।",
  "solutions.4.t": "रेफ़र पत्र और विज़िट सारांश",
  "solutions.4.d": "ऐसा फ़ॉलो-अप जो मरीज़ सच में समझे।",
  "solutions.5.t": "मरीज़ निरंतरता परत",
  "solutions.5.d": "एक ऐप जो परिवारों को पूछने, खोजने और फ़ॉलो-अप में मदद करे।",
  "solutions.6.t": "ABHA एकीकरण",
  "solutions.6.d": "आयुष्मान भारत डिजिटल मिशन के लिए तैयार रिकॉर्ड।",

  "diff.eyebrow": "बिखरे समाधानों से आगे",
  "diff.title": "जहाँ बाक़ी रुकते हैं, हम चलते रहते हैं।",
  "diff.subtitle": "अधिकांश टूल कंसल्टेशन पर ख़त्म होते हैं। हम मरीज़ के साथ रहते हैं।",
  "diff.0.a": "केवल नोट्स नहीं।",
  "diff.0.b": "पूरा केयर लूप।",
  "diff.1.a": "केवल रिकॉर्ड नहीं।",
  "diff.1.b": "ऐसी कार्रवाई जिसे परिवार फ़ॉलो कर सके।",
  "diff.2.a": "केवल सॉफ़्टवेयर नहीं।",
  "diff.2.b": "हर विज़िट के बीच एक केयर परत।",
  "diff.3.a": "केवल एक देश नहीं।",
  "diff.3.b": "कहीं भी बिखरी केयर के लिए एक मॉडल।",

  "trust.eyebrow": "विश्वास और सुरक्षा",
  "trust.title": "एआई मदद करता है। डॉक्टर निर्णय लेते हैं।",
  "trust.subtitle": "हम चिकित्सकों का साथ देते हैं। हम उनकी जगह कभी नहीं लेते।",
  "trust.headline": "एआई ड्राफ़्ट करता है। डॉक्टर हस्ताक्षर करते हैं। केयर अपनी होती है।",
  "trust.body":
    "बिना चिकित्सक के कमरे से कुछ बाहर नहीं जाता। हर सुझाव की व्याख्या हो सकती है। हर क्रिया का निशान रहता है।",
  "trust.tag": "डिज़ाइन से डॉक्टर-इन-द-लूप।",
  "trust.0.t": "डॉक्टर-इन-द-लूप",
  "trust.0.d": "हर क्लीनिकल क्रिया के लिए चिकित्सक की मंज़ूरी ज़रूरी।",
  "trust.1.t": "क्लीनिकल सुरक्षा सीमाएँ",
  "trust.1.d": "डिफ़ॉल्ट से सावधान। बढ़ाने के स्पष्ट रास्ते।",
  "trust.2.t": "व्याख्यात्मक सुझाव",
  "trust.2.d": "हर सिफ़ारिश अपने स्रोत तक खोजी जा सकती है।",
  "trust.3.t": "गोपनीयता-प्रथम रिकॉर्ड",
  "trust.3.d": "एंड-टू-एंड एन्क्रिप्शन, भूमिका-आधारित पहुँच, ABDM-स्तर।",
  "trust.4.t": "क्रिया से पहले मानवीय समीक्षा",
  "trust.4.d": "एआई ड्राफ़्ट करता है। चिकित्सक निर्णय लेते हैं। बिना मंज़ूरी कुछ नहीं।",
  "trust.5.t": "सुरक्षित मरीज़ मार्गदर्शन",
  "trust.5.d": "हम शिक्षित और ट्राइएज करते हैं। हम निदान का दावा नहीं करते।",

  "global.eyebrow": "डिज़ाइन से वैश्विक",
  "global.title": "जटिलता में बना। दुनिया के लिए बना।",
  "global.subtitle":
    "बिखरी हुई केयर केवल भारत की समस्या नहीं है। यह सबकी समस्या है।",
  "global.0.t": "उच्च-मात्रा केयर में जन्मा",
  "global.0.d":
    "व्यस्त क्लीनिकों के लिए बना जहाँ समय कम और संदर्भ अक्सर ग़ायब होता है।",
  "global.1.t": "बहुभाषी वास्तविकता के लिए बना",
  "global.1.d":
    "केयर बातचीत मानवीय और अव्यवस्थित होती है। हम उन्हें वहीं मिलते हैं जहाँ वे हैं।",
  "global.2.t": "बिखरी प्रणालियों के लिए बना",
  "global.2.d":
    "रिकॉर्ड, रेफ़रल, लैब और फ़ॉलो-अप, एक जुड़ी हुई परत पर।",
  "global.closing":
    "अगर केयर यहाँ जुड़ सकती है, तो कहीं भी जुड़ सकती है।",

  "team.eyebrow": "इसके पीछे के लोग",
  "team.title": "जीते हुए अनुभव से बना। क्लीनिकल उत्कृष्टता से निर्देशित।",
  "team.subtitle":
    "One TheraCure संस्थापक की दृढ़ता और वरिष्ठ क्लीनिकल मार्गदर्शन को मिलाकर ऐसी हेल्थकेयर संरचना बनाता है जो मानवीय, सुरक्षित और व्यावहारिक हो।",
  "team.0.role": "संस्थापक, One TheraCure",
  "team.0.cred": "",
  "team.1.role": "सलाहकार, One TheraCure",
  "team.1.cred": "पद्म श्री। सर्जिकल ऑन्कोलॉजिस्ट।",
  "team.2.role": "सलाहकार, One TheraCure",
  "team.2.cred": "निदेशक, हाईमीडिया लैब्स।",

  "founder.eyebrow": "संस्थापक की कहानी",
  "founder.title": "यह क्यों है।",
  "founder.p1":
    "One TheraCure एक परिवार, एक अस्पताल और एक ऐसे सवाल से शुरू हुआ जिसका जवाब किसी के पास नहीं था।",
  "founder.p2":
    "कोई भी मरीज़ लक्षणों, डॉक्टरों, काग़ज़ों और फ़ॉलो-अप के बीच खोना नहीं चाहिए।",
  "founder.p3":
    "एक वैश्विक हेल्थकेयर कंपनी, एक बहुत ही मानवीय समस्या से जन्मी।",
  "founder.role": "संस्थापक और CEO, One TheraCure",

  "cta.eyebrow": "हमारे साथ बनाएँ",
  "cta.title": "जुड़ी हुई हेल्थकेयर का भविष्य बनाएँ।",
  "cta.subtitle":
    "One TheraCure के साथ साझेदारी करें ताकि निरंतर, एआई-सहायक केयर असली क्लीनिकल अभ्यास तक पहुँचे।",
  "cta.primary": "डेमो का अनुरोध करें",
  "cta.secondary": "संस्थापक से संपर्क करें",

  "footer.tagline": "The AI Healthcare Operating System",
  "footer.desc":
    "डॉक्टरों, क्लीनिकों, अस्पतालों और परिवारों के लिए एक केयर परत। दुनिया भर में।",
  "footer.col.platform": "प्लेटफ़ॉर्म",
  "footer.col.platform.0": "ClinicOS",
  "footer.col.platform.1": "Patient App",
  "footer.col.platform.2": "ईकोसिस्टम",
  "footer.col.platform.3": "विशेषताएँ",
  "footer.col.company": "कंपनी",
  "footer.col.company.0": "हमारे बारे में",
  "footer.col.company.1": "सुरक्षा",
  "footer.col.company.2": "टीम",
  "footer.col.company.3": "संपर्क",
  "footer.col.social": "हमें फॉलो करें",
  "footer.rights": "सभी अधिकार सुरक्षित।",
  "footer.made": "भारत में निर्मित।",

  "lang.label": "भाषा",
};

const mr: Dict = {
  "nav.about": "आमच्याबद्दल",
  "nav.platform": "प्लॅटफॉर्म",
  "nav.flow": "इकोसिस्टम",
  "nav.solutions": "उपाय",
  "nav.trust": "विश्वास",
  "nav.team": "टीम",
  "nav.cta": "डेमोची विनंती करा",

  "hero.eyebrow": "The AI Healthcare Operating System",
  "hero.sub":
    "आम्ही डॉक्टर, क्लिनिक, रुग्णालये आणि कुटुंबांना जोडतो, जेणेकरून रुग्णाची कथा भेटींमध्ये कधीच हरवू नये.",
  "hero.human": "एक रुग्ण. एक कथा. एक जोडलेली केअर यात्रा.",
  "hero.cta.primary": "डेमोची विनंती करा",
  "hero.cta.secondary": "प्लॅटफॉर्म पाहा",
  "hero.proof.a": "भारताच्या हेल्थकेअर जटिलतेतून जन्मलेला.",
  "hero.proof.b": "जगभरातल्या विखुरलेल्या केअर प्रणालींसाठी बनवलेला.",

  "about.eyebrow": "आम्ही का आहोत",
  "about.title": "रुग्ण म्हणजे एक भेट नाही. रुग्ण म्हणजे एक कथा.",
  "about.subtitle":
    "आम्ही ती परत बांधत आहोत जी लक्षात ठेवते, जेणेकरून केअर प्रत्येक वेळी नव्याने सुरू होऊ नये.",
  "about.mission.label": "आमचे ध्येय",
  "about.mission.body":
    "हेल्थकेअर विसरते. कुटुंबे भोगतात. One TheraCure कथा जोडतो.",
  "about.pair.0.a": "कमी गोंधळ",
  "about.pair.0.b": "अधिक रचना",
  "about.pair.1.a": "कमी अडथळा",
  "about.pair.1.b": "अधिक विश्वास",
  "about.pair.2.a": "कमी ओझे",
  "about.pair.2.b": "अधिक स्पष्टता",
  "about.pair.3.a": "कमी गोंगाट",
  "about.pair.3.b": "अधिक सातत्य",
  "about.backed": "द्वारा समर्थित आणि मान्यताप्राप्त",

  "problem.eyebrow": "जे आम्ही पाहिले",
  "problem.title": "केअर कागद, माणसे आणि जागांमध्ये हरवू नये.",
  "problem.subtitle":
    "डॉक्टर एका सिस्टममध्ये लिहितात. रुग्ण दुसरी सोबत नेतात. फॉलो-अप मधेच निसटतात.",
  "problem.0.t": "दस्तऐवजाचे ओझे",
  "problem.0.d": "डॉक्टर अर्धा दिवस उपचाराऐवजी टायपिंगमध्ये घालवतात.",
  "problem.1.t": "विखुरलेले रेकॉर्ड्स",
  "problem.1.d": "रिपोर्ट फोल्डर, फोन, WhatsApp आणि स्मरणात विखुरलेले असतात.",
  "problem.2.t": "चुकलेले फॉलो-अप",
  "problem.2.d": "रुग्ण बाहेर पडताच केअर संपते.",
  "problem.3.t": "तुटलेले रेफरल",
  "problem.3.d": "पुढचा डॉक्टर शून्यापासून सुरू करतो.",
  "problem.4.t": "कमी केअर दृश्यमानता",
  "problem.4.d": "क्लिनिकना दिसतच नाही की काय निसटत आहे.",
  "problem.5.t": "आपत्कालीन गोंधळ",
  "problem.5.d": "जेव्हा मिनिटे महत्त्वाची असतात, तेव्हा कोणाकडेही पूर्ण चित्र नसते.",
  "problem.closing":
    "केअर रुग्णाला घाबरून काय आठवते यावर अवलंबून नसावी.",

  "platform.eyebrow": "प्लॅटफॉर्म",
  "platform.title": "एक प्लॅटफॉर्म. एकाच केअरच्या दोन बाजू.",
  "platform.subtitle": "क्लिनिक केअर तयार करते. कम्पॅनियन ती घरापर्यंत नेतो.",
  "platform.clinic.tag": "ClinicOS",
  "platform.clinic.title": "डॉक्टर, क्लिनिक आणि रुग्णालयांसाठी.",
  "platform.clinic.desc":
    "डॉक्टरच्या हातांसाठी. नोट्स, रेकॉर्ड्स, फॉलो-अप आणि रेफरल, एका शांत प्रवाहात.",
  "platform.clinic.f0": "EHR / EMR सह-पायलट",
  "platform.clinic.f1": "वाणी ओळख",
  "platform.clinic.f2": "क्लिनिकल निर्णय सहाय्य",
  "platform.clinic.f3": "ICD-10 आणि CPT कोडिंग",
  "platform.clinic.f4": "रेफर पत्रे आणि भेटीनंतरचे सारांश",
  "platform.clinic.f5": "ABDM / ABHA-तयार रेकॉर्ड्स",
  "platform.clinic.price": "केवळ",
  "platform.clinic.priceUnit": "/ डॉक्टर / महिना.",
  "platform.patient.tag": "AI Health Companion",
  "platform.patient.title": "रुग्ण आणि कुटुंबांसाठी.",
  "platform.patient.desc":
    "रुग्णाच्या आयुष्यासाठी. एक टाइमलाइन, रिमायंडर, सारांश आणि सोबत चालणारी प्रोफाइल.",
  "platform.patient.f0": "लक्षण नोंद",
  "platform.patient.f1": "सुचवलेला तज्ज्ञ",
  "platform.patient.f2": "डिजिटल हेल्थ लॉकर",
  "platform.patient.f3": "औषध आणि फॉलो-अप रिमायंडर",
  "platform.patient.f4": "कौटुंबिक आणि आपत्कालीन प्रोफाइल",
  "platform.patient.f5": "बहुभाषिक भेटीनंतरचे सारांश",

  "product.eyebrow": "उत्पादन",
  "product.title": "भेटीआधी, भेटीदरम्यान आणि बऱ्याच नंतरची केअर.",
  "product.subtitle":
    "बहुतेक सॉफ्टवेअर सल्ल्यावरच संपते. आम्ही कथा पुढे चालवतो.",
  "product.0.eyebrow": "भेटीपूर्वी",
  "product.0.title": "रुग्ण आत येण्याआधी डॉक्टरांना तो माहीत असतो.",
  "product.0.desc":
    "लक्षणे, इतिहास आणि रेकॉर्ड्स डॉक्टरांपर्यंत आधी पोहोचतात, जेणेकरून भेट प्रश्नांनी नव्हे, संदर्भाने सुरू होते.",
  "product.1.eyebrow": "भेटीदरम्यान",
  "product.1.title": "एआय लिहितो. डॉक्टर निर्णय घेतो.",
  "product.1.desc":
    "एआय टायपिंग सांभाळतो. डॉक्टर रुग्णासोबत राहतो, पूर्णपणे नियंत्रणात.",
  "product.2.eyebrow": "भेटीनंतर",
  "product.2.title": "भेट संपते. केअर नाही.",
  "product.2.desc":
    "सारांश, रिमायंडर, रेफरल आणि लॅब क्लिनिकच्या दारानंतरही चालू राहतात.",

  "flow.eyebrow": "इकोसिस्टम प्रवाह",
  "flow.title": "एका भेटीपासून एका सततच्या कथेपर्यंत.",
  "flow.subtitle": "भेट केअरचा शेवट नाही, सुरुवात आहे.",
  "flow.0": "लक्षणे",
  "flow.1": "एआय इनटेक",
  "flow.2": "योग्य डॉक्टर",
  "flow.3": "क्लिनिकल भेट",
  "flow.4": "संरचित सारांश",
  "flow.5": "रुग्ण रेकॉर्ड",
  "flow.6": "फॉलो-अप लूप",
  "flow.7": "लॅब / फार्मसी",
  "flow.8": "सतत केअर",

  "solutions.eyebrow": "वैशिष्ट्ये",
  "solutions.title": "सात तुकडे. एक धागा.",
  "solutions.subtitle": "प्रत्येक तुकडा पुढच्याला बळकट करतो.",
  "solutions.0.t": "EHR / EMR सह-पायलट",
  "solutions.0.d": "रेकॉर्ड स्वतःच लिहितो, म्हणून डॉक्टरांना लिहायला नको.",
  "solutions.1.t": "वाणी ओळख",
  "solutions.1.d": "गोंगाटातूनही ऐकणारा बहुभाषिक स्क्राइब.",
  "solutions.2.t": "क्लिनिकल निर्णय सहाय्य",
  "solutions.2.d": "औषध-इंटरॅक्शन सूचना आणि डॉक्टरांना विश्वास वाटेल असे पुरावे.",
  "solutions.3.t": "एकात्मिक कोडिंग",
  "solutions.3.d": "ICD-10 आणि CPT कोड ज्यांच्या मागे क्लिनिकला धावायला नको.",
  "solutions.4.t": "रेफर पत्रे आणि भेटीनंतरचे सारांश",
  "solutions.4.d": "रुग्णाला खरंच समजेल असा फॉलो-अप.",
  "solutions.5.t": "रुग्ण सातत्य परत",
  "solutions.5.d": "कुटुंबांना विचारायला, शोधायला आणि फॉलो-अपला मदत करणारा अॅप.",
  "solutions.6.t": "ABHA एकत्रीकरण",
  "solutions.6.d": "आयुष्मान भारत डिजिटल मिशनसाठी तयार रेकॉर्ड्स.",

  "diff.eyebrow": "विखुरलेल्या उपायांच्या पलीकडे",
  "diff.title": "जिथे इतर थांबतात, आम्ही चालत राहतो.",
  "diff.subtitle": "बहुतेक टूल्स सल्ल्यावर थांबतात. आम्ही रुग्णासोबत राहतो.",
  "diff.0.a": "केवळ नोट्स नाहीत.",
  "diff.0.b": "संपूर्ण केअर लूप.",
  "diff.1.a": "केवळ रेकॉर्ड्स नाहीत.",
  "diff.1.b": "कुटुंब फॉलो करू शकेल अशी कृती.",
  "diff.2.a": "केवळ सॉफ्टवेअर नाही.",
  "diff.2.b": "प्रत्येक भेटीदरम्यान एक केअर परत.",
  "diff.3.a": "केवळ एका देशासाठी नाही.",
  "diff.3.b": "कुठेही विखुरलेल्या केअरसाठी एक मॉडेल.",

  "trust.eyebrow": "विश्वास आणि सुरक्षा",
  "trust.title": "एआय मदत करतो. डॉक्टर निर्णय घेतात.",
  "trust.subtitle": "आम्ही चिकित्सकांना साथ देतो. आम्ही त्यांची जागा कधीच घेत नाही.",
  "trust.headline": "एआय मसुदा बनवतो. डॉक्टर सही करतो. केअरवर मालकी डॉक्टरचीच.",
  "trust.body":
    "डॉक्टरांशिवाय खोलीतून काहीही बाहेर जात नाही. प्रत्येक सूचना समजावता येते. प्रत्येक कृतीचा माग राहतो.",
  "trust.tag": "रचनेनुसार डॉक्टर-इन-द-लूप.",
  "trust.0.t": "डॉक्टर-इन-द-लूप",
  "trust.0.d": "प्रत्येक क्लिनिकल कृतीला डॉक्टरांची स्पष्ट मंजुरी हवी.",
  "trust.1.t": "क्लिनिकल सुरक्षा सीमा",
  "trust.1.d": "डीफॉल्टनेच सावध. वाढवण्याचे स्पष्ट मार्ग.",
  "trust.2.t": "स्पष्टीकरणीय सूचना",
  "trust.2.d": "प्रत्येक शिफारस तिच्या स्रोतापर्यंत मागोवा घेता येते.",
  "trust.3.t": "गोपनीयता-प्रथम रेकॉर्ड्स",
  "trust.3.d": "एंड-टू-एंड एन्क्रिप्शन, भूमिकाधारित प्रवेश, ABDM-दर्जा.",
  "trust.4.t": "कृतीपूर्वी मानवी पुनरावलोकन",
  "trust.4.d": "एआय मसुदा बनवतो. डॉक्टर निर्णय घेतात. सहीशिवाय काहीही नाही.",
  "trust.5.t": "सुरक्षित रुग्ण मार्गदर्शन",
  "trust.5.d": "आम्ही शिक्षित आणि ट्राएज करतो. आम्ही निदानाचा दावा करत नाही.",

  "global.eyebrow": "रचनेनुसार वैश्विक",
  "global.title": "जटिलतेत बांधलेला. जगासाठी बनवलेला.",
  "global.subtitle":
    "विखुरलेली केअर ही केवळ भारताची समस्या नाही. ती सर्वांची समस्या आहे.",
  "global.0.t": "उच्च-वॉल्यूम केअरमध्ये जन्मलेला",
  "global.0.d":
    "व्यस्त क्लिनिकसाठी बनवलेला जिथे वेळ कमी आणि संदर्भ अनेकदा हरवतो.",
  "global.1.t": "बहुभाषिक वास्तवासाठी बनवलेला",
  "global.1.d":
    "केअर संभाषणे मानवी आणि गोंधळलेली असतात. आम्ही त्यांना तिथेच भेटतो जिथे ती आहेत.",
  "global.2.t": "विखुरलेल्या प्रणालींसाठी बनवलेला",
  "global.2.d":
    "रेकॉर्ड्स, रेफरल, लॅब आणि फॉलो-अप, एका जोडलेल्या परतीवर.",
  "global.closing":
    "जर केअर इथे जोडली जाऊ शकते, तर ती कुठेही जोडली जाऊ शकते.",

  "team.eyebrow": "यामागील माणसे",
  "team.title": "जिवंत अनुभवातून बांधलेले. क्लिनिकल उत्कृष्टतेने मार्गदर्शित.",
  "team.subtitle":
    "One TheraCure संस्थापकाची दृढता आणि वरिष्ठ क्लिनिकल मार्गदर्शन एकत्र करून अशी हेल्थकेअर संरचना बांधतो जी मानवी, सुरक्षित आणि व्यावहारिक आहे.",
  "team.0.role": "संस्थापक, One TheraCure",
  "team.0.cred": "",
  "team.1.role": "सल्लागार, One TheraCure",
  "team.1.cred": "पद्मश्री. सर्जिकल ऑन्कोलॉजिस्ट.",
  "team.2.role": "सल्लागार, One TheraCure",
  "team.2.cred": "संचालक, हायमीडिया लॅब्स.",

  "founder.eyebrow": "संस्थापकाची कथा",
  "founder.title": "हे का आहे.",
  "founder.p1":
    "One TheraCure एका कुटुंबापासून, एका रुग्णालयापासून आणि अशा प्रश्नापासून सुरू झाला ज्याचे उत्तर कोणाकडेही नव्हते.",
  "founder.p2":
    "कोणताही रुग्ण लक्षणे, डॉक्टर, कागद आणि फॉलो-अप यांच्यात हरवू नये.",
  "founder.p3":
    "एक वैश्विक हेल्थकेअर कंपनी, अत्यंत मानवी समस्येतून जन्मलेली.",
  "founder.role": "संस्थापक आणि CEO, One TheraCure",

  "cta.eyebrow": "आमच्यासोबत बांधा",
  "cta.title": "जोडलेल्या हेल्थकेअरचे भविष्य बांधा.",
  "cta.subtitle":
    "One TheraCure सोबत भागीदारी करा, जेणेकरून सतत, एआय-सहाय्यित केअर खऱ्या क्लिनिकल सरावात पोहोचेल.",
  "cta.primary": "डेमोची विनंती करा",
  "cta.secondary": "संस्थापकांशी संपर्क",

  "footer.tagline": "The AI Healthcare Operating System",
  "footer.desc":
    "डॉक्टर, क्लिनिक, रुग्णालये आणि कुटुंबांसाठी एक केअर परत. जगभरात.",
  "footer.col.platform": "प्लॅटफॉर्म",
  "footer.col.platform.0": "ClinicOS",
  "footer.col.platform.1": "Patient App",
  "footer.col.platform.2": "इकोसिस्टम",
  "footer.col.platform.3": "वैशिष्ट्ये",
  "footer.col.company": "कंपनी",
  "footer.col.company.0": "आमच्याबद्दल",
  "footer.col.company.1": "सुरक्षा",
  "footer.col.company.2": "टीम",
  "footer.col.company.3": "संपर्क",
  "footer.col.social": "आम्हाला फॉलो करा",
  "footer.rights": "सर्व हक्क राखीव.",
  "footer.made": "भारतात बनवलेले.",

  "lang.label": "भाषा",
};

export const dictionaries: Record<Lang, Dict> = { en, hi, mr };

export const LANGS: { code: Lang; short: string; full: string }[] = [
  { code: "en", short: "EN", full: "English" },
  { code: "hi", short: "हिं", full: "हिंदी" },
  { code: "mr", short: "मरा", full: "मराठी" },
];
