// import all needed views
import { PhotographerCard } from '@views'

// Create the main home view
export default function MainHome(useData) {
  // Create home main element
  const main = document.createElement('main')
  main.classList.add('main')
  main.id = 'main-home'

  // Create photographers grid
  const photographerGrid = document.createElement('section')
  photographerGrid.classList.add('photographers-grid')

  // Add all photographers cards to the grid and sort them by id
  useData
    .sort((a, b) => a.id - b.id)
    .forEach(photographer => {
      photographerGrid.append(PhotographerCard(photographer))
    })

  // Append photographers grid to home main
  main.append(photographerGrid)

  // Return main
  return main
}
