# Bike Model Integration Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate four new 3D models and rename the 'kids' category to 'carbon'.

**Architecture:** Use a factory pattern in `Bike3DViewer.tsx` to dynamically render category-specific React-Three-Fiber components. Modify individual model components to accept a `color` prop for frame/paint customization.

**Tech Stack:** React, Three.js, @react-three/fiber, @react-three/drei, Tailwind CSS.

---

### Task 1: Data Refactoring

**Files:**
- Modify: `src/data/products.ts`

- [ ] **Step 1: Update Product type and categories**
Update `category` union type and rename `kids` to `carbon` in the `categories` array.

- [ ] **Step 2: Update "Riprock" product**
Change its name to "Carbon Elite Evo", category to "carbon", price to 4500, and image to "/bikes/carbon-bike.png".

- [ ] **Step 3: Commit**
`git add src/data/products.ts && git commit -m "data: rename kids category to carbon and update Riprock product"`

### Task 2: Model Component Preparation

**Files:**
- Create: `src/components/models/CityBike.tsx`
- Create: `src/components/models/RoadBike.tsx`
- Create: `src/components/models/MountainBike.tsx`
- Create: `src/components/models/CarbonBike.tsx`

- [ ] **Step 1: Move and refactor City_bicycle.jsx**
Move `City_bicycle.jsx` to `src/components/models/CityBike.tsx`. Refactor to accept `color` prop and apply to `materials.BlackSmooth`. Update `useGLTF` path to `/bikes/city_bicycle.glb`.

- [ ] **Step 2: Move and refactor Road_bike.jsx**
Move `Road_bike.jsx` to `src/components/models/RoadBike.tsx`. Refactor to accept `color` prop and apply to `materials.rama` and `materials['wheel.orange']`. Update `useGLTF` path to `/bikes/road_bike.glb`.

- [ ] **Step 3: Move and refactor Generic_mountain_bike.jsx**
Move `Generic_mountain_bike.jsx` to `src/components/models/MountainBike.tsx`. Refactor to accept `color` prop and apply to `materials.Carro_Pintura`. Update `useGLTF` path to `/bikes/generic_mountain_bike.glb`.

- [ ] **Step 4: Move and refactor Carbon_frame_bike.jsx**
Move `Carbon_frame_bike.jsx` to `src/components/models/CarbonBike.tsx`. Refactor to accept `color` prop and apply to `materials.Rahmen`. Update `useGLTF` path to `/bikes/carbon_frame_bike.glb`.

- [ ] **Step 5: Commit**
`git add src/components/models && git commit -m "feat: add refactored 3D model components with color support"`

### Task 3: Viewer Integration

**Files:**
- Modify: `src/components/Bike3DViewer.tsx`

- [ ] **Step 1: Implement Model Factory**
Import the four model components and create a `ModelMap` indexed by category.

- [ ] **Step 2: Update Bike3DViewer component**
Accept `category` as a prop and render the corresponding model from `ModelMap` inside the `Canvas`.

- [ ] **Step 3: Commit**
`git add src/components/Bike3DViewer.tsx && git commit -m "feat: integrate model factory into Bike3DViewer"`

### Task 4: UI and Routing Cleanup

**Files:**
- Modify: `src/pages/ProductDetail.tsx`
- Modify: `src/pages/Shop.tsx`
- Modify: `src/sections/Hero.tsx`

- [ ] **Step 1: Update ProductDetail props**
Pass `product.category` to `Bike3DViewer`.

- [ ] **Step 2: Update Shop filters**
Ensure the category filter reflects "Carbon" instead of "Kids".

- [ ] **Step 3: Commit**
`git add . && git commit -m "fix: update UI components to reflect category name changes"`

### Task 5: Validation

- [ ] **Step 1: Verify all models load**
Navigate to each category in the shop and check the 3D viewer.
- [ ] **Step 2: Verify color changing**
Test the color selector on each model type.
