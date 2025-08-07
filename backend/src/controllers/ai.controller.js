const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).json({ error: "Code is required" });
        }

        console.log('Received code:', code);

        // Create a proper prompt for code review
        const reviewPrompt = `Please review the following code and provide detailed feedback:\n\n${code}`;
        
        const response = await aiService(reviewPrompt);
        
        res.json({ 
            success: true,
            response: response 
        });
        
    } catch (error) {
        console.error('Controller Error:', error);
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
}