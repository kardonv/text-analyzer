// TODO: Better to take from config
const API_URL = 'http://localhost:3001/dev';

const analyzeText = async (inputText) => {
    try {
        const response = await fetch(`${API_URL}/text-analyzer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText }),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Request failed');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default {
    analyzeText
};