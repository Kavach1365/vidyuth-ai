export interface Translations {
  navbar: {
    brandName: string;
    brandAccent: string;
    badge: string;
    brandSubtitle: string;
    howItWorks: string;
    whyItMatters: string;
    calculator: string;
    faq: string;
    showInterest: string;
    langSwitchLabel: string;
  };
  hero: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    teluguHook: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    // WhatsApp chat mockup
    chatContactName: string;
    chatOnlineStatus: string;
    chatDateLabel: string;
    userMessage: string;
    userBillAttached: string;
    botGreeting: string;
    botBillAmountLabel: string;
    botBillUnitsLabel: string;
    botCategoryLabel: string;
    botCategoryValue: string;
    botSlab1: string;
    botSlab2: string;
    botSlab3: string;
    botFixedCharges: string;
    botEduty: string;
    botTotalLabel: string;
    botAlert: string;
    botAudioNote: string;
    botAudioDuration: string;
  };
  howItWorks: {
    tag: string;
    title: string;
    subtitle: string;
    steps: {
      stepNumber: string;
      title: string;
      description: string;
      detail: string;
    }[];
    personaHeading: string;
    personaSubheading: string;
    personas: {
      title: string;
      quote: string;
      benefit: string;
    }[];
  };
  problem: {
    tag: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      problem: string;
      solution: string;
    }[];
  };
  calculator: {
    tag: string;
    title: string;
    subtitle: string;
    stateSelectLabel: string;
    tgLabel: string;
    apLabel: string;
    unitsInputLabel: string;
    unitsSuffix: string;
    sliderMin: string;
    sliderMax: string;
    breakdownTitle: string;
    payableAmountLabel: string;
    billCategoryLabel: string;
    energyChargesLabel: string;
    fixedChargesLabel: string;
    edutyLabel: string;
    totalPayableLabel: string;
    slabJumpAlertTitle: string;
    slabJumpAlertDesc: (units: number, jumpThreshold: number) => string;
    slabJumpSafeTitle: string;
    slabJumpSafeDesc: (units: number) => string;
    explanationTitle: string;
    explanationText: (units: number, category: string, total: number) => string;
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  earlyAccess: {
    badge: string;
    title: string;
    subtitle: string;
    whatsappBtn: string;
    emailBtn: string;
    badge1: string;
    badge2: string;
    badge3: string;
    whatsappPreFilledText: string;
  };
  footer: {
    tagline: string;
    subMotto: string;
    productHeading: string;
    howItWorks: string;
    whyItMatters: string;
    calculator: string;
    faq: string;
    connectHeading: string;
    showInterest: string;
    chatWhatsapp: string;
    emailSupport: string;
    copyright: string;
    madeWithLove: string;
    whatsappPreFilledText: string;
  };
}

