// Kiro Vibe-Coding Demo Script
// This demonstrates how to integrate with Kiro for generating short text outputs

class KiroVibeDemo {
    constructor() {
        this.motivationBtn = document.getElementById('motivationBtn');
        this.motivationOutput = document.getElementById('motivationOutput');
        this.ideaBtn = document.getElementById('ideaBtn');
        this.ideaInput = document.getElementById('ideaInput');
        this.ideaOutput = document.getElementById('ideaOutput');
        this.randomBtn = document.getElementById('randomBtn');
        
        this.init();
    }

    init() {
        this.motivationBtn.addEventListener('click', () => this.generateMotivation());
        this.ideaBtn.addEventListener('click', () => this.generateIdeaName());
        this.randomBtn.addEventListener('click', () => this.generateRandomName());
        this.ideaInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.generateIdeaName();
        });
        
        // Set initial states
        this.motivationOutput.textContent = 'Cast the spell to summon motivation from beyond...';
        this.motivationOutput.classList.add('empty');
        this.ideaOutput.textContent = 'Describe your dark creation or use the dice for random names...';
        this.ideaOutput.classList.add('empty');
    }

    async generateMotivation() {
        this.setLoading(this.motivationBtn, this.motivationOutput, 'Summoning spirits of motivation...');
        
        try {
            // In a real implementation, this would call Kiro's API
            // For demo purposes, we'll simulate the response
            const motivation = await this.simulateKiroResponse('motivation');
            this.setOutput(this.motivationOutput, motivation);
        } catch (error) {
            this.setError(this.motivationOutput, 'Failed to generate motivation');
        } finally {
            this.clearLoading(this.motivationBtn);
        }
    }

    async generateIdeaName() {
        const ideaDescription = this.ideaInput.value.trim();
        
        // If no description, generate random name
        if (!ideaDescription) {
            this.generateRandomName();
            return;
        }

        this.setLoading(this.ideaBtn, this.ideaOutput, 'Brewing dark magic for your creation...');
        
        try {        
            // In a real implementation, this would call Kiro's API with the idea description
            const ideaName = await this.simulateKiroResponse('idea', ideaDescription);
            this.setOutput(this.ideaOutput, ideaName);
        } catch (error) {
            this.setError(this.ideaOutput, 'Failed to generate idea name');
        } finally {
            this.clearLoading(this.ideaBtn);
        }
    }

    async generateRandomName() {
        this.setLoading(this.randomBtn, this.ideaOutput, 'Rolling the bones of fate...');
        
        try {
            const randomName = await this.simulateKiroResponse('random');
            this.setOutput(this.ideaOutput, randomName);
        } catch (error) {
            this.setError(this.ideaOutput, 'The spirits are silent...');
        } finally {
            this.clearRandomLoading();
        }
    }

    // Simulate Kiro API responses for demo purposes
    async simulateKiroResponse(type, context = '') {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        
        if (type === 'motivation') {
            const motivations = [
                "From the shadows of doubt, your strength emerges. Rise, mortal! 🦇",
                "Like a phoenix from digital ashes, your potential burns eternal. ✨",
                "The spirits whisper: 'Your persistence haunts failure itself.' 👻",
                "In the darkness of challenges, you are the glowing ember of hope. 🔥",
                "Ancient wisdom speaks: 'The brave soul conquers all realms.' ⚡",
                "Your determination casts spells that bend reality to your will. 🔮",
                "From the crypts of yesterday's failures, tomorrow's victories arise. 💀"
            ];
            return motivations[Math.floor(Math.random() * motivations.length)];
        }
        
        if (type === 'idea' || type === 'random') {
            // Generate spooky names - could use context for smarter generation in real implementation
            const prefixes = ['Shadow', 'Phantom', 'Mystic', 'Dark', 'Spectral', 'Void', 'Hex', 'Raven', 'Ghost', 'Crimson', 'Lunar', 'Obsidian'];
            const suffixes = ['Forge', 'Realm', 'Crypt', 'Nexus', 'Spell', 'Wraith', 'Veil', 'Shrine', 'Labs', 'Works', 'Studio', 'Core'];
            
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
            
            return `${prefix}${suffix}`;
        }
    }

    setLoading(button, output, message) {
        button.disabled = true;
        if (button.id === 'randomBtn') {
            button.textContent = '🌀';
        } else {
            button.textContent = 'Conjuring...';
        }
        output.textContent = message;
        output.className = 'output loading';
        output.classList.remove('show');
    }

    clearLoading(button) {
        button.disabled = false;
        button.textContent = button.id === 'motivationBtn' ? 'Cast Motivation' : 'Conjure Name';
    }

    clearRandomLoading() {
        this.randomBtn.disabled = false;
        this.randomBtn.textContent = '🎲';
    }

    setOutput(output, text) {
        output.textContent = text;
        output.className = 'output show';
        // Trigger the ghostly animation
        setTimeout(() => {
            output.classList.add('show');
        }, 50);
    }

    setError(output, message) {
        output.textContent = message;
        output.className = 'output error';
    }
}

// Initialize the demo when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new KiroVibeDemo();
});

// Note: In a real implementation, you would integrate with Kiro's actual API
// This demo uses simulated responses to show the UI/UX flow