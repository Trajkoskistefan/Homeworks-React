import React, { useState } from 'react';

const isValidColor = (color) => {
  const s = new Option().style;
  s.color = color;
  return s.color !== '';
};

const ColorPicker = () => {
  const [colors, setColors] = useState(['red', 'green', 'blue', 'yellow']);
  const [selectedColor, setSelectedColor] = useState('white');
  const [customColor, setCustomColor] = useState('');
  const [error, setError] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddColor = () => {
    const trimmedColor = customColor.trim().toLowerCase();
    if (!trimmedColor) {
      setError('Please enter a color.');
      return;
    }
    if (!isValidColor(trimmedColor)) {
      setError('Invalid color. Please enter a valid color name or hex code.');
      return;
    }
    if (colors.includes(trimmedColor)) {
      setError('Color already exists.');
      return;
    }
    setColors([...colors, trimmedColor]);
    setCustomColor('');
    setError('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Color Picker</h2>
      <div style={{ marginBottom: '1rem' }}>
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorClick(color)}
            style={{
              margin: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: color,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
              textShadow: '0 0 2px black',
            }}
          >
            {color}
          </button>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter custom color"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={handleAddColor} style={{ padding: '0.5rem 1rem' }}>
          Add Color
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div
        style={{
          marginTop: '2rem',
          width: '300px',
          height: '150px',
          backgroundColor: selectedColor,
          margin: '2rem auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #ccc',
          borderRadius: '8px',
          color: '#000',
        }}
      >
        Selected Color: {selectedColor}
      </div>
    </div>
  );
};

export default ColorPicker;
