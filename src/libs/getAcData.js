export const companyName = "Appliance Repairs AE";

export const phoneNumber = "+971523251847";

export const sendMessage = () => {
    const message = "Hello, I need assistance with my air conditioner.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;
    window.open(url, "_blank"); // Opens WhatsApp in a new tab
};

export const dialPhone = () => {
    window.location.href = `tel:${phoneNumber}`;
};

export const getAcData = (company) => {
    const AcData = [
        {
            title: "AC Repair & Maintenance",
            imgUrl: "/static/ac1.jpg",
            slug: "ac-repair-maintenance",
            description: `At ${company}, we specialize in expert AC repair and maintenance. Our skilled technicians can diagnose and fix all air conditioning issues effectively.`,
            commonProblems: [
                "AC not cooling properly",
                "Strange noises from the unit",
                "Leaking water from AC",
                "Unresponsive thermostat",
                "Weak airflow from vents",
                "Bad odor from the AC",
                "Compressor failure",
                "Frequent system shutdowns",
                "Clogged air filters",
                "Frozen evaporator coil",
                "AC blowing warm air",
            ],
        },
        {
            title: "AC Leaking Water Issues",
            imgUrl: "/static/ac2.jpg",
            slug: "ac-leaking-water",
            description: `Water leaks in AC units can cause serious issues. Our technicians detect and fix leaks efficiently for optimal system performance.`,
            commonProblems: [
                "Water dripping from vents",
                "Leaking near indoor unit",    
                "Condensation buildup",
                "Clogged drainage pipes",
                "Faulty drain pan",
                "Blocked condenser coil",
                "Mold growth inside unit",            
                "Low refrigerant levels",
                "Damp smell from AC",
                "Damaged insulation pipes",
                "Excessive humidity in room",
                "Leaky AC ducts",
                "Incorrect AC installation",
                "Unstable room temperature",
            ],
        },
        {
            title: "Faulty Thermostat Issues",
            imgUrl: "/static/ac3.jpg",
            slug: "faulty-thermostat",
            description: `A malfunctioning thermostat can cause AC cooling inconsistencies. Our experts repair or replace thermostats for better temperature control.`,
            commonProblems: [
                "Inaccurate temperature control",
                "AC running continuously",
                "AC shutting off too early",
                "Unresponsive thermostat",
                "Incorrect cooling cycles",
                "Uneven cooling in rooms",
                "AC not reaching set temp",
                "Frequent thermostat resets",
                "Battery issues in thermostat",
                "Connection errors in system",
                "AC fluctuating unexpectedly",
                "Thermostat display issues",
                "Room feels too cold/hot",
                "Incorrect fan control",
                "Thermostat sensor failure",
                "AC not responding to input",
            ],
        },
        {
            title: "Improper AC Installation",
            imgUrl: "/static/ac4.jpg",
            slug: "improper-ac-installation",
            description: `Poor AC installation leads to performance inefficiencies. Our technicians ensure proper AC installation for long-term durability and performance.`,
            commonProblems: [
                "AC mounted incorrectly",
                "Cooling not effective",
                "Frequent system shutdowns",
                "Uneven airflow distribution",
                "Ductwork installation issues",
                "Refrigerant leaks detected",
                "Electrical wiring faults",
                "Water dripping near unit",
                "Loud noise from system",
                "Thermostat not calibrated",
                "Improper drainage setup",
            ],
        },
        {
            title: "Compressor & Refrigerant Issues",
            imgUrl: "/static/ac5.jpg",
            slug: "compressor-refrigerant-issues",
            description: `Compressor or refrigerant issues can cause AC failures. Our technicians provide reliable diagnostics and repairs to restore cooling performance.`,
            commonProblems: [
                "AC making loud buzzing noise",
                "Refrigerant gas leakage",
                "AC struggling to cool room",
                "Frozen refrigerant lines",
                "Weak or no airflow",
                "Compressor overheating",
                "AC cycling on and off rapidly",
                "Electrical short circuit in unit",
                "Clogged refrigerant lines",
                "Inconsistent temperature control",
                "Low refrigerant levels",
                "Compressor motor failure",
                "Excessive energy consumption",
                "AC emitting burning smell",
            ],
        },
    ];

    return AcData;
};
