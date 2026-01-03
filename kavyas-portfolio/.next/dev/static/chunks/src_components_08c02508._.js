(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/NavLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavLink",
    ()=>NavLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const NavLink = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ className, activeClassName, pendingClassName, href, ...props }, ref)=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleClick = (e)=>{
        // Check if it's the home link
        if (href === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        // Check if it's a hash link
        if (href.includes('#')) {
            e.preventDefault();
            const [path, hash] = href.split('#');
            // If we're already on the page, just scroll
            if (!path || pathname === path) {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                // Navigate then scroll
                window.location.href = href;
            }
        }
    };
    const isActive = pathname === href || pathname?.startsWith(href + '/');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        href: href,
        onClick: handleClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className, isActive && activeClassName),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/NavLink.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
})), "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = NavLink;
NavLink.displayName = "NavLink";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavLink$forwardRef");
__turbopack_context__.k.register(_c1, "NavLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WorkSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkSection",
    ()=>WorkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const projects = [
    {
        id: 1,
        company: "UBS",
        partner: "SCADpro",
        isNda: true,
        title: "The Future of Banking",
        description: "We're reimagining banking for Gen Z with intuitive, future-focused solutions. Honoring UBS's legacy, we push creative boundaries and explore AI-driven tools that help users manage their finances with confidence and ease.",
        image: '/images/ubscardpic.png',
        logoSrc: '/images/ubslogo.png',
        logoAlt: 'UBS Logo',
        logoClass: 'h-7 w-auto mr-2',
        partnerColor: '#868481',
        cardBg: '#EFEFEF'
    },
    {
        id: 2,
        company: "Porsche",
        partner: "SCAD",
        isNda: false,
        title: "The Future of Electric Vehicles",
        description: "Senior UX Lead for the backend team on a Porsche EV concept project, where we’re designing a future-facing digital experience for the next generation of drivers. Primarily focused on building systems that are intuitive, flexible, and aligned with Porsche’s commitment to innovation.",
        image: '/images/porschecardpic.png',
        logoSrc: '/images/porschelogo.png',
        logoAlt: 'Porsche Logo',
        logoClass: 'h-5 w-auto mr-2',
        partnerColor: '#868481',
        cardBg: '#2A353B'
    },
    {
        id: 3,
        company: "Lowe's",
        partner: "SCADpro",
        isNda: true,
        title: "Garden Center Redesign",
        description: "UX designer on the Lowe's concept project, where our team is reimagining the garden center experience to better serve a diverse range of customers. We're focused on positioning Lowe's as the premier destination for all gardening needs by creating personalized, inclusive, and engaging user experiences.",
        image: '/images/lowescard.png',
        logoSrc: '/images/lowes.png',
        logoAlt: "Lowe's Logo",
        logoClass: 'h-6 w-auto mr-2',
        partnerColor: '#868481',
        cardBg: '#E8E4DD'
    },
    {
        id: 4,
        company: "Aestura",
        partner: "SCAD",
        isNda: false,
        title: "Innovative Skincare Solutions",
        description: "Developing a modern digital experience for Aestura's skincare line, focusing on user-friendly interfaces and personalized product recommendations to enhance customer satisfaction and brand loyalty.",
        image: '/images/aesturacard.png',
        logoSrc: '/images/aesturalogo.png',
        logoAlt: 'Aestura Logo',
        logoClass: 'h-6 w-auto mr-2',
        partnerColor: '#868481',
        cardBg: 'transparent'
    },
    {
        id: 5,
        company: "Startupa",
        partner: "SCAD",
        isNda: false,
        title: "Startup (LOOMA)",
        description: "Participated in a week-long competition to design a futuristic wearable. Developed smart glasses aimed at supporting Alzheimer's patients through memory retention, facial recognition, and real-time reminders to enhance daily life.",
        image: '/images/startupcard.png',
        logoSrc: '/images/looma/startuplogo.png',
        logoAlt: 'Startupa Logo',
        logoClass: 'h-6 w-auto mr-2',
        partnerColor: '#868481',
        cardBg: 'transparent'
    }
];
function WorkSection() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const filteredProjects = activeFilter === "nda" ? projects.filter((p)=>p.isNda) : projects;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        className: "pt-8 pb-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 animate-fade-in-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-medium text-foreground mb-6",
                            children: "My Work"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WorkSection.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveFilter("all"),
                                    className: `px-4 py-2 text-sm font-medium rounded-full transition-all ${activeFilter === "all" ? "bg-foreground text-background" : "bg-card text-muted-foreground hover:bg-muted"}`,
                                    children: "All"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveFilter("nda"),
                                    className: `px-4 py-2 text-sm font-medium rounded-full transition-all ${activeFilter === "nda" ? "bg-foreground text-background" : "bg-card text-muted-foreground hover:bg-muted"}`,
                                    children: "NDA Protected"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WorkSection.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WorkSection.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "card-float animate-fade-in-up",
                            style: {
                                animationDelay: `${index * 0.1}s`
                            },
                            children: project.company === 'Aestura' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-2xl overflow-hidden",
                                style: {
                                    backgroundColor: '#EBF1F3',
                                    minHeight: '494px',
                                    height: '494px',
                                    padding: '48px 56px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            left: '56px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            maxWidth: '45%',
                                            zIndex: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/aesturalogosvg.svg",
                                                alt: "Aestura Logo",
                                                style: {
                                                    height: '48px',
                                                    width: 'auto',
                                                    marginBottom: '40px',
                                                    display: 'block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/case-study/aestura",
                                                style: {
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    padding: '11px 26px',
                                                    border: '1.5px solid #6B8DD6',
                                                    borderRadius: '20px',
                                                    background: 'transparent',
                                                    color: '#6B8DD6',
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    textDecoration: 'none',
                                                    marginBottom: '32px',
                                                    transition: 'all 0.3s ease'
                                                },
                                                className: "group hover:bg-blue-600 hover:text-white hover:border-blue-600",
                                                children: [
                                                    "View Campaign",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        style: {
                                                            width: '16px',
                                                            height: '16px'
                                                        },
                                                        className: "transition-transform group-hover:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WorkSection.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '28px',
                                                    fontWeight: 700,
                                                    color: '#2A2A2A',
                                                    marginBottom: '14px',
                                                    lineHeight: '1.2',
                                                    letterSpacing: '-0.01em'
                                                },
                                                children: "The Essence Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 196,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '12px',
                                                    lineHeight: '1.7',
                                                    color: '#5A5A5A'
                                                },
                                                children: "Selected as a Semi-Finalist in the AmorePacific Brand Challenge, where I developed a comprehensive campaign to introduce Aestura skincare products to the North American market. Conducted market research to identify consumer needs and trends, then created a go-to-market strategy with creative ideas for brand positioning, launch channels, and promotional tactics."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 208,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 151,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            right: '20px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '560px',
                                            height: '560px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/aesturawaterbub.png",
                                                alt: "Water Bubble",
                                                style: {
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    zIndex: 1
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 227,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/aesturacardproduct.png",
                                                alt: "Aestura Product",
                                                style: {
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    zIndex: 2
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 218,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorkSection.tsx",
                                lineNumber: 141,
                                columnNumber: 17
                            }, this) : project.company === 'Startupa' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl overflow-hidden",
                                style: {
                                    backgroundColor: '#DBD1C5',
                                    minHeight: '494px',
                                    height: '494px',
                                    position: 'relative',
                                    padding: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: '48px',
                                            left: '56px',
                                            zIndex: 10
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/startuplogosvg.svg",
                                            alt: "START UP Logo",
                                            style: {
                                                height: '200px',
                                                width: 'auto'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 266,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 265,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: '48px',
                                            left: '56px',
                                            maxWidth: '42%',
                                            zIndex: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/case-study/looma",
                                                style: {
                                                    display: 'inline-flex',
                                                    padding: '11px 26px',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    borderRadius: '20px',
                                                    border: '1.5px solid #5A4A3C',
                                                    background: 'transparent',
                                                    color: '#5A4A3C',
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    textDecoration: 'none',
                                                    marginBottom: '24px',
                                                    transition: 'all 0.3s ease'
                                                },
                                                className: "group hover:bg-gray-800 hover:text-white hover:border-gray-800",
                                                children: [
                                                    "View Case Study",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        style: {
                                                            width: '16px',
                                                            height: '16px'
                                                        },
                                                        className: "transition-transform group-hover:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WorkSection.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 276,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '26px',
                                                    fontWeight: 700,
                                                    color: '#3D3530',
                                                    lineHeight: '1.3',
                                                    marginBottom: '14px',
                                                    letterSpacing: '-0.01em'
                                                },
                                                children: "Startup (LOOMA)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 301,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '12px',
                                                    lineHeight: '1.7',
                                                    color: '#5A4A3C',
                                                    fontWeight: 400
                                                },
                                                children: "Participated in a week-long competition to design a futuristic wearable. Developed smart glasses aimed at supporting Alzheimer's patients through memory retention, facial recognition, and real-time reminders to enhance daily life."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 313,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 274,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            right: 0,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '60%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/loomaglasses.png",
                                            alt: "LOOMA Smart Glasses",
                                            style: {
                                                width: '100%',
                                                height: 'auto',
                                                maxHeight: '85%',
                                                objectFit: 'contain',
                                                objectPosition: 'right center'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 335,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 324,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorkSection.tsx",
                                lineNumber: 254,
                                columnNumber: 17
                            }, this) : project.company === "Lowe's" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl overflow-hidden",
                                style: {
                                    backgroundColor: '#EBE8E1',
                                    minHeight: '494px',
                                    height: '494px',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '48px 56px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-between",
                                    style: {
                                        gap: '40px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            style: {
                                                maxWidth: '45%'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: project.logoSrc,
                                                            alt: project.logoAlt,
                                                            style: {
                                                                height: '36px',
                                                                width: 'auto'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                height: '36px',
                                                                width: '2px',
                                                                background: '#A8A8A8',
                                                                display: 'inline-block'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '26px',
                                                                fontWeight: 400,
                                                                color: '#A8A8A8',
                                                                letterSpacing: '-0.01em'
                                                            },
                                                            children: "SCADpro"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 23
                                                }, this),
                                                project.isNda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-10",
                                                    style: {
                                                        fontSize: '13px',
                                                        color: '#8A8A8A',
                                                        fontWeight: 400
                                                    },
                                                    children: "NDA Protected"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/case-study/lowes",
                                                    style: {
                                                        display: 'inline-flex',
                                                        padding: '11px 26px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        borderRadius: '20px',
                                                        border: '1.5px solid #003D7A',
                                                        background: 'transparent',
                                                        color: '#003D7A',
                                                        fontWeight: 500,
                                                        fontSize: '14px',
                                                        textDecoration: 'none',
                                                        marginBottom: '26px',
                                                        transition: 'all 0.3s ease'
                                                    },
                                                    className: "group hover:bg-blue-900 hover:text-white",
                                                    children: [
                                                        "View Case Study",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            style: {
                                                                width: '16px',
                                                                height: '16px'
                                                            },
                                                            className: "transition-transform group-hover:translate-x-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: '30px',
                                                        fontWeight: 700,
                                                        color: '#003D7A',
                                                        lineHeight: '1.25',
                                                        marginBottom: '14px',
                                                        letterSpacing: '-0.02em'
                                                    },
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '13px',
                                                        lineHeight: '1.65',
                                                        color: '#003D7A',
                                                        fontWeight: 400
                                                    },
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 363,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl overflow-hidden",
                                                style: {
                                                    width: '440px',
                                                    height: '398px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: project.image,
                                                    alt: project.title,
                                                    style: {
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 432,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 431,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 361,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorkSection.tsx",
                                lineNumber: 349,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl overflow-hidden",
                                style: {
                                    backgroundColor: project.cardBg,
                                    minHeight: '494px',
                                    height: '494px',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '48px 56px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col lg:flex-row items-center justify-between w-full",
                                    style: {
                                        gap: '40px'
                                    },
                                    children: [
                                        project.company === 'UBS' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            style: {
                                                maxWidth: '450px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: project.logoSrc,
                                                            alt: project.logoAlt,
                                                            style: {
                                                                height: '32px',
                                                                width: 'auto'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                height: '32px',
                                                                width: '2px',
                                                                background: '#D0D0D0',
                                                                display: 'inline-block'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '24px',
                                                                fontWeight: 400,
                                                                color: '#6B6B6B',
                                                                letterSpacing: '-0.02em'
                                                            },
                                                            children: "SCADpro"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 25
                                                }, this),
                                                project.isNda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-12",
                                                    style: {
                                                        fontSize: '14px',
                                                        color: '#6B6B6B',
                                                        fontWeight: 400
                                                    },
                                                    children: "NDA Protected"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/case-study/ubs",
                                                    style: {
                                                        display: 'inline-flex',
                                                        padding: '14px 28px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                        borderRadius: '20px',
                                                        border: '1.5px solid #000',
                                                        background: 'transparent',
                                                        color: '#000',
                                                        fontWeight: 500,
                                                        fontSize: '16px',
                                                        textDecoration: 'none',
                                                        marginBottom: '32px',
                                                        transition: 'all 0.3s ease'
                                                    },
                                                    className: "group hover:bg-black hover:text-white",
                                                    children: [
                                                        "View Case Study",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            style: {
                                                                width: '18px',
                                                                height: '18px'
                                                            },
                                                            className: "transition-transform group-hover:translate-x-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: '28px',
                                                        fontWeight: 600,
                                                        color: '#000',
                                                        lineHeight: '1.3',
                                                        marginBottom: '16px',
                                                        letterSpacing: '-0.01em'
                                                    },
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '14px',
                                                        lineHeight: '1.7',
                                                        color: '#333',
                                                        fontWeight: 400
                                                    },
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 461,
                                            columnNumber: 23
                                        }, this) : project.company === 'Porsche' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex flex-col justify-between",
                                            style: {
                                                position: 'absolute',
                                                inset: 0,
                                                padding: '48px 56px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: project.logoSrc,
                                                            alt: project.logoAlt,
                                                            style: {
                                                                height: '28px',
                                                                width: 'auto'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                height: '28px',
                                                                width: '2px',
                                                                background: '#6B6B6B',
                                                                display: 'inline-block'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '22px',
                                                                fontWeight: 400,
                                                                color: '#8A8A8A'
                                                            },
                                                            children: "SCAD"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        maxWidth: '50%'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/case-study/porsche",
                                                            style: {
                                                                display: 'inline-flex',
                                                                padding: '12px 24px',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                gap: '10px',
                                                                borderRadius: '20px',
                                                                border: '1.5px solid #fff',
                                                                background: '#FFF',
                                                                color: '#2A353B',
                                                                fontWeight: 500,
                                                                fontSize: '15px',
                                                                marginBottom: '24px',
                                                                textDecoration: 'none',
                                                                transition: 'all 0.3s ease'
                                                            },
                                                            className: "group hover:bg-transparent hover:text-white",
                                                            children: [
                                                                "View Case Study",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    style: {
                                                                        width: '16px',
                                                                        height: '16px'
                                                                    },
                                                                    className: "transition-transform group-hover:translate-x-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                                    lineNumber: 564,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontSize: '28px',
                                                                fontWeight: 600,
                                                                color: '#fff',
                                                                lineHeight: '1.3',
                                                                marginBottom: '16px',
                                                                letterSpacing: '-0.01em'
                                                            },
                                                            children: project.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: '14px',
                                                                lineHeight: '1.7',
                                                                color: '#E0E0E0',
                                                                fontWeight: 400
                                                            },
                                                            children: project.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WorkSection.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 528,
                                            columnNumber: 23
                                        }, this) : null,
                                        project.company === 'Porsche' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                right: '48px',
                                                top: '48px',
                                                bottom: '48px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl overflow-hidden",
                                                style: {
                                                    width: '380px',
                                                    height: '100%'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: project.image,
                                                    alt: project.title,
                                                    style: {
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 595,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 594,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl overflow-hidden",
                                                style: {
                                                    width: '420px',
                                                    height: '398px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: project.image,
                                                    alt: project.title,
                                                    style: {
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorkSection.tsx",
                                                lineNumber: 605,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 604,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 455,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorkSection.tsx",
                                lineNumber: 443,
                                columnNumber: 17
                            }, this)
                        }, project.id, false, {
                            fileName: "[project]/src/components/WorkSection.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/WorkSection.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "about",
                    className: "mt-20 animate-fade-in-up",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row items-center gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-semibold text-foreground mb-6",
                                        children: "Get To Know Me"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 628,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-foreground leading-relaxed",
                                        children: "Hi, I'm Kavya! A sophomore UX designer born and raised in Toronto, Canada. I'm a curious and passionate individual, always striving to make a difference through thoughtful, human-centered design. When I'm not glued to my computer, you'll find me exploring new places, trying new food, or watching basketball."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 631,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorkSection.tsx",
                                lineNumber: 627,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/gettoknowmekavya.png",
                                        alt: "Toronto Skyline",
                                        className: "object-cover",
                                        style: {
                                            width: '428px',
                                            height: '404px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 639,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 638,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorkSection.tsx",
                                lineNumber: 637,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorkSection.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/WorkSection.tsx",
                    lineNumber: 624,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20 space-y-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-semibold text-foreground mb-8",
                                    children: "EDUCATION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4 pb-6 border-b border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground font-medium",
                                                    children: "01."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground flex-1 text-right",
                                                    children: "Savannah College Of Art and Design"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 656,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4 pb-6 border-b border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground font-medium",
                                                    children: "02."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground flex-1 text-right",
                                                    children: "Westwood High School"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 660,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 655,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WorkSection.tsx",
                            lineNumber: 653,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-fade-in-up",
                            style: {
                                animationDelay: "0.1s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-semibold text-foreground mb-8",
                                    children: "EXPERIENCE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 669,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4 pb-6 border-b border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground font-medium",
                                                    children: "01."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground flex-1 text-right",
                                                    children: "SCAD FLUX - Director"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 671,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4 pb-6 border-b border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground font-medium",
                                                    children: "02."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 676,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground flex-1 text-right",
                                                    children: "UBS x SCADpro - UX Research/ UI Bridge"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 675,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4 pb-6 border-b border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground font-medium",
                                                    children: "03."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground flex-1 text-right",
                                                    children: "Porsche x SCADpro - Senior Backend Lead"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 679,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4 pb-6 border-b border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground font-medium",
                                                    children: "04."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground flex-1 text-right",
                                                    children: "Lowes x SCADpro - UX Team"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WorkSection.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 683,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 670,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WorkSection.tsx",
                            lineNumber: 668,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WorkSection.tsx",
                    lineNumber: 651,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-32 text-center animate-fade-in-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed",
                            children: [
                                "Traveler by choice, foodie",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.tsx",
                                    lineNumber: 694,
                                    columnNumber: 39
                                }, this),
                                "by instinct, dog lover always"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WorkSection.tsx",
                            lineNumber: 693,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            className: "inline-block px-12 py-4 text-xl rounded-full text-white font-semibold transition-all hover:scale-105",
                            style: {
                                backgroundColor: '#2E6B5F'
                            },
                            children: "About Me"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WorkSection.tsx",
                            lineNumber: 697,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-20 relative h-64 w-full max-w-[100vw] overflow-visible",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-end gap-[-20px] absolute left-1/2 transform -translate-x-1/2 w-full",
                                style: {
                                    bottom: '-120px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300 relative",
                                        style: {
                                            width: '280px',
                                            zIndex: 1,
                                            top: '40px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/footer/homefooter1.png",
                                            alt: "Travel moment 1",
                                            className: "w-full h-64 object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 710,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 709,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-white p-3 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300",
                                        style: {
                                            width: '280px',
                                            zIndex: 2,
                                            top: '10px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/footer/homefooter2.png",
                                            alt: "Travel moment 2",
                                            className: "w-full h-64 object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 719,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 718,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 relative",
                                        style: {
                                            width: '280px',
                                            zIndex: 3,
                                            top: '-20px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/footer/homefooter3.png",
                                            alt: "Travel moment 3",
                                            className: "w-full h-64 object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 728,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 727,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 relative",
                                        style: {
                                            width: '280px',
                                            zIndex: 2,
                                            top: '-10px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/footer/homefooter4.png",
                                            alt: "Travel moment 4",
                                            className: "w-full h-64 object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 737,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 736,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 relative",
                                        style: {
                                            width: '280px',
                                            zIndex: 1,
                                            top: '30px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/footer/homefooter5.png",
                                            alt: "Travel moment 5",
                                            className: "w-full h-64 object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 746,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 745,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 relative",
                                        style: {
                                            width: '280px',
                                            zIndex: 0,
                                            top: '60px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/footer/homefooter6.png",
                                            alt: "Travel moment 6",
                                            className: "w-full h-64 object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.tsx",
                                            lineNumber: 755,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.tsx",
                                        lineNumber: 754,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorkSection.tsx",
                                lineNumber: 707,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/WorkSection.tsx",
                            lineNumber: 706,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WorkSection.tsx",
                    lineNumber: 692,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WorkSection.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WorkSection.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(WorkSection, "t7f5NoXziLbzmLCl86X+c5sU9bA=");
_c = WorkSection;
var _c;
__turbopack_context__.k.register(_c, "WorkSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_08c02508._.js.map