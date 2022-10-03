// Import needed views
import { Header, MainHome, Main404, MainPhotographer } from '@views'

// Create all pages
export default function createPages(data) {
  // Manage the page
  const BuildPage = (mainContent, title) => {
    // Get the app element
    const app = document.querySelector('#app')

    // Clear the app element
    app.textContent = ''

    // Append header and main content to app
    app.append(Header(), mainContent)

    // Update title document & SEO meta
    document.title = title + ' — FishEye'
    document.querySelector('meta[name="title"]').setAttribute('content', document.title)
    document.querySelector('meta[property="og:title"]').setAttribute('content', document.title)
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', document.title)
  }

  // Home page
  if (window.location.pathname === '/') {
    BuildPage(MainHome(data), 'Home')
  }

  // Photographer page
  else if (
    data.map(photographer => photographer.slug).includes(window.location.pathname.replace('/', ''))
  ) {
    // Get the photographer
    const photographer = data.find(
      photographer => photographer.slug === window.location.pathname.replace('/', '')
    )

    BuildPage(MainPhotographer(photographer), photographer.name)
  }

  // 404 page
  else {
    BuildPage(Main404(), '404')
  }
}
