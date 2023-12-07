## Requirements:
Написать небольшой UI по управлению списком стран из списка ISO-4217 с использованием NextJS 14 + Typescript
1. Данный список необходимо полностью отобразить на экране. ✅
2. Рядом с каждым элементом списка отобразить чекбокс/свич/переключатель: валюта активна / неактивна ✅
3. Данные о активных/неактивных валютах сохранять в localStorage
   (Сохраняю данные только об активных странах и валютах (остальное можно посчитать))
Обязательные пакеты: NextJS, Typescript ✅
Необязательные: Tailwind, Recoil, React Query
(использовал tailwind + react query)

Плюсом будет: Контейнеризация через docker compose✅

Результат выложить на Github/Gitlab, расшарить репу на email: alex.craftsman@gmail.com

## Running app on your machine
Development
```shell 
npm run dev
```
Production
```shell
npm run build && npm start
```

### Running with docker compose
Build image
```shell
docker compose -f docker-compose.prod.yml build
```
Start container
```shell
docker compose -f docker-compose.prod.yml up
```

Open [http://localhost:3000](http://localhost:3000)
