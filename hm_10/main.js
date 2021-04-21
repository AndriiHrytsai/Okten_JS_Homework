function user(age, email, _password) {
    function getAge() {
        return age;
    }

    function getEmail() {
        return email
    }

    function getPassword() {
        return _password
    }

    function setAge(newAge) {
        if (newAge > age) {
            age = newAge
            alert(`Вітаю ваш вік становить ${age}`);
        } else {
            alert(' Час іде вперед, тому тільки дорослішати !!!');
            return 0;
        }
    }

    function setPassword(newPassword) {
        let enterYourEmail = prompt('Підтвердіть старий email');
        let enterYourPass = prompt('Підтвердіть старий пароль');
        if (enterYourEmail === email && enterYourPass === _password) {
            newPassword = prompt('Enter new password : ');
            if (newPassword.length > 8 && newPassword.includes('#')) {
                _password = newPassword;
                console.log('Зміна паролю успішна ' + _password);
            }else {
                console.warn('Довжина паролю має бути більша за 8 та містити спецсимвол # ')
            }

        } else {
            console.warn('Щераз перевірте введені вами дані !')
        }
    }

    return {
        setAge,
        setPassword
    }
}

const newUser = user(20, 'andriy', '1111');
newUser.setAge(+prompt('Enter new age : '));
newUser.setPassword();