// Import global styles
import '@styles/main.scss'

// Import controllers
import { Router } from '@controllers'

// Import data
import { GetData } from '@models'

// Initialize the router
window.onload = () => {
  Router(
    // Get the data
    GetData()
  )
}
