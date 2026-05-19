// Curated base database of top-tier, highly realistic, and breathtaking prompts
const CURATED_PROMPTS = [
    {
        category: "Art & Design",
        title: "Ethereal Glassmorphism Crystal Portrait",
        text: "A breathtaking close-up portrait of a celestial figure, constructed entirely from translucent glassmorphic crystal plates, refracting iridescent neon lights, soft bioluminescent glow, ultra detailed macro photography, shot on 85mm lens, unreal engine 5 render, cinematic lighting --ar 16:9 --v 6.0"
    },
    {
        category: "Art & Design",
        title: "Cyberpunk Rain-Slicked Tokyo Alleyway",
        text: "Cinematic photorealistic view of a narrow Tokyo alleyway at night, neon lights in magenta, cyan, and deep purple reflecting on rain puddles, steam rising from metal grates, cozy glowing noodle shop in background, rain droplets suspended in mid-air, 8k resolution, anamorphic lens --v 6.0"
    },
    {
        category: "Art & Design",
        title: "Ancient Solitary Hollow-Oak Library",
        text: "A colossal, ancient gothic library hidden inside a giant hollow oak tree, sunbeams piercing through stained glass windows illuminating floating dust motes, towering bookshelves overflowing with ancient grimoires, cozy velvet armchairs, mystical fog rolling on floor, octane render --v 6.0"
    },
    {
        category: "Art & Design",
        title: "Retro-Futuristic Desert Oasis Caravan",
        text: "Vibrant synthwave 80s aesthetics desert landscape, sleek chrome solar-powered RV parked near a glowing blue mineral pool, holographic palm trees, giant pink sun setting on the horizon, stars starting to sparkle, pastel gradient sky, hyper-detailed vector art illustration"
    },
    {
        category: "Art & Design",
        title: "Surreal Levitating Island Sanctuary",
        text: "A pristine tropical island floating in a violet sky, cascading waterfalls spilling over the edges into endless clouds, white sand beaches lined with glowing coral, majestic ancient temple at the peak, flock of crystal birds soaring around, ethereal dreamscape --v 6.0"
    },
    {
        category: "Art & Design",
        title: "Chibi Steampunk Clockwork Dragon",
        text: "Cute tiny chibi mechanical dragon crafted from polished brass, copper gears, and glowing turquoise sapphire eyes, steam puffing from its nostrils, sitting on a pile of antique gold pocketwatches, soft studio lighting, high depth of field, 3D claymation style render"
    },
    {
        category: "Art & Design",
        title: "Bioluminescent Abyssal Coral Reef",
        text: "Unbelievably detailed underwater macro capture of a deep sea coral reef glowing with bioluminescent neon blues, greens, and corals, exotic transparent jellyfish drifting by, photorealistic textures, dark velvet background, volumetric lighting, national geographic --ar 4:3"
    },
    {
        category: "Art & Design",
        title: "Astronaut Gardening on Mars Dome",
        text: "Wide angle shot of a massive futuristic glass dome on Mars, an astronaut wearing a high-tech white spacesuit watering bright red roses and lush green vegetables, red martian sands visible outside the glass, earth shining as a tiny blue dot in the sky, photorealistic"
    },
    {
        category: "Art & Design",
        title: "Minimalist Isometric Zen Garden Oasis",
        text: "Perfect isometric render of a minimalist zen garden, raked white sand patterns, single black smooth river stone with a cherry blossom branch resting on it, tiny bamboo water fountain trickling into a small pond with a single golden koi fish, clean vector aesthetic"
    },
    {
        category: "Art & Design",
        title: "Golden Hour Nordic Fjord Cabin",
        text: "Cinematic landscape of a small wooden black cabin on the edge of a deep blue fjord in Norway, dramatic snow-capped peak mountains rising sharply behind, golden hour sun casting warm long shadows, reflection of mountains on glassy water, 8k resolution, raw photo"
    },
    {
        category: "Art & Design",
        title: "Psychedelic Cosmic Nebula Cat",
        text: "A majestic cat silhouette floating in deep space, its fur composed of swirling galaxies, stardust, and vibrant cosmic gas in deep purples, oranges, and pinks, bright glowing nebulae eyes staring into eternity, trippy fantasy digital art --style raw"
    },
    {
        category: "Art & Design",
        title: "Gothic Steampunk Automaton Watchmaker",
        text: "An antique workshop filled with ancient brass gears and grandfather clocks, a gothic female cyborg with porcelain skin and visible golden clockwork joints carefully assembling a mechanical butterfly, dramatic chiaroscuro side lighting --v 6.0"
    },
    {
        category: "Art & Design",
        title: "Luxury Glassmorphic Smartphone UI Concept",
        text: "Studio product shot of a sleek futuristic glass smartphone lying on a dark textured granite surface, glowing neon cyan and magenta glassmorphic user interface elements floating 3D above the screen, elegant light reflections, extremely high fidelity render"
    },
    {
        category: "Art & Design",
        title: "Vintage Sumi-e Samurai Duel",
        text: "A dramatic confrontation between two samurai in a bamboo forest, styled in traditional Japanese Sumi-e ink wash painting, high contrast black ink strokes, splash art, single crimson blood drop falling, motion blur, artistic masterpiece"
    },
    {
        category: "Art & Design",
        title: "Lost Sun Temple of the Amazon",
        text: "A massive overgrown Aztec temple made of golden stones, towering deep in the green Amazon jungle, giant golden sun disk glowing in the temple's apex, ray of sun casting a powerful yellow light beam straight down, volumetric fog, Indiana Jones vibe"
    },
    {
        category: "Coding",
        title: "Senior Python Code Optimizer Node",
        text: "Act as a Senior Python Architect. Analyze the following target code for time complexity (Big O), identify memory bottlenecks, and provide a refactored version using list comprehensions, generator expressions, and multiprocessing where applicable. Maintain strict type hinting and unit tests."
    },
    {
        category: "Coding",
        title: "Full-Stack React Tailwind Architect",
        text: "Generate a complete modular React component for a luxury glassmorphic pricing card grid. Include responsive layout, Tailwind CSS utility classes, smooth hover scale micro-animations, a state switch for monthly/annual pricing, and a highlight banner for the most popular tier."
    },
    {
        category: "Coding",
        title: "Advanced SQLite Database Wrapper",
        text: "Write a robust, thread-safe Python database wrapper class using SQLite3. Implement automatic table creation, parameter binding for safe execution, custom error logs, automated backups, and context manager support for connection pooling."
    },
    {
        category: "Coding",
        title: "Rust Async Server Boilerplate",
        text: "Generate an optimized asynchronous TCP echo server in Rust using the Tokio runtime. Include proper error handling, connection pooling limits, signal trapping for graceful shutdowns, structural logging with tracing, and client heartbeat checkers."
    },
    {
        category: "Coding",
        title: "TypeScript Type-Safe API Client",
        text: "Create a complete, type-safe API client wrapper in TypeScript for a RESTful SaaS endpoint. Include dynamic generic request mapping, automatic token refresh interceptors using async/await, comprehensive retry schemas with exponential backoff, and unit tests."
    },
    {
        category: "Marketing",
        title: "Gourmet Mushroom Coffee Brand Story",
        text: "Develop a high-converting, emotional copywriting framework (AIDA model) for a premium, organic mushroom-infused coffee brand. The tone should be clean, authentic, and scientific. Emphasize focus benefits, sustained clean energy, and zero caffeine jitters."
    },
    {
        category: "Marketing",
        title: "TikTok Viral Tech Script Planner",
        text: "Draft an engaging 60-second viral TikTok script introducing a productivity tool. Include a powerful 3-second hook, high-speed visual editing prompts, energetic body pacing notes, structural transitions, and a low-friction final call to action."
    },
    {
        category: "Marketing",
        title: "SaaS Product Launch Email Sequence",
        text: "Generate a 4-part email marketing sequence launching a new AI design tool for professional marketing agencies. The sequence should cover: (1) The major design workflow problem, (2) The automated asset generator solution, (3) A social proof validation case study, and (4) A limited-time discount close."
    },
    {
        category: "Marketing",
        title: "Facebook Ad Copy Copywriter",
        text: "Act as a world-class ad copywriter. Generate three variations of high-converting Facebook ad copies (short, medium, long form) for a premium ergonomic lumbar support chair. Include captivating scroll-stopper hooks, clear bulleted features, emotional benefits, and strong CTAs."
    },
    {
        category: "Creative Writing",
        title: "Time-Traveler Watchmaker dossier",
        text: "Act as an award-winning novelist. Generate a detailed character dossier for a reclusive time-traveler masquerading as a 19th-century watchmaker in London. Include motivations, physical quirks, subverted tropes, a hidden paradox secret, and sample dialogue."
    },
    {
        category: "Creative Writing",
        title: "Gothic Cyberpunk Noir Opening Scene",
        text: "Write the opening scene of a sci-fi detective novel. The setting is Neo-London in 2088 under perpetual rain and acid-green smog. Introduce an old cyborg private eye examining a mysterious organic storage card found inside a dead synthetics manufacturer."
    },
    {
        category: "Creative Writing",
        title: "Fantasy Worldbuilding Lore Generator",
        text: "Act as a lead worldbuilder. Create a rich historical lore brief for the ancient floating kingdom of Solaria, which fell to earth 500 years ago when its core elemental crystal shattered. Detail the magic system, remaining ruins, and cultural beliefs."
    },
    {
        category: "SEO",
        title: "Ultimate Technical SEO Outline Generator",
        text: "Act as an elite SEO specialist. Create a detailed blog article outline targeting the high-intent keyword 'best mechanical keyboard for typing'. Include comprehensive semantic keyword groupings, optimized H1/H2/H3 structure, suggested schema markup, and LSI terms."
    },
    {
        category: "SEO",
        title: "SaaS Asset Manager Blog Post SEO",
        text: "Write highly persuasive, search-engine-optimized landing page copy for a new AI-driven design asset manager. Include a strong headline targeting 'automated design asset manager', subheadings, dynamic value propositions, FAQ sections, and hero section call-to-actions."
    },
    {
        category: "SEO",
        title: "High-Intent Keyword Cluster Builder",
        text: "Generate a cluster of 15 high-intent, low-difficulty semantic keywords surrounding 'learn to code in 2026'. Group them by user search intent (informational, navigational, commercial, transactional) and suggest title tags and meta descriptions for each."
    },
    {
        category: "Personal Growth",
        title: "Deep Work Daily Productivity Routine",
        text: "Design an optimal 4-hour daily morning deep work routine. Incorporate the Pomodoro method, cognitive priming exercises, science-backed hydration intervals, and a sunset mindfulness checklist. Provide suggestions on reducing ambient noise and digital distractions."
    },
    {
        category: "Personal Growth",
        title: "Stoic Mindset Journal Prompts",
        text: "Generate a set of 7 highly reflective journal prompts based on ancient Stoic philosophy (Marcus Aurelius and Seneca). Focus on cultivating resilience, reframing adversity, voluntary discomfort, and practicing radical gratitude for everyday events."
    },
    {
        category: "Business",
        title: "Cold Email Outreach Sequence Builder",
        text: "Create a 3-part cold outreach email sequence targeting SaaS Chief Marketing Officers. Focus on a high-value lead magnet (free landing page speed audit). Keep the tone professional, conversational, and direct. Include clear, low-friction calls to action."
    },
    {
        category: "Business",
        title: "SaaS Checkout Friction CRO Audit",
        text: "Act as a Conversion Rate Optimization (CRO) expert. Auditing a high-end streetwear clothing store, identify five common customer friction points on the cart checkout page and suggest concrete UI patterns, copy shifts, and trust badges to boost conversions."
    },
    {
        category: "Business",
        title: "Angel Investor Seed Deck Outline",
        text: "Provide a comprehensive 10-slide outline for an early-stage B2B SaaS startup pitch deck. For each slide, outline the core message, suggested high-impact data visualization chart, key speaking points, and direct emotional hooks to capture angel investor interest."
    },
    {
        category: "Art & Design",
        title: "Retro Vaporwave Sunset Illustration",
        text: "Beautiful vector graphic of a retro vaporwave sunset, glowing orange grid sun sinking behind violet wireframe mountain wireframes, pink neon lasers piercing the indigo sky, 80s arcade vibes, clean gradients, high-fidelity --ar 16:9"
    },
    {
        category: "Art & Design",
        title: "Breathtaking Nordic Aurora Borealis",
        text: "Breathtaking landscape photography of green and purple aurora borealis dancing over a mirrored frozen lake in Iceland, deep snow on the pine trees, starry sky, extremely crisp high contrast textures, volumetric moonlight, raw photo --style raw"
    },
    {
        category: "Art & Design",
        title: "Cute Isometric Floating Bakery",
        text: "Fascinating isometric 3D render of a cute floating pink pastel bakery shop, tiny detailed tables under umbrellas on a wooden deck, delicious cakes visible in glass counter, warm glowing fairy lights, soft clay material, blender 3D --v 6.0"
    },
    {
        category: "Art & Design",
        title: "Stunning Futuristic Bio-Architecture",
        text: "Wide cinematic view of a futuristic organic city where skyscrapers are made of living trees and bioluminescent climbing vines, clean crystal canals flowing with solar-powered water taxis, flying drones, highly realistic octane render --ar 16:9"
    },
    {
        category: "Art & Design",
        title: "Ethereal Porcelain Steampunk Owl",
        text: "Ethereal detailed sculpture of a steampunk owl crafted from pure white polished porcelain and delicate gold gears, ruby gemstone eyes, perched on an old velvet book, dramatic spotlighting against a black matte background --v 6.0"
    }
];

