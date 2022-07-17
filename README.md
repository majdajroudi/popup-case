## Project Requirements
### General Issues
- The font list should be pulled from the following API (https://apiv2.popupsmart.com/api/googlefont). 
- The "family" of the font should be displayed on the dropdown and sorted from A to Z. The fonts whose "category" is "monoscope" should be removed from the list.
- The user should be able to change the Popups text through the "General Settings" section in the sidebar. 
- The popup close icon should not have functionality.

### In form submission
- All fields must be filled/selected; the email addres must be valid
- Data should be saved in localStorage.
- Step 2, "success" popup should appear

## Assumptions
- The headliner of the popup is always in caps
- No "Open Popup" button is needed 
- No "Back" button is needed after submission
- "Close popup" button has no functionality (as described in the assignment document)
- If no success message is entered then the message is "Success"

## Starting the app

In the project directory, you can start the app by running:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!