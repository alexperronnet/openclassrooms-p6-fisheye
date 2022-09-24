// Import all needed views
import { PhotographerSummary, PhotographerMedias, PhotographerAside } from '@views'

// Create the main home view
export default function MainPhotographer(data) {
  // Create main element
  const main = document.createElement('main')
  main.classList.add('main')
  main.id = 'main-photographer'

  // Create photographer summary and medias
  main.append(PhotographerSummary(data), PhotographerMedias(data), PhotographerAside(data))

  // Return main
  return main
}
