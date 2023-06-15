import React from "react";
import Diplom from "../../src/assets/New/DiplomS.png";
import Chemodan from "../../src/assets/Technology/Chemodan.jpeg";
import Employee from "../../src/assets/Technology/Employee.jpeg";
import Robot from "../../src/assets/Technology/Robot.jpeg";

import Logo from "../../src/assets/logo-dark.svg";

import Agp from "../../src/assets/Customers/agp.png";
import Kirg from "../../src/assets/Customers/gaz-kirg.png";
import Raspredelenie from "../../src/assets/Customers/gazoraspredelenie.png";
import Krasnodar from "../../src/assets/Customers/gt-krasnodar.png";
import Kazan from "../../src/assets/Customers/gt-kazan.png";
import Stavropol from "../../src/assets/Customers/gt-stavropol.png";
import Uhta from "../../src/assets/Customers/gt-uhta.png";
import Volgograd from "../../src/assets/Customers/gt-volgograd.png";
import Yugorsk from "../../src/assets/Customers/gt-yugorsk.png";
import Chaik from "../../src/assets/Customers/gt_chaik.png";
import Piter from "../../src/assets/Customers/gt_piter.png";
import Lukoil from "../../src/assets/Customers/lukioil.png";
import Stream from "../../src/assets/Customers/stream.png";
import Hallibuton from "../../src/assets/Customers/hallibuton.png";
import Ttg from "../../src/assets/Customers/ttg.png";
import Trans from "../../src/assets/Customers/trans.png";
import NordStream from "../../src/assets/Customers/NordStream.png";
import RosDor from "../../src/assets/Customers/RosDor.png";
import Sape from "../../src/assets/Customers/SAPE.png";

import Employees from "../../src/assets/Energy/Employees.svg";
import Foundation from "../../src/assets/Energy/Foundation.svg";
import Introscan from "../../src/assets/Energy/Introscan.svg";
import World from "../../src/assets/Energy/World.svg";
import Customers from "../../src/assets/Energy/Customers.svg";