// Rich, high-end Unsplash images mapped contextually to categories for a beautiful layout
const CATEGORY_IMAGES = {
    "Art & Design": [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&h=280&q=80"
    ],
    "Coding": [
        "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&h=280&q=80"
    ],
    "Marketing": [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&h=280&q=80"
    ],
    "Business": [
        "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&h=280&q=80"
    ],
    "SEO": [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&h=280&q=80"
    ],
    "Creative Writing": [
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&h=280&q=80"
    ],
    "Personal Growth": [
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&h=280&q=80",
        "https://images.unsplash.com/photo-1528712306091-ed0768093a99?auto=format&fit=crop&w=400&h=280&q=80"
    ]
};

// Generates exactly 300 database rows by cycling our gorgeous curated templates
const prompts = Array.from({ length: 300 }, (_, i) => {
    const base = CURATED_PROMPTS[i % CURATED_PROMPTS.length];
    const catImages = CATEGORY_IMAGES[base.category] || CATEGORY_IMAGES["Art & Design"];
    const imgUrl = catImages[i % catImages.length];

    return {
        id: i + 1,
        category: base.category,
        title: i >= CURATED_PROMPTS.length ? `${base.title} Node #${i + 1}` : base.title,
        text: base.text,
        img: imgUrl,
        isPremium: (i % 3 !== 0) // Keep the original 66% premium ratio
    };
});

