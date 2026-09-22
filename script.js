/* ============================= i18n ============================= */
const STR = {
  en:{
    brand:"Sajag Setu", brandSub:"Continuity of care, village to hospital",
    govDept:"Department of Public Health", govState:"Government of Maharashtra",
    footerNote:"Prototype built for Smart India Hackathon (SIH26133). Not an official government service.",
    loginTitle:"Staff Login", loginSub:"Sign in to record and manage patient cases.",
    yourName:"Your name", yourNamePh:"e.g. Sunita Kamble",
    abhaIdLabel:"Enter your ABHA ID", abhaIdPh:"Enter ABHA ID",
    yourRole:"Your role", roleAsha:"ASHA Worker — Sub-Centre", rolePhc:"PHC", roleRural:"Rural Hospital", roleDistrict:"District Hospital",
    loginBtn:"Log in", loggedInAs:"Logged in as", logout:"Log out",
    viewingAs:"Viewing as",
    navDash:"Dashboard", navNew:"New case", navRecords:"Patient records", navReferrals:"Referrals",
    navReferredOut:"Referred out",
    dashTitle:"Facility dashboard", dashSub:"What needs attention at this facility right now.",
    statIncoming:"Incoming referrals", statFollowup:"High-risk follow-ups due", statLogged:"Cases logged (all time)",
    incomingHeading:"Incoming referrals", followupHeading:"Patients needing follow-up",
    noIncoming:"No referrals waiting on this facility.", noFollowup:"No flagged follow-ups right now.",
    capsHeading:"What each facility can actually treat",
    capsSub:"Government facility data guides routing using registered specialists, services, diagnostics, medicines and equipment.",
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
    historyTitle:"Treated patient history", historySub:"All patients treated at this facility within the selected timeline.",
    historyTimeline:"Timeline", last30:"Last 30 days", last6m:"Last 6 months", last1y:"Last 1 year", allTime:"All available records",
    customRange:"Custom date range", customFrom:"From date", customTo:"To date",
    historySearch:"Search history", historySearchPh:"Search by name, village, patient ID, or condition…", filterRisk:"Risk category", filterUrgency:"Urgency", allRisks:"All risk categories", allUrgencies:"All urgencies", allStatuses:"All statuses", filterStatus:"Status", clearFilters:"Clear filters", noHistoryMatches:"No treated patients match these filters.", patientsFound:"patients found", visits:"visits", lastVisit:"Last visit", conditions:"Condition / reason", historyHere:"History at this facility", historyReferred:"Referred cases",
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
    pending:"Awaiting response", inProgress:"In care", unable:"Unable to accommodate", escalatedStatus:"Escalated", completed:"Completed",
    noAcceptNeeded:"Response required", unableBtn:"Reject referral", unablePrompt:"Why is this facility unable to take the case?", complete:"Mark complete", noneHere:"Nothing here.",
    casesHere:"Cases currently at this facility", maleCases:"Male patients", femaleCases:"Female patients", highRisk:"High risk", lowRisk:"Low risk", riskHigh:"High risk", riskLow:"Low risk", rejectConfirm:"Reject this referral? Enter the reason:", rejected:"Rejected", rejectedReason:"Reason", timeRemaining:"Time remaining", dashboardEmpty:"No cases are currently recorded at this facility.",
    urgencyEmergency:"Emergency", urgencyPriority:"Priority", urgencyRoutine:"Routine",
    from:"From", to:"To", referredTo:"Referred to",
    symFever:"Fever", symCough:"Persistent cough", symBreath:"Difficulty breathing", symChest:"Chest pain (possible cardiac)",
    symHighFever:"High fever (>103°F)", symBleed:"Bleeding / pregnancy complication", symInjury:"Severe injury",
    symDehydration:"Diarrhea / severe dehydration (child)", symRoutineCheck:"Routine checkup / follow-up",
    capBasic:"Basic checkup", capDelivery:"Normal delivery", capObstetric:"Obstetric emergency care",
    capPediatric:"Child emergency care", capTrauma:"Emergency surgery / trauma care",
    capInfectious:"Infectious disease care", capSpecialist:"Specialist consultation",
    demoNote:"Prototype demo data — pre-loaded so the referral chain is visible without manual entry.",
    resetDemo:"Reset demo data",
    journeyTitle:"Patient journey", auditTitle:"Audit trail", aiEscalation:"AI auto-escalation",
    aiMonitoring:"Response window", escalated:"Auto-escalated",
    rerouteNoteTemplate:"Re-routed from {from}: {reason}",
    escalationReasonTemplate:"No response within the {window} facility response window", unableReason:"Facility reported an operational problem", nextFacility:"Next nearest registered facility",
    windowLabelEmergency:"30-minute", windowLabelStandard:"30-minute",
    windowLabelEmergencyOblique:"30-minute", windowLabelStandardOblique:"30-minute",
    responseWindowTemplate:"{window} response window", notifyOnly:"Response window active",
    acceptBtn:"Accept referral", confirmReject:"Confirm rejection", cancel:"Cancel",
    acceptedToast:"Accepted — case now in progress at {facility}",
    rerouteToast:"Rejected at {from} — instantly re-routed to {to}",
    noNextFacility:"No other registered facility currently has this capability.",
    contactFacility:"Contact referred facility", contactFacilityHelp:"If you think this case cannot safely wait 30 minutes, call the receiving facility and explain the situation.", callNow:"Call facility", facilityPhone:"Facility phone", demoContact:"Demo contact number",
    respondNow:"Emergency — respond immediately",
    published:"Published", draft:"Draft", locked:"Locked clinical report", publish:"Publish report",
    amend:"Add amendment", amendment:"Amendment", noEdit:"This clinical report is locked. Lower-level roles cannot modify a published report.",
    aiDemo:"Facility response window: 30 minutes", audit:"Audit trail",
    acceptedAt:"Accepted at", escalatedAt:"Escalated at", aiDecision:"AI decision", pendingFor:"Pending for",
    goOffline:"Simulate offline", goOnline:"Back online",
    offlineBannerTitle:"Offline mode — device has no connectivity",
    offlineBannerBody:"New cases and referrals are being saved on this device only. They'll sync automatically once connectivity returns.",
    offlineQueueCount:"queued, not yet synced", syncedToast:"Synced to central record — all queued items sent",
    queuedTag:"Queued — will sync when online",
    referredOutTitle:"Patients referred elsewhere",
    referredOutSub:"Patients first seen here who are now at another facility. Only this facility's own records are shown — clinical details from the receiving facility are not visible here.",
    noReferredOut:"No patients from this facility are currently referred elsewhere.",
    restrictedAccessNote:"This patient has moved on to another facility. Showing only what was recorded here, plus the referral trail — clinical details from the receiving facility are not shown.",
    referralQueueSub:"Referral response queue",
    visitReport:"Visit / report",
    referralLabel:"Referral",
    noAuditEvents:"No audit events.",
    /* NEW: human override of AI triage */
    aiSuggestion:"AI triage suggestion", aiSuggestedUrgency:"AI-assessed urgency",
    overrideUrgencyLabel:"Confirm or change urgency (clinical judgement overrides AI)",
    overrideActiveNote:"You have changed the AI's suggestion. This will be recorded for accountability.",
    overrideReasonLabel:"Reason for change (optional but recommended)",
    overrideReasonPh:"Why does this case need a different urgency than suggested?",
    confirmAndSend:"Confirm & save case",
    humanOverrodeNote:"Urgency changed by clinical staff: AI suggested {ai}, recorded as {human}",
    overrideReferralBtn:"Override AI referral", overrideReferralTitle:"Human override — choose destination", overrideReferralLabel:"Referral destination (clinical judgement overrides AI)", noReferralOption:"No referral", aiRecommendedPrefix:"AI recommends", overrideDestinationNote:"You changed the AI referral destination. This will be recorded in the audit trail.", overrideDestinationReasonPh:"Why should this patient go to a different facility?",
    bumpUrgency:"⬆ This looks more urgent", urgencyBumpedToast:"Urgency raised — sending facility notified",
    /* NEW: video call between facilities */
    videoCall:"Video call", connecting:"Connecting…", connected:"Connected", endCall:"End call",
    callEndedToast:"Call ended and logged in audit trail"
  },
  mr:{
    brand:"सजग सेतू", brandSub:"गावापासून रुग्णालयापर्यंत सलग काळजी",
    govDept:"सार्वजनिक आरोग्य विभाग", govState:"महाराष्ट्र शासन",
    footerNote:"स्मार्ट इंडिया हॅकाथॉन (SIH26133) साठी तयार केलेला नमुना. अधिकृत शासकीय सेवा नाही.",
    loginTitle:"कर्मचारी लॉगिन", loginSub:"रुग्ण प्रकरणे नोंदवण्यासाठी व व्यवस्थापित करण्यासाठी लॉगिन करा.",
    yourName:"तुमचे नाव", yourNamePh:"उदा. सुनिता कांबळे",
    abhaIdLabel:"तुमचा ABHA ID प्रविष्ट करा", abhaIdPh:"ABHA ID प्रविष्ट करा",
    yourRole:"तुमची भूमिका", roleAsha:"आशा कार्यकर्ती — उपकेंद्र", rolePhc:"पीएचसी", roleRural:"ग्रामीण रुग्णालय", roleDistrict:"जिल्हा रुग्णालय",
    loginBtn:"लॉगिन करा", loggedInAs:"लॉगिन केलेले", logout:"लॉगआउट",
    viewingAs:"सध्या पाहत आहात",
    navDash:"डॅशबोर्ड", navNew:"नवीन रुग्ण नोंद", navRecords:"रुग्ण नोंदी", navReferrals:"रेफरल्स",
    navReferredOut:"इतरत्र पाठवलेले",
    dashTitle:"सुविधा डॅशबोर्ड", dashSub:"या सुविधेत सध्या लक्ष देण्याची गरज असलेल्या गोष्टी.",
    statIncoming:"येणारे रेफरल्स", statFollowup:"उच्च-जोखीम पाठपुरावा बाकी", statLogged:"नोंदवलेली प्रकरणे (एकूण)",
    incomingHeading:"येणारे रेफरल्स", followupHeading:"पाठपुरावा आवश्यक असलेले रुग्ण",
    noIncoming:"या सुविधेसाठी कोणतेही रेफरल प्रलंबित नाही.", noFollowup:"सध्या कोणताही पाठपुरावा प्रलंबित नाही.",
    capsHeading:"प्रत्येक सुविधा प्रत्यक्षात काय उपचार करू शकते",
    capsSub:"शासकीय नोंदणीत असलेले तज्ज्ञ, सेवा, तपासण्या, औषधे व उपकरणांची माहिती रेफरल ठरवण्यासाठी वापरली जाते.",
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
    historyTitle:"उपचार घेतलेल्या रुग्णांचा इतिहास", historySub:"निवडलेल्या कालावधीत या सुविधेत उपचार घेतलेल्या सर्व रुग्णांची नोंद.",
    historyTimeline:"कालावधी", last30:"मागील ३० दिवस", last6m:"मागील ६ महिने", last1y:"मागील १ वर्ष", allTime:"उपलब्ध सर्व नोंदी",
    customRange:"सानुकूल कालावधी", customFrom:"पासून तारीख", customTo:"पर्यंत तारीख",
    historySearch:"इतिहास शोधा", historySearchPh:"नाव, गाव, रुग्ण आयडी किंवा आजाराने शोधा…", filterRisk:"जोखीम गट", filterUrgency:"तीव्रता", allRisks:"सर्व जोखीम गट", allUrgencies:"सर्व तीव्रता", allStatuses:"सर्व स्थिती", filterStatus:"स्थिती", clearFilters:"फिल्टर साफ करा", noHistoryMatches:"या फिल्टरशी जुळणारे उपचार घेतलेले रुग्ण नाहीत.", patientsFound:"रुग्ण सापडले", visits:"भेटी", lastVisit:"शेवटची भेट", conditions:"आजार / कारण", historyHere:"या सुविधेतील इतिहास", historyReferred:"रेफरल प्रकरणे",
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
    pending:"प्रतिसाद बाकी", inProgress:"उपचार सुरू", unable:"उपचार देणे शक्य नाही", escalatedStatus:"पुढे पाठवले", completed:"पूर्ण झाले",
    noAcceptNeeded:"प्रतिसाद आवश्यक", unableBtn:"रेफरल नाकारावे", unablePrompt:"ही सुविधा हे प्रकरण का घेऊ शकत नाही?", complete:"पूर्ण म्हणून चिन्हांकित करा", noneHere:"येथे काहीही नाही.",
    casesHere:"या सुविधेतील सध्याची प्रकरणे", maleCases:"पुरुष रुग्ण", femaleCases:"महिला रुग्ण", highRisk:"उच्च जोखीम", lowRisk:"कमी जोखीम", riskHigh:"उच्च जोखीम", riskLow:"कमी जोखीम", rejectConfirm:"हे रेफरल नाकारायचे आहे का? कारण लिहा:", rejected:"नाकारले", rejectedReason:"कारण", timeRemaining:"उरलेला वेळ", dashboardEmpty:"या सुविधेत सध्या कोणतेही प्रकरण नोंदलेले नाही.",
    urgencyEmergency:"तातडीचे", urgencyPriority:"प्राधान्य", urgencyRoutine:"नियमित",
    from:"पासून", to:"पर्यंत", referredTo:"येथे पाठवले",
    symFever:"ताप", symCough:"सततचा खोकला", symBreath:"श्वास घेण्यास त्रास", symChest:"छातीत दुखणे (हृदयाशी संबंधित असू शकते)",
    symHighFever:"अति ताप (>103°F)", symBleed:"रक्तस्त्राव / गर्भधारणेतील गुंतागुंत", symInjury:"गंभीर दुखापत",
    symDehydration:"जुलाब / गंभीर निर्जलीकरण (बालक)", symRoutineCheck:"नियमित तपासणी / पाठपुरावा",
    capBasic:"प्राथमिक तपासणी", capDelivery:"सामान्य प्रसूती", capObstetric:"प्रसूती आपत्कालीन सेवा",
    capPediatric:"बालक आपत्कालीन सेवा", capTrauma:"आपत्कालीन शस्त्रक्रिया / जखम उपचार",
    capInfectious:"संसर्गजन्य आजार उपचार", capSpecialist:"तज्ज्ञ सल्लामसलत",
    demoNote:"नमुना डेमो माहिती — रेफरल साखळी लगेच दिसण्यासाठी आधीच भरलेली आहे.",
    resetDemo:"डेमो माहिती पुन्हा सुरू करा",
    journeyTitle:"रुग्णाचा प्रवास", auditTitle:"ऑडिट ट्रेल", aiEscalation:"AI स्वयंचलित एस्कलेशन",
    aiMonitoring:"प्रतिसाद कालावधी सुरू आहे", escalated:"स्वयंचलितपणे पुढे पाठवले",
    rerouteNoteTemplate:"{from} वरून पुनर्निर्देशित: {reason}",
    escalationReasonTemplate:"{window} प्रतिसाद कालावधीत सुविधा प्रतिसाद देत नाही", unableReason:"सुविधेने कार्यात्मक अडचण कळवली", nextFacility:"पुढील जवळची नोंदणीकृत सुविधा",
    windowLabelEmergency:"30 मिनिटांचा", windowLabelStandard:"30 मिनिटांचा",
    windowLabelEmergencyOblique:"30 मिनिटांच्या", windowLabelStandardOblique:"30 मिनिटांच्या",
    responseWindowTemplate:"{window} प्रतिसाद कालावधी", notifyOnly:"प्रतिसाद कालावधी सुरू",
    acceptBtn:"रेफरल स्वीकारा", confirmReject:"नकार निश्चित करा", cancel:"रद्द करा",
    acceptedToast:"स्वीकारले — प्रकरण आता {facility} येथे उपचाराधीन आहे",
    rerouteToast:"{from} येथे नाकारले — त्वरित {to} कडे पुनर्निर्देशित केले",
    noNextFacility:"या क्षमतेसह सध्या इतर कोणतीही नोंदणीकृत सुविधा उपलब्ध नाही.",
    respondNow:"आपत्कालीन — त्वरित प्रतिसाद द्या",
    published:"प्रकाशित", draft:"मसुदा", locked:"लॉक केलेला वैद्यकीय अहवाल", publish:"अहवाल प्रकाशित करा",
    amend:"दुरुस्ती जोडा", amendment:"दुरुस्ती", noEdit:"हा वैद्यकीय अहवाल लॉक आहे. खालच्या स्तरातील भूमिका प्रकाशित अहवाल बदलू शकत नाहीत.",
    aiDemo:"सुविधेचा प्रतिसाद कालावधी: 30 मिनिटे", audit:"ऑडिट ट्रेल",
    acceptedAt:"स्वीकारले", escalatedAt:"एस्कलेशन", aiDecision:"AI निर्णय", pendingFor:"प्रलंबित कालावधी",
    goOffline:"ऑफलाइन सिम्युलेट करा", goOnline:"पुन्हा ऑनलाइन",
    offlineBannerTitle:"ऑफलाइन मोड — डिव्हाइसला इंटरनेट कनेक्टिव्हिटी नाही",
    offlineBannerBody:"नवीन प्रकरणे आणि रेफरल्स सध्या फक्त याच डिव्हाइसवर जतन होत आहेत. कनेक्टिव्हिटी परत आल्यावर ती आपोआप सिंक होतील.",
    offlineQueueCount:"सिंक बाकी", syncedToast:"मध्यवर्ती नोंदीशी सिंक पूर्ण — सर्व प्रलंबित नोंदी पाठवल्या",
    queuedTag:"रांगेत — ऑनलाइन झाल्यावर सिंक होईल",
    referredOutTitle:"इतरत्र रेफर केलेले रुग्ण",
    referredOutSub:"या सुविधेत सर्वप्रथम तपासलेले, पण आता दुसऱ्या सुविधेत उपचाराधीन असलेले रुग्ण. फक्त याच सुविधेच्या नोंदी दाखवल्या आहेत.",
    noReferredOut:"या सुविधेतून सध्या इतरत्र रेफर केलेला कोणताही रुग्ण नाही.",
    restrictedAccessNote:"हा रुग्ण आता दुसऱ्या सुविधेत उपचाराधीन आहे. फक्त येथे नोंदवलेली माहिती व रेफरल तपशील दाखवले आहेत.",
    referralQueueSub:"रेफरल प्रतिसाद रांग",
    visitReport:"भेट / अहवाल",
    referralLabel:"रेफरल",
    noAuditEvents:"कोणतीही ऑडिट नोंद नाही.",
    contactFacility:"रेफर केलेल्या सुविधेशी संपर्क साधा",
    contactFacilityHelp:"जर हे प्रकरण सुरक्षितपणे 30 मिनिटे थांबू शकत नाही असे वाटत असेल, तर प्राप्तकर्ता सुविधेला कॉल करून परिस्थिती स्पष्ट करा.",
    callNow:"सुविधेला कॉल करा",
    facilityPhone:"सुविधेचा फोन क्रमांक",
    demoContact:"डेमो संपर्क क्रमांक",
    /* NEW: human override of AI triage */
    aiSuggestion:"AI त्रिआज सूचना", aiSuggestedUrgency:"AI-निर्धारित तीव्रता",
    overrideUrgencyLabel:"तीव्रता निश्चित करा किंवा बदला (वैद्यकीय निर्णय AI पेक्षा प्राधान्य घेतो)",
    overrideActiveNote:"तुम्ही AI च्या सूचनेत बदल केला आहे. जबाबदारीसाठी ही नोंद ठेवली जाईल.",
    overrideReasonLabel:"बदलाचे कारण (ऐच्छिक पण शिफारसीय)",
    overrideReasonPh:"या प्रकरणाला सुचवलेल्यापेक्षा वेगळी तीव्रता का आवश्यक आहे?",
    confirmAndSend:"निश्चित करा व प्रकरण जतन करा",
    humanOverrodeNote:"वैद्यकीय कर्मचाऱ्याने तीव्रता बदलली: AI ने {ai} सुचवले, {human} म्हणून नोंदवले",
    overrideReferralBtn:"AI रेफरल बदला", overrideReferralTitle:"मानवी निर्णय — सुविधा निवडा", overrideReferralLabel:"रेफरल सुविधा (वैद्यकीय निर्णय AI पेक्षा प्राधान्य घेतो)", noReferralOption:"रेफरल नाही", aiRecommendedPrefix:"AI ची शिफारस", overrideDestinationNote:"तुम्ही AI ने सुचवलेली रेफरल सुविधा बदलली आहे. हा बदल ऑडिट ट्रेलमध्ये नोंदवला जाईल.", overrideDestinationReasonPh:"हा रुग्ण वेगळ्या सुविधेत का पाठवावा?",
    bumpUrgency:"⬆ हे अधिक तातडीचे वाटते", urgencyBumpedToast:"तीव्रता वाढवली — पाठवणाऱ्या सुविधेला कळवले",
    /* NEW: video call between facilities */
    videoCall:"व्हिडिओ कॉल", connecting:"जोडत आहे…", connected:"जोडले गेले", endCall:"कॉल संपवा",
    callEndedToast:"कॉल संपला व ऑडिट ट्रेलमध्ये नोंदवला"
  }
};
let lang = "en";
function t(key){ return STR[lang][key] || STR.en[key] || key; }

