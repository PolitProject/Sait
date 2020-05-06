// Викторина "Правители"

var quizJSON = {
    "info": {
        "name": "Проверьте свои знания!",
        "main": "<p>Думаете, что вы хорошо знаете правителей России? Проверьте свои знания в этой викторине!</p>",
        "results": "<h5>Узнайте больше</h5><p>Россия государство с многолетней историей, а следовательно у нас было и много правителей. Надеемся, что после проверки своих знаний, вы не остановитесь на этом и будете и дальше познавать историю нашего великого Отечества ;з</p>",
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
            "q": "«Устав.-о Наследии престола» отменявший передачу престола прямым потомкам по мужской линии и предусматривавший назначение на престол наследника по воле монарха был принят...",
            "a": [
                {"option": "Иван Грозный", "correct": false},
                {"option": "Павел I", "correct": true},
                {"option": "Борис Годунов", "correct": false},
                {"option": "Александр I", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 2
            "q": "Прозвище «Собирателя земли русской» принадлежит ...",
            "a": [
                {"option": "Алексею Михайловичу ", "correct": false},
                {"option": "Ивану Д. Калите ", "correct": false},
                {"option": "Василию Шуйскому", "correct": false},
                {"option": "Ивану III", "correct": true}// no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 3
            "q": "Теория «официальной народности» была разработана при ...",
            "a": [
                {"option": "Николае I ", "correct": true},
                {"option": "Александре III", "correct": false},
                {"option": "Екатерине II ", "correct": false},
                {"option": "Александре II", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 4
            "q": "Главной своей заслугой этот человек считал то, что смена власти при нем прошла «бескровно»",
            "a": [
                {"option": "Константин Черненко", "correct": false},
                {"option": "Юрий Андропов", "correct": false},
                {"option": "Никита Хрущёв", "correct": true},
                {"option": "Михаил Горбачёв", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 5
            "q": "Бертран Рассел однажды сказал: «... Наш век войдет в историю веком (.....) и Эйнштейна, которым удалось завершить огромную работу синтеза, одному - в области мысли, другому - в действии.» о ком идёт речь? ",
            "a": [
                {"option": "Лев Троцкий ", "correct": false},
                {"option": "Адольф Гитлер", "correct": false},
                {"option": "Владимир Ленин", "correct": true},
                {"option": "Иосиф Сталин", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 6
            "q": "Назовите автора данных слов: «Истекший год был годом великого перелома на всех фронтах социалистического строительства. Перелом этот шел и продолжает идти под знаком решительного наступления социализма на капиталистические элементы города и деревни»",
            "a": [
                {"option": "Владимир Ленин ", "correct": false},
                {"option": "Иосиф Сталин", "correct": true},
                {"option": "Никита Хрущёв", "correct": false},
                {"option": "Георгий Маленков", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 7
            "q": "Формально в истории России наибольший срок правления имел(а)",
            "a": [
                {"option": "Екатерина II", "correct": false},
                {"option": "Пётр I", "correct": false},
                {"option": "Иосиф Сталин", "correct": false},
                {"option": "Иван Грозный", "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 8
            "q": "Кто из указанных личностей объявил о том, что коммунизм будет построен в России к 1980-ому году?",
            "a": [
                {"option": "Иосиф Сталин", "correct": false},
                {"option": "Никита Хрущев", "correct": true},
                {"option": "Михаил Горбачёв", "correct": false},
                {"option": "Владимир Ленин", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 9
            "q": "Кому свой престол завещала императрица Елизавета Петровна",
            "a": [
                {"option": "Пётр II", "correct": true},
                {"option": "Пётр III", "correct": false},
                {"option": "Павел I", "correct": false},
                {"option": "Екатерина II", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 10
            "q": "Время правления этого монарха ознаменовалось таким явлением как «Бироновщина»",
            "a": [
                {"option": "Иван VI", "correct": false},
                {"option": "Елизавета Петровна", "correct": false},
                {"option": "Анна Иоанновна", "correct": true},
                {"option": "Пётр III", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
    ]
};