// Classical Fisher-Yates array shuffling routine
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the core sharded prompts array to ensure a highly randomized grid order on every load/refresh
shuffleArray(prompts);

let currentPage = 1;
const itemsPerPage = 12;
let filteredPrompts = [...prompts];

const AI_CAMPAIGNS = [
    {
        title: 'Midjourney Pro Workspace',
        desc: 'Acquire premium presets used by Hollywood directors and top concept artists. 60% student rebate.',
        promo: 'CODE "MJPRO60" FOR 60% OFF',
        img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Claude 3 Elite Key',
        desc: 'Accelerate coding workflows with private advanced context system templates.',
        promo: 'CODE "CLAUDEKEY" FOR 20% DISCOUNT',
        img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Stable Diffusion Web',
        desc: 'Learn high-fidelity checkpoints, controlnets, and styling prompts in 6 hours.',
        promo: 'CLAIM RESERVED SEAT: DIFFUSION25',
        img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'GPT-4 API Free Credits',
        desc: 'Consolidated developer credits to build production-scale LLM search apps. Save $50 on deposit.',
        promo: 'CLAIM CREDIT CODE: GPT4CREDITS',
        img: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Cursor AI Code Editor',
        desc: 'Advanced automated editing workspace with dynamic multi-line parsing support.',
        promo: 'GET 15% OFF WORKSPACE: CURSOR15',
        img: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Keychron Q1 Mechanical Keyboard',
        desc: 'Fully customizable mechanical keyboards with premium tactile feedback.',
        promo: 'GET KEYBOARD CODE: KEYCHRON15',
        img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=200&h=200&q=80'
    }
];