/* ============================= icons ============================= */
const ICONS = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  newcase:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
  records:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/><line x1="8" y1="8" x2="11" y2="8"/></svg>',
  referrals:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="18" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>',
  referredout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
};
const BRIDGE_SVG = `<svg class="bridge-mark" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M2 26C2 26 10 10 24 10C38 10 46 26 46 26" stroke="#E8792B" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="14" x2="10" y2="26" stroke="#9FBBCF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="18" y1="11.5" x2="18" y2="26" stroke="#9FBBCF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="30" y1="11.5" x2="30" y2="26" stroke="#9FBBCF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="38" y1="14" x2="38" y2="26" stroke="#9FBBCF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="2" y1="26" x2="46" y2="26" stroke="#E7EEF3" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;
const GOV_EMBLEM_SVG = `<svg class="gov-emblem" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="24" cy="24" r="21" fill="#0A3D62" stroke="#E8792B" stroke-width="2.5"/>
  <path d="M24 12v24M13 19c0 7 5 12 11 15 6-3 11-8 11-15" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

/* ============================= facility capability model ============================= */
const FACILITIES = [
  { name:"Sub-Centre — Wagholi", level:"Sub-Centre", phone:"020-0000-1001", specialists:[], services:["basic_checkup"], diagnostics:["basic_vitals"], medicines:["ors","iron_folic"], equipment:["bp_monitor","thermometer"] },
  { name:"PHC — Koregaon", level:"PHC", phone:"020-0000-1002", specialists:["general_medicine"], services:["basic_checkup","normal_delivery"], diagnostics:["cbc","blood_sugar"], medicines:["ors","iron_folic","basic_antibiotics"], equipment:["bp_monitor","delivery_kit"] },
  { name:"Rural Hospital — Baramati", level:"Rural Hospital", phone:"02112-000003", specialists:["obstetrics","pediatrics","trauma"], services:["basic_checkup","normal_delivery","obstetric_emergency","pediatric_emergency","trauma_surgery","infectious_disease_care"], diagnostics:["cbc","blood_sugar","ultrasound","xray"], medicines:["ors","iron_folic","emergency_medicines"], equipment:["bp_monitor","ultrasound","xray","ot"] },
  { name:"District Hospital — Pune", level:"District Hospital", phone:"020-0000-1004", specialists:["obstetrics","pediatrics","trauma","cardiology","ophthalmology","general_medicine"], services:["basic_checkup","normal_delivery","obstetric_emergency","pediatric_emergency","trauma_surgery","infectious_disease_care","specialist_consultation"], diagnostics:["cbc","blood_sugar","ultrasound","xray","ct","ecg"], medicines:["ors","iron_folic","emergency_medicines","specialist_medicines"], equipment:["bp_monitor","ultrasound","xray","ct","ecg","ot"] }
];
const FACILITY_NAMES = FACILITIES.map(f => f.name);
function facilityByName(name){ return FACILITIES.find(f => f.name === name); }
function facilityContactHtml(name){
  const f = facilityByName(name);
  if (!f || !f.phone) return "";
  const digits = f.phone.replace(/[^0-9+]/g, "");
  return `<div class="facility-contact"><div><strong>📞 ${t("facilityPhone")}</strong>: ${escapeHtml(f.phone)} <span class="tag">${t("demoContact")}</span></div><a class="btn small secondary" href="tel:${digits}">${t("callNow")}</a></div>`;
}
const CAP_LABEL_KEY = {
  basic_checkup:"capBasic", normal_delivery:"capDelivery", obstetric_emergency:"capObstetric",
  pediatric_emergency:"capPediatric", trauma_surgery:"capTrauma",
  infectious_disease_care:"capInfectious", specialist_consultation:"capSpecialist"
};
function capLabel(cap){ return t(CAP_LABEL_KEY[cap] || cap); }

/* NEW: rough coordinates for distance-based routing (prototype data — approximate) */
const FACILITY_COORDS = {
  "Sub-Centre — Wagholi": {lat:18.5793, lng:73.9089},
  "PHC — Koregaon": {lat:18.5089, lng:74.2295},
  "Rural Hospital — Baramati": {lat:18.1514, lng:74.5815},
  "District Hospital — Pune": {lat:18.5204, lng:73.8567}
};
function haversineKm(a, b){
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI/180;
  const dLng = (b.lng - a.lng) * Math.PI/180;
  const lat1 = a.lat * Math.PI/180, lat2 = b.lat * Math.PI/180;
  const h = Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLng/2)**2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
function distanceBetweenFacilities(nameA, nameB){
  const a = FACILITY_COORDS[nameA], b = FACILITY_COORDS[nameB];
  if (!a || !b) return Infinity;
  return haversineKm(a, b);
}

/* Facility hierarchy: referrals and human overrides only move upward. */
function facilityLevelIndex(name){ return FACILITIES.findIndex(f => f.name === name); }
function isHighestLevelFacility(name){ return facilityLevelIndex(name) === FACILITIES.length - 1; }
function higherFacilitiesFor(name){
  const idx = facilityLevelIndex(name);
  if (idx < 0) return [];
  return FACILITIES.slice(idx + 1);
}
/* NEW: what a capability actually *requires* on-site (medicines + equipment)
   to be treated safely — used so routing doesn't just check "does this
   facility offer this service" but "can it actually deliver it right now". */
const CAPABILITY_REQUIREMENTS = {
  basic_checkup:            { medicines:[], equipment:["bp_monitor"] },
  normal_delivery:          { medicines:["ors","iron_folic"], equipment:["delivery_kit"] },
  obstetric_emergency:      { medicines:["emergency_medicines"], equipment:["ultrasound","ot"] },
  pediatric_emergency:      { medicines:["emergency_medicines"], equipment:["bp_monitor"] },
  trauma_surgery:           { medicines:["emergency_medicines"], equipment:["ot","xray"] },
  /* kept permissive: current facility medicine data doesn't consistently
     tag antibiotics per facility, and this capability isn't currently
     reachable via symptom triage — avoids an accidental routing dead-end */
  infectious_disease_care:  { medicines:[], equipment:[] },
  specialist_consultation:  { medicines:["specialist_medicines"], equipment:["ecg"] }
};

/* FIXED: routing used to be purely hierarchical (facility array order),
   meaning a case could only ever move "forward" in a fixed list. Now it
   finds the NEAREST facility that genuinely has the specialist, the
   service, AND the required medicines/equipment on-site. Accepts an
   excludeNames list so escalation never loops back to a facility that
   has already seen this case. */
