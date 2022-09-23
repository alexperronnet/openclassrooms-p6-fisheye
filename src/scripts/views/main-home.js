// Create the main home view
export default function HomeMain(useData) {
  // Create the template
  const template = document.createElement('template')

  // Create the template content
  template.innerHTML = `
    <h1>Home</h1>

    <ul>
      ${useData
        .map(
          photographer => `
        <li>
          <a href="/${photographer.slug}">
            ${photographer.name}
          </a>
        </li>
      `
        )
        .join('')}
        <li>
          <a href="/test">404</a>
        </li>
    </ul>
  `

  // Return the template content
  return template.content.cloneNode(true)
}
