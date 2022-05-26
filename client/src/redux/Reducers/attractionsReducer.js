import QolSharif from "../../img/qol-shariff.jpeg";
import QolSharif1 from "../../img/qol-shariff1.jpg";
import QolSharif2 from "../../img/qol-shariff2.jpg";
import QolSharif3 from "../../img/qol-shariff3.jpg";
import kazan from "../../img/kazan.jpg";
import kazan1 from "../../img/kazan1.jpg";
import kazan2 from "../../img/kazan2.jpg";
import kazan3 from "../../img/kazan3.jpg";
import suumbike from "../../img/suumbike.jpg";
import suumbike1 from "../../img/suumbike1.jpg";
import suumbike2 from "../../img/suumbike2.jpeg";
import suumbike3 from "../../img/suumbike3.jpg";
import chram from "../../img/chram.jpg";
import chram1 from "../../img/chram1.jpeg";
import chram2 from "../../img/chram2.jpg";
import chram3 from "../../img/chram3.jpg";
import sobor from "../../img/sobor.jpg";
import sobor1 from "../../img/sobor1.jpg";
import sobor2 from "../../img/sobor2.jpeg";
import sobor3 from "../../img/sobor3.jpg";
import bog_sobor from "../../img/bog_sobor.jpg";
import bog_sobor1 from "../../img/bog_sobor1.jpg";
import baumana from "../../img/baumana.jpg";
import baumana1 from "../../img/baumana1.jpg";
import baumana2 from "../../img/baumana2.jpg";
import baumana3 from "../../img/baumana3.jpg";
import uchkova from "../../img/uchkova.jpeg";
import uchkova1 from "../../img/uchkova1.jpg";
import uchkova2 from "../../img/uchkova2.jpg";
import uchkova3 from "../../img/uchkova3.jpg";
import kaban from "../../img/kaban.jpg";
import kaban1 from "../../img/kaban1.jpg";
import kaban2 from "../../img/kaban2.jpg";
import kaban3 from "../../img/kaban3.jpg";
import Akiat from "../../img/Akiat.jpg";
import Akiat1 from "../../img/Akiat1.jpeg";
import Akiat2 from "../../img/Akiat2.jpg";
import Akiat3 from "../../img/Akiat3.jpg";