export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper liv7l0vtpdh-editor_css" },
  page: { className: "home-page liv7l57m82h-editor_css" },
  logo: {
    className: "header0-logo",
    children: Logo,
  },
  Menu: {
    className: "header0-menu",
    children: [
      {
        name: "item0",
        className: "header0-item",
        children: {
          href: "#energy",
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Энергия</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item1",
        className: "header0-item",
        children: {
          href: "#new",
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>Новые</p>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item2",
        className: "header0-item",
        children: {
          href: "#technology",
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>Технология</p>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item3",
        className: "header0-item",
        children: {
          href: "#contacts",
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>Экология</p>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item4",
        className: "header0-item",
        children: {
          href: "#contacts",
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>Контакты</p>
                    </span>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: "header0-mobile-menu" },
};
export const Banner20DataSource = { // Банер
  wrapper: { className: "banner2" },
  BannerAnim: {
    children: [
      {
        name: "elem0",
        BannerElement: { className: "banner-user-elem" },
        page: { className: "home-page banner2-page" },
        textWrapper: { className: "banner2-text-wrapper" },
        bg: { className: "bg bg0" },
        title: {
          className: "banner2-title livaxbpck6h-editor_css",
          children: (
            <span>
              <span>
                <p>Энергия, Новые Технологии и Экология</p>
              </span>
            </span>
          ),
        },
        content: {
          className: "banner2-content livaxm1ety-editor_css",
          children: (
            <span>
              <span>
                <p>Ключевые слова, определяющие идеологию создания компании</p>
              </span>
            </span>
          ),
        },
        button: {},
      },
    ],
  },
};
export const Content00DataSource = { // Энергия
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0 liv9c0uba8b-editor_css" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <h2>
              <b id="energy">ЭНЕРГИЯ</b>
            </h2>
          </span>
        ),
        className: "liv9bjlx2j-editor_css",
      },
    ],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: <img src={Employees} alt="img"/>,
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>150+ СОТРУДНИКОВ</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>
                    Коллектив ООО «ЭНТЭ» - сплоченная Команда
                    высококвалифицированных специалистов из различных отраслей
                    промышленности
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: <img src={Foundation} alt="img"/>,
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <span>
                    <p>20+ ЛЕТ РАБОТЫ</p>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>
                    Дата основания:&nbsp;<span>1 августа 2000 года</span>
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: <img src={World} alt="img"/>,
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>2 ФИЛИАЛА</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <span>
                    <p>ЭНТЭ-ИЖ (г. Ижевск),</p>
                    <p>
                      <span>ЭНТЭ-ЮГРА (г. Югорск)</span>
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block~liv9dqjwt57",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: <img src={Introscan} alt="img"/>,
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>ПАРТНЕРЫ</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>АО ИнтроСкан Технолоджи, ООО «АКС»,</p>
                  <p>АО «Системы управления,</p>
                  <p>ИЖГТУ им. М.Т. Калашникова,</p>
                  <p>ПАО «Газпром»</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block~liv9dujwmv",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: <img src={Customers} alt="img"/>,
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>30+ ЗАКАЗЧИКОВ</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>Российские и</p>
                  <p>зарубежные компании</p>
                </span>
              ),
            },
          ],
        },
      },
      // {
      //   name: "block~liv9dw3v2e",
      //   className: "content0-block",
      //   md: 8,
      //   xs: 24,
      //   children: {
      //     className: "content0-block-item",
      //     children: [
      //       {
      //         name: "image",
      //         className: "content0-block-icon",
      //         children:
      //           "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
      //       },
      //       {
      //         name: "title",
      //         className: "content0-block-title",
      //         children: (
      //           <span>
      //             <span>
      //               <span>
      //                 <p>ЕЩЕ КАКОЙ-НИБУДЬ ЗАГОЛОВОК</p>
      //               </span>
      //             </span>
      //           </span>
      //         ),
      //       },
      //       {
      //         name: "content",
      //         children: (
      //           <span>
      //             <p>Чисто для симметрии</p>
      //           </span>
      //         ),
      //       },
      //     ],
      //   },
      // },
    ],
  },
};
export const Content50DataSource = { // Скрыта
  wrapper: { className: "home-page-wrapper content5-wrapper" },
  page: { className: "home-page content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <h2>
              <b>Заказчики</b>
            </h2>
          </span>
        ),
        className: "title-h1 liv9o5e1knk-editor_css",
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: Chemodan,
          content: {
            children: "Ant Design",
            className: "livbiwszzn-editor_css",
          },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://catalogmineralov.ru/pic/2022/21057/b_b_Transneft_1.png",
          },
          content: {
            children: "Ant Motion",
            className: "livbj0jnehg-editor_css",
          },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: "https://bacs-tech.ru/wp-content/uploads/2021/12/agp.png",
          },
          content: {
            children: "Ant Design",
            className: "livbj243x5t-editor_css",
          },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://www.towntalkradio.com/wp-content/uploads/2020/06/Untitled-design-5-3.jpg",
          },
          content: {
            children: "Ant Motion",
            className: "livbj3hvr4-editor_css",
          },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
          },
          content: {
            children: "Ant Design",
            className: "livbjan8lac-editor_css",
          },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
          },
          content: {
            children: "Ant Motion",
            className: "livbj93vl16-editor_css",
          },
        },
      },
      {
        name: "block6",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
          },
          content: {
            children: "Ant Design",
            className: "livbj7pv2xd-editor_css",
          },
        },
      },
      {
        name: "block7",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
          },
          content: {
            children: "Ant Motion",
            className: "livbj6ccl1-editor_css",
          },
        },
      },
    ],
  },
};
export const Content120DataSource = { // Заказчики
  wrapper: { className: "home-page-wrapper content12-wrapper" },
  page: { className: "home-page content12" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title~livfz2x75lk",
        className: "",
        children: (
          <span>
            <p>ЗАКАЗЧИКИ</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: "img-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Agp,
            className: "livg0trhbuu-editor_css",
          },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Piter,
          },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Lukoil,
          },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Krasnodar,
          },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Ttg,
          },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Stream,
          },
        },
      },
      {
        name: "block6",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Trans,
          },
        },
      },
      {
        name: "block7",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Hallibuton,
          },
        },
      },
      {
        name: "block8",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Kirg,
          },
        },
      },
      {
        name: "block9",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Raspredelenie,
          },
        },
      },
      {
        name: "block10",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Kazan,
          },
        },
      },
      {
        name: "block11",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Stavropol,
          },
        },
      },
      {
        name: "block12",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Uhta,
          },
        },
      },
      {
        name: "block13",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Volgograd,
          },
        },
      },
      {
        name: "block14",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Yugorsk,
          },
        },
      },
      {
        name: "block16",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: NordStream,
          },
        },
      },
      {
        name: "block17",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: RosDor,
          },
        },
      },
      {
        name: "block18",
        className: "block",
        md: 4,
        xs: 8,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: Sape,
          },
        },
      },
    ],
  },
};
export const Content40DataSource = { // Новые
  wrapper: { className: "home-page-wrapper content4-wrapper" },
  page: { className: "home-page content4" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <h2>
              <b id="new">НОВЫЕ</b>
            </h2>
          </span>
        ),
        className: "liv9v351qh-editor_css",
      },
      {
        name: "title",
        children: (
          <span>
            <h4>
              <p>СМИ О НАС</p>
            </h4>
          </span>
        ),
        className: "",
      },
      {
        name: "content",
        className: "title-content content4-title-content liv9u46wll-editor_css",
        children: (
          <span>
            <a href="https://yandex.ru">
              Внутриутробный контроль технологических трубопроводов
              компрессорных станций ОАО «Газпром» с применением роботизированных
              сканеров. Газовая промышленность.
            </a>
          </span>
        ),
      },
      {
        name: "content~liv9uwoof2c",
        className: "title-content content4-title-content liv9u46wll-editor_css",
        children: (
          <span>
            <a href="https://yandex.ru">
              Партнерство новаторов — эффективность в приоритете. Бизнесс России
            </a>
          </span>
        ),
      },
      {
        name: "content~liv9vbnify",
        className: "liv9vcdbva-editor_css",
        children: (
          <span>
            <span>
              <a href="https://yandex.ru">
                Пермская компания создаст для "Газпрома"
                роботов-диагностов&nbsp;
                <span>труднодоступных газопроводов. ТАСС</span>
              </a>
            </span>
          </span>
        ),
      },
    ],
  },
  video: {
    className: "content4-video",
    children: {
      video: "https://storapi.ente-ltd.ru/cdn/videos/russia24.mp4",
      image:
        "https://www.vremyan.ru/_data/objects/0038/6413/img.386413.roboty__3_.jpg",
    },
  },
};
export const Feature10DataSource = { // Диплом
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: Diplom,
  },
  textWrapper: {
    className: "content1-text liva1ns828-editor_css",
    md: 14,
    xs: 24,
  },
  title: {
    className: "content1-title",
  },
  content: {
    className: "content1-content liva1o789vn-editor_css",
    children: (
      <span>
        <p>
          Методология обеспечения требуемого уровня надежности трубопроводов с
          использованием роботизированных комплексов
        </p>
        <p>
          Работа удостоена Премии ПАО «Газпром» в области науки и техники 2021
          г.
        </p>
      </span>
    ),
  },
};
export const Teams10DataSource = { // Технологии
  wrapper: { className: "home-page-wrapper teams1-wrapper" },
  page: { className: "home-page teams1" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <h2>
              <b id="technology">ТЕХНОЛОГИИ</b>
            </h2>
          </span>
        ),
        className: "liva6punpm-editor_css",
      },
    ],
  },
  block: {
    className: "block-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              // className: "teams1-image",
              children: <img src={Chemodan} alt="img" />,
            },
            {
              name: "content1",
              className: "teams1-content liva7v49m6-editor_css",
              children: (
                <span>
                  <p>
                    Внутритрубное техническое диагностирование и обследование ТТ
                    КС и ЛЧ МГ
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              // className: "teams1-image",
              children: <img src={Employee} alt="img" />,
            },
            {
              name: "content1",
              className: "teams1-content liva8hwjzz-editor_css",
              children: (
                <span>
                  <p>Специализированные передвижные автолаборатории</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              // className: "teams1-image",
              children: <img src={Robot} alt="img" />,
            },
            {
              name: "content1",
              className: "teams1-content liva9e6o84-editor_css",
              children: (
                <span>
                  <p>
                    Диагностика технического состояния методами неразрушающего
                    контроля
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content41DataSource = { // Наше оборудование
  wrapper: { className: "home-page-wrapper content4-wrapper" },
  page: { className: "home-page content4" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <span>
                <h4>
                  <p>НАШЕ ОБОРУДОВАНИЕ</p>
                </h4>
              </span>
            </span>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  video: {
    className: "content4-video",
    children: {
      video: "https://storapi.ente-ltd.ru/cdn/videos/%D0%902072.compressed.mp4",
      image: "https://www.geo-ndt.ru/images/all/3/9375/big/img_41.jpg",
    },
  },
};
export const Feature60DataSource = { // Экология
  wrapper: { className: "home-page-wrapper feature6-wrapper" },
  OverPack: { className: "home-page feature6", playScale: 0.3 },
  Carousel: {
    className: "feature6-content",
    dots: false,
    wrapper: { className: "feature6-content-wrapper" },
    titleWrapper: {
      className: "feature6-title-wrapper",
      barWrapper: {
        className: "feature6-title-bar-wrapper",
        children: { className: "feature6-title-bar livas9mssgj-editor_css" },
      },
      title: { className: "feature6-title" },
    },
    children: [
      {
        title: {
          className: "feature6-title-text livani5vzv-editor_css",
          children: (
            <span>
              <h2>
                <b id="ecology">ЭКОЛОГИЯ</b>
              </h2>
            </span>
          ),
        },
        className: "feature6-item",
        name: "block0",
        children: [
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child0",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-number",
                children: '+',
              },
              toText: true,
              children: "650",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <span>
                    <p>
                      <b>ЗАКЛЮЧЕНИЙ ЭПБ</b>
                    </p>
                    <p>Экспертиза промышленной безопасности</p>
                  </span>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child1",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-number",
                children: '+',
              },
              toText: true,
              children: "3000",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <p>
                    <b>КИЛОМЕТРОВ Т/П</b>
                  </p>
                  <p>Диагностическое обследование</p>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child2",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-number",
                children: '+',
              },
              toText: true,
              children: "1750",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <p>
                    <b>ОБЪЕКТОВ</b>
                  </p>
                  <p>Внутритрубная диагностика</p>
                </span>
              ),
            },
          },
        ],
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    id: "contacts",
    gutter: 0,
    children: [
      {
        name: "block1",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "Головной офис" },
        childWrapper: {
          children: [
            {
              name: "link1",
              // href: "#",
              children: (
                <>
                  <p>
                    Почтовый/юридический адрес:
                    <br />
                    <strong>
                      617763, Пермский край, г. Чайковский, Приморский бульвар,
                      32, 3 этаж
                    </strong>
                  </p>
                  <br />

                  <p>
                    Электронная почта:<strong> info@ente-ltd.ru</strong>
                  </p>
                  <br />

                  <p>
                    Гор.т./факс:
                    <br />
                    <strong>8 (34241) 3-46-80</strong>
                    <br />
                    <strong>8 (34241) 3-78-98</strong>
                    <br />
                    Секретарь доб. 1003
                  </p>
                  <br />
                </>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: {},
        childWrapper: {
          children: [
            {
              name: "link1",
              // href: "#",
              children: (
                <>
                  <p>
                    Генеральный директор:
                    <br />
                    <strong>Седелев Ю.А.</strong>
                    <br />
                    Тел.:<strong>1001</strong>
                    <br />
                    Электронная почта: <strong>y.sedelev@ente-ltd.ru</strong>
                  </p>
                  <br />

                  <p>
                    Исполнительный директор:
                    <br />
                    <strong>Лебедева О.Ю.</strong>
                    <br />
                    Тел.:<strong>1002</strong>
                    <br />
                    Электронная почта: <strong>o.lebedeva@ente-ltd.ru</strong>
                  </p>
                  <br />

                  <p>
                    Главный инженер:
                    <br />
                    <strong>Ложкин Е.Н.</strong>
                    <br />
                    Тел.:<strong>1004</strong>
                    <br />
                    Электронная почта: <strong>e.lozhkin@ente-ltd.ru</strong>
                  </p>
                  <br />
                </>
              ),
            },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: `Обособленное структурное
          подразделение «ЭНТЭ-Югра»`,
        },
        childWrapper: {
          children: [
            {
              name: "link1",
              // href: "#",
              children: (
                <>
                  <strong>
                    628260, Ханты-Мансийский АО, г. Югорск,
                    <br />
                    ул. Промышленная, 23
                  </strong>
                  <br />
                </>
              ),
            },
          ],
        },
      },
      {
        name: "block4",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: `Обособленное структурное
          подразделение «ЭНТЭ-Иж»`,
        },
        childWrapper: {
          children: [
            {
              name: "link1",
              // href: "#",
              children: (
                <>
                  <strong>
                    426008, Удмуртская республика, г. Ижевск,
                    <br />
                    Северный переулок, 54
                  </strong>
                  <br />
                </>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    // children: (
    //   <span>
    //     ©2018 by <a href="https://motion.ant.design">Ant Motion</a> All Rights
    //     Reserved
    //   </span>
    // ),
  },
};
