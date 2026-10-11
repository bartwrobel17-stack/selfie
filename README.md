# SELFiE Restauracja — Gniezno

Nowoczesna, responsywna strona restauracji SELFiE. Projekt działa jako statyczna strona HTML/CSS/JS i nie wymaga frameworka ani procesu budowania.

## Uruchomienie lokalne

Otwórz `index.html` w przeglądarce albo uruchom lokalny serwer:

```bash
python -m http.server 8000
```

Otwórz `http://localhost:8000`.

## Funkcje

- Responsywny układ na telefony, tablety i komputery oraz mobilna nawigacja.
- Menu z filtrami kategorii i wyszukiwaniem na żywo.
- Galeria zdjęć z podglądem, nawigacją klawiaturą i zamykaniem klawiszem Escape.
- Rozwijane FAQ.
- Klikalny telefon, linki do Google Maps i osadzona mapa.
- Podstawowe metadane SEO/Open Graph, semantyczny HTML i widoczne stany fokusu.
- Obsługa preferencji ograniczonego ruchu.

## Przed publikacją

- Zdjęcia z Unsplash są ilustracyjne i nie są potwierdzonymi fotografiami restauracji.
- Dania, adres i telefon bazują na informacjach przekazanych w briefie. Aktualną kartę i ceny należy potwierdzić w restauracji.
- Ocena 4,9 i liczba 1 228 opinii pochodzą z briefu; nie są automatycznie synchronizowane z Google.
- Godziny otwarcia nie zostały podane, więc strona odsyła do wizytówki zamiast zgadywać.
- Panel właściciela, CMS i rezerwacje online nie są zaimplementowane.

## Publikacja

Możesz opublikować katalog przez GitHub Pages, Netlify lub Vercel jako stronę statyczną. Dla GitHub Pages wybierz w repozytorium **Settings → Pages**, ustaw źródło na gałąź `main` i katalog `/(root)`.