function routeReferral(fromFacilityName, capability, specialist, excludeNames){
  const exclude = new Set(excludeNames && excludeNames.length ? excludeNames : [fromFacilityName]);
  const req = CAPABILITY_REQUIREMENTS[capability] || { medicines:[], equipment:[] };
  const skipped = [];
  const fromLevel = facilityLevelIndex(fromFacilityName);
  const capable = FACILITIES.filter(f => {
    if (exclude.has(f.name)) return false;
    if (fromLevel >= 0 && facilityLevelIndex(f.name) <= fromLevel) return false;
    const specialistMatch = specialist ? f.specialists.includes(specialist) : true;
    const serviceMatch = capability ? f.services.includes(capability) : true;
    const medsMatch = req.medicines.every(m => f.medicines.includes(m));
    const equipMatch = req.equipment.every(e => f.equipment.includes(e));
    const ok = specialistMatch && serviceMatch && medsMatch && equipMatch;
    if (!ok) skipped.push(f.name);
    return ok;
  });
  if (!capable.length) return { to: null, skipped, distanceKm: null };
  capable.sort((a, b) => distanceBetweenFacilities(fromFacilityName, a.name) - distanceBetweenFacilities(fromFacilityName, b.name));
  const chosen = capable[0];
  return { to: chosen.name, skipped, distanceKm: Math.round(distanceBetweenFacilities(fromFacilityName, chosen.name)) };
}

