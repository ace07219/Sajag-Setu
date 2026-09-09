/* ============================= i18n ============================= */
const STR = {
  en:{
    brand:"Sajag Setu", brandSub:"Continuity of care, village to hospital",
    govDept:"Department of Public Health", govState:"Government of Maharashtra",
    footerNote:"Prototype built for Smart India Hackathon (SIH26133). Not an official government service.",
    loginTitle:"Staff Login", loginSub:"Sign in to record and manage patient cases.",
    yourName:"Your name", yourNamePh:"e.g. Sunita Kamble",
    yourRole:"Your role", roleAsha:"ASHA Worker", rolePhc:"PHC Staff", roleDoctor:"Doctor", roleHospital:"Hospital Staff",
    loginBtn:"Log in", loggedInAs:"Logged in as", logout:"Log out",
    viewingAs:"Viewing as",
    navDash:"Dashboard", navNew:"New case", navRecords:"Patient records", navReferrals:"Referrals",
    dashTitle:"Facility dashboard", dashSub:"What needs attention at this facility right now.",
    statIncoming:"Incoming referrals", statFollowup:"High-risk follow-ups due", statLogged:"Cases logged (all time)",
    incomingHeading:"Incoming referrals awaiting action", followupHeading:"Patients needing follow-up",
    noIncoming:"No referrals waiting on this facility.", noFollowup:"No flagged follow-ups right now.",
    capsHeading:"What each facility can actually treat",
    capsSub:"Referrals are routed to the nearest facility that has the needed capability — not just the next one in line.",
    newTitle:"Log a new case", newSub:"Record a patient visit and let the system flag whether it needs referral, and where.",
    patientSection:"Patient", existingOrNew:"Existing patient or new?", existing:"Existing patient", newP:"New patient",
    choosePatient:"Choose patient", name:"Name", age:"Age", gender:"Gender", village:"Village",
    male:"Male", female:"Female", other:"Other",
    riskFlag:"Follow-up risk category", none:"None", maternal:"Maternal", child:"Child (under 5)", chronic:"Chronic condition",
    symptomsSection:"Danger signs / symptoms observed", otherSymptom:"Other (describe below)", otherSymptomPh:"Describe the symptom the worker observed…",
    vitalsSection:"Vitals", bp:"Blood pressure", bpPh:"e.g. 120/80", temp:"Temperature (°F)", tempPh:"e.g. 98.6", pulse:"Pulse (bpm)", pulsePh:"e.g. 80",
    notes:"Notes for the record", notesPh:"Vitals, observations, anything the next facility should know…",
    submit:"Save case & check urgency", resultUrgency:"Urgency assessed as", refer:"Refer to", referBtn:"Send referral",
    noReferralNeeded:"No referral needed — case can stay at this facility.",
    routedBecause:"Routed here because it has", skippedNote:"Skipped (doesn't have this capability):",
    recordsTitle:"Patient records", recordsSub:"Search for a patient to see their ID, status, and full history across facilities.",
    searchPh:"Search by name, village, or patient ID…", noResults:"No matching patients.",
    patientId:"Patient ID", currentStatus:"Current status", reportsCol:"Reports",
    statusUnderTreatment:"Currently under treatment at", statusAwaiting:"Referred, awaiting arrival at",
    statusDischarged:"Last treated at", onDate:"on", noActivity:"No visits logged yet.",
    medicalHistory:"Full medical history", noHistory:"No visits logged yet.",
    loggedBy:"Logged by", uploadedBy:"Uploaded by",
    attachments:"Attachments (X-rays, charts, reports)", uploadFile:"Upload file", noAttachments:"No files uploaded yet.",
    uploadNotAllowed:"Only PHC / Hospital / Doctor accounts can upload files.",
    demoAttachmentNote:"(demo entry — no file attached)",
    referralsTitle:"Referrals", referralsSub:"Cases moving between facilities, tracked end to end.",
    incoming:"Incoming", sent:"Sent by this facility",
    pending:"Pending", accepted:"Accepted", completed:"Completed",
    accept:"Accept", complete:"Mark complete", noneHere:"Nothing here.",
    urgencyEmergency:"Emergency", urgencyPriority:"Priority", urgencyRoutine:"Routine",
    from:"From", to:"To", referredTo:"Referred to",
    symFever:"Fever", symCough:"Persistent cough", symBreath:"Difficulty breathing", symChest:"Chest pain (possible cardiac)",
    symHighFever:"High fever (>103°F)", symBleed:"Bleeding / pregnancy complication", symInjury:"Severe injury",
    symDehydration:"Diarrhea / severe dehydration (child)", symRoutineCheck:"Routine checkup / follow-up",
    capBasic:"Basic checkup", capDelivery:"Normal delivery", capObstetric:"Obstetric emergency care",
    capPediatric:"Child emergency care", capTrauma:"Emergency surgery / trauma care",
    capInfectious:"Infectious disease care", capSpecialist:"Specialist consultation",
    demoNote:"Prototype demo data — pre-loaded so the referral chain is visible without manual entry.",
    resetDemo:"Reset demo data"
  },
  mr:{
    brand:"सजग सेतू", brandSub:"गावापासून रुग्णालयापर्यंत सलग काळजी",
    govDept:"सार्वजनिक आरोग्य विभाग", govState:"महाराष्ट्र शासन",
    footerNote:"स्मार्ट इंडिया हॅकाथॉन (SIH26133) साठी तयार केलेला नमुना. अधिकृत शासकीय सेवा नाही.",
    loginTitle:"कर्मचारी लॉगिन", loginSub:"रुग्ण प्रकरणे नोंदवण्यासाठी व व्यवस्थापित करण्यासाठी लॉगिन करा.",
    yourName:"तुमचे नाव", yourNamePh:"उदा. सुनिता कांबळे",
    yourRole:"तुमची भूमिका", roleAsha:"आशा कार्यकर्ती", rolePhc:"पीएचसी कर्मचारी", roleDoctor:"डॉक्टर", roleHospital:"रुग्णालय कर्मचारी",
    loginBtn:"लॉगिन करा", loggedInAs:"लॉगिन केलेले", logout:"लॉगआउट",
    viewingAs:"सध्या पाहत आहात",
    navDash:"डॅशबोर्ड", navNew:"नवीन रुग्ण नोंद", navRecords:"रुग्ण नोंदी", navReferrals:"रेफरल्स",
    dashTitle:"सुविधा डॅशबोर्ड", dashSub:"या सुविधेत सध्या लक्ष देण्याची गरज असलेल्या गोष्टी.",
    statIncoming:"येणारे रेफरल्स", statFollowup:"उच्च-जोखीम पाठपुरावा बाकी", statLogged:"नोंदवलेली प्रकरणे (एकूण)",
    incomingHeading:"कार्यवाहीसाठी प्रलंबित रेफरल्स", followupHeading:"पाठपुरावा आवश्यक असलेले रुग्ण",
    noIncoming:"या सुविधेसाठी कोणतेही रेफरल प्रलंबित नाही.", noFollowup:"सध्या कोणताही पाठपुरावा प्रलंबित नाही.",
    capsHeading:"प्रत्येक सुविधा प्रत्यक्षात काय उपचार करू शकते",
    capsSub:"रेफरल आवश्यक क्षमता असलेल्या सर्वात जवळच्या सुविधेकडे पाठवले जाते — फक्त पुढच्या क्रमांकावर नाही.",
    newTitle:"नवीन प्रकरण नोंदवा", newSub:"रुग्ण भेट नोंदवा — प्रणाली रेफरलची गरज आहे का आणि कुठे ते ठरवेल.",
    patientSection:"रुग्ण", existingOrNew:"जुना रुग्ण की नवीन?", existing:"जुना रुग्ण", newP:"नवीन रुग्ण",
    choosePatient:"रुग्ण निवडा", name:"नाव", age:"वय", gender:"लिंग", village:"गाव",
    male:"पुरुष", female:"स्त्री", other:"इतर",
    riskFlag:"पाठपुरावा जोखीम गट", none:"काहीही नाही", maternal:"माता", child:"बालक (५ वर्षांखालील)", chronic:"दीर्घकालीन आजार",
    symptomsSection:"आढळलेली धोक्याची लक्षणे", otherSymptom:"इतर (खाली वर्णन करा)", otherSymptomPh:"कर्मचाऱ्याने पाहिलेल्या लक्षणाचे वर्णन करा…",
    vitalsSection:"जीवनावश्यक तपासणी", bp:"रक्तदाब", bpPh:"उदा. १२०/८०", temp:"तापमान (°F)", tempPh:"उदा. ९८.६", pulse:"नाडी (bpm)", pulsePh:"उदा. ८०",
    notes:"नोंदीसाठी टिपा", notesPh:"तपासणी, निरीक्षणे, पुढील सुविधेला माहीत असणे आवश्यक असलेले काहीही…",
    submit:"प्रकरण जतन करा व तीव्रता तपासा", resultUrgency:"तीव्रता ठरवली", refer:"येथे पाठवा", referBtn:"रेफरल पाठवा",
    noReferralNeeded:"रेफरलची गरज नाही — प्रकरण याच सुविधेत राहू शकते.",
    routedBecause:"येथे पाठवले कारण येथे उपलब्ध आहे", skippedNote:"वगळले (ही सुविधा येथे नाही):",
    recordsTitle:"रुग्ण नोंदी", recordsSub:"रुग्णाचा आयडी, स्थिती व संपूर्ण इतिहास पाहण्यासाठी शोधा.",
    searchPh:"नाव, गाव किंवा रुग्ण आयडीने शोधा…", noResults:"जुळणारे रुग्ण नाहीत.",
    patientId:"रुग्ण आयडी", currentStatus:"सध्याची स्थिती", reportsCol:"अहवाल",
    statusUnderTreatment:"सध्या उपचार सुरू आहेत येथे", statusAwaiting:"पाठवले, पोहोचण्याची प्रतीक्षा येथे",
    statusDischarged:"शेवटचे उपचार येथे झाले", onDate:"रोजी", noActivity:"अद्याप कोणतीही भेट नोंदवलेली नाही.",
    medicalHistory:"संपूर्ण वैद्यकीय इतिहास", noHistory:"अद्याप कोणतीही भेट नोंदवलेली नाही.",
    loggedBy:"यांनी नोंदवले", uploadedBy:"यांनी अपलोड केले",
    attachments:"संलग्नके (एक्स-रे, तक्ते, अहवाल)", uploadFile:"फाईल अपलोड करा", noAttachments:"अद्याप कोणतीही फाईल अपलोड केलेली नाही.",
    uploadNotAllowed:"फक्त पीएचसी / रुग्णालय / डॉक्टर खाती फाईल अपलोड करू शकतात.",
    demoAttachmentNote:"(नमुना नोंद — फाईल संलग्न नाही)",
    referralsTitle:"रेफरल्स", referralsSub:"सुविधांदरम्यान हलणारी प्रकरणे, सुरुवातीपासून शेवटपर्यंत ट्रॅक केलेली.",
    incoming:"येणारे", sent:"या सुविधेने पाठवलेले",
    pending:"प्रलंबित", accepted:"स्वीकारले", completed:"पूर्ण झाले",
    accept:"स्वीकारा", complete:"पूर्ण म्हणून चिन्हांकित करा", noneHere:"येथे काहीही नाही.",
    urgencyEmergency:"तातडीचे", urgencyPriority:"प्राधान्य", urgencyRoutine:"नियमित",
    from:"पासून", to:"पर्यंत", referredTo:"येथे पाठवले",
    symFever:"ताप", symCough:"सततचा खोकला", symBreath:"श्वास घेण्यास त्रास", symChest:"छातीत दुखणे (हृदयाशी संबंधित असू शकते)",
    symHighFever:"अति ताप (>103°F)", symBleed:"रक्तस्त्राव / गर्भधारणेतील गुंतागुंत", symInjury:"गंभीर दुखापत",
    symDehydration:"जुलाब / गंभीर निर्जलीकरण (बालक)", symRoutineCheck:"नियमित तपासणी / पाठपुरावा",
    capBasic:"प्राथमिक तपासणी", capDelivery:"सामान्य प्रसूती", capObstetric:"प्रसूती आपत्कालीन सेवा",
    capPediatric:"बालक आपत्कालीन सेवा", capTrauma:"आपत्कालीन शस्त्रक्रिया / जखम उपचार",
    capInfectious:"संसर्गजन्य आजार उपचार", capSpecialist:"तज्ज्ञ सल्लामसलत",
    demoNote:"नमुना डेमो माहिती — रेफरल साखळी लगेच दिसण्यासाठी आधीच भरलेली आहे.",
    resetDemo:"डेमो माहिती पुन्हा सुरू करा"
  }
};
let lang = "en";
function t(key){ return STR[lang][key] || STR.en[key] || key; }

