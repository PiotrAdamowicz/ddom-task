# Zadanie rekrutacyjne dla DDOM

## Uruchomienie

Projekt używa pnpm, aby uruchomić instalujemy paczki `pnpm install` i uruchamiamy serwer deweloperski `pnpm dev`.
Testy pod komendą `pnpm test:run`
Pnpm wybrany ze względu na prędkość i cashing paczek.

## Opis

1. Projekt postawiony na Vite - nowoczesny elastyczny i szybszy w porównaniu do Vue CLI (obecnie vue@latest?)
2. Użyto vueUse i funkcji useFetch do pobierania danych - standardowe użycie, biblioteka posiada dużo funkcji z często wykorzystywanymi rozwiązaniami w aplikacjach.

## Obsługa błędów

Będzie tym lepsza im lepiej znamy API z którym się łączymy. Z racji obsługi standardowych statusów(500, 404) nie tworzyłem żadnego modelu dla rodzajów odpowiedzi.

Przy zastosowaniu globalnego stanu dla powiadomień błędów można uruchomić wyświetlenie błędu (komponent Toast) z dowolnego miejsca aplikacji gdzie potrzebujemy pobierać dane, a także ręcznie wyświetlić błąd wewnętrzny aplikacji klienckiej jeśli będzie taka potrzeba.
