import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Шапка */}
      <header className=" flex flex-row justify-between bg-white mx-auto w-full px-[256px] p-2">
        <a href="#" className=" text-[#1A2A52] text-[24px] font-bold">BOXPACK</a>
        <div className=" flex flex-row text-[#1F2121] gap-8 items-center text-[14px]">
          <a href="#">Услуги</a>
          <a href="#">Как это работает</a>
          <a href="#">Видеофиксация</a>
          <a href="#">Калькулятор</a>
          <a href="#">Кейсы</a>
          <a href="#">Контакты</a>
        </div>
      </header>

    {/* Главный экран */}
      <section className="flex bg-[#1A2A52] mx-auto py-[64px] w-full justify-center">
        <div className="flex flex-col ml-[256px]">
          <div className=" flex flex-col gap-4">
            <p className="text-[14px]">Автоматизированный фулфилмент</p>
            <p className="text-[48px] font-bold">Фулфилмент, <br /> который держит <br /> сроки и репутацию</p>
            <p className="text-[14px]">Автоматизированная упаковка, видеоконтроль каждого заказа <br /> и отправка в день поступления. Мы берем на себя хранение, сборку, <br /> маркировку и логистику.</p>
          </div>
          <div className="flex py-8 gap-8 items-center">
            <div className="flex gap-3">
              <p className="font-bold">Рассчитать стоимость</p>
              <Image
                src="/arrow.svg"
                alt="asd"
                width={14}
                height={14}
              />
            </div>
            <a href="#" className=" border-1 rounded-[6px] p-2 text-[14px]">Получить консультацию</a>
          </div>
          <div className="flex gap-8 py-8">
            <div className="bg-[#314064] flex flex-col p-4 rounded-2xl gap-2 items-start w-[164px]">
              <Image
                src="/box.svg"
                alt="qwe"
                width={16}
                height={16}
              />
              <p className="text-[18px]">5000+</p>
              <p className="text-[14px]">заказов в день</p>
            </div>
            <div className="bg-[#314064] flex flex-col p-4 rounded-2xl gap-2 items-start w-[164px]">
              <Image
                src="/Protect.svg"
                alt="qwe"
                width={16}
                height={16}
              />
              <p className="text-[18px]">99.8%</p>
              <p className="text-[14px]">точность сборки</p>
            </div>
            <div className="bg-[#314064] flex flex-col p-4 rounded-2xl gap-[8px] items-start w-[164px]">
              <Image
                src="/Truck.svg"
                alt="qwe"
                width={16}
                height={16}
              />
              <p className="text-[18px]">FBO/FBS</p>
              <p className="text-[14px]">все маркетплейсы</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[248px]">
          <p className=" text-[14px] bg-[#D1D4DC] text-black w-[600px] h-[400px] text-center justify-center flex items-center rounded-2xl">Видео автоматической упаковочной линии</p>
        </div>
      </section>

      {/* Экран как начать работать с нами */}
      <section>
        <div className="flex flex-col  bg-white mx-auto w-full pt-[64px]">
          <h1 className="text-[24px] text-center font-bold text-black">Как начать работать с нами</h1>
          <p className="text-[16px] text-black text-center">Подключение занимает всего несколько дней. Все процессы максимально <br /> автоматизированы.</p>
          {/* Карточки*/}
          <div className="flex flex-col items-center py-[64px] gap-8 ">
            {/* Карточки первая линия */}
            <div className="grid grid-cols-4 gap-4 justify-center items-center">
              <div className="w-[300px] rounded-2xl pt-[12px] bg-[#d9d9d9]">
                <div className="bg-[#F0F0F0] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">ШАГ 1</p>
                  <p className="text-[14px]">Оставляете заявку</p>
                  <p className="text-[#A2A2A2] text-[12px]">Через сайт или Telegram</p>
                </div>
              </div>

              <div className="w-[300px] rounded-2xl pt-[12px] bg-[#d9d9d9]">
                <div className="bg-[#F0F0F0] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">ШАГ 2</p>
                  <p className="text-[14px]">Получаете расчет</p>
                  <p className="text-[#A2A2A2] text-[12px]">Под ваш объем и формат работы</p>
                </div>
              </div>

              <div className="w-[300px] rounded-2xl pt-[12px] bg-[#d9d9d9]">
                <div className="bg-[#F0F0F0] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">ШАГ 3</p>
                  <p className="text-[14px]">Подписываем договор</p>
                  <p className="text-[#A2A2A2] text-[12px]">Через ЭДО</p>
                </div>
              </div>

              <div className="w-[300px] rounded-2xl pt-[12px] bg-[#d9d9d9]">
                <div className="bg-[#F0F0F0] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">ШАГ 4</p>
                  <p className="text-[14px]">Принимаем товар</p>
                  <p className="text-[#A2A2A2] text-[12px]">От поставщика или транспортной компании</p>
                </div>
              </div>
            </div>
            {/* Карточки вторая линия */}
            <div className="grid grid-cols-4 gap-4 justify-center items-center">
              <div className="w-[300px] rounded-2xl pt-[12px] bg-[#d9d9d9]">
                <div className="bg-[#F0F0F0] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">ШАГ 5</p>
                  <p className="text-[14px]">Автоматизированная упаковка</p>
                  <p className="text-[#A2A2A2] text-[12px]">С видеоконтролем каждого этапа</p>
                </div>
              </div>
              <div className="w-[300px] rounded-2xl pt-[12px] bg-[#d9d9d9]">
                <div className="bg-[#F0F0F0] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">ШАГ 6</p>
                  <p className="text-[14px]">Отправляем</p>
                  <p className="text-[#A2A2A2] text-[12px]">На маркетплейсы по всей России</p>
                </div>
              </div>
              <div className="w-[300px] rounded-2xl pt-[12px] bg-[#d9d9d9]">
                <div className="bg-[#F0F0F0] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">ШАГ 7</p>
                  <p className="text-[14px]">Получаете результат</p>
                  <p className="text-[#A2A2A2] text-[12px]">Отчеты и прозрачную статистику</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Экран услуг */}
      <section>
        <div className="flex flex-col  bg-[#F8F8F8] mx-auto w-full pt-[64px]">
          <h1 className="text-[24px] text-center font-bold text-black">Услуги фулфилмента</h1>
          <p className="text-[16px] text-black text-center">Полный цикл обработки товара от приемки до доставки.</p>
          {/* Карточки услуг */}
          <div className="flex flex-col items-center justify-center py-[64px] gap-8">
            {/* Карточки услуг первая линия */}
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
              <div className="w-[350px] rounded-2xl pt-[12px] bg-[#32B8C6]">
                <div className="bg-white w-[350px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">Приемка и сортировка</p>
                  <p className="text-[#A2A2A2] text-[12px]">Принимаем поставки любого объема и <br /> размещаем товар на адресное хранение.</p>
                </div>
              </div>

              <div className="w-[350px] rounded-2xl pt-[12px] bg-[#32B8C6]">
                <div className="bg-white w-[350px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">Проверка на брак</p>
                  <p className="text-[#A2A2A2] text-[12px]">Контроль качества перед отправкой <br /> покупателю.</p>
                </div>
              </div>

              <div className="w-[350px] rounded-2xl pt-[12px] bg-[#32B8C6]">
                <div className="bg-white w-[350px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">Автоматизированная упаковка</p>
                  <p className="text-[#A2A2A2] text-[12px]">Автоматические линии и <br /> видеоконтроль каждого заказа.</p>
                </div>
              </div>
            </div>
            {/* Карточки услуг вторая линия */}
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
              <div className="w-[350px] rounded-2xl pt-[12px] bg-[#32B8C6]">
                <div className="bg-white w-[350px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">Сборка заказов</p>
                  <p className="text-[#A2A2A2] text-[12px]">Быстрая комплектация заказов по данным маркетплейсов.</p>
                </div>
              </div>
              <div className="w-[350px] rounded-2xl pt-[12px] bg-[#32B8C6]">
                <div className="bg-white w-[350px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">Отправка на маркетплейсы</p>
                  <p className="text-[#A2A2A2] text-[12px]">FBO и FBS для всех крупных площадок.</p>
                </div>
              </div>
              <div className="w-[350px] rounded-2xl pt-[12px] bg-[#32B8C6]">
                <div className="bg-white w-[350px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">Хранение товаров</p>
                  <p className="text-[#A2A2A2] text-[12px]">Безопасное адресное хранение продукции.</p>
                </div>
              </div>
            </div>
            {/* Карточки услуг третья линия */}
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
              <div className="w-[350px] rounded-2xl pt-[12px] bg-[#32B8C6]">
                <div className="bg-white w-[350px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-2">
                  <p className="font-bold text-[16px]">Интеграции</p>
                  <p className="text-[#A2A2A2] text-[12px]">Синхронизация с маркетплейсами и CRM.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Экран почему выбирают BOXPACK */}
      <section>
        <div className="flex flex-col bg-[#1A2A52] py-[64]">
          <p className="text-white text-[24px] text-center font-bold">Почему выбирают BOXPACK</p>
          {/* Карточки в экране BOXPACK */} 
          <div className="flex flex-row pt-[64px] mx-auto w-full justify-center gap-8">
            <div className="bg-[#314064] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-4">
              <p className="font-bold text-[16px] text-white">Скорость</p>
              <p className="text-white text-[12px]">До 20 000 товаров за смену и <br /> отправка день в день.</p>
            </div>
            <div className="bg-[#314064] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-4">
              <p className="font-bold text-[16px] text-white">Точность</p>
              <p className="text-white text-[12px]">99.8% точность сборки <br /> благодаря автоматизации.</p>
            </div>
            <div className="bg-[#314064] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-4">
              <p className="font-bold text-[16px] text-white">Надежность</p>
              <p className="text-white text-[12px]">Страхование товара и <br /> круглосуточный контроль.</p>
            </div>
            <div className="bg-[#314064] w-[300px] h-[200px] rounded-2xl text-black flex flex-col justify-center pl-[24px] gap-4">
              <p className="font-bold text-[16px] text-white">Поддержка</p>
              <p className="text-white text-[12px]">Персональный менеджер и <br /> оперативная помощь.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}