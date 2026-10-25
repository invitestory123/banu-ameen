/**
 * wedding-data.js — Customer-facing editable data layer for ghibli-selfie
 * Edit this file to update couple names, wedding dates, itinerary, venue, calendar info, and images.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "K. Ahamed Ameen",
    groomDegree: "B.Com, MBA",
    bride: "S.A. Fahmitha Banu",
    brideDegree: "B.Com CS, MBA",
    title: "K. Ahamed Ameen ♡ S.A. Fahmitha Banu",
  },

  wedding: {
    dateLabel: "29 · NOVEMBER · 2026",
    dateTimeLine: "Sunday, 29 November 2026 · 6:00 pm",
    footerLine: "Ahamed Ameen & Fahmitha Banu · 29 · 11 · 2026",
  },

  calendar: {
    title: "K. Ahamed Ameen & S.A. Fahmitha Banu — Wedding",
    start: "20261129T123000Z",
    end: "20261129T163000Z",
    location: "SIET SPORTS PAVILION, Teynampet, Chennai - 18",
    details: "Nikah & Wedding Celebration of K. Ahamed Ameen and S.A. Fahmitha Banu at SIET SPORTS PAVILION, Teynampet, Chennai. We can't wait to see you there.",
    icsFilename: "ahamed-ameen-and-fahmitha-banu-29-nov-2026.ics",
  },

  venue: {
    name: "SIET SPORTS PAVILION",
    address: "Teynampet, Chennai - 18",
    mapsUrl: "https://maps.app.goo.gl/8XVCfUisDZc2dP519?g_st=ic",
  },

  schedule: [
    { label: "Nikah Ceremony", time: "6:00 pm" },
    { label: "Reception & Dinner", time: "7:00 pm onwards" },
  ],

  messages: {
    speechBubble: "Hey! You're invited ❤️",
    bouquetClick: "Can't wait to celebrate with you.",
    secretNote: "You found our little secret.\nSome people you just want in every photo —\nyou're one of them.",
    secretSignoff: "— Ahamed Ameen & Fahmitha Banu",
    thankYou: "Thank you for being part of our story.",
  },

  music: "./editable/assets/anbil-avan.mp3",

  images: {
    couple: "./editable/assets/couple.png",
    mosque: "./editable/assets/mosque.png",
    bouquet: "./editable/assets/bouquet.png",
    gramophone: "./editable/assets/gramophone.png",
    cloud: "./editable/assets/cloud-a.png",
    petal: "./editable/assets/petal.png",
    butterfly: "./editable/assets/butterfly.png",
  },
};
