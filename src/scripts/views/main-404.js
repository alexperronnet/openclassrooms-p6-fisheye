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
    "Malheuresement la page que vous recherchez n'existe pas ou n'est plus disponible."

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
