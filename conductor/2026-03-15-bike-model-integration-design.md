# 3D Model Integration and Category Refactor Design

## Objective
Integrate four new 3D models into the e-commerce platform, rename the 'kids' category to 'carbon', and ensure all models respond to the product color selection in the `Bike3DViewer`.

## Key Files & Context
- `src/data/products.ts`: Source of truth for categories and product data.
- `src/components/Bike3DViewer.tsx`: Component that manages the 3D scene.
- `src/pages/ProductDetail.tsx`: Main consumer of the 3D viewer.
- `Road_bike.jsx`, `City_bicycle.jsx`, `Generic_mountain_bike.jsx`, `Carbon_frame_bike.jsx`: GLTFJSX-generated components in the root.

## Background & Motivation
The user has provided specialized 3D models for each bike category and wants the 'kids' category to be replaced with a high-end 'carbon' category. The current 3D viewer is hardcoded to a single model and doesn't support category-specific rendering.

## Proposed Solution

### 1. Data Refactoring (`src/data/products.ts`)
*   Update `Product` interface: `category: 'mountain' | 'road' | 'city' | 'carbon' | 'e-bike'`.
*   Replace `kids` with `carbon` in the `categories` array.
*   Update "Specialized Riprock" (id: '8'):
    - `name: 'Carbon Elite Evo'`.
    - `category: 'carbon'`.
    - `image: '/bikes/carbon-bike.png'`.
    - `price: 4500`.

### 2. Model Component Refactoring
Move `.jsx` files to `src/components/models/` and refactor for dynamic colors:
- **Road_bike.jsx**: Target `materials.rama` (frame) and `materials['wheel.orange']` (accents).
- **City_bicycle.jsx**: Target `materials.BlackSmooth` (frame parts).
- **Generic_mountain_bike.jsx**: Target `materials.Carro_Pintura` (main paint).
- **Carbon_frame_bike.jsx**: Target `materials.Rahmen` (frame).
- **All**: Update `useGLTF('/file.glb')` to `useGLTF('/bikes/file.glb')`.

### 3. Viewer Integration (`src/components/Bike3DViewer.tsx`)
Update `Bike3DViewer` to accept a `category` prop:
```tsx
import CityBike from './models/CityBike';
import RoadBike from './models/RoadBike';
import MountainBike from './models/MountainBike';
import CarbonBike from './models/CarbonBike';

const ModelMap = {
  mountain: MountainBike,
  road: RoadBike,
  city: CityBike,
  carbon: CarbonBike,
  'e-bike': MountainBike,
};
```

## Verification & Testing
- **Category Check:** Verify 'Carbon Bikes' appears in the shop/navigation instead of 'Kids' Bikes'.
- **3D Render:** Navigate to a Road Bike; verify `Road_bike.jsx` renders.
- **Color Sync:** Change color on a Carbon Bike; verify the 3D frame updates instantly.
- **E-Bike Check:** Verify E-bikes use the assigned 3D model.

## Alternatives Considered
- **Single Traversal:** A single `BikeModel` component that traverses any passed `scene`.
  - *Pros:* Less code duplication.
  - *Cons:* Extremely fragile if material names vary (e.g., 'rama' vs 'Rahmen').
- **Current Approach:** Explicit components for each model.
  - *Pros:* Highly precise and allows model-specific fine-tuning (rotation, scale, lighting).
  - *Cons:* More initial boilerplate.
