# Vertical Slider with Draggable Scroll

Welcome to the **Vertical Slider with Draggable Scroll** project! This application demonstrates a vertically scrollable slider where users can drag to scroll through cards smoothly. The center card is emphasized with animations, while the other cards shrink in size.

## Demo
Check out the live demo: [Vertical Slider Demo](https://vertical-slider-lilac.vercel.app)

## Features
- **Draggable Scroll**: Drag anywhere on the screen to scroll up or down.
- **Center Card Highlighting**: The card in the center of the viewport is scaled up for emphasis, while others are smaller.
- **Smooth Animations**: Cards fade in and out with seamless transitions.
## Technology Stack
- **HTML**: Markup structure for the slider.
- **CSS**: Styling and animations for the cards.
- **JavaScript**: Handles interactivity, including draggable scrolling and animations.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Agrimzz/vertical_slider.git
   cd vertical_slidera
   ```

2. **Install Dependencies**
   If you plan to use any dependencies, install them using:
   ```bash
   npm install
   ```

3. **Run Locally**
   Open the `index.html` file in a web browser:
   ```bash
   open index.html
   ```
   Alternatively, use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for live reloading:
   ```bash
   npx live-server
   ```

## Folder Structure
```plaintext
vertical_slider/
├── src/
│   ├── style.css    # CSS styles for the slider
│   ├── main.js      # TypeScript for draggable functionality
├── index.html        # HTML structure of the slider
├── README.md         # Project documentation
```

## Usage
1. Drag vertically to scroll through the cards.
2. The card in the center will scale up while others remain smaller.
3. If you reach the end of the slider, it loops back to the top seamlessly.

## Customization
- **Card Styles**: Modify the `.card` styles in `style.css` to customize the card appearance.
- **Animation**: Tweak the `@keyframes` animations for fade-in and fade-out effects.

## Known Limitations
- **Mobile Responsiveness**: Some adjustments may be needed for smaller screens.




