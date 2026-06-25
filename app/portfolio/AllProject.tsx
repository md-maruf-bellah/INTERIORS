export const allProjects = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Luxury Project ${i + 1}`,
  category:
    i % 3 === 0
      ? "Office Interior"
      : i % 3 === 1
        ? "Home Interior"
        : "Restaurant Interior",
  // নিচের লিঙ্কগুলো সরাসরি কাজ করবে
  thumbnail: `https://picsum.photos/seed/${i + 10}/800/600`,
  gallery: [
    `https://picsum.photos/seed/${i + 1}/800/600`,
    `https://picsum.photos/seed/${i + 2}/800/600`,
    `https://picsum.photos/seed/${i + 3}/800/600`,
    `https://picsum.photos/seed/${i + 4}/800/600`,
    `https://picsum.photos/seed/${i + 5}/800/600`,
  ],
}));
