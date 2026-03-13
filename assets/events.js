const events = [
    ...asiaEvents,
    ...europeEvents,
    ...americaEvents,
    ...africaEvents,
    ...globalEvents
];

events.sort((a, b) => parseInt(a.date) - parseInt(b.date));