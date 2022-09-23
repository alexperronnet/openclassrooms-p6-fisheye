// Import needed views
import { PhotographerCard } from '@views'

// Create the main home view
export default function HomeMain(useData) {
  // Get the main element
  const main = document.querySelector('main')

  // Add the main content
  main.innerHTML = `
    <section class="photographers-grid">
      ${
        // Create a photographer
        useData
          // Sort the photographers by id
          .sort((a, b) => a.id - b.id)
          // Create a photographer card for each photographer
          .map(photographer => PhotographerCard(photographer))
          // Join the photographer cards
          .join('')
      }
    </section>
  `

  // Return the main element
  return main.outerHTML
}
