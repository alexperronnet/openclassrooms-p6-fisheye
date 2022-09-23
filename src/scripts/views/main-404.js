// Create the main 404 view
export default function NotFoundMain() {
  // Get the main element
  const main = document.querySelector('main')

  // Get the current path
  const path = window.location.pathname.slice(1)

  // Add the main content
  main.innerHTML = `
    <section class="not-found">
      <h1 class="not-found__title">Oups... 😿</h1>
      <p class="not-found__text">
        Malheuresement la page <span class="not-found__path">${path}</span> n'existe pas ou n'est plus disponible.
      </p>
      <a
        href="/"
        class="not-found__link"
        title="Retourner à l'accueil"
        aria-label="Retourner à l'accueil"
      >
        Retourner à l'accueil
      </a>
    </section>
  `

  // Return the main element
  return main.outerHTML
}
