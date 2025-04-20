(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary"
        },
        size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-3 rounded-md",
            lg: "h-11 px-8 rounded-md",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: buttonVariants({
            variant,
            size,
            className
        }),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 37,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `rounded-lg border bg-card text-card-foreground shadow-sm ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `flex flex-col space-y-1.5 p-6 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: `text-2xl font-semibold leading-none tracking-tight ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: `text-sm text-muted-foreground ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `p-6 pt-0 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `flex items-center p-6 pt-0 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/tabs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: `inline-flex h-10 items-center justify-center rounded-md bg-white/90 p-1 text-slate-500 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = TabsList;
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: `inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = TabsTrigger;
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: `mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = TabsContent;
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/result/demographic_results.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"Yolo\":{\"total_households\":76107,\"pop_65_plus\":28323,\"pop_under_18\":44537,\"avg_household_size\":2.7,\"hs_grad_pct\":18.0,\"total_pop\":217141,\"eng_less_than_very_well_pct\":13.0,\"broadband_pct\":91.0,\"drove_alone_pct\":65.8,\"median_income\":85097,\"no_health_ins_pct\":4.7,\"poverty_pct\":8.0,\"top_3_race\":{\"White\":58.8,\"Asian\":14.7,\"Black or African American\":2.7},\"hispanic_pct\":32.2,\"svi\":0.7366,\"total_homeless\":655},\"Riverside\":{\"total_households\":749976,\"pop_65_plus\":359162,\"pop_under_18\":597531,\"avg_household_size\":3.2,\"hs_grad_pct\":null,\"total_pop\":2429487,\"eng_less_than_very_well_pct\":14.4,\"broadband_pct\":91.7,\"drove_alone_pct\":75.9,\"median_income\":84505,\"no_health_ins_pct\":8.1,\"poverty_pct\":8.6,\"top_3_race\":{\"White\":46.8,\"Hispanic or Latino (of any race)\":50.8,\"Some other race\":23.6},\"hispanic_pct\":50.8,\"svi\":0.8199,\"total_homeless\":2811},\"Kern\":{\"total_households\":277499,\"pop_65_plus\":102703,\"pop_under_18\":261013,\"avg_household_size\":3.2,\"hs_grad_pct\":27.4,\"total_pop\":906883,\"eng_less_than_very_well_pct\":17.6,\"broadband_pct\":88.0,\"drove_alone_pct\":79.1,\"median_income\":63883,\"no_health_ins_pct\":7.8,\"poverty_pct\":15.5,\"top_3_race\":{\"White\":56.1,\"Hispanic or Latino\":55.3,\"Black or African American\":5.2},\"hispanic_pct\":55.3,\"svi\":0.9685,\"total_homeless\":1330},\"Shasta\":{\"total_households\":71107,\"pop_65_plus\":38339,\"pop_under_18\":39190,\"avg_household_size\":2.5,\"hs_grad_pct\":25.8,\"total_pop\":181852,\"eng_less_than_very_well_pct\":2.5,\"broadband_pct\":88.5,\"drove_alone_pct\":78.6,\"median_income\":68347,\"no_health_ins_pct\":6.6,\"poverty_pct\":8.2,\"top_3_race\":{\"White\":81.8,\"Asian\":3.1,\"American Indian and Alaska Native\":1.8},\"hispanic_pct\":11.0,\"svi\":0.7649,\"total_homeless\":806},\"Los Angeles\":{\"total_households\":3363093,\"pop_65_plus\":1415856,\"pop_under_18\":2093072,\"avg_household_size\":2.9,\"hs_grad_pct\":null,\"total_pop\":9936690,\"eng_less_than_very_well_pct\":22.9,\"broadband_pct\":90.2,\"drove_alone_pct\":68.0,\"median_income\":83411,\"no_health_ins_pct\":9.0,\"poverty_pct\":10.0,\"top_3_race\":{\"White\":39.6,\"Hispanic or Latino\":48.7,\"Asian\":14.8},\"hispanic_pct\":48.7,\"svi\":0.8629,\"total_homeless\":52442},\"Monterey\":{\"total_households\":130973,\"pop_65_plus\":62481,\"pop_under_18\":113042,\"avg_household_size\":3.2,\"hs_grad_pct\":null,\"total_pop\":437609,\"eng_less_than_very_well_pct\":25.4,\"broadband_pct\":91.8,\"drove_alone_pct\":69.1,\"median_income\":91043,\"no_health_ins_pct\":9.9,\"poverty_pct\":9.0,\"top_3_race\":{\"White\":39.7,\"Some other race\":39.9,\"Asian\":5.9},\"hispanic_pct\":59.9,\"svi\":0.8686,\"total_homeless\":2704}}"));}}),
"[project]/components/result/suggestions_results.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"Yolo\":[[\"Establish multilingual emergency alerts\",\"https://www.fcc.gov/multilingual-wireless-emergency-alerts\"],[\"Boost broadband infrastructure\",\"https://www.usda.gov/sustainability/infrastructure/broadband/reconnect-loan-and-grant-program\"],[\"Expand youth fire safety education\",\"https://sparkyschoolhouse.org/\"],[\"Fund low-income outreach programs\",\"https://www.csd.ca.gov/Pages/CSBGProgram.aspx\"],[\"Enhance senior citizen evacuation plans\",\"https://www.redcross.org/get-help/how-to-prepare-for-emergencies/older-adults.html\"]],\"Riverside\":[[\"Increase broadband access\",\"https://www.usda.gov/sustainability/infrastructure/broadband/reconnect-loan-and-grant-program\"],[\"Fund elderly support services\",\"https://aging.ca.gov/Programs_and_Services/\"],[\"Expand youth disaster education\",\"https://www.fema.gov/emergency-managers/individuals-communities/youth\"],[\"Increase Spanish language resources\",\"https://rems.ed.gov/docs/SpanishLanguageResourceList_English_508C.pdf\"],[\"Boost healthcare accessibility\",\"https://healthadministrationdegree.usc.edu/blog/how-to-improve-access-to-health-care\"],[\"Enhance poverty alleviation programs\",\"https://www.csd.ca.gov/Pages/CSBGProgram.aspx\"],[\"Incentivize larger household disaster preparedness\",\"https://www.fema.gov/assistance/individual/program\"],[\"Promote insurance coverage\",\"https://www.sagefrog.com/blog/marketing-mix-survey/5-effective-marketing-strategies-for-insurance-companies/\"]],\"Kern\":[[\"Focus more on community outreach of programs\",\"https://thesocialchangeagency.org/blog/community-outreach-done-right-tips-for-charities-and-funders/\"],[\"Expand senior citizen healthcare services\",\"https://www.dhcs.ca.gov/services/medi-cal/eligibility/Pages/OlderAdultExpansion.aspx\"],[\"Increase youth fire safety education\",\"https://www.usfa.fema.gov/prevention/fire-officials/public-educators/\"],[\"Improve broadband infrastructure\",\"https://www.usda.gov/sustainability/infrastructure/broadband/reconnect-loan-and-grant-program\"],[\"Launch Social Vulnerability Index improvement plan\",\"https://www.fcc.gov/MultilingualAlerting_EAS-WEA\"]],\"Shasta\":[[\"Expand youth fire safety education\",\"https://sparkyschoolhouse.org/\"],[\"Improve broadband connectivity\",\"https://www.usda.gov/sustainability/infrastructure/broadband/reconnect-loan-and-grant-program\"],[\"Boost healthcare coverage\",\"https://healthadministrationdegree.usc.edu/blog/how-to-improve-access-to-health-care\"],[\"Invest in poverty alleviation programs\",\"https://www.csd.ca.gov/Pages/CSBGProgram.aspx\"],[\"Enhance multilingual emergency services\",\"https://www.fcc.gov/MultilingualAlerting_EAS-WEA\"],[\"Establish SVI-based disaster response plan\",\"https://www.fcc.gov/MultilingualAlerting_EAS-WEA\"],[\"Improve Hispanic community outreach\",\"https://rems.ed.gov/docs/SpanishLanguageResourceList_English_508C.pdf\"],[\"Increase support for Native American communities\",\"https://www.usda.gov/sustainability/infrastructure/broadband\"]],\"Los Angeles\":[[\"Boost elderly disaster preparedness education\",\"https://www.redcross.org/get-help/how-to-prepare-for-emergencies/older-adults.html\"],[\"Increase funding for child emergency services\",\"https://www.fema.gov/emergency-managers/individuals-communities/youth\"],[\"Enhance broadband infrastructure in vulnerable areas\",\"https://www.usda.gov/sustainability/infrastructure/broadband/reconnect-loan-and-grant-program\"],[\"Improve public transportation for evacuation\",\"https://www.transit.dot.gov/emergency-preparedness\"],[\"Fund health insurance enrollment outreach\",\"https://www.coveredca.com/\"],[\"Enhance language services for Hispanic community\",\"https://rems.ed.gov/docs/SpanishLanguageResourceList_English_508C.pdf\"],[\"Address social vulnerability in disaster planning\",\"https://www.fcc.gov/MultilingualAlerting_EAS-WEA\"],[\"Ensure Asian community disaster response inclusivity\",\"https://www.ready.gov/asia-american-pacific-islander\"]],\"Monterey\":[[\"Establish youth-oriented disaster education\",\"https://sparkyschoolhouse.org/\"],[\"Improve broadband infrastructure\",\"https://www.usda.gov/sustainability/infrastructure/broadband/reconnect-loan-and-grant-program\"],[\"Increase public transportation evacuation options\",\"https://www.transit.dot.gov/emergency-preparedness\"],[\"Implement poverty alleviation initiatives\",\"https://www.csd.ca.gov/Pages/CSBGProgram.aspx\"],[\"Enhance Asian community outreach\",\"https://www.ready.gov/asia-american-pacific-islander\"],[\"Prioritize Hispanic community disaster response\",\"https://rems.ed.gov/docs/SpanishLanguageResourceList_English_508C.pdf\"],[\"Improve SVI through targeted programs\",\"https://www.fcc.gov/MultilingualAlerting_EAS-WEA\"]]}"));}}),
"[project]/components/InfoSidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InfoSidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudSun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-sun.js [app-client] (ecmascript) <export default as CloudSun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-rain.js [app-client] (ecmascript) <export default as CloudRain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$snow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudSnow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-snow.js [app-client] (ecmascript) <export default as CloudSnow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$demographic_results$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/components/result/demographic_results.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$suggestions_results$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/components/result/suggestions_results.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
// Map of cities to their corresponding counties
const cityToCountyMap = {
    "Yolo County, CA": "Yolo",
    "Los Angeles County, CA": "Los Angeles",
    "Monterey County, CA": "Monterey",
    "Shasta County, CA": "Shasta",
    "Kern County, CA": "Kern",
    "Riverside County, CA": "Riverside"
};
// Weather condition mapping based on temperature and precipitation
const getWeatherCondition = (temp, precip)=>{
    if (precip > 0) {
        if (temp < 0) return "Snowy";
        return "Rainy";
    }
    if (temp > 25) return "Sunny";
    if (temp > 20) return "Partly Cloudy";
    if (temp > 15) return "Cloudy";
    if (temp > 10) return "Mostly Cloudy";
    return "Cold";
};
// Default suggestions in case the county data is not available
const defaultSuggestions = [
    [
        "Increase emergency response training",
        "https://www.fema.gov/emergency-managers/individuals-communities/youth"
    ],
    [
        "Enhance community outreach programs",
        "https://thesocialchangeagency.org/blog/community-outreach-done-right-tips-for-charities-and-funders/"
    ],
    [
        "Improve multilingual communication",
        "https://www.fcc.gov/MultilingualAlerting_EAS-WEA"
    ],
    [
        "Boost volunteer recruitment",
        "https://www.redcross.org/volunteer/become-a-volunteer.html"
    ],
    [
        "Expand disaster preparedness education",
        "https://www.ready.gov/plan"
    ]
];
// Add a helper function to format temperature
const formatTemperature = (temp)=>{
    if (temp === null || temp === undefined || isNaN(temp)) {
        return "N/A";
    }
    return `${Math.round(temp)}°C`;
};
// Add a function to get the appropriate weather icon
const getWeatherIcon = (condition, size = 24)=>{
    const iconProps = {
        size,
        strokeWidth: 1.5,
        className: "weather-icon"
    };
    switch(condition.toLowerCase()){
        case "sunny":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                ...iconProps,
                className: "weather-icon sunny"
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 85,
                columnNumber: 14
            }, this);
        case "partly cloudy":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudSun$3e$__["CloudSun"], {
                ...iconProps,
                className: "weather-icon cloudy"
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 87,
                columnNumber: 14
            }, this);
        case "cloudy":
        case "mostly cloudy":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                ...iconProps,
                className: "weather-icon cloudy"
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 90,
                columnNumber: 14
            }, this);
        case "rainy":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__["CloudRain"], {
                ...iconProps,
                className: "weather-icon rainy"
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 92,
                columnNumber: 14
            }, this);
        case "snowy":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$snow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudSnow$3e$__["CloudSnow"], {
                ...iconProps,
                className: "weather-icon snowy"
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 94,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                ...iconProps,
                className: "weather-icon cloudy"
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 96,
                columnNumber: 14
            }, this);
    }
};
function InfoSidebar({ selectedCity, visible = false, onTakeAction }) {
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleSuggestions, setVisibleSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("info");
    const [isScrollable, setIsScrollable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAtBottom, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [allSuggestionsShown, setAllSuggestionsShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [weatherData, setWeatherData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [weatherLoading, setWeatherLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [weatherError, setWeatherError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check if the selected city is one of our predefined cities
    const isKnownCity = selectedCity && Object.keys(cityToCountyMap).includes(selectedCity);
    // Get the county name for the selected city
    const countyName = isKnownCity ? cityToCountyMap[selectedCity] : null;
    // Get the demographic data for the county
    const countyData = countyName ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$demographic_results$2e$json__$28$json$29$__["default"][countyName] : null;
    // Get the suggestions data for the county, with fallback to default suggestions
    const countySuggestions = countyName && __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$suggestions_results$2e$json__$28$json$29$__["default"][countyName] ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$suggestions_results$2e$json__$28$json$29$__["default"][countyName] : defaultSuggestions;
    // Get the race data from the demographic data
    const raceData = countyData?.top_3_race ? Object.entries(countyData.top_3_race).map(([name, percentage])=>({
            name,
            percentage: `${percentage}%`
        })).sort((a, b)=>{
        const aPercent = parseFloat(a.percentage.replace('%', ''));
        const bPercent = parseFloat(b.percentage.replace('%', ''));
        return bPercent - aPercent;
    }) : null;
    // Reset states when location changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfoSidebar.useEffect": ()=>{
            setVisibleSuggestions([]);
            setAllSuggestionsShown(false);
            setIsLoading(false);
        }
    }["InfoSidebar.useEffect"], [
        selectedCity
    ]);
    // Handle tab changes and suggestion reveals
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfoSidebar.useEffect": ()=>{
            if (isKnownCity && activeTab === "suggestions" && !allSuggestionsShown) {
                // Only start loading if we haven't shown all suggestions yet
                if (visibleSuggestions.length < countySuggestions.length) {
                    setIsLoading(true);
                    const timer = setTimeout({
                        "InfoSidebar.useEffect.timer": ()=>{
                            setVisibleSuggestions({
                                "InfoSidebar.useEffect.timer": (prev)=>{
                                    const nextIndex = prev.length;
                                    const newSuggestions = [
                                        ...prev,
                                        nextIndex
                                    ];
                                    // Check if we've shown all suggestions
                                    if (newSuggestions.length === countySuggestions.length) {
                                        setAllSuggestionsShown(true);
                                    }
                                    setIsLoading(false);
                                    return newSuggestions;
                                }
                            }["InfoSidebar.useEffect.timer"]);
                        }
                    }["InfoSidebar.useEffect.timer"], 2000);
                    return ({
                        "InfoSidebar.useEffect": ()=>clearTimeout(timer)
                    })["InfoSidebar.useEffect"];
                }
            }
        }
    }["InfoSidebar.useEffect"], [
        isKnownCity,
        activeTab,
        visibleSuggestions.length,
        countySuggestions.length,
        allSuggestionsShown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfoSidebar.useEffect": ()=>{
            if (visible) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        }
    }["InfoSidebar.useEffect"], [
        visible
    ]);
    // Add scroll detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfoSidebar.useEffect": ()=>{
            const checkScrollable = {
                "InfoSidebar.useEffect.checkScrollable": ()=>{
                    const container = document.querySelector('.suggestions-container');
                    if (container) {
                        const isScrollableNow = container.scrollHeight > container.clientHeight;
                        setIsScrollable(isScrollableNow);
                        // Check if we're at the bottom
                        const isAtBottomNow = Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 10;
                        setIsAtBottom(isAtBottomNow);
                    }
                }
            }["InfoSidebar.useEffect.checkScrollable"];
            // Check initially
            checkScrollable();
            // Add scroll event listener
            const container = document.querySelector('.suggestions-container');
            if (container) {
                container.addEventListener('scroll', checkScrollable);
            }
            // Add resize observer
            const resizeObserver = new ResizeObserver(checkScrollable);
            if (container) {
                resizeObserver.observe(container);
            }
            return ({
                "InfoSidebar.useEffect": ()=>{
                    if (container) {
                        container.removeEventListener('scroll', checkScrollable);
                        resizeObserver.unobserve(container);
                    }
                }
            })["InfoSidebar.useEffect"];
        }
    }["InfoSidebar.useEffect"], [
        visibleSuggestions,
        activeTab
    ]);
    const handleScrollClick = ()=>{
        const container = document.querySelector('.suggestions-container');
        if (container) {
            const currentScroll = container.scrollTop;
            const targetScroll = currentScroll + container.clientHeight * 0.8;
            container.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
        }
    };
    // Fetch weather data when county changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfoSidebar.useEffect": ()=>{
            const fetchWeatherData = {
                "InfoSidebar.useEffect.fetchWeatherData": async ()=>{
                    if (!countyName) {
                        setWeatherData(null);
                        return;
                    }
                    setWeatherLoading(true);
                    setWeatherError(null);
                    try {
                        const response = await fetch(`http://localhost:8000/api/weather/${countyName}`);
                        if (!response.ok) {
                            throw new Error(`Weather data not found for ${countyName}`);
                        }
                        const data = await response.json();
                        setWeatherData(data);
                    } catch (error) {
                        setWeatherError(error instanceof Error ? error.message : 'Failed to fetch weather data');
                        setWeatherData(null);
                    } finally{
                        setWeatherLoading(false);
                    }
                }
            }["InfoSidebar.useEffect.fetchWeatherData"];
            fetchWeatherData();
        }
    }["InfoSidebar.useEffect"], [
        countyName
    ]);
    const renderNoDataMessage = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-center text-slate-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-medium",
                    children: "Data not available"
                }, void 0, false, {
                    fileName: "[project]/components/InfoSidebar.tsx",
                    lineNumber: 262,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm",
                    children: "We currently only have data for Yolo County, Los Angeles County, Monterey County, and Shasta County."
                }, void 0, false, {
                    fileName: "[project]/components/InfoSidebar.tsx",
                    lineNumber: 263,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/InfoSidebar.tsx",
            lineNumber: 261,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-70c96d8198dd6581" + " " + `fixed rounded-2xl right-0 top-2 z-20 w-full max-w-md transform bg-white shadow-lg transition-transform duration-300 ease-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "70c96d8198dd6581",
                children: '.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}@keyframes wiggle{0%,to{transform:scale(1);box-shadow:0 0 20px #f9731666}50%{transform:scale(1.02);box-shadow:0 0 30px #f9731680}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(0)translate(-50%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:translateY(-15%)translate(-50%)}}@keyframes sunPulse{0%,to{transform:scale(1);box-shadow:0 0 20px #f9731666}50%{transform:scale(1.1);box-shadow:0 0 30px #f9731699}}@keyframes cloudFloat{0%,to{transform:translate(0)translateY(0)}25%{transform:translate(-5px)translateY(-2px)}75%{transform:translate(5px)translateY(2px)}}@keyframes rainDrop{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(10px)}}@keyframes snowFall{0%{opacity:0;transform:translateY(-10px)rotate(0)}to{opacity:1;transform:translateY(10px)rotate(360deg)}}.animate-bounce{animation:2s infinite bounce}.weather-icon{transition:all .3s}.weather-icon.sunny{color:#f97316;animation:3s infinite sunPulse}.weather-icon.cloudy{color:#64748b;animation:4s infinite cloudFloat}.weather-icon.rainy{color:#475569;animation:4s infinite cloudFloat}.weather-icon.snowy{color:#94a3b8;animation:4s infinite cloudFloat}.rain-drops{pointer-events:none;width:100%;height:100%;position:absolute}.rain-drop{background:#60a5fa;width:2px;height:10px;animation:1s infinite rainDrop;position:absolute}.snow-flake{background:#f8fafc;border-radius:50%;width:4px;height:4px;animation:2s infinite snowFall;position:absolute}.glass-card{backdrop-filter:blur(10px);background:#ffffffb3;border:1px solid #fff3;box-shadow:0 8px 32px #0000001a}.weather-display{background:linear-gradient(135deg,#6ea5ff 0%,#ffa071 100%);position:relative;overflow:hidden}.weather-display:before{content:"";pointer-events:none;background:radial-gradient(circle,#fff3 0%,#0000 80%);position:absolute;inset:0}.floating-particles{pointer-events:none;width:100%;height:100%;position:absolute}.particle{background:#ffffff4d;border-radius:50%;animation:20s linear infinite float;position:absolute}@keyframes float{0%{transform:translateY(0)rotate(0)}to{transform:translateY(-100vh)rotate(360deg)}}.temp-value{background:linear-gradient(135deg,#ff6b6b 0%,#4ecdc4 100%);-webkit-text-fill-color:transparent;text-shadow:2px 2px 4px #0000001a;-webkit-background-clip:text}.metric-card{transition:all .3s}.metric-card:hover{transform:translateY(-5px);box-shadow:0 10px 20px #0000001a}.metric-value{background:linear-gradient(135deg,#2c3e50 0%,#3498db 100%);-webkit-text-fill-color:transparent;-webkit-background-clip:text}'
            }, void 0, false, void 0, this),
            visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                className: "absolute -left-10 top-4 hidden rounded-l-md rounded-r-none bg-white shadow-md transition-all duration-300 hover:bg-orange-50 hover:shadow-orange-100 md:flex group",
                onClick: ()=>setSidebarOpen(!sidebarOpen),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: `h-5 w-5 transition-all duration-300 ease-out 
              ${!sidebarOpen ? "rotate-180" : ""} 
              group-hover:scale-110 group-hover:text-orange-500`
                }, void 0, false, {
                    fileName: "[project]/components/InfoSidebar.tsx",
                    lineNumber: 479,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 473,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                defaultValue: "info",
                onValueChange: setActiveTab,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        className: "sticky top-0 z-10 grid w-full grid-cols-3 bg-white rounded-t-2xl p-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "info",
                                className: "group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200  data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 data-[state=active]:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-[0.98] data-[state=active]:animate-[wiggle_1s_ease-in-out_infinite]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        className: "h-4 w-4 transition-transform duration-200 data-[state=active]:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 495,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-70c96d8198dd6581" + " " + "font-medium",
                                        children: "Info"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoSidebar.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "weather",
                                className: "group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200  data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 data-[state=active]:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-[0.98] data-[state=active]:animate-[wiggle_1s_ease-in-out_infinite]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                                        className: "h-4 w-4 transition-transform duration-200 data-[state=active]:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-70c96d8198dd6581" + " " + "font-medium",
                                        children: "Weather"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoSidebar.tsx",
                                lineNumber: 498,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "suggestions",
                                className: "group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200  data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 data-[state=active]:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-[0.98] data-[state=active]:animate-[wiggle_1s_ease-in-out_infinite]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                        className: "h-4 w-4 transition-transform duration-200 data-[state=active]:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-70c96d8198dd6581" + " " + "font-medium",
                                        children: "Suggestions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoSidebar.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoSidebar.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-70c96d8198dd6581" + " " + "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "info",
                                className: " mt-0 transform transition-all duration-200 data-[state=inactive]:opacity-0 data-[state=active]:animate-in data-[state=inactive]:animate-out",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "overflow-hidden border-1 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "sticky top-0 z-10 pb-2 bg-gradient-to-r from-orange-50 to-amber-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2 text-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-70c96d8198dd6581" + " " + "rounded-full bg-white p-2 shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "h-5 w-5 text-orange-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-70c96d8198dd6581" + " " + "flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-70c96d8198dd6581" + " " + "text-slate-700",
                                                                children: selectedCity || "Location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 530,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-70c96d8198dd6581" + " " + "text-sm font-normal text-slate-500",
                                                                children: countyName ? `${countyName} County` : "Select a location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide",
                                            children: !isKnownCity ? renderNoDataMessage() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-70c96d8198dd6581" + " " + "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-70c96d8198dd6581" + " " + "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-70c96d8198dd6581" + " " + "font-medium text-slate-700 flex items-center gap-2 mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-70c96d8198dd6581" + " " + "h-2 w-2 rounded-full bg-orange-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                        lineNumber: 541,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Top 3 Races"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-70c96d8198dd6581" + " " + "space-y-2",
                                                                children: raceData?.map((race, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-70c96d8198dd6581" + " " + "group relative overflow-hidden rounded-lg bg-slate-50 p-3 transition-all duration-300 hover:bg-orange-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-70c96d8198dd6581" + " " + "flex items-center justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-70c96d8198dd6581" + " " + "flex items-center gap-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "jsx-70c96d8198dd6581" + " " + "flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-medium text-slate-700 shadow-sm",
                                                                                                children: index + 1
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                                lineNumber: 552,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "jsx-70c96d8198dd6581" + " " + "font-medium text-slate-800",
                                                                                                children: race.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                                lineNumber: 555,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                                        lineNumber: 551,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "jsx-70c96d8198dd6581" + " " + "font-semibold text-orange-600",
                                                                                        children: race.percentage
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                                        lineNumber: 557,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                lineNumber: 550,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    width: race.percentage
                                                                                },
                                                                                className: "jsx-70c96d8198dd6581" + " " + "absolute bottom-0 left-0 h-1 bg-orange-200 transition-all duration-300 group-hover:bg-orange-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                lineNumber: 559,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                        lineNumber: 546,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-70c96d8198dd6581" + " " + "grid grid-cols-2 gap-4",
                                                        children: [
                                                            {
                                                                label: "Population",
                                                                value: countyData?.total_pop.toLocaleString()
                                                            },
                                                            {
                                                                label: "Median Income",
                                                                value: countyData ? `$${countyData.median_income.toLocaleString()}` : "N/A"
                                                            },
                                                            {
                                                                label: "Avg. Household Size",
                                                                value: countyData ? `${countyData.avg_household_size} people` : "N/A"
                                                            },
                                                            {
                                                                label: "Poverty Rate",
                                                                value: countyData ? `${countyData.poverty_pct}%` : "N/A"
                                                            },
                                                            {
                                                                label: "Homeless Population",
                                                                value: countyData ? countyData.total_homeless.toLocaleString() : "N/A"
                                                            }
                                                        ].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-70c96d8198dd6581" + " " + "group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:from-orange-50 hover:to-white",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "jsx-70c96d8198dd6581" + " " + "text-sm font-medium text-slate-500",
                                                                        children: stat.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                        lineNumber: 581,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-70c96d8198dd6581" + " " + "mt-1 text-2xl font-bold text-slate-800",
                                                                        children: stat.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                        lineNumber: 582,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-70c96d8198dd6581" + " " + "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-200 to-amber-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                        lineNumber: 585,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-70c96d8198dd6581" + " " + "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-70c96d8198dd6581" + " " + "font-medium text-slate-700 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-70c96d8198dd6581" + " " + "h-2 w-2 rounded-full bg-orange-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                        lineNumber: 593,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Additional Metrics"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-70c96d8198dd6581" + " " + "grid grid-cols-2 gap-4",
                                                                children: [
                                                                    {
                                                                        label: "Limited English",
                                                                        value: countyData ? `${countyData.eng_less_than_very_well_pct}%` : "N/A"
                                                                    },
                                                                    {
                                                                        label: "Social Vulnerability",
                                                                        value: countyData ? countyData.svi.toFixed(2) : "N/A"
                                                                    }
                                                                ].map((metric, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-70c96d8198dd6581" + " " + "group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-white p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:from-orange-50 hover:to-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "jsx-70c96d8198dd6581" + " " + "text-sm font-medium text-slate-500",
                                                                                children: metric.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                lineNumber: 605,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-70c96d8198dd6581" + " " + "mt-1 text-lg font-semibold text-slate-800",
                                                                                children: metric.value
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                lineNumber: 606,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                        lineNumber: 601,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 596,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                lineNumber: 537,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 535,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 523,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/InfoSidebar.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "weather",
                                className: "mt-0 transform transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-70c96d8198dd6581" + " " + "weather-display rounded-2xl p-6 relative min-h-[500px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-70c96d8198dd6581" + " " + "floating-particles",
                                            children: [
                                                ...Array(20)
                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        left: `${Math.random() * 100}%`,
                                                        width: `${Math.random() * 10 + 5}px`,
                                                        height: `${Math.random() * 10 + 5}px`,
                                                        animationDelay: `${Math.random() * 20}s`,
                                                        opacity: Math.random() * 0.5
                                                    },
                                                    className: "jsx-70c96d8198dd6581" + " " + "particle"
                                                }, i, false, {
                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 625,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-70c96d8198dd6581" + " " + "relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-70c96d8198dd6581" + " " + "flex items-center justify-between mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-70c96d8198dd6581" + " " + "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        scale: 0
                                                                    },
                                                                    animate: {
                                                                        scale: 1
                                                                    },
                                                                    transition: {
                                                                        type: "spring",
                                                                        stiffness: 200,
                                                                        damping: 10
                                                                    },
                                                                    className: "rounded-full bg-white/30 p-3 backdrop-blur-md",
                                                                    children: getWeatherIcon(getWeatherCondition(weatherData?.current_temp || 0, weatherData?.precip || 0), 32)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 646,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-70c96d8198dd6581",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                            className: "jsx-70c96d8198dd6581" + " " + "text-white text-2xl font-semibold",
                                                                            children: "Current Weather"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 655,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-70c96d8198dd6581" + " " + "text-white/80",
                                                                            children: selectedCity
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 656,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 654,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 645,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-70c96d8198dd6581" + " " + "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-70c96d8198dd6581" + " " + "text-white/80 text-sm",
                                                                    children: "Last Updated"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 660,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-70c96d8198dd6581" + " " + "text-white font-medium",
                                                                    children: weatherData?.date || 'N/A'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.2
                                                    },
                                                    className: "glass-card rounded-3xl p-8 mb-8 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-70c96d8198dd6581",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-70c96d8198dd6581" + " " + "flex items-end gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "jsx-70c96d8198dd6581" + " " + "temp-value text-7xl font-bold",
                                                                            children: [
                                                                                formatTemperature(weatherData?.current_temp).replace('°C', ''),
                                                                                "°"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 674,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-70c96d8198dd6581" + " " + "text-4xl font-light text-slate-600 mb-2",
                                                                            children: "C"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 677,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 673,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-70c96d8198dd6581" + " " + "text-xl text-slate-600 mt-2",
                                                                    children: getWeatherCondition(weatherData?.current_temp || 0, weatherData?.precip || 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 672,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-70c96d8198dd6581" + " " + "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-70c96d8198dd6581" + " " + "text-slate-500",
                                                                    children: "Feels like"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 684,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-70c96d8198dd6581" + " " + "text-3xl font-semibold text-slate-700",
                                                                    children: formatTemperature(weatherData?.feels_like)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                    lineNumber: 666,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-70c96d8198dd6581" + " " + "grid grid-cols-3 gap-4",
                                                    children: [
                                                        {
                                                            label: "High",
                                                            value: formatTemperature(weatherData?.t_max),
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                                className: "text-red-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 697,
                                                                columnNumber: 29
                                                            }, this),
                                                            color: "from-red-500/10 to-orange-500/10"
                                                        },
                                                        {
                                                            label: "Low",
                                                            value: formatTemperature(weatherData?.t_min),
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                                className: "text-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 703,
                                                                columnNumber: 29
                                                            }, this),
                                                            color: "from-blue-500/10 to-cyan-500/10"
                                                        },
                                                        {
                                                            label: "Humidity",
                                                            value: `${Math.round(weatherData?.humidity || 0)}%`,
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                                className: "text-sky-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 29
                                                            }, this),
                                                            color: "from-sky-500/10 to-blue-500/10"
                                                        },
                                                        {
                                                            label: "Wind",
                                                            value: `${weatherData?.wind_max || 0} km/h`,
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                                                className: "text-teal-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 715,
                                                                columnNumber: 29
                                                            }, this),
                                                            color: "from-teal-500/10 to-green-500/10"
                                                        },
                                                        {
                                                            label: "Gust",
                                                            value: `${weatherData?.gust_max || 0} km/h`,
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                                                className: "text-emerald-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 721,
                                                                columnNumber: 29
                                                            }, this),
                                                            color: "from-emerald-500/10 to-teal-500/10"
                                                        },
                                                        {
                                                            label: "Precip.",
                                                            value: `${weatherData?.precip || 0} mm`,
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-70c96d8198dd6581" + " " + "text-xl",
                                                                children: "🌧️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 727,
                                                                columnNumber: 29
                                                            }, this),
                                                            color: "from-indigo-500/10 to-purple-500/10",
                                                            className: "text-[0.95rem]"
                                                        }
                                                    ].map((metric, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 20
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            transition: {
                                                                delay: 0.3 + index * 0.1
                                                            },
                                                            className: `metric-card glass-card rounded-2xl p-4 bg-gradient-to-br ${metric.color}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-70c96d8198dd6581" + " " + "flex items-center gap-2 mb-2",
                                                                    children: [
                                                                        metric.icon,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-70c96d8198dd6581" + " " + `text-slate-600 font-medium ${metric.className || ''}`,
                                                                            children: metric.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 741,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-70c96d8198dd6581" + " " + "metric-value text-2xl font-bold",
                                                                    children: metric.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 743,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 642,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 623,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/InfoSidebar.tsx",
                                lineNumber: 619,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "suggestions",
                                className: "mt-0 transform transition-all duration-200 data-[state=inactive]:opacity-0 data-[state=active]:animate-in data-[state=inactive]:animate-out",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-1 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "pb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2 text-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-70c96d8198dd6581" + " " + "rounded-full bg-gradient-to-r from-orange-50 to-amber-50 p-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                            className: "h-5 w-5 text-orange-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 759,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 758,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-70c96d8198dd6581",
                                                        children: "Suggestions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 761,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                lineNumber: 757,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 756,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "relative",
                                            children: !isKnownCity ? renderNoDataMessage() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-70c96d8198dd6581" + " " + "suggestions-container space-y-4 max-h-[400px] overflow-y-auto scrollbar-hide relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-70c96d8198dd6581" + " " + "space-y-4",
                                                            children: countySuggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-70c96d8198dd6581",
                                                                    children: visibleSuggestions.includes(index) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            animation: 'slideIn 0.5s ease-out'
                                                                        },
                                                                        className: "jsx-70c96d8198dd6581" + " " + "rounded-lg border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm transition-all duration-500 hover:shadow-md hover:border-orange-200 hover:from-orange-50 hover:to-white",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-70c96d8198dd6581" + " " + "flex items-start gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-70c96d8198dd6581" + " " + "mt-1 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 p-2 shadow-inner transition-transform duration-300 group-hover:scale-110",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                                                        className: "h-5 w-5 text-orange-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                                        lineNumber: 780,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                                    lineNumber: 779,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-70c96d8198dd6581" + " " + "flex-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "jsx-70c96d8198dd6581" + " " + "font-medium text-slate-800 text-lg mb-2",
                                                                                            children: suggestion[0]
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                                            lineNumber: 783,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-70c96d8198dd6581" + " " + "flex gap-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                    variant: "outline",
                                                                                                    size: "sm",
                                                                                                    className: "h-8 px-4 bg-white hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors duration-300",
                                                                                                    onClick: ()=>{
                                                                                                        if (onTakeAction && countyName) {
                                                                                                            console.log("Take Action clicked for county:", countyName);
                                                                                                            onTakeAction(countyName);
                                                                                                        } else {
                                                                                                            console.log("Take Action clicked but onTakeAction or countyName is missing", {
                                                                                                                onTakeAction,
                                                                                                                countyName
                                                                                                            });
                                                                                                        }
                                                                                                    },
                                                                                                    children: "Take Action"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                                                    lineNumber: 785,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                    variant: "ghost",
                                                                                                    size: "sm",
                                                                                                    className: "h-8 px-4 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-300",
                                                                                                    onClick: ()=>window.open(suggestion[1], '_blank'),
                                                                                                    children: "Learn More"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                                                    lineNumber: 800,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                                            lineNumber: 784,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                                    lineNumber: 782,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 778,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                        lineNumber: 772,
                                                                        columnNumber: 31
                                                                    }, this) : index === visibleSuggestions.length && !allSuggestionsShown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>{
                                                                            if (!isLoading) {
                                                                                setIsLoading(true);
                                                                                setTimeout(()=>{
                                                                                    setVisibleSuggestions((prev)=>{
                                                                                        const newSuggestions = [
                                                                                            ...prev,
                                                                                            index
                                                                                        ];
                                                                                        if (newSuggestions.length === countySuggestions.length) {
                                                                                            setAllSuggestionsShown(true);
                                                                                        }
                                                                                        return newSuggestions;
                                                                                    });
                                                                                    setIsLoading(false);
                                                                                }, 2000);
                                                                            }
                                                                        },
                                                                        className: "jsx-70c96d8198dd6581" + " " + "rounded-lg border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm cursor-pointer hover:shadow-md hover:border-orange-200 transition-all duration-300",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-70c96d8198dd6581" + " " + "flex h-[90px] items-center justify-center",
                                                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-70c96d8198dd6581" + " " + "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-70c96d8198dd6581" + " " + "absolute -inset-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 opacity-50 blur-lg animate-pulse"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                                        lineNumber: 834,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                        className: "h-8 w-8 animate-spin text-orange-500 relative"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                                        lineNumber: 835,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                lineNumber: 833,
                                                                                columnNumber: 37
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-70c96d8198dd6581" + " " + "text-slate-400 flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                                                        className: "h-5 w-5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                                        lineNumber: 839,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "jsx-70c96d8198dd6581",
                                                                                        children: "Click to reveal next suggestion"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                                        lineNumber: 840,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                lineNumber: 838,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 831,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                                        lineNumber: 813,
                                                                        columnNumber: 31
                                                                    }, this) : null
                                                                }, index, false, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 768,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 21
                                                    }, this),
                                                    isScrollable && !isAtBottom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    opacity: isScrollable && !isAtBottom ? '1' : '0'
                                                                },
                                                                className: "jsx-70c96d8198dd6581" + " " + "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none -z-10 transition-opacity duration-300 ease-in-out backdrop-blur-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 852,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleScrollClick,
                                                                style: {
                                                                    opacity: isScrollable && !isAtBottom ? '1' : '0',
                                                                    transform: `translate(-50%, ${isScrollable && !isAtBottom ? '0' : '10px'})`
                                                                },
                                                                "aria-label": "Scroll down",
                                                                className: "jsx-70c96d8198dd6581" + " " + "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer group z-20 transition-all duration-300 ease-in-out animate-bounce",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-70c96d8198dd6581" + " " + "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-70c96d8198dd6581" + " " + "absolute inset-0 bg-orange-200 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 868,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-70c96d8198dd6581" + " " + "bg-white rounded-full p-2 shadow-lg transition-all duration-300 group-hover:bg-orange-50 group-hover:shadow-orange-100 relative",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                className: "jsx-70c96d8198dd6581" + " " + "w-5 h-5 text-orange-500 transition-transform duration-300 group-hover:translate-y-0.5",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "M19 9l-7 7-7-7",
                                                                                    className: "jsx-70c96d8198dd6581"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                                    lineNumber: 877,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                lineNumber: 870,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 869,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 867,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                lineNumber: 858,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 764,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 755,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/InfoSidebar.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoSidebar.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoSidebar.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, this);
}
_s(InfoSidebar, "DxkPeFP+zz7zhzR6p3YsPMPOSD8=");
_c = InfoSidebar;
var _c;
__turbopack_context__.k.register(_c, "InfoSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/result/weather_results.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"Yolo\":{\"date\":\"2025-04-20\",\"t_max\":25.5,\"t_min\":7.8,\"precip\":0.0,\"wind_max\":17.8,\"gust_max\":22.7,\"current_temp\":8.0,\"feels_like\":6.3,\"humidity\":97},\"Riverside\":{\"date\":\"2025-04-20\",\"t_max\":25.9,\"t_min\":15.2,\"precip\":0.0,\"wind_max\":17.3,\"gust_max\":18.4,\"current_temp\":15.4,\"feels_like\":10.7,\"humidity\":10},\"Kern\":{\"date\":\"2025-04-20\",\"t_max\":27.6,\"t_min\":12.5,\"precip\":0.0,\"wind_max\":15.5,\"gust_max\":24.5,\"current_temp\":13.0,\"feels_like\":8.6,\"humidity\":27},\"Shasta\":{\"date\":\"2025-04-20\",\"t_max\":21.9,\"t_min\":9.8,\"precip\":0.0,\"wind_max\":13.5,\"gust_max\":24.8,\"current_temp\":9.9,\"feels_like\":5.9,\"humidity\":51},\"Los Angeles\":{\"date\":\"2025-04-20\",\"t_max\":18.6,\"t_min\":8.9,\"precip\":0.0,\"wind_max\":16.3,\"gust_max\":21.2,\"current_temp\":9.9,\"feels_like\":5.2,\"humidity\":33},\"Monterey\":{\"date\":\"2025-04-20\",\"t_max\":24.1,\"t_min\":9.0,\"precip\":0.0,\"wind_max\":15.7,\"gust_max\":17.3,\"current_temp\":9.5,\"feels_like\":7.0,\"humidity\":54}}"));}}),
"[project]/components/MapboxMap.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MapboxMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/InfoSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$weather_results$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/components/result/weather_results.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$demographic_results$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/components/result/demographic_results.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Initialize Mapbox
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1IjoiamFlc3V1bjAxIiwiYSI6ImNtOW9ycDJjMzB2bTAyanB5c2Q2YnRqeTQifQ.VDCCGfk_l8O2_I3sXd_V4Q") || '';
const CITY_COORDINATES = {
    "Yolo County, CA": {
        longitude: -121.7405,
        latitude: 38.5449,
        zoom: 11
    },
    "Los Angeles County, CA": {
        longitude: -118.2437,
        latitude: 34.0522,
        zoom: 10
    },
    "Monterey County, CA": {
        longitude: -121.8947,
        latitude: 36.6005,
        zoom: 11
    },
    "Shasta County, CA": {
        longitude: -122.3784,
        latitude: 40.5865,
        zoom: 10
    },
    "Kern County, CA": {
        longitude: -119.0195,
        latitude: 35.3434,
        zoom: 10
    },
    "Riverside County, CA": {
        longitude: -117.3874,
        latitude: 33.9534,
        zoom: 10
    }
};
// County FIPS codes for California
const COUNTY_FIPS = {
    "Yolo County, CA": "113",
    "Los Angeles County, CA": "037",
    "Monterey County, CA": "053",
    "Shasta County, CA": "089",
    "Kern County, CA": "029",
    "Riverside County, CA": "065"
};
// Calculate fire risk level based on weather and demographic data
const calculateFireRisk = (countyName)=>{
    const county = countyName.replace(", CA", "");
    const weather = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$weather_results$2e$json__$28$json$29$__["default"][county];
    const demographics = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$demographic_results$2e$json__$28$json$29$__["default"][county];
    if (!weather || !demographics) return 0;
    // Normalize and weight different risk factors
    const tempRisk = Math.min((weather.t_max - 15) / 20, 1); // Higher risk above 35°C
    const windRisk = Math.min((weather.wind_max + weather.gust_max) / 100, 1); // Higher risk with strong winds
    const precipRisk = Math.max(1 - weather.precip / 10, 0); // Lower risk with precipitation
    const sviRisk = demographics.svi; // Social Vulnerability Index (already 0-1)
    // Combine risk factors (weights can be adjusted)
    const totalRisk = tempRisk * 0.3 + windRisk * 0.3 + precipRisk * 0.2 + sviRisk * 0.2;
    return Math.min(Math.max(totalRisk, 0), 1);
};
// County GeoJSON data with more accurate shapes
const COUNTY_BOUNDARIES = {
    "Shasta County, CA": {
        type: "Feature",
        properties: {
            name: "Shasta County"
        },
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [
                        -122.9424,
                        41.1846
                    ],
                    [
                        -122.5972,
                        41.1998
                    ],
                    [
                        -121.8307,
                        41.1834
                    ],
                    [
                        -121.7082,
                        40.8940
                    ],
                    [
                        -121.6271,
                        40.4913
                    ],
                    [
                        -121.9183,
                        40.2766
                    ],
                    [
                        -122.3681,
                        40.1385
                    ],
                    [
                        -122.6826,
                        40.3824
                    ],
                    [
                        -122.9424,
                        41.1846
                    ] // Back to start
                ]
            ]
        }
    },
    "Los Angeles County, CA": {
        type: "Feature",
        properties: {
            name: "Los Angeles County"
        },
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [
                        -118.9429,
                        34.8180
                    ],
                    [
                        -118.1664,
                        34.8900
                    ],
                    [
                        -117.6551,
                        34.8235
                    ],
                    [
                        -117.6551,
                        34.0222
                    ],
                    [
                        -118.1555,
                        33.7032
                    ],
                    [
                        -118.4083,
                        33.7032
                    ],
                    [
                        -118.6831,
                        33.9037
                    ],
                    [
                        -118.8853,
                        34.0768
                    ],
                    [
                        -118.9429,
                        34.8180
                    ] // Back to start
                ]
            ]
        }
    },
    "Yolo County, CA": {
        type: "Feature",
        properties: {
            name: "Yolo County"
        },
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [
                        -122.1571,
                        38.8634
                    ],
                    [
                        -121.9073,
                        38.8525
                    ],
                    [
                        -121.7466,
                        38.8525
                    ],
                    [
                        -121.5914,
                        38.5796
                    ],
                    [
                        -121.4966,
                        38.3033
                    ],
                    [
                        -121.6847,
                        38.2924
                    ],
                    [
                        -121.8618,
                        38.2924
                    ],
                    [
                        -122.0460,
                        38.5796
                    ],
                    [
                        -122.1571,
                        38.8634
                    ] // Back to start
                ]
            ]
        }
    },
    "Monterey County, CA": {
        type: "Feature",
        properties: {
            name: "Monterey County"
        },
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [
                        -121.9073,
                        36.9107
                    ],
                    [
                        -121.4582,
                        36.9107
                    ],
                    [
                        -121.1429,
                        36.7305
                    ],
                    [
                        -120.8987,
                        36.3919
                    ],
                    [
                        -121.2473,
                        35.9079
                    ],
                    [
                        -121.4692,
                        35.7932
                    ],
                    [
                        -121.8508,
                        35.9189
                    ],
                    [
                        -121.9347,
                        36.3373
                    ],
                    [
                        -121.9073,
                        36.9107
                    ] // Back to start
                ]
            ]
        }
    },
    "Kern County, CA": {
        type: "Feature",
        properties: {
            name: "Kern County"
        },
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [
                        -119.9183,
                        35.7891
                    ],
                    [
                        -119.4424,
                        35.8998
                    ],
                    [
                        -118.9307,
                        35.8834
                    ],
                    [
                        -118.7082,
                        35.5940
                    ],
                    [
                        -118.4271,
                        35.2913
                    ],
                    [
                        -118.5183,
                        34.9766
                    ],
                    [
                        -119.1681,
                        34.8385
                    ],
                    [
                        -119.6826,
                        35.0824
                    ],
                    [
                        -119.9183,
                        35.7891
                    ] // Back to start
                ]
            ]
        }
    },
    "Riverside County, CA": {
        type: "Feature",
        properties: {
            name: "Riverside County"
        },
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [
                        -117.5,
                        34.0
                    ],
                    [
                        -117.1,
                        34.1
                    ],
                    [
                        -116.5,
                        34.1
                    ],
                    [
                        -115.5,
                        34.1
                    ],
                    [
                        -114.7,
                        34.3
                    ],
                    [
                        -114.6,
                        34.1
                    ],
                    [
                        -114.5,
                        33.8
                    ],
                    [
                        -114.7,
                        33.4
                    ],
                    [
                        -115.5,
                        33.2
                    ],
                    [
                        -116.1,
                        33.4
                    ],
                    [
                        -116.8,
                        33.4
                    ],
                    [
                        -117.2,
                        33.5
                    ],
                    [
                        -117.5,
                        33.7
                    ],
                    [
                        -117.6,
                        33.9
                    ],
                    [
                        -117.5,
                        34.0
                    ] // Back to start
                ]
            ]
        }
    }
};
// High-risk zones within counties
const HIGH_RISK_ZONES = {
    "Shasta County, CA": [
        {
            type: "Feature",
            properties: {
                name: "High Risk Zone 1",
                riskLevel: 0.9
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -122.5,
                            40.8
                        ],
                        [
                            -122.4,
                            40.85
                        ],
                        [
                            -122.3,
                            40.82
                        ],
                        [
                            -122.25,
                            40.78
                        ],
                        [
                            -122.3,
                            40.75
                        ],
                        [
                            -122.35,
                            40.72
                        ],
                        [
                            -122.4,
                            40.65
                        ],
                        [
                            -122.45,
                            40.68
                        ],
                        [
                            -122.5,
                            40.75
                        ],
                        [
                            -122.5,
                            40.8
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "High Risk Zone 2",
                riskLevel: 0.85
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -122.0,
                            40.7
                        ],
                        [
                            -121.95,
                            40.72
                        ],
                        [
                            -121.9,
                            40.68
                        ],
                        [
                            -121.85,
                            40.65
                        ],
                        [
                            -121.8,
                            40.62
                        ],
                        [
                            -121.85,
                            40.58
                        ],
                        [
                            -121.9,
                            40.55
                        ],
                        [
                            -121.95,
                            40.52
                        ],
                        [
                            -122.0,
                            40.55
                        ],
                        [
                            -122.0,
                            40.7
                        ]
                    ]
                ]
            }
        }
    ],
    "Los Angeles County, CA": [
        {
            type: "Feature",
            properties: {
                name: "High Risk Zone 1",
                riskLevel: 0.95
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -118.5,
                            34.5
                        ],
                        [
                            -118.45,
                            34.52
                        ],
                        [
                            -118.4,
                            34.48
                        ],
                        [
                            -118.35,
                            34.45
                        ],
                        [
                            -118.3,
                            34.42
                        ],
                        [
                            -118.35,
                            34.38
                        ],
                        [
                            -118.4,
                            34.35
                        ],
                        [
                            -118.45,
                            34.32
                        ],
                        [
                            -118.5,
                            34.35
                        ],
                        [
                            -118.5,
                            34.5
                        ]
                    ]
                ]
            }
        }
    ],
    "Yolo County, CA": [
        {
            type: "Feature",
            properties: {
                name: "High Risk Zone 1",
                riskLevel: 0.8
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -121.9,
                            38.7
                        ],
                        [
                            -121.85,
                            38.72
                        ],
                        [
                            -121.8,
                            38.68
                        ],
                        [
                            -121.75,
                            38.65
                        ],
                        [
                            -121.7,
                            38.62
                        ],
                        [
                            -121.75,
                            38.58
                        ],
                        [
                            -121.8,
                            38.55
                        ],
                        [
                            -121.85,
                            38.52
                        ],
                        [
                            -121.9,
                            38.55
                        ],
                        [
                            -121.9,
                            38.7
                        ]
                    ]
                ]
            }
        }
    ],
    "Monterey County, CA": [
        {
            type: "Feature",
            properties: {
                name: "High Risk Zone 1",
                riskLevel: 0.87
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -121.5,
                            36.5
                        ],
                        [
                            -121.45,
                            36.52
                        ],
                        [
                            -121.4,
                            36.48
                        ],
                        [
                            -121.35,
                            36.45
                        ],
                        [
                            -121.3,
                            36.42
                        ],
                        [
                            -121.35,
                            36.38
                        ],
                        [
                            -121.4,
                            36.35
                        ],
                        [
                            -121.45,
                            36.32
                        ],
                        [
                            -121.5,
                            36.35
                        ],
                        [
                            -121.5,
                            36.5
                        ]
                    ]
                ]
            }
        }
    ],
    "Kern County, CA": [
        {
            type: "Feature",
            properties: {
                name: "High Risk Zone 1",
                riskLevel: 0.92
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -119.5,
                            35.5
                        ],
                        [
                            -119.45,
                            35.52
                        ],
                        [
                            -119.4,
                            35.48
                        ],
                        [
                            -119.35,
                            35.45
                        ],
                        [
                            -119.3,
                            35.42
                        ],
                        [
                            -119.35,
                            35.38
                        ],
                        [
                            -119.4,
                            35.35
                        ],
                        [
                            -119.45,
                            35.32
                        ],
                        [
                            -119.5,
                            35.35
                        ],
                        [
                            -119.5,
                            35.5
                        ]
                    ]
                ]
            }
        }
    ],
    "Riverside County, CA": [
        {
            type: "Feature",
            properties: {
                name: "High Risk Zone 1",
                riskLevel: 0.88
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -117.0,
                            33.9
                        ],
                        [
                            -116.95,
                            33.92
                        ],
                        [
                            -116.9,
                            33.88
                        ],
                        [
                            -116.85,
                            33.85
                        ],
                        [
                            -116.8,
                            33.82
                        ],
                        [
                            -116.85,
                            33.78
                        ],
                        [
                            -116.9,
                            33.75
                        ],
                        [
                            -116.95,
                            33.72
                        ],
                        [
                            -117.0,
                            33.75
                        ],
                        [
                            -117.0,
                            33.9
                        ]
                    ]
                ]
            }
        }
    ]
};
function MapboxMap({ onCitySelect }) {
    _s();
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [searchInput, setSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const targetMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showInfoSidebar, setShowInfoSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showScreenshotPopup, setShowScreenshotPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [screenshotUrl, setScreenshotUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCapturingScreenshot, setIsCapturingScreenshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapboxMap.useEffect": ()=>{
            if (!mapContainer.current || map.current) return;
            const newMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [
                    -119.4179,
                    36.7783
                ],
                zoom: 5.5,
                preserveDrawingBuffer: true
            });
            // Add zoom controls to bottom right
            newMap.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl(), 'bottom-right');
            map.current = newMap;
            // Add markers once map is loaded
            newMap.on('load', {
                "MapboxMap.useEffect": ()=>{
                    // Calculate fire risk for all counties and add to features
                    const featuresWithRisk = Object.entries(COUNTY_BOUNDARIES).map({
                        "MapboxMap.useEffect.featuresWithRisk": ([cityName, feature])=>({
                                ...feature,
                                properties: {
                                    ...feature.properties,
                                    fireRisk: calculateFireRisk(cityName)
                                }
                            })
                    }["MapboxMap.useEffect.featuresWithRisk"]);
                    // Add county boundaries source first
                    newMap.addSource('counties', {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: featuresWithRisk
                        }
                    });
                    // Add high-risk zones source
                    newMap.addSource('high-risk-zones', {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: Object.values(HIGH_RISK_ZONES).flat()
                        }
                    });
                    // Add county fill layer first (underneath everything)
                    newMap.addLayer({
                        id: 'county-fill',
                        type: 'fill',
                        source: 'counties',
                        paint: {
                            'fill-color': 'rgba(255, 165, 0, 0.2)' // Light orange color with 20% opacity
                        }
                    });
                    // Add high-risk zones layer
                    newMap.addLayer({
                        id: 'high-risk-zones',
                        type: 'fill',
                        source: 'high-risk-zones',
                        paint: {
                            'fill-color': 'rgba(255, 0, 0, 0.4)',
                            'fill-outline-color': 'rgba(255, 0, 0, 0.8)'
                        }
                    });
                    // Add county boundaries layer on top
                    newMap.addLayer({
                        id: 'county-boundaries',
                        type: 'line',
                        source: 'counties',
                        paint: {
                            'line-color': '#FF6B35',
                            'line-width': 2,
                            'line-opacity': 0.67
                        }
                    });
                    // Initially hide all layers
                    newMap.setLayoutProperty('county-boundaries', 'visibility', 'none');
                    newMap.setLayoutProperty('county-fill', 'visibility', 'none');
                    newMap.setLayoutProperty('high-risk-zones', 'visibility', 'none');
                    // Add markers for each city
                    Object.entries(CITY_COORDINATES).forEach({
                        "MapboxMap.useEffect": ([cityName, coords])=>{
                            const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker().setLngLat([
                                coords.longitude,
                                coords.latitude
                            ]).addTo(newMap);
                            const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                                offset: 25
                            }).setHTML(`<h3 class="text-sm font-semibold">${cityName}</h3>`);
                            marker.setPopup(popup);
                            markersRef.current.push(marker);
                            marker.getElement().addEventListener('click', {
                                "MapboxMap.useEffect": ()=>{
                                    navigateToCity(cityName);
                                }
                            }["MapboxMap.useEffect"]);
                        }
                    }["MapboxMap.useEffect"]);
                }
            }["MapboxMap.useEffect"]);
            return ({
                "MapboxMap.useEffect": ()=>{
                    markersRef.current.forEach({
                        "MapboxMap.useEffect": (marker)=>marker.remove()
                    }["MapboxMap.useEffect"]);
                    targetMarkersRef.current.forEach({
                        "MapboxMap.useEffect": (marker)=>marker.remove()
                    }["MapboxMap.useEffect"]);
                    markersRef.current = [];
                    targetMarkersRef.current = [];
                    if (map.current) {
                        map.current.remove();
                        map.current = null;
                    }
                }
            })["MapboxMap.useEffect"];
        }
    }["MapboxMap.useEffect"], []);
    // Handle predefined city navigation
    const navigateToCity = (cityName)=>{
        if (!map.current) return;
        const coords = CITY_COORDINATES[cityName];
        setSelectedCity(cityName);
        setShowInfoSidebar(true);
        setIsCollapsed(true);
        if (onCitySelect) {
            onCitySelect(cityName);
        }
        // Clear any existing target markers
        targetMarkersRef.current.forEach((marker)=>marker.remove());
        targetMarkersRef.current = [];
        // Show the layers only for the selected county
        map.current.setLayoutProperty('county-boundaries', 'visibility', 'visible');
        map.current.setLayoutProperty('county-fill', 'visibility', 'visible');
        map.current.setLayoutProperty('high-risk-zones', 'visibility', 'visible');
        // Get the county name without ", CA" suffix
        const countyName = cityName.replace(', CA', '');
        // Calculate fire risk for the selected county
        const fireRisk = calculateFireRisk(cityName);
        // Update the source data to include fire risk
        const countyFeature = COUNTY_BOUNDARIES[cityName];
        if (countyFeature) {
            countyFeature.properties = {
                ...countyFeature.properties,
                fireRisk: fireRisk
            };
        }
        // Update source data to show only the selected county
        if (map.current.getSource('counties')) {
            map.current.getSource('counties').setData({
                type: 'FeatureCollection',
                features: [
                    countyFeature
                ]
            });
        }
        // Update high-risk zones to show only for selected county
        if (map.current.getSource('high-risk-zones')) {
            const countyRiskZones = HIGH_RISK_ZONES[cityName] || [];
            map.current.getSource('high-risk-zones').setData({
                type: 'FeatureCollection',
                features: countyRiskZones
            });
        }
        // Update filters to show only the selected county
        const filter = [
            '==',
            [
                'get',
                'name'
            ],
            countyName
        ];
        map.current.setFilter('county-boundaries', filter);
        map.current.setFilter('county-fill', filter);
        map.current.flyTo({
            center: [
                coords.longitude,
                coords.latitude
            ],
            zoom: coords.zoom,
            duration: 2000,
            essential: true
        });
    };
    // Handle general location search
    const handleSearch = async ()=>{
        if (!searchInput || !map.current) return;
        const searchTerm = searchInput.toLowerCase().trim();
        setIsLoading(true);
        // First check if it's one of our predefined cities
        const cityName = Object.keys(CITY_COORDINATES).find((city)=>city.toLowerCase().includes(searchTerm));
        if (cityName) {
            navigateToCity(cityName);
            setSearchInput('');
            setIsLoading(false);
            setTimeout(()=>{
                setIsCollapsed(true);
                setShowInfoSidebar(true);
            }, 300);
            return;
        }
        // If not a predefined city, hide all layers
        map.current.setLayoutProperty('county-boundaries', 'visibility', 'none');
        map.current.setLayoutProperty('county-fill', 'visibility', 'none');
        map.current.setLayoutProperty('high-risk-zones', 'visibility', 'none');
        // If not a predefined city, search using Mapbox Geocoding API
        try {
            const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchInput)}.json?access_token=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken}&limit=1`);
            const data = await response.json();
            if (data.features && data.features.length > 0) {
                const [longitude, latitude] = data.features[0].center;
                const placeName = data.features[0].place_name;
                setSelectedCity(placeName);
                if (onCitySelect) {
                    onCitySelect(placeName);
                }
                map.current.flyTo({
                    center: [
                        longitude,
                        latitude
                    ],
                    zoom: 13,
                    duration: 2000,
                    essential: true
                });
                setSearchInput('');
                setTimeout(()=>{
                    setIsCollapsed(true);
                    setShowInfoSidebar(true);
                }, 300);
            }
        } catch (error) {
            console.error('Error searching location:', error);
        } finally{
            setIsLoading(false);
        }
    };
    // Function to take a screenshot of the map
    const takeScreenshot = async ()=>{
        if (!map.current) return;
        setIsCapturingScreenshot(true);
        try {
            // Wait for the map to be fully rendered
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            // Force the map to render a frame
            map.current.triggerRepaint();
            // Get the map canvas
            const mapCanvas = map.current.getCanvas();
            // Create a new canvas with the same dimensions
            const canvas = document.createElement('canvas');
            canvas.width = mapCanvas.width;
            canvas.height = mapCanvas.height;
            // Get the context and draw the map canvas onto it
            const ctx = canvas.getContext('2d', {
                willReadFrequently: true
            });
            if (!ctx) {
                throw new Error('Could not get canvas context');
            }
            // Clear the canvas first
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw the map canvas
            ctx.drawImage(mapCanvas, 0, 0);
            // Convert to data URL
            const dataUrl = map.current.getCanvas().toDataURL('image/png');
            // Check if the data URL is valid (not blank)
            if (dataUrl === 'data:,') {
                throw new Error('Screenshot is blank. The map may not be fully rendered.');
            }
            setScreenshotUrl(dataUrl);
            setShowScreenshotPopup(true);
        } catch (error) {
            console.error('Error taking screenshot:', error);
            alert('Failed to capture screenshot. Please try again.');
        } finally{
            setIsCapturingScreenshot(false);
        }
    };
    // Function to save screenshot to computer
    const saveScreenshot = ()=>{
        if (!screenshotUrl) return;
        // Create a link element
        const link = document.createElement('a');
        link.href = screenshotUrl;
        link.download = `firesight-map-${new Date().toISOString().slice(0, 10)}.png`;
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // Close popup
        setShowScreenshotPopup(false);
    };
    // Function to handle email button click (placeholder for now)
    const handleEmailClick = ()=>{
        // This would be implemented later
        setShowScreenshotPopup(false);
    };
    // Function to generate a random point within a polygon
    const generateRandomPointInPolygon = (polygon)=>{
        console.log("Generating random point in polygon:", polygon);
        const coordinates = polygon.geometry.coordinates[0]; // Get the first ring of the polygon
        console.log("Polygon coordinates:", coordinates);
        const bounds = {
            minLng: Math.min(...coordinates.map((coord)=>coord[0])),
            maxLng: Math.max(...coordinates.map((coord)=>coord[0])),
            minLat: Math.min(...coordinates.map((coord)=>coord[1])),
            maxLat: Math.max(...coordinates.map((coord)=>coord[1]))
        };
        console.log("Polygon bounds:", bounds);
        // Generate a random point within the bounding box
        let point = [
            0,
            0
        ]; // Initialize with default values
        let isInside = false;
        let attempts = 0;
        const maxAttempts = 100; // Prevent infinite loops
        // Keep generating points until we find one inside the polygon
        while(!isInside && attempts < maxAttempts){
            const lng = bounds.minLng + Math.random() * (bounds.maxLng - bounds.minLng);
            const lat = bounds.minLat + Math.random() * (bounds.maxLat - bounds.minLat);
            point = [
                lng,
                lat
            ];
            // Check if the point is inside the polygon using ray casting algorithm
            isInside = isPointInPolygon(point, coordinates);
            attempts++;
        }
        if (!isInside) {
            console.warn("Failed to generate a point inside the polygon after", maxAttempts, "attempts. Using center point.");
            // Use the center of the bounding box as a fallback
            point = [
                (bounds.minLng + bounds.maxLng) / 2,
                (bounds.minLat + bounds.maxLat) / 2
            ];
        }
        console.log("Generated point:", point);
        return point;
    };
    // Ray casting algorithm to check if a point is inside a polygon
    const isPointInPolygon = (point, polygon)=>{
        const [x, y] = point;
        let inside = false;
        // Make sure we have a valid polygon
        if (!polygon || polygon.length < 3) {
            console.error("Invalid polygon:", polygon);
            return false;
        }
        for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
            const [xi, yi] = polygon[i];
            const [xj, yj] = polygon[j];
            // Check if the point is on the edge of the polygon
            if (yi === y && yj === y && (x >= xi && x <= xj || x >= xj && x <= xi)) {
                return true;
            }
            const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
            if (intersect) inside = !inside;
        }
        return inside;
    };
    // Function to add random targets within a county
    const addRandomTargets = (countyName)=>{
        console.log("addRandomTargets called with county:", countyName);
        if (!map.current) {
            console.error("Map is not initialized");
            return;
        }
        // Convert county name to the format used in COUNTY_BOUNDARIES
        const formattedCountyName = `${countyName} County, CA`;
        console.log("Looking for county with name:", formattedCountyName);
        // Get the county feature
        const countyFeature = COUNTY_BOUNDARIES[formattedCountyName];
        if (!countyFeature) {
            console.error("County feature not found for:", formattedCountyName);
            return;
        }
        console.log("County feature found:", countyFeature);
        // Clear existing target markers only
        console.log("Clearing existing target markers:", targetMarkersRef.current.length);
        targetMarkersRef.current.forEach((marker)=>marker.remove());
        targetMarkersRef.current = [];
        // Generate 4-8 random points within the county
        const numTargets = Math.floor(Math.random() * 5) + 4; // Random number between 4 and 8
        console.log("Generating", numTargets, "targets");
        const targets = [];
        for(let i = 0; i < numTargets; i++){
            const point = generateRandomPointInPolygon(countyFeature);
            targets.push(point);
            console.log("Generated target", i + 1, "at:", point);
        }
        // Add markers for each target
        targets.forEach((point, index)=>{
            console.log("Adding marker for target", index + 1, "at:", point);
            const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                color: '#FF4500',
                scale: 0.8
            }).setLngLat(point).addTo(map.current);
            const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                offset: 25
            }).setHTML(`<h3 class="text-sm font-semibold">Target ${index + 1}</h3>`);
            marker.setPopup(popup);
            targetMarkersRef.current.push(marker); // Add to target markers ref instead
        });
        // Zoom to the county
        const coords = CITY_COORDINATES[formattedCountyName];
        if (coords) {
            console.log("Zooming to county at:", coords);
            map.current.flyTo({
                center: [
                    coords.longitude,
                    coords.latitude
                ],
                zoom: coords.zoom,
                duration: 2000,
                essential: true
            });
        } else {
            console.error("Coordinates not found for county:", formattedCountyName);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center transition-all duration-300 ease-out
              ${isCollapsed ? 'w-12 scale-95' : 'w-[400px] bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100'}
              ${isCollapsed ? '' : 'px-4 py-2'}`,
                            children: !isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchInput,
                                        onChange: (e)=>setSearchInput(e.target.value),
                                        onKeyPress: (e)=>e.key === 'Enter' && handleSearch(),
                                        placeholder: "Search for any location...",
                                        className: "flex-1 bg-transparent text-slate-600 placeholder:text-slate-400 focus:outline-none",
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapboxMap.tsx",
                                        lineNumber: 815,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSearch,
                                                disabled: isLoading,
                                                className: `text-slate-600 text-base font-medium focus:outline-none disabled:text-slate-300 
                      transition-all duration-300 relative group overflow-hidden
                      ${searchInput ? 'px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0' : 'hover:text-orange-500'}`,
                                                children: isLoading ? 'Searching...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `relative z-10 ${searchInput ? 'animate-pulse' : ''}`,
                                                            children: "Search"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/MapboxMap.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 25
                                                        }, this),
                                                        searchInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/MapboxMap.tsx",
                                                            lineNumber: 838,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapboxMap.tsx",
                                                lineNumber: 825,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-px h-4 bg-slate-200"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapboxMap.tsx",
                                                lineNumber: 843,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsCollapsed(true),
                                                className: "text-slate-400 hover:text-orange-500 focus:outline-none  transition-all duration-200 hover:scale-105 active:scale-95",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MapboxMap.tsx",
                                                    lineNumber: 849,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapboxMap.tsx",
                                                lineNumber: 844,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapboxMap.tsx",
                                        lineNumber: 824,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsCollapsed(false);
                                    setShowInfoSidebar(false);
                                },
                                className: "w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg  transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5 text-slate-400 transition-colors duration-200 group-hover:text-orange-500",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapboxMap.tsx",
                                        lineNumber: 870,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/MapboxMap.tsx",
                                    lineNumber: 862,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MapboxMap.tsx",
                                lineNumber: 854,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/MapboxMap.tsx",
                            lineNumber: 808,
                            columnNumber: 11
                        }, this),
                        isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: takeScreenshot,
                            disabled: isCapturingScreenshot,
                            className: "w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg  transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed",
                            children: isCapturingScreenshot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-5 w-5 text-slate-400 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/components/MapboxMap.tsx",
                                lineNumber: 889,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                className: "h-5 w-5 text-slate-400 transition-colors duration-200 group-hover:text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/components/MapboxMap.tsx",
                                lineNumber: 891,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/MapboxMap.tsx",
                            lineNumber: 881,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MapboxMap.tsx",
                    lineNumber: 807,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MapboxMap.tsx",
                lineNumber: 806,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapContainer,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/components/MapboxMap.tsx",
                lineNumber: 900,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    selectedCity: selectedCity || "Location",
                    visible: showInfoSidebar,
                    onTakeAction: addRandomTargets
                }, void 0, false, {
                    fileName: "[project]/components/MapboxMap.tsx",
                    lineNumber: 902,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MapboxMap.tsx",
                lineNumber: 901,
                columnNumber: 7
            }, this),
            showScreenshotPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-transparent backdrop-blur-[2px] flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl p-6 max-w-md w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold",
                                    children: "Map Screenshot"
                                }, void 0, false, {
                                    fileName: "[project]/components/MapboxMap.tsx",
                                    lineNumber: 914,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowScreenshotPopup(false),
                                    className: "text-gray-500 hover:text-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapboxMap.tsx",
                                        lineNumber: 919,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/MapboxMap.tsx",
                                    lineNumber: 915,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MapboxMap.tsx",
                            lineNumber: 913,
                            columnNumber: 13
                        }, this),
                        screenshotUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 border border-gray-200 rounded overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: screenshotUrl,
                                alt: "Map Screenshot",
                                className: "w-full h-auto"
                            }, void 0, false, {
                                fileName: "[project]/components/MapboxMap.tsx",
                                lineNumber: 925,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/MapboxMap.tsx",
                            lineNumber: 924,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveScreenshot,
                                    className: "flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MapboxMap.tsx",
                                            lineNumber: 938,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MapboxMap.tsx",
                                            lineNumber: 939,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MapboxMap.tsx",
                                    lineNumber: 934,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleEmailClick,
                                    className: "flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MapboxMap.tsx",
                                            lineNumber: 946,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MapboxMap.tsx",
                                            lineNumber: 947,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MapboxMap.tsx",
                                    lineNumber: 942,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MapboxMap.tsx",
                            lineNumber: 933,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MapboxMap.tsx",
                    lineNumber: 912,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MapboxMap.tsx",
                lineNumber: 911,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MapboxMap.tsx",
        lineNumber: 805,
        columnNumber: 5
    }, this);
}
_s(MapboxMap, "Mti5KxuAH1idOur068dCzlq6mKM=");
_c = MapboxMap;
var _c;
__turbopack_context__.k.register(_c, "MapboxMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/WelcomePage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WelcomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function WelcomePage({ onComplete }) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomePage.useEffect": ()=>{
            const timer = setInterval({
                "WelcomePage.useEffect.timer": ()=>{
                    setProgress({
                        "WelcomePage.useEffect.timer": (prev)=>{
                            if (prev >= 100) {
                                clearInterval(timer);
                                setTimeout({
                                    "WelcomePage.useEffect.timer": ()=>onComplete()
                                }["WelcomePage.useEffect.timer"], 200);
                                return 100;
                            }
                            return prev + 2;
                        }
                    }["WelcomePage.useEffect.timer"]);
                }
            }["WelcomePage.useEffect.timer"], 50);
            return ({
                "WelcomePage.useEffect": ()=>clearInterval(timer)
            })["WelcomePage.useEffect"];
        }
    }["WelcomePage.useEffect"], [
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.4
        },
        className: "absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-2xl px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: 20,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                },
                className: "rounded-2xl bg-[#252b3d]/50 p-12 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex h-16 w-16 items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scale: [
                                                1,
                                                1.2,
                                                1
                                            ],
                                            opacity: [
                                                0.4,
                                                0.2,
                                                0.4
                                            ]
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 1.75,
                                            ease: "easeInOut"
                                        },
                                        className: "absolute",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                            className: "h-[72px] w-[72px] text-orange-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WelcomePage.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/WelcomePage.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                        className: "absolute h-16 w-16 text-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WelcomePage.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WelcomePage.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-6xl font-bold text-white",
                                        children: [
                                            "Firesight",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                animate: {
                                                    opacity: [
                                                        1,
                                                        0,
                                                        1
                                                    ]
                                                },
                                                transition: {
                                                    repeat: Infinity,
                                                    duration: 1.25,
                                                    ease: "easeInOut"
                                                },
                                                className: "ml-2 inline-block h-[6px] w-8 bg-orange-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/WelcomePage.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WelcomePage.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-lg text-slate-400",
                                        children: "Data-driven wildfire strategy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WelcomePage.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WelcomePage.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WelcomePage.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex justify-between text-sm text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Initializing system"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WelcomePage.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            Math.round(progress),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WelcomePage.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WelcomePage.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 overflow-hidden rounded-full bg-slate-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-full origin-left bg-orange-500",
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/WelcomePage.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WelcomePage.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex justify-center gap-2",
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "h-1.5 w-1.5 rounded-full bg-orange-500",
                                        animate: {
                                            opacity: [
                                                0.3,
                                                1,
                                                0.3
                                            ]
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 1.5,
                                            delay: i * 0.3,
                                            ease: "easeInOut"
                                        }
                                    }, i, false, {
                                        fileName: "[project]/components/WelcomePage.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/WelcomePage.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WelcomePage.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WelcomePage.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WelcomePage.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/WelcomePage.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(WelcomePage, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = WelcomePage;
var _c;
__turbopack_context__.k.register(_c, "WelcomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/main/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MainPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MapboxMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MapboxMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WelcomePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WelcomePage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MainPage() {
    _s();
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Davis, CA");
    const [showWelcome, setShowWelcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleCitySelect = (city)=>{
        setSelectedCity(city);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-screen w-full overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: showWelcome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WelcomePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onComplete: ()=>setShowWelcome(false)
            }, "welcome", false, {
                fileName: "[project]/app/main/page.tsx",
                lineNumber: 20,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: 0.5
                },
                className: "h-full w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MapboxMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onCitySelect: handleCitySelect
                    }, void 0, false, {
                        fileName: "[project]/app/main/page.tsx",
                        lineNumber: 31,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/main/page.tsx",
                    lineNumber: 30,
                    columnNumber: 13
                }, this)
            }, "main", false, {
                fileName: "[project]/app/main/page.tsx",
                lineNumber: 22,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/main/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/main/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(MainPage, "3fyFXEQx99nVAau3aaZVbrkcSx0=");
_c = MainPage;
var _c;
__turbopack_context__.k.register(_c, "MainPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_4dbe299b._.js.map