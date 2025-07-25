# Take Home Instructions

## Results

1. Everything asked for plus:
1. Implementation of Dark and Light themes.
1. Usage of URL query parameters to filter by genre and band.
1. Usage of Tailwind and regular CSS for styling.
1. Search for bands by album name in addition to band name.
1. Changed the favicon to a custom one for personalization.
1. Added e2e tests with Cypress.
1. Added a band description page (routing) with a video to add a bit of fun to the UX

## Running the project

- Install the necessary dependencies by running `npm install`.
- Run `npm run dev` to start the development server. The application will be available at `http://localhost:3000`.

## Running the e2e tests

- Ensure the development server is running.
- Run `npm run e2e:test:open` to open Cypress.
- In the Cypress UI, click on "E2E Testing".
- Select a browser (e.g., Chrome) and click "Start E2E Testing".
- Click on "spec.cy.ts" to run the e2e tests.

Alternatively, run `npm run e2e:test:run` to execute the tests in headless mode. This runs the tests in the console. This way of running the tests is used in ci/cd pipelines.

## Introduction

This project requires you to create a layout as shown in the provided [Sketch Design](https://www.sketch.com/s/547dbe8d-e0d7-4c52-b027-1d05fe2277a2/a/Mm2bAPW). The layout includes:

- A **left-hand side** displaying a list of musical bands fetched dynamically from a JSON file.
- A **search bar** for filtering bands by name.
- A **set of filters** they don't need to be functional just styled
- A **right-hand side** with static placeholder text ("copy").

---

## Folder Structure

- **`README.md`**: This file, providing detailed instructions.
- **`sources/`**: containing all of the assets needed
- **`mock_data/`**
  - `bands.json`: Contains band details for populating the list.
  - `[id]/.json`: Contains details about each individual band

---

## Tasks to Complete

1. **Understand the Layout**

   - Open the [Sketch Design](https://www.sketch.com/s/547dbe8d-e0d7-4c52-b027-1d05fe2277a2/a/Mm2bAPW).
   - Study the layout structure:
     - Left-hand side: Band list from `bands.json`.
     - Top: Search bar to filter bands.
     - Top: filters, don't need to be functional
     - Right-hand side: Static copy text.

2. **Set Up Your Development Environment**

   - Use any preferred tools (e.g., React, next, vue, plain JavaScript).
   - Prepare a local server if needed to serve the JSON file.

3. **Fetch and Display Data**

   - Fetch `bands.json` from the `mock_data/` folder.
   - Populate the list dynamically on the left-hand side that includes band name and album.
   - Match each band's **_id_** with an image file in the sources/ folder:
     - For example, if the id is 001, use im001.png from the sources/ folder
     - If the image does not exist, use default.png as a fallback
   - fetch information from each individual band from the other json files, fallback to a default text if no json for the artist

4. **Implement the Search Bar and Filter Functionality**

   - Add a search bar above the band list.
   - Filter displayed bands in real-time as the user types.
   - Add a set of filters next to the search bar to filter bands by genre
   - When a genre filter is clicked, display only the bands matching that genre.
   - Ensure the filters and the search functionality work together (e.g., applying both a genre filter and search query simultaneously).

5. **Add Icons**

   - Use any icon library (e.b. Font Awesome, React-Icons) to replicate the icons at the top. The icons do not need to match teh design exactly but should be similar in style, they needn't be functional.

6. **Add Static Copy**

   - On the right-hand side, include static placeholder text (e.g., “This is placeholder copy”).

7. **Stretch Goal**

   - Implement functionality to close the right-hand side content and expand the left hand side.

8. **Style the Layout**

   - Use `layout_sketch.png` as a reference for styling.
   - Ensure responsiveness.

9. **Test Your Implementation**

   - Verify the list loads correctly and filters as expected.
   - Confirm the layout matches the design.

10. **Submit Your Work**

- Zip your solution with:
  - All source code.
  - A short README for setup instructions.
- Submit your solution as an attachment or a link to a Github repository.
- Submit your solution within 2-3 business days, if you need more time please notify us

---

## Notes

- Frameworks: Use any modern framework React based preferred (React, Vue.js, Nextjs, Remix) or vanilla JavaScript.
- CSS Libraries: Feel free to use any CSS library, such as TailwindCSS, Bulma or Styled-Components
- Error Handling: Gracefully handle issues, such as JSON loading errors.
- Comments: Include comments for maintainability.

---

## Version History

- **1.0**: Initial release.
