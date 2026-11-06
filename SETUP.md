# Ascend – installazione e accesso con Google

## 1. Pubblica la PWA (gratis)
Carica tutti i file di questa cartella su GitHub Pages o Netlify. Apri il link HTTPS e aggiungi la pagina alla Home.

## 2. Attiva l’accesso con Google (Firebase, piano gratuito)
1. Vai su console.firebase.google.com e crea un progetto.
2. Build > Authentication > Inizia > Provider “Google” > Abilita.
3. Authentication > Impostazioni > Domini autorizzati: aggiungi il dominio dove hai pubblicato l’app (es. nomeutente.github.io).
4. Build > Firestore Database > Crea database (modalità produzione) e in “Regole” incolla:

rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}

5. Impostazioni progetto > Le tue app > Web (</>) e copia la configurazione.
6. Apri `firebase-config.js`, sostituisci `window.FIREBASE_CONFIG=null;` con `window.FIREBASE_CONFIG={apiKey:"...",authDomain:"...",projectId:"...",appId:"..."};` e ricarica i file sul tuo hosting.
7. Nell’app: scheda Altro > Account > Accedi con Google.

## Note
- Si sincronizzano programma, livello, trofei e aspetto. La chiave Gemini resta solo sul telefono.
- Se due telefoni modificano i dati, vince l’ultima modifica.
- Su iPhone, il popup di accesso Google nelle app installate dalla Home può dare problemi: in quel caso accedi una volta da Safari e riprova.