/* ============================= automatic facility response / escalation ============================= */
const RESPONSE_WINDOW_HOURS = { emergency: 0.5, priority: 0.5, routine: 0.5 };
const DEMO_ESCALATION_MS = { emergency: 30 * 60 * 1000, priority: 30 * 60 * 1000, routine: 30 * 60 * 1000 };
function responseWindowHoursFor(urgency){ return RESPONSE_WINDOW_HOURS[urgency] || RESPONSE_WINDOW_HOURS.priority; }
function referralCreatedMs(r){
  const value = Date.parse(r.createdAt);
  return Number.isFinite(value) ? value : Date.now();
}
function responseWindowMs(urgency){ return DEMO_ESCALATION_MS[urgency] || DEMO_ESCALATION_MS.priority; }
function windowLabel(urgency){ return urgency === "emergency" ? t("windowLabelEmergency") : t("windowLabelStandard"); }
function windowLabelOblique(urgency){ return urgency === "emergency" ? t("windowLabelEmergencyOblique") : t("windowLabelStandardOblique"); }
function nextRegisteredFacility(fromFacilityName, capability, specialist, excludeNames){
  return routeReferral(fromFacilityName, capability, specialist, excludeNames).to;
}
function appendAudit(r, action, actor, detail){
  r.audit = r.audit || [];
  const at = new Date().toISOString();
  r.audit.push({ at, action, actor:actor || "Sajag Setu", detail:detail || "" });
  DB.audit = DB.audit || [];
  DB.audit.unshift({ id:uid("au"), type:action, message:detail || action, at, actor:null, patientId:r.patientId, referralId:r.id });
}
/* NEW: lightweight simulated video call between the two facilities on a referral */
function openVideoCallModal(referral){
  const p = patientById(referral.patientId);
  const overlay = document.createElement("div");
  overlay.className = "video-modal-overlay";
  overlay.innerHTML = `
    <div class="video-modal">
      <div class="video-modal-head">
        <strong>${escapeHtml(referral.from)} ⇄ ${escapeHtml(referral.to)}</strong>
        <button class="video-close" id="video-close-btn">✕</button>
      </div>
      <div class="video-modal-sub">${p ? `${p.patientId} — ${escapeHtml(p.name)}` : ""}</div>
      <div class="video-panels">
        <div class="video-panel"><div class="video-avatar">🏥</div><div class="video-name">${escapeHtml(referral.from)}</div></div>
        <div class="video-panel"><div class="video-avatar">🏥</div><div class="video-name">${escapeHtml(referral.to)}</div></div>
      </div>
      <div class="video-status" id="video-status">${t("connecting")}</div>
      <div class="video-actions"><button class="btn danger" id="video-end-btn">${t("endCall")}</button></div>
    </div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("show"));
  let seconds = 0, timerId = null;
  setTimeout(() => {
    const statusEl = document.getElementById("video-status");
    if (!statusEl) return;
    statusEl.textContent = `${t("connected")} — 0:00`;
    timerId = setInterval(() => {
      seconds++;
      const m = Math.floor(seconds / 60), s = seconds % 60;
      statusEl.textContent = `${t("connected")} — ${m}:${s.toString().padStart(2,"0")}`;
    }, 1000);
  }, 1500);
  function closeModal(){
    if (timerId) clearInterval(timerId);
    appendAudit(referral, "video-call", session.name, `${referral.from} ⇄ ${referral.to}`);
    overlay.classList.remove("show");
    setTimeout(() => overlay.remove(), 200);
    showToast(t("callEndedToast"), "success");
  }
  overlay.querySelector("#video-close-btn").onclick = closeModal;
  overlay.querySelector("#video-end-btn").onclick = closeModal;
}
function autoEscalateReferral(r, reason){
  if (!r || !["notified","in_progress","unable","rejected"].includes(r.status)) return false;
  const visited = referralRouteChain(r); // never re-route back to a facility already tried
  const route = routeReferral(r.to, r.capability, r.specialist, visited);
  const next = route.to;
  if (!next) return false;
  r.distanceKm = route.distanceKm;
  const oldTo = r.to;
  r.routeHistory = r.routeHistory || [];
  r.routeHistory.push({
    from: oldTo,
    to: next,
    reason: reason || "",
    at: new Date().toISOString()
  });
  r.escalationCount = (r.escalationCount || 0) + 1;
  r.previousFacility = oldTo;
  r.to = next;
  r.status = "notified";
  r.createdAt = new Date().toISOString();
  r.lastEscalatedAt = r.createdAt;
  r.escalationReason = reason || t("escalationReasonTemplate").replace("{window}", windowLabelOblique(r.urgency));
  appendAudit(r, "auto-escalated", "Sajag Setu Escalation Engine", `${oldTo} → ${next}: ${r.escalationReason}`);
  return true;
}
function processAutomaticEscalations(){
  let changed = false;
  DB.referrals.forEach(r => {
    if (r.status !== "notified") return;
    if (Date.now() - referralCreatedMs(r) >= responseWindowMs(r.urgency)){
      const reason = t("escalationReasonTemplate").replace("{window}", windowLabelOblique(r.urgency));
      changed = autoEscalateReferral(r, reason) || changed;
    }
  });
  return changed;
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

function assessCase(selectedKeys, customText){
  const defs = SYMPTOM_DEFS.filter(s => selectedKeys.includes(s.key));
  let top = defs.length ? defs[0] : null;
  defs.forEach(d => { if (!top || URGENCY_RANK[d.urgency] > URGENCY_RANK[top.urgency]) top = d; });
  if (customText && customText.trim()){
    const lower = customText.toLowerCase();
    const customDef = /eye|vision|blurred|ophthalm/.test(lower)
      ? { urgency:"priority", capability:"specialist_consultation", specialist:"ophthalmology" }
      : { urgency:"priority", capability:"basic_checkup" };
    if (!top || URGENCY_RANK[customDef.urgency] > URGENCY_RANK[top.urgency]) top = customDef;
  }
  if (!top) return { urgency:"routine", capability:"basic_checkup" };
  return { urgency: top.urgency, capability: top.capability, specialist: top.specialist || null };
}

/* ============================= session (login) ============================= */
let session = null;
const ROLE_KEYS = ["roleAsha","rolePhc","roleRural","roleDistrict"];
const ROLE_FACILITIES = {
  roleAsha:[FACILITY_NAMES[0]],
  rolePhc:[FACILITY_NAMES[1]],
  roleRural:[FACILITY_NAMES[2]],
  roleDistrict:[FACILITY_NAMES[3]],
  /* NEW: district officer — read-only view across every facility, no single-facility access */
};
function allowedFacilitiesForRole(role){ return ROLE_FACILITIES[role] || FACILITY_NAMES; }
/* NEW: helpers for the "__ALL__" pseudo-facility used by the district view */
function facilityDisplayName(name){ return name === "__ALL__" ? t("allFacilities") : name; }
function matchesCurrentFacility(name){ return currentFacility === "__ALL__" || name === currentFacility; }
function canPublishRecord(r){ return !!session && ["roleRural","roleDistrict"].includes(session.role) && r.facility===currentFacility && !r.published; }
function canAmendRecord(r){ return !!session && ["roleRural","roleDistrict"].includes(session.role) && r.facility===currentFacility && !!r.published; }
function auditEvent(type, message, extra={}){
  DB.audit = DB.audit || []; DB.audit.unshift({id:uid("au"), type, message, at:new Date().toISOString(), actor:session?{name:session.name,role:session.role}:null, ...extra});
}

/* ============================= patient ID generator ============================= */
let patientSeq = 1020;
function nextPatientId(){
  const id = "MH26-" + String(patientSeq).padStart(4,"0");
  patientSeq++;
  return id;
}

/* ============================= date helpers (relative to "today") ============================= */
function daysAgo(n){
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}
function isoDaysAgo(n, secondsAgo){
  const d = new Date();
  d.setDate(d.getDate() - n);
  if (secondsAgo) d.setSeconds(d.getSeconds() - secondsAgo);
  return d.toISOString();
}

/* ============================= data model ============================= */
function seedData(){
  return {
    patients: [
      {id:"p1", patientId:"MH26-1001", name:"Meera Jadhav", age:27, gender:"female", village:"Wagholi", risk:"maternal", attachments:[]},
      {id:"p2", patientId:"MH26-1002", name:"Arjun Pawar", age:5, gender:"male", village:"Wagholi", risk:"child", attachments:[]},
      {id:"p3", patientId:"MH26-1003", name:"Devidas Shinde", age:58, gender:"male", village:"Koregaon", risk:"chronic", attachments:[
        {id:"a1", name:"Blood Sugar Report.pdf", type:"application/pdf", dataUrl:null,
         uploadedBy:{name:"Dr. Patil", role:"roleRural"}, facility:"Sub-Centre — Wagholi", date:daysAgo(400)}
      ]},
      {id:"p4", patientId:"MH26-1004", name:"Sunita More", age:34, gender:"female", village:"Wagholi", risk:"none", attachments:[]},
      {id:"p5", patientId:"MH26-1005", name:"Kavita Bhosale", age:24, gender:"female", village:"Wagholi", risk:"maternal", attachments:[
        {id:"a2", name:"Obstetric Ultrasound Report - 28 Weeks.pdf", type:"application/pdf", dataUrl:null,
         uploadedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, facility:"Rural Hospital — Baramati", date:daysAgo(9)},
        {id:"a3", name:"BP & Lab Chart - Admission.pdf", type:"application/pdf", dataUrl:null,
         uploadedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, facility:"Rural Hospital — Baramati", date:daysAgo(9)}
      ]},
      {id:"p6", patientId:"MH26-1006", name:"Rohit Deshmukh", age:42, gender:"male", village:"Koregaon", risk:"none", attachments:[]},
      {id:"p7", patientId:"MH26-1007", name:"Ganesh Kale", age:65, gender:"male", village:"Wagholi", risk:"chronic", attachments:[]},
      {id:"p8", patientId:"MH26-1008", name:"Anita Salunkhe", age:30, gender:"female", village:"Wagholi", risk:"maternal", attachments:[]},
      {id:"p9", patientId:"MH26-1009", name:"Prachi Jadhav", age:2, gender:"female", village:"Wagholi", risk:"child", attachments:[]},
      {id:"p10", patientId:"MH26-1010", name:"Meenakshi Jagtap", age:45, gender:"female", village:"Koregaon", risk:"chronic", attachments:[]},
      {id:"p11", patientId:"MH26-1011", name:"Yash Kulkarni", age:8, gender:"male", village:"Koregaon", risk:"child", attachments:[]},
      {id:"p12", patientId:"MH26-1012", name:"Sanjay Bhalerao", age:50, gender:"male", village:"Koregaon", risk:"none", attachments:[
        {id:"a4", name:"ECG & Cardiac Enzyme Report.pdf", type:"application/pdf", dataUrl:null,
         uploadedBy:{name:"Dr. Kulkarni", role:"roleRural"}, facility:"District Hospital — Pune", date:daysAgo(59)}
      ]},
      {id:"p13", patientId:"MH26-1013", name:"Rajendra Pathak", age:70, gender:"male", village:"Baramati", risk:"chronic", attachments:[]},
      {id:"p14", patientId:"MH26-1014", name:"Sarika Wagh", age:26, gender:"female", village:"Baramati", risk:"maternal", attachments:[]},
      {id:"p15", patientId:"MH26-1015", name:"Om Jadhav", age:12, gender:"male", village:"Baramati", risk:"none", attachments:[]},
      {id:"p16", patientId:"MH26-1016", name:"Vikram Solanki", age:55, gender:"male", village:"Wagholi", risk:"chronic", attachments:[
        {id:"a5", name:"ECG Report - District Hospital.pdf", type:"application/pdf", dataUrl:null,
         uploadedBy:{name:"Dr. Kulkarni", role:"roleRural"}, facility:"District Hospital — Pune", date:daysAgo(279)}
      ]},
      {id:"p17", patientId:"MH26-1017", name:"Sneha Kadam", age:29, gender:"female", village:"Koregaon", risk:"maternal", attachments:[]},
      {id:"p18", patientId:"MH26-1018", name:"Iqbal Shaikh", age:63, gender:"male", village:"Pune", risk:"chronic", attachments:[
        {id:"a6", name:"Cardiology Follow-up Report.pdf", type:"application/pdf", dataUrl:null,
         uploadedBy:{name:"Dr. Kulkarni", role:"roleRural"}, facility:"District Hospital — Pune", date:daysAgo(100)}
      ]},
      {id:"p19", patientId:"MH26-1019", name:"Farhan Ansari", age:35, gender:"male", village:"Baramati", risk:"none", attachments:[]}
    ],
    records: [
      {id:"r1", patientId:"p1", facility:"Sub-Centre — Wagholi", date:daysAgo(4), symptoms:["symBleed"], customText:"", notes:"Reported light bleeding, 7 months pregnant.", urgency:"emergency", vitals:{bp:"100/60",temp:"98.6",pulse:"110"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r2", patientId:"p1", facility:"Rural Hospital — Baramati", date:daysAgo(4), symptoms:["symBleed"], customText:"", notes:"Arrived directly — PHC does not handle obstetric emergencies. Stabilised, kept for observation.", urgency:"emergency", vitals:{bp:"110/70",temp:"98.4",pulse:"90"}, loggedBy:{name:"Dr. Naik", role:"roleRural"}, published:true, publishedAt:isoDaysAgo(4)},
      {id:"r3", patientId:"p2", facility:"PHC — Koregaon", date:daysAgo(3), symptoms:["symDehydration","symHighFever"], customText:"", notes:"Severe dehydration, needs IV fluids not available on site.", urgency:"priority", vitals:{bp:"",temp:"104.1",pulse:"130"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}, published:false},
      {id:"r4", patientId:"p6", facility:"PHC — Koregaon", date:daysAgo(5), symptoms:["symFever"], customText:"", notes:"Low-risk fever case under local observation.", urgency:"routine", vitals:{bp:"122/78",temp:"99.1",pulse:"82"}, loggedBy:{name:"PHC Team", role:"rolePhc"}, published:false},
      {id:"r5", patientId:"p3", facility:"Sub-Centre — Wagholi", date:daysAgo(400), symptoms:["symRoutineCheck"], customText:"", notes:"Routine sugar check, stable, due again in 4 weeks.", urgency:"routine", vitals:{bp:"128/82",temp:"98.2",pulse:"76"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r5b", patientId:"p3", facility:"Sub-Centre — Wagholi", date:daysAgo(20), symptoms:["symRoutineCheck"], customText:"", notes:"Follow-up sugar check, medication continued, stable.", urgency:"routine", vitals:{bp:"126/80",temp:"98.4",pulse:"74"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r6", patientId:"p4", facility:"Sub-Centre — Wagholi", date:daysAgo(12), symptoms:["symFever","symCough"], customText:"", notes:"Mild seasonal fever, advised rest and fluids.", urgency:"routine", vitals:{bp:"118/76",temp:"99.5",pulse:"84"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r7", patientId:"p5", facility:"Sub-Centre — Wagholi", date:daysAgo(90), symptoms:["symRoutineCheck"], customText:"", notes:"First antenatal checkup, 12 weeks pregnant. Iron and folic acid supplements given.", urgency:"routine", vitals:{bp:"110/70",temp:"98.4",pulse:"78"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r8", patientId:"p5", facility:"Sub-Centre — Wagholi", date:daysAgo(60), symptoms:["symRoutineCheck"], customText:"", notes:"Second antenatal visit, 16 weeks. Blood pressure and weight normal.", urgency:"routine", vitals:{bp:"112/72",temp:"98.6",pulse:"80"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r9", patientId:"p5", facility:"Sub-Centre — Wagholi", date:daysAgo(10), symptoms:[], customText:"Sudden swelling in feet and hands, severe headache and blurred vision since yesterday", notes:"28 weeks pregnant. Danger signs noted as per ASHA checklist — referring for evaluation.", urgency:"priority", vitals:{bp:"148/96",temp:"98.8",pulse:"92"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r10", patientId:"p5", facility:"PHC — Koregaon", date:daysAgo(10), symptoms:["symBleed"], customText:"", notes:"On examination: BP 150/100, pedal edema +2. Suspected pre-eclampsia — referring immediately.", urgency:"emergency", vitals:{bp:"150/100",temp:"98.6",pulse:"96"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}, published:false},
      {id:"r11", patientId:"p5", facility:"Rural Hospital — Baramati", date:daysAgo(9), symptoms:["symBleed"], customText:"", notes:"Admitted for BP management and monitoring. Ultrasound and lab investigations done. Currently stable.", urgency:"priority", vitals:{bp:"138/90",temp:"98.4",pulse:"88"}, loggedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, published:true, publishedAt:isoDaysAgo(9)},
      {id:"r12", patientId:"p7", facility:"Sub-Centre — Wagholi", date:daysAgo(365), symptoms:["symRoutineCheck"], customText:"", notes:"Annual diabetes check, sugar levels borderline high.", urgency:"routine", vitals:{bp:"130/85",temp:"98.4",pulse:"78"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r13", patientId:"p7", facility:"Sub-Centre — Wagholi", date:daysAgo(200), symptoms:["symRoutineCheck"], customText:"", notes:"Follow-up sugar check, medication adjusted.", urgency:"routine", vitals:{bp:"128/82",temp:"98.2",pulse:"76"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r14", patientId:"p7", facility:"Sub-Centre — Wagholi", date:daysAgo(60), symptoms:["symRoutineCheck"], customText:"", notes:"Routine diabetes & BP monitoring, stable on medication.", urgency:"routine", vitals:{bp:"126/80",temp:"98.6",pulse:"74"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r15", patientId:"p8", facility:"Sub-Centre — Wagholi", date:daysAgo(365), symptoms:["symRoutineCheck"], customText:"", notes:"First antenatal visit, 10 weeks pregnant.", urgency:"routine", vitals:{bp:"116/74",temp:"98.4",pulse:"80"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r16", patientId:"p8", facility:"Sub-Centre — Wagholi", date:daysAgo(300), symptoms:["symRoutineCheck"], customText:"", notes:"Third trimester checkup, referring for institutional delivery.", urgency:"priority", vitals:{bp:"122/80",temp:"98.6",pulse:"82"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r17", patientId:"p8", facility:"PHC — Koregaon", date:daysAgo(295), symptoms:["symRoutineCheck"], customText:"", notes:"Admitted for delivery. Normal delivery conducted successfully, mother and baby healthy.", urgency:"routine", vitals:{bp:"118/76",temp:"98.4",pulse:"80"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}, published:true, publishedAt:isoDaysAgo(295)},
      {id:"r18", patientId:"p9", facility:"Sub-Centre — Wagholi", date:daysAgo(46), symptoms:["symDehydration","symHighFever"], customText:"", notes:"Severe dehydration, needs IV fluids not available on site.", urgency:"priority", vitals:{bp:"",temp:"103.8",pulse:"128"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r19", patientId:"p9", facility:"Rural Hospital — Baramati", date:daysAgo(45), symptoms:["symDehydration"], customText:"", notes:"IV fluids administered, child stabilized and recovered. Discharged after 24hr observation.", urgency:"priority", vitals:{bp:"",temp:"99.2",pulse:"100"}, loggedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, published:true, publishedAt:isoDaysAgo(45)},
      {id:"r20", patientId:"p10", facility:"PHC — Koregaon", date:daysAgo(200), symptoms:["symRoutineCheck"], customText:"", notes:"Thyroid function follow-up, dosage stable.", urgency:"routine", vitals:{bp:"120/78",temp:"98.4",pulse:"76"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}, published:false},
      {id:"r21", patientId:"p11", facility:"PHC — Koregaon", date:daysAgo(150), symptoms:["symHighFever","symDehydration"], customText:"", notes:"High fever with dehydration, referring for pediatric care.", urgency:"priority", vitals:{bp:"",temp:"104.0",pulse:"126"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}, published:false},
      {id:"r22", patientId:"p11", facility:"Rural Hospital — Baramati", date:daysAgo(149), symptoms:["symHighFever"], customText:"", notes:"Treated with IV fluids and antipyretics, recovered well.", urgency:"priority", vitals:{bp:"",temp:"99.0",pulse:"92"}, loggedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, published:true, publishedAt:isoDaysAgo(149)},
      {id:"r23", patientId:"p12", facility:"PHC — Koregaon", date:daysAgo(60), symptoms:["symChest"], customText:"", notes:"Sudden chest pain, suspected cardiac event, referring urgently for specialist evaluation.", urgency:"emergency", vitals:{bp:"160/100",temp:"98.2",pulse:"110"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}, published:false},
      {id:"r24", patientId:"p12", facility:"District Hospital — Pune", date:daysAgo(59), symptoms:["symChest"], customText:"", notes:"ECG and cardiac enzymes done. Diagnosed with angina, started on medication, stable on discharge.", urgency:"emergency", vitals:{bp:"140/90",temp:"98.4",pulse:"84"}, loggedBy:{name:"Dr. Kulkarni", role:"roleRural"}, published:true, publishedAt:isoDaysAgo(59)},
      {id:"r25", patientId:"p13", facility:"Rural Hospital — Baramati", date:daysAgo(90), symptoms:["symRoutineCheck"], customText:"", notes:"Admitted for chronic kidney monitoring, stable, discharged with medication adjustment.", urgency:"routine", vitals:{bp:"132/84",temp:"98.4",pulse:"80"}, loggedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, published:false},
      {id:"r26", patientId:"p14", facility:"PHC — Koregaon", date:daysAgo(26), symptoms:["symBleed"], customText:"", notes:"Suspected placental complication, referring immediately.", urgency:"emergency", vitals:{bp:"110/70",temp:"98.6",pulse:"98"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}, published:false},
      {id:"r27", patientId:"p14", facility:"Rural Hospital — Baramati", date:daysAgo(25), symptoms:["symBleed"], customText:"", notes:"Admitted for close monitoring of placental position. Currently stable, continuing observation.", urgency:"emergency", vitals:{bp:"114/74",temp:"98.4",pulse:"90"}, loggedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, published:false},
      {id:"r28", patientId:"p15", facility:"Rural Hospital — Baramati", date:daysAgo(5), symptoms:["symInjury"], customText:"", notes:"Fall injury, minor fracture treated, cast applied. Follow-up in 2 weeks.", urgency:"emergency", vitals:{bp:"116/76",temp:"98.6",pulse:"88"}, loggedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, published:true, publishedAt:isoDaysAgo(5)},
      {id:"r29", patientId:"p16", facility:"Sub-Centre — Wagholi", date:daysAgo(305), symptoms:["symRoutineCheck"], customText:"", notes:"Routine BP check flagged elevated readings, advised follow-up.", urgency:"routine", vitals:{bp:"144/92",temp:"98.4",pulse:"82"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r30", patientId:"p16", facility:"Sub-Centre — Wagholi", date:daysAgo(280), symptoms:["symChest"], customText:"", notes:"Reported chest discomfort, referring urgently for cardiac evaluation.", urgency:"emergency", vitals:{bp:"150/96",temp:"98.6",pulse:"100"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r31", patientId:"p16", facility:"District Hospital — Pune", date:daysAgo(279), symptoms:["symChest"], customText:"", notes:"ECG confirmed mild cardiac arrhythmia, started on long-term medication, discharged with cardiology follow-up plan.", urgency:"emergency", vitals:{bp:"138/88",temp:"98.4",pulse:"78"}, loggedBy:{name:"Dr. Kulkarni", role:"roleRural"}, published:true, publishedAt:isoDaysAgo(279)},
      {id:"r32", patientId:"p16", facility:"PHC — Koregaon", date:daysAgo(200), symptoms:["symRoutineCheck"], customText:"", notes:"Local follow-up BP and medication check as advised by District Hospital, stable.", urgency:"routine", vitals:{bp:"128/84",temp:"98.4",pulse:"76"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}, published:false},
      {id:"r33", patientId:"p16", facility:"Sub-Centre — Wagholi", date:daysAgo(100), symptoms:["symRoutineCheck"], customText:"", notes:"Routine cardiac medication follow-up, blood pressure well controlled.", urgency:"routine", vitals:{bp:"126/82",temp:"98.4",pulse:"74"}, loggedBy:{name:"Sunita Kamble", role:"roleAsha"}, published:false},
      {id:"r34", patientId:"p17", facility:"PHC — Koregaon", date:daysAgo(500), symptoms:["symBleed"], customText:"", notes:"Antepartum hemorrhage, referring emergency to higher facility.", urgency:"emergency", vitals:{bp:"100/60",temp:"98.6",pulse:"112"}, loggedBy:{name:"Rekha Pawar", role:"rolePhc"}, published:false},
      {id:"r35", patientId:"p17", facility:"Rural Hospital — Baramati", date:daysAgo(499), symptoms:["symBleed"], customText:"", notes:"Emergency management done, blood transfusion given, mother and baby stable on discharge.", urgency:"emergency", vitals:{bp:"110/70",temp:"98.4",pulse:"90"}, loggedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, published:true, publishedAt:isoDaysAgo(499)},
      {id:"r36", patientId:"p18", facility:"District Hospital — Pune", date:daysAgo(700), symptoms:["symRoutineCheck"], customText:"", notes:"Cardiology follow-up post angioplasty, stable.", urgency:"routine", vitals:{bp:"128/80",temp:"98.4",pulse:"76"}, loggedBy:{name:"Dr. Kulkarni", role:"roleRural"}, published:false},
      {id:"r37", patientId:"p18", facility:"District Hospital — Pune", date:daysAgo(400), symptoms:["symRoutineCheck"], customText:"", notes:"Annual cardiology review, medication continued.", urgency:"routine", vitals:{bp:"126/78",temp:"98.4",pulse:"74"}, loggedBy:{name:"Dr. Kulkarni", role:"roleRural"}, published:false},
      {id:"r38", patientId:"p18", facility:"District Hospital — Pune", date:daysAgo(100), symptoms:["symRoutineCheck"], customText:"", notes:"Routine cardiology check-up, ECG normal.", urgency:"routine", vitals:{bp:"124/78",temp:"98.4",pulse:"72"}, loggedBy:{name:"Dr. Kulkarni", role:"roleRural"}, published:false},
      /* FIXED: seed data previously referred a pediatric-emergency case to
         PHC — Koregaon, which has no pediatric_emergency service — the
         routing engine would never actually do this. */
      {id:"r39", patientId:"p19", facility:"Rural Hospital — Baramati", date:daysAgo(0), symptoms:["symChest"], customText:"", notes:"Reporting chest pain, referring urgently to district hospital for specialist care.", urgency:"emergency", vitals:{bp:"158/98",temp:"98.6",pulse:"104"}, loggedBy:{name:"Dr. Ashwini Naik", role:"roleRural"}, published:false}
    ],
    referrals: [
      {id:"f1", patientId:"p1", from:"Sub-Centre — Wagholi", to:"Rural Hospital — Baramati", urgency:"emergency", capability:"obstetric_emergency", status:"in_progress", createdAt:isoDaysAgo(4)},
      {id:"f2", patientId:"p2", from:"Sub-Centre — Wagholi", to:"Rural Hospital — Baramati", urgency:"priority", capability:"pediatric_emergency", status:"notified", createdAt:isoDaysAgo(0,2.5)},
      {id:"f3", patientId:"p5", from:"Sub-Centre — Wagholi", to:"PHC — Koregaon", urgency:"priority", capability:"basic_checkup", status:"completed", createdAt:isoDaysAgo(10)},
      {id:"f4", patientId:"p5", from:"PHC — Koregaon", to:"Rural Hospital — Baramati", urgency:"emergency", capability:"obstetric_emergency", status:"in_progress", createdAt:isoDaysAgo(10)},
      {id:"f5", patientId:"p8", from:"Sub-Centre — Wagholi", to:"PHC — Koregaon", urgency:"priority", capability:"normal_delivery", status:"completed", createdAt:isoDaysAgo(298)},
      {id:"f6", patientId:"p9", from:"Sub-Centre — Wagholi", to:"Rural Hospital — Baramati", urgency:"priority", capability:"pediatric_emergency", status:"completed", createdAt:isoDaysAgo(46)},
      {id:"f7", patientId:"p11", from:"PHC — Koregaon", to:"Rural Hospital — Baramati", urgency:"priority", capability:"pediatric_emergency", status:"completed", createdAt:isoDaysAgo(150)},
      {id:"f8", patientId:"p12", from:"PHC — Koregaon", to:"District Hospital — Pune", urgency:"emergency", capability:"specialist_consultation", status:"completed", createdAt:isoDaysAgo(60)},
      {id:"f9", patientId:"p14", from:"PHC — Koregaon", to:"Rural Hospital — Baramati", urgency:"emergency", capability:"obstetric_emergency", status:"in_progress", createdAt:isoDaysAgo(26)},
      {id:"f10", patientId:"p16", from:"Sub-Centre — Wagholi", to:"District Hospital — Pune", urgency:"emergency", capability:"specialist_consultation", status:"completed", createdAt:isoDaysAgo(280)},
      {id:"f11", patientId:"p17", from:"PHC — Koregaon", to:"Rural Hospital — Baramati", urgency:"emergency", capability:"obstetric_emergency", status:"completed", createdAt:isoDaysAgo(500)},
      {id:"f12", patientId:"p19", from:"Rural Hospital — Baramati", to:"District Hospital — Pune", urgency:"emergency", capability:"specialist_consultation", status:"notified", createdAt:isoDaysAgo(0,8)}
    ],
    audit: [
      {id:"au1",type:"publish",message:"Dr. Ashwini Naik published clinical report for Kavita Bhosale",at:isoDaysAgo(9),actor:{name:"Dr. Ashwini Naik",role:"roleRural"}},
      {id:"au2",type:"referral",message:"Obstetric emergency referral moved into care at Rural Hospital Baramati",at:isoDaysAgo(4),actor:{name:"Facility Team",role:"rolePhc"}},
      {id:"au3",type:"publish",message:"Dr. Kulkarni published clinical report for Vikram Solanki",at:isoDaysAgo(279),actor:{name:"Dr. Kulkarni",role:"roleRural"}}
    ]
  };
}
let DB = seedData();
DB.referrals.forEach(r=>{
  if(r.status==="pending") r.status="notified";
  if(!r.createdAtMs) r.createdAtMs=Date.parse(r.createdAt) || Date.now();
  if(!r.pendingSince) r.pendingSince=r.createdAtMs;
  if(!r.history) r.history=[];
  if(!r.routeHistory) r.routeHistory=[];
  if(!r.responseWindowHours) r.responseWindowHours=3;
});
let currentFacility = FACILITY_NAMES[0];
let currentView = "dashboard";
let recordFormMode = "existing";
let openPatientId = null;
let rejectingId = null;
/* NEW: holds an AI-assessed case awaiting human confirmation/override before it's saved */
let pendingCase = null;
let historyFilters = {range:"all", risk:"all", urgency:"all", status:"all", customFrom:"", customTo:""};
let offlineMode = false;
let pendingSyncIds = [];
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
function showToast(message, tone){
  const el = document.createElement("div");
  el.className = `toast-banner${tone ? " " + tone : ""}`;
  el.textContent = message;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => { el.classList.remove("show"); setTimeout(() => el.remove(), 300); }, 4200);
}

function patientStatus(patientId){
  const refs = DB.referrals.filter(r => r.patientId === patientId).slice().sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
  const recs = DB.records.filter(r => r.patientId === patientId).slice().sort((a,b)=>b.date.localeCompare(a.date));
  if (refs.length && refs[0].status !== "completed"){
    if (refs[0].status === "notified") return { text: `${t("statusAwaiting")} ${refs[0].to}`, cls:"wait" };
    if (refs[0].status === "in_progress") return { text: `${t("statusUnderTreatment")} ${refs[0].to}`, cls:"" };
  }
  if (recs.length) return { text: `${t("statusDischarged")} ${recs[0].facility} ${t("onDate")} ${fmtDate(recs[0].date)}`, cls:"done" };
  return { text: t("noActivity"), cls:"" };
}

/* ============================= access-control: where is this patient RIGHT NOW ============================= */
function getPatientCurrentFacility(patientId){
  const refs = DB.referrals.filter(r => r.patientId === patientId)
    .slice()
    .sort((a,b) => referralCreatedMs(a) - referralCreatedMs(b));
  const activeRef = [...refs].reverse().find(r => r.status === "notified" || r.status === "in_progress");
  if (activeRef) return activeRef.to;
  const recs = DB.records.filter(r => r.patientId === patientId).slice().sort((a,b) => a.date.localeCompare(b.date));
  return recs.length ? recs[recs.length - 1].facility : null;
}
/* FIXED: privacy — a facility should only see patients physically present
   there. NEW: the district officer's "__ALL__" pseudo-facility is the one
   exception, since that role exists specifically to monitor everything. */
function isPatientCurrentlyHere(patientId){
  if (currentFacility === "__ALL__") return true;
  return getPatientCurrentFacility(patientId) === currentFacility;
}
function referralRouteChain(r){
  const chain = [r.from];
  if (r.routeHistory && r.routeHistory.length){
    chain.push(r.routeHistory[0].from);
    r.routeHistory.forEach(h => chain.push(h.to));
  } else {
    chain.push(r.to);
  }
  return chain;
}

/* ============================= custom date-range filter helper ============================= */
function isWithinHistoryRange(dateStr, hf){
  if (hf.range === "all") return true;
  const ts = Date.parse(dateStr);
  if (!Number.isFinite(ts)) return true;
  if (hf.range === "custom"){
    const fromTs = hf.customFrom ? Date.parse(hf.customFrom) : -Infinity;
    const toTs = hf.customTo ? Date.parse(hf.customTo) + 86399999 : Infinity;
    return ts >= fromTs && ts <= toTs;
  }
  const rangeMs = {"30d":30*86400000, "6m":180*86400000, "1y":365*86400000}[hf.range] || 365*86400000;
  return ts >= (Date.now() - rangeMs);
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
        <button id="connection-toggle" class="conn-pill ${offlineMode?'is-offline':''}">
          <span class="dot"></span>${offlineMode ? t("goOnline") : t("goOffline")}${pendingSyncIds.length ? ` (${pendingSyncIds.length})` : ""}
        </button>
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
            <label>${t("abhaIdLabel")}</label>
            <input type="text" id="login-abha" placeholder="${t("abhaIdPh")}" autocomplete="off" required>
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
    const abhaId = document.getElementById("login-abha").value.trim();
    const role = document.getElementById("login-role").value;
    if (!abhaId) return;
    session = { abhaId, name: abhaId, role };
    const allowed = allowedFacilitiesForRole(role);
    if (!allowed.includes(currentFacility)) currentFacility = allowed[0];
    auditEvent("login", `ABHA ID ${abhaId} logged in as ${roleLabel(role)}`);
    renderApp();
  };
}

function wireShell(){
  const sel = document.getElementById("facility-select");
  const allowedFacilities = allowedFacilitiesForRole(session.role);
  if (!allowedFacilities.includes(currentFacility)) currentFacility = allowedFacilities[0];
  sel.innerHTML = allowedFacilities.map(f => `<option value="${f}" ${f===currentFacility?"selected":""}>${facilityDisplayName(f)}</option>`).join("");
  sel.onchange = e => { if (allowedFacilities.includes(e.target.value)){ currentFacility = e.target.value; renderMain(); } };
  const navItems = [["dashboard","navDash"], ["newcase","navNew"], ["records","navRecords"], ["referredout","navReferredOut"], ["referrals","navReferrals"]];
  document.getElementById("nav").innerHTML = navItems.map(([key,label]) =>
    `<button data-view="${key}" class="${currentView===key?"active":""}">${ICONS[key]}${t(label)}</button>`
  ).join("");
  document.querySelectorAll("#nav button").forEach(b=>{
    b.onclick = () => { currentView = b.dataset.view; rejectingId = null; renderMain(); };
  });

  document.querySelectorAll("#lang-toggle button").forEach(b=>{
    b.onclick = () => { lang = b.dataset.lang; renderApp(); };
  });

  document.getElementById("logout-btn").onclick = () => { session = null; openPatientId = null; renderApp(); };

  const connBtn = document.getElementById("connection-toggle");
  if (connBtn){
    connBtn.onclick = () => {
      if (offlineMode){
        offlineMode = false;
        const count = pendingSyncIds.length;
        pendingSyncIds = [];
        if (count) showToast(t("syncedToast"), "success");
      } else {
        offlineMode = true;
        showToast(t("offlineBannerTitle"), "warn");
      }
      renderApp();
    };
  }
}

function offlineBannerHtml(){
  if (!offlineMode && !pendingSyncIds.length) return "";
  if (offlineMode){
    return `<div class="notice-banner offline-banner"><strong>📴 ${t("offlineBannerTitle")}</strong><br>${t("offlineBannerBody")}${pendingSyncIds.length ? ` <strong>(${pendingSyncIds.length} ${t("offlineQueueCount")})</strong>` : ""}</div>`;
  }
  return "";
}

/* ============================= views ============================= */
function renderMain(){
  const main = document.getElementById("main");
  let view = "";
  if (currentView === "dashboard") view = viewDashboard();
  else if (currentView === "newcase") view = viewNewCase();
  else if (currentView === "records") view = viewRecords();
  else if (currentView === "referredout") view = viewReferredOut();
  else if (currentView === "referrals") view = viewReferrals();
  main.innerHTML = offlineBannerHtml() + view;
  wireView();
  main.classList.remove("enter");
  void main.offsetWidth;
  main.classList.add("enter");
}

function capabilityLegendPanel(){
  const rows = FACILITIES.map(f => `
    <tr><td><strong>${f.name}</strong></td>
    <td>${f.services.map(c => `<span class="tag capability">${capLabel(c)}</span>`).join(" ")}</td></tr>
  `).join("");
  return `<div class="panel"><h2>${t("capsHeading")}</h2>
    <p style="margin:-6px 0 14px;color:var(--ink-soft);font-size:13px;">${t("capsSub")}</p>
    <table><tbody>${rows}</tbody></table></div>`;
}

function facilityCaseRows(){
  const map = new Map();
  DB.records.filter(r => matchesCurrentFacility(r.facility)).forEach(r => {
    const p = patientById(r.patientId);
    if (!p) return;
    if (!isPatientCurrentlyHere(p.id)) return;
    const prev = map.get(p.id);
    if (!prev || new Date(r.date) > new Date(prev.date)) map.set(p.id, r);
  });
  return [...map.values()].sort((a,b) => b.date.localeCompare(a.date)).map(r => {
    const p = patientById(r.patientId);
    const high = (p.risk && p.risk !== "none") || r.urgency !== "routine";
    const level = high ? t("riskHigh") : t("riskLow");
    const riskClass = high ? "high-risk" : "low-risk";
    return `<tr class="clickable" data-patient="${p.id}">
      <td><span class="tag pid">${p.patientId}</span></td>
      <td><strong>${escapeHtml(p.name)}</strong></td>
      <td>${t(p.gender)}</td>
      <td><span class="tag ${riskClass}">${level}</span></td>
      <td>${p.risk && p.risk !== "none" ? riskTag(p.risk) : "—"}</td>
      <td>${urgencyTag(r.urgency)}</td>
      <td>${fmtDate(r.date)}</td>
    </tr>`;
  }).join("");
}

function viewDashboard(){
  const facilityRecords = DB.records.filter(r => matchesCurrentFacility(r.facility));
  const latestByPatient = new Map();
  facilityRecords.forEach(r => {
    const p = patientById(r.patientId);
    if (!p) return;
    if (!isPatientCurrentlyHere(p.id)) return;
    const prev = latestByPatient.get(p.id);
    if (!prev || new Date(r.date) > new Date(prev.date)) latestByPatient.set(p.id, r);
  });
  const patients = [...latestByPatient.keys()].map(patientById).filter(Boolean);
  const male = patients.filter(p => p.gender === "male").length;
  const female = patients.filter(p => p.gender === "female").length;
  const high = patients.filter(p => { const r=latestByPatient.get(p.id); return (p.risk && p.risk !== "none") || (r && r.urgency !== "routine"); }).length;
  const low = patients.length - high;
  const incomingList = session.role === "roleAsha"
    ? []
    : DB.referrals.filter(r => r.to === currentFacility && r.status === "notified");
  const incoming = incomingList.length;
  const rows = facilityCaseRows();
  const table = rows || `<tr><td colspan="7" class="empty">${t("dashboardEmpty")}</td></tr>`;

  return `
    <header class="page-head"><h1>${t("dashTitle")}</h1><p>${t("dashSub")} — <strong>${facilityDisplayName(currentFacility)}</strong></p></header>
    <div class="grid-3 dashboard-stats">
      <div class="stat"><div class="num">${patients.length}</div><div class="label">${t("casesHere")}</div></div>
      <div class="stat"><div class="num">${male}</div><div class="label">${t("maleCases")}</div></div>
      <div class="stat"><div class="num">${female}</div><div class="label">${t("femaleCases")}</div></div>
      <div class="stat warn"><div class="num">${high}</div><div class="label">${t("highRisk")}</div></div>
      <div class="stat amber"><div class="num">${low}</div><div class="label">${t("lowRisk")}</div></div>
      <div class="stat"><div class="num">${incoming}</div><div class="label">${t("statIncoming")}</div></div>
    </div>
    <div class="panel"><div class="panel-head-row"><div><h2>${t("casesHere")}</h2><p class="panel-sub">${facilityDisplayName(currentFacility)}</p></div><button class="btn ghost" id="reset-demo">${t("resetDemo")}</button></div>
      <div class="table-scroll"><table><thead><tr><th>${t("patientId")}</th><th>${t("name")}</th><th>${t("gender")}</th><th>${t("currentStatus")}</th><th>${t("riskFlag")}</th><th></th><th>${t("onDate")}</th></tr></thead><tbody>${table}</tbody></table></div>
    </div>
    <div class="panel">
      <div class="panel-head-row"><div><h2>${t("incoming")}</h2><p class="panel-sub">${t("referralQueueSub")}</p></div></div>
      ${incomingList.length
        ? incomingList.map(r => {
            const p = patientById(r.patientId);
            if (!p) return "";
            const left=Math.max(0,responseWindowMs(r.urgency)-(Date.now()-referralCreatedMs(r)));
            const mins=Math.floor(left/60000), secs=Math.floor((left%60000)/1000);
            return `<div class="dashboard-referral-row"><div><strong>${escapeHtml(p.name)}</strong> <span class="tag pid">${p.patientId}</span><div class="meta">${escapeHtml(r.from)} → ${escapeHtml(r.to)} · ${urgencyTag(r.urgency)}</div></div><div class="dashboard-referral-right"><span class="response-mini">${mins}m ${secs.toString().padStart(2,"0")}s</span><button class="btn small" data-dashboard-ref="${r.id}">${t("navReferrals")}</button></div></div>`;
          }).join("")
        : `<p class="empty">${t("noIncoming")}</p>`}
    </div>
    ${capabilityLegendPanel()}
  `;
}

function viewNewCase(resultBlock){
  /* FIXED/NEW: privacy — only patients CURRENTLY located at this facility
     can be selected for a new visit record, instead of every patient in
     the entire system. */
  const localPatients = DB.patients.filter(p => getPatientCurrentFacility(p.id) === currentFacility);
  const patientOptions = localPatients.length
    ? localPatients.map(p => `<option value="${p.id}">${p.name} — ${p.patientId}</option>`).join("")
    : `<option value="">${t("noLocalPatients")}</option>`;
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

function cap1(s){ return s.charAt(0).toUpperCase() + s.slice(1); }

/* NEW: shows the AI's suggested urgency and lets a human confirm or
   override it before anything is saved/sent — required so clinical
   judgement always has the final say over the AI. */
function renderPendingConfirm(){
  if (!pendingCase) return "";
  const pc = pendingCase;
  const aiRoute = routeReferral(currentFacility, pc.aiCapability, pc.aiSpecialist);
  const higher = higherFacilitiesFor(currentFacility);
  const aiFacility = pc.aiFacility !== undefined ? pc.aiFacility : (pc.aiUrgency !== "routine" ? aiRoute.to : null);
  const finalFacility = pc.finalFacility !== undefined ? pc.finalFacility : aiFacility;
  const changedUrgency = pc.finalUrgency !== pc.aiUrgency;
  const changedDestination = finalFacility !== aiFacility;
  const overrideActive = changedUrgency || changedDestination;
  const opts = ["routine","priority","emergency"].map(u =>
    `<option value="${u}" ${u===pc.finalUrgency?"selected":""}>${t("urgency"+cap1(u))}</option>`
  ).join("");
  const destinationOptions = [
    `<option value="" ${!finalFacility?"selected":""}>${t("noReferralOption")}</option>`,
    ...higher.map(f => `<option value="${escapeHtml(f.name)}" ${f.name===finalFacility?"selected":""}>${escapeHtml(f.name)}${f.name===aiFacility?` — ${t("aiRecommendedPrefix")}`:""}</option>`)
  ].join("");
  const canOverrideDestination = higher.length > 0;
  const destinationBlock = canOverrideDestination ? `
    <div class="override-destination-wrap">
      <button type="button" class="btn small secondary" id="toggle-referral-override">${t("overrideReferralBtn")}</button>
      ${pc.referralOverrideOpen ? `<div class="override-destination-panel">
        <h3>${t("overrideReferralTitle")}</h3>
        <div class="field"><label>${t("overrideReferralLabel")}</label><select id="override-destination">${destinationOptions}</select></div>
        ${changedDestination ? `<div class="override-note">⚠ ${t("overrideDestinationNote")}</div>` : ""}
      </div>` : ""}
    </div>` : "";
  const reasonRequired = overrideActive;
  return `<div class="panel ai-confirm-panel">
    <h2>🤖 ${t("aiSuggestion")}</h2>
    <p>${t("aiSuggestedUrgency")}: ${urgencyTag(pc.aiUrgency)}</p>
    <div class="field"><label>${t("overrideUrgencyLabel")}</label><select id="override-urgency">${opts}</select></div>
    ${changedUrgency ? `<div class="override-note">⚠ ${t("overrideActiveNote")}</div>` : ""}
    ${aiFacility ? `<div class="ai-route-preview"><strong>${t("refer")}:</strong> ${escapeHtml(aiFacility)} <span class="tag">${t("aiRecommendedPrefix")}</span></div>` : `<div class="ai-route-preview"><strong>${t("refer")}:</strong> ${t("noReferralOption")}</div>`}
    ${destinationBlock}
    ${reasonRequired ? `<div class="field"><label>${t("overrideReasonLabel")} *</label><textarea id="override-reason" placeholder="${changedDestination ? t("overrideDestinationReasonPh") : t("overrideReasonPh")}"></textarea></div>` : `<div class="field"><label>${t("overrideReasonLabel")}</label><textarea id="override-reason" placeholder="${t("overrideReasonPh")}"></textarea></div>`}
    <button type="button" class="btn accent" id="confirm-case-btn">${t("confirmAndSend")}</button>
  </div>`;
}

/* NEW: actually saves the record + creates the referral, using the
   human-confirmed urgency (which may differ from the AI's suggestion). */
function finalizePendingCase(){
  const pc = pendingCase;
  if (!pc) return;
  let patientId = pc.patientId;
  if (pc.isNewPatient){
    patientId = uid("p");
    DB.patients.push({ id:patientId, patientId: nextPatientId(), ...pc.newPatientData, attachments:[] });
  }
  const overrideReasonEl = document.getElementById("override-reason");
  const overrideReason = overrideReasonEl ? overrideReasonEl.value.trim() : "";
  const urgency = pc.finalUrgency;
  const aiFacility = pc.aiFacility || null;
  const finalFacility = pc.finalFacility || null;
  const overriddenUrgency = urgency !== pc.aiUrgency;
  const overriddenDestination = finalFacility !== aiFacility;
  const overridden = overriddenUrgency || overriddenDestination;
  if (overridden && !overrideReason){
    if (overrideReasonEl) { overrideReasonEl.classList.add("input-error"); overrideReasonEl.focus(); }
    return;
  }
  const newRecordId = uid("r");
  DB.records.push({
    id:newRecordId, patientId, facility:currentFacility, date:new Date().toISOString().slice(0,10),
    symptoms:pc.symptoms, customText:pc.customText, notes:pc.notes, urgency, vitals:pc.vitals,
    aiUrgency:pc.aiUrgency, overriddenByHuman:overridden, overrideReason: overridden ? overrideReason : "",
    aiReferralFacility:aiFacility, finalReferralFacility:finalFacility, referralOverriddenByHuman:overriddenDestination,
    loggedBy:{ name: session.name, role: session.role }, published:false
  });
  if (offlineMode) pendingSyncIds.push({kind:"record", id:newRecordId});

  DB.referrals.filter(r => r.patientId === patientId && r.to === currentFacility && r.status === "notified").forEach(r => {
    r.status = "in_progress";
    r.respondedAt = new Date().toISOString();
    appendAudit(r, "facility-started-care", session.name, "Clinical record created at destination facility");
  });

  let resultBlock = "";
  const offlineNote = offlineMode ? `<div class="reroute-note">📴 ${t("queuedTag")}</div>` : "";
  const overrideNote = overridden
    ? `<div class="override-note">👤 ${escapeHtml(overrideReason)}${overriddenDestination ? ` — ${t("refer")} <strong>${escapeHtml(finalFacility || t("noReferralOption"))}</strong>` : ""}</div>`
    : "";

  /* Highest-level facility cannot send a referral because there is no higher registered facility. */
  const canSendReferral = !isHighestLevelFacility(currentFacility);
  if (canSendReferral && finalFacility){
    const routeDistance = distanceBetweenFacilities(currentFacility, finalFacility);
    const route = { to:finalFacility, distanceKm:Number.isFinite(routeDistance) ? Math.round(routeDistance) : null, skipped:[] };
    const newReferralId = uid("f");
    DB.referrals.push({
      id:newReferralId, patientId, from:currentFacility, to:route.to, urgency,
      capability:pc.aiCapability, status:"notified", createdAt:new Date().toISOString(),
      responseWindowHours:responseWindowHoursFor(urgency), specialist:pc.aiSpecialist,
      createdAtMs:Date.now(), pendingSince:Date.now(), escalationLevel:0, history:[], routeHistory:[], distanceKm:route.distanceKm,
      aiSuggestedFacility:aiFacility, humanOverride:overriddenDestination, overrideReason:overriddenDestination ? overrideReason : ""
    });
    if (offlineMode) pendingSyncIds.push({kind:"referral", id:newReferralId});
    const routeReason = overriddenDestination ? "Human clinical override" : capLabel(pc.aiCapability);
    const distLine = route.distanceKm != null ? `<div class="reroute-note">📍 ~${route.distanceKm} km</div>` : "";
    resultBlock = `<div class="flash">${t("resultUrgency")}: ${urgencyTag(urgency)} — ${t("refer")} <strong>${escapeHtml(route.to)}</strong> (${t("routedBecause")}: ${escapeHtml(routeReason)}). ${t("referBtn")} ✓${distLine}${offlineNote}${overrideNote}</div><div class="panel contact-panel"><h3>📞 ${t("contactFacility")}</h3><p>${t("contactFacilityHelp")}</p>${facilityContactHtml(route.to)}</div>`;
  } else {
    resultBlock = `<div class="flash">${t("resultUrgency")}: ${urgencyTag(urgency)} — ${t("noReferralNeeded")}${offlineNote}${overrideNote}</div>`;
  }
  if (overridden){
    auditEvent("human-override", `Clinical staff overrode AI triage for patient ${patientId}${overriddenDestination ? `: destination ${aiFacility || "none"} → ${finalFacility || "none"}` : ""}${overriddenUrgency ? `; urgency ${pc.aiUrgency} → ${urgency}` : ""}`, {patientId, facility:currentFacility, aiFacility, finalFacility, aiUrgency:pc.aiUrgency, finalUrgency:urgency, reason:overrideReason});
  }
  pendingCase = null;
  document.getElementById("main").innerHTML = offlineBannerHtml() + viewNewCase(resultBlock);
  wireView();
}

function viewRecords(query, historyFiltersArg){
  query = query || "";
  const hf = historyFiltersArg || historyFilters;
  const q = query.trim().toLowerCase();

  const facilityRecords = DB.records.filter(r => matchesCurrentFacility(r.facility) && isWithinHistoryRange(r.date, hf));

  const grouped = new Map();
  facilityRecords.forEach(r => {
    const p = patientById(r.patientId);
    if (!p) return;
    if (!isPatientCurrentlyHere(p.id)) return;
    if (!grouped.has(p.id)) grouped.set(p.id, []);
    grouped.get(p.id).push(r);
  });

  const conditionText = (r) => {
    const labels = (r.symptoms || []).map(x => STR[lang][x] || x);
    if (r.customText) labels.push(r.customText);
    return labels.length ? labels.join(", ") : (r.notes || "");
  };
  const riskMatch = (p) => hf.risk === "all" || (p.risk || "none") === hf.risk;
  const urgencyMatch = (recs) => hf.urgency === "all" || recs.some(r => r.urgency === hf.urgency);
  const statusKey = (patientId) => {
    const refs = DB.referrals.filter(r => r.patientId === patientId).slice().sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
    const recs = DB.records.filter(r => r.patientId === patientId).slice().sort((a,b)=>b.date.localeCompare(a.date));
    if (refs.length && refs[0].status !== "completed") {
      if (refs[0].status === "notified") return "awaiting";
      if (refs[0].status === "in_progress") return "under";
    }
    return recs.length ? "discharged" : "none";
  };
  const statusMatch = (p) => hf.status === "all" || statusKey(p.id) === hf.status;

  const matches = [...grouped.entries()].map(([id,recs]) => ({p:patientById(id), recs:recs.slice().sort((a,b)=>b.date.localeCompare(a.date))}))
    .filter(({p,recs}) => {
      const hay = [p.name, p.village, p.patientId, ...recs.map(conditionText)].join(" ").toLowerCase();
      return (!q || hay.includes(q)) && riskMatch(p) && urgencyMatch(recs) && statusMatch(p);
    })
    .sort((a,b) => b.recs[0].date.localeCompare(a.recs[0].date));

  const totalVisits = matches.reduce((n,x)=>n+x.recs.length,0);
  const highCount = matches.filter(x => x.p.risk && x.p.risk !== "none").length;
  const referredCount = matches.filter(x => DB.referrals.some(r => r.patientId===x.p.id && (r.from===currentFacility || r.to===currentFacility))).length;

  const rows = matches.length ? matches.map(({p,recs}) => {
    const latest = recs[0];
    const conditions = conditionText(latest);
    return `<tr class="clickable" data-patient="${p.id}">
      <td><span class="tag pid">${p.patientId}</span></td>
      <td><strong>${escapeHtml(p.name)}</strong><div class="table-sub">${escapeHtml(p.village)}</div></td>
      <td>${escapeHtml(conditions.slice(0,90))}${conditions.length>90?"…":""}</td>
      <td>${riskTag(p.risk) || "—"}</td>
      <td>${urgencyTag(latest.urgency)}</td>
      <td>${recs.length}</td>
      <td>${fmtDate(latest.date)}</td>
    </tr>`;
  }).join("") : `<tr><td colspan="7" class="empty">${t("noHistoryMatches")}</td></tr>`;

  return `
    <header class="page-head"><h1>${t("recordsTitle")}</h1><p>${t("recordsSub")}</p></header>
    <div class="panel history-panel">
      <div class="panel-head-row"><div><h2>${t("historyTitle")}</h2><p class="panel-sub">${t("historySub")} — <strong>${escapeHtml(facilityDisplayName(currentFacility))}</strong></p></div></div>
      <div class="history-stats">
        <div class="stat"><div class="num">${matches.length}</div><div class="label">${t("patientsFound")}</div></div>
        <div class="stat"><div class="num">${totalVisits}</div><div class="label">${t("visits")}</div></div>
        <div class="stat warn"><div class="num">${highCount}</div><div class="label">${t("highRisk")}</div></div>
        <div class="stat"><div class="num">${referredCount}</div><div class="label">${t("historyReferred")}</div></div>
      </div>
      <div class="history-filters">
        <div class="field"><label>${t("historySearch")}</label><input type="text" id="history-search" placeholder="${t("historySearchPh")}" value="${escapeHtml(query)}"></div>
        <div class="field"><label>${t("historyTimeline")}</label><select id="history-range">
          <option value="30d" ${hf.range==="30d"?"selected":""}>${t("last30")}</option>
          <option value="6m" ${hf.range==="6m"?"selected":""}>${t("last6m")}</option>
          <option value="1y" ${hf.range==="1y"?"selected":""}>${t("last1y")}</option>
          <option value="all" ${hf.range==="all"?"selected":""}>${t("allTime")}</option>
          <option value="custom" ${hf.range==="custom"?"selected":""}>${t("customRange")}</option>
        </select></div>
        ${hf.range === "custom" ? `
        <div class="field"><label>${t("customFrom")}</label><input type="date" id="history-from" value="${hf.customFrom||""}"></div>
        <div class="field"><label>${t("customTo")}</label><input type="date" id="history-to" value="${hf.customTo||""}"></div>` : ""}
        <div class="field"><label>${t("filterRisk")}</label><select id="history-risk">
          <option value="all" ${hf.risk==="all"?"selected":""}>${t("allRisks")}</option>
          <option value="maternal" ${hf.risk==="maternal"?"selected":""}>${t("maternal")}</option>
          <option value="child" ${hf.risk==="child"?"selected":""}>${t("child")}</option>
          <option value="chronic" ${hf.risk==="chronic"?"selected":""}>${t("chronic")}</option>
          <option value="none" ${hf.risk==="none"?"selected":""}>${t("none")}</option>
        </select></div>
        <div class="field"><label>${t("filterUrgency")}</label><select id="history-urgency">
          <option value="all" ${hf.urgency==="all"?"selected":""}>${t("allUrgencies")}</option>
          <option value="emergency" ${hf.urgency==="emergency"?"selected":""}>${t("urgencyEmergency")}</option>
          <option value="priority" ${hf.urgency==="priority"?"selected":""}>${t("urgencyPriority")}</option>
          <option value="routine" ${hf.urgency==="routine"?"selected":""}>${t("urgencyRoutine")}</option>
        </select></div>
        <div class="field"><label>${t("filterStatus")}</label><select id="history-status">
          <option value="all" ${hf.status==="all"?"selected":""}>${t("allStatuses")}</option>
          <option value="under" ${hf.status==="under"?"selected":""}>${t("statusUnderTreatment")}</option>
          <option value="awaiting" ${hf.status==="awaiting"?"selected":""}>${t("statusAwaiting")}</option>
          <option value="discharged" ${hf.status==="discharged"?"selected":""}>${t("statusDischarged")}</option>
        </select></div>
        <button class="btn ghost filter-clear" id="history-clear">${t("clearFilters")}</button>
      </div>
      <div class="table-scroll"><table><thead><tr><th>${t("patientId")}</th><th>${t("name")}</th><th>${t("conditions")}</th><th>${t("riskFlag")}</th><th>${t("filterUrgency")}</th><th>${t("visits")}</th><th>${t("lastVisit")}</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
    <div id="patient-timeline">${openPatientId ? renderPatientProfile(openPatientId) : ""}</div>
  `;
}

/* ============================= "Referred out" view ============================= */
function viewReferredOut(){
  const localPatientIds = new Set(DB.records.filter(r => r.facility === currentFacility).map(r => r.patientId));
  const referredOut = [...localPatientIds]
    .map(patientById)
    .filter(Boolean)
    .filter(p => {
      const loc = getPatientCurrentFacility(p.id);
      return loc && loc !== currentFacility;
    });

  const rows = referredOut.length ? referredOut.map(p => {
    const lastRefFromHere = DB.referrals
      .filter(r => r.patientId === p.id && (r.from === currentFacility || (r.routeHistory||[]).some(h=>h.from===currentFacility)))
      .sort((a,b) => b.createdAt.localeCompare(a.createdAt))[0];
    const currentLoc = getPatientCurrentFacility(p.id);
    const chain = lastRefFromHere ? referralRouteChain(lastRefFromHere).map(escapeHtml).join(" → ") : escapeHtml(currentLoc || "");
    return `<tr class="clickable" data-patient="${p.id}">
      <td><span class="tag pid">${p.patientId}</span></td>
      <td><strong>${escapeHtml(p.name)}</strong></td>
      <td>${riskTag(p.risk) || "—"}</td>
      <td>${lastRefFromHere ? urgencyTag(lastRefFromHere.urgency) : "—"}</td>
      <td style="font-size:12.5px;color:var(--ink-soft);">${chain}</td>
      <td>${lastRefFromHere ? fmtDate(lastRefFromHere.createdAt) : "—"}</td>
    </tr>`;
  }).join("") : `<tr><td colspan="6" class="empty">${t("noReferredOut")}</td></tr>`;

  return `
    <header class="page-head"><h1>${t("referredOutTitle")}</h1><p>${t("referredOutSub")} — <strong>${currentFacility}</strong></p></header>
    <div class="panel">
      <div class="table-scroll"><table><thead><tr><th>${t("patientId")}</th><th>${t("name")}</th><th>${t("riskFlag")}</th><th>${t("filterUrgency")}</th><th>${t("referredTo")}</th><th>${t("onDate")}</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
    <div id="patient-timeline">${openPatientId ? renderPatientProfile(openPatientId) : ""}</div>
  `;
}

function attachmentsBlock(patient, attachmentList){
  const list = attachmentList || patient.attachments;
  /* FIXED/NEW: ASHA cannot upload */
  const canUpload = session && session.role !== "roleAsha" && isPatientCurrentlyHere(patient.id);
  const items = list.length ? list.map(a => {
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
  const here = isPatientCurrentlyHere(patientId);

  const recs = here
    ? DB.records.filter(r => r.patientId === patientId)
    : DB.records.filter(r => r.patientId === patientId && r.facility === currentFacility);

  const refs = here
    ? DB.referrals.filter(r => r.patientId === patientId)
    : DB.referrals.filter(r => r.patientId === patientId &&
        (r.from === currentFacility || r.to === currentFacility || (r.routeHistory||[]).some(h => h.from===currentFacility || h.to===currentFacility)));

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
        ${r.published ? `<div class="record-lock">🔒 ${t("locked")} · ${t("published")} ${r.publishedAt ? fmtDate(r.publishedAt) : ""}</div>` : `<div class="record-lock draft">📝 ${t("draft")} · ${canPublishRecord(r)?`<button class="btn small" data-publish="${r.id}">${t("publish")}</button>`:""}</div>`}
        ${r.published && canAmendRecord(r) ? `<button class="btn small secondary" data-amend="${r.id}">${t("amend")}</button>` : (r.published ? `<div class="record-lock">${t("noEdit")}</div>` : "")}
      </div>`;
    } else {
      const r = ev.data;
      return `<div class="t-item">
        <div class="t-head">${t("referredTo")}: ${r.to} <span class="tag ${r.status}">${t(r.status)}</span></div>
        <div class="t-when">${fmtDate(r.createdAt)} · ${t("from")} ${r.from}</div>
        ${r.capability ? `<div class="t-body">${t("routedBecause")}: ${capLabel(r.capability)}</div>` : ""}
        ${r.routeHistory && r.routeHistory.length ? `<div class="t-body">${r.routeHistory.map(h=>`${escapeHtml(h.from)} → ${escapeHtml(h.to)}`).join(" · ")}</div>` : ""}
      </div>`;
    }
  }).join("") : `<p class="empty">${t("noHistory")}</p>`;

  return `
    <div class="panel">
      <div class="profile-head"><h2>${p.name} ${riskTag(p.risk)}</h2></div>
      ${!here ? `<div class="notice-banner restricted-banner">🔒 ${t("restrictedAccessNote")}</div>` : ""}
      <div class="profile-meta">
        <span class="tag pid">${p.patientId}</span>
        <span style="font-size:13px;color:var(--ink-soft);">${p.age} yrs · ${t(p.gender)} · ${p.village}</span>
      </div>
      <div class="status-line ${status.cls}">${t("currentStatus")}: ${status.text}</div>
      <h3>${t("journeyTitle")}</h3>
      <div class="journey-strip">${events.map(ev=>{
        if(ev.type==="record"){ const r=ev.data; return `<div class="journey-step"><div class="j-label">${t("visitReport")}</div><div class="j-main">${escapeHtml(r.facility)}</div><div class="j-meta">${fmtDate(r.date)} · ${r.published?"🔒 "+t("published"):t("draft")}</div></div>`; }
        const r=ev.data; const statusLabel = {notified:t("pending"), in_progress:t("inProgress"), completed:t("completed"), rejected:t("rejected")}[r.status] || r.status;
        return `<div class="journey-step"><div class="j-label">${t("referralLabel")}</div><div class="j-main">${escapeHtml(r.to)}</div><div class="j-meta">${r.status==="notified" && !r.lastEscalatedAt?"⏱ "+t("aiMonitoring"):(r.escalationCount?`⚡ ${t("escalated")} #${r.escalationCount}`:statusLabel)}</div></div>`;
      }).join("")}</div>
      <h3>${t("medicalHistory")}</h3>
      <div class="timeline">${items}</div>
    </div>
    <div class="panel"><h2>${t("auditTitle")}</h2>${(DB.audit||[]).filter(a=>a.patientId===patientId || (a.message||"").includes(p.name)).slice(0,10).map(a=>`<div class="audit-row"><strong>${a.type}</strong><span>${escapeHtml(a.message)}</span><small>${fmtDate(a.at)}</small></div>`).join("") || `<p class="empty">${t("noAuditEvents")}</p>`}</div>
    ${attachmentsBlock(p, here ? p.attachments : p.attachments.filter(a => a.facility === currentFacility))}
  `;
}

