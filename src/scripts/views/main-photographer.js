// Import needed views
import { PhotographerHeader, PhotographerMedias } from '@views'

// Create the main photographer view
export default function PhotographerMain(useData) {
  // Get the main element
  const main = document.querySelector('main')

  // Add the main content
  main.innerHTML = `
    ${
      // Add the photographer header
      PhotographerHeader(useData)
    }

    ${
      // Add the photographer medias
      PhotographerMedias(useData)
    }
  `

  // Return the main element
  return main.outerHTML
}
