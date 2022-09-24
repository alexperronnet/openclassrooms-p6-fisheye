// Import needed views
import { Header, MainHome, Main404, MainPhotographer } from '@views'

// Create all pages
export default function createPages(data) {
  // Get the app element
  const app = document.querySelector('#app')

  // Generate the page
  const GeneratePage = (mainContent, title) => {
    // Clear the app element
    app.textContent = ''

    // Append header and main content to app
    app.append(Header(), mainContent)

    // Update title document
    document.title = title + ' — FishEye'

    // Update SEO title with document title
    document.querySelector('meta[name="title"]').setAttribute('content', document.title)
    document.querySelector('meta[property="og:title"]').setAttribute('content', document.title)
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', document.title)
  }

  // If the page is the home page
  if (window.location.pathname === '/') {
    // Generate the home page
    GeneratePage(MainHome(data), 'Accueil')
  }

  // If the page is a photographer page
  else if (window.location.pathname.includes('/')) {
    // Get the photographer slug
    const slug = window.location.pathname.split('/')[1]

    // Get the photographer data
    const photographerData = data.find(photographer => photographer.slug === slug)

    // If the photographer exists
    if (photographerData) {
      // Generate the photographer page
      GeneratePage(MainPhotographer(photographerData), photographerData.name)
    }

    // If the photographer doesn't exist
    else {
      // Generate the 404 page
      GeneratePage(Main404(), '404')
    }
  }

  // If the page is not found
  else {
    // Generate the 404 page
    GeneratePage(Main404(), '404')
  }

  // Return the page
  return app
}
