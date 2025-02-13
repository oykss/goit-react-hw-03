# Книга контактів

Застосунок для зберігання контактів телефонної книги. Він складається з форми, списку контактів та поля пошуку для фільтрації списку контактів. Можна переглянути демо-відео роботи застосунку.

### Компоненти:

- **App**
- **ContactForm**
- **ContactList**
- **Contact**
- **SearchBox**

Рендеринг компонентів виглядатиме так:

```html
<div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
```

## Крок 1 - Список контактів

У стані компонента App повинен бути масив контактів. На етапі розробки буде зручно жорстко закодувати деякі дані в стані. Це уникне необхідності ручного введення даних у інтерфейсі для тестування нового функціоналу. Наприклад, використай цей масив контактів для початкового значення стану.

```js
[
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
```

Створіть компоненти `ContactList` та `Contact` та використовуйте їх для відображення списку контактів. Передайте необхідні значення через пропси. Після цього кроку інтерфейс застосунку буде виглядати наступним чином - заголовок сторінки та список контактів.

## Крок 2 - Пошук за ім'ям

Додайте поле пошуку `SearchBox`, яке можна використовувати для фільтрації списку контактів за ім'ям. Поле пошуку – це інпут без форми, значення якого записується у стан (контрольований елемент). Логіка фільтрації повинна бути нечутливою до регістру.

Стан фільтру слід зберігати в компоненті `App` і передавати потрібні значення як пропси компоненту `SearchBox`. Тоді фільтрація масиву контактів буде виконуватися в компоненті `App`, а її результат - масив відфільтрованих контактів - передавати пропсом компоненту `ContactList`. Після цього кроку при вводі тексту в поле пошуку, список контактів повинен оновлюватися, щоб відобразити лише підходящі контакти.

## Крок 3 - Додавання контактів

На цьому етапі реалізуй додавання контакту до списку контактів через форму `ContactForm`. Кожен контакт повинен бути об'єктом з властивостями `name`, `number` та `id`, тобто таким самим, як в тестових даних, які зараз знаходяться у тебе в стані. Для генерації ідентифікаторів використовуй будь-який відповідний пакет, наприклад nanoid. У майбутньому цим буде займатися база даних, а поки що додаємо ідентифікатор об'єкта самостійно, наприклад, під час сабміту форми. Форму обов'язково створи за допомогою бібліотеки [Formik](https://formik.org). Додай валідацію полів форми бібліотекою [Yup](https://www.npmjs.com/package/yup) та виведи повідомлення про помилки:

- поля повинні бути обов'язковими для заповнення
- мінімальна кількість символів - 3
- максимальна кількість символів - 50

Після завершення цього кроку застосунок повинен виглядати приблизно так.

## Крок 4 - Видалення контактів

Розшир функціонал застосунку, дозволяючи користувачу видаляти раніше збережені контакти кліком по кнопці Delete в карточці контакта.

## Крок 5 - Збереження контактів

Застосунок повинен зберігати масив контактів між оновленням сторінки в локальному сховищі. Використовуй ефекти.

- Під час додавання та видалення контакту контакти зберігаються у локальне сховище.

- Під час завантаження застосунку контакти, якщо такі є, зчитуються з локального сховища і записуються у стан.
