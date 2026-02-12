---
name: secure-mobile-deployment
description: Gestiona la seguridad de contenidos (DRM), privacidad de datos y accesibilidad. Úsalo para configurar Widevine, ExoPlayer y cumplir con WCAG/POUR.
---

# Secure Mobile Deployment Skill

This skill ensures the EdTech application is secure, compliant, and accessible to all users.

## Security & DRM Implementation

### 1. Content Protection (Widevine DRM)
[cite_start]Protect premium educational video content from piracy[cite: 53]:
- [cite_start]**High Definition:** Implement **Widevine Level 1 (L1)** using Hardware-backed TEE for HD/UHD content[cite: 54].
- [cite_start]**Standard Definition:** Use **Widevine Level 3 (L3)** for software-based protection where hardware is limited[cite: 55].
- [cite_start]**Offline Playback:** Use `MediaDrm` API to manage persistent licenses for offline viewing[cite: 55].

### 2. Data Privacy & Encryption
Secure student data (grades, PII) compliant with GDPR/COPPA:
- [cite_start]**Local Storage:** Use **Jetpack Security** and `EncryptedSharedPreferences` for config data[cite: 57, 58].
- [cite_start]**Database:** Implement **SQLCipher** for transparent encryption of local SQLite/Room databases[cite: 58].

## Accessibility & UX Standards
[cite_start]Ensure the app meets **POUR principles** (Perceptible, Operable, Understandable, Robust)[cite: 63]:
- [cite_start]**Touch Targets:** Enforce a minimum size of **48dp x 48dp** for all interactive elements to avoid error clicks[cite: 63].
- [cite_start]**Contrast:** Verify color contrast ratios of **4.5:1** for readability in sunlight[cite: 63].
- [cite_start]**Navigation:** Ensure full compatibility with Android TalkBack for visually impaired users[cite: 64].