who = prompt('Кто пришел?');

switch (who) {

    default:
        alert('Я вас не знаю');
        break;

    case ('Отмена'):
        alert('Вход отменен');
        break;

    case ('Админ'):
        who = prompt('Парль?');

        switch (who) {

            default:
            alert('Пароль неверен');
            break;

            case ('Отмена'):
            alert('Вход отменен');
            break;

            case ('Черный Властелин'):
            alert('Добро пожаловать!');
            break;
        }
        
    break;
}