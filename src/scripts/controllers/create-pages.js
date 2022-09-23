// Import needed views
import { HomeMain, PhotographerMain, NotFoundMain } from '@views'

// Create all pages
export default function createPages() {
  // Generate the page
  const generatePage = (mainContent, title) => {
    // Get the main element
    const main = document.querySelector('main')

    // Clear the main element
    main.innerHTML = ''

    // Append the main content
    main.appendChild(mainContent)

    // Update title document
    document.title = title + ' — FishEye'

    // Update SEO title with document title
    document.querySelector('meta[name="title"]').setAttribute('content', document.title)
    document.querySelector('meta[property="og:title"]').setAttribute('content', document.title)
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', document.title)
  }

  // Generate the home page
  if (window.location.pathname === '/') {
    generatePage(HomeMain(), 'Accueil')
  }

  // Generate the photographer page
  if (window.location.pathname.includes('/photographer')) {
    generatePage(PhotographerMain(), 'Photographe')
  }

  // Generate the 404 page if no page is found
  if (!window.location.pathname.includes('/photographer') && window.location.pathname !== '/') {
    generatePage(NotFoundMain(), 'Page introuvable')
  }
}