let adsDisabled = false;
let interactionCount = 0;

// --- 1. Dynamic Catalog Rendering ---
function renderPrompts() {
    const grid = document.getElementById('promptGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filteredPrompts.slice(start, end);

    pageItems.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = `card ${p.isPremium ? 'premium-locked' : ''}`;
        
        const seedPhoto = p.img || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&h=280&q=80';
        
        card.innerHTML = `
            <div class="card-image" style="height:150px; background:url('${seedPhoto}') center/cover; border-radius:12px; margin-bottom:1rem; position:relative;">
                ${p.isPremium ? '<div class="lock-overlay">🔒 ELITE ACCESS</div>' : ''}
            </div>
            <span class="tag">${p.category} ${p.isPremium ? '★' : ''}</span>
            <h3>${p.title}</h3>
            <p class="${p.isPremium ? 'blurred-text' : ''}">"${p.isPremium ? 'This prompt is sharded and locked for premium security layers.' : p.text.substring(0, 80) + '...'}"</p>
            <div style="display:flex; gap:10px;">
                ${p.isPremium 
                    ? `<button onclick="unlockPrompt(${p.id})" style="width:100%; background:var(--primary); color:#fff; border-color:transparent;">Unlock Node</button>` 
                    : `<button onclick="copyPromptText(this, ${p.id}, event)" style="width:auto; flex:1">Copy</button>
                       <button onclick="inspectPromptDetail(${p.id})" style="width:auto; flex:1">Expand →</button>`
                }
            </div>
        `;
        grid.appendChild(card);

        // Dynamic sponsorship feed placements
        if ((index + 1) % 4 === 0) {
            const campaignIndex = Math.floor(index / 4) % AI_CAMPAIGNS.length;
            const campaign = AI_CAMPAIGNS[campaignIndex];
            
            const adCard = document.createElement('div');
            adCard.className = 'card ad-card';
            adCard.innerHTML = `
                <span class="tag" style="background:var(--primary-glow); color:var(--primary);">SPONSOR</span>
                <h3>${campaign.title}</h3>
                <p>${campaign.desc}</p>
                <button class="ad-btn" style="width:100%; border-radius:10px;" onclick="event.stopPropagation(); alert('🎉 Redirecting to sponsor portal! Promo code copied.')">Claim Discount</button>
            `;
            grid.appendChild(adCard);
        }
    });

    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    pagination.innerHTML = '';
    
    const totalPages = Math.ceil(filteredPrompts.length / itemsPerPage);
    if (totalPages <= 1) return;
    
    const prevBtn = document.createElement('button');
    prevBtn.innerText = "Previous";
    prevBtn.style.width = "auto";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => { currentPage--; renderPrompts(); window.scrollTo(0,0); };
    pagination.appendChild(prevBtn);

    const info = document.createElement('span');
    info.innerText = ` Page ${currentPage} of ${totalPages} `;
    info.style.margin = "0 2rem";
    info.style.fontWeight = "600";
    info.style.fontSize = "0.95rem";
    pagination.appendChild(info);

    const nextBtn = document.createElement('button');
    nextBtn.innerText = "Next";
    nextBtn.style.width = "auto";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => { currentPage++; renderPrompts(); window.scrollTo(0,0); };
    pagination.appendChild(nextBtn);
}

