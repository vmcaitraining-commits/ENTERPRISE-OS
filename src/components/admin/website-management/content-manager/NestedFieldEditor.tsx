import React from 'react';
import { Type, ImageIcon } from 'lucide-react';

interface NestedFieldEditorProps {
  value: any;
  onChange: (newValue: any) => void;
  label?: string;
}

export const NestedFieldEditor: React.FC<NestedFieldEditorProps> = ({ value, onChange, label }) => {
  if (value === null || value === undefined) return null;

  if (typeof value === 'string') {
    const isTextArea = value.length > 80 || value.includes('\n');
    const isImage = value.startsWith('http') || value.startsWith('/images') || value.match(/\.(jpg|png|svg|webp)$/i);
    
    if (isImage) {
      return (
        <div className="flex items-center gap-4 border border-slate-200 rounded p-2 bg-slate-50">
          <img src={value} className="w-16 h-16 object-cover rounded bg-slate-200" />
          <input 
            type="text" 
            value={value} 
            onChange={e => onChange(e.target.value)} 
            className="flex-1 px-2 py-1 text-sm border rounded"
          />
        </div>
      );
    }
    
    if (isTextArea) {
      return (
        <textarea 
          value={value} 
          onChange={e => onChange(e.target.value)}
          className="w-full px-3 py-2 text-sm border rounded"
          rows={3}
        />
      );
    }
    
    return (
      <input 
        type="text" 
        value={value} 
        onChange={e => onChange(e.target.value)} 
        className="w-full px-3 py-2 text-sm border rounded"
      />
    );
  }
  
  if (typeof value === 'number') {
    return (
      <input 
        type="number" 
        value={value} 
        onChange={e => onChange(Number(e.target.value))} 
        className="w-full px-3 py-2 text-sm border rounded"
      />
    );
  }
  
  if (typeof value === 'boolean') {
    return (
      <input 
        type="checkbox" 
        checked={value} 
        onChange={e => onChange(e.target.checked)} 
        className="w-4 h-4 rounded border-gray-300"
      />
    );
  }
  
  if (Array.isArray(value)) {
    return (
      <div className="space-y-3 pl-4 border-l-2 border-slate-200">
        {value.map((item, index) => {
          // Identify stable key if available (e.g. item.id or item.slug)
          const key = (item && typeof item === 'object' && (item.id || item.slug)) ? (item.id || item.slug) : index;
          return (
            <div key={key} className="bg-slate-50 border border-slate-100 p-3 rounded">
              <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Item {key}</div>
              <NestedFieldEditor 
                value={item} 
                onChange={(newItemVal) => {
                  const newArr = [...value];
                  newArr[index] = newItemVal;
                  onChange(newArr);
                }} 
              />
            </div>
          );
        })}
      </div>
    );
  }
  
  if (typeof value === 'object') {
    return (
      <div className="space-y-3 pl-4 border-l-2 border-indigo-100">
        {Object.keys(value).map(k => (
          <div key={k} className="space-y-1">
            <label className="text-xs font-medium text-slate-700 capitalize">{k.replace(/([A-Z])/g, ' $1')}</label>
            <NestedFieldEditor 
              value={value[k]} 
              onChange={(newVal) => {
                onChange({ ...value, [k]: newVal });
              }} 
            />
          </div>
        ))}
      </div>
    );
  }
  
  return null;
}
