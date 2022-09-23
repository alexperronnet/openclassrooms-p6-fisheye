// Create the main home view
export default function HomeMain() {
  // Create the template
  const template = document.createElement('template')

  // Create the template content
  template.innerHTML = `
    <h1>Home</h1>

    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/photographer">Photographe</a></li>
      <li><a href="/not-found">404</a></li>
    </ul>
  `

  // Return the template content
  return template.content.cloneNode(true)
}