// Search input key hooks
document.getElementById('searchInput')?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    filteredPrompts = prompts.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.text.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
    currentPage = 1;
    renderPrompts();
});

// Inspector Details Modal
function inspectPromptDetail(id) {
    const p = prompts.find(item => item.id === id);
    const modal = document.getElementById('detailModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <div class="modal-hero" style="background:url('${p.img}') center/cover; height:240px; border-radius:16px; margin-bottom:2rem;"></div>
        <span class="tag">${p.category}</span>
        <h2 style="font-size:2.2rem; font-family:'Space Grotesk',sans-serif; margin:1rem 0;">${p.title}</h2>
        <p style="font-size:1.1rem; color:var(--text-muted); line-height:1.7; margin-bottom:2rem;">"${p.text}" This prompt is mathematically sharded with advanced modifiers specifically optimized for AI processing and visual engine synthesis.</p>
        
        <div class="extensive-info" style="background:rgba(255,255,255,0.02); padding:1.8rem; border-radius:16px; border:1px solid var(--panel-border);">
            <h3 style="margin-bottom:1rem; font-family:'Space Grotesk',sans-serif;">Prompt Parameters</h3>
            <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem; font-size:0.95rem; color:var(--text-muted);">
                <li><strong>Target Model:</strong> ${["GPT-4", "Midjourney V6", "Claude 3.5 Sonnet", "Stable Diffusion XL"][id % 4]}</li>
                <li><strong>Token Length:</strong> ${Math.floor(Math.random() * 80) + 60} tokens</li>
                <li><strong>Arrangement Node:</strong> Node-${id + 1000}</li>
                <li><strong>Status:</strong> Active & Verified</li>
            </ul>
        </div>
    `;

    // Choose sponsored asset inside details popup
    const detailCampaign = AI_CAMPAIGNS[id % AI_CAMPAIGNS.length];
    const detailImg = document.getElementById('detail-ad-img');
    const detailTitle = document.getElementById('detail-ad-title');
    const detailDesc = document.getElementById('detail-ad-desc');
    
    if (detailImg) detailImg.src = detailCampaign.img;
    if (detailTitle) detailTitle.innerText = detailCampaign.title;
    if (detailDesc) detailDesc.innerText = detailCampaign.desc;

    modal.style.display = 'flex';
}

function unlockPrompt(id) {
    const p = prompts.find(item => item.id === id);
    showSessionInterstitialAd(() => {
        p.isPremium = false;
        renderPrompts();
        inspectPromptDetail(id);
    });
}

function copyPromptText(btn, id, event) {
    if (event) event.stopPropagation();
    const p = prompts.find(item => item.id === id);
    navigator.clipboard.writeText(p.text);
    
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    
    showSessionInterstitialAd(() => {
        setTimeout(() => btn.innerText = originalText, 1500);
    });
}

// Modal closing hooks
document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('detailModal').style.display = 'none';
});

window.onclick = (event) => {
    const modal = document.getElementById('detailModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


// --- 2. Custom Prompt Creator Modal ---
const promptModal = document.getElementById('promptModal');
const btnOpenPromptCreator = document.getElementById('btn-open-prompt-creator');
const btnClosePromptModal = document.getElementById('btn-close-prompt-modal');

if (btnOpenPromptCreator) {
    btnOpenPromptCreator.addEventListener('click', () => {
        if (promptModal) promptModal.style.display = 'flex';
    });
}

if (btnClosePromptModal) {
    btnClosePromptModal.addEventListener('click', () => {
        if (promptModal) promptModal.style.display = 'none';
    });
}

function submitCustomPrompt() {
    const title = document.getElementById('prompt-title').value;
    const category = document.getElementById('prompt-category').value;
    const llm = document.getElementById('prompt-llm').value;
    const text = document.getElementById('prompt-text').value;

    if (!title || !text) {
        alert('❌ Please complete all prompt parameters.');
        return;
    }

    const catImages = CATEGORY_IMAGES[category] || CATEGORY_IMAGES["Art & Design"];
    const imgUrl = catImages[Math.floor(Math.random() * catImages.length)];

    const newPrompt = {
        id: prompts.length + 1,
        category,
        title,
        text: `${text} [Optimized for ${llm}]`,
        img: imgUrl,
        isPremium: false
    };

    if (promptModal) promptModal.style.display = 'none';
    document.getElementById('prompt-form').reset();

    // Intercept with 5-second skip overlay before syncing!
    showSessionInterstitialAd(() => {
        prompts.unshift(newPrompt);
        filteredPrompts = [...prompts];
        renderPrompts();
    });
}


// --- 3. Programmatic Rotating Sponsor Banner ---
let bannerIndex = 0;
function startRotatingBanner() {
    const banner = document.getElementById('floating-ad-banner');
    if (!banner || adsDisabled) return;

    const campaign = AI_CAMPAIGNS[bannerIndex];
    bannerIndex = (bannerIndex + 1) % AI_CAMPAIGNS.length;

    banner.innerHTML = `
        <div class="ad-sponsor-container">
            <img src="${campaign.img}" alt="${campaign.title}">
            <div class="banner-content">
                <p>Curated AI Sponsor</p>
                <strong>${campaign.title}</strong>
            </div>
        </div>
        <div class="banner-actions">
            <button class="btn-banner-action" id="btn-banner-claim">Claim Discount</button>
            <button class="btn-banner-close" id="btn-banner-close">×</button>
        </div>
    `;

    banner.style.display = 'flex';

    // Hook listeners
    document.getElementById('btn-banner-claim')?.addEventListener('click', () => {
        alert(`🎉 Copied discount code: "${campaign.promo.split('"')[1] || 'MJPRO60'}" to clipboard!`);
        window.open('#', '_blank');
    });

    document.getElementById('btn-banner-close')?.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

