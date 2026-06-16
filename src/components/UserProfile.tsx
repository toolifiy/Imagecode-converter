import React, { useRef, useState } from 'react';
import { 
  UploadCloud, 
  X, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AdsterraBanner from './AdsterraBanner';

interface UserProfileProps {
  selectedFile: File | null;
  selectedFileUrl: string;
  onFileSelect: (file: File) => void;
  onResetUpload: () => void;
  onCreateCode: () => void;
  generatedCode: string;
  stats: {
    totalImages: number;
    totalBytes: number;
    uncompressedLossless: string;
    fidelityScore: string;
  };
}

export default function UserProfile({ 
  selectedFile,
  selectedFileUrl,
  onFileSelect,
  onResetUpload,
  onCreateCode,
  generatedCode,
  stats
}: UserProfileProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatSize = (bytes: number) => {
    if (bytes > 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    if (bytes > 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${bytes} Bytes`;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 flex flex-col justify-between h-full gap-5 border-2 border-slate-200 shadow-sm relative overflow-hidden">
      {/* Dynamic Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1 px-2.5 bg-blue-50 text-blue-650 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 border border-blue-100">
            <Layers className="w-3.5 h-3.5" />
            <span>Compiler Channel</span>
          </span>
        </div>
        <h3 className="font-extrabold text-slate-900 text-base leading-snug">Lossless Image Alphanumeric Compiler</h3>
        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
          Select any master image file below to translate raw byte matrices into secure code with 0% loss.
        </p>
      </div>

      {/* Dynamic Stats Row inside the Workspace - Exactly restoring requested stats */}
      {selectedFile && (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50/85 border border-slate-200/80 p-3 rounded-2xl flex flex-col justify-center">
            <span className="block font-bold text-slate-400 uppercase tracking-widest text-[8.5px]">Total Compiled</span>
            <span className="font-mono text-slate-800 font-extrabold text-sm">{stats.totalImages} Files</span>
          </div>
          <div className="bg-slate-50/85 border border-slate-200/80 p-3 rounded-2xl flex flex-col justify-center">
            <span className="block font-bold text-slate-400 uppercase tracking-widest text-[8.5px]">Master Size</span>
            <span className="font-mono text-slate-950 font-extrabold text-sm truncate">
              {stats.totalBytes > 1024 * 1024 
                ? `${(stats.totalBytes / (1024 * 1024)).toFixed(2)} MB` 
                : stats.totalBytes > 1024 
                  ? `${(stats.totalBytes / 1024).toFixed(1)} KB` 
                  : `${stats.totalBytes} B`}
            </span>
          </div>
        </div>
      )}

      {selectedFile && (
        <div className="-my-1.5">
          <AdsterraBanner id="user-profile-selected-ad" format="320-50" />
        </div>
      )}

      {/* COMPACT BLUE COLOR IMAGE SELECTION INTEGRATION MODULE */}
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => {
          if (!selectedFile) {
            fileInputRef.current?.click();
          }
        }}
        className={`relative rounded-2xl p-6 transition-all text-center flex flex-col items-center justify-center border-2 border-dashed cursor-pointer select-none group min-h-[140px] ${
          selectedFile 
            ? 'border-emerald-300 bg-emerald-50/5' 
            : isDragOver
              ? 'border-blue-500 bg-blue-50/40'
              : 'border-blue-300 hover:border-blue-550 bg-blue-50/5 hover:bg-blue-50/20'
        }`}
      >
        {/* File select hidden interface */}
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileInputChange}
          accept="image/*"
          className="hidden"
        />

        <AnimatePresence mode="wait">
          {!selectedFile ? (
            <motion.div 
              key="no-file-prompt"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="space-y-3 pointer-events-none w-full"
            >
              {/* Highlight blue color styled selector element as customized */}
              <div className="w-12 h-12 bg-blue-600 group-hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-md shadow-blue-500/20 transform group-active:scale-90 transition-all mx-auto">
                <UploadCloud className="w-6 h-6 animate-pulse" />
              </div>
              
              <div>
                <span className="block text-sm font-black text-blue-700 uppercase tracking-wider">
                  SELECT IMAGE FILE
                </span>
                <span className="block text-xs text-slate-400 font-medium">
                  Click to load or drag & drop image here
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="file-details-container"
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="w-full space-y-4" 
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Selected miniature visual banner */}
              <div className="flex items-center gap-3 bg-white p-2.5 border border-slate-150 rounded-xl relative hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded overflow-hidden shrink-0 border border-slate-200">
                  <img 
                    src={selectedFileUrl} 
                    alt="Active thumbnail" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="min-w-0 flex-1 text-left">
                  <span className="block text-xs font-extrabold text-slate-900 truncate" title={selectedFile.name}>
                    {selectedFile.name}
                  </span>
                  <span className="block font-mono text-[9px] text-slate-400 uppercase mt-0.5">
                    {formatSize(selectedFile.size)} • {selectedFile.type.split('/')[1]?.toUpperCase()}
                  </span>
                </div>
  
                {/* Cancel active file choice */}
                <button
                  type="button"
                  onClick={onResetUpload}
                  className="p-1 hover:bg-slate-105 rounded-full text-slate-400 hover:text-slate-800 cursor-pointer transition-all shrink-0 active:scale-90"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
  
              {/* Create Code actions aligned perfectly */}
              <div className="flex flex-col gap-2 w-full">
                <button
                  type="button"
                  onClick={onCreateCode}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl cursor-pointer text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-1.5 active:scale-97"
                >
                  <span>Build Code</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={onResetUpload}
                  className="w-full py-2 border border-slate-250 hover:bg-slate-100 bg-slate-50 text-xs font-bold text-slate-600 rounded-xl cursor-pointer transition-all active:scale-98"
                >
                  Change Image
                </button>
              </div>
  
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
