// Create the main photographer view
export default function PhotographerMain(useData) {
  // Create the template
  const template = document.createElement('template')

  // Create the template content
  template.innerHTML = `
    <h1>
      ${useData.name}
    </h1>

    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/not-found">404</a></li>
    </ul>
  `

  // Return the template content
  return template.content.cloneNode(true)
}
