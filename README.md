# PRODUCTION README

## THE GOAL
  To solidify my understanding of react redux and integrate these frameworks into my full-stack web design toolbox, I took 2 weeks to attempt to create a pixel perfect clone of the direct-to-consumer meat sales website, CrowdCow. By maintaining a database of products, carts, orders, and categories, and integrating a redux cycle the goal was to emulate the original websites overall design and specifically its cart and order systems on a single page framework for lightning quick response.
  ![Action Flow](https://meat-project-seed.s3-us-west-1.amazonaws.com/Screen+Shot+2020-06-16+at+4.58.25+PM.png)
## TECHNOLOGIES
  - Postgres
  - Ruby
  - Rails
  - Javascript
  - React
  - Redux
  - AWS S3
  - Heroku Webhosting
## THE END RESULT
  In the end I was unable to create an exact duplicate of the website, I was able to build out nearly every major feature I set out to build, get them styled and implemented, and I was forced to make design choices when it became clear some of the visual effects on the actual website relied on CSS/React libraries I didn't have access to. Regardless, I achieved a complete experience with some /unique/ extras.
  
  ![Screen Capture](https://meat-project-seed.s3-us-west-1.amazonaws.com/trimmedmeat(480)+(1).gif)
  
## KEY FEATURES
  - User Authentication
    - Users can log in to accces cart and orders
  - Basic Store Navigation
    - Products sorted by Category
    - Each product has its own show page
  - Cart Functionality 
    - Products can be added to boxes
    - Logged out users do not have a box
  - Orders
    - Orders can be placed
    - Orders can be viewed individually or collectively
  - Search
    - Search bar drops down from main nav-bar
    - Products can be searched by name
    
## HOW TO USE
  Untitled meat project is designed from the ground up around streamlined use. If you just hop on the website and start clicking, the site itself will guide you through the major features. Aside from basic store navigation, all the major features can be accessed through the icons on the right side of the nav-bar. The user icon allows a user to login, logout, and view their orders, the box icon allows users to view/edit their cart and place orders, and the magnifying glass opens the search-bar.
  
  
## UNDER THE HOOD

  Untitled meat project was built on a Rails backend, with a React/Redux frontend. Images were hosted on Amazon's S3 web service. I made specific design choices when building out the cart/orders system to only use a single joins table, this allowed me to trade some boilerplate backend code for a chance to solidify my understanding of polymorphic tables, and it made the finalization of orders an elegant operation where `inclusions` are reassigned from type box to type order.

## FUTURE UPDATES
  Because of the limited timeframe of this project, opportunities for improvement are endless. I could add a `cut` column to the products table which would allow me to sort the products by cut within their categories, and allow the users to pick which source they want from within the cut on the product show page. I could add a `stock` column to the products table which would keep track of the amount of that product the website has in stock, so items could sell out. I could also add a subscriptions feature or allow users to register as farmers and create products for the website.