// Initial banner launch and rotate every 10 seconds
setTimeout(() => {
    startRotatingBanner();
    setInterval(startRotatingBanner, 10000);
}, 2000);


// --- 4. Decoupled Timed Interstitial Countdown System ---
let interstitialCallback = null;
let interstitialTimer = null;
const interstitialModal = document.getElementById('interstitialModal');
const btnSkipAd = document.getElementById('btn-skip-ad');
const btnClaimAd = document.getElementById('btn-claim-ad');

function showSessionInterstitialAd(onClosed) {
    if (adsDisabled || !interstitialModal) {
        onClosed();
        return;
    }
    
    interstitialCallback = onClosed;
    
    // Choose a random campaign
    const campaign = AI_CAMPAIGNS[Math.floor(Math.random() * AI_CAMPAIGNS.length)];
    const imgEl = document.getElementById('interstitial-ad-img');
    const titleEl = document.getElementById('interstitial-ad-title');
    const descEl = document.getElementById('interstitial-ad-desc');
    const promoEl = document.getElementById('interstitial-ad-promo');
    
    if (imgEl) imgEl.src = campaign.img;
    if (titleEl) titleEl.innerText = campaign.title;
    if (descEl) descEl.innerText = campaign.desc;
    if (promoEl) promoEl.innerText = campaign.promo;

    interstitialModal.style.display = 'flex';
    
    btnSkipAd.disabled = true;
    btnSkipAd.style.opacity = '0.4';
    btnSkipAd.style.cursor = 'not-allowed';
    btnSkipAd.innerText = 'Skip Ad in 5s';
    
    let count = 5;
    if (interstitialTimer) clearInterval(interstitialTimer);
    
    interstitialTimer = setInterval(() => {
        count--;
        if (count > 0) {
            btnSkipAd.innerText = `Skip Ad in ${count}s`;
        } else {
            clearInterval(interstitialTimer);
            btnSkipAd.innerText = 'Skip Ad';
            btnSkipAd.disabled = false;
            btnSkipAd.style.opacity = '1';
            btnSkipAd.style.cursor = 'pointer';
        }
    }, 1000);
}

