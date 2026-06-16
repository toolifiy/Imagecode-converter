import { LosslessImage } from '../types';

const DB_NAME = 'ImagePixelDB_v1';
const STORE_NAME = 'uploads';
const DB_VERSION = 1;

export function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    // Fail-safe check for server-side-rendering / headless environment
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this environment.'));
      return;
    }
    
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = () => {
      reject(request.error || new Error('Failed to open database'));
    };
    
    request.onsuccess = () => {
      resolve(request.result);
    };
    
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  });
}

export async function getUploadsFromDB(): Promise<LosslessImage[]> {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      
      request.onsuccess = () => {
        const results = request.result as LosslessImage[];
        // Sort items by unique numerical timestamp (descending order)
        results.sort((a, b) => {
          const tA = a.id.split('_')[1] || '0';
          const tB = b.id.split('_')[1] || '0';
          return Number(tB) - Number(tA);
        });
        resolve(results);
      };
      
      request.onerror = () => {
        reject(request.error || new Error('Failed to fetch items'));
      };
    });
  } catch (err) {
    console.warn('Fallback: IndexedDB could not be read. Returning empty array.', err);
    return [];
  }
}

export async function saveUploadToDB(item: LosslessImage): Promise<void> {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(item);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error || new Error('Failed to write item'));
    });
  } catch (err) {
    console.error('IndexedDB writing error:', err);
    throw err;
  }
}

export async function deleteUploadFromDB(id: string): Promise<void> {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error || new Error('Failed to delete item'));
    });
  } catch (err) {
    console.error('IndexedDB delete error:', err);
    throw err;
  }
}

export async function clearAllUploadsFromDB(): Promise<void> {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error || new Error('Failed to clear store'));
    });
  } catch (err) {
    console.error('IndexedDB clear error:', err);
    throw err;
  }
}
