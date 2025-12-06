# Service Images Folder

This folder contains images for service cards that are automatically loaded based on the service title.

## Image Naming Convention

**Important:** The image filename must match the service title exactly (case-insensitive).

### Examples:

- Service Title: `"General Service"` → Image: `General Service.png` or `General Service.jpg`
- Service Title: `"Electrical Repairs"` → Image: `Electrical Repairs.png` or `Electrical Repairs.jpg`
- Service Title: `"Engine Repairs"` → Image: `Engine Repairs.png` or `Engine Repairs.jpg`
- Service Title: `"Oil & Fluids Service"` → Image: `Oil & Fluids Service.png` or `Oil & Fluids Service.jpg`

### Supported Image Formats:
- `.png`
- `.jpg`
- `.jpeg`
- `.webp`
- `.svg`

### Notes:
- The matching is **case-insensitive** (e.g., "general service.png" will match "General Service")
- If a service title has "Bike" prefix (e.g., "Bike General Service"), the system automatically removes it and looks for "General Service.png"
- Spaces and special characters should match exactly
- If no matching image is found, the card will display without an image

### Current Service Titles:
1. General Service
2. Electrical Repairs
3. Engine Repairs
4. Oil & Fluids Service
5. Performance Upgrade
6. Safety Inspection
7. Battery Service
8. Detailing & Wash
9. EV Bike Service
10. Accidental Repair
11. Bike Insurance (Tie Up)

### Home Screen Services:
1. Bike General Service → looks for "General Service.png"
2. Bike Electrical Repairs → looks for "Electrical Repairs.png"
3. Bike Body Work → looks for "Body Work.png"
4. Bike Engine Services → looks for "Engine Services.png"

