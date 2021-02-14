import lang from "./lang";

export const translations = {
  en: {
    navLinks_createGiftCard: "Create a gift card",
    navLinks_createVilentineBtn: "Create Valentine Card",
    navLinks_createBirthdayBtn: "Create Birthday Card",
    createValentinePage_createYourMessage: "Create your message",
    createValentinePage_chooseExisting: "Or choose from existing",
    createValentinePage_createBtn: "Create",
    createValentinePage_messageInputLabel: "Your wishes",
    createValentinePage_fromInputLabel: "From (your name)",
    createValentinePage_toInputLabel: "To (phone number, Facebook...)",
    createValentinePage_ifAnonimus: "If you want to person guess who sent valentine fill up 'from' and 'to' fields",
    createValentinePage_created: "Your valentine was created",
    valentine_guessTitle: "Guess who send it to you",
    valentine_guessWrong: "Wrong answer. Please, Try again",
    valentine_guessHelp_1: "Wrong answer. Please, Try again",
    valentine_guessHelp_2: "I know you can. Try again",
    valentine_guessHelp_3: "Come on, you almost guessed. Try again",
    valentine_guessHelp_4: "Ok. One more time, and I will help you",
    valentine_guessHelp_5: "You can see the first letter",
    valentine_guessHelp_6: "Come on!",
    valentine_guessRight: "Сorrect!",
  },
  ru: {
    navLinks_createGiftCard: "Создать открытку",
    navLinks_createVilentineBtn: "Создать Валентинку",
    navLinks_createBirthdayBtn: "Поздравить С Днем Рождения",
    createValentinePage_createYourMessage: "Напишите пожелание",
    createValentinePage_chooseExisting: "Или выберите из следующих",
    createValentinePage_createBtn: "Создать",
    createValentinePage_messageInputLabel: "Ваше пожелание",
    createValentinePage_fromInputLabel: "Имя, от кого",
    createValentinePage_toInputLabel: "Укажите кому (номер телефона, Facebook...)",
    createValentinePage_ifAnonimus: "Если хотите чтобы человек отгадал от кого валентинка, заполните поля ниже",
    createValentinePage_created: "Ваша валентинка создана",
    valentine_guessTitle: "Отгадай, кто её прислал",
    valentine_guessWrong: "Не верно, попробуй еще раз",
    valentine_guessHelp_1: "Не верно, попробуй еще раз",
    valentine_guessHelp_2: "Я знаю, ты сможешь, попробуй еще разок",
    valentine_guessHelp_3: "Ты уже совсем близко",
    valentine_guessHelp_4: "Ладно, еще разок и я тебе помогу",
    valentine_guessHelp_5: "Ты можешь посмотреть первую букву",
    valentine_guessHelp_6: "Ну же!",
    valentine_guessRight: "Верно!",
  },
};

export const tr = (key) => {
  return (translations[lang] && translations[lang][key]) || translations["en"][key];
};
