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
  currentState.tabIndex = 0
  currentState.setAttribute('aria-expanded', 'false')
  currentState.setAttribute('aria-controls', 'filter-medias__options-group')

  // Close options
  function openOptions() {
    // Expand the current state
    currentState.setAttribute('aria-expanded', 'true')
    // Show the options
    optionsGroup.setAttribute('aria-hidden', 'false')
  }

  // Open options
  function closeOptions() {
    // Hide the options
    currentState.setAttribute('aria-expanded', 'false')
    optionsGroup.setAttribute('aria-hidden', 'true')
  }

  // Mange toggle state
  function toggleState() {
    if (currentState.getAttribute('aria-expanded') === 'true') {
      closeOptions()
    } else {
      openOptions()
    }
  }

  // Toggle state
  currentState.addEventListener('click', toggleState)
  currentState.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      toggleState()
    }
  })

  // Close options when clicking outside the select only if the options are opened
  document.addEventListener('click', event => {
    if (currentState.getAttribute('aria-expanded') === 'true') {
      if (!select.contains(event.target)) {
        closeOptions()
      }
    }
  })

  // Create a options group element
  const optionsGroup = document.createElement('ul')
  optionsGroup.classList.add('filter-medias__options-group')
  optionsGroup.setAttribute('aria-hidden', 'true')

  // All options
  const options = [
    { value: 'popularity', label: 'Popularité' },
    { value: 'date', label: 'Date' },
    { value: 'title', label: 'Titre' }
  ]

  // Create options
  options.forEach(option => {
    // Create a option element
    const optionElement = document.createElement('li')
    optionElement.classList.add('filter-medias__option')
    optionElement.textContent = option.label
    optionElement.tabIndex = 0

    // Set the default option
    if (option.value === 'popularity') {
      currentState.textContent = option.label
      currentState.dataset.value = option.value
      // Display none
      optionElement.style.display = 'none'
    }

    // Select an option
    function selectOption() {
      // Remove aria-selected attribute from all options
      optionsGroup
        .querySelectorAll('.filter-medias__option')
        .forEach(option => (option.style.display = 'block'))
      // Add aria-selected attribute to the current option
      optionElement.style.display = 'none'
      // Update the current state
      currentState.textContent = option.label
      currentState.dataset.value = option.value
      // Close the options
      closeOptions()

      // Update data-filter attribute of medias grid
      const mediasGrid = document.querySelector('.medias-grid')

      if (mediasGrid) {
        mediasGrid.dataset.sort = option.value
      }
    }

    // Select an option
    optionElement.addEventListener('click', selectOption)
    optionElement.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        selectOption()
      }
    })

    // Add the option to the options group
    optionsGroup.append(optionElement)
  })

  // Append current state and options group to the select element
  select.append(currentState, optionsGroup)

  // Append label and select to filter
  filter.append(label, select)

  // Return the filter element
  return filter
}
