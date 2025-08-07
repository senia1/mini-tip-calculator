import { useState } from 'react';

function App() {
  const [bill, setBill] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<string>('10');
  const [people, setPeople] = useState<string>('1');
  const [result, setResult] = useState<{
    totalTip: string;
    tipPerPerson: string;
    totalPerPerson: string;
  } | null>(null);

  const calculateTip = () => {
    const billNum = parseFloat(bill);
    const tipNum = parseFloat(tipPercentage);
    const peopleNum = parseFloat(people);

    if (isNaN(billNum) || isNaN(tipNum) || isNaN(peopleNum)) {
      alert('Пожалуйста, введите корректные числовые значения!');
      return;
    }

    const totalTip = (billNum * tipNum) / 100;
    const tipPerPerson = totalTip / peopleNum;
    const totalPerPerson = (billNum + totalTip) / peopleNum;

    setResult({
      totalTip: totalTip.toFixed(2),
      tipPerPerson: tipPerPerson.toFixed(2),
      totalPerPerson: totalPerPerson.toFixed(2),
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Калькулятор чаевых</h1>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Сумма счёта ($): </label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          placeholder="0.00"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Процент чаевых (%): </label>
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          placeholder="10"
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Количество человек: </label>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          placeholder="1"
          min="1"
        />
      </div>

      <button
        onClick={calculateTip}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Посчитать
      </button>

      {result && (
        <div style={{ 
          background: '#2d3748',
          color: '#ffffff',
          padding: '15px', 
          borderRadius: '5px', 
          marginTop: '20px',
          border: '1px solid #4a5568'
        }}>
          <p>Чаевые: <strong>${result.totalTip}</strong></p>
          <p>Чаевые с человека: <strong>${result.tipPerPerson}</strong></p> {/* Исправлено здесь */}
          <p>Итого с человека: <strong>${result.totalPerPerson}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;