if (btnSkipAd) {
    btnSkipAd.addEventListener('click', () => {
        interstitialModal.style.display = 'none';
        
        // Trigger success synchronization celebration modal!
        const celebrationModal = document.getElementById('celebrationModal');
        if (celebrationModal) {
            celebrationModal.style.display = 'flex';
        } else if (interstitialCallback) {
            interstitialCallback();
        }
    });
}

if (btnClaimAd) {
    btnClaimAd.addEventListener('click', () => {
        alert('🎉 Promo loaded! Directing to partner portal.');
        interstitialModal.style.display = 'none';
        
        const celebrationModal = document.getElementById('celebrationModal');
        if (celebrationModal) {
            celebrationModal.style.display = 'flex';
        } else if (interstitialCallback) {
            interstitialCallback();
        }
    });
}

// Celebration close handler
const btnCloseCelebrationModal = document.getElementById('btn-close-celebration');
if (btnCloseCelebrationModal) {
    btnCloseCelebrationModal.addEventListener('click', () => {
        document.getElementById('celebrationModal').style.display = 'none';
        if (interstitialCallback) {
            interstitialCallback();
            interstitialCallback = null;
        }
    });
}


// --- 5. Scarcity Upgrade Tier & Timer Engine ---
let upgradeTimer = null;
const premiumUpgradeModal = document.getElementById('premiumUpgradeModal');

