import sqlite3
import pandas as pd

# Verbindung zur Datenbank herstellen
conn = sqlite3.connect('./data/ukonn-x-ng.db')

# SQL-Abfrage definieren
query = 'SELECT * FROM task'

# Daten aus der Datenbank abrufen und in ein Pandas DataFrame laden
df = pd.read_sql_query(query, conn)

# Alle Kombinationen von Attributen erstellen
combinations = [(x, y) for i, x in enumerate(df.columns) for j, y in enumerate(df.columns) if i < j]

# Korrelationskoeffizienten berechnen und ausgeben
for x, y in combinations:
    corr = df[x].corr(df[y])
    print(f'Korrelationskoeffizient zwischen {x} und {y}: {corr:.2f}')

# Verbindung zur Datenbank schließen
conn.close()