const initialState = {
    attractions: [
        {
            id: 0,
            title: 'Кул Шариф',
            description: '',
            descriptionShort: 'Мечеть «Кул-Шариф» — главная соборная джума-мечеть республики Татарстан и города Казани; расположена на территории Казанского кремля; одна из главных достопримечательностей города.\n',
            img: [QolSharif, QolSharif1, QolSharif2, QolSharif3],
            pointsFor3D: [55.7987222222186, 49.1046527777778],
            directionFor3D: [143.8915687311365, 23.65810174193549]
        },
        {
            id: 1,
            title: 'Чаша',
            description: '',
            descriptionShort: 'Центр семьи «Казан» (в разговорной речи просто «Чаша») — главный дворец бракосочетаний (ЗАГС) в городе Казань и республике Татарстан. На крыше расположена смотровая площадка с видом на Казанский кремль, Кремлёвскую набережную и округу.',
            img: [kazan, kazan1, kazan2, kazan3],
            pointsFor3D: [55.8131727693963, 49.1082421619],
            directionFor3D: [178.074542, 20.532693]

        },
        {
            id: 2,
            title: 'Башня Сююмбике',
            description: '',
            descriptionShort: 'Башня Сююмбике — проездная дозорная (сторожевая) башня в Казанском кремле; архитектурный символ Казани. До XIX века именовалась «проездная башня оберкомендантского дома со шпицем». Относится к «падающим» башням, так как имеет заметный наклон в северо-восточную сторону. ',
            img: [suumbike, suumbike1, suumbike2, suumbike3],
            pointsFor3D: [
                55.8001181012963,
                49.104835232
            ],
            directionFor3D: [
                30.759827597774386,
                21.678976067747357
            ]
        },
        {
            id: 3,
            title: 'Храм всех религий',
            description: '',
            descriptionShort: 'Храм всех религий, также Вселенский храм, Международный культурный центр духовного единения — архитектурное сооружение в посёлке Старое Аракчино в Казани, посвящённое разным религиям мира. Является единственным подобным в мире, а также популярной достопримечательностью города.',
            img: [chram, chram1, chram2, chram3],
            pointsFor3D:  [
                55.8004039424963, 48.9750893385
            ],
            directionFor3D: [
                328.64136403288063,
                12.390342052313876
            ]
        },
        {
            id: 4,
            title: 'Петропавловский собор',
            description: '',
            descriptionShort: 'Петропавловский собор - является одним из самых ярких образцов стиля петровской эпохи, для регионального зодчества — исключительным. История строительства нового каменного величественного храма связана с посещением Казани императором Петром I. Прибыв в город 27 мая 1722 года, император остановился в доме Михляева.',
            img: [sobor, sobor1, sobor2, sobor3],
            pointsFor3D: [
                55.7937502355963, 49.1127702356
            ],
            directionFor3D: [
                105.08810457838072,
                19.730365115892294
            ]
        },
        {
            id: 5,
            title: 'Богоявленский собор',
            description: '',
            descriptionShort: 'Богоявленский собор — православный храм Казанского благочиния Казанской и Татарстанской епархии. Деревянный храм во имя Богоявления Господня был построен на месте прежних Проломных ворот посада уже в XVII веке.',
            img: [bog_sobor, bog_sobor1],
            pointsFor3D: [
                55.7884846514963, 49.1194162241
            ],
            directionFor3D: [
                200.51826173041457,
                17.114468058350106
            ]
        },
        {
            id: 6,
            title: 'Улица Баумана',
            description: '',
            descriptionShort: 'Улица Баумана — пешеходная улица в историческом центре Казани, Вахитовском районе, ядро Казанского посада. Улица Баумана — одна из самых старых улиц Казани. В эпоху Казанского ханства она называлась Ногайской дорогой.',
            img: [baumana, baumana1, baumana2, baumana3],
            pointsFor3D: [
                55.7877772572963, 49.120855245
            ],
            directionFor3D: [
                297.4643808288107,
                4.365977112676045
            ]
        },
        {
            id: 7,
            title: 'Дом Ушковой',
            description: '',
            descriptionShort: 'Дом Зинаиды Николаевны Ушковой — здание в Казани, перестроенное в начале XX века в эклектичном стиле. Дом Ушковой является яркой достопримечательностью центра города, объектом культурного наследия федерального значения. С 1919 по 2020 год он является центральным зданием главной республиканской библиотеки.',
            img: [uchkova, uchkova1, uchkova2, uchkova3],
            pointsFor3D: [
                55.7917558031963, 49.120382754
            ],
            directionFor3D: [
                87.29358925210866,
                14.060142102615687
            ]
        },
        {
            id: 8,
            title: 'Озеро Кабан',
            description: '',
            descriptionShort: 'Кабан — система озёр, расположенных в городской черте Казани. Состоит из трёх частей (озёр), протяжённых с севера на юг (от центра к югу города) и соединённых протоками: Ближний (Нижний) Кабан, Средний Кабан и Верхний (Дальний) Кабан.\n' +
                'Является самой крупной по площади озёрной системой в Татарстане.',
            img: [kaban, kaban1, kaban2, kaban3],
            pointsFor3D: [
                55.7838947875963, 49.1191812111
            ],
            directionFor3D: [
                155.56131634220844,
                7.263299093208489
            ]
        },
        {
            id: 9,
            title: 'Театр кукол «Экият»',
            description: '',
            descriptionShort: 'Татарский государственный театр кукол «Экият» — крупнейший и один из старейших театров кукол в России. Находится в Казани на Петербургской улице в Вахитовском районе города. Название театра образовано от слова тат. әкият — «сказка». Построенное в виде сказочного замка-дворца здание театра является важной и популярной достопримечательностью города.',
            img: [Akiat, Akiat1, Akiat2, Akiat3],
            pointsFor3D: [
                55.7799434000963, 49.13961257380001
            ],
            directionFor3D: [
                264.6057460129644,
                11.327967806841029
            ]
        }
    ]
}

export const attractionsReducer = (state = initialState , action) => {
    switch (action.type) {
        default: return state
    }
}
