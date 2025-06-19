import React, { useState } from "react";
import { Card, Title } from "@/components/atoms";
import { PanelHeader, UploadArea } from "@/components/molecules";

const AdminContainer = () => {
  const [uploadLogs, setUploadLogs] = useState<string[]>([]);

  const handleFileSelect = (file: File) => {
    const log = `File "${
      file.name
    }" selected at ${new Date().toLocaleTimeString()}`;
    setUploadLogs((prev) => [...prev, log]);
  };

  const handleFileDrop = (files: FileList) => {
    const file = files[0];
    if (file) {
      const log = `File "${
        file.name
      }" dropped at ${new Date().toLocaleTimeString()}`;
      setUploadLogs((prev) => [...prev, log]);
    }
  };

  return (
    <Card className="w-full max-w-2xl flex flex-col min-h-[600px] p-0">
      <PanelHeader
        title="Admin Panel - ReguBot"
        icon={
          <img
            src="/logo/panel-header.svg"
            alt="Panel Header"
            width="24"
            height="24"
          />
        }
      />

      {/* Main Content */}
      <div className="flex-1 p-8 flex flex-col gap-8">
        {/* Upload Document Section */}
        <div className="flex flex-col gap-4">
          <Title as="h2" className="text-base font-semibold">
            Upload Regulation Document
          </Title>
          <UploadArea onFileSelect={handleFileSelect} onDrop={handleFileDrop} />
        </div>

        {/* Upload Logs Section */}
        <div className="flex flex-col gap-4">
          <Title as="h2" className="text-base font-semibold">
            Upload Logs
          </Title>
          <div className="bg-gray-100 rounded-lg p-6 min-h-[200px]">
            {uploadLogs.length === 0 ? (
              <p className="text-gray-500 text-center">No uploads yet</p>
            ) : (
              <div className="space-y-2">
                {uploadLogs.map((log, index) => (
                  <div
                    key={index}
                    className="text-sm text-gray-700 bg-white p-2 rounded"
                  >
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdminContainer;
