
export type ProjectType = 'spatial' | 'digital';
// export type ProjectCategory = 'featured' | 'spatial-design' | 'digital-product';
// export type TopicTag = 'health-wellness' | 'social-care' | 'business-strategy' | 'user-experience' | 'cross-disciplinary' | 'work-life';

export const portfolioData = {
    personal: {
        name: "Ya-Chi Chuang",
        chineseName: "莊 雅 淇",
        title: "Frontend Developer & UX Design Engineer",
        email: "yachi98159@gmail.com",
        location: "Taiwan",
        pronouns: "{she/her}",
    },
    // ============================================================
    // Hero Section Data - 完整整合版
    // Left: 設計背景 / Right: 開發專業
    // ============================================================
    hero: {
        // 頂部狀態列
        header: {
            status: "Available for Collaboration",
            keywords: "Flutter Development, UX Design, Cross-platform Apps, Service Design",
            links: [
                // { text: "GitHub", url: "https://github.com/yourusername" },
                // { text: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
                // { text: "CV", url: "/cv.pdf" },
                // { text: "履歷", url: "/resume-zh.pdf" },
            ],
        },

        // 個人基本資訊
        identity: {
            pronouns: "she/her",
            nameEn: "Ya-Chi Chuang",
            nameZh: "莊雅淇",
            title: {
                primary: "Frontend Developer & UX Design Engineer",
                // secondary: "Frontend Developer & UX Design Engineer",
            },
        },

        // ============================================================
        // 左欄：設計背景 (白色/淺色背景)
        // ============================================================
        leftColumn: {
            // 設計方法論
            designApproach: {
                label: "DESIGN APPROACH",
                items: [
                    "User-Centered Design",
                    "Environmental Psychology",
                    "Spatial Narrative",
                    "Human-Nature Integration",
                    "Service Experience Design",
                    "Accessibility & Inclusive Design",
                    "Sustainable Design Thinking",
                ],
            },

            // 設計技能 - 整合詳細分類
            designSkills: {
                label: "DESIGN SKILLS",
                summary: "Figma, Adobe Creative Suite, 3D Modeling & Rendering, AutoCAD, SketchUp",
                categories: [
                    {
                        name: "UI/UX Design",
                        items: ["Figma", "Prototyping", "Wireframing", "User Flow"],
                    },
                    {
                        name: "Visual Design",
                        items: ["Photoshop", "Illustrator", "After Effects"],
                    },
                    {
                        name: "3D & Spatial",
                        items: ["SketchUp", "AutoCAD", "Lumion", "Enscape", "V-Ray"],
                    },
                ],
            },

            // 設計能力
            designCompetencies: {
                label: "DESIGN COMPETENCIES",
                items: [
                    // { zh: "空間敘事", en: "Spatial Narrative" },
                    { zh: "使用者研究", en: "User Research" },
                    { zh: "概念發展", en: "Concept Development" },
                    { zh: "資訊架構", en: "Information Architecture" },
                    { zh: "原型設計", en: "Prototyping" },
                    { zh: "設計思考", en: "Design Thinking" },
                ],
            },

            // 語言能力
            language: {
                label: "LANGUAGE",
                value: "Traditional Chinese, English",
            },

            // 國籍
            nationality: {
                label: "NATIONALITY",
                value: "Taiwan",
            },

            // 興趣
            hobby: {
                label: "HOBBY",
                value: "Hiking, Free Diving, Cooking, Reading, Photography, Travel",
            },
        },

        // ============================================================
        // 右欄：開發專業 (橘色/主題色背景)
        // ============================================================
        rightColumn: {
            // 中文名字
            nameZh: "莊雅淇",

            // 現職
            currentPosition: {
                label: "CURRENT POSITION",
                value: "Flutter Developer | Test Rite International Co., Ltd",
            },

            // 開發領域
            developmentAreas: {
                label: "DEVELOPMENT AREAS",
                items: [
                    "Mobile App Development",
                    "Cross-platform Architecture",
                    "State Management & Data Flow",
                    "E2E Testing & Quality Assurance",
                    "API Integration & Firebase",
                ],
            },

            // 開發技能 - 整合詳細分類
            developmentSkills: {
                label: "DEVELOPMENT SKILLS",
                summary: "Flutter & Dart, React & TypeScript, JavaScript / HTML / CSS, Redux State Management, MVP Architecture, Firebase Integration, E2E Testing (Maestro), Git Version Control",
                categories: [
                    {
                        name: "Languages",
                        items: ["Dart", "TypeScript", "JavaScript", "HTML/CSS"],
                    },
                    {
                        name: "Frameworks",
                        items: ["Flutter", "React", "Next.js"],
                    },
                    {
                        name: "State Management",
                        items: ["Redux", "Provider", "Riverpod"],
                    },
                    {
                        name: "Backend & Services",
                        items: ["Firebase", "REST APIs", "Crashlytics", "Analytics"],
                    },
                    {
                        name: "Testing & QA",
                        items: ["Maestro E2E", "Unit Testing", "Integration Testing"],
                    },
                    {
                        name: "Dev Tools",
                        items: ["Git", "VS Code", "Android Studio", "Xcode"],
                    },
                ],
            },

            // 開發成就數據
            developmentHighlights: {
                label: "DEVELOPMENT HIGHLIGHTS",
                items: [
                    { metric: "99.9%", label: "Crash-free Rate", description: "Production apps stability" },
                    { metric: "50+", label: "Reusable Components", description: "UI component library" },
                    { metric: "2+", label: "Years Experience", description: "Apps with 100K+ MAU" },
                ],
            },

            // 軟實力
            softSkills: {
                label: "SOFT SKILLS",
                items: [
                    { zh: "跨部門協作", en: "Cross-functional Collaboration" },
                    { zh: "專案管理", en: "Project Management" },
                    // { zh: "技術可行性評估", en: "Technical Feasibility Assessment" },
                ],
            },
        },

        chineseBio: {
            currentPosition: "Flutter Developer | Test Rite International Co., Ltd",
            designAreas: [],
            developmentAreas: [
                "Mobile App Development",
                "Cross-platform Architecture",
                "State Management & Data Flow",
                "E2E Testing & Quality Assurance",
                "API Integration & Firebase",
            ],
            skills: {
                development: [
                    "Flutter & Dart",
                    "React & TypeScript",
                    "JavaScript / HTML / CSS",
                    "Redux State Management",
                    "MVP Architecture",
                    "Firebase Integration",
                    "E2E Testing (Maestro)",
                    "Git Version Control",
                ],
                design: [
                    "Figma",
                    "Adobe Creative Suite",
                    "3D Modeling & Rendering",
                    "AutoCAD",
                    "SketchUp",
                ],
                soft: [
                    "Cross-functional Collaboration",
                    "Project Management",
                    "User Research",
                    "Design Thinking",
                    "Bilingual Communication (Chinese/English)",
                ],
            },
            language: "Traditional Chinese, English",
            nationality: "Taiwan",
            hobby: "Coding side projects, Spatial computing, Reading, Travel, Design exploration",
        },
        skillsSummary: {
            design: {
                category: { zh: '設計技能', en: 'Design Skills' },
                software: {
                    advanced: ['AutoCAD', 'Photoshop', 'Figma'],
                    proficient: ['SketchUp', 'Illustrator', 'Enscape'],
                    intermediate: ['V-Ray', 'Lumion']
                },
                competencies: [
                    { zh: '空間敘事', en: 'Spatial Narrative' },
                    { zh: '使用者研究', en: 'User Research' },
                    { zh: '概念發展', en: 'Concept Development' },
                    { zh: '資訊架構', en: 'Information Architecture' },
                    { zh: '原型設計', en: 'Prototyping' }
                ]
            },
            development: {
                category: { zh: '開發技能', en: 'Development Skills' },
                languages: ['Dart', 'JavaScript', 'TypeScript', 'HTML/CSS'],
                frameworks: ['Flutter', 'React', 'Next.js'],
                tools: ['Git', 'Firebase', 'Redux', 'Maestro']
            }
        },
    },
    about: {
        title: "About",
        en: [
            "I am a Frontend Developer and aspiring UX Design Engineer based in Taiwan. My work explores the intersection of spatial design, digital technology, and user experience, bridging the gap between design thinking and technical implementation.",
            "With a unique background spanning interior design and software development, I aim to transform complex information architectures into clear, intuitive designs while leveraging data-driven methodologies to create meaningful user experiences.",
        ],
        zh: "我是一位 Frontend Developer，同時致力於成為 UX Design Engineer，目前在台灣工作。我的工作探索空間設計、數位科技與使用者體驗的交會點，串連設計思維與技術實作之間的橋樑。\n\n憑藉橫跨室內設計與軟體開發的獨特背景，我致力於將複雜的資訊架構轉化為清晰、直覺的設計，並運用數據驅動的方法創造有意義的使用者體驗。",

    },
    experience: [
        {
            id: '1',
            date: '2022/12 – Present',
            title: 'Flutter Cross-platform Developer',
            organization: 'Test Rite International Co., Ltd',
            description: 'Leading digital transformation initiatives as primary Flutter developer, serving hundreds of thousands of monthly active users across e-commerce and community service applications.',
        },
        {
            id: '2',
            date: '2022/07 – 2022/11',
            title: 'Frontend Trainee',
            organization: 'AppWorks School',
            description: 'Completed intensive frontend engineering program with ~4% acceptance rate, building comprehensive development capabilities from zero foundation within 6 months.',
        },
        {
            id: '3',
            date: '2021/09 – 2022/05',
            title: 'Interior Designer & Project Manager',
            organization: '+AND Ateliers Narrative Design',
            description: 'Designed medical aesthetic clinics, reception centers, and residences. Developed strong project and time management skills through handling multiple concurrent projects, coordinating cross-functional teams, and delivering on tight schedules.',
        },
    ],
    education: [
        {
            id: 'e1',
            date: '2017 – 2021',
            title: 'Bachelor of Interior Design',
            organization: 'Chung Yuan Christian University 中原大學',
            details: 'GPA: 3.78 / 4.0',
        },
        {
            id: 'e2',
            date: '2014 – 2017',
            title: 'National Tainan Girls Senior High School',
            organization: '國立台南女子高級中學',
        },
    ],
    awards: [
        // {
        //     id: 'a1',
        //     date: '2021',
        //     title: '金點新秀設計獎 - 年度最佳設計獎 - 入圍',
        //     organization: '金點新秀設計獎',
        //     project: 'Graduation Project "Rain Hill" 雨坵',
        //     type: 'award'
        // },
        {
            id: 'a2',
            date: '2021',
            title: '金點新秀設計獎 - 年度最佳設計獎 - 入圍',
            // organization: '金點新秀設計獎',
            // project: 'Graduation Project "Rain Hill" 雨坵',
            type: 'award'
        },
        {
            id: 'a3',
            date: '2020',
            title: '華人金創獎 - 接待中心與樣品屋 - 銅獎',
            organization: '',
            // project: '接待中心與樣品屋',
            type: 'award'
        },
        {
            id: 'a4',
            date: '2020',
            title: 'TSID 台灣室內空間設計協會競圖 - 身心障礙福利服務中心 - 佳作',
            // organization: 'TSID 台灣室內空間設計協會',
            // project: '身心障礙福利服務中心',
            type: 'award'
        },
        // {
        //     id: 'a4',
        //     date: '2020',
        //     title: '室內設計（四）第四名',
        //     organization: 'Chung Yuan Christian University 中原大學',
        //     type: 'academic'
        // },
        // {
        //     id: 'a5',
        //     date: '2020',
        //     title: '創研空間設計 學期實習',
        //     organization: '創研空間設計',
        //     type: 'internship'
        // },
        // {
        //     id: 'a6',
        //     date: '2019',
        //     title: '書卷獎',
        //     organization: 'Chung Yuan Christian University 中原大學',
        //     type: 'academic'
        // },
        // {
        //     id: 'a7',
        //     date: '2019',
        //     title: '室內設計（三）第二名',
        //     organization: 'Chung Yuan Christian University 中原大學',
        //     type: 'academic'
        // },
        // {
        //     id: 'a8',
        //     date: '2019',
        //     title: '瑞嗎空間設計 暑期實習',
        //     organization: '瑞嗎空間設計',
        //     type: 'internship'
        // },
        {
            id: 'a5',
            date: '2018',
            title: '教育部青年發展署 - 大專生農村洄游 - 入圍',
            // organization: '教育部青年發展署',
            type: 'award'
        },
    ],
    skills: {
        development: [
            "Flutter & Dart",
            "React & TypeScript",
            "JavaScript / HTML / CSS",
            "Redux State Management",
            "MVP Architecture",
            "Firebase Integration",
            "E2E Testing (Maestro)",
            "Git Version Control",
        ],
        design: [
            "Figma",
            "Adobe Creative Suite",
            "3D Modeling & Rendering",
            "AutoCAD",
            "SketchUp",
        ],
        soft: [
            "Cross-functional Collaboration",
            "Project Management",
            "User Research",
            "Design Thinking",
            "Bilingual Communication (Chinese/English)",
        ],
    },
    research: [
        {
            id: "01",
            title: "Spatial Computing & Digital Integration",
            tags: "AR/VR, SPATIAL DESIGN, PHYSICAL-DIGITAL BRIDGE",
            description: "Exploring the intersection of physical spaces and digital overlays to create immersive environments that enhance human perception and interaction.",
        },
        {
            id: "02",
            title: "Human-Data Interaction",
            tags: "DATA VISUALIZATION, QUANTIFIED SELF, SERVICE SYSTEMS",
            description: "Designing mechanisms for making complex data meaningful and accessible, establishing trust and transparency in intelligent systems.",
        },
        {
            id: "03",
            title: "Service Innovation & Design",
            tags: "SYSTEM THINKING, STAKEHOLDER MAPPING, SOCIAL IMPACT",
            description: "Applying systematic design research methodologies to transform intuitive insights into scalable, data-driven service solutions.",
        },
    ],
    researchIntro: "I am a Frontend Developer and aspiring UX Design Engineer who specializes in bridging the gap between design thinking and technical implementation. My interests lie in exploring novel experiences and interactions between humans, spaces, and data.",

    designPhilosophy: {
        title: {
            zh: '從空間到數位，以人為本的設計旅程',
            en: 'From Space to Digital: A Human-Centered Design Journey'
        },
        statement: {
            zh: '我相信好的設計源於對人的深刻理解。從室內設計到數位產品，我持續探索如何透過設計改善人們的生活體驗。空間設計教會我觀察人與環境的互動，開發經驗讓我理解技術如何實現設計願景，而這兩者的結合，讓我能從使用者需求出發，創造兼具美感與功能的解決方案。',
            en: 'I believe great design stems from deep understanding of people. From interior design to digital products, I continuously explore how design can improve life experiences. Spatial design taught me to observe human-environment interactions, development experience helped me understand how technology realizes design visions, and combining both enables me to create solutions that balance aesthetics with functionality, starting from user needs.'
        },
        journeyStages: [
            {
                stage: 'exploration',
                title: { zh: '探索期', en: 'Exploration' },
                question: { zh: '空間如何影響人的行為？', en: 'How does space influence behavior?' },
                period: '2017-2019'
            },
            {
                stage: 'deepening',
                title: { zh: '深化期', en: 'Deepening' },
                question: { zh: '設計如何解決社會問題？', en: 'How can design solve social problems?' },
                period: '2019-2021'
            },
            {
                stage: 'transformation',
                title: { zh: '轉型期', en: 'Transformation' },
                question: { zh: '數位產品如何規模化影響力？', en: 'How can digital products scale impact?' },
                period: '2022-present'
            }
        ]
    },
    skillsSummary: {
        design: {
            category: { zh: '設計技能', en: 'Design Skills' },
            software: {
                advanced: ['AutoCAD', 'Photoshop', 'Figma'],
                proficient: ['SketchUp', 'Illustrator', 'Enscape'],
                intermediate: ['V-Ray', 'Lumion']
            },
            competencies: [
                { zh: '空間敘事', en: 'Spatial Narrative' },
                { zh: '使用者研究', en: 'User Research' },
                { zh: '概念發展', en: 'Concept Development' },
                { zh: '資訊架構', en: 'Information Architecture' },
                { zh: '原型設計', en: 'Prototyping' }
            ]
        },
        development: {
            category: { zh: '開發技能', en: 'Development Skills' },
            languages: ['Dart', 'JavaScript', 'TypeScript', 'HTML/CSS'],
            frameworks: ['Flutter', 'React', 'Next.js'],
            tools: ['Git', 'Firebase', 'Redux', 'Maestro']
        }
    },
    designTimeline: [
        { year: '2018', event: '大專生農村洄游 入圍', type: 'award' },
        { year: '2019', event: '瑞嗎空間設計 暑期實習', type: 'internship' },
        { year: '2019', event: '室內設計（三）第二名', type: 'academic' },
        { year: '2019', event: '書卷獎', type: 'academic' },
        { year: '2020', event: '室內設計（四）第四名', type: 'academic' },
        { year: '2020', event: '2020 TSID 學生競圖 佳作', type: 'award' },
        { year: '2020', event: '創研空間設計 學期實習', type: 'internship' },
        { year: '2020', event: '2020 華人金創獎 銅獎', type: 'award' },
        { year: '2021', event: '2021 金點新秀設計獎 入圍決選', type: 'award' },
        { year: '2021', event: '中原大學室內設計系 畢業', type: 'education' },
        { year: '2022', event: 'AppWorks School 結業', type: 'education' },
        { year: '2022', event: '特力集團 Flutter Developer', type: 'career' }
    ],
    projects: [
        
        // ----------------------------------------------------------
        // 01. GitHub Issue Tracker Mockup
        // ----------------------------------------------------------
        {
            id: 'github-mockup',
            order: 3,
            type: 'digital',
            categories: ['digital-product', 'web-development'],
            // featured: true, // 如果這是重點作品可以啟用
            
            title: "GitHub Issue Tracker Mockup",
            titleObj: {
                zh: 'GitHub Issue 復刻',
                en: 'GitHub Issue Tracker Mockup',
                subtitle: '前端網頁開發 Frontend Web Development'
            },
            
            tags: ['#React', '#TypeScript', '#GitHub API', '#Frontend'],
            topicTags: ['frontend-development', 'user-interface', 'api-integration'],
            tech: [
                'React', 
                'TypeScript', 
                'React Router v6', 
                'Tailwind CSS', 
                'Styled Components',
                'Supabase', 
                'Firebase',
                'Octokit',
                'Storybook',
                'Marked',
                'Textarea-Markdown-Editor'
            ],
            year: '2022',
            role: 'Frontend Developer',
            
            oneLiner: {
                zh: '完整復刻 GitHub Issue 管理系統，整合 OAuth 登入、API 串接與即時資料操作',
                en: 'Complete GitHub Issue management system replica with OAuth login, API integration and real-time data operations.'
            },
            
            // 把詳細功能寫在 description
            description: {
                zh: `從前端設計到產品開發的完整 GitHub Issue 頁面復刻專案。`,

                en: `Complete GitHub Issue page mockup from frontend design to product development.`
            },
            
            image: "https://user-images.githubusercontent.com/105163825/200102501-63189dba-7645-409b-935c-28227e861405.jpg",
            imagesObj: {
                // 頂部主要圖片
                hero: "https://user-images.githubusercontent.com/105163825/200102501-63189dba-7645-409b-935c-28227e861405.jpg",
                thumbnail: "https://user-images.githubusercontent.com/105163825/200102501-63189dba-7645-409b-935c-28227e861405.jpg",
                
                // Hero 區域兩張圖片（50.5% 和 48.5%）
                issueList: "https://user-images.githubusercontent.com/105163825/200102169-b094711f-7607-4e1f-a584-630f60ede7fd.PNG",
                issuePage: "https://user-images.githubusercontent.com/105163825/200125062-bf949f5d-90b3-4472-853d-bfaa9ae0c8b7.PNG",
                
                // Project Setting 圖片（83%寬度）
                projectSetting: "https://user-images.githubusercontent.com/105163825/200131264-9eca798f-f9d0-492e-9cd4-a35385997955.PNG",
                
                // Router Setting 圖片（83%寬度）
                routerSetting: "https://user-images.githubusercontent.com/105163825/200130979-d27135e2-e2a0-4bf5-b9de-814dca80e211.PNG",
                
                // Component Setting 兩張圖片
                componentSetting1: "https://user-images.githubusercontent.com/105163825/200130802-b9cfe934-2f2e-4bde-81de-1fc260e9f890.PNG",
                componentSetting2: "https://user-images.githubusercontent.com/105163825/200130841-ca19adee-8e61-4829-9f9e-b26e48c68d0c.PNG",
                
                // 保留原有欄位（用於其他用途）
                login: "/projects/github-mockup/login.jpg",
                labels: "/projects/github-mockup/labels.jpg",
                mobile: "/projects/github-mockup/mobile.jpg",
                
                // GIF 檔案（根據 README 順序）
                loginGif: "https://user-images.githubusercontent.com/105163825/200104305-258e7b36-3fc8-4605-bc0e-e6e88b9a4277.gif",
                labelGif: "https://user-images.githubusercontent.com/105163825/199945759-6bfdf2bb-3f95-4ea3-9235-cb73f285ebf5.gif",
                issueListGif: "https://user-images.githubusercontent.com/105163825/200101443-138a72a9-05a6-414c-896b-9f4667e25d1b.gif",
                newIssueGif: "https://user-images.githubusercontent.com/105163825/199945842-5a06046b-ba97-427e-8fb0-d851901f4a56.gif",
                issuePageGif: "https://user-images.githubusercontent.com/105163825/200101108-93b324c1-0425-4df3-b95f-163ee339ef0d.gif",
                // RWD Layout 三張 GIF（25%寬度）
                rwdGif1: "https://user-images.githubusercontent.com/105163825/200127855-3be36043-84b4-4012-a963-3eb847101743.gif",
                rwdGif2: "https://user-images.githubusercontent.com/105163825/200128139-244a50c3-55a4-425c-a328-45ced7840a11.gif",
                rwdGif3: "https://user-images.githubusercontent.com/105163825/200128846-b49164b7-f2f2-4f0c-8b61-310a1b81dae9.gif"
            },
            
            designValue: {
                forISS: {
                    zh: '從設計到產品的完整開發經驗，展現複雜狀態管理、API 整合與元件化架構能力',
                    en: 'Complete development experience from design to product, demonstrating complex state management, API integration and component architecture capabilities.'
                },
                skills: [
                    'Frontend Development',
                    'State Management', 
                    'API Integration',
                    'Component-Based Architecture',
                    'OAuth Implementation',
                    'Responsive Design'
                ]
            },
            
            // 核心功能
            features: {
                zh: [
                    'OAuth 登入整合與使用者認證',
                    '完整的 Issue 生命週期管理（建立/編輯/刪除）',
                    '留言系統與 Markdown 支援',
                    'Label 管理與色彩選擇器',
                    '多條件搜尋與篩選功能',
                    '協作者指派系統',
                    '分頁功能（超過 10 筆資料）',
                    '響應式網頁設計（RWD）'
                ],
                en: [
                    'OAuth login integration and user authentication',
                    'Complete Issue lifecycle management (create/edit/delete)',
                    'Comment system with Markdown support',
                    'Label management with color picker',
                    'Multi-criteria search and filtering',
                    'Collaborator assignment system',
                    'Pagination (over 10 records)',
                    'Responsive Web Design (RWD)'
                ]
            },
            
            // 技術亮點
            technicalHighlights: {
                zh: [
                    '使用 TypeScript 確保型別安全與程式碼品質',
                    '透過 Context API 與 useReducer 實作全域狀態管理',
                    '整合 GitHub API (Octokit) 進行 GET/POST/PATCH/DELETE 操作',
                    '使用 Supabase 處理 OAuth 認證流程',
                    '建立可重用元件庫並透過 Storybook 展示',
                    'React Router v6 實作巢狀路由與延遲載入',
                    '結合 Tailwind CSS 與 Styled Components 的混合樣式方案',
                    '支援 Markdown 語法與即時預覽',
                    '部署於 Firebase 並託管在 Firebase 伺服器'
                ],
                en: [
                    'TypeScript for type safety and code quality',
                    'Global state management with Context API and useReducer',
                    'GitHub API integration (Octokit) for GET/POST/PATCH/DELETE operations',
                    'Supabase for OAuth authentication flow',
                    'Reusable component library showcased in Storybook',
                    'Nested routes and lazy loading with React Router v6',
                    'Hybrid styling solution with Tailwind CSS and Styled Components',
                    'Markdown syntax support with live preview',
                    'Deployed and hosted on Firebase server'
                ]
            },
            
            // 架構設計
            architecture: {
                zh: [
                    '**專案結構 (Project Setting)**: API 檔案存放在 service 資料夾，Utils 檔案存放可重用函式（時間計算、隨機顏色），Context 檔案存放使用者註冊資料與登入狀態管理，Components 檔案存放可重用程式碼和 UI 元件（Header、Footer）',
                    '**路由設定 (Router Setting)**: 使用 React Router v6 提供宣告式、元件化的路由方式，處理 URL 參數、重定向和載入資料，支援延遲載入和 SEO 友善的伺服器端渲染。使用巢狀路由和 Outlet 允許路由包含其他子路由',
                    '**元件設定 (Component Setting)**: 建立可重用程式碼和 UI 元件供未來使用，並展示於 Storybook。元件包括 Header、Footer、Dropdown List、Button 和 Input Search'
                ],
                en: [
                    '**Project Setting**: API files store in service document, Utils files store reusable function like calculate time and calculate random color, Context files store user registration data and login state management, Components files store reusable code and UI components like header, footer',
                    '**Router Setting**: Used React Router v6 that provides a declarative, component-based approach to routing and handles the common tasks of dealing with URL params, redirects, and loading data and provides one of the most intuitive APIs available and enables lazy loading and SEO-friendly server-side rendering. Using nested routes and Outlet allows us to have a route that contains other child routes',
                    '**Component Setting**: Built reusable code and UI components for future use and displayed on Storybook. Components like header, footer, dropdown list, button, and input search'
                ]
            },
            
            // 頁面功能詳述
            pageDetails: {
                zh: {
                    login: '**登入頁面 (Login Page)**: 登入後可選擇 Repository，使用者名稱與專案名稱會顯示在 URL 上',
                    labels: '**標籤頁面 (Label Page)**: 建立/編輯/刪除標籤，可選擇隨機色彩或從色彩選擇器選擇',
                    issueList: '**Issue 列表頁面 (IssueList Page)**: 多條件篩選與搜尋、下拉選單關鍵字搜尋、清除所有搜尋參數、無結果頁面、當 Issues 超過 10 筆時支援分頁功能',
                    newIssue: '**新增 Issue 頁面 (NewIssue Page)**: 建立新 Issue、指派協作者或指派自己、從側邊欄新增或刪除標籤、支援 Markdown 語法的文字編輯器',
                    issuePage: '**Issue 詳情頁面 (IssuePage)**: 建立/編輯/刪除留言、根據擁有者或協作者身份顯示不同顏色的留言框',
                    rwd: '**響應式設計 (RWD Layout)**: 支援響應式網頁設計，自動適應不同螢幕尺寸和視窗大小'
                },
                en: {
                    login: '**Login Page**: After login, user can choose a repository and show issues. Selected repository and user name will show on http url',
                    labels: '**Label Page**: User can create / edit / delete a label. User can choose random color or select color from colorboard',
                    issueList: '**IssueList Page**: User can filter and search issues. User can click dropdown list to multiple search. User can clear all search params. All dropdown list support keywords search. If there is 0 records to display that will show no result page. Supported pagination when issues are created over than 10 records',
                    newIssue: '**NewIssue Page**: User can create a new issue. User can assign collaborator or assign yourself. User can add or delete a label from sidebar. Supported Markdown in textarea with Marked and Textarea-Markdown-Editor',
                    issuePage: '**IssuePage**: User can create / edit / delete a comment. The comment box will show different color according to owner or collaborator',
                    rwd: '**RWD Layout**: Supported Responsive Web Design to adjust for different screen sizes and viewports automatically'
                }
            },
            
            // 未來功能
            futureFeatures: {
                zh: [
                    '新增時間軸記錄使用者在 Issue 頁面的操作事件',
                    'Issue 列表頁面可以選擇頁碼功能'
                ],
                en: [
                    'Add timeline to record user event on issue page',
                    'Can select page on issue list page'
                ]
            },
            
            // 連結
            github: 'https://github.com/yarchiee/Personal_Project',
            liveDemo: '', // 如果有線上 Demo 可以填入
            
            // 專案結構說明
            projectStructure: {
                description: {
                    zh: '清晰的資料夾結構與關注點分離',
                    en: 'Clear folder structure with separation of concerns'
                },
                folders: {
                    service: 'API calls and data fetching logic',
                    utils: 'Reusable utility functions',
                    context: 'Global state management',
                    components: 'Reusable UI components'
                }
            }
        },
        // ----------------------------------------------------------
        // 02. TR Plus (New Digital Project)
        // ----------------------------------------------------------
        {
            id: 'tr-plus',
            order: 2,
            type: 'digital',
            categories: ['digital-product'],
            // featured: true,

            title: "TR Plus E-commerce App",
            titleObj: {
                zh: '家居電商 App',
                en: 'Home E-commerce App',
                subtitle: '應用程式開發 App Development'
            },

            tags: ['#Flutter', '#E-commerce', '#App Development'],
            topicTags: ['business-strategy', 'user-experience'],
            tech: ['Flutter', 'Dart', 'Google Analytics', 'Firebase'],
            year: '2023-Present',
            role: 'Flutter Developer',

            oneLiner: {
                zh: '服務數十萬月活躍用戶的家居電商 App，優化購物體驗與效能',
                en: 'E-commerce App serving hundreds of thousands of MAU, optimizing shopping experience and performance.'
            },

            // description: "The flagship e-commerce mobile application for Test Rite Retail, serving massive user traffic with optimized shopping flows.",

            image: "/projects/tr-plus/hero.jpg", // Placeholder
            imagesObj: {
                hero: "/projects/tr-plus/hero.jpg",
                thumbnail: "/projects/tr-plus/thumbnail.jpg",
                // Project Structure 圖片（專案結構圖）
                projectStructure: "/projects/tr-plus/project-structure.jpg",
                // Component Setting 圖片（widgets 展示圖 - 第一張圖片）
                componentSetting1: "/projects/tr-plus/component-setting1.jpg",
                componentSetting2: "/projects/tr-plus/component-setting2.jpg",
                // Demo 影片
                demo1: "/projects/tr-plus/demo1.mp4",
                demo102: "/projects/tr-plus/demo102.mp4",
                demo2: "/projects/tr-plus/demo2.mp4",
                demo3: "/projects/tr-plus/demo3.mp4",
                demo4: "/projects/tr-plus/demo4.mp4"
            },

            designValue: {
                forISS: {
                    zh: '在高流量產品中進行效能優化與使用者體驗迭代，展現數據驅動的設計決策能力',
                    en: 'Performance optimization and UX iteration in high-traffic products, demonstrating data-driven design decision making.'
                },
                skills: ['Performance Optimization', 'User Behavior Analysis', 'Large-scale App Maintenance']
            }
        },
        // ----------------------------------------------------------
        // 03. 104 工作快找改版 - UX 研究與設計提案
        // ----------------------------------------------------------
        {
            id: '104-redesign',
            order: 1,
            type: 'digital',
            categories: ['digital-product'],
            // featured: true,

            title: "104 Job Search Redesign",
            titleObj: {
                zh: '104 工作快找改版',
                en: '104 Job Search App Redesign',
                subtitle: '使用者研究與設計提案 UX Research & Design Proposal'
            },

            tags: ['#UX研究', '#介面優化', '#求職體驗', '#APP改版'],
            topicTags: ['user-experience', 'social-care', 'work-life'],

            role: 'UX Researcher & Designer',
            year: '2023',
            duration: '2 months',

            oneLiner: {
                zh: '針對 104 求職 App 進行易用性測試與介面優化，提升求職效率與滿意度',
                en: 'Usability testing and interface optimization for 104 Job Search App to improve efficiency and satisfaction'
            },

            concept: {
                problem: {
                    zh: '使用者在手機端尋找工作時，常因資訊架構混亂與篩選邏輯不直覺，導致求職效率低落且容易產生焦慮感。',
                    en: 'Users often face low efficiency and anxiety when searching for jobs on mobile due to chaotic information architecture and unintuitive filtering logic.'
                },
                solution: {
                    zh: '透過使用者訪談與易用性測試找出痛點，重新規劃資訊架構與篩選流程，並優化關鍵頁面的視覺呈現。',
                    en: 'Identified pain points through user interviews and usability testing, restructured information architecture and filtering process, and optimized visual presentation of key pages.'
                }
            },

            researchProcess: [
                {
                    method: { zh: '使用者訪談', en: 'User Interviews' },
                    description: {
                        zh: '訪談 5 位近期有求職需求的使用者，了解其行為模式與痛點',
                        en: 'Interviewed 5 users with recent job search needs to understand behavior patterns and pain points'
                    }
                },
                {
                    method: { zh: '易用性測試', en: 'Usability Testing' },
                    description: {
                        zh: '針對現有 App 進行任務導向測試，觀察操作障礙',
                        en: 'Conducted task-oriented testing on existing App to observe operational hurdles'
                    }
                },
                {
                    method: { zh: '啟發式評估', en: 'Heuristic Evaluation' },
                    description: {
                        zh: '以 Nielsen\'s 10 Heuristics 評估現有介面問題',
                        en: 'Evaluated existing interface issues using Nielsen\'s 10 Heuristics'
                    }
                }
            ],

            designFocus: [
                {
                    area: { zh: '資訊架構重整', en: 'Information Architecture Restructure' },
                    description: {
                        zh: '簡化分類層級、優化搜尋篩選邏輯',
                        en: 'Simplified category hierarchy, optimized search and filter logic'
                    }
                },
                {
                    area: { zh: '求職進度視覺化', en: 'Job Search Progress Visualization' },
                    description: {
                        zh: '清楚呈現每個職缺的申請狀態與時程',
                        en: 'Clear presentation of application status and timeline for each position'
                    }
                },
                {
                    area: { zh: '情感化設計', en: 'Emotional Design' },
                    description: {
                        zh: '在關鍵節點加入鼓勵性文案與互動',
                        en: 'Added encouraging copy and interactions at key touchpoints'
                    }
                }
            ],

            expectedOutcomes: [
                { zh: '降低求職過程的認知負擔', en: 'Reduce cognitive load in job search process' },
                { zh: '提升使用者對求職進度的掌控感', en: 'Increase users\' sense of control over job search progress' },
                { zh: '改善整體求職體驗滿意度', en: 'Improve overall job search experience satisfaction' }
            ],

            skills: ['User Research', 'Competitive Analysis', 'Information Architecture', 'Wireframing', 'Figma', 'Prototyping'],

            designValue: {
                forISS: {
                    zh: '展現 UX 研究能力與對社會議題的關注，能夠從使用者需求出發進行設計決策',
                    en: 'Demonstrates UX research capabilities and attention to social issues, ability to make design decisions starting from user needs'
                },
                skills: ['UX Research', 'Design Thinking', 'Information Architecture', 'Emotional Design']
            },

            imagesObj: {
                hero: '/projects/104-redesign/hero.jpg',
                thumbnail: '/projects/104-redesign/thumbnail.jpg',
                research: [
                    '/projects/104-redesign/competitive-analysis.jpg',
                    '/projects/104-redesign/user-journey.jpg',
                    '/projects/104-redesign/pain-points.jpg'
                ],
                wireframes: [
                    '/projects/104-redesign/wireframe-home.jpg',
                    '/projects/104-redesign/wireframe-search.jpg',
                    '/projects/104-redesign/wireframe-tracking.jpg'
                ],
                mockups: [
                    '/projects/104-redesign/mockup-home.jpg',
                    '/projects/104-redesign/mockup-detail.jpg',
                    '/projects/104-redesign/mockup-progress.jpg'
                ]
            }
        },
        // ----------------------------------------------------------
        // 04. 雨坵 Rain Hill - 畢業設計 (金點新秀入圍)
        // ----------------------------------------------------------
        {
            id: 'rain-hill',
            order: 4,
            type: 'spatial',
            categories: ['spatial-design'],
            // featured: true,
            // featuredOrder: 1,

            // 基本資訊
            title: {
                zh: '雨坵',
                en: 'Rain Hill - Relax on rainy days',
                subtitle: '旅館體驗設計 Hotel Experience Design'
            },
            titleObj: {
                zh: '雨坵',
                en: 'Rain Hill - Relax on rainy days',
                subtitle: '旅館體驗設計 Hotel Experience Design'
            },

            // 標籤
            tags: ['#畢業設計', '#雨', '#失眠', '#白噪音', '#旅館', '#旭丘指揮所', '#自然隱喻轉譯', '#體驗敘事設計', '#感官設計思維', '#社會關懷導向'],
            topicTags: ['health-wellness', 'user-experience', 'cross-disciplinary'],
            awards: ['2021 金點新秀設計獎 入圍決選'],

            // 專案資訊
            location: '基隆市中正區 旭丘指揮所',
            team: ['莊雅淇', '黃淑瑜'],
            instructor: '沈冠廷 老師',
            year: '2020-2021',
            duration: '1 年',

            // 一句話描述
            oneLiner: {
                zh: '將基隆終年多雨的特性轉化為療癒睡眠的設計優勢',
                en: 'Transforming Keelung\'s year-round rainfall into a wellness sleep design advantage'
            },

            // 設計理念
            concept: {
                problem: {
                    zh: '隨著都市人口不斷增加，公共場域持續縮小，現代人的生活壓力和疏離孤獨感也在增加，影響著人們的睡眠品質與健康狀況。在台灣每五人就有一人有著睡眠問題，每年的安眠藥使用量正逐年持續上升中。',
                    en: 'As urban populations grow and public spaces shrink, modern life brings increasing stress and isolation, affecting sleep quality and health. In Taiwan, one in five people suffer from sleep disorders, with sedative usage rising annually.'
                },
                insight: {
                    zh: '雨天總是影響著大多人的精神狀態，讓人容易嗜睡或睡的深沉。原因包含了雨天的濕度變化、類白噪音的遮蔽效應、負離子含量增加等等，皆會影響人體運作，使人產生精神鬆弛等狀態。',
                    en: 'Rainy weather naturally induces relaxation and deep sleep through humidity changes, white noise masking effects, and increased negative ions—all affecting human physiology to create mental relaxation.'
                },
                solution: {
                    zh: '將雨著串連，我們希望利用「雨天的環境氛圍」提升睡眠品質。對於精神過於緊繃的人群，能藉由環境改善身心狀況。試圖將雨的功能性反饋在旅宿中，同時將終年有雨轉為當地優勢，讓人期待下雨天的旭丘。',
                    en: 'We aim to leverage the "rainy day atmosphere" to improve sleep quality. For those with mental tension, environmental design can improve wellbeing. We transform the site\'s year-round rainfall from challenge to advantage.'
                }
            },

            // 設計策略
            designStrategy: {
                siteAnalysis: {
                    zh: '基地位於旭丘山上的制高點，周圍都被樹林圍繞，因原為軍事管制區，隱密幽靜的特性適合作為餐旅空間使用。',
                    en: 'Located at the hilltop of Xuqiu, surrounded by forest. The former military restricted area\'s secluded nature makes it ideal for hospitality.'
                },
                spatialConcept: {
                    zh: '在一座小山丘上坐落一間旅店，生長於雨水與樹林之中。試圖藉由雨個外部環境營造出一個既擁有開闊視野，同時具有隱私性的空間給予裸身的房客。',
                    en: 'A hotel nestled on a small hill, growing among rain and forest. Creating spaces with both open views and privacy through the external rain environment.'
                },
                naturalElements: [
                    {
                        element: { zh: '光管', en: 'Light Tubes' },
                        description: {
                            zh: '將光管穿插於地上水池與澡池天花中，同時傾斜各個光管角度。基地位於整座山的制高點，光線隨著時間罩落有明顯東西軸線的光影變化。',
                            en: 'Light tubes inserted between ground pools and bath ceilings at varying angles, creating dramatic east-west light shifts throughout the day.'
                        }
                    },
                    {
                        element: { zh: '通風管', en: 'Ventilation' },
                        description: {
                            zh: '孔洞的設計同時成為澡堂的通風口，自然的通風。',
                            en: 'Perforations serve as natural ventilation for the bathhouse.'
                        }
                    },
                    {
                        element: { zh: '儲水系統', en: 'Water Storage' },
                        description: {
                            zh: '終年的雨水灌溉著整個旭丘與花園，雨水落入地表中庭所挖的孔洞，有的沿著澡堂弧形牆面滑落於儲水槽中，有的則成為了澡堂的冷水泡腳池。',
                            en: 'Year-round rainfall irrigates the site; rainwater flows through courtyards into storage tanks or forms cold-water foot baths.'
                        }
                    }
                ]
            },

            // 空間體驗設計
            experienceDesign: {
                sensoryJourney: {
                    zh: '嘗試將大廳和公共澡堂置於地底下，封閉式的視野，人們的感官敏感度和空間感受開始轉變。地下化能夠更容易的控制雨的聲響和光線的穿透，當雨聲置於長條型通道中，能感受到距離感，而雨聲置於拱形的空間時，由於聲波的傳遞，人們的距離感將被模糊化。',
                    en: 'The main hall and public baths are placed underground, transforming sensory perception. Underground spaces allow precise control of rain sounds and light penetration. Linear corridors create distance awareness, while arched spaces blur distance perception through sound wave propagation.'
                },
                keyExperiences: [
                    { zh: '入口的漸進式光線變化', en: 'Progressive light transitions at entry' },
                    { zh: '地下空間的感官轉換', en: 'Sensory transformation in underground spaces' },
                    { zh: '雨聲的空間聲學設計', en: 'Spatial acoustics design for rain sounds' }
                ]
            },

            // 技術技能
            skills: ['SketchUp', 'Lumion', 'Enscape', 'Photoshop', 'AutoCAD'],

            // 設計價值（對應 ISS）
            designValue: {
                forISS: {
                    zh: '展現完整的設計思考流程：從社會議題研究、自然現象洞察、到空間體驗設計的系統性方法',
                    en: 'Demonstrates complete design thinking process: from social issue research, natural phenomenon insights, to systematic spatial experience design'
                },
                skills: ['User Research', 'Experience Design', 'Systems Thinking', 'Concept Development']
            },

            // 圖片資源
            image: '/projects/rain-hill/hero.jpg',
            imagesObj: {
                hero: '/projects/rain-hill/hero.jpg',
                thumbnail: '/projects/rain-hill/thumbnail.jpg',
                plans: ['/projects/rain-hill/plan-1f.jpg', '/projects/rain-hill/plan-2f.jpg', '/projects/rain-hill/plan-b1.jpg'],
                sections: ['/projects/rain-hill/section-1.jpg', '/projects/rain-hill/section-2.jpg'],
                renders: [
                    '/projects/rain-hill/render-entrance.jpg',
                    '/projects/rain-hill/render-bath.jpg',
                    '/projects/rain-hill/render-pool.jpg',
                    '/projects/rain-hill/render-room.jpg',
                    '/projects/rain-hill/render-exterior.jpg'
                ],
                diagrams: ['/projects/rain-hill/diagram-concept.jpg', '/projects/rain-hill/diagram-natural.jpg'],
                process: ['/projects/rain-hill/process-research.jpg', '/projects/rain-hill/process-iteration.jpg']
            }
        },

        // ----------------------------------------------------------
        // 04. 一葉輕舟 - 接待中心與樣品屋 (華人金創獎 銅獎)
        // ----------------------------------------------------------
        {
            id: 'leaf-boat',
            order: 5,
            type: 'spatial',
            categories: ['spatial-design'],
            // featured: false,

            title: {
                zh: '一葉輕舟',
                en: 'Leaf Boat',
                subtitle: '接待中心與樣品屋  Reception Center & Model House'
            },
            titleObj: {
                zh: '一葉輕舟',
                en: 'Leaf Boat',
                subtitle: '接待中心與樣品屋  Reception Center & Model House'
            },

            tags: ['#接待中心', '#樣品屋', '#臨時建物', '#淡水河岸', '#體驗敘事設計', '#概念視覺化能力'],
            topicTags: ['business-strategy', 'user-experience'],
            awards: ['2020 華人金創獎 銅獎'],

            location: '新北市淡水區 河岸廣場',
            team: ['莊雅淇', '陳欣敏'],
            instructor: '何俊宏 老師',
            year: '2019-2020',
            duration: '1 學期',

            oneLiner: {
                zh: '打破傳統接待中心封閉嚴肅的印象，創造與在地文化連結的開放空間',
                en: 'Breaking the closed and serious impression of traditional reception centers, creating open spaces connected with local culture'
            },

            concept: {
                vision: {
                    zh: '「猶如淡水河上層疊起伏的輕舟，與觀音山相望，與淡水河成映。」',
                    en: '"Like layered boats rising on the Tamsui River, gazing at Guanyin Mountain, reflected in the waters."'
                },
                problem: {
                    zh: '對於接待中心與樣品屋，我們希望弱化銷售等商業氣息，讓顧客從被動的接收資訊轉換為自行接受訊息。以往的接待中心封閉、嚴肅，讓人不敢接近。',
                    en: 'We aimed to soften the commercial sales atmosphere of reception centers, transforming visitors from passive receivers to active explorers. Traditional centers feel closed and intimidating.'
                },
                solution: {
                    zh: '打造與民眾自然連結的場域，讓民眾自然而然地進入。希望透過自然與人文兩個面向與接待中心連結，將淡水河的風、海浪、帆帶進空間中，讓此接待中心不只擁有一片美麗景致，也富含了人文的氣息。',
                    en: 'Create spaces that naturally connect with the public. Integrate nature and culture—bringing Tamsui River\'s wind, waves, and sails into the architecture, offering both beautiful scenery and cultural richness.'
                }
            },

            designStrategy: {
                spatialConcept: {
                    zh: '早期的淡水河是台灣重要的運河，也是貿易集散中心。通透輕盈的材質、揚起的屋頂與海浪般的玻璃帷幕，形成「帆」的既視感。接待中心就像是淡水河上的一葉輕舟，與觀音山對望，與淡水河成映。',
                    en: 'Early Tamsui River was Taiwan\'s vital canal and trade hub. Transparent materials, uplifted roofs, and wave-like glass curtains create the visual impression of "sails." The center resembles a boat on the river.'
                },
                materials: ['沖孔版 Perforated panels', '混凝土 Concrete', '大理石 Marble', '漸層玻璃 Gradient glass'],
                userFlow: {
                    customers: {
                        zh: '大部分的顧客動線由停車場進入，沿著階梯可以看見由建築物框出的觀音山，藉此引導顧客進入接待區。',
                        en: 'Most visitors enter from parking, guided by stairs framing views of Guanyin Mountain toward the reception area.'
                    },
                    tourists: {
                        zh: '大部分的遊客由接待中心前方進入，先被半戶外投影區吸引，接著可以在我們所規劃的階梯與廊道間漫遊，一邊感受自然環境，也一邊瀏覽沿途的建案。',
                        en: 'Tourists enter from the front, drawn by outdoor projection areas, then wander through planned stairs and corridors, experiencing nature while viewing property information.'
                    }
                }
            },

            skills: ['SketchUp', 'V-Ray', 'Lumion', 'Photoshop', 'AutoCAD'],

            designValue: {
                forISS: {
                    zh: '展現對商業空間的使用者分析能力，理解不同使用者族群的需求差異',
                    en: 'Demonstrates user analysis capabilities for commercial spaces, understanding different user group needs'
                },
                skills: ['User Flow Design', 'Commercial Strategy', 'Cultural Integration']
            },

            image: '/projects/leaf-boat/hero.jpg',
            imagesObj: {
                hero: '/projects/leaf-boat/hero.jpg',
                thumbnail: '/projects/leaf-boat/thumbnail.jpg',
                plans: ['/projects/leaf-boat/plan-1f.jpg', '/projects/leaf-boat/plan-2f.jpg'],
                elevations: ['/projects/leaf-boat/elevation-south.jpg', '/projects/leaf-boat/elevation-north.jpg'],
                renders: [
                    '/projects/leaf-boat/render-exterior.jpg',
                    '/projects/leaf-boat/render-lobby.jpg',
                    '/projects/leaf-boat/render-tea.jpg',
                    '/projects/leaf-boat/render-corridor.jpg',
                    '/projects/leaf-boat/render-vip.jpg'
                ],
                diagrams: ['/projects/leaf-boat/diagram-concept.jpg', '/projects/leaf-boat/diagram-flow.jpg']
            }
        },

        // ----------------------------------------------------------
        // 05. 層層・破繭 - 身心障礙福利服務中心 (TSID 佳作)
        // ----------------------------------------------------------
        {
            id: 'breaking-cocoon',
            order: 6,
            type: 'spatial',
            categories: ['spatial-design'],
            // featured: false,

            title: {
                zh: '層層・破繭',
                en: 'Breaking Cocoon',
                subtitle: '身心障礙福利服務中心 Disability Welfare Service Center'
            },
            titleObj: {
                zh: '層層・破繭',
                en: 'Breaking Cocoon',
                subtitle: '身心障礙福利服務中心 Disability Welfare Service Center'
            },

            tags: ['#輔具中心', '#身心障礙', '#無障礙設計', '#服務空間', '#自然隱喻轉譯', '#社會關懷導向'],
            topicTags: ['social-care', 'user-experience'],
            awards: ['2020 TSID 學生競圖 佳作'],

            location: '台中身心障礙福利服務中心',
            team: ['莊雅淇', '邱宜庭'],
            instructor: '吳金鳳 老師',
            year: '2019-2020',
            duration: '1 學期',

            oneLiner: {
                zh: '以「繭」為意象，打造讓身障者重生蛻變的輔具服務空間',
                en: 'Using "cocoon" as imagery, creating an assistive device service space for rebirth and transformation'
            },

            concept: {
                metaphor: {
                    zh: '輔具中心是一個可以提供身障者租借輔具及諮詢身障等相關問題的地方，身障者也透過輔具得以重新生活。這個過程就好像是蠶寶寶要變成飛蛾，需要先化成繭，才能達成蛻變，而輔具中心就好像是繭一樣，是一個讓人重生的地方。',
                    en: 'The assistive device center helps people with disabilities rent equipment and consult on related issues. Like a cocoon transforming a caterpillar into a moth, this center is a place of rebirth and transformation.'
                },
                goal: {
                    zh: '我們除了在造型美感上讓使用者有破繭重生的感受，最重要的是，希望透過空間的規劃，讓身障者可以真正找尋到適合自己的輔具，而真正蛻變成一隻美麗的蝴蝶。',
                    en: 'Beyond creating a cocoon-like aesthetic, we prioritize spatial planning that helps users find suitable assistive devices, enabling their transformation into beautiful butterflies.'
                }
            },

            designStrategy: {
                spatialConcept: {
                    zh: '利用鐵絲網包覆的曲面造型，象徵繭的意象，同時創造出流動、開放的空間感。讓使用者在空間中自然流動，逐步探索各類輔具。',
                    en: 'Wire mesh curved surfaces symbolize the cocoon, creating fluid, open spaces where users naturally flow through, gradually exploring various assistive devices.'
                },
                inclusiveDesign: {
                    zh: '空間設計考量輪椅使用者的動線、視線高度、轉彎半徑等需求，同時設置坡道、無障礙廁所、觸覺引導等無障礙設施。',
                    en: 'Spatial design considers wheelchair users\' circulation paths, eye-level heights, turning radii, with ramps, accessible restrooms, and tactile guidance.'
                },
                programZoning: [
                    '櫃台', '輪椅展示區', '聽力展示區', '聽力評估區', '儲藏室',
                    '居家生活輔具區', '技能訓練輔具區', '休閒輔具區', '溝通資訊輔具區',
                    '個人照顧與保護輔具區', '情境體驗區', '親社小鋪', '天使藝廊',
                    '諮詢室', '辦公室', '會議室', '按摩中心', '廁所'
                ],
                materials: ['鐵絲網', '混凝土', '磁磚', '木紋磚', '霧面玻璃', '透明玻璃']
            },

            skills: ['SketchUp', 'V-Ray', 'Photoshop', 'AutoCAD', 'Illustrator'],

            designValue: {
                forISS: {
                    zh: '展現對社會議題的關注與共融設計能力，理解特殊需求使用者的空間體驗',
                    en: 'Demonstrates attention to social issues and inclusive design capabilities, understanding spatial experience for users with special needs'
                },
                skills: ['Inclusive Design', 'Service Space Design', 'Social Design']
            },

            image: '/projects/breaking-cocoon/hero.jpg',
            imagesObj: {
                hero: '/projects/breaking-cocoon/hero.jpg',
                thumbnail: '/projects/breaking-cocoon/thumbnail.jpg',
                plan: '/projects/breaking-cocoon/plan.jpg',
                sections: ['/projects/breaking-cocoon/section-aa.jpg', '/projects/breaking-cocoon/section-bb.jpg'],
                renders: [
                    '/projects/breaking-cocoon/render-entrance.jpg',
                    '/projects/breaking-cocoon/render-display.jpg',
                    '/projects/breaking-cocoon/render-training.jpg',
                    '/projects/breaking-cocoon/render-lobby.jpg',
                    '/projects/breaking-cocoon/render-gallery.jpg'
                ]
            }
        },

        // ----------------------------------------------------------
        // 06. 與夢的距離 - 共同工作空間
        // ----------------------------------------------------------
        {
            id: 'dream-distance',
            order: 7,
            type: 'spatial',
            categories: ['spatial-design'],
            // featured: false,

            title: {
                zh: '與夢的距離',
                en: 'Distance to Dreams',
                subtitle: '共同工作空間 Co-working Space'
            },
            titleObj: {
                zh: '與夢的距離',
                en: 'Distance to Dreams',
                subtitle: '共同工作空間 Co-working Space'
            },

            tags: ['#共同工作空間', '#創業', '#紙飛機', '#概念視覺化能力'],
            topicTags: ['work-life', 'business-strategy'],

            location: '中原大學 知行領航館 產業大樓 2-3 樓',
            team: ['莊雅淇', '黃淑瑜'],
            instructor: '吳燦中 老師',
            year: '2019',
            duration: '1 學期',

            oneLiner: {
                zh: '以紙飛機為意象，打造承載創業夢想的輕盈工作空間',
                en: 'Using paper airplane imagery to create a light workspace carrying entrepreneurial dreams'
            },

            concept: {
                vision: {
                    zh: '「是否曾經有過把夢想寫進紙飛機裡，隨著風飛得越高越遠，夢想就會實現。」',
                    en: '"Have you ever written your dreams on a paper airplane, believing that as it flies higher and farther with the wind, your dreams will come true?"'
                },
                analysis: {
                    zh: '人們來到共同工作空間有四個目的，分別是：工作、人際關係、被投資、夢想的發源地。而在這四個目的中，我們認為實踐夢想是共同工作空間最吸引人的地方。',
                    en: 'People come to co-working spaces for four reasons: work, relationships, investment opportunities, and dream origins. We believe realizing dreams is the most attractive aspect.'
                },
                targetUsers: ['小型企業', '遠程工作者', '在家就業者', 'YouTuber', '圖文創作家', '設計師']
            },

            designStrategy: {
                spatialConcept: {
                    zh: '紙飛機在童年時的記憶便是由白紙所摺成，他飄浮在空中帶給人一種輕盈的感覺。我們將漂浮這件事情利用這個設計來呈現，同時也將層板下緣向內縮，使視覺上呈現薄片狀。',
                    en: 'Paper airplanes evoke childhood memories of folded white paper floating lightly in air. We express this floating quality through design, tapering shelf edges inward for a thin, light appearance.'
                },
                formGeneration: {
                    zh: '紙飛機是一種摺紙造型，透過摺紙這個動作，將一張2D的白紙變成3D的量體，我們將摺痕所造成的曲折幾何造型放進空間。',
                    en: 'Paper airplanes transform 2D paper into 3D forms through folding. We bring these angular geometric shapes into the space.'
                },
                materials: {
                    zh: '使用白色刷漆、金屬、玻璃，整體以輕量化為主，再加上木紋增添溫度。',
                    en: 'White paint, metal, glass for lightness, with wood grain adding warmth.'
                },
                programZoning: {
                    floor2: ['櫃台', '工作區', '冥想區', '樓梯', '電話亭', '演講廳', '自助休息區', '影印區'],
                    floor3: ['個人工作區', '置物區', '影印區', '圖書休息區', '多人討論桌', '會議室', '電話亭']
                }
            },

            skills: ['SketchUp', 'V-Ray', 'Photoshop', 'AutoCAD'],

            designValue: {
                forISS: {
                    zh: '展現對工作空間設計的理解，分析使用者需求並轉化為空間設計',
                    en: 'Demonstrates understanding of workspace design, analyzing user needs and translating to spatial design'
                },
                skills: ['Workspace Design', 'User Analysis', 'Concept Visualization']
            },

            image: '/projects/dream-distance/hero.jpg',
            imagesObj: {
                hero: '/projects/dream-distance/hero.jpg',
                thumbnail: '/projects/dream-distance/thumbnail.jpg',
                plans: ['/projects/dream-distance/plan-2f.jpg', '/projects/dream-distance/plan-3f.jpg'],
                renders: [
                    '/projects/dream-distance/render-meditation.jpg',
                    '/projects/dream-distance/render-lounge.jpg',
                    '/projects/dream-distance/render-library.jpg',
                    '/projects/dream-distance/render-stair.jpg',
                    '/projects/dream-distance/render-office.jpg'
                ],
                diagrams: ['/projects/dream-distance/diagram-concept.jpg']
            }
        },

        // ----------------------------------------------------------
        // 07. 模糊邊界 - 藤本壯介室內設計辦公室
        // ----------------------------------------------------------
        {
            id: 'blurred-boundary',
            order: 8,
            type: 'spatial',
            categories: ['spatial-design'],
            // featured: false,

            title: {
                zh: '模糊邊界',
                en: 'Blurred Boundary',
                subtitle: '藤本壯介室內設計辦公室 Sou Fujimoto Design Office'
            },
            titleObj: {
                zh: '模糊邊界',
                en: 'Blurred Boundary',
                subtitle: '藤本壯介室內設計辦公室 Sou Fujimoto Design Office'
            },

            tags: ['#藤本壯介', '#設計事務所', '#辦公空間', '#自然與都市', '#自然隱喻轉譯', '#感官設計思維'],
            topicTags: ['work-life'],

            location: '台北市內湖區科學園區 鴻海大樓 8-9F',
            team: ['莊雅淇', '彭奕瑄'],
            instructor: '陽鵠少 老師',
            year: '2019',
            duration: '1 學期',

            oneLiner: {
                zh: '以藤本壯介「城市如森林」的哲學，設計融合自然與都市的辦公空間',
                en: 'Designing an office space that merges nature and city based on Sou Fujimoto\'s "city is like a forest" philosophy'
            },

            concept: {
                designerStudy: {
                    zh: '設計之初，我們先探討藤本壯介的生長背景。藤本壯介出生於天然資源豐富的北海道，在北海道無處不是一片雪白覆蓋著森林，雖然東京的環境與北海道天差地遠，但到東京念書的他很快地發現都市與自然的相似之處。',
                    en: 'We began by studying Sou Fujimoto\'s background. Born in resource-rich Hokkaido with its snow-covered forests, he later discovered surprising similarities between urban Tokyo and natural landscapes.'
                },
                philosophy: {
                    zh: '「城市就像一片森林，那裏有光，有場域。」北海道讓人聯想到森林、樹、枝、葉，而東京是都市、建築、電線桿與單車，森林就像都市，樹就像建築，枝葉就像電線桿與單車。',
                    en: '"The city is like a forest—there is light, there is place." Hokkaido evokes forests, trees, branches, leaves; Tokyo evokes cities, buildings, utility poles, bicycles.'
                }
            },

            designStrategy: {
                conceptMapping: {
                    city: '森林 Forest',
                    building: '樹 Tree',
                    floors: '樹層 Tree Layers'
                },
                spatialPlanning: {
                    zh: '透過樹木的俯視圖發展空間規劃，枝葉間的陰影與疏密形成隔間與開口，依基地形狀調整比例，依機能形成隔間與開口。',
                    en: 'Spatial planning developed from tree plan views. Shadow and density between branches form partitions and openings.'
                },
                ceilingDesign: {
                    zh: '在天花的設計上，我們利用薄膜天花設計，想營造樹葉間光點灑落的感覺，再配合機能去規劃與調整。',
                    en: 'Membrane ceiling design creates the effect of light filtering through leaves.'
                },
                programZoning: {
                    floor8: ['櫃台', '接待區', '初步會議區', '茶水區', '動畫設計', '討論區', '平面設計', '燈光設計', '影印區', '會議室', '資材室', '秘書', '施工圖部'],
                    floor9: ['CEO辦公室', '多功能會議區', '行政部門', '工務部', '圖書區', 'CFO辦公室', 'COO辦公室', '建築設計', '創意設計部門', '景觀設計', '模型室', '檔案室']
                }
            },

            skills: ['SketchUp', 'V-Ray', 'Enscape', 'Photoshop', 'AutoCAD'],

            designValue: {
                forISS: {
                    zh: '展現設計師研究與哲學轉譯能力，將抽象概念轉化為具體空間設計',
                    en: 'Demonstrates designer research and philosophy translation, converting abstract concepts into concrete spatial design'
                },
                skills: ['Design Research', 'Concept Translation', 'Office Space Design']
            },

            image: '/projects/blurred-boundary/hero.jpg',
            imagesObj: {
                hero: '/projects/blurred-boundary/hero.jpg',
                thumbnail: '/projects/blurred-boundary/thumbnail.jpg',
                plans: ['/projects/blurred-boundary/plan-8f.jpg', '/projects/blurred-boundary/plan-9f.jpg'],
                elevations: ['/projects/blurred-boundary/elevation-short.jpg', '/projects/blurred-boundary/elevation-long.jpg'],
                renders: [
                    '/projects/blurred-boundary/render-reception.jpg',
                    '/projects/blurred-boundary/render-material.jpg',
                    '/projects/blurred-boundary/render-workspace.jpg'
                ],
                diagrams: ['/projects/blurred-boundary/diagram-concept.jpg', '/projects/blurred-boundary/diagram-planning.jpg']
            }
        },

        // ----------------------------------------------------------
        // 08. 食物色彩學 - 選修課程專題
        // ----------------------------------------------------------
        {
            id: 'food-color',
            order: 9,
            type: 'spatial',
            categories: ['spatial-design'],
            // featured: false,

            title: {
                zh: '食物色彩學',
                en: 'Food Color Studies',
                subtitle: '大娛樂家 The Greatest Showman'
            },
            titleObj: {
                zh: '食物色彩學',
                en: 'Food Color Studies',
                subtitle: '大娛樂家 The Greatest Showman'
            },

            tags: ['#選修課', '#色彩學', '#陳設', '#食物造型'],
            topicTags: [],

            team: ['莊雅淇', '歐鳳里', '彭奕瑄', '楊恩琦', '羅子淮', '陳冠瑋'],
            year: '2019',
            duration: '1 學期',

            oneLiner: {
                zh: '將電影《大娛樂家》的視覺元素轉化為食物色彩與陳設設計',
                en: 'Transforming visual elements from "The Greatest Showman" into food color and display design'
            },

            concept: {
                approach: {
                    zh: '在設計課之餘，我也積極學習系上各種選修課，也盡全力做每一次的作業，除了培養了我對於色彩與陳設的敏銳度，也打開了我對照明設計的視野，更培養了我與小組合作與溝通的能力。',
                    en: 'Beyond studio courses, I actively pursued electives, approaching each assignment with full effort. This cultivated my sensitivity to color and display, opened perspectives on lighting design, and developed teamwork skills.'
                },
                project: {
                    zh: '分析電影大娛樂家裡的元素轉化成食物色彩與陳設。其電影氛圍金碧輝煌，且主題緊扣著馬戲團，吊鋼索、跳火圈等高低起伏的動作在電影裡多次呈現，角色服裝皆豔華麗，將這些元素轉化為我們食物的陳設與色彩。',
                    en: 'We analyzed The Greatest Showman\'s elements—its golden atmosphere, circus theme with trapeze and fire rings, and elaborate costumes—transforming them into food display design and color schemes.'
                }
            },

            skills: ['Photography', 'Food Styling', 'Color Theory', 'Team Collaboration'],

            designValue: {
                forISS: {
                    zh: '展現跨媒材的設計轉譯能力與團隊協作能力',
                    en: 'Demonstrates cross-media design translation and team collaboration abilities'
                },
                skills: ['Color Theory', 'Visual Design', 'Team Collaboration']
            },

            image: '/projects/food-color/hero.jpg',
            imagesObj: {
                hero: '/projects/food-color/hero.jpg',
                thumbnail: '/projects/food-color/thumbnail.jpg',
                gallery: [
                    '/projects/food-color/photo-1.jpg',
                    '/projects/food-color/photo-2.jpg',
                    '/projects/food-color/photo-3.jpg',
                    '/projects/food-color/team.jpg'
                ]
            }
        }
    ],
    careerGoals: {
        shortTerm: "Become a UX Design Engineer integrating spatial and digital domains, serving as a bridge between design and engineering teams.",
        longTerm: "Join a forward-thinking product design team in a design strategy role, creating impact in interactive experiences including smart home systems, AR guided tours, and immersive retail experiences.",
        issAlignment: "ISS's interdisciplinary environment and four-module design structure align with my need to deepen design methodology and strengthen systematic architectural thinking.",
    },
    targetProgram: {
        institute: "Institute of Service Science, National Tsing Hua University",
        strengthModule: "Information Systems (IS)",
        developmentModule: "Service Innovation & Design (SID)",
        targetCourses: [
            "Service-Oriented Architecture (SOA)",
            "Computational Statistics for Business Analytics",
            "Design for Behavior Change (DBC)",
            "Human-Computer Interaction (HCI)",
            "Service Design",
        ],
    },

    coreCompetencies: [
        {
            title: "Design Thinking & User Empathy",
            description: "Cultivated through interior design training, extended from physical space to digital interfaces. Ability to quickly understand user frustrations and propose intuitive improvements.",
        },
        {
            title: "Rapid Learning & Cross-Domain Adaptability",
            description: "Demonstrated by mastering frontend technologies from scratch within 6 months at AppWorks School, and becoming independent Flutter developer within 3 months at Test Rite.",
        },
        {
            title: "Cross-Functional Communication & Collaboration",
            description: "Experience translating between design and engineering languages, coordinating multiple stakeholders from different professional backgrounds.",
        },
    ],
    footer: {
        social: [
            { name: "GitHub", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "Email", url: "mailto:yachi98159@gmail.com" },
        ],
    },
};

// Helper Functions
export const getFeaturedProjects = () => {
    return portfolioData.projects.filter(p => p.categories?.includes('featured'));
};

// export const getProjectsByCategory = (category: ProjectCategory) => {
//     return portfolioData.projects.filter(p => p.categories?.includes(category));
// };

// export const getProjectsByTopic = (topic: TopicTag) => {
//     return portfolioData.projects.filter(p => p.topicTags?.includes(topic));
// };

export const getProjectsForCards = () => {
    return portfolioData.projects.map(p => ({
        id: p.id,
        title: typeof p.title === 'string' ? p.title : p.titleObj?.zh || '',
        subtitle: typeof p.title === 'object' ? p.title.subtitle : p.titleObj?.subtitle || '',
        image: p.image || p.imagesObj?.hero,
        tags: p.tags,
        year: p.year,
        categories: p.categories,
        topicTags: p.topicTags
    }));
};
