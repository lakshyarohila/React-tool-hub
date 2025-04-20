import React, { useEffect, useState, useRef } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const utteranceRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      const synthVoices = window.speechSynthesis.getVoices();
      setVoices(synthVoices);
      if (synthVoices.length) setSelectedVoice(synthVoices[0].name);
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const speak = () => {
    if (!text.trim()) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices.find(v => v.name === selectedVoice);
    utterance.rate = rate;
    utterance.pitch = pitch;
    window.speechSynthesis.cancel(); // stop any ongoing speech
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  const stop = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Text to Speech</h2>
      <textarea
        className="w-full p-2 border rounded resize-none mb-4"
        rows="6"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <select
          className="flex-1 p-2 border rounded"
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)}
        >
          {voices.map((voice, i) => (
            <option key={i} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
        <div className="flex-1">
          <label className="block text-sm">Rate: {rate}</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm">Pitch: {pitch}</label>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={speak}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Speak
        </button>
        <button
          onClick={stop}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default TextToSpeech;