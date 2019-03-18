const tesserat = require("node-tesseract-ocr");

const tesseratConfig = {
    lang: "rus",
    oem: 1,
    psm: 3
}

Feature('Registration');
let url = "https://yandex.ru";

Scenario('test RegistrationOnYandex', async (I) => {
    I.amOnPage(url);
   
    I.see('Завести почту');
    I.click('Завести почту');
    I.waitForNavigation();

    I.see('Имя');

    I.fillField('input[name="firstname"]', 'Артём');
    I.fillField('input[name="lastname"]', 'Бочаров');
    
    I.fillField('input[name="login"]', 'yodeprod');
    I.fillField('input[name="password"]', 'qazwsx123890');
    I.fillField('input[name="password_confirm"]', 'qazwsx123890');

    //Кликнуть "У меня нет мобильного телефона": потом переписать
    I.click("//span[contains(@class, 'link_has-no-phone')]");

    //кликаю выпадающий списко контрольного вопроса:
    I.click("//button[contains(@class, 'control-questions')]");
    I.wait(1);
    //выбираю из выпадающего списка
    I.click('//span[contains(@class, "menu__text") and contains(text(), "Почтовый индекс родителей")]');

    I.fillField('input[name="hint_answer"]', '424033');
    pause();
});