/* ============================= icons ============================= */
const ICONS = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  newcase:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
  records:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/><line x1="8" y1="8" x2="11" y2="8"/></svg>',
  referrals:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="18" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>'
};
const BRIDGE_SVG = `<svg class="bridge-mark" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M2 26C2 26 10 10 24 10C38 10 46 26 46 26" stroke="#E8792B" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="14" x2="10" y2="26" stroke="#9FBBCF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="18" y1="11.5" x2="18" y2="26" stroke="#9FBBCF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="30" y1="11.5" x2="30" y2="26" stroke="#9FBBCF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="38" y1="14" x2="38" y2="26" stroke="#9FBBCF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="2" y1="26" x2="46" y2="26" stroke="#E7EEF3" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;
/* Generic civic/health emblem — deliberately NOT the official State emblem. */
const GOV_EMBLEM_SVG = `<svg class="gov-emblem" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="24" cy="24" r="21" fill="#0A3D62" stroke="#E8792B" stroke-width="2.5"/>
  <path d="M24 12v24M13 19c0 7 5 12 11 15 6-3 11-8 11-15" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

/* ============================= facility capability model ============================= */
const FACILITIES = [
  { name:"Sub-Centre — Wagholi",        capabilities:["basic_checkup"] },
  { name:"PHC — Koregaon",              capabilities:["basic_checkup","normal_delivery"] },
  { name:"Rural Hospital — Baramati",   capabilities:["basic_checkup","normal_delivery","obstetric_emergency","pediatric_emergency","trauma_surgery","infectious_disease_care"] },
  { name:"District Hospital — Pune",    capabilities:["basic_checkup","normal_delivery","obstetric_emergency","pediatric_emergency","trauma_surgery","infectious_disease_care","specialist_consultation"] }
];
const FACILITY_NAMES = FACILITIES.map(f => f.name);
function facilityByName(name){ return FACILITIES.find(f => f.name === name); }
const CAP_LABEL_KEY = {
  basic_checkup:"capBasic", normal_delivery:"capDelivery", obstetric_emergency:"capObstetric",
  pediatric_emergency:"capPediatric", trauma_surgery:"capTrauma",
  infectious_disease_care:"capInfectious", specialist_consultation:"capSpecialist"
};
function capLabel(cap){ return t(CAP_LABEL_KEY[cap] || cap); }

