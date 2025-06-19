import React from "react";
import { Icon, Button } from "@/components/atoms";

interface UploadAreaProps {
  onFileSelect?: (file: File) => void;
  onDrop?: (files: FileList) => void;
  className?: string;
}

const UploadArea: React.FC<UploadAreaProps> = ({
  onFileSelect,
  onDrop,
  className = "",
}) => {
  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if (onDrop && event.dataTransfer.files) {
      onDrop(event.dataTransfer.files);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    <div
      className={`border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50 relative ${className}`}
    >
      <div className="mb-4">
        <Icon
          width={40}
          height={40}
          viewBox="0 0 64 81"
          className="text-gray-400"
        >
          <g clipPath="url(#clip0_185_170)">
            <path
              d="M-0.0428467 70.405V10.595C-0.0428467 4.74355 4.71364 0 10.581 0H38.4257C38.979 0 39.509 0.222466 39.8959 0.617042L63.4568 24.6479C63.8324 25.0311 64.0429 25.5456 64.0429 26.0815V70.405C64.0429 76.2566 59.2865 81 53.419 81H51.2771C50.1415 81 49.2208 80.0819 49.2208 78.9494C49.2208 77.8168 50.1415 76.8988 51.2771 76.8987H53.419C57.0153 76.8987 59.9304 73.9915 59.9304 70.405V28.1321H42.7095C39.208 28.1321 36.3694 25.3013 36.3694 21.8094V4.10127H10.581C6.98489 4.10127 4.0696 7.00862 4.0696 10.595V70.405C4.0696 73.9915 6.98487 76.8987 10.581 76.8987H12.7228L12.7759 76.8994C13.887 76.9274 14.7791 77.8345 14.7791 78.9494C14.7791 80.0642 13.887 80.9713 12.7759 80.9994L12.7228 81H10.581C4.71366 81 -0.0428467 76.2566 -0.0428467 70.405ZM40.4819 21.8094C40.4819 23.0363 41.4793 24.0309 42.7095 24.0309H57.1003L40.4819 7.08084V21.8094Z"
              fill="currentColor"
            />
            <path
              d="M29.9437 78.9494V49.7229L22.7445 56.9026C21.9415 57.7034 20.6396 57.7034 19.8366 56.9026C19.0336 56.1018 19.0336 54.8033 19.8366 54.0025L30.546 43.3222C31.349 42.5214 32.651 42.5214 33.454 43.3222L44.1635 54.0025L44.2005 54.0404C44.9663 54.8438 44.954 56.1143 44.1635 56.9026C43.373 57.6909 42.0991 57.7032 41.2935 56.9395L41.2555 56.9026L34.0562 49.7228V78.9494C34.0562 80.0819 33.1356 81 32 81C30.8644 81 29.9438 80.0819 29.9437 78.9494Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_185_170">
              <rect width="64" height="81" fill="white" />
            </clipPath>
          </defs>
        </Icon>
      </div>
      <p className="text-gray-600 text-center mb-2">
        Drag and Drop file here or{" "}
        <label className="cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={handleFileInput}
            accept=".pdf,.doc,.docx,.txt"
          />
          <Button variant="text">Choose file</Button>
        </label>
      </p>
      <div
        className="absolute inset-0 z-10"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      />
    </div>
  );
};

export default UploadArea;
