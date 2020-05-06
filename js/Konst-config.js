// Викторина "Правители"

var quizJSON = {
    "info": {
        "name": "Проверьте свои знания!",
        "main": "<p>Конституция - основной закон страны. Думаете, что знаете все факты о конституции? Проверьте свои знания в этой викторине!</p>",
        "results": "<h5>Узнайте больше</h5><p>Конституционализм достаточно объёмное направление в науке. Надеемся, что вы никогда не будете останавливаться на достигнутом, и что будущем вы узнаете намного больше об этом направлении в научной и философской мысли ;з</p>",
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
            "q": "Первая в истории России конституция появилась в ",
            "a": [
                {"option": "РСФСР", "correct": true},
                {"option": "СССР", "correct": false},
                {"option": "Российской Империи", "correct": false},
                {"option": "Российской Федерации", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 2
            "q": "Какова связь между Конституцией и остальными законами страны?",
            "a": [
                {"option": "Все законы страны ориентируются на содержание Конституции", "correct": true},
                {"option": "Конституция ориентируется на содержание всех законов страны", "correct": false},
                {"option": "Между нормами Конституции и остальных законов существует равенство", "correct": false},
                {"option": "Принимаются Государственной Думой РФ", "correct": false}// no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 3
            "q": "В каком году в России впервые был принят документ, имевший в названии слово «конституция»?",
            "a": [
                {"option": "1993", "correct": false},
                {"option": "1918 ", "correct": true},
                {"option": "1936", "correct": false},
                {"option": "1977", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 4
            "q": "В какой стране была принята первая конституция",
            "a": [
                {"option": "Англия", "correct": false},
                {"option": "Франция", "correct": false},
                {"option": "США", "correct": true},
                {"option": "Германия", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 5
            "q": "В каких странах действует неписаная конституция",
            "a": [
                {"option": "Бразилия", "correct": false},
                {"option": "Великобритания", "correct": true},
                {"option": "Израиль", "correct": true},
                {"option": "Ямайка", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 6
            "q": "Какие выделяют виды конституции",
            "a": [
                {"option": "Этнические - Мировые", "correct": false},
                {"option": "Организованные - Расформированные", "correct": false},
                {"option": "Реальные - Фиктивные", "correct": true},
                {"option": "Гибкие - Жётские", "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 7
            "q": "Главная задача государства по конституции РФ",
            "a": [
                {"option": "Сохранение целостности государства", "correct": false},
                {"option": "Материальное обеспечение", "correct": false},
                {"option": "Признание, соблюдение и защита прав Гражданина РФ", "correct": true},
                {"option": "Защита государства ", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 8
            "q": "Кто является единственным источником власти в РФ?",
            "a": [
                {"option": "Президент РФ", "correct": false},
                {"option": "Правительство РФ", "correct": false},
                {"option": "Совет Федерации", "correct": false},
                {"option": "Многонациональный народ", "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 9
            "q": "Входят ли органы местного самоуправления в систему органов государственной власти?",
            "a": [
                {"option": "Входят", "correct": false},
                {"option": "Не входят", "correct": true},
                {"option": "Частично входят", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
        { // Question 10
            "q": "Может ли быть идеология обязательной для всех",
            "a": [
                {"option": "Может", "correct": true},
                {"option": "Не может", "correct": false},
                {"option": "Зависит от указа правителя", "correct": false},
                {"option": "Зависит от воли большинства", "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> У вас хорошие знания :з</p>",
            "incorrect": "<p><span>О нет.</span> Для правильного ответа вам стоит лучше подготовиться</p>" // no comma here
        },
    ]
};
