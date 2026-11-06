---
title: ""
date: "2026-10-20"
tagline: "Wrestling with local server configurations, tracking down dynamic path errors, and designing a strategic AI pipeline."
preview: "Day 2 got highly technical fast. I set up a local XAMPP environment, fought through Apache redirect loops, manually rebuilt missing databases, and mapped out an efficient multi-AI workflow."
author: ""
image: "/images/internship-day2-dashboard.png"
---

![Local Dashboard Login Access Confirmation](../../images/blog-internD2-task-screenshot.png)

Day 2 of my internship is officially wrapped up, and it was a massive step up in technical complexity! If Day 1 was all about personal onboarding and adapting to basic gear challenges, today was a deep dive into local server configuration, codebase architecture, and strategic development planning.

I spent the day getting my hands dirty with a legacy PHP codebase, tracking down tricky deployment bugs, and setting up a solid baseline for the rest of my project.

## What I Actually Got Done Today

Instead of jumping straight into deep development, I focused heavily on building a robust local testing environment and understanding the application structure from the ground up:

1. **Warm-up Code Sessions:** While waiting for my supervisor to delegate the project specifics in the morning, I hopped back onto freeCodeCamp.org to run through algorithm and logical reasoning exercises to get my brain in the right gear.
2. **Local Environment Deployment:** I successfully installed and configured XAMPP, spinning up Apache and MySQL. I modified Apache's `DocumentRoot` settings and customized our PHP variables to ensure the platform could run locally without crashing.
3. **Hands-on Architecture Auditing:** Before asking AI to explain the code, I forced myself to dig through the project files manually. I studied how `login.php` and `.htaccess` manage routing, how user roles (superadmin, customer, branchmanager) are separated, and how the app handles multi-tenant client database routing.
4. **Tackling the Trial-and-Error Bugs:** I tracked down and squashed a painful Apache URL redirect loop and repaired multiple broken file paths inside `dashboard.php`. By the afternoon, the login system was 100% operational for both Superadmin and Customer accounts.
5. **Cost-Effective AI Prompt Strategy:** I designed a smart, token-saving AI strategy. I routed basic, high-volume debugging errors through free tiers of ChatGPT and Gemini, successfully saving my premium Claude Max usage strictly for high-precision, architectural deep dives.
6. **Mobile Migration Blueprint:** I researched the transition path to containerize this heavy PHP setup into an Android APK, mapping out a hybrid mobile comparison between Ionic Capacitor and native WebView wrappers.

## Overcoming the Technical Roadblocks

Things definitely didn't work right out of the box today. Moving a web system to a local environment always brings hidden gremlins, but working through them was incredibly rewarding:

- **The Redirect Loop & 500 Errors:** Shifting XAMPP’s root folder caused the browser to lock into a bad redirect cache while throwing Windows backslash folder errors. I solved this by swapping dynamic paths for absolute hardware overrides (`dirname(__DIR__, 2)`), utilizing native PHP slash separators, and hard-clearing the browser cache.
- **The Mystery of the Missing Database:** The repository's initial SQL file only contained the core master table—the operational customer tables (`lakweighbridge_tecktonicbau`) were completely missing, which crashed the dashboard post-login. I bypassed this by temporarily updating `Auth.php` to point to my local root port, then manually created the missing tables directly in the phpMyAdmin console to unlock the views.

## Key Takeaways from Day 2

Today taught me that a good developer isn't just someone who writes code, but someone who understands their environment:

- **Local baseline first:** Getting the app running locally _before_ doing heavy code updates gives you a visceral understanding of database relationships and real business logic.
- **Understand the server rules:** I learned exactly how Apache URL rewrites (`.htaccess`) interact with deep PHP folder systems and how to leverage directory-level security (`Deny from all`) to protect sensitive user assets.
- **Don't burn your premium tokens:** Managing AI usage like a resource—using free tools for trial-and-error brainstorming and premium tools for high-level structure—saves massive amounts of time and development budget.

> "Understand your system manually before you try to scale it digitally." Forcing myself to fix the server paths by hand today gave me a map of the codebase that no text reader could replace.

## What's Next on My Plate

With a completely operational local baseline running smoothly on my workstation, I have a clear game plan mapped out for tomorrow:

- **Claude Architecture Audit (Prompt 1):** Upload the 6 core PHP project files into Claude for a complete architecture and business logic validation.
- **Decoupled API Code Generation (Prompt 2):** Instruct the model to generate clean, static frontend views alongside structural backend JSON API endpoints based on our audit.
- **Cursor Live Compilation:** Spin up a sandboxed web directory (`/www`) inside Cursor editor using the free tier to test out the compiled hybrid mobile application shell.

Day 2 was intense, full of configuration hurdles, and highly technical—but seeing that login page load successfully made it completely worth it!
