# Editing site content

The site has a private content manager at `/admin/`, styled with JifunzeKikorea's indigo, pink, and Korean typography. It lets invited editors change the site settings and learning data without editing source code. Saving an edit commits the updated JSON file to the `main` branch; Netlify then rebuilds the site.

## Connect the site

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site** → **Import an existing project**, select `FrankSicho/jifunzekikorea`, and deploy the `main` branch. This is a static site: leave the build command blank and use `.` as the publish directory.
3. In the Netlify site dashboard, enable **Identity** and set registration to **Invite only**.
4. In Identity's **Services** settings, enable **Git Gateway**.
5. Invite your email address as an Identity user and accept the invitation.
6. Open `https://YOUR-SITE.netlify.app/admin/`, sign in, and edit **Site settings** or **Learning content**.

Only people invited through Netlify Identity should be able to sign in. Do not enable open registration. The CMS changes are saved to GitHub, and the public site updates after Netlify finishes deploying.

## What you can edit

- **Site settings:** branding and social links, the home page hero text and images, and the About page copy and photo.
- **Learning content:** vocabulary categories, words of the day, quiz questions, and vocabulary in Korean, romanization, English, and Swahili.

Newly uploaded images are stored in the repository's `uploads/` folder. Learning content and site settings are stored in `content/` as JSON.
