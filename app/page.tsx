'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { uploadPrescription } from '@/lib/api';
import UploadZone from '@/components/UploadZone';
import { Loader2, AlertCircle } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setError(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setError(null);

    try {
      const response = await uploadPrescription(selectedFile);

      if (response.task_id) {
        router.push(`/result/${response.task_id}`);
      } else {
        throw new Error('No task ID received from server');
      }
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to upload prescription'
      );
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full space-y-8">

        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Digitize Handwritten Prescriptions
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Upload a photo of any handwritten doctor prescription. Our AI will read it, structure the data, and validate medicines instantly.
          </p>
        </div>

        <UploadZone
          onFileSelect={handleFileSelect}
          selectedFile={selectedFile}
          onUpload={handleUpload}
          disabled={isUploading}
        />

        {isUploading && (
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" />
            <p className="mt-3 text-gray-600">Uploading prescription...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 p-4 rounded-xl border border-red-200 flex gap-3">
            <AlertCircle className="text-red-600" />
            <div>
              <p className="text-red-700 font-medium">Upload Failed</p>
              <p className="text-red-600 text-sm">{error}</p>
              <button
                onClick={() => setError(null)}
                className="text-sm text-red-700 mt-2 underline"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}