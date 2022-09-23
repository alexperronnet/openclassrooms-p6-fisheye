// Import global styles
import '@styles/main.scss'

// Import controllers
import { Router, CreatePages as pages } from '@controllers'

// Import data
import { GetData as useData } from '@models'

// Import data source
import dataSource from '@data/photographers.json'

// Initialize the router
Router(pages, useData(dataSource))
