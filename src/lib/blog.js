import { SITE_CONFIG } from "../config";

// Scans markdown contents smoothly at build time
const rawPosts = import.meta.glob("../../content/blog/*.md", { eager: true, query: "?raw", import: "default" });

function parseMarkdown(fileContent, slug) {
  const todayDate = new Date().toISOString().split("T")[0];

  if (!fileContent.startsWith("---")) {
    return {
      slug,
      title: formatSlugToTitle(slug),
      date: todayDate,
      author: SITE_CONFIG.authorName,
      content: fileContent,
      image: null,
    };
  }

  const parts = fileContent.split("---\n");

  if (parts.length < 3) {
    const backupParts = fileContent.split("---");
    if (backupParts.length >= 3) parts.push(...backupParts.slice(1));
  }

  const yamlSection = parts[1] || "";
  const content = parts.slice(2).join("---\n") || "";

  const data = {};
  yamlSection.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line
        .slice(colonIndex + 1)
        .trim()
        .replace(/^["']|["']$/g, "");
      if (key) data[key] = value;
    }
  });

  const finalTitle = data.title && data.title.trim() !== "" ? data.title : formatSlugToTitle(slug);
  const finalAuthor = formatAuthorName(data.author);

  return {
    slug,
    title: finalTitle,
    date: data.date || todayDate,
    tagline: data.tagline || "",
    preview: data.preview || "No preview available",
    author: finalAuthor,
    readingtime: Math.ceil((content.split(/\s+/).length || 1) / 200),
    content: content.trim(),
    image: data.image || null,
  };
}

function formatSlugToTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatAuthorName(authorField) {
  if (!authorField || authorField.trim() === "" || authorField.trim() === "Anonymous") {
    return SITE_CONFIG.authorName;
  }
  return authorField.trim();
}

export function getAllPosts() {
  try {
    const posts = Object.entries(rawPosts).map(([filepath, fileContent]) => {
      const filename = filepath.split("/").pop();
      const slug = filename.replace(".md", "");
      return parseMarkdown(fileContent, slug);
    });
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (err) {
    console.error("Error processing blog compilation:", err);
    return [];
  }
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}
