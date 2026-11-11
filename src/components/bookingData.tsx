export const services = [
    {id : "nail-care", name : "Nail Care", durationMinutes: 45 },
    {id : "manicure", name : "Manicure", durationMinutes: 60},
    {id : "makeup", name : "Makeup", durationMinutes: 60},
]

export const locations = [
    {id : "chester", name: "Chester"},
    {id : "manchester", name: "Manchester"},
    {id : "london", name: "London"}
]

export const professionals = [
    {
        id: "dasha",
        name: "Dasha",
        assignments: [
            { locationId: "chester", serviceIds: ["nail-care", "manicure", "makeup"]}
        ]
    },
    {
        id: "charlotte",
        name: "Charlotte",
        assignments: [
            { locationId: "chester", serviceIds: ["nail-care", "manicure"]}
        ]
    },
    {
        id: "rihanna",
        name: "Rihanna",
        assignments: [
            { locationId: "chester", serviceIds: ["nail-care", "makeup"]}
        ]
    },

    {
        id: "liz",
        name: "Liz",
        assignments: [
            { locationId: "manchester", serviceIds: ["nail-care", "manicure"]}
        ]
    },
    
    {
        id: "hannah",
        name: "Hannah",
        assignments: [
            { locationId: "manchester", serviceIds: ["nail-care", "makeup"]}
        ]
    },
    {
        id: "mary",
        name: "Mary",
        assignments: [
            { locationId: "manchester", serviceIds: ["nail-care", "makeup", "manicure"]}
        ]
    },
    {
        id: "kate",
        name: "Kate",
        assignments: [
            { locationId: "london", serviceIds: ["nail-care", "makeup", "manicure"]}
        ]
    },
    {
        id: "lucy",
        name: "Lucy",
        assignments: [
            { locationId: "london", serviceIds: ["makeup"]}
        ]
    },
    {
        id: "patrick",
        name: "Patrick",
        assignments: [
            { locationId: "london", serviceIds: ["nail-care"]}
        ]
    }
]