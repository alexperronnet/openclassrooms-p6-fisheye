// Import all needed views
import { PhotographerSummary, FilterMedias, PhotographerMedias, PhotographerAside } from '@views'

// Create the main home view
export default function MainPhotographer(data) {
  // Create main element
  const main = document.createElement('main')
  main.classList.add('main')
  main.id = 'main-photographer'

  // Append needed views
  main.append(
    // Create photographer summary
    PhotographerSummary(data),

    // Create photographer medias
    PhotographerMedias(data, FilterMedias()),

    // Create photographer aside
    PhotographerAside(data)
  )

  // Return main
  return main
}
