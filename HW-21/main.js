who = prompt('Кто пришел?');

switch (who) {

    default:
        alert('Я вас не знаю');
        break;

    case ('Отмена' && 'отмена'):
        alert('Вход отменен');
        break;

    case ('Админ' && 'админ'):
        who = prompt('Парль?');

        switch (who) {

            default:
            alert('Пароль неверен');
            break;

            case ('Отмена' && 'отмена'):
            alert('Вход отменен');
            break;

            case ('Черный Властелин' && 'черный властелин' && 'Черный властелин' && 'черный Властелин'):
            alert('Добро пожаловать!');
            break;
        }
}