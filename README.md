# Web Development Studio - "WebStudio"

### Tech stack: HTML | CSS | JavaScript | SCSS | Swiper JS | SweetAlert

## Project Overview

The **"WebStudio"** project is a multi-page website designed for a web development studio. It includes various sections like the homepage, service offerings, contact information, portfolio, and more. Users can explore the studio’s services, view portfolios, book project plans, and even upload or create technical tasks.

## Project Structure

The project includes:

- 📄 **Index HTML file**
- 📁 **Styles folder** containing SCSS files
- 📁 **CSS folder** automatically generated from SCSS
- 📁 **JavaScript folder** with scripts for functionality:
  - `booking.js`
  - `file-upload.js`
  - `navigation.js`
  - `slider.js`
  - `text-animation.js`
- 📁 **Assets folder** for images

## Main Pages

1. **🏠 Homepage**:

   - Contains general information about WebStudio.
   - Displays a list of services offered.
   - Includes a contact form and a slider showcasing past projects.

2. **💼 About Page**:

   - Describes the studio’s mission, team, client-centric approach, and core philosophy.

3. **📞 Contact Page**:

   - Provides general information including address, contact number, and a contact form for email communication.

4. **🖼️ Portfolio Page**:

   - Showcases the studio's projects with links to view them.

5. **🛠️ Services Page**:

   - Lists all services offered by WebStudio along with descriptions.
   - Users can book a project combining multiple services, and a dialog window allows them to describe their needs and project goals.

6. **📝 Create Page**:
   - Allows users to upload a technical task document (saved in sessionStorage) or create a new task using a dialog window if they don’t have a text document.

## Features

- **Project Booking System:** Users can combine multiple services into one project plan and specify their requirements in a dialog box using SweetAlert for an intuitive booking experience.
- **Task Creation Module:** If the user doesn’t have a technical document, they can create a task using a dialog window, which can be saved for future reference.
- **Portfolio Slider:** A Swiper JS-powered slider showcases WebStudio's past projects, with smooth animations and transitions.
- **File Upload System:** Users can upload tech tasks directly, and this is saved using sessionStorage for later use.
- **Animations and SCSS Mixins:** The site features custom animations, SCSS mixins, and functions to enhance performance and design consistency.

## Libraries Used

- **Swiper JS:** For creating smooth and responsive sliders.
- **SweetAlert:** For creating user-friendly dialog boxes, especially in the project booking and task creation process.

The website is fully responsive and interactive, offering a smooth user experience with animations, dialogs, and well-structured navigation.
