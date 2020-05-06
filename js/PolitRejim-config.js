// Викторина "Правители"

var quizJSON = {
    "info": {
        "name": "Проверьте свои знания!",
        "main": "<p>Думаете, что вы отлично знаете такое ялвение в политике как политические режимы? Проверьте свои знания в этой викторине!</p>",
        "results": "<h5>Узнайте больше</h5><p>Политические режимы трансформировались по мере развития государства, а также научной и философской мысли. Для изучения такого объёмного пласта истории и теории необходимо более подробно углубляться в данный предмет. Желаем успехов ;з</p>",
        "level1": "Отличные знания",
        "level2": "Хорошие знания",
        "level3": "Хорошие знания",
        "level4": "Нормальные знания",
        "level5": "Нормальные знания",
        "level6": "Плохие знания",
        "level7": "Плохие знания",
        "level8": "Ужасные знания",
        "level9": "Ужасные знания",
        "level10": "Ужасные знания"
    },
    "questions": [
        { // Question 1
            "q": "Тоталитарному режиму свойственно",
            "a": [
                {"option": "Тотальный контроль за жизнью общества", "correct": false},
                {"option": "Пресечение опозиции", "correct": false},
                {"option": "Идеологизация", "correct": false},
                {"option": "Все ответы верны", "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 2
            "q": "Основной принцип демократии",
            "a": [
                {"option": "Ограничение олигархии", "correct": false},
                {"option": "Ограничение произвола и злоупотребления властью", "correct": true},
                {"option": "Развитие гражданского общества", "correct": false},
                {"option": "Все указанные", "correct": false}// no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 3
            "q": "Признаки авторитарного режима",
            "a": [
                {"option": "Доминирование одной правящей партии", "correct": false},
                {"option": "Отчуждение общества от власти", "correct": false},
                {"option": "Централизация в руководстве обществом", "correct": false},
                {"option": "Все ответы верны", "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 4
            "q": "Самый яркий пример тоталитарного режима",
            "a": [
                {"option": "СССР", "correct": false},
                {"option": "Королевство Италия", "correct": false},
                {"option": "КНДР", "correct": true},
                {"option": "КНР", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 5
            "q": "С каким из политических режимов можно связать Аугусто Пиночета",
            "a": [
                {"option": "Авторитаризм", "correct": true},
                {"option": "Тоталитаризм", "correct": false},
                {"option": "Традиционный", "correct": false},
                {"option": "Либеральная демократия", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 6
            "q": "На какие виды разделяют тоталитаризм ",
            "a": [
                {"option": "Фашизм", "correct": false},
                {"option": "Национал-социализм", "correct": false},
                {"option": "Коммунизм", "correct": false},
                {"option": "Все перечисленные", "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 7
            "q": "Основателем доктрины фашизма является",
            "a": [
                {"option": "Адольф Гитлер", "correct": false},
                {"option": "Бенито Муссолини", "correct": true},
                {"option": "Уинстон Черчилль", "correct": false},
                {"option": "Хирохито", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 8
            "q": "Преобладающая партийная система демократии",
            "a": [
                {"option": "Многопартийность", "correct": true},
                {"option": "Монопартийность", "correct": false},
                {"option": "Однопартийность", "correct": false}  // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 9
            "q": "Какие виды политических режимов существуют по классификации Блонделя?",
            "a": [
                {"option": "Традиционный", "correct": true},
                {"option": "Автократия", "correct": false},
                {"option": "Охлократия", "correct": false},
                {"option": "Либеральная демократия", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 10
            "q": "Аристотель различал политические режимы на...",
            "a": [
                {"option": "Истинные - Ложные", "correct": false},
                {"option": "Правильные - Неправильные", "correct": true},
                {"option": "Мнимые - Реальные", "correct": false},
                {"option": "Действенные - Бесполезные", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
    ]
};
