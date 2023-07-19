//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"
import kira from '../styles/kira.jpg';
import karina from '../styles/karina.jpg';
import ilya from '../styles/ilya.jpg';
import anna from '../styles/anna.jpg';
import kamila from '../styles/kamila.jpg';
export const userinfo = {
    logoText: "Элегрант", //This text is visible on your navbar and footer like your logo.
    contact: {
    },
    greeting: {
        //this text goes on your landing page
        title: "Архитектурное бюро «Элегрант»",
        subtitle: "стремится применять\n" +
            "в проекте новейшие достижения мировой архитектуры и дизайна, при этом сохраняя историческое архитектурное наследие. Разрабатывая наш уникальный проект, мы материализуем идеальное пространство и мечты заказчика."
    },
    about: {
        //this text goes at the bottom of your home page.
        content: "Команда \"Элегрант\" – это созвучие эстетики и профессионализма в словах «Элегантность» и «Грациозность». Это гармоничное сочетание талантов и вдохновения, объединенное общей целью- Создать комфортную среду для самореализации  в ДК «Россия» с уникальным авторским стилем и уклоном на неоклассику. Мы не только формируем пространство, но и рассказываем историю, тем самым сохраняя культурное наследие. ",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'До', //timespan
                description: 'Дом Культуры «Россия» был построен в 1940-е года. С тех времен в здании работали различные секции для детей. В буфетах продавались вкусные пирожные, проводились концерты первых рок-групп. Дом культуры являлся центром притяжения если не городского, то по крайней мере районного масштаба ' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'Сейчас',
                description: 'На данный момент ДК занимается выставочной и музейной деятельностью.  Также, сохраняя свои первоначальные функции, в дк проводятся различные клубные формирования, включая хореографию, вокальный ансамбль, ансамбль эстрадного пения, Арктические легенды, финансовую грамотность, фитнес для мозга и многое другое. В настоящее время в ДК отсутствует необходимое и высококачественное оборудование для дальнейшей деятельности культурного центра, а также комфортная среда  для обеспечения доступа к высококачественным возможностям для музыкального обучения и художественной самореализации . '
            },
            {
                time: 'После',
                description: 'Основной задачей проекта является сохранение прежних архитектурных форм, для поддержания стиля «историзм». Тем самым будет сохранена та уютная атмосфера, которая напоминает дом, что и необходимо для полного раскрытия личности. В доме культуры будет реализован проект кафетерия. Эта идея повторяет историческую концепцию Культурного дома. Большое внимание в ДК уделяется интерактивным зонам, которые будут обеспечивать комфортную среду для занятий, помогут концентрироваться и совершенствоваться '
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Ошкина Карина', //company name eg.Microsoft
                companylogo: karina, //companylogo
                position: 'Планировщик \n' +
                    'Художник \n' +
                    '3D моделлер ', //post you held eg.Senior SDE
            },
            {
                company: 'Бронникова Анна', //company name eg.Microsoft
                companylogo: anna, //companylogo
                position: 'Планировщик\n' +
                    '3D моделлер (визуализатор)\n' +
                    'Графический дизайнер ', //post you held eg.Senior SDE
            },
            {
                company: 'Камила Айнетдинова', //company name eg.Microsoft
                companylogo: kamila, //companylogo
                position: 'Планировщик \n' +
                    '3D моделлер ', //post you held eg.Senior SDE
            },
            {
                company: 'Илья Лебедев',
                companylogo: ilya,
                position: '3D моделлер (визуализатор) \n' +
                    'Копирайтер ',
            },
            {
                company: 'Базыкина Кира',
                companylogo: kira,
                position: 'Планировщик  \n' +
                    'Художник \n' +
                    'Веб-дизайнер, Графический дизайнер ',
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: '"Элегрант: Скульпторы Стиля"',
    education: 'Главная',
    experience: 'Наша команда',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}