function viewReferrals(){
  processAutomaticEscalations();
    const incoming = session.role === "roleAsha" ? [] : DB.referrals.filter(r => r.to === currentFacility);
  const sent = DB.referrals.filter(r =>
    r.from === currentFacility ||
    r.previousFacility === currentFacility ||
    (r.routeHistory||[]).some(h => h.from === currentFacility)
  );

  function timeLeft(r){
    if (r.status !== "notified") return "";
    const left = Math.max(0, responseWindowMs(r.urgency) - (Date.now() - referralCreatedMs(r)));
    const mins = Math.floor(left / 60000), secs = Math.floor((left % 60000)/1000);
    return `${mins}m ${secs.toString().padStart(2,"0")}s`;
  }
  function refStatus(r){
    if (r.status === "notified") return t("pending");
    if (r.status === "in_progress") return t("inProgress");
    if (r.status === "completed") return t("completed");
    if (r.status === "rejected") return t("rejected");
    return r.status;
  }
  function refCard(r){
    const p = patientById(r.patientId);
    if (!p) return "";
    const pending = r.status === "notified" && r.to === currentFacility;
    const canCall = ["notified","in_progress"].includes(r.status) && true;
    let action = "";
    if (pending && rejectingId === r.id){
      action = `<div class="reject-form">
        <textarea class="reject-reason-input" data-reject-input="${r.id}" placeholder="${t("unablePrompt")}" rows="2"></textarea>
        <div class="reject-form-actions">
          <button class="btn small danger" data-reject-confirm="${r.id}">${t("confirmReject")}</button>
          <button class="btn small ghost" data-reject-cancel="${r.id}">${t("cancel")}</button>
        </div>
      </div>`;
    } else if (pending){
      action = `<button class="btn small" data-accept="${r.id}">${t("acceptBtn")}</button> <button class="btn small danger" data-reject="${r.id}">${t("unableBtn")}</button>`;
    } else if (r.status === "in_progress" && r.to === currentFacility){
      action = `<button class="btn small secondary" data-complete="${r.id}">${t("complete")}</button>`;
    }
    /* NEW: receiving facility can flag that a case is more urgent than the AI assessed */
    if (pending) action += ` <button class="btn small secondary" data-bump="${r.id}">${t("bumpUrgency")}</button>`;
    const timer = pending ? `<div class="response-timer"><span>${t("timeRemaining")} <em>(${t("responseWindowTemplate").replace("{window}", windowLabel(r.urgency))})</em></span><strong data-timer-id="${r.id}">${timeLeft(r)}</strong></div>` : "";
    const urgentFlag = pending && r.urgency === "emergency" ? `<div class="urgent-flag">⚠ ${t("respondNow")}</div>` : "";
    const rejection = r.rejectionReason ? `<div class="ref-reason"><strong>${t("rejectedReason")}:</strong> ${escapeHtml(r.rejectionReason)}</div>` : "";
    const chain = referralRouteChain(r).map(escapeHtml).join(" → ");
    const escalationBadge = r.escalationCount ? `<div class="reroute-note">↻ ${t("escalated")} ×${r.escalationCount}${r.escalationReason ? " — " + escapeHtml(r.escalationReason) : ""}</div>` : "";
    const registry = facilityByName(r.to);
    const specialists = registry && registry.specialists.length ? `<div class="meta">${registry.specialists.map(x=>escapeHtml(x.replaceAll("_"," "))).join(", ")}</div>` : "";
    return `<div class="ref-card ${r.urgency}${pending && r.urgency === "emergency" ? " urgent-pulse" : ""}">
      ${urgentFlag}
      <div class="name">${escapeHtml(p.name)} <span class="tag pid">${p.patientId}</span></div>
      <div class="meta">${chain}${r.distanceKm != null ? ` · ~${r.distanceKm} km` : ""}</div>
      <div class="meta">${urgencyTag(r.urgency)} ${r.capability ? `<span class="tag capability">${capLabel(r.capability)}</span>` : ""} ${r.specialist ? `<span class="tag capability">${escapeHtml(r.specialist)}</span>` : ""} <span class="tag">${refStatus(r)}</span></div>
      ${specialists}${timer}${rejection}${escalationBadge}
      ${r.from === currentFacility && r.status === "notified" ? `<div class="contact-referral"><strong>📞 ${t("contactFacility")}</strong><p>${t("contactFacilityHelp")}</p>${facilityContactHtml(r.to)}</div>` : ""}
      <div class="actions">${action}${canCall ? ` <button class="btn small secondary" data-videocall="${r.id}">📹 ${t("videoCall")}</button>` : ""}</div>
    </div>`;
  }

  function column(list, title){
    const items = list.filter(r => ["notified","in_progress","completed","rejected"].includes(r.status))
      .slice()
      .sort((a,b) => (URGENCY_RANK[b.urgency]-URGENCY_RANK[a.urgency]) || (referralCreatedMs(a)-referralCreatedMs(b)));
    return `<div class="ref-list"><h3>${title} <span class="count">${items.length}</span></h3>${items.length ? items.map(refCard).join("") : `<p class="empty">${t("noneHere")}</p>`}</div>`;
  }

  return `
    <header class="page-head"><h1>${t("referralsTitle")}</h1><p>${t("referralsSub")} — <strong>${facilityDisplayName(currentFacility)}</strong></p></header>
    <div class="panel"><h2>${t("incoming")}</h2><div class="kanban">
      ${column(incoming.filter(r=>r.status==="notified"), t("pending"))}
      ${column(incoming.filter(r=>r.status==="in_progress"), t("inProgress"))}
    </div></div>
    ${true ? `<div class="panel"><h2>${t("sent")}</h2><div class="kanban">
      ${column(sent, t("sent"))}
    </div></div>` : ""}
  `;
}

