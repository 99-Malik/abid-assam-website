/**
 * Brand theme configuration for LG, Siemens, Samsung, Bosch.
 * Brand pages use white/light backgrounds with brand colour accents,
 * matching authentic brand service sites.
 */

export const brandDisplayNames = {
  lg: "LG",
  siemens: "Siemens",
  samsung: "Samsung",
  bosch: "Bosch",
};

export const getBrandDisplayName = (company = "") => {
  return brandDisplayNames[company.toLowerCase()] || company;
};

export const brandThemes = {
  lg: {
    primary: "#A50034",
    bgPrimary: "bg-lgPrimary",
    textPrimary: "text-lgPrimary",
    borderPrimary: "border-lgPrimary",
    sectionBg: "bg-white",
    sectionAlt: "bg-gray-50",
    headingText: "text-gray-900",
    bodyText: "text-gray-600",
    cardBg: "bg-white",
    cardBorder: "border-gray-200",
    cardHover: "hover:border-lgPrimary/40 hover:shadow-lg",
    iconBg: "bg-lgPrimary/10",
    iconText: "text-lgPrimary",
    // Solid badge — clearly visible on white bg
    badgeBg: "bg-lgPrimary text-white border-lgPrimary",
    badgeText: "text-white",
    divider: "from-transparent via-lgPrimary to-transparent",
    ctaBg: "bg-lgPrimary hover:bg-rose-800 text-white",
    logoAccent: "bg-lgPrimary",
    bannerOverlay: "from-black/75 via-black/55 to-black/75",
    gradientText: "from-red-500 via-rose-500 to-red-700",
  },
  siemens: {
    primary: "#019997",
    bgPrimary: "bg-siemensPrimary",
    textPrimary: "text-siemensPrimary",
    borderPrimary: "border-siemensPrimary",
    sectionBg: "bg-white",
    sectionAlt: "bg-gray-50",
    headingText: "text-gray-900",
    bodyText: "text-gray-600",
    cardBg: "bg-white",
    cardBorder: "border-gray-200",
    cardHover: "hover:border-siemensPrimary/40 hover:shadow-lg",
    iconBg: "bg-siemensPrimary/10",
    iconText: "text-siemensPrimary",
    badgeBg: "bg-siemensPrimary text-white border-siemensPrimary",
    badgeText: "text-white",
    divider: "from-transparent via-siemensPrimary to-transparent",
    ctaBg: "bg-siemensPrimary hover:bg-teal-700 text-white",
    logoAccent: "bg-siemensPrimary",
    bannerOverlay: "from-black/75 via-black/55 to-black/75",
    gradientText: "from-teal-400 via-cyan-500 to-teal-600",
  },
  samsung: {
    primary: "#1428A0",
    bgPrimary: "bg-[#1428A0]",
    textPrimary: "text-[#1428A0]",
    borderPrimary: "border-[#1428A0]",
    sectionBg: "bg-white",
    sectionAlt: "bg-gray-50",
    headingText: "text-gray-900",
    bodyText: "text-gray-600",
    cardBg: "bg-white",
    cardBorder: "border-gray-200",
    cardHover: "hover:border-[#1428A0]/40 hover:shadow-lg",
    iconBg: "bg-[#1428A0]/10",
    iconText: "text-[#1428A0]",
    badgeBg: "bg-[#1428A0] text-white border-[#1428A0]",
    badgeText: "text-white",
    divider: "from-transparent via-[#1428A0] to-transparent",
    ctaBg: "bg-[#1428A0] hover:bg-blue-800 text-white",
    logoAccent: "bg-[#1428A0]",
    bannerOverlay: "from-black/75 via-black/55 to-black/75",
    gradientText: "from-blue-500 via-indigo-500 to-blue-700",
  },
  bosch: {
    primary: "#F80000",
    bgPrimary: "bg-boschPrimary",
    textPrimary: "text-boschPrimary",
    borderPrimary: "border-boschPrimary",
    sectionBg: "bg-white",
    sectionAlt: "bg-gray-50",
    headingText: "text-gray-900",
    bodyText: "text-gray-600",
    cardBg: "bg-white",
    cardBorder: "border-gray-200",
    cardHover: "hover:border-boschPrimary/40 hover:shadow-lg",
    iconBg: "bg-boschPrimary/10",
    iconText: "text-boschPrimary",
    badgeBg: "bg-boschPrimary text-white border-boschPrimary",
    badgeText: "text-white",
    divider: "from-transparent via-boschPrimary to-transparent",
    ctaBg: "bg-boschPrimary hover:bg-red-700 text-white",
    logoAccent: "bg-boschPrimary",
    bannerOverlay: "from-black/75 via-black/55 to-black/75",
    gradientText: "from-red-500 via-orange-500 to-red-700",
  },
};

/**
 * Returns the brand theme for a given company string.
 * Falls back to a neutral dark theme if not a known brand.
 */
export const getBrandTheme = (company = "") => {
  const key = company.toLowerCase();
  return (
    brandThemes[key] || {
      primary: null,
      bgPrimary: "bg-primary",
      textPrimary: "text-primary",
      borderPrimary: "border-primary",
      sectionBg: "bg-background",
      sectionAlt: "bg-black/20",
      headingText: "text-white",
      bodyText: "text-muted-foreground",
      cardBg: "bg-card",
      cardBorder: "border-white/5",
      cardHover: "hover:border-primary/50",
      iconBg: "bg-primary/10",
      iconText: "text-primary",
      badgeBg: "bg-primary/10 border-primary/20",
      badgeText: "text-primary",
      divider: "from-transparent via-primary to-transparent",
      ctaBg: "bg-primary hover:bg-primary/90 text-white",
      logoAccent: "bg-primary",
      bannerOverlay: "from-black/70 via-black/60 to-black/70",
      gradientText: "from-cyan-400 via-blue-400 to-purple-400",
    }
  );
};
