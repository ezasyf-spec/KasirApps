import * as SQLite from 'expo-sqlite';

export const initDB = async () => {
  try {
    const db = await SQLite.openDatabaseAsync('kasir_toko.db');
    
    // Membuat tabel-tabel utama jika belum ada
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS barang (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nama TEXT NOT NULL,
        barcode TEXT,
        harga_beli REAL,
        harga_jual REAL,
        stok INTEGER DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS transaksi (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tanggal TEXT NOT NULL,
        total REAL,
        bayar REAL,
        kembalian REAL
      );
    `);
    console.log('Database SQLite berhasil disiapkan!');
  } catch (error) {
    console.log('Gagal membuat database:', error);
  }
};
