---
title: "Day 4 – Physical Device Testing, Mobile UI Fixes & Edge Case Validation"
date: "2026-10-22"
tagline: "Moving from an emulator to a real Android smartphone, fixing mobile UI bugs, and stress-testing login edge cases."
preview: "Day 4 was all about testing the mock APK on real hardware. I installed the app on an Android phone, fixed responsive layout and back-button issues, and verified security lockouts and role features across the board."
author: ""
image: "/images/blog-internD4.jpg"
---

![Intern Day 4](../../images/blog-internD4.jpg)

Day 4 of my internship was all about taking our prototype out of the computer emulator and putting it to the test on real hardware. After getting the mock Android APK compiling yesterday, today's focus shifted to physical device validation, UI/UX refinements for small screens, and thorough edge-case testing.

Seeing the app actually launch and run smoothly on a real Android smartphone was a huge highlight—and it immediately helped me catch a few mobile-specific bugs that didn't show up on a desktop monitor!

## What I Actually Got Done Today

Today involved a mix of hands-on mobile testing, frontend CSS troubleshooting, native Android adjustments, and structured quality assurance across all three user roles:

1. **Physical Device Validation:** I transferred and installed the compiled mock APK onto a real Android smartphone. It launched smoothly and ran completely offline, confirming that the Capacitor WebView layer was reading the local web assets properly without needing an active internet connection.
2. **Exploring Capacitor's App Structure:** To understand how the packaged app behaves under the hood, I mapped out the prototype's directory structure and studied how Capacitor bundles web files inside the native Android runtime shell.
3. **Manual UI/UX Auditing & CSS Extraction:** Testing on a physical phone screen immediately revealed small-screen layout issues like text clipping and awkward alignments. I traced the compiled HTML blocks inside the bundled JS files, located the matching classes in `portal.css`, and worked with AI to apply clean styling fixes directly inside the `android/app/src/main/assets/public/assets` directory.
4. **Authentication & Lockout Testing:** I ran the login portal through strict security edge cases. I confirmed that invalid usernames and passwords are safely blocked, valid logins route users straight to their assigned dashboards, and entering the wrong password 5 times triggers a 15-minute account lockout timer.
5. **Superadmin Role Verification:** I tested creating new customer profiles, company entries, and user credentials in the mock database, confirming that the new accounts could log in right away. I also verified that new branches or sites can only be created after selecting a valid parent customer.
6. **Customer Admin & Branch Manager Testing:** I verified dashboard chart filters across four timelines (Today, Monthly, Annually, and Custom Date Ranges) alongside ticket search registers. I also tested the Weighing Ticket and Summary Report print previews, as well as the Branch Manager's contract status toggles and monthly overview pages.

## Overcoming the Technical Roadblocks

Testing on a real smartphone uncovered a few subtle issues with how web layouts and physical phone buttons interact:

- **The Shifting Notification Dropdown:** The alert dropdown box was positioned relative to the notification bell icon. Because different users have usernames of varying lengths, the bell icon shifted horizontally depending on who logged in, pushing the dropdown box off the edge of smaller screens. I fixed this by switching the mobile CSS to use `fixed` positioning so the notification box always opens in the exact same reliable spot.
- **Wide Tables Breaking Mobile Layouts:** The Site Breakdown and Material Breakdown tables on the Customer Admin dashboard used fixed column widths, causing the whole screen to stretch sideways on a phone. I added mobile media queries in `portal.css` to enable horizontal overflow scrolling specifically on the `.card-body` container, keeping the main layout intact.
- **App Closing on Physical Back Button:** Pressing the Android phone's physical back button immediately exited the entire app instead of navigating to the previous page. I updated the back-button handler inside `MainActivity.java` so pressing back cleanly steps backward through the app's internal navigation history.

## Key Takeaways from Day 4

Testing on actual hardware highlighted several important lessons about hybrid mobile development:

- **Real devices catch what emulators miss:** Screen scaling, touch targets, and hardware buttons behave differently on an actual phone compared to a computer screen, making early physical testing essential.
- **Relative positioning can be tricky on mobile:** Elements tied to dynamic text (like usernames) can easily shift out of bounds on narrow screens unless anchored carefully.
- **Native hardware needs explicit wiring:** Wrapping a web app into an APK isn't just about styling—hardware controls like the Android back button have to be properly connected to the web view's navigation history so the app feels natural to use.
- **Good organization saves time later:** While digging deep into the code helped me fix bugs quickly today, I realized I need to set aside dedicated time to keep my project directories tidy before handing them over.

> "An app only feels finished once it survives real hands and a real screen."

## What's Next on My Plate

With the mobile prototype running smoothly and all core user flows verified, tomorrow will be all about wrapping up and preparing the final handover:

- **Final Code Cleanup:** Strip out temporary `console.log` statements, placeholder comments, and unused CSS rules across the prototype files.
- **Handover Documentation Assembly:** Organize the initialization SQL scripts, setup instructions, and the final stable mock APK into a clean evaluation folder.
- **Final Deliverable Submission:** Package the entire workspace into a neat archive and submit it to my supervisor for review.

Day 4 was a rewarding step forward. Fixing the mobile layout quirks and wiring up the native back button made the prototype feel much closer to a real, production-ready mobile app, and I'm ready to get everything cleaned up for handover tomorrow!
