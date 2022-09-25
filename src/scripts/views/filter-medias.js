// Create the filter medias view
export default function FilterMedias() {
  // Create filter element
  const filter = document.createElement('div')
  filter.classList.add('filter-medias')

  // Create a label element
  const label = document.createElement('span')
  label.classList.add('filter-medias__label')
  label.textContent = 'Trier par'

  // Create a select element
  const select = document.createElement('div')
  select.classList.add('filter-medias__select')

  // Create a current state element
  const currentState = document.createElement('div')
  currentState.classList.add('filter-medias__current-state')
  currentState.textContent = 'Popularité'
  currentState.tabIndex = 0
  currentState.setAttribute('aria-expanded', 'false')

  // Open options
  function openOptions() {
    // Collapse the current state
    currentState.setAttribute('aria-expanded', 'false')
    // Hide the options
    optionsGroup.setAttribute('isClosing', '')
    optionsGroup.addEventListener(
      'animationend',
      () => {
        optionsGroup.removeAttribute('isClosing')
        optionsGroup.setAttribute('aria-hidden', 'true')
      },
      { once: true }
    )
  }

  // Close options
  function closeOptions() {
    // Expand the current state
    currentState.setAttribute('aria-expanded', 'true')
    // Show the options
    optionsGroup.setAttribute('aria-hidden', 'false')
  }

  // Mange toggle state
  function toggleState() {
    if (currentState.getAttribute('aria-expanded') === 'true') {
      openOptions()
    } else {
      closeOptions()
    }
  }

  // Toggle state
  currentState.addEventListener('click', toggleState)
  currentState.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      toggleState()
    }
  })

  // Create a options group element
  const optionsGroup = document.createElement('ul')
  optionsGroup.classList.add('filter-medias__options-group')
  optionsGroup.setAttribute('aria-hidden', 'true')

  // All options
  const options = [
    { value: 'likes', label: 'Popularité' },
    { value: 'date', label: 'Date' },
    { value: 'title', label: 'Titre' }
  ]

  // Create options
  options.forEach(option => {
    // Create a option element
    const optionElement = document.createElement('li')
    optionElement.classList.add('filter-medias__option')
    optionElement.dataset.value = option.value
    optionElement.textContent = option.label
    optionElement.tabIndex = 0

    // Add the option to the options group
    optionsGroup.append(optionElement)
  })

  // Append current state and options group to the select element
  select.append(currentState, optionsGroup)

  // Append label and select to filter
  filter.append(label, select)

  // Return filter
  return filter
}
