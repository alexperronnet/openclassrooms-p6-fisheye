// Import needed views
import { Header, HomeMain, PhotographerMain, NotFoundMain } from '@views'

// Create all pages
export default function createPages(useData) {
  // Generate the page
  const generatePage = (mainContent, title) => {
    // Get the header element
    const header = document.querySelector('header')

    // Clear the header element
    header.innerHTML = ''

    // Append the header
    header.appendChild(Header())

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
    return generatePage(HomeMain(useData), 'Accueil')
  }

  // Generate the photographer page for each photographer
  if (window.location.pathname.includes('/')) {
    // Get the photographer slug
    const slug = window.location.pathname.split('/')[1]

    // Get the photographer data
    const photographer = useData.find(photographer => photographer.slug === slug)

    // Check if the photographer exists
    if (photographer) {
      return generatePage(PhotographerMain(photographer), photographer.name)
    }
  }

  // Generate the 404 page if no page is found
  return generatePage(NotFoundMain(), 'Page introuvable')
}
