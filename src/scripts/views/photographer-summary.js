// Create the photographer summary view
export default function PhotographerSummary(data) {
  // Create photographer summary element
  const photographerSummary = document.createElement('section')
  photographerSummary.classList.add('photographer-summary')

  // Create photographer summary text
  const photographerSummaryText = document.createElement('div')
  photographerSummaryText.classList.add('photographer-summary__text')

  // Create photographer summary name
  const photographerSummaryName = document.createElement('h1')
  photographerSummaryName.classList.add('photographer-summary__name')
  photographerSummaryName.textContent = data.name

  // Create photographer summary infos
  const photographerSummaryInfos = document.createElement('div')
  photographerSummaryInfos.classList.add('photographer-summary__infos')

  // Create photographer summary location
  const photographerSummaryLocation = document.createElement('p')
  photographerSummaryLocation.classList.add('photographer-summary__location')
  photographerSummaryLocation.textContent = `${data.city}, ${data.country}`

  // Create photographer summary tagline
  const photographerSummaryTagline = document.createElement('p')
  photographerSummaryTagline.classList.add('photographer-summary__tagline')
  photographerSummaryTagline.textContent = data.tagline

  // Append photographer summary location and tagline to infos
  photographerSummaryInfos.append(photographerSummaryLocation, photographerSummaryTagline)

  // Append photographer summary name and infos to text
  photographerSummaryText.append(photographerSummaryName, photographerSummaryInfos)

  // Create photographer summary button
  const photographerSummaryButton = document.createElement('button')
  photographerSummaryButton.classList.add('photographer-summary__contact')
  photographerSummaryButton.title = `Contacter ${data.name}`
  photographerSummaryButton.textContent = 'Contactez-moi'
  photographerSummaryButton.setAttribute('aria-controls', 'modal-form')

  // Create photographer summary image wrapper
  const photographerSummaryImageWrapper = document.createElement('div')
  photographerSummaryImageWrapper.classList.add('photographer-summary__image-wrapper')

  // Create photographer summary image
  const photographerSummaryImage = document.createElement('img')
  photographerSummaryImage.classList.add('photographer-summary__image')
  photographerSummaryImage.src = data.avatar
  photographerSummaryImage.alt = `Photo de ${data.name}`

  // Append photographer summary image to wrapper
  photographerSummaryImageWrapper.append(photographerSummaryImage)

  // Append photographer summary text, button and image wrapper to summary
  photographerSummary.append(
    photographerSummaryText,
    photographerSummaryButton,
    photographerSummaryImageWrapper
  )

  // Function to open the modal form
  function openModal() {
    // Get the modal form element
    const modal = document.querySelector('.modal-form')

    // Open the modal form
    modal.showModal()

    // Disable the window scroll
    document.body.style.overflow = 'hidden'
  }

  // Open the modal form when clicking on the button
  photographerSummaryButton.addEventListener('click', openModal)

  return photographerSummary
}
