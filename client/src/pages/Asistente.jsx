import React, { useState } from 'react';
import axios from 'axios';

function Asistente() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const fetchResponse = async () => {
        try {
            const result = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt: input,
                max_tokens: 60
            }, {
                headers: {
                    'Authorization': `Bearer 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`,
                    'Content-Type': 'application/json'
                }
            });

            setResponse(result.data.choices[0].text);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <button onClick={fetchResponse}>Submit</button>

            <p>{response}</p>
        </div>
    );
}

export default Asistente;
