import React from 'react';

interface Props {
    isModeValue: boolean;
    title: string;
    setIsModeValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonSwitch: React.FC<Props> = ({ isModeValue, setIsModeValue, title }) => {
    return (
        <div id="configuration" style={{ margin: '0.5rem 0', width: '100%' }}>
            <button
                style={{
                    width: '100%',
                    minHeight: '48px',
                    padding: '0.75rem 1rem',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    backgroundColor: isModeValue ? '#4CAF50' : '#f44336',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontWeight: '500',
                }}
                onClick={() => { setIsModeValue(prev => !prev) }}
            >
                {title}: {isModeValue ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default ButtonSwitch;
