// Create header view
export default function Header() {
  // Create header element
  const header = document.createElement('header')
  header.classList.add('header')

  // Create header link
  const headerLink = document.createElement('a')
  headerLink.classList.add('header__link')
  headerLink.href = '/'
  headerLink.title = "Retourner à l'accueil"

  // Create header logo
  const headerLogo = document.createElement('img')
  headerLogo.classList.add('header__logo')
  headerLogo.src = '/assets/svgs/logo.svg'
  headerLogo.alt = 'FishEye accueil'

  // Append header logo to header link
  headerLink.append(headerLogo)

  // Create header title
  const headerTitle = document.createElement('h1')
  headerTitle.classList.add('header__title')
  headerTitle.textContent = 'Nos photographes'

  // Append header link and title to header
  location.pathname === '/' ? header.append(headerLink, headerTitle) : header.append(headerLink)

  // Return header
  return header
}
