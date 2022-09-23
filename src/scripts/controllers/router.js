// Create the router
export default function Router(createPages) {
  // Render page on first load
  createPages()

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
        window.history.pushState({}, '', url.pathname)

        // Render the page
        createPages()
      }
    }
  })

  // Listen for popstate
  window.addEventListener('popstate', () => {
    // Render the page
    createPages()
  })
}
