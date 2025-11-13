# Kiro Vibe-Coding Demo

A minimal web template demonstrating how to use Kiro's vibe-coding capabilities to generate short, creative textual outputs.

## Features

### 🚀 Daily Motivation
- Generates uplifting, motivational sentences
- Perfect for daily inspiration or app onboarding
- One-click generation with smooth UI feedback

### 💡 Idea Name Generator  
- Creates catchy names for products, projects, or ideas
- Takes user input to provide contextual suggestions
- Great for brainstorming sessions or startup naming

## Getting Started

1. Open `index.html` in your web browser
2. Click "Generate Motivation" for instant inspiration
3. Enter an idea description and click "Generate Name" for creative naming

## Implementation Notes

This demo shows the UI/UX flow for integrating with Kiro's vibe-coding features. The current implementation uses simulated responses to demonstrate the interface.

### For Real Integration

To connect with actual Kiro vibe-coding:

1. Set up your Kiro prompt configuration in `.kiro/prompt.txt`
2. Replace the `simulateKiroResponse()` method with actual Kiro API calls
3. Configure your specific prompts for motivation and naming tasks

## File Structure

```
kiromotivate/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This documentation
└── .kiro/
    └── prompt.txt      # Kiro configuration (to be set up)
```

## Customization

- **Styling**: Modify `style.css` to match your brand colors and design
- **Prompts**: Update the simulation arrays in `script.js` or configure real Kiro prompts
- **Features**: Add more vibe-coding examples by extending the demo sections

## Browser Support

Works in all modern browsers with ES6+ support. No external dependencies required.