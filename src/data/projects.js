export const projectsData = [
  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    badge: "Major Project",
    status: "Completed",
    category: "Full Stack",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Mongoose",
      "JWT",
      "bcrypt",
      "React Router",
      "Render"
    ],
    summary:
      "Full-stack property listing and booking application built with the MERN stack. Implemented JWT and bcrypt-based authentication, RESTful CRUD APIs using Express.js and MongoDB, and a responsive React interface with React Router.",
    features: [
      "User authentication with JWT & bcrypt encryption",
      "Property listing management and interactive booking workflow",
      "RESTful CRUD APIs for listings, reviews, and user reservations",
      "MongoDB & Mongoose database schema integration",
      "Responsive React frontend built with modular components",
      "Deployed cloud backend and client bundle on Render",
      "Comprehensive REST API testing executed via Postman"
    ],
    liveUrl: "https://example.com/airbnb-clone-demo",
    liveUrlLabel: "[ADD REAL LIVE DEMO URL]",
    isLiveUrlPlaceholder: true,
    githubUrl: "https://github.com/arpitchoudhary/airbnb-clone",
    githubUrlLabel: "[ADD REAL GITHUB REPO URL]",
    isGithubUrlPlaceholder: true,
    
    // Modal Deep-Dive Architecture Details
    details: {
      objective:
        "Build a robust full-stack property listing platform replicating core Airbnb functionality to master MERN state management, authentication flows, relational-style Mongo references, and cloud deployment.",
      frontendArch:
        "React SPA utilizing React Router DOM for seamless navigation. Managed dynamic global user authentication states via Context API and utilized custom hooks for fetching property datasets.",
      backendArch:
        "Express.js web server following strict MVC (Model-View-Controller) architecture. Includes centralized error handling middleware, input data sanitization, and RESTful route controllers.",
      databaseSchema:
        "MongoDB collections: Users (auth credentials, roles), Listings (title, location, pricing, image URLs, host Ref), Bookings (user Ref, listing Ref, check-in/out dates, status), and Reviews (user Ref, rating, comment).",
      authFlow:
        "User registers or logs in -> bcrypt hashes passwords -> server signs a JWT payload -> JWT stored securely in HTTP cookies/headers -> Protected middleware validates token on restricted CRUD endpoints.",
      apiEndpoints: [
        { method: "POST", route: "/api/auth/register", desc: "User Registration" },
        { method: "POST", route: "/api/auth/login", desc: "User Authentication & JWT issue" },
        { method: "GET", route: "/api/listings", desc: "Fetch all active property listings" },
        { method: "POST", route: "/api/listings", desc: "Create new listing (Auth required)" },
        { method: "GET", route: "/api/listings/:id", desc: "Fetch single listing metadata" },
        { method: "POST", route: "/api/bookings", desc: "Create property reservation" }
      ],
      problemsAndSolutions: [
        {
          problem: "Handling asynchronous MongoDB queries causing race conditions during simultaneous booking requests.",
          solution: "Implemented Mongoose transaction locks and server-side validation checks prior to booking confirmation."
        },
        {
          problem: "State loss on client page reloads during multi-step reservation steps.",
          solution: "Persisted initial booking parameters in session storage and hydrated React Context state during initial mount."
        }
      ],
      futureImprovements: [
        "Integrate Stripe Payment Gateway for real-time checkout processing.",
        "Add interactive map integration using Google Maps API for spatial property searching.",
        "Implement Socket.IO live chat between property hosts and prospective guests."
      ]
    }
  },
  {
    id: "ecommerce-website",
    title: "Full-Stack E-commerce Website",
    badge: "Major Project",
    status: "Completed",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Context API",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multer"
    ],
    summary:
      "Product catalog and shopping cart application with Context API-based state management, product CRUD operations, file uploads using Multer, frontend form validation, and communication between the React frontend and Express REST API through Axios.",
    features: [
      "Dynamic product catalog with filtering and search",
      "Interactive shopping cart with item quantity calculation",
      "Context API-based global state management for cart state",
      "Full product CRUD operations for store administration",
      "Multipart form image uploads using Multer middleware",
      "Real-time client-side form validation and error messages",
      "Decoupled REST API integration driven by Axios HTTP client"
    ],
    liveUrl: "https://example.com/ecommerce-demo",
    liveUrlLabel: "[ADD REAL LIVE DEMO URL]",
    isLiveUrlPlaceholder: true,
    githubUrl: "https://github.com/arpitchoudhary/ecommerce-mern",
    githubUrlLabel: "[ADD REAL GITHUB REPO URL]",
    isGithubUrlPlaceholder: true,
    
    details: {
      objective:
        "Develop an end-to-end e-commerce store focusing on reactive cart management, multi-part image uploads, robust API payload validation, and clean state distribution across React components.",
      frontendArch:
        "Component-driven React application structured into reusable UI elements (ProductCard, CartDrawer, FormInput). Managed total cart state and product filters via Context API.",
      backendArch:
        "Modular Node.js/Express server utilizing Multer for local/cloud file storage handling. Built custom request body validation middleware before committing writes to MongoDB.",
      databaseSchema:
        "MongoDB models: Products (name, category, price, stockQuantity, imageUrl), Orders (customerDetails, items, totalAmount, orderStatus), and Categories.",
      authFlow:
        "Session/Token based role validation distinguishing normal buyers from admin accounts authorized to perform Product CRUD and image uploads.",
      apiEndpoints: [
        { method: "GET", route: "/api/products", desc: "Get all store products" },
        { method: "POST", route: "/api/products", desc: "Add new product with image upload (Multer)" },
        { method: "PUT", route: "/api/products/:id", desc: "Update product details or pricing" },
        { method: "DELETE", route: "/api/products/:id", desc: "Remove product listing" },
        { method: "POST", route: "/api/orders", desc: "Submit customer cart order" }
      ],
      problemsAndSolutions: [
        {
          problem: "Handling image payload buffer uploads cleanly without blocking the Express main thread.",
          solution: "Configured Multer disk storage streams with strict file type filtering (JPEG/PNG) and size boundaries."
        },
        {
          problem: "Preventing unnecessary re-renders across product listing grids when cart state changed.",
          solution: "Memoized cart selectors and modularized cart context consumers to isolated UI components."
        }
      ],
      futureImprovements: [
        "Integrate Cloudinary for automated image transformation and CDN delivery.",
        "Add user wishlist functionality and product rating reviews.",
        "Implement order tracking status timeline for customers."
      ]
    }
  },
  {
    id: "blog-application",
    title: "Blog Application",
    badge: "Featured Project",
    status: "Completed",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Postman"
    ],
    summary:
      "Full-stack blog application with REST APIs for creating, editing, and deleting posts. Added JWT-based login authentication and used React Hooks for client-side rendering and API-driven UI updates.",
    features: [
      "User authentication and profile session persistence",
      "Full post lifecycle management (Create, Read, Edit, Delete)",
      "JWT-based route protection on both backend and frontend",
      "MongoDB and Mongoose document relationships for authors and posts",
      "React useState, useEffect, and custom hooks for API state updates",
      "End-to-end API route testing and documentation with Postman"
    ],
    liveUrl: "https://example.com/blog-app-demo",
    liveUrlLabel: "[ADD REAL LIVE DEMO URL]",
    isLiveUrlPlaceholder: true,
    githubUrl: "https://github.com/arpitchoudhary/blog-mern-app",
    githubUrlLabel: "[ADD REAL GITHUB REPO URL]",
    isGithubUrlPlaceholder: true,

    details: {
      objective:
        "Construct a lightweight, performant blogging platform to hone REST API authoring, protected routes in React, and Mongoose schema relational modeling.",
      frontendArch:
        "Clean single-page React frontend using dynamic route matching for blog post IDs, markdown previewing, and optimistic UI updates on post creation.",
      backendArch:
        "RESTful Express API service exposing CRUD routes for articles. Implemented JWT token verification middleware for write/delete actions.",
      databaseSchema:
        "MongoDB Schemas: Users (username, email, passwordHash), Posts (title, content, tags, authorId Ref to User, timestamps).",
      authFlow:
        "JSON Web Token (JWT) transmitted via HTTP Authorization bearer header upon successful login. Verified on protected POST/PUT/DELETE controllers.",
      apiEndpoints: [
        { method: "GET", route: "/api/posts", desc: "Get all published blog posts" },
        { method: "GET", route: "/api/posts/:id", desc: "Get single post by ID" },
        { method: "POST", route: "/api/posts", desc: "Create post (Requires JWT auth)" },
        { method: "PUT", route: "/api/posts/:id", desc: "Update post (Author only)" },
        { method: "DELETE", route: "/api/posts/:id", desc: "Delete post (Author only)" }
      ],
      problemsAndSolutions: [
        {
          problem: "Unauthorized users attempting to edit posts created by other authors by calling update APIs directly.",
          solution: "Added author verification middleware on backend to compare the authenticated JWT user ID against the post author reference."
        },
        {
          problem: "Handling rich text white space rendering cleanly in React.",
          solution: "Utilized CSS whitespace preservation rules and formatted post content with dynamic paragraph rendering."
        }
      ],
      futureImprovements: [
        "Add comment thread discussions under each blog post.",
        "Implement tag-based filtering and search bar indexing.",
        "Add reading time calculation and bookmarking functionality."
      ]
    }
  }
];
