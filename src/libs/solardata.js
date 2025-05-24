export const companyName = "Appliance Repairs AE";

export const phoneNumber = "+971523251847";

export const sendMessage = () => {
    const message = "Hello, I need assistance with my solar water heater.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;
    window.open(url, "_blank"); // Opens WhatsApp in a new tab
};

export const dialPhone = () => {
    window.location.href = `tel:${phoneNumber}`;
};

export const getSolarData = (company) => {
    const solarData = [
        {
            title: "Solar Water Heater Repair",
            imgUrl: "/static/solar-1.jpg",
            slug: "solar-water-heater-repair",
            description: `At ${company}, we provide expert repair services for solar water heaters. Our technicians can diagnose and resolve a wide range of solar water heater issues efficiently.`,
            commonProblems: [
                "No hot water production",
                "Insufficient water heating",
                "Leaking pipes or connections",
                "Solar panel damage or cracks",
                "Blocked or clogged pipes",
                "Faulty temperature sensors",
                "Corrosion in the tank",
                "Airlocks in the system",
                "Pressure valve issues",
                "Low water pressure",
                "Overheating of water",
            ],
        },
        {
            title: "Leaking Pipes and Connections",
            imgUrl: "/static/solar-3.webp",
            slug: "leaking-pipes-connections",
            description: `Leaking pipes and connections in solar water heaters can disrupt their efficiency. Our skilled technicians can identify and resolve these issues effectively.`,
            commonProblems: [
                "No hot water production",
                "Insufficient water heating",    
                "Leaking pipes or connections",
                "Blocked or clogged pipes",
                "Damaged solar panels",
                "Faulty temperature sensors",
                "Airlocks in the system",            
                "Pressure valve issues",
                "Low water pressure",
                "Electrical component failures",
                "Heat loss due to poor insulation",
                "Overheating of water",
                "Unusual noises from the system",
                "Improper installation issues",
            ],
        },
        {
            title: "Faulty Temperature Sensors",
            imgUrl: "/static/solar-4.jpg",
            slug: "faulty-temperature-sensors",
            description: `Faulty temperature sensors in solar water heaters can cause inconsistent heating. Our experts can repair or replace them for optimal performance.`,
            commonProblems: [
                "No hot water production",
                "Insufficient water heating",
                "Leaking pipes or connections",
                "Faulty temperature sensors",
                "Blocked or clogged pipes",
                "Airlocks in the system",
                "Corrosion in pipes or tank",
                "Pressure valve issues",
                "Scale buildup causing leaks",
                "Malfunctioning circulation pump",
                "Water dripping from joints",
                "Collector panel leaks",
                "Heat loss due to poor insulation",
                "System freezing during cold weather",
                "Improper installation causing leaks",
                "Rust stains near connections",
            ],
        },
        {
            title: "Improper Installation Issues",
            imgUrl: "/static/solar-5.jpg",
            slug: "improper-installation-issues",
            description: `Improper installation of solar water heaters can lead to operational inefficiencies. Our team ensures accurate diagnosis and correction of such issues.`,
            commonProblems: [
                "Inconsistent water heating",
                "Cold water despite sunny conditions",
                "Temperature readings fluctuating",
                "System shutting down unexpectedly",
                "Sensors not communicating",
                "Incorrect water temperature display",
                "Water overheating during operation",
                "Failure to activate heating system",
                "Sensor wiring issues",
                "Sensor corrosion or wear",
                "Faulty calibration of sensors",
            ],
        },
        {
            title: "Circulation Pump Not Working",
            imgUrl: "/static/solar-6.jpg",
            slug: "circulation-pump-not-working",
            description: `Issues with circulation pumps in solar water heaters can impact water heating. Our technicians provide comprehensive diagnostics and repairs.`,
            commonProblems: [
                "Insufficient water heating",
                "Unusual noises during operation",
                "Water leakage from pipes or tank",
                "Solar panel damage or cracks",
                "System error codes displayed",
                "Incomplete heating cycles",
                "Blocked or clogged pipes",
                "Circulation pump not working",
                "Electrical faults in the system",
                "Unpleasant odors from the water tank",
                "System tripping the circuit breaker",
                "Excessive vibration in the system",
                "Water temperature fluctuations",
            ],
        },
       
    ];

    return solarData;
};
