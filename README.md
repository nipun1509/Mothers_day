# Mother's Day Tribute Blog

## Project Overview

This project is a Mother’s Day Tribute Blog built using Next.js, designed to showcase stories celebrating mothers. It replicates the UI from a provided Figma design and includes features like a homepage with a carousel, category filtering, recent articles, a sidebar, and dynamic story detail pages. The goal was to create a responsive, user-friendly frontend application with clean code and modular structure, focusing on UI fidelity, functionality, and responsiveness across devices.

The project uses a local JSON file for article data, implements client-side search and category filtering, and ensures a seamless user experience with a working carousel and dynamic routing.

## Features Implemented

### Home Page (`/`)

- **Hero Section**: A carousel displaying 3 featured tribute stories with navigation arrows (next/previous).
- **Explore by Category Section**: Cards for categories (Stories, Health, Inspiration) with a horizontal scroll and navigation arrows. Clicking a category filters the Recent Articles section.
- **Recent Articles Section**: Cards displaying article image placeholders, title, excerpt, reading time, and category tag, with a "Read More" button linking to individual story pages.
- **Sidebar**: Static content including an Author Profile and Destinations/Highlights section.

### Story Detail Page (`/articles/:id`)

- Dynamic routing to display full article content, including title, author name, submission date, category, reading time, and a placeholder image.

### Search Functionality

- A search bar on the homepage that filters articles by title or excerpt (client-side search).

### Category Filter

- Clicking a category card filters the articles dynamically in the Recent Articles section.

### Responsiveness

- Fully responsive design for desktop, tablet, and mobile devices using Tailwind CSS.

### Data Handling

- Articles are stored in a local `articles.json` file, containing ID, title, excerpt, full content, author name, submission date, category, reading time, and image URL (placeholders).

### Additional Features

- Pagination in the Recent Articles section.
- Smooth transitions for the carousel and category filter.

## Setup Instructions

Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/mothers-day-tribute-blog.git
   cd mothers-day-tribute-blog

2. **Install Dependencies**:
   ```bash
   npm install

3. **Run the Development Server**:
   ```bash
   npm run dev

4. **Build for Production**:
   ```bash
   npm run build
   npm run start
   

# Live Deployment

https://mothersday-rg78jcq7w-nipun1509s-projects.vercel.app/

# Technologies Used

Next.js: Framework for server-side rendering and routing.
React: For building UI components.
Tailwind CSS: For responsive styling.
JavaScript (ES6+): For logic and state management.
Local JSON: For article data storage.

# Notes

The project avoids hydration errors by using isMounted checks for client-side rendering of dynamic components like the carousel and search bar.
The carousel in the Hero Section uses basic state management with useState for next/previous navigation.
The search and category filter are implemented client-side using JavaScript array filtering.
Placeholder images are used due to the absence of real image URLs; replace them with actual images as needed.

# Future Improvements

Add a theme toggle (light/dark mode).
Implement a backend API for dynamic article fetching.
Enhance the search functionality with more advanced filtering (e.g., by category or date).

