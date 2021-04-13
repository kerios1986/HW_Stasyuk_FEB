who = prompt('Кто пришел?');

switch (who) {

    case ('Отмена'):
        alert('Вход отменен');
    break;

    case ('Админ'):
        who = prompt('Парль?');

        switch (who) {

            case ('Отмена'):
                alert('Вход отменен');
            break;

            case ('Черный Властелин'):
                alert('Добро пожаловать!');
            break;

            default:
                alert('Пароль неверен');
            break;
        }
        
    break;

    default:
        alert('Я вас не знаю');
    break;
}