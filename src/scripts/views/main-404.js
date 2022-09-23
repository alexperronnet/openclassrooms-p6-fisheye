// Create the main 404 view
export default function NotFoundMain() {
  // Create the template
  const template = document.createElement('template')

  // Create the template content
  template.innerHTML = `
    <h1>404</h1>

    <ul>
      <li><a href="/">Accueil</a></li>
    </ul>
  `

  // Return the template content
  return template.content.cloneNode(true)
}