export const translations: Record<'te' | 'en', Translations> = {
  te: {
    navbar: {
      brandName: 'Vidyuth',
      brandAccent: 'AI',
      badge: 'స్మార్ట్ అసిస్టెంట్',
      brandSubtitle: 'మీ కరెంట్ బిల్లు సహాయకుడు',
      howItWorks: 'ఎలా పనిచేస్తుంది',
      whyItMatters: 'సమస్య & ప్రాముఖ్యత',
      calculator: 'టారిఫ్ కాలిక్యులేటర్',
      faq: 'ప్రశ్నలు - సమాధానాలు',
      showInterest: 'ప్రోటోటైప్‌ను ప్రయత్నించండి',
      langSwitchLabel: 'భాష',
    },
    hero: {
      badge: 'తెలుగులోనే • వాట్సాప్ విద్యుత్ అసిస్టెంట్',
      headingPrefix: 'మీ కరెంట్ బిల్లును ',
      headingHighlight: 'వాట్సాప్‌లోనే',
      headingSuffix: ' సులభంగా అర్థం చేసుకోండి.',
      teluguHook: 'మీ కరెంట్ బిల్లు అర్థం కావడం లేదా? VidyuthAIని అడగండి!',
      description:
        'మీ బిల్లు ఫోటో పంపితే చాలు — స్లాబ్ ఛార్జీలు, హిడెన్ ఫీజులు, ఎందుకు బిల్లు పెరిగిందో సరళమైన తెలుగు వివరణ మరియు వాయిస్ నోట్ ద్వారా నిమిషంలో తెలుస్తుంది. ఎలాంటి కొత్త యాప్స్ డౌన్‌లోడ్ చేయాల్సిన పనిలేదు.',
      ctaPrimary: 'వాట్సాప్‌లో ప్రోటోటైప్‌ను ప్రయత్నించండి',
      ctaSecondary: 'టారిఫ్ కాలిక్యులేటర్ చూడండి',
      stat1Value: '4.2 కోట్లు+',
      stat1Label: 'రెండు తెలుగు రాష్ట్రాల గృహ వినియోగదారులు',
      stat2Value: '0 యాప్స్',
      stat2Label: 'డౌన్‌లోడ్స్ అవసరం లేదు, వాట్సాప్ చాలు',
      stat3Value: '100% ఉచితం',
      stat3Label: 'ప్రజల సౌలభ్యం కోసం సిద్ధం చేసిన సేవ',
      chatContactName: 'VidyuthAI Assistant',
      chatOnlineStatus: 'ఆన్‌లైన్ • ఎల్లప్పుడూ అందుబాటులో',
      chatDateLabel: 'ఈరోజు',
      userMessage: 'నమస్కారం, నా ఈ నెల కరెంట్ బిల్లు ఫోటో పంపాను. బిల్లు ఎందుకు ఇంత ఎక్కువ వచ్చిందో చెప్పగలరా?',
      userBillAttached: 'కరెంట్_బిల్లు_మార్చి.jpg (రసీదు అటాచ్ అయింది)',
      botGreeting: 'నమస్కారం రమేష్ గారు! మీ మార్చి నెల కరెంట్ బిల్లు వివరాలు ఇక్కడ ఉన్నాయి:',
      botBillAmountLabel: 'మొత్తం బిల్లు',
      botBillUnitsLabel: 'వినియోగించిన యూనిట్లు',
      botCategoryLabel: 'కేటగిరీ',
      botCategoryValue: 'గృహ వినియోగం (LT-1B)',
      botSlab1: 'మొదటి 100 యూనిట్లు (@ ₹3.30/యూనిట్)',
      botSlab2: 'తర్వాతి 100 యూనిట్లు (@ ₹4.30/యూనిట్)',
      botSlab3: 'మిగిలిన 45 యూనిట్లు (@ ₹7.20/యూనిట్)',
      botFixedCharges: 'ఫిక్స్‌డ్ ఛార్జీలు & మీటర్ రెంట్',
      botEduty: 'విద్యుత్ సుంకం (ఎలక్ట్రిసిటీ డ్యూటీ)',
      botTotalLabel: 'చెల్లించాల్సిన మొత్తం',
      botAlert: 'ముఖ్య గమనిక: మీరు 200 యూనిట్ల పరిమితి దాటడం వల్ల చివరి 45 యూనిట్లకు ₹7.20 అధిక స్లాబ్ రేటు పడింది. కేవలం 10 యూనిట్లు తగ్గించి ఉంటే ₹150 ఆదా అయ్యేది!',
      botAudioNote: 'తెలుగు వాయిస్ సారాంశం వినండి',
      botAudioDuration: '0:18',
    },
    howItWorks: {
      tag: 'సులభమైన ప్రక్రియ',
      title: 'VidyuthAI ఎలా పనిచేస్తుంది?',
      subtitle: 'ఏ అదనపు యాప్ అవసరం లేదు — కేవలం మీ వాట్సాప్ ద్వారా 4 సాధారణ దశల్లో మీ బిల్లును విశ్లేషించండి.',
      steps: [
        {
          stepNumber: '01',
          title: 'వాట్సాప్‌లో హాయ్ అని పంపండి',
          description: 'మీ మొబైల్‌లో వాట్సాప్ తెరిచి మా నంబర్‌కు సందేశం పంపండి. రిజిస్ట్రేషన్ లేదా లాగిన్ అవసరం లేదు.',
          detail: 'తెలుగు లేదా ఇంగ్లీషులో ఎప్పుడైనా సంభాషణ ప్రారంభించవచ్చు.',
        },
        {
          stepNumber: '02',
          title: 'బిల్లు ఫోటో లేదా వాయిస్ సందేశం పంపండి',
          description: 'మీ మీటర్ రీడర్ ఇచ్చిన బిల్లు స్లిప్ ఫోటో తీసి పంపండి, లేదా మీ సర్వీస్ నంబర్ చెప్పండి.',
          detail: 'తెలంగాణ (TGSPDCL, TSNPDCL) మరియు ఆంధ్రప్రదేశ్ (APCPDCL, APEPDCL) బిల్లులన్నీ పనిచేస్తాయి.',
        },
        {
          stepNumber: '03',
          title: 'తక్షణ స్లాబ్ & టారిఫ్ విశ్లేషణ',
          description: 'మా స్మార్ట్ సిస్టమ్ మీ బిల్లులోని ప్రతి అంకెను, స్లాబ్ రేట్లను, అదనపు ఛార్జీలను సెకన్లలో లెక్కిస్తుంది.',
          detail: 'ఏ స్లాబ్‌లో ఎంత ఖర్చయిందో స్పష్టంగా విభజించి చూపిస్తుంది.',
        },
        {
          stepNumber: '04',
          title: 'తెలుగు ఆడియో & పొదుపు సలహాలు',
          description: 'మీ బిల్లు ఎందుకు పెరిగిందో వివరించే చిన్న తెలుగు వాయిస్ నోట్ మరియు బిల్లు తగ్గించుకునే చిట్కాలు అందుకోండి.',
          detail: 'వృద్ధులు మరియు కుటుంబ సభ్యులందరికీ సులభంగా అర్థమయ్యే రీతిలో సమాధానం.',
        },
      ],
      personaHeading: 'ఎవరికి ఉపయోగపడుతుంది?',
      personaSubheading: 'సాధారణ ప్రజల నుండి వ్యాపారుల వరకు ప్రతి ఒక్కరి విద్యుత్ సందేహాలకు పరిష్కారం.',
      personas: [
        {
          title: 'మధ్యతరగతి కుటుంబాలు',
          quote: '“గత నెల కంటే ఈ నెల ₹600 ఎందుకు ఎక్కువ వచ్చిందో ఒక్క స్లాబ్ వివరంతో అర్థమైంది.”',
          benefit: 'స్లాబ్ పరిమితులు దాటకుండా ముందే జాగ్రత్త పడవచ్చు.',
        },
        {
          title: 'అద్దె ఇళ్లలో ఉండే వారు',
          quote: '“ఓనర్ వేసిన యూనిట్ రేటు సరిగ్గా ఉందో లేదో వెంటనే క్రాస్-చెక్ చేసుకుంటున్నాను.”',
          benefit: 'సబ్‌మీటర్ వాడకానికి అధికారిక ప్రభుత్వ రేట్ల వివరాలు తెలుస్తాయి.',
        },
        {
          title: 'తెలుగు మాట్లాడే పెద్దలు',
          quote: '“చిన్న అక్షరాల బిల్లు చూడలేకపోయేవాడిని. ఇప్పుడు వాట్సాప్‌లో తెలుగు వాయిస్ మెసేజ్ వింటే సరిపోతోంది.”',
          benefit: 'చదవాల్సిన పనిలేకుండా వాయిస్ ద్వారానే పూర్తి సమాచారం.',
        },
        {
          title: 'చిరు వ్యాపారులు & కిరాణా దుకాణాలు',
          quote: '“కమర్షియల్ కేటగిరీలో ఫిక్స్‌డ్ ఛార్జీలు ఎంత పడుతున్నాయో కచ్చితంగా తెలిసింది.”',
          benefit: 'దుకాణాల విద్యుత్ వ్యయాన్ని క్రమబద్ధీకరించుకోవచ్చు.',
        },
      ],
    },
    problem: {
      tag: 'ప్రస్తుత ఇబ్బందులు',
      title: 'సాధారణ వినియోగదారులు ఎదుర్కొంటున్న సమస్యలు',
      subtitle: 'ప్రస్తుత కరెంట్ బిల్లుల విధానం ఎందుకు అయోమయంగా ఉందో ఇక్కడ చూడండి.',
      cards: [
        {
          title: 'టెలిస్కోపిక్ స్లాబ్స్ అయోమయం',
          problem: 'యూనిట్లు పెరిగే కొద్దీ ఛార్జీలు విపరీతంగా పెరుగుతాయి. ఒకే ఒక్క యూనిట్ దాటితే మొత్తం బిల్లు మరో కేటగిరీలోకి మారి భారీగా పెరుగుతుంది.',
          solution: 'VidyuthAI ఏ స్లాబ్‌లో ఎన్ని యూనిట్లు వాడారో స్పష్టంగా విడమరిచి చెబుతుంది.',
        },
        {
          title: 'దాగి ఉండే అదనపు ఛార్జీలు',
          problem: 'ఫిక్స్‌డ్ ఛార్జీలు, కస్టమర్ ఛార్జీలు, ఎలక్ట్రిసిటీ డ్యూటీ లాంటివి బిల్లులో చిన్న అక్షరాలతో ఉంటాయి, ఎందుకు వేశారో అర్థం కాదు.',
          solution: 'ప్రతి ఛార్జీ యొక్క అర్థాన్ని మరియు ప్రభుత్వ నిబంధనలను సులభంగా వివరిస్తుంది.',
        },
        {
          title: 'ఇంగ్లీష్ టెక్నికల్ పదజాలం',
          problem: 'బిల్లు కాగితాలపై ఉండే టెక్నికల్ కోడ్స్, అబ్రీవియేషన్స్ తెలుగు ప్రజలకు స్పష్టంగా బోధపడవు.',
          solution: 'స్వచ్ఛమైన తెలుగులో, మాట్లాడే భాషలోనే ప్రతి విషయాన్ని వివరిస్తుంది.',
        },
        {
          title: 'ముందస్తు హెచ్చరికలు లేకపోవడం',
          problem: 'నెల మొత్తం వాడిన తర్వాత బిల్లు చేతికి వచ్చాకే అధిక ఖర్చు విషయం తెలుస్తుంది, అప్పటికే ఆలస్యమవుతుంది.',
          solution: 'స్లాబ్ దాటే ముందు అప్రమత్తం చేసి బిల్లును అదుపులో ఉంచుకునే సలహాలు ఇస్తుంది.',
        },
      ],
    },
    calculator: {
      tag: 'మీరే స్వయంగా లెక్కించండి',
      title: 'ఇంటరాక్టివ్ టారిఫ్ కాలిక్యులేటర్',
      subtitle: 'మీ నెలవారీ యూనిట్లను ఎంచుకుని, తెలంగాణ లేదా ఆంధ్రప్రదేశ్ ప్రభుత్వ రేట్ల ప్రకారం ఎంత బిల్లు అవుతుందో ఇప్పుడే సరిచూసుకోండి.',
      stateSelectLabel: 'రాష్ట్రాన్ని ఎంచుకోండి:',
      tgLabel: 'తెలంగాణ (TGSPDCL / TSNPDCL)',
      apLabel: 'ఆంధ్రప్రదేశ్ (APCPDCL / APEPDCL)',
      unitsInputLabel: 'నెలవారీ వినియోగ యూనిట్లు:',
      unitsSuffix: 'యూనిట్లు',
      sliderMin: '0 యూనిట్లు',
      sliderMax: '800 యూనిట్లు',
      breakdownTitle: 'అంచనా వేసిన బిల్లు వివరాలు',
      payableAmountLabel: 'చెల్లించాల్సిన మొత్తం',
      billCategoryLabel: 'టారిఫ్ కేటగిరీ:',
      energyChargesLabel: 'విద్యుత్ వినియోగ ఛార్జీలు (Energy Charges):',
      fixedChargesLabel: 'ఫిక్స్‌డ్ ఛార్జీలు (Fixed Charges):',
      edutyLabel: 'విద్యుత్ సుంకం (Electricity Duty @ 6 పై/యూనిట్):',
      totalPayableLabel: 'మొత్తం సుమారు బిల్లు:',
      slabJumpAlertTitle: 'స్లాబ్ జంప్ హెచ్చరిక!',
      slabJumpAlertDesc: (units, jumpThreshold) =>
        `మీరు ప్రస్తుతం ${units} యూనిట్లలో ఉన్నారు. మరో ${jumpThreshold - units} యూనిట్లు వాడితే అధిక రేటు స్లాబ్‌లోకి వెళ్తారు. జాగ్రత్త పడితే బిల్లు ఆదా అవుతుంది!`,
      slabJumpSafeTitle: 'సురక్షిత స్లాబ్ పరిధిలో ఉన్నారు',
      slabJumpSafeDesc: (units) =>
        `మీరు ప్రస్తుతం ${units} యూనిట్ల పరిధిలో ఉన్నారు. మీ వినియోగం ప్రస్తుత స్లాబ్‌లోనే స్థిరంగా ఉంది.`,
      explanationTitle: 'తెలుగులో వివరణ:',
      explanationText: (units, category, total) =>
        `మీరు ${units} యూనిట్లు వాడారు. మీ వినియోగం ప్రకారం మీరు "${category}" పరిధిలోకి వస్తారు. ఫిక్స్‌డ్ ఛార్జీలు మరియు విద్యుత్ సుంకం కలుపుకుని మీ సుమారు బిల్లు ₹${total}/- అవుతుంది.`,
    },
    faq: {
      tag: 'సందేహాలు - సమాధానాలు',
      title: 'తరచుగా అడిగే ప్రశ్నలు (FAQ)',
      subtitle: 'VidyuthAI గురించి వినియోగదారులు అడిగే ముఖ్యమైన ప్రశ్నలకు స్పష్టమైన వివరణలు.',
      items: [
        {
          q: 'నేను ఏదైనా కొత్త మొబైల్ యాప్ డౌన్‌లోడ్ చేసుకోవాలా?',
          a: 'అవసరం లేదు! VidyuthAI పూర్తిగా మీ వాట్సాప్‌లోనే పనిచేస్తుంది. మీ ఫోన్ స్టోరేజ్ నిండదు, కొత్త పాస్‌వర్డ్‌లు గుర్తుంచుకోవాల్సిన పనిలేదు.',
        },
        {
          q: 'ఇది తెలుగు ఆడియో వాయిస్ మెసేజ్‌లలో కూడా మాట్లాడుతుందా?',
          a: 'అవును, తప్పకుండా! బిల్లు ఫోటో పంపినప్పుడు, ముఖ్యాంశాలను స్పష్టమైన తెలుగు వాయిస్ నోట్ ద్వారా కూడా పంపుతుంది. చదవడం కష్టమైన పెద్దవారికి ఇది ఎంతో మేలు చేస్తుంది.',
        },
        {
          q: 'కాలిక్యులేటర్ రేట్లు ప్రభుత్వ అధికారిక టారిఫ్‌లతో సరిపోలుతాయా?',
          a: 'అవును! TGSPDCL (తెలంగాణ) మరియు APCPDCL (ఆంధ్రప్రదేశ్) విద్యుత్ నియంత్రణ మండలి (ERC) అధికారికంగా నిర్ణయించిన గృహ వినియోగ స్లాబ్ రేట్ల ప్రకారమే గణన జరుగుతుంది.',
        },
        {
          q: 'నా వ్యక్తిగత వివరాలు లేదా ఫోన్ నంబర్ సురక్షితమేనా?',
          a: 'మీ సమాచారం 100% సురక్షితం. మీ ఫోన్ నంబర్ లేదా బిల్లు వివరాలను మేము ఎలాంటి మూడవ పక్షాలకు విక్రయించము లేదా షేర్ చేయము.',
        },
        {
          q: 'తెలంగాణ మరియు ఆంధ్రప్రదేశ్ రెండింటిలోనూ ఇది పనిచేస్తుందా?',
          a: 'అవును! తెలంగాణలోని TGSPDCL, TSNPDCL మరియు ఆంధ్రప్రదేశ్‌లోని APCPDCL, APEPDCL, APNPDCL డిస్కంలన్నింటికీ సేవలు అందుబాటులో ఉంటాయి.',
        },
      ],
    },
    earlyAccess: {
      badge: 'వాట్సాప్‌లో సిద్ధంగా ఉంది • తెలుగు & ఇంగ్లీష్',
      title: 'వాట్సాప్‌లో VidyuthAIని ప్రయత్నించండి',
      subtitle:
        'మీ కరెంట్ బిల్లును అర్థం చేసుకోవడానికి VidyuthAI ప్రోటోటైప్‌ను నేరుగా వాట్సాప్‌లో ప్రయత్నించండి.',
      whatsappBtn: 'వాట్సాప్‌లో ప్రోటోటైప్‌ను ప్రయత్నించండి',
      emailBtn: 'ఈమెయిల్ ద్వారా సంప్రదించండి',
      badge1: 'వాట్సాప్‌లో తక్షణ అసిస్టెంట్',
      badge2: 'యాప్ డౌన్‌లోడ్స్ లేవు',
      badge3: '100% ఉచిత సేవ',
      whatsappPreFilledText: encodeURIComponent(
        'నమస్కారం VidyuthAI! మీ ప్రోటోటైప్‌ను ప్రయత్నించాలనుకుంటున్నాను.'
      ),
    },
    footer: {
      tagline: 'మీ బిల్లును అర్థం చేసుకోండి. వినియోగాన్ని నియంత్రించండి. కరెంట్ ఖర్చులను ఆదా చేయండి.',
      subMotto: 'VidyuthAI — మీ నమ్మకమైన కరెంట్ సహాయకుడు',
      productHeading: 'విభాగములు',
      howItWorks: 'ఎలా పనిచేస్తుంది',
      whyItMatters: 'సమస్య & ప్రాముఖ్యత',
      calculator: 'టారిఫ్ కాలిక్యులేటర్',
      faq: 'ప్రశ్నలు - సమాధానాలు',
      connectHeading: 'సంప్రదించండి',
      showInterest: 'ప్రోటోటైప్‌ను ప్రయత్నించండి',
      chatWhatsapp: 'వాట్సాప్‌లో సంభాషించండి',
      emailSupport: 'ఈమెయిల్ సపోర్ట్',
      copyright: '© 2026 VidyuthAI. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.',
      madeWithLove: 'తెలుగు ప్రజల విద్యుత్ పొదుపు కోసం ప్రత్యేకంగా రూపొందించబడింది.',
      whatsappPreFilledText: encodeURIComponent(
        'నమస్కారం VidyuthAI! మీ ప్రోటోటైప్‌ను ప్రయత్నించాలనుకుంటున్నాను.'
      ),
    },
  },
  en: {
    navbar: {
      brandName: 'Vidyuth',
      brandAccent: 'AI',
      badge: 'Smart Assistant',
      brandSubtitle: 'Your Electricity Bill Assistant',
      howItWorks: 'How It Works',
      whyItMatters: 'Why It Matters',
      calculator: 'Tariff Calculator',
      faq: 'FAQ',
      showInterest: 'Try the Prototype',
      langSwitchLabel: 'Language',
    },
    hero: {
      badge: 'Telugu & English • Smart WhatsApp Assistant',
      headingPrefix: 'Understand your electricity bill on ',
      headingHighlight: 'WhatsApp',
      headingSuffix: ' with total clarity.',
      teluguHook: 'Confused by your electricity bill? Ask VidyuthAI!',
      description:
        'Just snap and send a photo of your electricity bill on WhatsApp. Get an instant, line-by-line breakdown of slab jumps, hidden fees, and practical saving tips with clear audio notes. No apps to install.',
      ctaPrimary: 'Try the Prototype on WhatsApp',
      ctaSecondary: 'Try Tariff Calculator',
      stat1Value: '4.2 Cr+',
      stat1Label: 'Telugu households across TG & AP',
      stat2Value: '0 Apps',
      stat2Label: 'Zero downloads, works directly on WhatsApp',
      stat3Value: '100% Free',
      stat3Label: 'Free community utility for consumers',
      chatContactName: 'VidyuthAI Assistant',
      chatOnlineStatus: 'Online • Always Available',
      chatDateLabel: 'Today',
      userMessage: 'Hello, here is a photo of my March electricity bill. Can you explain why the bill is so high this month?',
      userBillAttached: 'Electricity_Bill_March.jpg (Receipt Attached)',
      botGreeting: 'Hello Ramesh! Here is the breakdown of your March electricity bill:',
      botBillAmountLabel: 'Total Bill Amount',
      botBillUnitsLabel: 'Units Consumed',
      botCategoryLabel: 'Category',
      botCategoryValue: 'Domestic Household (LT-1B)',
      botSlab1: 'First 100 units (@ ₹3.30/unit)',
      botSlab2: 'Next 100 units (@ ₹4.30/unit)',
      botSlab3: 'Remaining 45 units (@ ₹7.20/unit)',
      botFixedCharges: 'Fixed Charges & Meter Rent',
      botEduty: 'Electricity Duty (6 paise/unit)',
      botTotalLabel: 'Total Payable Amount',
      botAlert: 'Important: Crossing the 200 unit threshold moved your last 45 units into the highest slab (@ ₹7.20/unit). Reducing just 10 units would have saved ₹150!',
      botAudioNote: 'Listen to Voice Summary in Telugu & English',
      botAudioDuration: '0:18',
    },
    howItWorks: {
      tag: 'Simple 4-Step Process',
      title: 'How VidyuthAI Works',
      subtitle: 'No complex registration or app installations. Just 4 simple steps directly inside WhatsApp.',
      steps: [
        {
          stepNumber: '01',
          title: 'Say Hi on WhatsApp',
          description: 'Open WhatsApp and send a message to our number. No signup, passwords, or app installation required.',
          detail: 'Start conversing comfortably in Telugu or English at any time.',
        },
        {
          stepNumber: '02',
          title: 'Send Bill Photo or Voice Note',
          description: 'Snap a clear photo of your paper meter slip, or type/speak your Consumer USC Number.',
          detail: 'Supports all DISCOMs across Telangana (TGSPDCL, TSNPDCL) and Andhra Pradesh (APCPDCL, APEPDCL).',
        },
        {
          stepNumber: '03',
          title: 'Instant Tariff & Slab Breakdown',
          description: 'Our smart engine decodes every line item, telescopic slab tier, and extra fee in seconds.',
          detail: 'Shows you exactly how much you paid in each slab and why the total increased.',
        },
        {
          stepNumber: '04',
          title: 'Audio Summary & Practical Savings',
          description: 'Receive an audio voice explanation in natural Telugu or English, along with actionable energy tips.',
          detail: 'Designed so elders and busy families can listen and understand without reading fine print.',
        },
      ],
      personaHeading: 'Who Is VidyuthAI For?',
      personaSubheading: 'Built for every Telugu-speaking household, tenant, elder, and small business owner.',
      personas: [
        {
          title: 'Middle-Class Families',
          quote: '“Now I know exactly why our bill jumped ₹600 from last month due to the 200-unit slab jump.”',
          benefit: 'Helps plan AC and geyser usage before crossing costly slab thresholds.',
        },
        {
          title: 'Tenants & Renters',
          quote: '“I can cross-check sub-meter calculations with official DISCOM slab rates without awkward landlord arguments.”',
          benefit: 'Ensures fair, transparent sub-meter billing every single month.',
        },
        {
          title: 'Telugu-Speaking Elders',
          quote: '“I cannot read the tiny print on the paper slip. The voice note on WhatsApp explains everything clearly.”',
          benefit: 'Zero digital barrier: just listen to the voice summary.',
        },
        {
          title: 'Kirana & Small Shops',
          quote: '“Clear transparency on commercial fixed charges and seasonal peak demand adjustments.”',
          benefit: 'Helps small business owners monitor and optimize electricity expenses.',
        },
      ],
    },
    problem: {
      tag: 'Common Billing Frustrations',
      title: 'Why Electricity Bills Are So Confusing',
      subtitle: 'Most consumers overpay or receive shocking bills because the current system is opaque.',
      cards: [
        {
          title: 'Telescopic Slab Shocks',
          problem: 'Cross just 1 extra unit past a threshold, and your entire billing bracket shifts into a significantly higher rate.',
          solution: 'VidyuthAI calculates each tier transparently so you know where every rupee went.',
        },
        {
          title: 'Hidden & Unclear Fixed Charges',
          problem: 'Fixed meter rents, customer charges, and fuel surcharges appear as cryptic abbreviations on thermal slips.',
          solution: 'Translates all statutory fees into plain, understandable everyday language.',
        },
        {
          title: 'English-Only Technical Slips',
          problem: 'Thermal slips use technical jargon (KWH, RMD, ED, FPPCA) that the average household cannot decipher.',
          solution: 'Delivers native Telugu and straightforward English audio and text explanations.',
        },
        {
          title: 'No Proactive Mid-Month Alerts',
          problem: 'You only discover you exceeded your budget at the end of the month when the paper slip is printed.',
          solution: 'Gives you advance awareness of slab limits so you can adjust usage before the bill arrives.',
        },
      ],
    },
    calculator: {
      tag: 'Calculate Yourself',
      title: 'Interactive Tariff Calculator',
      subtitle: 'Select your state and units to preview your exact domestic bill under official DISCOM regulations.',
      stateSelectLabel: 'Select State DISCOM:',
      tgLabel: 'Telangana (TGSPDCL / TSNPDCL)',
      apLabel: 'Andhra Pradesh (APCPDCL / APEPDCL)',
      unitsInputLabel: 'Monthly Electricity Consumption:',
      unitsSuffix: 'Units (kWh)',
      sliderMin: '0 Units',
      sliderMax: '800 Units',
      breakdownTitle: 'Estimated Bill Breakdown',
      payableAmountLabel: 'Estimated Payable Amount',
      billCategoryLabel: 'Tariff Bracket:',
      energyChargesLabel: 'Energy Charges:',
      fixedChargesLabel: 'Fixed & Customer Charges:',
      edutyLabel: 'Electricity Duty (@ 6 paise/unit):',
      totalPayableLabel: 'Total Estimated Bill:',
      slabJumpAlertTitle: 'Slab Jump Warning!',
      slabJumpAlertDesc: (units, jumpThreshold) =>
        `You are at ${units} units. Just ${jumpThreshold - units} more units will push you into a much higher rate slab. Conserving now will save money!`,
      slabJumpSafeTitle: 'Safe Within Current Slab',
      slabJumpSafeDesc: (units) =>
        `You are at ${units} units. Your consumption is comfortably within the current slab rate.`,
      explanationTitle: 'Plain Language Summary:',
      explanationText: (units, category, total) =>
        `For ${units} units of consumption, your domestic account falls under "${category}". Adding statutory fixed charges and electricity duty, your estimated payable bill is ₹${total}/-.`,
    },
    faq: {
      tag: 'Clear Answers',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about how VidyuthAI works and protects your data.',
      items: [
        {
          q: 'Do I need to download or install any new mobile app?',
          a: 'No! VidyuthAI operates completely inside WhatsApp. You do not need to download apps, use phone storage, or register accounts.',
        },
        {
          q: 'Does it support voice audio notes in Telugu?',
          a: 'Yes, absolutely! When you submit a bill, VidyuthAI can send you a brief audio voice note explaining the bill breakdown in clear, spoken Telugu or English.',
        },
        {
          q: 'Are the tariff rates accurate according to official government slabs?',
          a: 'Yes. Calculations are calibrated to the official retail domestic tariff orders issued by the Telangana and Andhra Pradesh Electricity Regulatory Commissions (ERC).',
        },
        {
          q: 'Is my phone number and bill data private and secure?',
          a: 'Yes. We respect your privacy. Your phone number and bill details are encrypted and never sold, rented, or shared with third-party advertisers.',
        },
        {
          q: 'Does this cover both Telangana and Andhra Pradesh DISCOMs?',
          a: 'Yes. It supports all domestic consumers under TGSPDCL and TSNPDCL in Telangana, as well as APCPDCL, APEPDCL, and APNPDCL in Andhra Pradesh.',
        },
      ],
    },
    earlyAccess: {
      badge: 'Ready on WhatsApp • Telugu & English',
      title: 'Try VidyuthAI on WhatsApp',
      subtitle:
        'Try the VidyuthAI prototype directly on WhatsApp to understand your electricity bill and get instant explanations.',
      whatsappBtn: 'Try the Prototype on WhatsApp',
      emailBtn: 'Send us an Email',
      badge1: 'Instant WhatsApp Assistant',
      badge2: 'Zero App Download Needed',
      badge3: '100% Free to Use',
      whatsappPreFilledText: encodeURIComponent(
        'Hi VidyuthAI! I would like to try your prototype.'
      ),
    },
    footer: {
      tagline: 'Understand your bill. Track your usage. Make informed energy decisions.',
      subMotto: 'VidyuthAI — Your Trusted Electricity Bill Assistant',
      productHeading: 'Product',
      howItWorks: 'How It Works',
      whyItMatters: 'Why It Matters',
      calculator: 'Tariff Calculator',
      faq: 'Frequently Asked Questions',
      connectHeading: 'Connect with Us',
      showInterest: 'Try the Prototype',
      chatWhatsapp: 'Chat on WhatsApp',
      emailSupport: 'Email Support',
      copyright: '© 2026 VidyuthAI. All rights reserved.',
      madeWithLove: 'Crafted for electricity consumers across Telangana & Andhra Pradesh.',
      whatsappPreFilledText: encodeURIComponent(
        'Hi VidyuthAI! I would like to try your prototype.'
      ),
    },
  },
};
