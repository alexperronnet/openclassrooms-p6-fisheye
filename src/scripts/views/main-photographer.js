// Import needed views
import { PhotographerHeader } from '@views'

// Create the main photographer view
export default function PhotographerMain(useData) {
  // Get the main element
  const main = document.querySelector('main')

  // Add the main content
  main.innerHTML = `
    ${
      // Create the photographer header
      PhotographerHeader(useData)
    }
  `

  // Return the main element
  return main.outerHTML
}