function routeReferral(fromFacilityName, capability){
  const idx = FACILITY_NAMES.indexOf(fromFacilityName);
  const skipped = [];
  for (let i = idx + 1; i < FACILITIES.length; i++){
    if (FACILITIES[i].capabilities.includes(capability)) return { to: FACILITIES[i].name, skipped };
    skipped.push(FACILITIES[i].name);
  }
  return { to: null, skipped };
}

/* ============================= symptoms / triage ============================= */
const SYMPTOM_DEFS = [
  { key:"symFever",         urgency:"routine",  capability:"basic_checkup" },
  { key:"symCough",         urgency:"routine",  capability:"basic_checkup" },
  { key:"symRoutineCheck",  urgency:"routine",  capability:"basic_checkup" },
  { key:"symHighFever",     urgency:"priority", capability:"basic_checkup" },
  { key:"symDehydration",   urgency:"priority", capability:"pediatric_emergency" },
  { key:"symBreath",        urgency:"emergency",capability:"pediatric_emergency" },
  { key:"symBleed",         urgency:"emergency",capability:"obstetric_emergency" },
  { key:"symInjury",        urgency:"emergency",capability:"trauma_surgery" },
  { key:"symChest",         urgency:"emergency",capability:"specialist_consultation" }
];
const URGENCY_RANK = { routine:0, priority:1, emergency:2 };
function symptomList(){ return SYMPTOM_DEFS.map(s => s.key); }

/* customText (free-text "Other" symptom) defaults to at least "priority" urgency,
   since free text can't be safely auto-classified — flagged for human review. */
function assessCase(selectedKeys, customText){
  const defs = SYMPTOM_DEFS.filter(s => selectedKeys.includes(s.key));
  let top = defs.length ? defs[0] : null;
  defs.forEach(d => { if (!top || URGENCY_RANK[d.urgency] > URGENCY_RANK[top.urgency]) top = d; });
  if (customText && customText.trim()){
    const customDef = { urgency:"priority", capability:"basic_checkup" };
    if (!top || URGENCY_RANK[customDef.urgency] > URGENCY_RANK[top.urgency]) top = customDef;
  }
  if (!top) return { urgency:"routine", capability:"basic_checkup" };
  return { urgency: top.urgency, capability: top.capability };
}

/* ============================= session (login) ============================= */
let session = null; // {name, role}
const ROLE_KEYS = ["roleAsha","rolePhc","roleDoctor","roleHospital"];

/* ============================= patient ID generator ============================= */
let patientSeq = 1006; // seed patients occupy 1001-1005
function nextPatientId(){
  const id = "MH26-" + String(patientSeq).padStart(4,"0");
  patientSeq++;
  return id;
}

