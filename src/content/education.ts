/** Statuses confirmed by the owner. Completion dates and credential URLs are intentionally omitted. */
export const formalEducation = [
  {
    qualification: "B.Sc. Criminology and Security Studies",
    institution: "Adekunle Ajasin University, Akungba-Akoko",
    period: "2019–2023",
    status: "Completed"
  },
  {
    qualification: "Diploma in Software Engineering",
    institution: "LeapSchool Africa",
    period: null,
    status: "Completed"
  }
] as const;

export const completedTraining = [
  { name: "ALX ProDev Backend", provider: "ALX" },
  { name: "ALX ProDev Frontend", provider: "ALX" },
  { name: "ALX Pro Foundations", provider: "ALX" },
  { name: "PLP MERN Stack", provider: "Power Learn Project" },
  { name: "Meta Front-End Developer", provider: "Meta" },
  { name: "Cisco Linux Essentials", provider: "Cisco" },
  { name: "TS Academy DevOps/Cloud", provider: "TS Academy" },
  { name: "Tech Crush DevOps/Cloud", provider: "Tech Crush" },
  { name: "AWS AI & ML Scholars — Udacity", provider: "Udacity" }
] as const;

export const ongoingLearning = [
  { name: "AWS and Azure practical cloud labs", provider: "NextWork", status: "Ongoing" }
] as const;
