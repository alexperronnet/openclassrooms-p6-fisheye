// Create the main home view
export default function Main404() {
  // Create 404 main element
  const main = document.createElement('main')
  main.classList.add('main')
  main.id = 'main-404'

  // Create 404 section
  const notFound = document.createElement('section')
  notFound.classList.add('not-found')

  // Create 404 title
  const notFoundTitle = document.createElement('h1')
  notFoundTitle.classList.add('not-found__title')
  notFoundTitle.textContent = 'Oups... 😿'

  // Create 404 text
  const notFoundDescription = document.createElement('p')
  notFoundDescription.classList.add('not-found__text')
  notFoundDescription.textContent =
    "Malheuresement la page currentPage n'existe pas ou n'est plus disponible."

  // Get the current path and remove the first slash
  const currentPath = window.location.pathname.slice(1)

  // Create span for 404 text
  const notFoundSpan = document.createElement('span')
  notFoundSpan.classList.add('not-found__text--page')
  notFoundSpan.textContent = currentPath

  // Append span to 404 text by replacing currentPage
  notFoundDescription.innerHTML = notFoundDescription.innerHTML.replace(
    'currentPage',
    notFoundSpan.outerHTML
  )

  // Create 404 link
  const notFoundLink = document.createElement('a')
  notFoundLink.classList.add('not-found__link')
  notFoundLink.href = '/'
  notFoundLink.title = "Retourner à l'accueil"
  notFoundLink.textContent = "Retourner à l'accueil"

  // Append 404 title, path, description and link to 404 section
  notFound.append(notFoundTitle, notFoundDescription, notFoundLink)

  // Append 404 section to 404 main
  main.append(notFound)

  // Return 404 main
  return main
}
