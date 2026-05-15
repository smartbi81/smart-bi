export const t = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      process: 'How It Works',
      demo: 'AI Demo',
      why: 'Why Smart BI',
      cases: 'Case Studies',
      contact: 'Contact',
      cta: "Let's Talk",
    },
    hero: {
      badge: 'Smart BI — The Intelligence Layer for Your Data',
      line1: 'Not dashboards.',
      line2: 'Insights.',
      titles: ['Insights.', 'Decisions.', 'Conclusions.'],
      subtitle:
        'SMART BI scans your data 24/7 using Agents that understand what\'s happening in your business — surfacing issues, root causes, and recommended actions.\n\nTraditional BI stops at reports. Users have to actively go in, investigate, and figure out on their own that something went wrong.\n\nOur agents do that automatically, like an analyst working for you around the clock.',
      primary: 'Schedule a Call',
      secondary: 'See Live Demo',
    },
    stats: [
      { value: '10+', label: 'Years of Experience' },
      { value: '100%', label: 'End-to-End Ownership' },
      { value: '2', label: 'Cloud Platforms' },
      { value: '∞', label: 'Tech Stacks Supported' },
    ],
    services: {
      tag: 'What We Do',
      title: 'Everything your data needs,',
      titleHighlight: 'under one roof',
      subtitle:
        "We don't hand off a deliverable and disappear. We guide you from confusion to clarity — end to end.",
      items: [
        {
          icon: '📊',
          title: 'BI Dashboards & Reports',
          desc: 'From raw tables to boardroom-ready dashboards. Interactive Power BI reports with DAX, Tabular Cube, and M-language that update in real time.',
          tags: ['Power BI', 'DAX & M', 'Tabular Cube', 'DWH'],
        },
        {
          icon: '🔁',
          title: 'Data Pipelines & Architecture',
          desc: 'We design and automate your entire data flow — ingestion, transformation, storage — using ADF, SSIS, Airflow, and Spark.',
          tags: ['ADF', 'SSIS', 'Airflow', 'Spark'],
        },
        {
          icon: '🤖',
          title: 'AI Agents & Chat Analytics',
          desc: 'Your team asks questions in plain language and gets real answers from your own data. No SQL needed. Business intelligence that talks back.',
          tags: ['LLM', 'RAG', 'Chatbots', 'N8N'],
        },
        {
          icon: '☁️',
          title: 'Cloud Data Strategy',
          desc: "No data strategy yet? We'll build one. Cloud-agnostic architecture planning that scales — Microsoft Azure, AWS, or hybrid.",
          tags: ['Azure', 'AWS', 'Architecture'],
        },
        {
          icon: '🔍',
          title: 'Data Audit & Quick Wins',
          desc: "Don't know where to start? We map what you have, identify the gaps, and deliver fast wins — so you see value within the first sprint.",
          tags: ['Consulting', 'Assessment', 'Roadmap'],
        },
        {
          icon: '🏗️',
          title: 'End-to-End Implementation',
          desc: "From strategy to go-live. We own the entire journey — design, build, test, train, and hand over. You get a system your team actually uses.",
          tags: ['Full Project', 'Training', 'Support'],
        },
      ],
    },
    process: {
      tag: 'How It Works',
      title: 'From',
      titleHighlight: 'lost in data',
      titleEnd: 'to leading with it',
      subtitle:
        'A proven 4-step process that takes you from scattered spreadsheets to a living, breathing data culture.',
      steps: [
        {
          number: '01',
          title: 'Discover',
          desc: "We sit with your team, understand your business, and map every data source you have — even the ones you forgot about. No assumptions.",
        },
        {
          number: '02',
          title: 'Architect',
          desc: 'We design the right stack for your scale and budget — cloud provider, data model, pipeline strategy. Technology-agnostic, business-first.',
        },
        {
          number: '03',
          title: 'Build',
          desc: 'Pipelines, transformations, dashboards, AI agents — all built, tested, and documented. You see progress every sprint, not just at the end.',
        },
        {
          number: '04',
          title: 'Deliver & Enable',
          desc: "We hand over a live system your team understands and uses daily. Training included. We don't leave until you're on the other side of the river.",
        },
      ],
    },
    stack: {
      tag: 'Tech Stack',
      title: 'The right tool for',
      titleHighlight: 'every challenge',
      subtitle:
        'Technology-agnostic by design. We pick the best stack for your needs — not the most familiar one.',
      groups: [
        {
          category: 'Visualization & BI',
          color: 'from-yellow-400/20 to-orange-400/10 border-yellow-400/20',
          accent: 'text-yellow-300',
          tools: [
            { name: 'Power BI', icon: '📊' },
            { name: 'DAX & M-language', icon: '📐' },
            { name: 'Tabular Cube', icon: '🧊' },
            { name: 'DWH Design', icon: '🗄️' },
          ],
        },
        {
          category: 'Microsoft Data Platform',
          color: 'from-cyan-400/20 to-blue-400/10 border-cyan-400/20',
          accent: 'text-cyan-300',
          tools: [
            { name: 'Azure Fabric', icon: '🏭' },
            { name: 'Azure Data Factory', icon: '🔄' },
            { name: 'Azure SQL', icon: '💾' },
            { name: 'SSIS', icon: '📦' },
          ],
        },
        {
          category: 'AWS & Cloud',
          color: 'from-orange-400/20 to-amber-400/10 border-orange-400/20',
          accent: 'text-orange-300',
          tools: [
            { name: 'S3', icon: '🪣' },
            { name: 'RDS', icon: '🗃️' },
            { name: 'Lambda', icon: 'λ' },
            { name: 'IAM', icon: '🔐' },
          ],
        },
        {
          category: 'Data Engineering',
          color: 'from-green-400/20 to-emerald-400/10 border-green-400/20',
          accent: 'text-green-300',
          tools: [
            { name: 'Python', icon: '🐍' },
            { name: 'Apache Airflow', icon: '💨' },
            { name: 'Apache Spark', icon: '⚡' },
            { name: 'Trino / Kafka', icon: '🔗' },
          ],
        },
        {
          category: 'AI & Automation',
          color: 'from-violet-400/20 to-purple-400/10 border-violet-400/20',
          accent: 'text-violet-300',
          tools: [
            { name: 'N8N', icon: '🔗' },
            { name: 'LLM / RAG', icon: '🧠' },
            { name: 'AI Agents', icon: '🤖' },
            { name: 'GitHub', icon: '🐙' },
          ],
        },
      ],
    },
    contact: {
      tag: 'Get In Touch',
      title: 'Ready to cross',
      titleHighlight: 'the river?',
      subtitle:
        "Tell me about your data challenge. I'll respond within 24 hours with a clear path forward.",
      fields: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@company.com',
        company: 'Company',
        companyPlaceholder: 'Company name (optional)',
        message: "What's your data challenge?",
        messagePlaceholder:
          'Tell me about your current situation — what data do you have, what decisions are you struggling to make?',
        submit: 'Send Message →',
      },
      success: {
        title: 'Message received!',
        subtitle: "I'll be in touch within 24 hours.",
      },
    },
    footer: 'SMART BI — Data Intelligence & AI Solutions',
  },

  he: {
    nav: {
      home: 'בית',
      services: 'שירותים',
      process: 'איך זה עובד',
      demo: 'דמו AI',
      why: 'הבידול שלנו',
      cases: 'תרחישים',
      contact: 'צור קשר',
      cta: 'דברו איתי',
    },
    hero: {
      badge: 'Smart BI — שכבת האינטליגנציה של הדאטה שלכם',
      line1: 'לא דשבורדים.',
      line2: 'תובנות.',
      titles: ['תובנות.', 'החלטות.', 'מסקנות.'],
      subtitle:
        'SMART BI סורק את המידע שלכם 24/7 באמצעות Agents שיודעים להבין מה מתרחש בפעילות העסקית, מציפים בעיות, ואת הסיבות שבגללן נגרמו.\n\nכבר לא צריך להיכנס לדוחות ולעקוב אחרי דברים חריגים.\n\nהסוכנים שלנו עושים את זה אוטומטית, כמו אנליסט שעובד עבורכם כל הזמן.',
      primary: 'קבעו שיחה',
      secondary: 'ראו דמו חי',
    },
    stats: [
      { value: '10+', label: 'שנות ניסיון' },
      { value: '100%', label: 'בעלות מקצה לקצה' },
      { value: '2', label: 'פלטפורמות ענן' },
      { value: '∞', label: 'סטאקים טכנולוגיים' },
    ],
    services: {
      tag: 'מה אנחנו עושים',
      title: 'כל מה שהנתונים שלך צריכים,',
      titleHighlight: 'תחת קורת גג אחת',
      subtitle: 'לא מספקים פרויקט ונעלמים. מלווים אתכם מבלבול לבהירות — מקצה לקצה.',
      items: [
        {
          icon: '📊',
          title: 'דשבורדים ודוחות BI',
          desc: 'מטבלאות גולמיות לדשבורדים מוכנים לדירקטוריון. דוחות Power BI אינטרקטיביים עם DAX, Tabular Cube ו-M-language שמתעדכנים בזמן אמת.',
          tags: ['Power BI', 'DAX & M', 'Tabular Cube', 'DWH'],
        },
        {
          icon: '🔁',
          title: 'צינורות נתונים וארכיטקטורה',
          desc: 'אנחנו מתכננים ומאטמטים את כל זרימת הנתונים — איסוף, טרנספורמציה, אחסון — באמצעות ADF, SSIS, Airflow ו-Spark.',
          tags: ['ADF', 'SSIS', 'Airflow', 'Spark'],
        },
        {
          icon: '🤖',
          title: 'סוכני AI וצ\'אט אנליטיקס',
          desc: 'הצוות שלכם שואל שאלות בשפה רגילה ומקבל תשובות אמיתיות מהנתונים שלכם. בלי SQL. BI שמדבר בחזרה.',
          tags: ['LLM', 'RAG', 'צ\'אטבוטים', 'N8N'],
        },
        {
          icon: '☁️',
          title: 'אסטרטגיית דאטה בענן',
          desc: 'אין לכם אסטרטגיית דאטה עדיין? נבנה אחת. תכנון ארכיטקטורה אגנוסטי שמתרחב עם העסק — Azure, AWS, או היברידי.',
          tags: ['Azure', 'AWS', 'ארכיטקטורה'],
        },
        {
          icon: '🔍',
          title: 'אבחון נתונים וניצחונות מהירים',
          desc: 'לא יודעים מאיפה להתחיל? ממפים מה יש לכם, מזהים פערים ומספקים ניצחונות מהירים — כדי שתראו ערך כבר בספרינט הראשון.',
          tags: ['ייעוץ', 'אבחון', 'רואדמאפ'],
        },
        {
          icon: '🏗️',
          title: 'יישום מקצה לקצה',
          desc: 'מאסטרטגיה ועד go-live. אנחנו אחראים על כל המסע — עיצוב, בנייה, בדיקה, הדרכה ומסירה. מערכת שהצוות שלכם באמת משתמש בה.',
          tags: ['פרויקט מלא', 'הדרכה', 'תמיכה'],
        },
      ],
    },
    process: {
      tag: 'איך זה עובד',
      title: 'מ',
      titleHighlight: 'אבוד בנתונים',
      titleEnd: 'להוביל איתם',
      subtitle: 'תהליך מוכח של 4 שלבים שלוקח אתכם מגיליונות אקסל מפוזרים לתרבות דאטה חיה ונושמת.',
      steps: [
        {
          number: '01',
          title: 'גילוי',
          desc: 'יושבים עם הצוות שלכם, מבינים את העסק וממפים כל מקור נתונים — גם אלה ששכחתם מהם. ללא הנחות מוקדמות.',
        },
        {
          number: '02',
          title: 'ארכיטקטורה',
          desc: 'מתכננים את הסטאק הנכון לסקייל ולתקציב שלכם — ספק ענן, מודל נתונים, אסטרטגיית צינורות. טכנולוגיה-אגנוסטי, עסק-ראשון.',
        },
        {
          number: '03',
          title: 'בנייה',
          desc: 'צינורות, טרנספורמציות, דשבורדים, סוכני AI — הכל בנוי, נבדק ומתועד. רואים התקדמות כל ספרינט, לא רק בסוף.',
        },
        {
          number: '04',
          title: 'מסירה ואפשור',
          desc: 'מוסרים מערכת חיה שהצוות שלכם מבין ומשתמש בה יומיומית. כולל הדרכה. לא עוזבים עד שאתם בצד השני של הנהר.',
        },
      ],
    },
    stack: {
      tag: 'טכנולוגיות',
      title: 'הכלי הנכון לכל',
      titleHighlight: 'אתגר',
      subtitle: 'אגנוסטי לטכנולוגיה מתוך עיקרון. בוחרים את הסטאק הטוב ביותר לצרכים שלכם — לא הכי מוכר לנו.',
      groups: [
        {
          category: 'ויזואליזציה ו-BI',
          color: 'from-yellow-400/20 to-orange-400/10 border-yellow-400/20',
          accent: 'text-yellow-300',
          tools: [
            { name: 'Power BI', icon: '📊' },
            { name: 'DAX & M-language', icon: '📐' },
            { name: 'Tabular Cube', icon: '🧊' },
            { name: 'עיצוב DWH', icon: '🗄️' },
          ],
        },
        {
          category: 'פלטפורמת Microsoft',
          color: 'from-cyan-400/20 to-blue-400/10 border-cyan-400/20',
          accent: 'text-cyan-300',
          tools: [
            { name: 'Azure Fabric', icon: '🏭' },
            { name: 'Azure Data Factory', icon: '🔄' },
            { name: 'Azure SQL', icon: '💾' },
            { name: 'SSIS', icon: '📦' },
          ],
        },
        {
          category: 'AWS וענן',
          color: 'from-orange-400/20 to-amber-400/10 border-orange-400/20',
          accent: 'text-orange-300',
          tools: [
            { name: 'S3', icon: '🪣' },
            { name: 'RDS', icon: '🗃️' },
            { name: 'Lambda', icon: 'λ' },
            { name: 'IAM', icon: '🔐' },
          ],
        },
        {
          category: 'הנדסת נתונים',
          color: 'from-green-400/20 to-emerald-400/10 border-green-400/20',
          accent: 'text-green-300',
          tools: [
            { name: 'Python', icon: '🐍' },
            { name: 'Apache Airflow', icon: '💨' },
            { name: 'Apache Spark', icon: '⚡' },
            { name: 'Trino / Kafka', icon: '🔗' },
          ],
        },
        {
          category: 'AI ואוטומציה',
          color: 'from-violet-400/20 to-purple-400/10 border-violet-400/20',
          accent: 'text-violet-300',
          tools: [
            { name: 'N8N', icon: '🔗' },
            { name: 'LLM / RAG', icon: '🧠' },
            { name: 'סוכני AI', icon: '🤖' },
            { name: 'GitHub', icon: '🐙' },
          ],
        },
      ],
    },
    contact: {
      tag: 'צור קשר',
      title: 'מוכנים לחצות',
      titleHighlight: 'את הנהר?',
      subtitle: 'ספרו לי על אתגר הנתונים שלכם. אחזור תוך 24 שעות עם דרך קדימה ברורה.',
      fields: {
        name: 'שם',
        namePlaceholder: 'השם שלך',
        email: 'אימייל',
        emailPlaceholder: 'you@company.com',
        company: 'חברה',
        companyPlaceholder: 'שם החברה (אופציונלי)',
        message: 'מה אתגר הנתונים שלכם?',
        messagePlaceholder: 'ספרו לי על המצב הנוכחי — איזה נתונים יש לכם, ואילו החלטות קשה לכם לקבל?',
        submit: 'שלח הודעה ←',
      },
      success: {
        title: 'ההודעה התקבלה!',
        subtitle: 'אחזור אליכם תוך 24 שעות.',
      },
    },
    footer: 'SMART BI — מודיעין עסקי ופתרונות AI',
  },
} as const;

export type Lang = keyof typeof t;