function triggerUpgradeModal() {
    if (adsDisabled || !premiumUpgradeModal) return;
    
    premiumUpgradeModal.style.display = 'flex';
    let duration = 600; // 10 minutes
    const countdownEl = document.getElementById('scarcity-countdown');

    if (upgradeTimer) clearInterval(upgradeTimer);

    upgradeTimer = setInterval(() => {
        duration--;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        if (countdownEl) {
            countdownEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        if (duration <= 0) {
            clearInterval(upgradeTimer);
            premiumUpgradeModal.style.display = 'none';
        }
    }, 1000);
}

// Trigger upgrade modal after 40 seconds of active prompt search
setTimeout(triggerUpgradeModal, 40000);

document.getElementById('btn-skip-upgrade')?.addEventListener('click', () => {
    premiumUpgradeModal.style.display = 'none';
    clearInterval(upgradeTimer);
});

// Acknowledge upgrade purchase (disable ads)
document.getElementById('btn-upgrade-now')?.addEventListener('click', () => {
    alert('🏆 Welcome to PromptPulse Pro! Premium template tools unlocked, sponsor cells silenced.');
    adsDisabled = true;
    premiumUpgradeModal.style.display = 'none';
    const banner = document.getElementById('floating-ad-banner');
    if (banner) banner.style.display = 'none';
    clearInterval(upgradeTimer);
});


// --- 6. Exit Intent & Mock Ad-Blocker Overlays ---
let exitIntentShown = false;
document.addEventListener("mouseout", (e) => {
    if (e.clientY < 0 && !exitIntentShown && !adsDisabled) {
        exitIntentShown = true;
        const exitModal = document.getElementById("exitIntentModal");
        if (exitModal) exitModal.style.display = "flex";
    }
});

document.getElementById("closeExitIntent")?.addEventListener("click", () => {
    document.getElementById("exitIntentModal").style.display = "none";
});
document.getElementById("declineExitIntent")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("exitIntentModal").style.display = "none";
});

// Whitelist checks
setTimeout(() => {
    if (adsDisabled) return;
    const isAdBlockerActive = Math.random() < 0.15; // 15% simulation chance
    if (isAdBlockerActive) {
        const adBlockModal = document.getElementById("adBlockModal");
        if (adBlockModal) adBlockModal.style.display = "flex";
    }
}, 5000);

document.getElementById('btn-adblock-premium')?.addEventListener('click', () => {
    alert('🏆 Pro Activated! Ad blockers whitelisted.');
    adsDisabled = true;
    document.getElementById("adBlockModal").style.display = "none";
    const banner = document.getElementById('floating-ad-banner');
    if (banner) banner.style.display = 'none';
});

// Footer direct premium activation
document.getElementById('footer-adblock-premium-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('🏆 Pro Activated! Dynamic partner slots silenced.');
    adsDisabled = true;
    const banner = document.getElementById('floating-ad-banner');
    if (banner) banner.style.display = 'none';
});

// Header/Leaderboard/Anchor action bindings
document.getElementById('btn-leaderboard-claim')?.addEventListener('click', () => {
    alert('🎉 Master class 80% discount loaded to coupon session!');
});
document.getElementById('btn-anchor-claim')?.addEventListener('click', () => {
    alert('🎉 Class coupon registered! Check your prompt dashboard.');
});
document.querySelector('.close-anchor')?.addEventListener('click', () => {
    document.querySelector('.sticky-anchor-ad').style.display = 'none';
});

// Window load triggers
window.onload = () => {
    renderPrompts();
    
    // Set random sponsored assets on page elements
    const randomCampaign = AI_CAMPAIGNS[Math.floor(Math.random() * AI_CAMPAIGNS.length)];
    const sidebarImg = document.getElementById('sidebar-ad-img');
    const sidebarDesc = document.getElementById('sidebar-ad-desc');
    
    if (sidebarImg) sidebarImg.src = randomCampaign.img;
    if (sidebarDesc) sidebarDesc.innerText = randomCampaign.desc;
};
