// Bilingual content for VIREEL / Umdeny landing
// FR primary, EN secondary.

const CONTENT = {
  fr: {
    banner:
      "Vous semblez perdu et dépassé, vous ne savez pas par où commencer ? Faites le Quizz Patrimonial et recevez votre anlayse de profil.",
    bannerCta: "Faire le quiz",

    nav: {
      brand: "VIREEL",
      tagline: "by Umdeny Capital",
      links: [
        { label: "Qui sommes-nous", href: "#about" },
        { label: "Formations", href: "#formations", hasMenu: true },
        { label: "Opportunités", href: "#opportunities" },
        { label: "Témoignages", href: "#testimonials" },
      ],
      menu: [
        { icon: "🏛", label: "Formation Bourse", status: "disponible" },
        { icon: "💹", label: "Formation Trading", status: "bientôt" },
        { icon: "💱", label: "Formation P2P", status: "bientôt" },
      ],
      cta: "Rejoindre",
      langOther: "EN",
    },

    hero: {
      eyebrow: "Formation · Bourse · Trading · P2P",
      h1: "Bien investir commence par une bonne formation.",
      h1Highlight: "une bonne formation",
      sub: "Vous êtes en Afrique ou dans la diaspora. Vous sentez que des opportunités existent — la bourse, le trading, la crypto — mais vous n'avez pas encore les bases pour vous lancer sans risque. Nous sommes là pour ça.",
      sub2: "Depuis 2019, notre équipe accompagne des particuliers dans la gestion et le développement de leur patrimoine. Formez-vous par des experts en finance — des praticiens qui accompagnent des clients fortunés et gèrent des portefeuilles importants au quotidien.",
      cta1: "Découvrir nos formations",
      cta2: "Pour ceux qui souhaitent passer à l'action, cliquez sur le lien, et découvrez nos véhicules d'investissement",
      stats: [
        { num: "1M+", unit: "USD", label: "de capital géré" },
        { num: "10+", label: "Projets pilotés" },
        { num: "10+", label: "Pays couverts" },
        { num: "2019", label: "Depuis" },
      ],
      reelLabel: "Vireel — Fondateur",
      reelCaption:
        "« Investir, ça s'apprend. Pas dans un livre — sur le terrain. »",
    },

    about: {
      eyebrow: "Qui sommes-nous",
      h2: "Une équipe d'experts, une mission claire.",
      h2Italic: "une mission claire",
      lead: "Je suis Vireel, et avec mes associés nous avons fondé Umdeny Capital — une société spécialisée dans l'accompagnement des particuliers dans la gestion de leur patrimoine.",
      paragraphs: [
        "Depuis 2019, nous gérons des capitaux, structurons des portefeuilles et accompagnons des investisseurs à travers l'Afrique et la diaspora. Au fil des années, nous avons constaté une réalité qui se répète : des opportunités réelles existent sur les marchés africains et internationaux — mais beaucoup y entrent sans les bases nécessaires, et en paient le prix.",
        "C'est pour changer cela que nous avons construit ces formations. Elles condensent des années d'expertise terrain, développées par des praticiens qui exercent ces métiers au quotidien — pas des théoriciens, des opérateurs actifs.",
        "Notre équipe a réuni des expertises en finance et structuration d'investissement, et une expérience directe sur les marchés financiers africains et internationaux. Nous avons traversé la Russie, la France, le Canada, le Gabon, les États-Unis, la Côte d'Ivoire, Dubaï et d'autres pays — pour identifier les meilleures opportunités, les tester et les adapter aux réalités africaines.",
      ],
      countries: [
        "Russie",
        "France",
        "Canada",
        "Gabon",
        "États-Unis",
        "Côte d'Ivoire",
        "Dubaï",
      ],
      partnersTitle: "Nos partenaires & cadre réglementaire",
      partners: [
        "BVMAC",
        "BEM Securities",
        "Africa First Finance",
        "COGEP",
        "Cabinet Nemendi",
        "Korryx",
        "Exness",
        "FBS",
        "Fusion Markets",
        "HFM",
      ],
      regulationsAfrica: "Régulations africaines",
      regulationsAfricaList: [
        "COSUMAF",
        "CEMAC",
        "COBAC",
        "ONECCA",
        "MINADER",
        "FSCA (Afrique du Sud)",
        "FSC (Maurice)",
      ],
      regulationsIntl: "Régulations internationales",
      regulationsIntlList: ["FCA (UK)", "CySEC (Chypre)", "ASIC (Australie)"],
    },

    opportunities: {
      eyebrow: "L'Opportunité est là",
      h2: "Êtes-vous prêt ?",
      h2Italic: "Êtes-vous prêt",
      lead: "Les marchés financiers africains ne sont plus une promesse lointaine. Ils produisent des rendements réels, des plus-values documentées, et certaines des opérations les plus importantes de leur histoire se déroulent en ce moment même.",
      cards: [
        {
          tag: "BVMAC · Novembre 2025",
          icon: "🏛",
          title: "BGFI Holding entre en bourse",
          body: "Depuis novembre 2025, BGFI Holding Corporation — maison mère du Groupe BGFIBank — a officiellement fait son entrée à la Bourse des valeurs mobilières de l'Afrique centrale. Une étape historique pour la première institution bancaire de la sous-région.",
          highlight: "6 000 Mds FCFA",
          highlightLabel: "d'actifs",
          subBody:
            "Avec seulement six sociétés cotées à la BVMAC, l'entrée d'un groupe panafricain de cette envergure signale un point d'inflexion. Bénéfice net record 2024 : 122 Mds FCFA.",
          tail: "Des sources de marché indiquent que CBC et Zenithe Insurance pourraient rejoindre la cote prochainement.",
        },
        {
          tag: "Nigeria · Août 2026",
          icon: "🌍",
          title: "Dangote : la plus grande IPO d'Afrique se prépare",
          body: "L'introduction en bourse de la raffinerie Dangote — dont l'ouverture aux souscriptions est attendue dès août 2026 — est en passe de devenir la plus grande IPO de l'histoire des marchés financiers africains.",
          highlight: "$40–50Mds",
          highlightLabel: "de valorisation estimée",
          subBody:
            "Des discussions avancées sont engagées afin de permettre la cotation sur plusieurs marchés africains simultanément, dont la BRVM et la Bourse de Johannesburg.",
          tail: "Une opération financière transfrontalière inédite sur le continent africain.",
        },
      ],
      tradingTitle:
        "Le trading : des histoires réelles, des résultats concrets",
      tradingLead:
        "Le trading n'est pas réservé aux salles de marché de Londres ou New York. Des Africains le pratiquent au quotidien et en vivent — lorsqu'ils sont formés et disciplinés.",
      stories: [
        {
          name: "Koffi",
          age: "34 ans",
          city: "Abidjan",
          tag: "Trading Forex",
          body: "Comptable de formation, commence le trading en 2020 avec 500 USD après six mois de formation intensive. Stratégie conservative à 3–5 % mensuel, discipline rigoureuse du risque. Il transforme son compte en source de revenus complémentaires, quitte son emploi deux ans plus tard. Forme aujourd'hui à son tour d'autres traders en Côte d'Ivoire.",
          metric: "500 → revenu plein temps",
          metricLabel: "en 24 mois",
        },
        {
          name: "Armand",
          age: "29 ans",
          city: "Yaoundé",
          tag: "Indices",
          body: "Perd 800 USD sur une plateforme non régulée en 2021 — sans formation, sur conseil d'un ami. Il décide de se former sérieusement. Douze mois de travail, une stratégie construite, une gestion du risque maîtrisée : il génère aujourd'hui des rendements réguliers sur les marchés indices, depuis son téléphone.",
          metric: "Rendements réguliers",
          metricLabel: "depuis son téléphone",
        },
        {
          name: "Diane",
          age: "27 ans",
          city: "Douala",
          tag: "P2P · USDT",
          body: "Commence le P2P avec 150 000 FCFA en 2022, après une formation sur les stablecoins et Binance P2P. En six mois, elle développe un portefeuille de clients réguliers — commerçants qui ont besoin de USDT pour payer leurs fournisseurs en Chine. Volume mensuel à six chiffres en FCFA, un assistant embauché.",
          metric: "150K FCFA → volume 6 chiffres",
          metricLabel: "en 6 mois",
        },
        {
          name: "Bertrand",
          age: "32 ans",
          city: "Lyon (diaspora)",
          tag: "P2P · Arbitrage",
          body: "Camerounais de la diaspora, utilise le P2P comme pont entre l'Europe et le Cameroun — arbitrant les écarts de taux entre les plateformes européennes et le marché camerounais. Marges nettes de 4 à 6 % par transaction sur des volumes de 2 000 à 5 000 USD, plusieurs fois par semaine.",
          metric: "4–6 % de marge",
          metricLabel: "par transaction",
        },
      ],
      footerLine:
        "Un trader régulier avec une gestion rigoureuse du risque peut viser entre 5 % et 15 % de rendement mensuel sur ses positions. Ces chiffres sont réels — ils ne sont pas garantis. Ils sont le résultat d'une méthode, pas d'un coup de chance.",
    },

    risks: {
      eyebrow: "La face cachée",
      h2: "Ces mêmes opportunités peuvent devenir des pièges.",
      h2Italic: "des pièges",
      lead: "Les marchés financiers attirent. Mais sans formation ni accompagnement sérieux, ils détruisent du capital aussi vite qu'ils en créent. En Afrique, les chiffres officiels sont alarmants.",
      stats: [
        {
          num: "52 %",
          source: "ANTIC · 2023",
          text: "des cas de cybercriminalité signalés au Cameroun étaient liés à des arnaques crypto. Pertes estimées : 1,1 Md FCFA — près de 1,9 M USD.",
        },
        {
          num: "×2",
          source: "Cybercriminalité financière",
          text: "Les pertes ont doublé entre 2019 et 2021 au Cameroun, passant à 12,2 Mds FCFA pour la seule année 2021.",
        },
        {
          num: "300 000",
          source: "Affaire LimoCoin",
          text: "victimes de quarante nationalités différentes, pour un montant équivalent à la moitié du budget annuel du Cameroun.",
        },
        {
          num: "10 000",
          source: "Yaoundé · Douala",
          text: "personnes ayant souscrit aux offres d'un individu promettant jusqu'à 15 % de rendement par semaine — jusqu'à son arrestation.",
        },
      ],
      verityTitle:
        "Sur les rendements : la vérité que tout le monde ne dit pas",
      verityBody:
        "Oui, des rendements élevés existent sur ces marchés. Nous venons de vous en montrer des exemples réels. Mais ils ne peuvent pas être garantis, et ils sont souvent le fruit d'un contexte particulier — une période de marché favorable, une stratégie précise, des années de pratique.",
      verityRule:
        "Quiconque vous promet un rendement fixe élevé chaque semaine, sans conditions, sans risque mentionné, sans cadre réglementaire clair — ment.",
      verityClose:
        "Plus la promesse est haute et certaine, plus le risque est réel. La formation vous apprend à lire ces signaux avant qu'il ne soit trop tard.",
      tagline:
        "La formation n'est pas une option. C'est votre première ligne de défense — et votre meilleure stratégie de rendement.",
    },

    formations: {
      eyebrow: "Nos Formations",
      h2: "Apprenez les stratégies qui fonctionnent — de praticiens qui les appliquent.",
      h2Italic: "qui les appliquent",
      lead: "Chaque formation Vireel est construite par des professionnels actifs sur ces marchés. Nos modules couvrent les réalités africaines, les outils disponibles localement, et les stratégies testées sur le terrain.",
      formatLabel: "Format des formations",
      formats: [
        "🎬 Vidéos",
        "🎙 Podcasts",
        "📄 Documents & présentations",
        "✅ Quiz de validation",
        "📋 Fiches pratiques",
        "👥 Accompagnement personnalisé",
      ],
      cards: [
        {
          icon: "🏛",
          tag: "Disponible",
          tagAccent: true,
          title: "Formation Bourse",
          subtitle: "Investir en Bourse en Afrique Centrale",
          body: "La Bourse est l'un des outils les plus puissants pour faire croître un patrimoine sur le long terme — et l'un des moins utilisés en Afrique Centrale. Cette formation vous donne les clés concrètes pour comprendre, accéder et investir sur les marchés boursiers locaux, avec méthode et confiance.",
          curriculum: [
            "Fonctionnement de la BVMAC et des marchés CEMAC",
            "Lire et analyser un titre coté — actions, obligations, sukuk",
            "Construire un portefeuille adapté à votre profil de risque",
            "Comprendre la fiscalité et le cadre réglementaire local",
            "Passer vos premiers ordres avec confiance",
          ],
          bonusTitle: "Inclus dans la formation",
          bonus: [
            {
              t: "Accès à des SDB agréées",
              d: "Tous les investissements passent par des Sociétés de Bourse agréées, sous supervision de la COSUMAF.",
            },
            {
              t: "Jusqu'à 5 % de décote",
              d: "Les apprenants qui investissent via Umdeny bénéficient d'une décote pouvant aller jusqu'à 5 % sur le prix d'acquisition.",
            },
            {
              t: "Accompagnement personnalisé",
              d: "Pour ceux qui souhaitent être suivis étape par étape, notre équipe vous accompagne dans chaque décision d'investissement.",
            },
          ],
          pricingTable: [
            {
              label: "Formation seule",
              crossPrice: "150 USD",
              price: "100 USD",
              suffix: "/ mois",
              xaf: "~ 60 000 XAF / mois",
              xafCross: "90 000 XAF",
            },
            {
              label: "+ Accompagnement personnalisé",
              price: "1 000 USD",
              suffix: " ponctuel",
              xaf: "~ 600 000 XAF",
            },
          ],
          paymentLabel: "Paiement accepté",
          payment: ["Mobile Money", "Virement", "Crypto"],
          cta: "S'inscrire à la Formation Bourse",
          cta2: "Réserver un échange de cadrage",
        },
        {
          icon: "💹",
          tag: "Bientôt",
          title: "Formation Trading",
          subtitle: "Maîtriser les marchés financiers",
          body: "Opérer sur les marchés Forex, actions et indices avec des stratégies rigoureuses et une gestion professionnelle du risque. Vous apprendrez à analyser les marchés, construire un système de trading adapté à votre profil, et développer la discipline qui sépare un trader rentable d'un trader perdant.",
          curriculum: [
            "Analyse technique et fondamentale appliquée",
            "Construction d'un plan de trading personnel",
            "Gestion du risque : sizing, stops, drawdown",
            "Psychologie et discipline opérationnelle",
            "Outils, plateformes, brokers régulés",
          ],
          cta: "Rejoindre la liste d'attente",
          waitlist: true,
        },
        {
          icon: "💱",
          tag: "Bientôt",
          title: "Formation P2P",
          subtitle: "Arbitrage & Actifs Virtuels",
          body: "Acheter et revendre des actifs numériques avec des marges régulières, légalement, en sécurité, à grande échelle — en utilisant les outils Mobile Money que vous utilisez déjà. De la découverte des stablecoins jusqu'au scaling de votre activité en B2B, en passant par la sécurité, la conformité et les stratégies d'approvisionnement.",
          curriculum: [
            "Stablecoins, USDT et infrastructure Mobile Money",
            "Sourcing de liquidité et structuration des marges",
            "Conformité KYC et bonnes pratiques sécurité",
            "Passage du B2C au B2B : scaling de l'activité",
            "Comptabilité, fiscalité et déclaration de revenus",
          ],
          cta: "Rejoindre la liste d'attente",
          waitlist: true,
        },
      ],
    },

    testimonials: {
      eyebrow: "Témoignages",
      h2: "Ils ont franchi le pas.",
      h2Italic: "le pas",
      lead: "Voici ce qu'en disent ceux qui se sont formés avec nous.",
      items: [
        {
          quote:
            "Avant Vireel, je pensais que la bourse n'était pas pour nous. La formation m'a donné les outils — et la confiance — pour passer mon premier ordre. Six mois plus tard, je gère un petit portefeuille diversifié.",
          name: "Patricia M.",
          role: "Cadre RH · Libreville",
          profile: "Salariée",
        },
        {
          quote:
            "J'ai cherché pendant deux ans à comprendre le trading par moi-même. Les vidéos YouTube ne suffisaient pas. La formation Vireel a structuré ce que je faisais déjà — et m'a évité les erreurs qui auraient effacé mon capital.",
          name: "Thierry D.",
          role: "Entrepreneur · Yaoundé",
          profile: "Entrepreneur",
        },
        {
          quote:
            "Ce qui m'a convaincu, c'est que ce sont des praticiens qui gèrent réellement des portefeuilles. Pas des formateurs de plateforme. La différence se sent dès la première session.",
          name: "Marie-Claire B.",
          role: "Investisseuse · Diaspora · Paris",
          profile: "Investisseuse",
        },
        {
          quote:
            "Le P2P, je le faisais déjà — mais sans méthode et sans sécurité. La formation m'a permis de structurer mon activité, de protéger mon capital et de tripler mon volume mensuel.",
          name: "Joël K.",
          role: "Opérateur P2P · Douala",
          profile: "Indépendant",
        },
      ],
    },

    quiz: {
      eyebrow: "Votre profil patrimonial",
      h2: "Vous pensez vous connaître en tant qu'investisseur. Êtes-vous sûr ?",
      h2Italic: "Êtes-vous sûr",
      lead: "Au fil des années, nous avons accompagné des dizaines de personnes sur ces marchés. Et nous avons observé quelque chose de frappant : même parmi ceux qui gagnent, beaucoup finissent par tout perdre. Pas à cause du marché. Pas à cause d'une arnaque. Simplement parce qu'ils ne se connaissaient pas eux-mêmes.",
      points: [
        "Quelle prise de risque correspond à votre situation ?",
        "Quel est votre horizon réel d'investissement ?",
        "Quelle est votre capacité émotionnelle à gérer les fluctuations ?",
        "Quels véhicules correspondent à votre profil aujourd'hui ?",
      ],
      body: "Ce quiz vous pose les bonnes questions : situation, objectifs, tolérance au risque, horizon d'investissement. Répondez honnêtement — pas ce que vous pensez être la bonne réponse, mais ce qui correspond à votre réalité aujourd'hui.",
      result:
        "À la fin, vous recevez directement par email une analyse complète et gratuite de votre profil investisseur — les véhicules adaptés, les formations recommandées, et les prochaines étapes concrètes.",
      cta: "Faire le quiz gratuitement",
      ctaSub: "5 minutes · gratuit",
      tail: "Pour découvrir l'ensemble des véhicules d'investissement disponibles → umdeny.com",
      tailLink: "Consultez le site web",
    },

    footer: {
      tagline:
        "Faites vous accompagner par nos experts dans la compréhension et la prise en main des différents machés financiers.",
      cols: [
        {
          title: "Formations",
          links: [
            {
              text: "Bourse · disponible",
              href: "#formations",
            },
            {
              text: "Trading · bientôt",
              href: "#formations",
            },
            { text: "P2P · bientôt", href: "#formations" },
          ],
        },
        {
          title: "Passer à l'action",
          links: [
            {
              text: "Nos vehicules d'investissement",
              href: "https://umdeny.com/nos-vehicules",
            },
            { text: "Umdeny Capital", href: "https://umdeny.com" },
          ],
        },
        {
          title: "Contact",
          links: [
            { text: "vireel@umdeny.com", href: "mailto:vireel@umdeny.com" },
            {
              text: "formation@umdeny.com",
              href: "mailto:formation@umdeny.com",
            },
          ],
        },
      ],
      legal: "© 2025 Vireel / Umdeny — Tous droits réservés",
      disclaimer:
        "Les performances et exemples cités sont basés sur des cas réels et des données de marché observées. Ils ne constituent pas une garantie de résultats. Tout investissement comporte des risques. Nos formations ont précisément pour objectif de vous aider à les comprendre et à les gérer.",
    },
  },

  en: {
    banner:
      "Do you feel lost and overwhelmed, not sure where to start? Take the Wealth Quiz and receive your profile analysis.",
    bannerCta: "Take the quiz",
    nav: {
      brand: "VIREEL",
      tagline: "by Umdeny Capital",
      links: [
        { label: "About", href: "#about" },
        { label: "Programs", href: "#formations", hasMenu: true },
        { label: "Opportunities", href: "#opportunities" },
        { label: "Stories", href: "#testimonials" },
      ],
      menu: [
        { icon: "🏛", label: "Stock Market Program", status: "available" },
        { icon: "💹", label: "Trading Program", status: "soon" },
        { icon: "💱", label: "P2P Program", status: "soon" },
      ],
      cta: "Join",
      langOther: "FR",
    },
    hero: {
      eyebrow: "Training · Stocks · Trading · P2P",
      h1: "Smart investing starts with proper training.",
      h1Highlight: "proper training",
      sub: "You're in Africa or the diaspora. You sense opportunities exist — stocks, trading, crypto — but you don't yet have the foundation to step in without risk. That's why we exist.",
      sub2: "Since 2019, our team has helped individuals manage and grow their wealth. Learn from finance experts — practitioners who advise high-net-worth clients and manage real portfolios daily.",
      cta1: "Browse the programs",
      cta2: "If you're ready to take action, click here to explore our investment opportunities",
      stats: [
        { num: "1M+", unit: "USD", label: "of capital managed" },
        { num: "10+", label: "Projects led" },
        { num: "10+", label: "Countries" },
        { num: "2019", label: "Since" },
      ],
      reelLabel: "Vireel — Founder",
      reelCaption:
        "« Investing is a skill. Not learned in books — on the ground. »",
    },
    about: {
      eyebrow: "About us",
      h2: "Expert team, clear mission.",
      h2Italic: "clear mission",
      lead: "I'm Vireel. With my partners, we founded Umdeny Capital — a firm specialised in supporting individuals in managing their wealth.",
      paragraphs: [
        "Since 2019, we manage capital, structure portfolios, and advise investors across Africa and the diaspora. Over the years, a pattern keeps repeating: real opportunities exist in African and international markets — yet many enter without the foundations, and pay the price.",
        "We built these programs to change that. They condense years of field expertise, developed by practitioners who do this work daily — not theorists, active operators.",
        "Our team has assembled expertise in finance and investment structuring, with direct experience in African and international financial markets. We've worked across Russia, France, Canada, Gabon, the United States, Côte d'Ivoire, Dubai and others — to identify the best opportunities, test them, and adapt them to African realities.",
      ],
      countries: [
        "Russia",
        "France",
        "Canada",
        "Gabon",
        "USA",
        "Côte d'Ivoire",
        "Dubai",
      ],
      partnersTitle: "Partners & regulatory framework",
      partners: [
        "BVMAC",
        "BEM Securities",
        "Africa First Finance",
        "COGEP",
        "Cabinet Nemendi",
        "Korryx",
        "Exness",
        "FBS",
        "Fusion Markets",
        "HFM",
      ],
      regulationsAfrica: "African regulations",
      regulationsAfricaList: [
        "COSUMAF",
        "CEMAC",
        "COBAC",
        "ONECCA",
        "MINADER",
        "FSCA (South Africa)",
        "FSC (Mauritius)",
      ],
      regulationsIntl: "International regulations",
      regulationsIntlList: ["FCA (UK)", "CySEC (Cyprus)", "ASIC (Australia)"],
    },
    opportunities: {
      eyebrow: "The opportunity is here",
      h2: "Are you ready?",
      h2Italic: "Are you ready",
      lead: "African financial markets are no longer a distant promise. They produce real returns, documented gains, and some of the largest deals in their history are unfolding right now.",
      cards: [
        {
          tag: "BVMAC · November 2025",
          icon: "🏛",
          title: "BGFI Holding lists on the exchange",
          body: "Since November 2025, BGFI Holding Corporation — parent of BGFIBank Group — has officially listed on Central Africa's stock exchange. A historic step for the sub-region's leading banking institution.",
          highlight: "6,000B FCFA",
          highlightLabel: "in assets",
          subBody:
            "With only six listed companies on the BVMAC, the entry of a pan-African banking group of this scale signals an inflection point. 2024 record net income: 122B FCFA.",
          tail: "Market sources indicate CBC and Zenithe Insurance may join the listing soon.",
        },
        {
          tag: "Nigeria · August 2026",
          icon: "🌍",
          title: "Dangote: Africa's largest IPO is taking shape",
          body: "The Dangote refinery IPO — subscriptions expected to open in August 2026 — is set to become the largest IPO in African financial market history.",
          highlight: "$40–50B",
          highlightLabel: "estimated valuation",
          subBody:
            "Advanced discussions are underway to enable simultaneous listing on multiple African markets, including the BRVM and the Johannesburg Stock Exchange.",
          tail: "An unprecedented cross-border financial operation on the continent.",
        },
      ],
      tradingTitle: "Trading: real stories, concrete results",
      tradingLead:
        "Trading isn't reserved for London or New York trading floors. Africans practice it daily and make a living from it — when properly trained and disciplined.",
      stories: [
        {
          name: "Koffi",
          age: "34",
          city: "Abidjan",
          tag: "Forex trading",
          body: "Accountant by training, started trading in 2020 with USD 500 after six months of intensive training. Conservative 3–5 % monthly strategy, strict risk discipline. Turned his account into a steady income stream, left his job two years later. Now trains other traders in Côte d'Ivoire.",
          metric: "500 → full-time income",
          metricLabel: "in 24 months",
        },
        {
          name: "Armand",
          age: "29",
          city: "Yaoundé",
          tag: "Indices",
          body: "Lost USD 800 on an unregulated platform in 2021 — no training, on a friend's advice. He decided to train seriously. Twelve months of work, a built strategy, mastered risk management: today he generates regular returns on index markets, from his phone.",
          metric: "Regular returns",
          metricLabel: "from his phone",
        },
        {
          name: "Diane",
          age: "27",
          city: "Douala",
          tag: "P2P · USDT",
          body: "Started P2P with 150,000 FCFA in 2022, after training on stablecoins and Binance P2P. Six months in, she had a regular client base — merchants needing USDT to pay Chinese suppliers. Six-figure monthly volume in FCFA, one assistant hired.",
          metric: "150K FCFA → 6-digit volume",
          metricLabel: "in 6 months",
        },
        {
          name: "Bertrand",
          age: "32",
          city: "Lyon (diaspora)",
          tag: "P2P · Arbitrage",
          body: "Cameroonian diaspora, uses P2P as a bridge between Europe and Cameroon — arbitraging rate gaps between European platforms and the Cameroonian market. Net margins of 4–6 % per transaction on USD 2,000–5,000 volumes, several times a week.",
          metric: "4–6 % margin",
          metricLabel: "per transaction",
        },
      ],
      footerLine:
        "A consistent trader with rigorous risk management can target 5 %–15 % monthly returns on their positions. These figures are real — they are not guaranteed. They are the result of a method, not luck.",
    },
    risks: {
      eyebrow: "The other side",
      h2: "These same opportunities can become traps.",
      h2Italic: "traps",
      lead: "Financial markets attract. But without training and serious guidance, they destroy capital as fast as they create it. In Africa, the official figures are alarming.",
      stats: [
        {
          num: "52 %",
          source: "ANTIC · 2023",
          text: "of cybercrime cases reported in Cameroon were tied to crypto scams. Estimated losses: 1.1B FCFA — nearly USD 1.9M.",
        },
        {
          num: "×2",
          source: "Financial cybercrime",
          text: "Losses doubled between 2019 and 2021 in Cameroon, reaching 12.2B FCFA for 2021 alone.",
        },
        {
          num: "300,000",
          source: "LimoCoin case",
          text: "victims of forty different nationalities, for an amount equal to half of Cameroon's annual budget.",
        },
        {
          num: "10,000",
          source: "Yaoundé · Douala",
          text: "people had signed up to an individual promising up to 15 % weekly returns — until his arrest.",
        },
      ],
      verityTitle: "On returns: the truth few will tell you",
      verityBody:
        "Yes, high returns exist on these markets. We just showed you real examples. But they cannot be guaranteed, and they often result from a specific context — a favourable market period, a precise strategy, years of practice.",
      verityRule:
        "Anyone promising fixed high returns every week, without conditions, no risk disclosed, no clear regulatory framework — is lying.",
      verityClose:
        "The higher and more certain the promise, the higher the real risk. Training teaches you to read those signals before it's too late.",
      tagline:
        "Training isn't optional. It's your first line of defence — and your best return strategy.",
    },
    formations: {
      eyebrow: "Our programs",
      h2: "Learn the strategies that work — from practitioners who use them.",
      h2Italic: "who use them",
      lead: "Every Vireel program is built by professionals active on these markets. Our modules cover African realities, locally available tools, and field-tested strategies.",
      formatLabel: "Program format",
      formats: [
        "🎬 Videos",
        "🎙 Podcasts",
        "📄 Docs & decks",
        "✅ Validation quizzes",
        "📋 Practical sheets",
        "👥 Personal coaching",
      ],
      cards: [
        {
          icon: "🏛",
          tag: "Available",
          tagAccent: true,
          title: "Stock Market Program",
          subtitle: "Investing on Central African exchanges",
          body: "The stock market is one of the most powerful tools to grow wealth over the long term — and one of the least used in Central Africa. This program gives you the concrete keys to understand, access and invest on local markets with method and confidence.",
          curriculum: [
            "How the BVMAC and CEMAC markets operate",
            "Read and analyse a listed security — equities, bonds, sukuk",
            "Build a portfolio adapted to your risk profile",
            "Understand local tax and regulatory framework",
            "Place your first orders with confidence",
          ],
          bonusTitle: "Included in the program",
          bonus: [
            {
              t: "Access to regulated brokers",
              d: "All investments go through licensed brokerage firms, supervised by the COSUMAF.",
            },
            {
              t: "Up to 5 % discount",
              d: "Learners who invest via Umdeny get up to 5 % off the acquisition price.",
            },
            {
              t: "Personal coaching",
              d: "For those who want step-by-step guidance, our team supports each investment decision.",
            },
          ],
          pricingTable: [
            {
              label: "Program only",
              crossPrice: "150 USD",
              price: "100 USD",
              suffix: " / month",
              xaf: "~ 60,000 XAF / month",
              xafCross: "90,000 XAF",
            },
            {
              label: "+ Personal coaching",
              price: "1,000 USD",
              suffix: " one-off",
              xaf: "~ 600,000 XAF",
            },
          ],
          paymentLabel: "Payments accepted",
          payment: ["Mobile Money", "Bank transfer", "Crypto"],
          cta: "Enrol in the program",
          cta2: "Book a scoping call",
        },
        {
          icon: "💹",
          tag: "Soon",
          title: "Trading Program",
          subtitle: "Master the financial markets",
          body: "Operate on Forex, equities and index markets with rigorous strategies and professional risk management. You'll learn to analyse markets, build a trading system suited to your profile, and develop the discipline that separates profitable traders from losing ones.",
          curriculum: [
            "Applied technical and fundamental analysis",
            "Building a personal trading plan",
            "Risk management: sizing, stops, drawdown",
            "Psychology and operational discipline",
            "Tools, platforms, regulated brokers",
          ],
          cta: "Join the waitlist",
          waitlist: true,
        },
        {
          icon: "💱",
          tag: "Soon",
          title: "P2P Program",
          subtitle: "Arbitrage & Virtual Assets",
          body: "Buy and resell digital assets with consistent margins, legally, securely, at scale — using the Mobile Money tools you already use. From stablecoin basics to B2B scaling, including security, compliance and sourcing strategies.",
          curriculum: [
            "Stablecoins, USDT and Mobile Money infrastructure",
            "Liquidity sourcing and margin structuring",
            "KYC compliance and security best practices",
            "Scaling B2C to B2B",
            "Accounting, tax and income reporting",
          ],
          cta: "Join the waitlist",
          waitlist: true,
        },
      ],
    },
    testimonials: {
      eyebrow: "Stories",
      h2: "They took the step.",
      h2Italic: "the step",
      lead: "Here's what those who trained with us say.",
      items: [
        {
          quote:
            "Before Vireel, I thought the stock market wasn't for us. The training gave me the tools — and the confidence — to place my first order. Six months later, I run a small diversified portfolio.",
          name: "Patricia M.",
          role: "HR Manager · Libreville",
          profile: "Employee",
        },
        {
          quote:
            "I spent two years trying to understand trading on my own. YouTube videos weren't enough. Vireel's training structured what I was already doing — and spared me the mistakes that would have wiped my capital.",
          name: "Thierry D.",
          role: "Entrepreneur · Yaoundé",
          profile: "Entrepreneur",
        },
        {
          quote:
            "What convinced me is that these are practitioners who actually manage portfolios. Not platform trainers. The difference shows from the first session.",
          name: "Marie-Claire B.",
          role: "Investor · Diaspora · Paris",
          profile: "Investor",
        },
        {
          quote:
            "I was already doing P2P — but without method or security. The training let me structure my activity, protect my capital, and triple my monthly volume.",
          name: "Joël K.",
          role: "P2P operator · Douala",
          profile: "Self-employed",
        },
      ],
    },
    quiz: {
      eyebrow: "Your wealth profile",
      h2: "You think you know yourself as an investor. Are you sure?",
      h2Italic: "Are you sure",
      lead: "Over the years, we've supported dozens of people on these markets. We've observed something striking: even among those who win, many end up losing everything. Not because of the market. Not because of a scam. Simply because they didn't know themselves.",
      points: [
        "What risk level fits your situation?",
        "What's your real investment horizon?",
        "How do you emotionally handle drawdowns?",
        "Which vehicles fit your profile today?",
      ],
      body: "This quiz asks the right questions: your situation, goals, risk tolerance, investment horizon. Answer honestly — not what you think the right answer is, but what reflects your reality today.",
      result:
        "At the end, you receive by email a free, complete analysis of your investor profile — vehicles fit for you, recommended programs, and concrete next steps.",
      cta: "Take the quiz",
      ctaSub: "5 minutes · free",
      tail: "To explore the full range of investment vehicles → umdeny.com",
      tailLink: "Visit the website",
    },
    footer: {
      tagline:
        "Let our experts guide you in understanding and navigating the various financial markets.",
      cols: [
        {
          title: "Programs",
          links: [
            {
              text: "Stocks · available",
              href: "#formations",
            },
            { text: "Trading · soon", href: "#formations" },
            { text: "P2P · soon", href: "#formations" },
          ],
        },
        {
          title: "Take action",
          links: [
            {
              text: "Our investment vehicles",
              href: "https://umdeny.com/nos-vehicules",
            },
            { text: "Umdeny Capital", href: "https://umdeny.com" },
          ],
        },
        {
          title: "Contact",
          links: [
            { text: "vireel@umdeny.com", href: "mailto:vireel@umdeny.com" },
            {
              text: "formation@umdeny.com",
              href: "mailto:formation@umdeny.com",
            },
          ],
        },
      ],
      legal: "© 2025 Vireel / Umdeny — All rights reserved",
      disclaimer:
        "Performance and examples cited are based on real cases and observed market data. They do not constitute a guarantee of results. All investments carry risk. Our programs are designed precisely to help you understand and manage that risk.",
    },
  },
};

export default CONTENT;
