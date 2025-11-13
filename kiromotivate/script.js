// Kiro Vibe-Coding Demo Script
// This demonstrates how to integrate with Kiro for generating short text outputs

class KiroVibeDemo {
    constructor() {
        this.motivationBtn = document.getElementById('motivationBtn');
        this.motivationOutput = document.getElementById('motivationOutput');
        this.ideaBtn = document.getElementById('ideaBtn');
        this.ideaInput = document.getElementById('ideaInput');
        this.ideaOutput = document.getElementById('ideaOutput');
        
        this.init();
    }

    init() {
        this.motivationBtn.addEventListener('click', () => this.generateMotivation());
        this.ideaBtn.addEventListener('click', () => this.generateIdeaName());
        this.ideaInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.generateIdeaName();
        });
        
        // Set initial states
        this.motivationOutput.textContent = 'Click the button to generate daily motivation';
        this.motivationOutput.classList.add('empty');
        this.ideaOutput.textContent = 'Enter an idea description and click generate';
        this.ideaOutput.classList.add('empty');
    }

    async generateMotivation() {
        this.setLoading(this.motivationBtn, this.motivationOutput, 'Generating motivation...');
        
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
        if (!ideaDescription) {
            this.setError(this.ideaOutput, 'Please enter an idea description first');
            return;
        }

        this.setLoading(this.ideaBtn, this.ideaOutput, 'Generating name...');
        
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

    // Simulate Kiro API responses for demo purposes
    async simulateKiroResponse(type, context = '') {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        
        if (type === 'motivation') {
            const motivations = [
                "Today's challenges are tomorrow's strengths. You've got this! 💪",
                "Every small step forward is progress worth celebrating. Keep going! 🌟",
                "Your potential is limitless. Trust the process and embrace the journey. ✨",
                "Success isn't about perfection, it's about persistence. You're doing great! 🚀",
                "The best time to plant a tree was 20 years ago. The second best time is now. 🌱"
            ];
            return motivations[Math.floor(Math.random() * motivations.length)];
        }
        
        if (type === 'idea') {
            // Generate names based on context keywords
            const prefixes = ['Swift', 'Smart', 'Quick', 'Pro', 'Elite', 'Prime', 'Zen', 'Flow'];
            const suffixes = ['Hub', 'Lab', 'Pro', 'Zone', 'Sync', 'Boost', 'Edge', 'Core'];
            
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
            
            return `${prefix}${suffix}`;
        }
    }

    setLoading(button, output, message) {
        button.disabled = true;
        button.textContent = 'Generating...';
        output.textContent = message;
        output.className = 'output loading';
    }

    clearLoading(button) {
        button.disabled = false;
        button.textContent = button.id === 'motivationBtn' ? 'Generate Motivation' : 'Generate Name';
    }

    setOutput(output, text) {
        output.textContent = text;
        output.className = 'output';
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