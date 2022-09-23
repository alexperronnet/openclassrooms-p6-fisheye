// Create the main 404 view
export default function NotFoundMain() {
  // Get the main element
  const main = document.querySelector('main')

  // Add the main content
  main.innerHTML = `
    <h1>404</h1>

    <ul>
      <li><a href="/">Accueil</a></li>
    </ul>
  `

  // Return the main element
  return main.outerHTML
}
