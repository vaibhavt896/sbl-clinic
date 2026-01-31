export const CONTACT_INFO = {
    phone: '+91 98765 43210',
    phoneRaw: '919876543210',
    whatsapp: '919876543210',
    email: 'care@sblclinic.com',
    address: '123 Civil Lines, Near Phool Bagh, Kanpur, UP 208001',
    addressShort: 'Civil Lines, Near Phool Bagh, Kanpur',
    hours: 'Mon to Sat: 10AM - 2PM, 5PM - 8PM',
    hoursShort: '10AM-2PM, 5PM-8PM',
    locationMap: 'https://maps.app.goo.gl/xxxxx', // Placeholder for professional map link
};

export const CONSULTATION_FEES = {
    firstVisit: {
        amount: 500,
        duration: '45-60 min',
        description: 'Comprehensive first consultation with detailed case history',
    },
    followUp: {
        amount: 300,
        duration: '15-20 min',
        description: 'Progress review and remedy adjustment',
    },
    online: {
        amount: 400,
        duration: '30-40 min',
        description: 'Video consultation for patients who cannot visit',
    },
};

export const BOOKING_CONFIG = {
    calendarUrl: 'https://cal.com/sbl-clinic', // Placeholder - integrate with Cal.com or similar
    slots: {
        morning: { start: '10:00', end: '14:00' },
        evening: { start: '17:00', end: '20:00' },
    },
    slotDuration: 30, // minutes
    bufferTime: 10, // minutes between appointments
    advanceBookingDays: 30, // how far in advance patients can book
};
