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
    createValentinePage_fromInputLabel: "From",
    createValentinePage_copyLink: "Copy this link and send us",
    valentine_guessTitle: "Guess who send it to you",
    valentine_guessWrong: "Wrong answer. Please, Try again",
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
    createValentinePage_fromInputLabel: "От кого",
    createValentinePage_copyLink: "Копируй ссылку и отправь ее нам",
    valentine_guessTitle: "Отгадай, кто её прислал",
    valentine_guessWrong: "Не верно, попробуй еще раз",
    valentine_guessRight: "Верно!",
  },
};

export const tr = (key) => {
  return (translations[lang] && translations[lang][key]) || translations["en"][key];
};
