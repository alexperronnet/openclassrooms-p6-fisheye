// Create the main photographer view
export default function PhotographerMain(useData) {
  // Get the main element
  const main = document.querySelector('main')

  // Add the main content
  main.innerHTML = `
    <h1>
      ${useData.name}
    </h1>

    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/not-found">404</a></li>
    </ul>
  `

  // Return the main element
  return main.outerHTML
}