/* ============================= wiring per view ============================= */
function wireView(){
  const reset = document.getElementById("reset-demo");
  if (reset) reset.onclick = () => {
    DB = seedData();
    patientSeq = 1020;
    openPatientId = null;
    historyFilters = {range:"all", risk:"all", urgency:"all", status:"all", customFrom:"", customTo:""};
    renderMain();
  };
  document.querySelectorAll("[data-dashboard-ref]").forEach(btn => {
    btn.onclick = () => { currentView = "referrals"; rejectingId = null; renderMain(); };
  });

  document.querySelectorAll('input[name="mode"]').forEach(r => r.onchange = () => { recordFormMode = r.value; renderMain(); });

  const otherCheck = document.getElementById("other-symptom-check");
  if (otherCheck){
    otherCheck.onchange = () => {
      document.getElementById("other-symptom-text").style.display = otherCheck.checked ? "block" : "none";
    };
  }

  /* FIXED/NEW: form submit no longer saves immediately — it computes the
     AI assessment and shows a human confirm/override panel first. */
  const caseForm = document.getElementById("case-form");
  if (caseForm){
    caseForm.onsubmit = (e) => {
      e.preventDefault();
      let patientId = null, isNewPatient = false, newPatientData = null;
      if (recordFormMode === "existing"){
        patientId = document.getElementById("existing-patient").value;
        if (!patientId) return; // FIXED: guard against empty/disabled selection
      } else {
        const name = document.getElementById("np-name").value.trim();
        const age = parseInt(document.getElementById("np-age").value, 10) || 0;
        const gender = document.getElementById("np-gender").value;
        const village = document.getElementById("np-village").value.trim();
        const risk = document.getElementById("np-risk").value;
        if (!name) return;
        newPatientData = { name, age, gender, village, risk };
        isNewPatient = true;
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
      const assessed = assessCase(symptoms, customText);
      const aiRoute = routeReferral(currentFacility, assessed.capability, assessed.specialist);
      pendingCase = {
        patientId, isNewPatient, newPatientData,
        symptoms, customText, notes, vitals,
        aiUrgency: assessed.urgency, aiCapability: assessed.capability, aiSpecialist: assessed.specialist,
        aiFacility: assessed.urgency !== "routine" ? aiRoute.to : null,
        finalUrgency: assessed.urgency,
        finalFacility: assessed.urgency !== "routine" ? aiRoute.to : null,
        referralOverrideOpen: false
      };
      document.getElementById("main").innerHTML = offlineBannerHtml() + viewNewCase(renderPendingConfirm());
      wireView();
    };
  }

  /* NEW: wiring for the human override confirm panel */
  const overrideSelect = document.getElementById("override-urgency");
  if (overrideSelect){
    overrideSelect.onchange = () => {
      pendingCase.finalUrgency = overrideSelect.value;
      if (pendingCase.finalUrgency !== "routine" && !pendingCase.finalFacility){
        const route = routeReferral(currentFacility, pendingCase.aiCapability, pendingCase.aiSpecialist);
        pendingCase.finalFacility = route.to || null;
      }
      document.getElementById("main").innerHTML = offlineBannerHtml() + viewNewCase(renderPendingConfirm());
      wireView();
    };
  }
  const toggleReferralOverride = document.getElementById("toggle-referral-override");
  if (toggleReferralOverride){
    toggleReferralOverride.onclick = () => {
      pendingCase.referralOverrideOpen = !pendingCase.referralOverrideOpen;
      document.getElementById("main").innerHTML = offlineBannerHtml() + viewNewCase(renderPendingConfirm());
      wireView();
    };
  }
  const destinationSelect = document.getElementById("override-destination");
  if (destinationSelect){
    destinationSelect.onchange = () => {
      pendingCase.finalFacility = destinationSelect.value || null;
      document.getElementById("main").innerHTML = offlineBannerHtml() + viewNewCase(renderPendingConfirm());
      wireView();
    };
  }
  const confirmCaseBtn = document.getElementById("confirm-case-btn");
  if (confirmCaseBtn) confirmCaseBtn.onclick = finalizePendingCase;

  const search = document.getElementById("history-search");
  if (search){
    search.oninput = () => {
      const val = search.value;
      document.getElementById("main").innerHTML = viewRecords(val, historyFilters);
      wireView();
      const refocused = document.getElementById("history-search");
      refocused.focus();
      refocused.setSelectionRange(val.length, val.length);
    };
  }
  ["history-range","history-risk","history-urgency","history-status","history-from","history-to"].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.onchange=()=>{
      const fromEl = document.getElementById("history-from");
      const toEl = document.getElementById("history-to");
      historyFilters = {
        range: document.getElementById("history-range").value,
        risk: document.getElementById("history-risk").value,
        urgency: document.getElementById("history-urgency").value,
        status: document.getElementById("history-status").value,
        customFrom: fromEl ? fromEl.value : historyFilters.customFrom,
        customTo: toEl ? toEl.value : historyFilters.customTo
      };
      const val=document.getElementById("history-search").value;
      document.getElementById("main").innerHTML=viewRecords(val, historyFilters);
      wireView();
    };
  });
  const clearHistory = document.getElementById("history-clear");
  if(clearHistory) clearHistory.onclick=()=>{
    historyFilters={range:"all",risk:"all",urgency:"all",status:"all",customFrom:"",customTo:""};
    document.getElementById("main").innerHTML=viewRecords("",historyFilters);
    wireView();
  };

  document.querySelectorAll("tr[data-patient]").forEach(row => {
    row.onclick = () => {
      openPatientId = row.dataset.patient;
      if (currentView !== "records" && currentView !== "referredout") currentView = "records";
      renderMain();
    };
  });

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

  document.querySelectorAll("[data-publish]").forEach(btn=>{ btn.onclick=()=>{ const r=DB.records.find(x=>x.id===btn.dataset.publish); if(!r||!canPublishRecord(r)) return; r.published=true; r.publishedAt=new Date().toISOString(); auditEvent("publish", `Clinical report published for ${patientById(r.patientId).name}`, {patientId:r.patientId,recordId:r.id}); renderMain(); }; });
  document.querySelectorAll("[data-amend]").forEach(btn=>{ btn.onclick=()=>{ const r=DB.records.find(x=>x.id===btn.dataset.amend); if(!r||!canAmendRecord(r)) return; const text=prompt("Enter amendment / addendum:"); if(!text) return; DB.records.push({id:uid("r"),patientId:r.patientId,facility:currentFacility,date:new Date().toISOString().slice(0,10),symptoms:[],customText:"",notes:text,urgency:r.urgency,vitals:r.vitals,loggedBy:{name:session.name,role:session.role},published:true,publishedAt:new Date().toISOString(),amendsRecordId:r.id,recordType:"amendment"}); auditEvent("amendment", `Amendment added to clinical report ${r.id}`, {patientId:r.patientId,recordId:r.id,amendsRecordId:r.id}); renderMain(); }; });

  document.querySelectorAll("[data-accept]").forEach(btn => {
    btn.onclick = () => {
      const r = DB.referrals.find(x => x.id === btn.dataset.accept);
      if (!r || r.status !== "notified" || r.to !== currentFacility) return;
      r.status = "in_progress";
      r.respondedAt = new Date().toISOString();
      appendAudit(r, "FACILITY_ACCEPTED", session.name, `Facility accepted the referral; care started at ${r.to}`);
      renderMain();
      showToast(`✓ ${t("acceptedToast").replace("{facility}", r.to)}`, "success");
    };
  });
  document.querySelectorAll("[data-reject]").forEach(btn => {
    btn.onclick = () => {
      rejectingId = btn.dataset.reject;
      renderMain();
      const ta = document.querySelector(`[data-reject-input="${rejectingId}"]`);
      if (ta) ta.focus();
    };
  });
  document.querySelectorAll("[data-reject-cancel]").forEach(btn => {
    btn.onclick = () => { rejectingId = null; renderMain(); };
  });
  document.querySelectorAll("[data-reject-confirm]").forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.rejectConfirm;
      const r = DB.referrals.find(x => x.id === id);
      const ta = document.querySelector(`[data-reject-input="${id}"]`);
      const reason = ta ? ta.value.trim() : "";
      if (!r || r.status !== "notified" || r.to !== currentFacility) { rejectingId = null; renderMain(); return; }
      if (!reason){ ta.classList.add("input-error"); ta.focus(); return; }
      const fromFacility = r.to;
      r.status = "rejected";
      r.rejectionReason = reason;
      r.rejectedAt = new Date().toISOString();
      appendAudit(r, "FACILITY_REJECTED", session.name, r.rejectionReason);
      const escalated = autoEscalateReferral(r, r.rejectionReason);
      rejectingId = null;
      renderMain();
      if (escalated) showToast(`↻ ${t("rerouteToast").replace("{from}", fromFacility).replace("{to}", r.to)}`, "success");
      else showToast(t("noNextFacility"), "warn");
    };
  });
  document.querySelectorAll("[data-complete]").forEach(btn => {
    btn.onclick = () => {
      const r = DB.referrals.find(x => x.id === btn.dataset.complete);
      if (r){
        r.status = "completed";
        r.completedAt = new Date().toISOString();
        appendAudit(r, "FACILITY_COMPLETED", session.name, `Case marked complete at ${r.to}`);
      }
      renderMain();
    };
  });

  /* NEW: receiving facility can flag "this looks more urgent than AI assessed" */
  document.querySelectorAll("[data-bump]").forEach(btn => {
    btn.onclick = () => {
      const r = DB.referrals.find(x => x.id === btn.dataset.bump);
      if (!r || r.urgency === "emergency") return;
      const prev = r.urgency;
      r.urgency = "emergency";
      r.humanEscalated = true;
      appendAudit(r, "human-escalated", session.name, `Urgency raised from ${prev} to emergency by receiving facility`);
      renderMain();
      showToast(t("urgencyBumpedToast"), "warn");
    };
  });

  /* NEW: video call between the two facilities on a referral */
  document.querySelectorAll("[data-videocall]").forEach(btn => {
    btn.onclick = () => {
      const r = DB.referrals.find(x => x.id === btn.dataset.videocall);
      if (r) openVideoCallModal(r);
    };
  });
}

/* ============================= automatic escalation loop ============================= */
setInterval(() => {
  if (!session) return;
  const changed = processAutomaticEscalations();
  if (changed && currentView !== "newcase") renderMain();
  else {
    document.querySelectorAll("[data-timer-id]").forEach(el => {
      const r = DB.referrals.find(x => x.id === el.dataset.timerId);
      if (r && r.status === "notified" && r.to === currentFacility) {
        const left=Math.max(0,responseWindowMs(r.urgency)-(Date.now()-referralCreatedMs(r)));
        const mins=Math.floor(left/60000), secs=Math.floor((left%60000)/1000);
        el.textContent=`${mins}m ${secs.toString().padStart(2,"0")}s`;
      }
    });
  }
}, 1000);

/* ============================= init ============================= */
renderApp();