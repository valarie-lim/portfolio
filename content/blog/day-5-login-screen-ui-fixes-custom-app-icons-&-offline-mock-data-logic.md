---
title: "Day 5 Login Screen UI Fixes, Custom App Icons & Offline Mock Data Logic"
date: "2026-10-23"
tagline: "Polishing the mobile login layout, automating custom app icons, and exploring how offline mock data and iOS builds work."
preview: "Day 5 was all about polishing the mobile prototype. I fixed an alignment bug on the login screen, generated custom app icons with Capacitor Assets, updated Android back-button callbacks, and explored how our offline mock data and iOS builds work."
author: ""
image: "/images/blog-internD5.png"
---

![Intern Day 5](../../images/blog-internD5.png)

Day 5 of my internship was all about polishing the mobile prototype so it looks and feels like a real product. After getting the app running smoothly on a physical phone yesterday, I spent today fixing a few lingering layout bugs, replacing the default app logo, and digging deeper into how our offline data and cross-platform builds work under the hood.

Seeing our custom logo sitting cleanly on the phone's home screen instead of the default Capacitor icon made a huge difference in how finished the app looks!

## What I Actually Got Done Today

Today involved a mix of frontend CSS debugging, automated asset generation, native Android updates, and cross-platform research:

1. **Fixing the Login Screen Layout:** I tracked down a visual bug where the password input box looked pushed away from the left side on the login screen. It turned out the AI-generated code had wrapped the password field inside a `.search-bar` class to align the visibility eye button, accidentally pulling in extra padding meant for search bars. I added a targeted CSS rule to fix the padding inside the login form and verified the alignment across phones, tablets, and desktop browsers.
2. **Automating Custom App Icons:** Instead of manually resizing images for dozens of screen densities, I installed `@capacitor/assets` and ran a single terminal command to generate all the properly scaled Android icons from our custom logo. I checked the icons across multiple virtual screen sizes to confirm they looked sharp without stretching.
3. **Studying the Offline Mock Data Logic:** I dug into the JavaScript files to understand how the app displays realistic weighbridge tickets and charts without an internet connection. I discovered it uses a deterministic random number generator (`mulberry32`) seeded with calendar dates, which ensures the exact same set of tickets appears every time the app opens.
4. **Updating the Android Back-Button Handler:** I cleared a deprecation warning in Android Studio regarding the `onBackPressed()` method I used yesterday. I updated `MainActivity.java` to use the modern `OnBackPressedDispatcher` callback system so both physical back buttons and modern edge-swipe gestures step safely through the app's pages.
5. **Cross-Platform iOS Research:** I researched how packaging the same Capacitor project for Apple iOS (`.ipa`) compares to Android (`.apk`). Even though the web codebase stays identical, building for iOS requires a macOS machine running Xcode, meaning Windows developers have to rely on cloud build tools or remote Mac environments.

## Overcoming the Technical Roadblocks

A couple of build quirks caught me off guard today, especially around how Capacitor syncs files between folders:

- **Disappearing CSS Fixes in VS Code:** Early in the day, I applied my login layout fixes directly inside the Android asset folders, only to watch them vanish when I ran `npm run apk:debug`. I realized that the main root web directory is the actual source of truth, and running the build script automatically overwrites the Android directory. Copying my CSS updates back into the main root folder solved the issue permanently.
- **Android Studio Deprecation Warning:** Newer Android versions flagged my earlier back-button override as outdated. Replacing the old block with the modern AndroidX `OnBackPressedDispatcher` callback cleared the warning right away and kept swipe gestures working cleanly.

## Key Takeaways from Day 5

Today's work taught me a few practical habits that will save plenty of troubleshooting time going forward:

- **Always edit the root source files:** In hybrid setups like Capacitor, build commands overwrite platform folders automatically, so UI fixes must always live in the main web source directory.
- **Double-check AI-generated CSS classes:** AI tools often reuse existing utility classes (like `.search-bar`) as quick layout shortcuts, so inspecting class names is key when tracking down odd spacing bugs.
- **Check `package.json` before guessing commands:** I wasted a bit of time running `npm run dev` before checking `package.json` and seeing the project actually uses `npm run serve`. Reading the config file first is always faster.
- **Know platform build requirements early:** While Capacitor lets you share web code across Android and iOS, compiling an `.ipa` file still depends on macOS and Xcode.

> "Polishing the small details—like a clean login box and a proper home screen icon—is what turns a working prototype into something that feels like a real product."

## What's Next on My Plate

With the Weighbridge Portal APK cleaned up and polished, tomorrow will focus on reviewing feedback and getting ready for the next phase:

- **Feedback Review:** Go through any technical comments or suggestions from my supervisor on the submitted Weighbridge Portal APK.
- **Workspace Maintenance:** Clean out temporary build test files and safely back up the stable source code repository.
- **Cross-Platform Practice:** Keep studying the project structure and review the steps needed to prepare a Capacitor project for an iOS build template.
- **Next Assignment Preparation:** Get ready for instructions on the next project module or assignment.

Day 5 was a great wrap-up for this stage of the prototype. Between fixing the login alignment, automating the custom app icons, and understanding how the offline mock data works, the app feels much more solid and ready for review!