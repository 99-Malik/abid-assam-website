
export const companyName = "Appliance Repairs AE";

export const phoneNumber = "+971522495300";

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
      imgUrl: "/static/dishwasher.jpeg",
      slug: "dishwasher-repair",
      description: `At ${company}, we specialize in providing a high-quality dishwasher repair services. Our expert technicians are trained to diagnose and resolve a wide range of dishwasher issues, ensuring your appliance operates efficiently and effectively.`,
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
      imgUrl: "/static/dryer.jpeg",
      slug: "dryer-repair",
      description: `At ${company}, we offer expert dryer repair services to ensure your appliance functions properly. Our trained technicians can address a variety of dryer issues, helping you get back to your laundry routine quickly.`,
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
      imgUrl: "/static/washing.jpeg",
      description: `At ${company}, we provide reliable washing machine repair services. Our experienced technicians can quickly diagnose and resolve various washing machine problems, ensuring your laundry is done efficiently.`,
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
          ? "/static/stove.jpeg"
          : "/static/tv.jpeg",
      description:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? `At ${company}, we deliver quality stove and cooker repair services. Our skilled technicians are adept at diagnosing and fixing a range of issues, ensuring your cooking appliance operates safely and effectively.`
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
      imgUrl: "/static/oven.jpeg",
      description: `At ${company}, we specialize in oven repair services to keep your cooking appliances in top shape. Our technicians are trained to handle various oven issues, ensuring you can cook your meals without interruption.`,
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
      imgUrl: "/static/fridge.jpeg",
      description: `At ${company}, we offer comprehensive fridge repair services. Our experienced technicians can diagnose and fix a variety of refrigerator issues, ensuring your food stays fresh and safe.`,
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
    imgUrl: "/static/tv.jpeg",
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
