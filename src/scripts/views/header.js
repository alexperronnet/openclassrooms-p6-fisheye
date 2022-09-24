// Create the header view
export default function Header() {
  // Get the header element
  const header = document.querySelector('header')

  // Get the default URL
  const defaultUrl = window.location.pathname === '/'

  // Create the template content
  header.innerHTML = `
    <a
      href="/"
      class="header__link"
      title="Retour à l'accueil"
      aria-label="Retour à l'accueil"
    >
      <img
        src="/assets/svgs/logo.svg"
        alt="FishEye page d'accueil"
        class="header__logo"
      />
    </a>

    ${defaultUrl ? '<h1 class="header__title">Nos photographes</h1>' : ''}
  `

  // Return the header element
  return header.outerHTML
}
