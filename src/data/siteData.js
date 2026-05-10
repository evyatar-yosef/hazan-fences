// Shared data for Hazan Fences website
// All data is centralized here for easy backend integration later

export const PHOTOS = {
  heroSite: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=2000&q=80&auto=format&fit=crop",
  construction1: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80&auto=format&fit=crop",
  construction2: "https://images.unsplash.com/photo-1590074072786-a66914d668f1?w=1400&q=80&auto=format&fit=crop",
  construction3: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format&fit=crop",
  crane: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format&fit=crop",
  fenceMesh: "https://images.unsplash.com/photo-1597766353939-df7c69bf3c2e?w=1400&q=80&auto=format&fit=crop",
  fenceNight: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=80&auto=format&fit=crop",
  workers: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80&auto=format&fit=crop",
  site1: "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=1400&q=80&auto=format&fit=crop",
  event: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1400&q=80&auto=format&fit=crop",
  road: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1400&q=80&auto=format&fit=crop",
  blueprint: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=1400&q=80&auto=format&fit=crop",
};

export const CATEGORIES = [
  { id: "construction", name: "גדרות לאתרי בנייה", en: "Construction", desc: "גדרות כבדות לאתרי בנייה פעילים", photo: PHOTOS.construction1, code: "CON" },
  { id: "mesh", name: "גדרות רשת ניידות", en: "Mobile Mesh", desc: "גדרות רשת 2×3.5מ׳ למתקן מהיר", photo: PHOTOS.fenceMesh, code: "MSH" },
  { id: "iskurit", name: "גדרות איסכורית", en: "Iskurit", desc: "גדר אטומה לפרטיות וחסימה מלאה", photo: PHOTOS.construction2, code: "ISK" },
  { id: "events", name: "גדרות לאירועים", en: "Events", desc: "גדרות קלות לניהול קהל באירועים", photo: PHOTOS.event, code: "EVT" },
  { id: "temp", name: "גדרות זמניות", en: "Temporary", desc: "פתרון זריז לכל תקופה וצורך", photo: PHOTOS.construction3, code: "TMP" },
  { id: "modular", name: "גדרות מודולריות", en: "Modular", desc: "מערכת מודולרית מותאמת לשטח", photo: PHOTOS.site1, code: "MOD" },
  { id: "gates", name: "שערים וגדרות", en: "Gates", desc: "שערי כניסה ידניים וחשמליים", photo: PHOTOS.fenceNight, code: "GAT" },
  { id: "accessories", name: "אביזרי גידור", en: "Accessories", desc: "בסיסים, מחברים, שלטי אזהרה", photo: PHOTOS.blueprint, code: "ACC" },
  { id: "adapters", name: "מתאמים וסטנדים", en: "Adapters", desc: "מתאמים לקרקע קשה/רכה", photo: PHOTOS.road, code: "ADP" },
];

export const CLIENTS = ["שיכון ובינוי", "אשטרום", "דניה סיבוס", "אלקטרה", "מנרב", "אורתם מלובן", "פוליצר", "תדהר", "מבנה", "רותם בטון"];

export const PROJECTS = [
  { id: 1, name: "מגדלי אקרו תל אביב", client: "שיכון ובינוי", scope: "2,400 מ׳ גידור היקפי", dur: "14 חודשים", photo: PHOTOS.construction1, type: "בנייה" },
  { id: 2, name: "מחלף גליל ים", client: "נתיבי ישראל", scope: "1,800 מ׳ גדר בטיחות", dur: "8 חודשים", photo: PHOTOS.road, type: "תשתיות" },
  { id: 3, name: "פסטיבל אביב פארק", client: "הפקות שרף", scope: "כ-950 מ׳ גידור אירוע", dur: "3 ימים", photo: PHOTOS.event, type: "אירועים" },
  { id: 4, name: "שכונת סביון החדשה", client: "אשטרום", scope: "3,100 מ׳ + 4 שערים", dur: "22 חודשים", photo: PHOTOS.site1, type: "בנייה" },
  { id: 5, name: "קו מטרו M3 — קטע 4", client: "דניה סיבוס", scope: "2×1,200 מ׳ איסכורית", dur: "פרויקט פעיל", photo: PHOTOS.construction3, type: "תשתיות" },
  { id: 6, name: "אולימפיאדת נוער 2026", client: "משרד הספורט", scope: "כ-2,000 מ׳ גידור", dur: "5 ימים", photo: PHOTOS.crane, type: "אירועים" },
];

export const ADVANTAGES = [
  { icon: "medal", title: "24 שנות ותק", desc: "מ-2002 בשטח. ראינו הכל, פתרנו הכל." },
  { icon: "truck", title: "אספקה ב-24 שעות", desc: "מחסן מרכזי במודיעין + 4 צוותי התקנה ארציים." },
  { icon: "shield", title: "תקן ישראלי 4273", desc: "עומד בדרישות בטיחות העבודה ומכון התקנים." },
  { icon: "wrench", title: "התקנה ופירוק", desc: "צוותים מקצועיים, מודדים, סימון וחפירה." },
  { icon: "clock", title: "זמינות 7/24", desc: "מענה שטח גם בסופ״ש ובחגים." },
  { icon: "spark", title: "מחירים תחרותיים", desc: "חוזי מסגרת לקבלנים וללקוחות חוזרים." },
];

export const FOOTER_LINKS = [
  "גדר רשת להשכרה", "גדר איסכורית להשכרה", "גידור אתרי בנייה",
  "גידור פסטיבלים", "גדר לאתר בנייה", "גדרות בטיחות לכבישים",
  "שערים נגררים", "גדרות לפסי רכבת", "גידור מגרשי ספורט",
];

export const NAV_ITEMS = [
  { label: "בית", path: "/" },
  { label: "אודות", path: "/about" },
  { label: "מוצרים", path: "/category" },
  { label: "להשכרה", path: "/rental" },
  { label: "פרויקטים", path: "/projects" },
  { label: "מאמרים", path: "/articles" },
  { label: "צור קשר", path: "/contact" },
];

export const CONTACT_INFO = {
  phone: "077-230-3131",
  whatsapp: "050-123-4567",
  emergency: "052-987-6543",
  email: "info@hazan-fences.co.il",
  address: "ישפרו 14, מודיעין",
  addressDetail: "בניין B, קומה 2",
};

export const STATS = [
  { n: "24", u: "שנות פעילות מאז 2002" },
  { n: "1,847", u: "פרויקטים הושלמו" },
  { n: "40K", u: "מטר רץ במלאי" },
  { n: "60 דק׳", u: "זמן תגובה ממוצע" },
];

export const PROCESS_STEPS = [
  { n: "01", t: "בקשת הצעת מחיר", d: "טלפון, וואטסאפ או טופס. מענה תוך 60 דקות." },
  { n: "02", t: "מדידה בשטח", d: "הנדסאי מגיע, ממפה, ומגיש הצעה סופית." },
  { n: "03", t: "אספקה והתקנה", d: "צוות התקנה מגיע עם כל האביזרים." },
  { n: "04", t: "תחזוקה ופירוק", d: "ליווי לכל אורך הפרויקט, פירוק בסיום." },
];
