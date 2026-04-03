import React from "react";

interface Props {
  isModeValue: boolean;
  title: string;
  setIsModeValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBoxSwitch: React.FC<Props> = ({
  isModeValue,
  setIsModeValue,
  title,
}) => {
  return (
    <div className="configuration">
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.75rem",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          minHeight: "44px",
        }}
      >
        <input
          type="checkbox"
          checked={isModeValue}
          onChange={() => setIsModeValue(!isModeValue)}
          style={{
            width: "24px",
            height: "24px",
            cursor: "pointer",
          }}
        />
        <span>{title}</span>
      </label>
    </div>
  );
};

export default CheckBoxSwitch;
