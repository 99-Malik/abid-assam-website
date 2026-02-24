
export const companyName = "Instant Repairs UAE";

export const phoneNumber = "+971523722012";

export const sendMessage = () => {
  const message = "Hello, I want your repair services";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank"); // Opens WhatsApp in a new tab
};

export const dialPhone = () => {
  window.location.href = `tel:${phoneNumber}`;
};

export const getData = (company) => {
  const allData = [
    {
      title: "Dishwasher Repair",
      imgUrl: "/static/dishwasher-premium.png",
      slug: "dishwasher-repair",
      description: `Experience spotless clean with our premium dishwasher repair. ${company} experts restore efficiency so you can reclaim your time. Don't let a breakdown disrupt your kitchen flow.`,
      commonProblems: [
        "Dishwasher not starting",
        "Water not draining properly",
        "Dishes not coming out clean",
        "Leaking water",
        "Unusual noises during operation",
        "Door latch issues",
        "Dishwasher cycles taking too long",
        "Odors coming from the appliance",
        "Error codes appearing on the display",
        "Water not filling",
      ],
    },
    {
      title: "Dryer Repair",
      imgUrl: "/static/dryer-premium.png",
      slug: "dryer-repair",
      description: `Don't let damp clothes ruin your day. Our master technicians provide rapid, reliable dryer repairs for ${company} appliances. Efficient drying, every time.`,
      commonProblems: [
        "Dryer not starting",
        "Clothes not drying completely",
        "Excessive noise during operation",
        "Drum not spinning",
        "Overheating",
        "Lint trap issues",
        "Dryer cycle not finishing",
        "Bad odor from dryer",
        "Error codes appearing on display",
        "Drum making thumping noises",
      ],
    },
    {
      title: "Washing Machine Repair",
      slug: "washing-machine-repair",
      imgUrl: "/static/washing-machine-premium.png",
      description: `Keep your laundry routine spinning smoothly. We deliver top-tier diagnosis and repair for ${company} washing machines. Silence the noise and stop the leaks today.`,
      commonProblems: [
        "Machine not turning on",
        "Water not filling",
        "Excessive noise during operation",
        "Draining issues",
        "Leaking water",
        "Door not sealing properly",
        "Unbalanced loads",
        "Overheating",
        "Cycle not completing",
        "Error codes on display",
      ],
    },
    {
      title:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? "Stove/Cooker Repair"
          : "TV Repair",
      slug:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? "stove-cooker-repair"
          : "tv-repair",
      imgUrl:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? "/static/stove-premium.png"
          : "/tv-repair.webp",
      description:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? `Cook with confidence again. Our specialized ${company} stove handling ensures blue flames and precise temperatures for your culinary creations.`
          : `At ${company}, we provide reliable TV repair services. Our skilled technicians can troubleshoot and resolve various television issues, ensuring you enjoy your favorite shows without disruption.`,
      commonProblems:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? [
            "Burners not lighting",
            "Uneven heating",
            "Oven not reaching temperature",
            "Self-cleaning cycle issues",
            "Control panel problems",
            "Gas leaks",
            "Electric ignition failure",
            "Burner clicking noises",
            "Oven door not closing properly",
            "Error codes on display",
          ]
          : [
            "TV not turning on",
            "Screen flickering",
            "No sound",
            "Picture issues",
            "Remote control problems",
            "HDMI connection issues",
            "Software glitches",
            "Color distortion",
            "Overheating",
            "Input selection problems",
          ],
    },
    {
      title: "Oven Repair",
      slug: "oven-repair",
      imgUrl: "/static/oven-premium.png",
      description: `Restore the heart of your kitchen. Professional ${company} oven repairs that guarantee perfect roasts and bakes. Safe, fast, and certified service.`,
      commonProblems: [
        "Oven not heating",
        "Temperature issues",
        "Oven door not sealing",
        "Self-cleaning problems",
        "Ignition issues",
        "Faulty thermostat",
        "Error codes on display",
        "Unusual noises during operation",
        "Oven light not working",
        "Electrical problems",
      ],
    },
    {
      title: "Fridge Repair",
      slug: "fridge-repair",
      imgUrl: "/static/fridge-premium.png",
      description: `Protect your groceries with our urgent fridge repair. We fix cooling issues and leaks in ${company} refrigerators with precision to keep freshness locked in.`,
      commonProblems: [
        "Fridge not cooling",
        "Excessive noise",
        "Leaking water",
        "Ice maker issues",
        "Frost buildup in freezer",
        "Fridge cycling too frequently",
        "Temperature inconsistencies",
        "Condenser coils problems",
        "Door seal issues",
        "Error codes on display",
      ],
    },
  ];
  const tvRepair = company === companyName && {
    title: "TV Repair",
    slug: "tv-repair",
    imgUrl: "/tv-repair.webp",
    description: `At ${company}, we provide reliable TV repair services. Our skilled technicians can troubleshoot and resolve various television issues, ensuring you enjoy your favorite shows without disruption.`,
    commonProblems: [
      "TV not turning on",
      "Screen flickering",
      "No sound",
      "Picture issues",
      "Remote control problems",
      "HDMI connection issues",
      "Software glitches",
      "Color distortion",
      "Overheating",
      "Input selection problems",
    ],
  };

  return company === companyName ? allData.concat(tvRepair) : allData;

};
