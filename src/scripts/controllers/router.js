// Import controllers
import { CreatePages } from '@controllers'

// Create the router
export default function Router(data) {
  // Create all pages on load
  CreatePages(data)

  // Listen for route changes
  window.addEventListener('popstate', () => {
    // Create pages for all routes
    CreatePages(data)
  })

  // Listen for click on internal links
  document.addEventListener('click', event => {
    // Get the link
    const link = event.target.closest('a')

    // Check if the link is internal
    if (link && link.origin === window.location.origin) {
      // Prevent default behavior
      event.preventDefault()

      // Get the new URL
      const url = new URL(link.href)

      // Check if the URL is different
      if (url.pathname !== window.location.pathname) {
        // Update the URL
        window.history.pushState({}, '', url)

        // Render the page
        CreatePages(data)
      }
    }
  })
}
