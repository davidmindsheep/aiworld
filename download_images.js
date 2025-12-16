
import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
    { url: "https://aitotheworld.ai/wp-content/uploads/2024/10/compressed.jpg", filename: "hadyn-evans.jpg" },
    { url: "https://aitotheworld.ai/wp-content/uploads/2024/09/6DYRblGxo042es9QjE7rG9mI.png", filename: "james-banks.png" },
    { url: "https://aitotheworld.ai/wp-content/uploads/2024/09/B1aej5dT3boW3avJnLSJrl2ZuY.png", filename: "william-littlefield.png" },
    { url: "https://aitotheworld.ai/wp-content/uploads/2024/10/2024-10-01-08.52.58.jpg", filename: "kanish-gosain.jpg" },
    { url: "https://aitotheworld.ai/wp-content/uploads/2024/10/2024-10-10-17.02.14.jpg", filename: "penn-felix.jpg" }
];

const downloadImage = (url, filename) => {
    const dest = path.resolve('src/assets/testimonials', filename);
    const file = fs.createWriteStream(dest);

    // Add user-agent to avoid basic blocking
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };

    console.log(`Downloading ${filename}...`);

    https.get(url, options, (response) => {
        if (response.statusCode !== 200) {
            console.error(`Failed to download ${url}: Status Code ${response.statusCode}`);
            return;
        }

        response.pipe(file);

        file.on('finish', () => {
            file.close();
            console.log(`Success: ${filename}`);
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => { });
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
};

// Ensure directory exists
const dir = 'src/assets/testimonials';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

images.forEach(img => downloadImage(img.url, img.filename));
