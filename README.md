# Instructions

1. Use SQLITE3 for database storage implementation
1. Use Prisma for ORM
1. Implement at least one full CRUD RESTful API
1. Deploy it on Render for backend and vercel for frontend
1. Resolve CORS issue if needed after deployment

## Folder structure

```
Idea.md
README.md
render.yaml
client/
  index.html
  package.json
  vite.config.js
  src/
    App.jsx
    App.test.jsx
    index.css
    main.jsx
    setupTests.js
server/
  package.json
  src/
    app.js
    index.js
    config/
      db.js
    controllers/
      authController.js
      orderController.js
      productController.js
    middleware/
      authMiddleware.js
      errorMiddleware.js
    models/
      Order.js
      Product.js
      User.js
    routes/
      authRoutes.js
      orderRoutes.js
      productRoutes.js
    utils/
      generateToken.js
tests/
  app.test.js
```