/* ============================= data model ============================= */
function seedData(){
  return {
    patients: [
      {id:"p1", patientId:"MH26-1001", name:"Meera Jadhav", age:27, gender:"female", village:"Wagholi", risk:"maternal", attachments:[]},
      {id:"p2", patientId:"MH26-1002", name:"Arjun Pawar", age:5, gender:"male", village:"Wagholi", risk:"child", attachments:[]},
      {id:"p3", patientId:"MH26-1003", name:"Devidas Shinde", age:58, gender:"male", village:"Koregaon", risk:"chronic", attachments:[
        {id:"a1", name:"Blood Sugar Report - Aug 2026.pdf", type:"application/pdf", dataUrl:null,
         uploadedBy:{name:"Dr. Patil", role:"roleDoctor"}, facility:"Sub-Centre — Wagholi", date:"2026-08-18"}
      ]},
      {id:"p4", patientId:"MH26-1004", name:"Sunita More", age:34, gender:"female", village:"Wagholi", risk:"none", attachments:[]},
      {id:"p5", patientId:"MH26-1005", name:"Kavita Bhosale", age:24, gender:"female", village:"Wagholi", risk:"maternal", attachments:[
        {id:"a2", name:"Obstetric Ultrasound Report - 28 Weeks.pdf", type:"application/pdf", dataUrl:null,
         uploadedBy:{name:"Dr. Ashwini Naik", role:"roleDoctor"}, facility:"Rural Hospital — Baramati", date:"2026-08-23"},
        {id:"a3", name:"BP & Lab Chart - Admission.pdf", type:"application/pdf", dataUrl:null,
         uploadedBy:{name:"Dr. Ashwini Naik", role:"roleDoctor"}, facility:"Rural Hospital — Baramati", date:"2026-08-23"}
      ]}
    ],
    records: [
      {id:"r1", patientId:"p1", facility:"Sub-Centre — Wagholi", date:"2026-08-20", symptoms:["symBleed"], customText:"", notes:"Reported light bleeding, 7 months pregnant.", urgency:"emergency", vitals:{bp:"100/60",temp:"98.6",pulse:"110"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}},
      {id:"r2", patientId:"p1", facility:"Rural Hospital — Baramati", date:"2026-08-20", symptoms:["symBleed"], customText:"", notes:"Arrived directly — PHC does not handle obstetric emergencies. Stabilised, kept for observation.", urgency:"emergency", vitals:{bp:"110/70",temp:"98.4",pulse:"90"}, loggedBy:{name:"Dr. Naik", role:"roleDoctor"}},
      {id:"r3", patientId:"p2", facility:"PHC — Koregaon", date:"2026-08-25", symptoms:["symDehydration","symHighFever"], customText:"", notes:"Severe dehydration, needs IV fluids not available on site.", urgency:"priority", vitals:{bp:"",temp:"104.1",pulse:"130"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}},
      {id:"r4", patientId:"p3", facility:"Sub-Centre — Wagholi", date:"2026-08-18", symptoms:["symRoutineCheck"], customText:"", notes:"Routine sugar check, stable, due again in 4 weeks.", urgency:"routine", vitals:{bp:"128/82",temp:"98.2",pulse:"76"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}},
      {id:"r5", patientId:"p4", facility:"Sub-Centre — Wagholi", date:"2026-08-27", symptoms:["symFever","symCough"], customText:"", notes:"Mild seasonal fever, advised rest and fluids.", urgency:"routine", vitals:{bp:"118/76",temp:"99.5",pulse:"84"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}},
      {id:"r6", patientId:"p5", facility:"Sub-Centre — Wagholi", date:"2026-07-05", symptoms:["symRoutineCheck"], customText:"", notes:"First antenatal checkup, 12 weeks pregnant. Iron and folic acid supplements given.", urgency:"routine", vitals:{bp:"110/70",temp:"98.4",pulse:"78"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}},
      {id:"r7", patientId:"p5", facility:"Sub-Centre — Wagholi", date:"2026-07-28", symptoms:["symRoutineCheck"], customText:"", notes:"Second antenatal visit, 16 weeks. Blood pressure and weight normal.", urgency:"routine", vitals:{bp:"112/72",temp:"98.6",pulse:"80"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}},
      {id:"r8", patientId:"p5", facility:"Sub-Centre — Wagholi", date:"2026-08-22", symptoms:[], customText:"Sudden swelling in feet and hands, severe headache and blurred vision since yesterday", notes:"28 weeks pregnant. Danger signs noted as per ASHA checklist — referring for evaluation.", urgency:"priority", vitals:{bp:"148/96",temp:"98.8",pulse:"92"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}},
      {id:"r9", patientId:"p5", facility:"PHC — Koregaon", date:"2026-08-22", symptoms:["symBleed"], customText:"", notes:"On examination: BP 150/100, pedal edema +2. Suspected pre-eclampsia — referring immediately to a facility with obstetric emergency capability.", urgency:"emergency", vitals:{bp:"150/100",temp:"98.6",pulse:"96"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}},
      {id:"r10", patientId:"p5", facility:"Rural Hospital — Baramati", date:"2026-08-23", symptoms:["symBleed"], customText:"", notes:"Admitted for BP management and monitoring. Ultrasound and lab investigations done. Currently stable, continuing observation.", urgency:"priority", vitals:{bp:"138/90",temp:"98.4",pulse:"88"}, loggedBy:{name:"Dr. Ashwini Naik", role:"roleDoctor"}}
    ],
    referrals: [
      {id:"f1", patientId:"p1", from:"Sub-Centre — Wagholi", to:"Rural Hospital — Baramati", urgency:"emergency", capability:"obstetric_emergency", status:"accepted", createdAt:"2026-08-20"},
      {id:"f2", patientId:"p2", from:"PHC — Koregaon", to:"Rural Hospital — Baramati", urgency:"priority", capability:"pediatric_emergency", status:"pending", createdAt:"2026-08-25"},
      {id:"f3", patientId:"p5", from:"Sub-Centre — Wagholi", to:"PHC — Koregaon", urgency:"priority", capability:"basic_checkup", status:"completed", createdAt:"2026-08-22"},
      {id:"f4", patientId:"p5", from:"PHC — Koregaon", to:"Rural Hospital — Baramati", urgency:"emergency", capability:"obstetric_emergency", status:"accepted", createdAt:"2026-08-22"}
    ]
  };
}
let DB = seedData();
let currentFacility = FACILITY_NAMES[0];
let currentView = "dashboard";
let recordFormMode = "existing";
let openPatientId = null;

