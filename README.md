# SELFiE Restauracja — Gniezno

Nowoczesna, responsywna strona restauracji SELFiE oraz demonstracyjny panel właściciela. Projekt bazuje na statycznym HTML/CSS/JS.

## Uruchomienie lokalne

Otwórz `index.html` lub `admin.html` w przeglądarce albo uruchom serwer:

```bash
python -m http.server 8000
```

Strona: `http://localhost:8000`  
Panel demonstracyjny: `http://localhost:8000/admin.html`

## Funkcje strony

- Responsywny układ i mobilna nawigacja.
- Menu z filtrami kategorii i wyszukiwaniem.
- Galeria zdjęć, FAQ, klikalny telefon i linki do Google Maps.
- Metadane SEO/Open Graph i obsługa preferencji ograniczonego ruchu.

## Panel właściciela — wersja demonstracyjna

Plik `admin.html` zawiera interfejs do przeglądania, dodawania, edytowania i usuwania pozycji menu oraz edycji podstawowych danych restauracji. Dane są zapisywane wyłącznie w pamięci lokalnej przeglądarki (localStorage).

**To nie jest jeszcze prywatny panel produkcyjny.** Nie ma uwierzytelniania ani wspólnej bazy danych; zmiany nie aktualizują publicznej strony i nie synchronizują się między urządzeniami. Nie należy traktować go jako zabezpieczonego panelem logowania. Do produkcji trzeba podłączyć bezpieczne uwierzytelnianie, bazę danych i API oraz powiązać publiczną stronę z tymi danymi.

## Przed publikacją

- Zdjęcia z Unsplash są ilustracyjne, a nie potwierdzonymi zdjęciami restauracji.
- Dania, adres i telefon bazują na informacjach z briefu; należy potwierdzić aktualne menu i ceny.
- Ocena 4,9 i liczba 1 228 opinii pochodzą z briefu i nie są automatycznie synchronizowane.
- Godziny otwarcia nie zostały podane.

## Publikacja

Repozytorium zawiera workflow GitHub Pages w `.github/workflows/pages.yml`. W ustawieniach repozytorium otwórz **Settings → Pages** i ustaw źródło publikacji na **GitHub Actions**. Następnie sprawdź wynik w zakładce **Actions**.
