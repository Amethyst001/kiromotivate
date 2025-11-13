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
        
        if (type === 'idea') {
            // Context-aware name generation based on user input
            return this.generateContextualName(context);
        }
        
        if (type === 'random') {
            // Halloween-themed random names
            return this.generateHalloweenName();
        }
    }

    generateContextualName(context) {
        const lowerContext = context.toLowerCase();
        
        // Detect context categories and generate appropriate names
        if (lowerContext.includes('fitness') || lowerContext.includes('health') || lowerContext.includes('workout') || lowerContext.includes('gym')) {
            const fitnessPrefixes = ['Phantom', 'Shadow', 'Dark', 'Night', 'Blood', 'Iron', 'Steel', 'Raven'];
            const fitnessSuffixes = ['Fit', 'Gym', 'Flex', 'Power', 'Force', 'Strength', 'Beast', 'Warrior'];
            return this.combineWords(fitnessPrefixes, fitnessSuffixes);
        }
        
        if (lowerContext.includes('app') || lowerContext.includes('mobile') || lowerContext.includes('software') || lowerContext.includes('tech')) {
            const techPrefixes = ['Cyber', 'Digital', 'Phantom', 'Ghost', 'Shadow', 'Hex', 'Binary', 'Quantum'];
            const techSuffixes = ['App', 'Tech', 'Soft', 'Code', 'Byte', 'Net', 'Hub', 'Lab'];
            return this.combineWords(techPrefixes, techSuffixes);
        }
        
        if (lowerContext.includes('food') || lowerContext.includes('restaurant') || lowerContext.includes('cooking') || lowerContext.includes('recipe')) {
            const foodPrefixes = ['Midnight', 'Crimson', 'Dark', 'Mystic', 'Spiced', 'Smoky', 'Burnt', 'Cauldron'];
            const foodSuffixes = ['Kitchen', 'Feast', 'Bite', 'Taste', 'Flavor', 'Spice', 'Brew', 'Dish'];
            return this.combineWords(foodPrefixes, foodSuffixes);
        }
        
        if (lowerContext.includes('game') || lowerContext.includes('gaming') || lowerContext.includes('play')) {
            const gamePrefixes = ['Shadow', 'Phantom', 'Dark', 'Neon', 'Pixel', 'Cyber', 'Mystic', 'Rogue'];
            const gameSuffixes = ['Play', 'Game', 'Quest', 'Arena', 'Realm', 'World', 'Zone', 'Nexus'];
            return this.combineWords(gamePrefixes, gameSuffixes);
        }
        
        if (lowerContext.includes('music') || lowerContext.includes('sound') || lowerContext.includes('audio')) {
            const musicPrefixes = ['Echo', 'Phantom', 'Dark', 'Mystic', 'Lunar', 'Spectral', 'Sonic', 'Rhythm'];
            const musicSuffixes = ['Sound', 'Beat', 'Wave', 'Tune', 'Echo', 'Vibe', 'Mix', 'Flow'];
            return this.combineWords(musicPrefixes, musicSuffixes);
        }
        
        if (lowerContext.includes('social') || lowerContext.includes('chat') || lowerContext.includes('connect')) {
            const socialPrefixes = ['Ghost', 'Phantom', 'Shadow', 'Mystic', 'Lunar', 'Neon', 'Digital', 'Cyber'];
            const socialSuffixes = ['Link', 'Connect', 'Chat', 'Meet', 'Talk', 'Share', 'Circle', 'Hub'];
            return this.combineWords(socialPrefixes, socialSuffixes);
        }
        
        // Default spooky business names for unrecognized contexts
        const defaultPrefixes = ['Shadow', 'Phantom', 'Mystic', 'Dark', 'Spectral', 'Void', 'Hex', 'Raven'];
        const defaultSuffixes = ['Works', 'Labs', 'Studio', 'Corp', 'Solutions', 'Systems', 'Ventures', 'Enterprises'];
        return this.combineWords(defaultPrefixes, defaultSuffixes);
    }

    generateHalloweenName() {
        const halloweenPatterns = [
            'spooky_compound',
            'monster_themed',
            'gothic_single',
            'witchy_brew'
        ];
        
        const pattern = halloweenPatterns[Math.floor(Math.random() * halloweenPatterns.length)];
        
        if (pattern === 'spooky_compound') {
            const spookyPrefixes = ['Phantom', 'Shadow', 'Ghost', 'Wraith', 'Specter', 'Banshee', 'Vampire', 'Witch', 'Warlock', 'Demon'];
            const spookySuffixes = ['Crypt', 'Tomb', 'Grave', 'Haunt', 'Curse', 'Spell', 'Hex', 'Potion', 'Cauldron', 'Grimoire'];
            return this.combineWords(spookyPrefixes, spookySuffixes);
        }
        
        if (pattern === 'monster_themed') {
            const monsters = ['Dracula', 'Frankenstein', 'Wolfman', 'Mummy', 'Zombie', 'Skeleton', 'Reaper', 'Ghoul', 'Poltergeist', 'Necromancer'];
            const suffixes = ['Labs', 'Works', 'Studios', 'Enterprises', 'Industries', 'Corporation', 'Solutions', 'Systems'];
            const monster = monsters[Math.floor(Math.random() * monsters.length)];
            const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
            return `${monster}${suffix}`;
        }
        
        if (pattern === 'gothic_single') {
            const gothicNames = [
                'Ravencroft', 'Shadowmere', 'Nightshade', 'Bloodmoon', 'Darkwood', 'Grimhaven', 
                'Thornfield', 'Blackwater', 'Moonfall', 'Duskwood', 'Mistral', 'Obsidian',
                'Crimsonvale', 'Shadowbane', 'Nightwhisper', 'Darkspire', 'Ghostwind', 'Voidstar'
            ];
            return gothicNames[Math.floor(Math.random() * gothicNames.length)];
        }
        
        if (pattern === 'witchy_brew') {
            const witchyPrefixes = ['Cauldron', 'Potion', 'Spell', 'Brew', 'Charm', 'Enchant', 'Magic', 'Mystic'];
            const witchySuffixes = ['Craft', 'Works', 'Brew', 'Mix', 'Blend', 'Concoct', 'Forge', 'Create'];
            return this.combineWords(witchyPrefixes, witchySuffixes);
        }
    }

    combineWords(prefixes, suffixes) {
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