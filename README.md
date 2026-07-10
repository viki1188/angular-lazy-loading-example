# 🚀 Angular Lazy Loading Example

This project demonstrates **Lazy Loading** in Angular using **Standalone Components**. It shows how Angular loads feature components only when the user navigates to a route, improving application performance and reducing the initial bundle size.

---

# 📖 What is Lazy Loading?

**Lazy Loading** is a technique where Angular loads a feature **only when it is needed** instead of loading the entire application during startup.

Without Lazy Loading:

```
Application Starts
        │
        ▼
Load Dashboard
Load Employees
Load Products
Load Settings
Load Reports
```

With Lazy Loading:

```
Application Starts
        │
        ▼
Load App

User opens Dashboard
        ▼
Dashboard Loaded

User opens Employees
        ▼
Employees Loaded

User opens Products
        ▼
Products Loaded
```

This reduces the initial JavaScript bundle size and improves application startup performance.

---

# 🎯 Project Features

- Angular 21
- Standalone Components
- Angular Router
- Lazy Loaded Routes
- Reusable Layout
- Responsive Sidebar
- Fixed Navbar
- Feature Based Architecture

---

# 📁 Project Structure

```text
src/

app/

├── layouts/
│
│── main-layout/
│
├── features/
│
│── dashboard/
│
│── employees/
│
│── products/
│
│── settings/
│
├── shared/
│
│── navbar/
│
│── sidebar/
│
│── footer/
│
└── app.routes.ts
```

---

# ⚡ How Lazy Loading Works

Instead of importing components directly:

```ts
import { Dashboard } from './dashboard/dashboard';
```

Angular loads the component only when required.

Example:

```ts
{
  path: 'dashboard',
  loadComponent: () =>
    import('./features/dashboard/dashboard')
      .then(c => c.Dashboard)
}
```

The Dashboard component is downloaded only when the user visits `/dashboard`.

---

# 📌 Route Configuration

```ts
export const routes: Routes = [

{
    path:'',
    component:MainLayout,

    children:[

        {
            path:'dashboard',

            loadComponent: () =>
                import('./features/dashboard/dashboard')
                .then(c => c.Dashboard)
        },

        {
            path:'employees',

            loadComponent: () =>
                import('./features/employees/employee-list/employee-list')
                .then(c => c.EmployeeList)
        },

        {
            path:'products',

            loadComponent: () =>
                import('./features/products/product-list/product-list')
                .then(c => c.ProductList)
        }

    ]

}

];
```

---

# ▶️ Running the Project

Install dependencies

```bash
npm install
```

Run the application

```bash
ng serve
```

Open the browser

```
http://localhost:4200
```

---

# 🔍 How to Verify Lazy Loading

1. Open Chrome Developer Tools (**F12**)
2. Go to **Network**
3. Select **JS**
4. Refresh the application

Initially only the main application bundle is loaded.

When navigating to:

- Dashboard
- Employees
- Products
- Settings

Angular downloads separate JavaScript chunks for each feature on demand.

---

# 📈 Benefits of Lazy Loading

- Faster initial page load
- Smaller bundle size
- Better application performance
- Reduced memory usage
- Loads features only when required
- Better user experience
- Scalable architecture for enterprise applications

---

# 🆚 Lazy Loading vs Eager Loading

| Lazy Loading | Eager Loading |
|--------------|---------------|
| Loads modules/components on demand | Loads everything at startup |
| Faster initial load | Slower initial load |
| Smaller initial bundle | Larger bundle size |
| Better for large applications | Suitable for small applications |
| Improves performance | Can increase startup time |

---

# 💼 Real-World Use Cases

Lazy Loading is commonly used for:

- Dashboard
- Employee Management
- Reports
- Products
- Orders
- Admin Panel
- User Profile
- Settings

These features are loaded only when users access them.

---

# 🛠 Technologies Used

- Angular 21
- TypeScript
- Angular Router
- Standalone Components
- Tailwind CSS

---

# 🎓 Interview Questions

### What is Lazy Loading?

Lazy Loading is an Angular routing feature that loads components or modules only when the user navigates to them. This improves performance by reducing the initial bundle size.

### Why use Lazy Loading?

- Faster startup
- Better performance
- Reduced bandwidth usage
- Better scalability

### Difference between `loadComponent()` and `loadChildren()`?

- **`loadComponent()`**: Used for **Standalone Components** (Angular 15+).
- **`loadChildren()`**: Used for **NgModules**.

Example:

```ts
// Standalone Component
{
  path: 'dashboard',
  loadComponent: () =>
    import('./dashboard/dashboard')
      .then(c => c.Dashboard)
}
```

```ts
// NgModule
{
  path: 'dashboard',
  loadChildren: () =>
    import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
}
```

---

# 📄 License

This project is created for learning and demonstrating Angular Lazy Loading concepts.