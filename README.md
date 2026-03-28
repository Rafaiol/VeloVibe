# 🚲 Premium 3D E-Commerce Bike Shop

A cutting-edge, high-performance e-commerce platform built for the modern cycling enthusiast. This project combines state-of-the-art web technologies with immersive 3D visualization to provide a premium shopping experience for high-end mountain, road, and city bikes.

---

## 🌟 Key Features

- **Interactive 3D Bike Viewer**: Explore bikes in full 360° detail using a custom-built Three.js engine. Supports rotation, smooth zooming, and contact shadows for a realistic feel.
- **Real-Time Customization**: Instantly preview different frame colors on 3D models (Original Mountain, Road, Carbon, and City bikes).
- **Premium UI/UX**:
  - **Framer Motion**: Fluid entrance animations, scroll-triggered reveals, and interactive hover states.
  - **Glassmorphism**: Modern, sleek interface with blur effects and neon accents.
  - **Tailwind CSS 4**: Sophisticated styling with a custom "dark-navy & orange" palette.
- **Dynamic Shopping Experience**: 
  - **Category-based Filtering**: Easily find bikes by terrain or performance type.
  - **Product Detail Modals**: Deep-dive into bike specifications and interactive previews.
  - **Zustand Cart System**: Seamless, persistent shopping cart management.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Core** | [React 19](https://react.dev/), [Vite 7](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **3D Visualization** | [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/getting-started/introduction), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/), [Lucide React Icons](https://lucide.dev/) |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) (Dialog, Accordion, Checkbox, etc.) |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/) |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| **Charts** | [Recharts](https://recharts.org/) |

---

## 📂 Project Structure

```bash
├── src/
│   ├── components/       # Reusable UI & 3D Viewer components
│   ├── sections/         # Main page sections (Hero, Features, etc.)
│   ├── pages/            # Page-level components (Shop, Home)
│   ├── store/            # Zustand state stores (Cart, Filter)
│   ├── data/             # Product and category definitions
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript interface definitions
│   └── lib/              # Utility functions and configuration
├── public/               # Static assets & 3D Models (.glb)
└── index.html            # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 20+)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server with HMR:
```bash
npm run dev
```

### Build

Build the project for production:
```bash
npm run build
```

---

## 🎯 Scripts

- `npm run dev`: Starts the Vite dev server.
- `npm run build`: Compiles TypeScript and builds the production bundle.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run preview`: Previews the production build locally.

---

> [!NOTE]
> This project is designed with a mobile-first approach and utilizes **Tailwind CSS 4** for high-efficiency styling.
