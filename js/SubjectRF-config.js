// Викторина "Правители"

var quizJSON = {
    "info": {
        "name": "Проверьте свои знания!",
        "main": "<p>Думаете, что вы на все сто знаете субъекты РФ? Проверьте свои знания в этой викторине!</p>",
        "results": "<h5>Узнайте больше</h5><p>Структура субъектов в РФ имеет сложное устройство, для изучения данного вопроса всегда необходимо быть хорошо подготовленным. Надеемся, что в будущем вы узнаете намного больше о регионах в нашей стране ;з</p>",
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
            "q": "Самый большой по площади субъект РФ",
            "a": [
                {"option": "Краснодарский Край", "correct": false},
                {"option": "Красноярский Край", "correct": false},
                {"option": "Республика Саха", "correct": true},
                {"option": "Хабаровский Край", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 2
            "q": "Какие из следующих субъектов РФ граничат с Монголией?",
            "a": [
                {"option": "Республика Алтай", "correct": false},
                {"option": "Республика Бурятия", "correct": false},
                {"option": "Республика Тыва", "correct": false},
                {"option": "Все указанные", "correct": true}// no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 3
            "q": "С какого года Севастополь является городом федерального значения??",
            "a": [
                {"option": "2013", "correct": false},
                {"option": "2015", "correct": false},
                {"option": "2014", "correct": true},
                {"option": "2016", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 4
            "q": "На данный момент РФ насчитывает 85 субъектов из которых республик насчитывается ...",
            "a": [
                {"option": "20", "correct": false},
                {"option": "22", "correct": true},
                {"option": "23", "correct": false},
                {"option": "46", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 5
            "q": "Парад суверенитетов в РСФСР начался с принятия Декларации о государственном\n" +
                "                суверенитете и провозглашением",
            "a": [
                {"option": "Северо-Осетинской АССР", "correct": true},
                {"option": "Карельской АССР", "correct": false},
                {"option": "Удмуртской Республики", "correct": false},
                {"option": "Башкирской ССР-Башкортостан", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 6
            "q": "Количество Федеральных округов в РФ в настоящий момент",
            "a": [
                {"option": "9", "correct": false},
                {"option": "7", "correct": false},
                {"option": "8", "correct": true},
                {"option": "12", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 7
            "q": "В состав Северо-Кавказского федерального округа не входит",
            "a": [
                {"option": "Ставропольский Край", "correct": false},
                {"option": "Республика Ингушетия", "correct": false},
                {"option": "Кабардино-Балкарская республика", "correct": false},
                {"option": "Астраханская область", "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 9
            "q": "Не является субъектом РФ",
            "a": [
                {"option": "Федеральный Округ", "correct": true},
                {"option": "Автономная область", "correct": false},
                {"option": "Край", "correct": false},
                {"option": "Город Федерального значения", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 9
            "q": "Самым «молодым» субъектом РФ является",
            "a": [
                {"option": "Республика Крым", "correct": true},
                {"option": "Камчатский Край", "correct": false},
                {"option": "Забайкальский Край", "correct": false},
                {"option": "Сахалинская область", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 10
            "q": "Калининградская область для РФ является",
            "a": [
                {"option": "Анклавом", "correct": false},
                {"option": "Полуанклавом", "correct": false},
                {"option": "Эксклавом", "correct": false},
                {"option": "Полуэксклавом", "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
    ]
};
