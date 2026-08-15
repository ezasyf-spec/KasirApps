import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Toko Kita</Text>
        <Text style={styles.subtitle}>Ringkasan Hari Ini</Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pendapatan</Text>
          <Text style={styles.cardValue}>Rp 0</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Transaksi</Text>
          <Text style={styles.cardValue}>0 Struk</Text>
        </View>
      </View>

      <View style={styles.warningBox}>
        <Text style={styles.warningTitle}>⚠️ Info Sistem</Text>
        <Text style={styles.warningText}>Database Offline Aktif</Text>
        <Text style={styles.warningText}>Printer Bluetooth: Belum Konek</Text>
        <TouchableOpacity style={styles.btnAksi}>
          <Text style={styles.btnAksiText}>Konek Printer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, paddingTop: 50 },
  header: { marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2c3e50' },
  subtitle: { fontSize: 14, color: '#7f8c8d', marginTop: 5 },
  grid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  card: { backgroundColor: '#ffffff', width: '48%', padding: 15, borderRadius: 10, elevation: 2 },
  cardTitle: { fontSize: 13, color: '#7f8c8d', marginBottom: 8 },
  cardValue: { fontSize: 18, fontWeight: 'bold', color: '#27ae60' },
  warningBox: { backgroundColor: '#ffeaa7', padding: 15, borderRadius: 10 },
  warningTitle: { fontWeight: 'bold', color: '#d35400', marginBottom: 10 },
  warningText: { color: '#e67e22', marginBottom: 5 },
  btnAksi: { backgroundColor: '#d35400', padding: 10, borderRadius: 5, marginTop: 15, alignItems: 'center' },
  btnAksiText: { color: '#fff', fontWeight: 'bold' }
});
