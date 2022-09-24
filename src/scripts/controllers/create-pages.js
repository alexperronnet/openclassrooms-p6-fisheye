// Import needed views
import { Header, MainHome, Main404, MainPhotographer } from '@views'

// Create all pages
export default function createPages(useData) {
  // Generate the page
  const GeneratePage = (mainContent, title) => {
    // Get the app element
    const app = document.querySelector('#app')

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

  if (window.location.pathname === '/') {
    return GeneratePage(MainHome(useData), 'Accueil')
  }

  // Generate the photographer page for each photographer
  if (window.location.pathname.includes('/')) {
    // Get the photographer slug
    const slug = window.location.pathname.split('/')[1]

    // Get the photographer data
    const photographer = useData.find(photographer => photographer.slug === slug)

    // Check if the photographer exists
    if (photographer) {
      return GeneratePage(MainPhotographer(photographer), photographer.name)
    }
  }

  // Generate the 404 page if no page is found
  return GeneratePage(Main404(), 'Page introuvable')
}
