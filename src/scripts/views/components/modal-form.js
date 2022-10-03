// Create the modal form view
export default function ModalForm(data) {
  // Create modal form element
  const modal = document.createElement('dialog')
  modal.classList.add('modal-form')

  // Create modal form wrapper
  const modalWrapper = document.createElement('div')
  modalWrapper.classList.add('modal-form__wrapper')

  // Create modal form header
  const modalHeader = document.createElement('header')
  modalHeader.classList.add('modal-form__header')

  // Create modal form title
  const modalTitle = document.createElement('h2')
  modalTitle.classList.add('modal-form__title')
  modalTitle.textContent = `Contacter ${data.name}`

  // Create modal form close button
  const modalClose = document.createElement('button')
  modalClose.classList.add('modal-form__close')
  modalClose.type = 'button'
  modalClose.title = 'Fermer la fenêtre'
  modalClose.setAttribute('aria-controls', 'modal-form')

  // Create modal form close icon
  const modalCloseIcon = document.createElement('img')
  modalCloseIcon.classList.add('modal-form__close-icon')
  modalCloseIcon.src = '/assets/svgs/close-white.svg'
  modalCloseIcon.alt = 'Fermer la fenêtre'
  modalCloseIcon.setAttribute('aria-controls', 'modal-form')

  // Append modal form close icon to close button
  modalClose.append(modalCloseIcon)

  // Append modal form title and close button to header
  modalHeader.append(modalTitle, modalClose)

  // Create the form element
  const form = document.createElement('form')
  form.classList.add('modal-form__form')
  form.method = 'post'
  form.noValidate

  // All form fields possible
  const formFields = [
    {
      label: 'Prénom',
      type: 'text',
      name: 'firstName',
      pattern: '^[a-zA-Z]{2,}$',
      required: true
    },
    {
      label: 'Nom',
      type: 'text',
      name: 'lastName',
      pattern: '^[a-zA-Z]{2,}$',
      required: true
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      pattern: '[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}',
      required: true
    },
    {
      label: 'Message',
      type: 'textarea',
      name: 'message',
      required: true
    }
  ]

  // Create the form fields
  formFields.forEach(field => {
    // Create the field wrapper
    const fieldWrapper = document.createElement('div')
    fieldWrapper.classList.add('modal-form__field-wrapper')

    // Create the field label
    const fieldLabel = document.createElement('label')
    fieldLabel.classList.add('modal-form__field-label')
    fieldLabel.htmlFor = field.name
    fieldLabel.textContent = field.label

    // Create the field input
    let fieldInput = null

    if (field.type === 'textarea') {
      fieldInput = document.createElement('textarea')
      fieldInput.minLength = 10
      fieldInput.maxLength = 500
    } else {
      fieldInput = document.createElement('input')
      fieldInput.type = field.type
      fieldInput.pattern = field.pattern
    }

    fieldInput.classList.add('modal-form__field-input')
    fieldInput.name = field.name
    fieldInput.id = field.name
    fieldInput.required = field.required

    // Append the field label and input to the wrapper
    fieldWrapper.append(fieldLabel, fieldInput)

    // Append the field wrapper to the form
    form.append(fieldWrapper)
  })

  // Create the form submit button
  const formSubmit = document.createElement('button')
  formSubmit.classList.add('modal-form__submit')
  formSubmit.type = 'submit'
  formSubmit.textContent = 'Envoyer'

  // Append the form submit button to the form
  form.append(formSubmit)

  // Create the form success message wrapper
  const formSuccess = document.createElement('div')
  formSuccess.classList.add('modal-form__success')

  // Create the form success message title
  const formSuccessTitle = document.createElement('h3')
  formSuccessTitle.classList.add('modal-form__success-title')
  formSuccessTitle.textContent = 'Message envoyé !'

  // Create the form success message text
  const formSuccessText = document.createElement('p')
  formSuccessText.classList.add('modal-form__success-text')
  formSuccessText.textContent = `Merci pour l'intérêt que vous portez au travail de photographerName. Ce photographe vous répondra dans les plus brefs délais.`

  // Create photographer name
  const photographerName = document.createElement('span')
  photographerName.classList.add('modal-form__success-name')
  photographerName.textContent = data.name

  // Append user name and photographer name to success message text by replacing the placeholders
  formSuccessText.innerHTML = formSuccessText.innerHTML.replace(
    'photographerName',
    photographerName.outerHTML
  )

  // Create modal form close button for success message
  const formSuccessClose = document.createElement('button')
  formSuccessClose.classList.add('modal-form__success-close')
  formSuccessClose.type = 'button'
  formSuccessClose.title = 'Fermer la fenêtre'
  formSuccessClose.textContent = 'Fermer la fenêtre'
  formSuccessClose.setAttribute('aria-controls', 'modal-form')

  // Append the success message title, text and close button to the wrapper
  formSuccess.append(formSuccessTitle, formSuccessText, formSuccessClose)

  // Append the form and success message to the wrapper
  modalWrapper.append(modalHeader, form, formSuccess)

  // Append the modal form wrapper to the modal form
  modal.append(modalWrapper)

  // Function to close the modal form
  const closeModal = () => {
    // Set is-closing attribute
    modal.setAttribute('is-closing', '')

    // Remove is-closing attribute after animation
    modal.addEventListener(
      'animationend',
      () => {
        modal.removeAttribute('is-closing')

        // Close the modal form
        modal.close()

        // Enable scroll on body
        document.body.style.overflow = 'auto'
      },
      { once: true }
    )
  }

  // Close the modal form on click on close button
  modalClose.addEventListener('click', closeModal)
  // Close the modal form on click outside the modal form
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal()
    }
  })
  // Close the modal form on escape key press
  modal.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      // Prevent default behavior
      event.preventDefault()

      closeModal()
    }
  })

  // All error messages possible
  const errorMessages = {
    firstName: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
    lastName: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
    email: 'Veuillez entrer une adresse email valide.',
    message: 'Veuillez entrer entre 10 et 500 caractères pour le champ du message.'
  }

  // Check if each input are valid
  const checkInputs = () => {
    // Get all inputs
    const inputs = form.querySelectorAll('.modal-form__field-input')

    // Check inputs one by one
    inputs.forEach(input => {
      // Get the wrapper of the input
      const inputWrapper = input.closest('.modal-form__field-wrapper')

      // Check if the input is valid
      if (input.validity.valid) {
        // Remove the data-error attribute
        inputWrapper.removeAttribute('data-error')
      } else {
        // Add the data-error attribute
        inputWrapper.setAttribute('data-error', errorMessages[input.name])
      }
    })
  }

  // Reset the form
  const resetForm = () => {
    closeModal()

    setTimeout(() => {
      // Show the form
      form.style.display = 'flex'

      // Hide the success message
      formSuccess.style.display = 'none'

      // Reset the form
      form.reset()

      // Remove event listener on form submit
      form.removeEventListener('input', checkInputs)
    }, 500)
  }

  // On click on the submit button, if all inputs are valid, we gonna display the success message
  formSubmit.addEventListener('click', event => {
    // Prevent default behavior
    event.preventDefault()

    // Check if each input are valid on input
    checkInputs()
    form.addEventListener('input', checkInputs)

    // Check if all inputs are valid
    if (form.checkValidity()) {
      // Hide the form
      form.style.display = 'none'

      // Show the success message
      formSuccess.style.display = 'flex'

      // Focus on the close button of the success message
      formSuccessClose.focus()

      // Close the modal form on click on close button of the success message
      formSuccessClose.addEventListener('click', () => {
        resetForm()
      })

      // Close the modal form on click outside the modal form
      modal.addEventListener('click', event => {
        if (event.target === modal) {
          resetForm()
        }
      })

      // Close the modal form on escape key press
      modal.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          // Prevent default behavior
          event.preventDefault()

          resetForm()
        }
      })

      // Close the modal form on click on close button
      modalClose.addEventListener('click', () => {
        resetForm()
      })
    }
  })

  // Return modal form
  return modal
}
