
import fs from 'fs';
import path from 'path';

const testimonials = [
    { filename: "hadyn-evans.svg", initials: "HE", color: "#10B981" },
    { filename: "james-banks.svg", initials: "JB", color: "#22D3EE" },
    { filename: "william-littlefield.svg", initials: "WL", color: "#6366f1" },
    { filename: "kanish-gosain.svg", initials: "KG", color: "#f472b6" },
    { filename: "penn-felix.svg", initials: "PF", color: "#fbbf24" }
];

const dir = 'src/assets/testimonials';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const createSVG = (initials, color) => `
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="${color}" fill-opacity="0.2"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="80" fill="${color}">
    ${initials}
  </text>
</svg>
`;

testimonials.forEach(t => {
    const filePath = path.join(dir, t.filename);
    fs.writeFileSync(filePath, createSVG(t.initials, t.color).trim());
    console.log(`Created ${t.filename}`);
});
