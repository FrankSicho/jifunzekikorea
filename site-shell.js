const sitePages = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "lessons", label: "Lessons", href: "lessons.html" },
    { id: "hangul", label: "Hangul", href: "hangul.html" },
    { id: "vocabulary", label: "Vocabulary", href: "vocabulary.html" },
    { id: "conversations", label: "Conversations", href: "conversations.html" },
    { id: "quizzes", label: "Quizzes", href: "quizzes.html" },
    { id: "videos", label: "Videos", href: "videos.html" },
    { id: "culture", label: "Culture", href: "culture.html" },
    { id: "about", label: "About", href: "about.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
];

const socialLinks = [
    {
        label: "Search Korean vocabulary",
        href: "vocabulary.html#vocabularySearch",
        className: "social-search",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg>'
    },
    {
        label: "Visit KoreanWithVanrosa on YouTube",
        href: "https://www.youtube.com/@Korean_fun_time",
        className: "social-youtube",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.5 15.6V8.4L15.8 12Z"></path></svg>'
    },
    {
        label: "Visit KoreanWithVanrosa on TikTok",
        href: "https://www.tiktok.com/@korean.with.vanro",
        className: "social-tiktok",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="tiktok-cyan" d="M12.5.1h3.9c.1 1.5.6 3.1 1.8 4.2 1.1 1.1 2.7 1.6 4.2 1.8v4c-1.4-.1-2.9-.4-4.2-1a10 10 0 0 1-1.6-.9v8.8c-.1 1.4-.6 2.8-1.4 3.9a7.4 7.4 0 0 1-5.9 3.2 7.5 7.5 0 0 1-4.1-1 7.6 7.6 0 0 1-3.7-5.7 7 7 0 0 1 2.6-6.5 7.4 7.4 0 0 1 6.1-1.7v4.4a3.4 3.4 0 0 0-3 .4 3.1 3.1 0 0 0-1.5 3.4 3.4 3.4 0 0 0 3.5 2.9 3.2 3.2 0 0 0 2.8-1.6c.2-.3.4-.7.4-1.1.1-1.8.1-3.6.1-5.4 0-4 0-8 .1-12.1Z" transform="translate(-.8 .8)"></path><path class="tiktok-pink" d="M12.5.1h3.9c.1 1.5.6 3.1 1.8 4.2 1.1 1.1 2.7 1.6 4.2 1.8v4c-1.4-.1-2.9-.4-4.2-1a10 10 0 0 1-1.6-.9v8.8c-.1 1.4-.6 2.8-1.4 3.9a7.4 7.4 0 0 1-5.9 3.2 7.5 7.5 0 0 1-4.1-1 7.6 7.6 0 0 1-3.7-5.7 7 7 0 0 1 2.6-6.5 7.4 7.4 0 0 1 6.1-1.7v4.4a3.4 3.4 0 0 0-3 .4 3.1 3.1 0 0 0-1.5 3.4 3.4 3.4 0 0 0 3.5 2.9 3.2 3.2 0 0 0 2.8-1.6c.2-.3.4-.7.4-1.1.1-1.8.1-3.6.1-5.4 0-4 0-8 .1-12.1Z" transform="translate(.8 -.8)"></path><path d="M12.5.1h3.9c.1 1.5.6 3.1 1.8 4.2 1.1 1.1 2.7 1.6 4.2 1.8v4c-1.4-.1-2.9-.4-4.2-1a10 10 0 0 1-1.6-.9v8.8c-.1 1.4-.6 2.8-1.4 3.9a7.4 7.4 0 0 1-5.9 3.2 7.5 7.5 0 0 1-4.1-1 7.6 7.6 0 0 1-3.7-5.7 7 7 0 0 1 2.6-6.5 7.4 7.4 0 0 1 6.1-1.7v4.4a3.4 3.4 0 0 0-3 .4 3.1 3.1 0 0 0-1.5 3.4 3.4 3.4 0 0 0 3.5 2.9 3.2 3.2 0 0 0 2.8-1.6c.2-.3.4-.7.4-1.1.1-1.8.1-3.6.1-5.4 0-4 0-8 .1-12.1Z"></path></svg>'
    },
    {
        label: "Visit KoreanWithVanrosa on Instagram",
        href: "https://www.instagram.com/korean_with_vanrosa?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==",
        className: "social-instagram",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="instagramGradient" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#feda75"></stop><stop offset=".45" stop-color="#fa7e1e"></stop><stop offset=".72" stop-color="#d62976"></stop><stop offset="1" stop-color="#4f5bd5"></stop></linearGradient></defs><path fill="url(#instagramGradient)" d="M7 0h10a7 7 0 0 1 7 7v10a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7a7 7 0 0 1 7-7Zm0 2.4A4.6 4.6 0 0 0 2.4 7v10A4.6 4.6 0 0 0 7 21.6h10a4.6 4.6 0 0 0 4.6-4.6V7A4.6 4.6 0 0 0 17 2.4H7Zm5 3.4a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4Zm0 2.4a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm6.4-3.7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg>'
    }
];

const headerMount = document.getElementById("site-header");
const currentPage = document.body.dataset.page;

if (headerMount) {
    headerMount.innerHTML = `
        <header class="mock-header">
            <nav class="mock-nav" aria-label="Main navigation">
                <a href="index.html" class="mock-brand">
                    <span class="mock-flag" aria-hidden="true">🇰🇷</span>
                    <span class="mock-brand-copy">
                        <strong>Jifunze<span>Kikorea</span></strong>
                        <em>with KoreanWithVanrosa</em>
                        <small>Learn Korean in English &amp; Kiswahili</small>
                    </span>
                </a>
                <button class="menu-toggle mock-menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false">☰</button>
                <ul class="mock-links" id="navLinks">
                    ${sitePages.map(page => `<li><a ${page.id === currentPage ? 'class="current" aria-current="page"' : ""} href="${page.href}">${page.label}</a></li>`).join("")}
                </ul>
                <div class="mock-socials" aria-label="Social media and search">
                    ${socialLinks.map(link => `<a class="social-icon-link ${link.className}" href="${link.href}" aria-label="${link.label}" title="${link.label}" ${link.href.startsWith("https:") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${link.icon}</a>`).join("")}
                </div>
                <a href="lessons.html" class="mock-cta">Start Learning</a>
            </nav>
        </header>
    `;
}

const footerMount = document.getElementById("site-footer");

if (footerMount) {
    footerMount.innerHTML = `
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <a class="footer-logo" href="index.html"><span class="logo-mark">한</span>JifunzeKikorea</a>
                    <p>Learn Korean in English and Kiswahili.</p>
                </div>
                <nav class="footer-links" aria-label="Footer navigation">
                    ${sitePages.map(page => `<a href="${page.href}">${page.label}</a>`).join("")}
                </nav>
            </div>
            <div class="footer-bottom"><p>© 2026 JifunzeKikorea. Learn Korean with confidence.</p></div>
        </footer>
    `;
}
