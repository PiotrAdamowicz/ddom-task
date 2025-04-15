# Zadanie rekrutacyjne dla DDOM

## Uruchomienie

Projekt uzywa pnpm żeby uruchomić instalujemy paczki `pnpm install` i uruchamiamy serwer deweloperski `pnpm dev`.
Testy pod komendą `pnpm test:run`
Pnpm wybrany ze wzgledu na predkość i cashing paczek.

## Opis

1. Projekt postawiony na Vite - nowoczesny elastyczny i szybszy w porównaniu do Vue CLI (obecnie vue@latest?)
2. Uzyto vueUse i funkcji useFetch do pobierania danych - standardowe uzycie, biblioteka posiada dużo funkcji z czesto wykorzystyuwanymi rozwiazaniami w aplikacjach.

## Obsługa błędów

Będzie tym lepsza im lepiej znamy API z którym się łączymy. Z racji obsługi standardowych statusów(500, 404) nie tworzyłem żadnego modelu dla rodzajów odpowiedzi.

Przy zastosowaniu globalnego statu dla powiadomieni błędów mozna uruchomic wyświetlenie błedu (komponent Toast) z dowolnego miejsca aplikacji gdzie potrzebujemy pobierać dane, a także ręcznie wyświetlić bład wewnetrzny aplikacji klienckiej jeśli będzie taka potrzeba.
