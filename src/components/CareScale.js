function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? '☀️' : '💧';

  return (
    <div className="care-scale">
      {range.map((rangeItem) =>
        scaleValue >= rangeItem ? (
          <span key={rangeItem}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;