/* ============================= helpers ============================= */
function patientById(id){ return DB.patients.find(p => p.id === id); }
function fmtDate(d){
  try{ return new Date(d).toLocaleDateString(lang==="mr"?"mr-IN":"en-IN",{day:"2-digit",month:"short",year:"numeric"}); }
  catch(e){ return d; }
}
function urgencyTag(u){
  const map = {emergency:["emergency", t("urgencyEmergency")], priority:["priority", t("urgencyPriority")], routine:["routine", t("urgencyRoutine")]};
  const [cls,label] = map[u] || map.routine;
  return `<span class="tag ${cls}">${label}</span>`;
}
function riskTag(risk){
  if (!risk || risk === "none") return "";
  const labelMap = {maternal:t("maternal"), child:t("child"), chronic:t("chronic")};
  return `<span class="tag risk">${labelMap[risk] || risk}</span>`;
}
function roleLabel(roleKey){ return t(roleKey) || roleKey; }
function uid(prefix){ return prefix + Math.random().toString(36).slice(2,9); }
function escapeHtml(s){ return (s||"").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

function patientStatus(patientId){
  const refs = DB.referrals.filter(r => r.patientId === patientId).slice().sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
  const recs = DB.records.filter(r => r.patientId === patientId).slice().sort((a,b)=>b.date.localeCompare(a.date));
  if (refs.length && refs[0].status !== "completed"){
    if (refs[0].status === "pending") return { text: `${t("statusAwaiting")} ${refs[0].to}`, cls:"wait" };
    if (refs[0].status === "accepted") return { text: `${t("statusUnderTreatment")} ${refs[0].to}`, cls:"" };
  }
  if (recs.length) return { text: `${t("statusDischarged")} ${recs[0].facility} ${t("onDate")} ${fmtDate(recs[0].date)}`, cls:"done" };
  return { text: t("noActivity"), cls:"" };
}

/* ============================= app root render ============================= */
function renderApp(){
  const root = document.getElementById("app-root");
  if (!session){
    root.innerHTML = renderLoginScreen();
    wireLogin();
    return;
  }
  root.innerHTML = `
    <header id="gov-header">
      <div class="gov-header-left">
        ${GOV_EMBLEM_SVG}
        <div class="gov-header-text">
          <div class="dept">${t("govDept")}</div>
          <div class="state">${t("govState")} · ${t("brand")}</div>
        </div>
      </div>
      <div class="gov-header-right">
        <span class="who">${t("loggedInAs")}: <strong>${escapeHtml(session.name)}</strong> (${roleLabel(session.role)})</span>
        <button class="btn-logout" id="logout-btn">${t("logout")}</button>
      </div>
    </header>
    <div id="shell">
      <aside id="sidebar">
        <div id="brand">
          <div class="brand-row">
            ${BRIDGE_SVG}
            <div>
              <div class="mark">${t("brand")}</div>
              <div class="sub">${t("brandSub")}</div>
            </div>
          </div>
        </div>
        <div id="facility-picker">
          <label>${t("viewingAs")}</label>
          <select id="facility-select"></select>
        </div>
        <nav id="nav"></nav>
        <div id="lang-toggle">
          <button data-lang="en" class="${lang==='en'?'active':''}">English</button>
          <span>·</span>
          <button data-lang="mr" class="${lang==='mr'?'active':''}">मराठी</button>
        </div>
      </aside>
      <main id="main"></main>
    </div>
    <footer id="gov-footer">${t("footerNote")}</footer>
  `;
  wireShell();
  renderMain();
}

function renderLoginScreen(){
  return `
    <div id="login-wrap">
      <div class="login-card">
        <div class="login-head">
          ${GOV_EMBLEM_SVG}
          <div class="dept">${t("govDept")}</div>
          <div class="state">${t("govState")}</div>
          <h1>${t("loginTitle")}</h1>
          <p>${t("loginSub")}</p>
        </div>
        <form id="login-form">
          <div class="field">
            <label>${t("yourName")}</label>
            <input type="text" id="login-name" placeholder="${t("yourNamePh")}" required>
          </div>
          <div class="field">
            <label>${t("yourRole")}</label>
            <select id="login-role">
              ${ROLE_KEYS.map(k => `<option value="${k}">${t(k)}</option>`).join("")}
            </select>
          </div>
          <button type="submit" class="btn accent">${t("loginBtn")}</button>
        </form>
      </div>
    </div>
  `;
}

function wireLogin(){
  const form = document.getElementById("login-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("login-name").value.trim();
    const role = document.getElementById("login-role").value;
    if (!name) return;
    session = { name, role };
    renderApp();
  };
}

function wireShell(){
  const sel = document.getElementById("facility-select");
  sel.innerHTML = FACILITY_NAMES.map(f => `<option value="${f}" ${f===currentFacility?"selected":""}>${f}</option>`).join("");
  sel.onchange = e => { currentFacility = e.target.value; renderMain(); };

  const navItems = [["dashboard","navDash"], ["newcase","navNew"], ["records","navRecords"], ["referrals","navReferrals"]];
  document.getElementById("nav").innerHTML = navItems.map(([key,label]) =>
    `<button data-view="${key}" class="${currentView===key?"active":""}">${ICONS[key]}${t(label)}</button>`
  ).join("");
  document.querySelectorAll("#nav button").forEach(b=>{
    b.onclick = () => { currentView = b.dataset.view; renderMain(); };
  });

  document.querySelectorAll("#lang-toggle button").forEach(b=>{
    b.onclick = () => { lang = b.dataset.lang; renderApp(); };
  });

  document.getElementById("logout-btn").onclick = () => { session = null; openPatientId = null; renderApp(); };
}

/* ============================= views ============================= */
function renderMain(){
  const main = document.getElementById("main");
  if (currentView === "dashboard") main.innerHTML = viewDashboard();
  else if (currentView === "newcase") main.innerHTML = viewNewCase();
  else if (currentView === "records") main.innerHTML = viewRecords();
  else if (currentView === "referrals") main.innerHTML = viewReferrals();
  wireView();
  main.classList.remove("enter");
  void main.offsetWidth;
  main.classList.add("enter");
}

function capabilityLegendPanel(){
  const rows = FACILITIES.map(f => `
    <tr><td><strong>${f.name}</strong></td>
    <td>${f.capabilities.map(c => `<span class="tag capability">${capLabel(c)}</span>`).join(" ")}</td></tr>
  `).join("");
  return `<div class="panel"><h2>${t("capsHeading")}</h2>
    <p style="margin:-6px 0 14px;color:var(--ink-soft);font-size:13px;">${t("capsSub")}</p>
    <table><tbody>${rows}</tbody></table></div>`;
}

function viewDashboard(){
  const incoming = DB.referrals.filter(r => r.to === currentFacility && r.status !== "completed");
  const followups = DB.patients.filter(p => p.risk && p.risk !== "none");
  const totalLogged = DB.records.length;

  const incomingRows = incoming.length ? incoming.map(r => {
    const p = patientById(r.patientId);
    return `<tr><td>${p.name} <span class="tag pid">${p.patientId}</span></td><td>${r.from}</td><td>${urgencyTag(r.urgency)}</td><td><span class="tag ${r.status}">${t(r.status)}</span></td></tr>`;
  }).join("") : `<tr><td colspan="4" class="empty">${t("noIncoming")}</td></tr>`;

  const followupRows = followups.length ? followups.map(p => {
    return `<tr><td>${p.name} <span class="tag pid">${p.patientId}</span></td><td>${p.village}</td><td>${riskTag(p.risk)}</td></tr>`;
  }).join("") : `<tr><td colspan="3" class="empty">${t("noFollowup")}</td></tr>`;

  return `
    <header class="page-head"><h1>${t("dashTitle")}</h1><p>${t("dashSub")} — <strong>${currentFacility}</strong></p></header>
    <div class="banner"><span>${t("demoNote")}</span><button class="btn ghost" id="reset-demo">${t("resetDemo")}</button></div>
    <div class="grid-3">
      <div class="stat warn"><div class="num">${incoming.length}</div><div class="label">${t("statIncoming")}</div></div>
      <div class="stat amber"><div class="num">${followups.length}</div><div class="label">${t("statFollowup")}</div></div>
      <div class="stat"><div class="num">${totalLogged}</div><div class="label">${t("statLogged")}</div></div>
    </div>
    <div class="panel"><h2>${t("incomingHeading")}</h2>
      <table><thead><tr><th>${t("name")}</th><th>${t("from")}</th><th></th><th></th></tr></thead><tbody>${incomingRows}</tbody></table></div>
    <div class="panel"><h2>${t("followupHeading")}</h2>
      <table><thead><tr><th>${t("name")}</th><th>${t("village")}</th><th></th></tr></thead><tbody>${followupRows}</tbody></table></div>
    ${capabilityLegendPanel()}
  `;
}

function viewNewCase(resultBlock){
  const patientOptions = DB.patients.map(p => `<option value="${p.id}">${p.name} — ${p.patientId}</option>`).join("");
  const symptomsHtml = symptomList().map(s => `<label><input type="checkbox" name="symptom" value="${s}"> ${t(s)}</label>`).join("");

  return `
    <header class="page-head"><h1>${t("newTitle")}</h1><p>${t("newSub")} — <strong>${currentFacility}</strong></p></header>
    <div class="panel">
      <form id="case-form">
        <fieldset>
          <legend>${t("patientSection")}</legend>
          <div class="field">
            <label>${t("existingOrNew")}</label>
            <div style="display:flex;gap:16px;margin-top:4px;">
              <label style="font-weight:400;display:flex;gap:6px;align-items:center;"><input type="radio" name="mode" value="existing" ${recordFormMode==="existing"?"checked":""}> ${t("existing")}</label>
              <label style="font-weight:400;display:flex;gap:6px;align-items:center;"><input type="radio" name="mode" value="new" ${recordFormMode==="new"?"checked":""}> ${t("newP")}</label>
            </div>
          </div>
          <div id="patient-fields">${recordFormMode==="existing" ? `
            <div class="field"><label>${t("choosePatient")}</label><select id="existing-patient">${patientOptions}</select></div>` : `
            <div class="row-2">
              <div class="field"><label>${t("name")}</label><input type="text" id="np-name"></div>
              <div class="field"><label>${t("age")}</label><input type="number" id="np-age"></div>
            </div>
            <div class="row-2">
              <div class="field"><label>${t("gender")}</label>
                <select id="np-gender"><option value="female">${t("female")}</option><option value="male">${t("male")}</option><option value="other">${t("other")}</option></select></div>
              <div class="field"><label>${t("village")}</label><input type="text" id="np-village"></div>
            </div>
            <div class="field"><label>${t("riskFlag")}</label>
              <select id="np-risk">
                <option value="none">${t("none")}</option><option value="maternal">${t("maternal")}</option>
                <option value="child">${t("child")}</option><option value="chronic">${t("chronic")}</option>
              </select></div>`}
          </div>
        </fieldset>

        <fieldset>
          <legend>${t("vitalsSection")}</legend>
          <div class="row-2">
            <div class="field"><label>${t("bp")}</label><input type="text" id="vital-bp" placeholder="${t("bpPh")}"></div>
            <div class="field"><label>${t("temp")}</label><input type="number" step="0.1" id="vital-temp" placeholder="${t("tempPh")}"></div>
          </div>
          <div class="field"><label>${t("pulse")}</label><input type="number" id="vital-pulse" placeholder="${t("pulsePh")}"></div>
        </fieldset>

        <fieldset>
          <legend>${t("symptomsSection")}</legend>
          <div class="check-grid">${symptomsHtml}</div>
          <div class="field" style="margin-top:14px;">
            <label><input type="checkbox" id="other-symptom-check"> ${t("otherSymptom")}</label>
            <textarea id="other-symptom-text" placeholder="${t("otherSymptomPh")}" style="margin-top:8px;display:none;"></textarea>
          </div>
        </fieldset>

        <div class="field"><label>${t("notes")}</label><textarea id="case-notes" placeholder="${t("notesPh")}"></textarea></div>
        <button type="submit" class="btn">${t("submit")}</button>
      </form>
    </div>
    ${resultBlock || ""}
  `;
}

function viewRecords(query){
  query = query || "";
  const q = query.trim().toLowerCase();
  const matches = DB.patients.filter(p =>
    p.name.toLowerCase().includes(q) || p.village.toLowerCase().includes(q) || p.patientId.toLowerCase().includes(q)
  );
  const rows = matches.length ? matches.map(p => {
    const st = patientStatus(p.id);
    const repCount = p.attachments.length;
    const repBadge = repCount ? `<span class="tag capability">📄 ${repCount}</span>` : `<span class="empty" style="padding:0;">—</span>`;
    return `<tr class="clickable" data-patient="${p.id}">
      <td><span class="tag pid">${p.patientId}</span></td>
      <td>${p.name}</td><td>${p.village}</td><td>${riskTag(p.risk) || "—"}</td>
      <td>${repBadge}</td>
      <td style="font-size:12.5px;color:var(--ink-soft);">${st.text}</td>
    </tr>`;
  }).join("") : `<tr><td colspan="6" class="empty">${t("noResults")}</td></tr>`;

  return `
    <header class="page-head"><h1>${t("recordsTitle")}</h1><p>${t("recordsSub")}</p></header>
    <div class="search-row"><input type="text" id="patient-search" placeholder="${t("searchPh")}" value="${escapeHtml(query)}"></div>
    <div class="panel">
      <table><thead><tr><th>${t("patientId")}</th><th>${t("name")}</th><th>${t("village")}</th><th></th><th>${t("reportsCol")}</th><th>${t("currentStatus")}</th></tr></thead>
      <tbody>${rows}</tbody></table>
    </div>
    <div id="patient-timeline">${openPatientId ? renderPatientProfile(openPatientId) : ""}</div>
  `;
}

function attachmentsBlock(patient){
  const canUpload = session && session.role !== "roleAsha";
  const items = patient.attachments.length ? patient.attachments.map(a => {
    const isImage = a.type && a.type.startsWith("image/");
    const thumb = (isImage && a.dataUrl) ? `<img src="${a.dataUrl}" alt="">` : `<div class="attach-icon">${isImage ? "🖼" : "📄"}</div>`;
    const link = a.dataUrl ? `<a href="${a.dataUrl}" download="${escapeHtml(a.name)}" style="text-decoration:underline;">${escapeHtml(a.name)}</a>` : `${escapeHtml(a.name)} <em style="color:var(--ink-faint);">${t("demoAttachmentNote")}</em>`;
    return `<div class="attach-item">${thumb}
      <div class="attach-info">
        <div class="fname">${link}</div>
        <div class="fmeta">${t("uploadedBy")}: ${escapeHtml(a.uploadedBy.name)} (${roleLabel(a.uploadedBy.role)}) · ${a.facility} · ${fmtDate(a.date)}</div>
      </div></div>`;
  }).join("") : `<p class="empty">${t("noAttachments")}</p>`;

  const uploadRow = canUpload ? `
    <div class="attach-upload">
      <input type="file" id="attach-file-input">
      <button class="btn small secondary" id="attach-upload-btn">${t("uploadFile")}</button>
    </div>` : `<p class="empty">${t("uploadNotAllowed")}</p>`;

  return `<div class="panel"><h2>${t("attachments")}</h2><div class="attach-list">${items}</div>${uploadRow}</div>`;
}

function renderPatientProfile(patientId){
  const p = patientById(patientId);
  if (!p) return "";
  const recs = DB.records.filter(r => r.patientId === patientId);
  const refs = DB.referrals.filter(r => r.patientId === patientId);
  const events = [
    ...recs.map(r => ({date:r.date, type:"record", data:r})),
    ...refs.map(r => ({date:r.createdAt, type:"referral", data:r}))
  ].sort((a,b) => a.date.localeCompare(b.date));
  const status = patientStatus(patientId);

  const items = events.length ? events.map(ev => {
    if (ev.type === "record"){
      const r = ev.data;
      const customLine = r.customText ? `<div class="t-body">${t("otherSymptom")}: ${escapeHtml(r.customText)}</div>` : "";
      const v = r.vitals || {};
      const vitalParts = [];
      if (v.bp) vitalParts.push(`${t("bp")}: ${escapeHtml(v.bp)}`);
      if (v.temp) vitalParts.push(`${t("temp")}: ${escapeHtml(v.temp)}°F`);
      if (v.pulse) vitalParts.push(`${t("pulse")}: ${escapeHtml(v.pulse)} bpm`);
      const vitalsLine = vitalParts.length ? `<div class="t-body" style="font-weight:600;color:var(--primary-dark);">${vitalParts.join(" · ")}</div>` : "";
      return `<div class="t-item">
        <div class="t-head">${r.facility} ${urgencyTag(r.urgency)}</div>
        <div class="t-when">${fmtDate(r.date)}</div>
        ${vitalsLine}
        <div class="t-body">${escapeHtml(r.notes)}</div>
        ${customLine}
        <div class="t-by">${t("loggedBy")}: ${escapeHtml(r.loggedBy.name)} (${roleLabel(r.loggedBy.role)})</div>
      </div>`;
    } else {
      const r = ev.data;
      return `<div class="t-item">
        <div class="t-head">${t("referredTo")}: ${r.to} <span class="tag ${r.status}">${t(r.status)}</span></div>
        <div class="t-when">${fmtDate(r.createdAt)} · ${t("from")} ${r.from}</div>
        ${r.capability ? `<div class="t-body">${t("routedBecause")}: ${capLabel(r.capability)}</div>` : ""}
      </div>`;
    }
  }).join("") : `<p class="empty">${t("noHistory")}</p>`;

  return `
    <div class="panel">
      <div class="profile-head"><h2>${p.name} ${riskTag(p.risk)}</h2></div>
      <div class="profile-meta">
        <span class="tag pid">${p.patientId}</span>
        <span style="font-size:13px;color:var(--ink-soft);">${p.age} yrs · ${t(p.gender)} · ${p.village}</span>
      </div>
      <div class="status-line ${status.cls}">${t("currentStatus")}: ${status.text}</div>
      <h3>${t("medicalHistory")}</h3>
      <div class="timeline">${items}</div>
    </div>
    ${attachmentsBlock(p)}
  `;
}

function viewReferrals(){
  const incoming = DB.referrals.filter(r => r.to === currentFacility);
  const sent = DB.referrals.filter(r => r.from === currentFacility);

  function column(list, emptyLabel){
    const groups = {pending:[], accepted:[], completed:[]};
    list.forEach(r => groups[r.status].push(r));
    return ["pending","accepted","completed"].map(status => `
      <div class="kanban-col"><h3>${t(status)} <span class="count">${groups[status].length}</span></h3>
        ${groups[status].length ? groups[status].map(r => refCard(r)).join("") : `<p class="empty">${emptyLabel}</p>`}
      </div>`).join("");
  }
  function refCard(r){
    const p = patientById(r.patientId);
    let action = "";
    if (r.status === "pending" && r.to === currentFacility) action = `<button class="btn small" data-accept="${r.id}">${t("accept")}</button>`;
    if (r.status === "accepted" && r.to === currentFacility) action = `<button class="btn small secondary" data-complete="${r.id}">${t("complete")}</button>`;
    return `<div class="ref-card ${r.urgency}">
      <div class="name">${p.name} <span class="tag pid">${p.patientId}</span></div>
      <div class="meta">${r.from} → ${r.to}</div>
      <div class="meta">${urgencyTag(r.urgency)} ${r.capability ? `<span class="tag capability">${capLabel(r.capability)}</span>` : ""}</div>
      <div class="actions">${action}</div>
    </div>`;
  }

  return `
    <header class="page-head"><h1>${t("referralsTitle")}</h1><p>${t("referralsSub")} — <strong>${currentFacility}</strong></p></header>
    <div class="panel"><h2>${t("incoming")}</h2><div class="kanban">${column(incoming, t("noneHere"))}</div></div>
    <div class="panel"><h2>${t("sent")}</h2><div class="kanban">${column(sent, t("noneHere"))}</div></div>
  `;
}

/* ============================= wiring per view ============================= */
function wireView(){
  const reset = document.getElementById("reset-demo");
  if (reset) reset.onclick = () => { DB = seedData(); patientSeq = 1006; openPatientId = null; renderMain(); };

  document.querySelectorAll('input[name="mode"]').forEach(r => r.onchange = () => { recordFormMode = r.value; renderMain(); });

  const otherCheck = document.getElementById("other-symptom-check");
  if (otherCheck){
    otherCheck.onchange = () => {
      document.getElementById("other-symptom-text").style.display = otherCheck.checked ? "block" : "none";
    };
  }

  const caseForm = document.getElementById("case-form");
  if (caseForm){
    caseForm.onsubmit = (e) => {
      e.preventDefault();
      let patientId;
      if (recordFormMode === "existing"){
        patientId = document.getElementById("existing-patient").value;
      } else {
        const name = document.getElementById("np-name").value.trim();
        const age = parseInt(document.getElementById("np-age").value, 10) || 0;
        const gender = document.getElementById("np-gender").value;
        const village = document.getElementById("np-village").value.trim();
        const risk = document.getElementById("np-risk").value;
        if (!name) return;
        patientId = uid("p");
        DB.patients.push({id:patientId, patientId: nextPatientId(), name, age, gender, village, risk, attachments:[]});
      }
      const symptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked')).map(c => c.value);
      const customChecked = document.getElementById("other-symptom-check").checked;
      const customText = customChecked ? document.getElementById("other-symptom-text").value.trim() : "";
      const notes = document.getElementById("case-notes").value.trim();
      const vitals = {
        bp: document.getElementById("vital-bp").value.trim(),
        temp: document.getElementById("vital-temp").value.trim(),
        pulse: document.getElementById("vital-pulse").value.trim()
      };
      const { urgency, capability } = assessCase(symptoms, customText);
      DB.records.push({
        id:uid("r"), patientId, facility:currentFacility, date:new Date().toISOString().slice(0,10),
        symptoms, customText, notes, urgency, vitals,
        loggedBy:{ name: session.name, role: session.role }
      });

      let resultBlock = "";
      if (urgency !== "routine"){
        const route = routeReferral(currentFacility, capability);
        if (route.to){
          DB.referrals.push({id:uid("f"), patientId, from:currentFacility, to:route.to, urgency, capability, status:"pending", createdAt:new Date().toISOString().slice(0,10)});
          const skippedLine = route.skipped.length ? `<div style="margin-top:6px;font-size:12.5px;color:#8A4A0F;">${t("skippedNote")} ${route.skipped.join(", ")}</div>` : "";
          resultBlock = `<div class="flash">${t("resultUrgency")}: ${urgencyTag(urgency)} — ${t("refer")} <strong>${route.to}</strong> (${t("routedBecause")}: ${capLabel(capability)}). ${t("referBtn")} ✓${skippedLine}</div>`;
        } else {
          resultBlock = `<div class="flash">${t("resultUrgency")}: ${urgencyTag(urgency)}.</div>`;
        }
      } else {
        resultBlock = `<div class="flash">${t("resultUrgency")}: ${urgencyTag(urgency)} — ${t("noReferralNeeded")}</div>`;
      }
      document.getElementById("main").innerHTML = viewNewCase(resultBlock);
      wireView();
    };
  }

  const search = document.getElementById("patient-search");
  if (search){
    search.oninput = () => {
      const val = search.value;
      document.getElementById("main").innerHTML = viewRecords(val);
      wireView();
      const refocused = document.getElementById("patient-search");
      refocused.focus();
      refocused.setSelectionRange(val.length, val.length);
    };
    document.querySelectorAll("tr[data-patient]").forEach(row => {
      row.onclick = () => { openPatientId = row.dataset.patient; renderMain(); };
    });
  }

  const uploadBtn = document.getElementById("attach-upload-btn");
  if (uploadBtn){
    uploadBtn.onclick = () => {
      const fileInput = document.getElementById("attach-file-input");
      const file = fileInput.files && fileInput.files[0];
      if (!file || !openPatientId) return;
      const reader = new FileReader();
      reader.onload = () => {
        const p = patientById(openPatientId);
        p.attachments.push({
          id:uid("a"), name:file.name, type:file.type || "application/octet-stream", dataUrl:reader.result,
          uploadedBy:{ name: session.name, role: session.role }, facility:currentFacility,
          date:new Date().toISOString().slice(0,10)
        });
        renderMain();
      };
      reader.readAsDataURL(file);
    };
  }

  document.querySelectorAll("[data-accept]").forEach(btn => {
    btn.onclick = () => { const r = DB.referrals.find(x => x.id === btn.dataset.accept); if (r) r.status = "accepted"; renderMain(); };
  });
  document.querySelectorAll("[data-complete]").forEach(btn => {
    btn.onclick = () => { const r = DB.referrals.find(x => x.id === btn.dataset.complete); if (r) r.status = "completed"; renderMain(); };
  });
}

/* ============================= init ============================= */
renderApp();
