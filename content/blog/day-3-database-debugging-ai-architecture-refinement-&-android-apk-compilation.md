---
title: "Day 3 Database Debugging, AI Architecture Refinement & Android APK Compilation"
date: "2026-10-21"
tagline: "Fixing database inconsistencies, refining a multi-AI development workflow, and successfully compiling a mock Android APK."
preview: "Day 3 was a major technical milestone. I resolved multiple SQL errors across the application, refined the project architecture through Claude and ChatGPT peer reviews, validated authentication for three user roles, and successfully compiled and launched a mock Android APK in the Android Studio emulator."
author: ""
image: "/images/blog-internD3.png"
---

![Intern Day 3](../../images/blog-internD3.png)

Day 3 of my internship was all about turning yesterday's architectural planning into something more tangible. After getting the local PHP application running and mapping out the mobile migration strategy, I moved into database debugging, architecture refinement, and my first proper Android APK compilation.

There were quite a few database inconsistencies waiting to be uncovered, but the biggest highlight was getting a mock Android application successfully compiled and running inside the Android Studio emulator!

**## What I Actually Got Done Today**

Today involved a combination of hands-on SQL debugging, AI-assisted architecture planning, authentication testing, and mobile development:

1. **Database Error Hunting:** I tracked down multiple missing database columns across the tenant tables, particularly in the contract and weighout modules. I used targeted SQL `ALTER TABLE` statements through phpMyAdmin to add the missing fields, including `Site`, `TicketNo`, `TimeIn`, `VehicleId`, and `ContractCode`. This resolved several database errors that were preventing the Contracts, Reports, and Summary pages from rendering properly.

2. **Fixing Report Query Inconsistencies:** The summary reports were throwing an SQL error because the backend expected a `CustomerCode` field, while the parent customer table was still using `Code`. I aligned the database column naming with the application's existing queries and addressed the related foreign key constraints to restore the expected table relationships.

3. **Cleaning Up the File Path Architecture:** I revisited the folder path structure across the project and simplified several file references. Since yesterday's browser cache clearing had already resolved the relative inclusion loops, I reverted the customer module to its standard relative path formatting instead of keeping unnecessary path modifications.

4. **Cross-Model AI Architecture Review:** Rather than letting Claude generate code immediately based on its initial analysis, I used a more deliberate approach. I generated the initial architectural blueprint with Claude, then transferred its findings into ChatGPT for an independent review. This helped me identify potential gaps in the multi-tenant session isolation, role-based routing, and mobile application structure before proceeding with code generation.

5. **Improving the AI Prompting Workflow:** I expanded the initial analysis into a three-prompt refinement process, using feedback from both AI models to progressively improve the architectural instructions. The objective was to establish a more accurate blueprint before asking Claude to produce the actual decoupled project files.

6. **Three-Role Authentication Testing:** Before leaving work, I successfully completed the initial login tests for all three target roles: `superadmin`, `tecktonic_admin`, and `q1_manager`. Using the correct pre-configured BCrypt credentials, I verified that each account could authenticate successfully and reach its respective dashboard without routing errors.

7. **First Successful Android APK Compilation:** I learned how to use Cursor as my development environment to assemble the decoupled project files into an Android APK. I configured the necessary Node.js, Java 21, and Gradle environment, then used the Android Studio emulator to install and launch the generated mock APK. The application compiled successfully and ran smoothly inside the emulator.

**## Overcoming the Technical Roadblocks**

Today's challenges were less about getting the application started and more about identifying inconsistencies between its database structure, backend queries, and intended mobile architecture.

- **The Missing SQL Columns:** Several pages initially failed with `1054 Unknown column` errors. The application was referencing attributes such as `Description` and `dateTime` that were missing from the corresponding database tables. I investigated the errors, compared the expected fields against the actual table structures, and applied the necessary schema updates through phpMyAdmin.

- **The CustomerCode Mismatch:** The summary report encountered another database error because the backend query expected `cu.CustomerCode`, but the existing customer table used `Code`. This required more than simply changing a query. I also had to account for the existing foreign key relationships, temporarily remove the affected constraints, align the column names, and restore the relationship with an `ON UPDATE CASCADE` safeguard.

- **Avoiding Premature AI Code Generation:** Claude's initial architectural analysis did not fully account for how certain application features, particularly role-based redirection, would need to be separated into REST API endpoints and frontend routing logic. Instead of immediately generating code and discovering these problems during compilation, I used ChatGPT as an independent reviewer and refined the instructions through multiple rounds of feedback.

This cross-checking process helped reduce the risk of carrying architectural assumptions into the actual implementation.

**## Key Takeaways from Day 3**

Today's work gave me a better understanding of how database structures, application architecture, and mobile deployment fit together:

- **Database schemas must match application expectations:** I learned to trace SQL errors back to their actual table definitions rather than treating every failed page as a frontend issue. Understanding the relationship between database columns and backend queries is essential when maintaining an existing application.

- **AI-generated architecture still needs independent validation:** Using multiple AI models does not automatically guarantee correctness. However, asking one model to review another's findings helped me identify potential omissions and improve the quality of my technical instructions before implementation.

- **Authentication testing goes beyond successful login:** Getting the correct credentials to work is only the baseline. I also need to investigate incorrect passwords, empty inputs, invalid usernames, and whether each role is properly restricted to its intended dashboard and permissions.

- **A hybrid mobile build involves several moving parts:** I gained practical exposure to how Cursor, Node.js, Java 21, Gradle, and Android Studio work together to package web-based project files into an Android APK. I also started understanding how the mobile web shell maps the application layout directories for deployment.

- **Separate mock validation from backend integration:** Building a mock APK allowed me to validate the mobile packaging environment and application presentation without introducing unnecessary risks to the original backend during the initial development stage.

> "A successful compilation is only the beginning; a reliable application starts with a properly validated architecture."

**## What's Next on My Plate**

With the initial mock APK successfully running inside Android Studio, tomorrow's focus will shift towards authentication edge cases, interface refinement, and navigation testing:

- **Login Edge-Case Testing:** Test incorrect passwords, empty login fields, and invalid usernames inside the Android Studio emulator to identify potential authentication handling issues.
- **Mobile UI/UX Refinement:** Continue using Claude and ChatGPT to review the frontend components, focusing on responsive layouts, text scaling, button sizing, and overall usability across different screen sizes.
- **Role-Based Navigation Validation:** Test dashboard switching and navigation flows for `superadmin`, `tecktonic_admin`, and `q1_manager` to ensure each role reaches the correct views within the mock application.
- **Final Demo APK Preparation:** Compile an optimized mock APK using Cursor and document the build and deployment process for the upcoming project presentation.

Day 3 was a significant step forward. I went from troubleshooting database errors to successfully running an Android APK in an emulator, while also developing a more structured approach to AI-assisted software architecture. There is still plenty of testing to do, but having the first working mobile prototype gives me a much clearer direction for the next stage of development!
