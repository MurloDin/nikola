import React from "react";
import "./WorkSection.scss";
import WorkCard from "../../cards/WorkCard";


const WorkSection = () => {
    return (
        <section className="work-section" id="second-section">
            <div className="work-section__parallax-img">
                <div className="work-section__dark-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="title">Как мы работаем</div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4" style={{zIndex: 11111}}>
                            <WorkCard
                                num={1}
                                list={["Бесплатная проверка"]}
                                title="Проверка работоспособности"
                                desc="Прежде чем приступить к починке гаджета, мы оказываем бесплатную диагностику вашего устройства"
                            />
                        </div>
                        <div className="col-lg-4" style={{zIndex: 11111}}>
                            <WorkCard
                                num={2}
                                list={["Заключение договора", "Оговаривание сроков"]}
                                title="Починка устройства"
                                desc="После проведение диагностики и в случае поломки смартфона, мы обговариваем сумму ремонта и заключаем договор с клиентом"
                            />
                        </div>
                        <div className="col-lg-4" style={{zIndex: 11111}}>
                            <WorkCard
                                num={3}
                                list={["Проверка работоспособности", "Получение гарантии", "Оплата"]}
                                title="Завершение работ"
                                desc="После того как устройство будет починенено клиент проверяет его, мы даём карантийный талон, после чего клиенто оплачивает выполненую работу"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};


export default WorkSection;