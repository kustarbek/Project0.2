import { Container } from "../../shared/ui"

export function Footer() {

    return (
        <div className='bg-green-50 text-green-900 py-10 font-sans'>
            <Container>
            <footer className="">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between">

        
        <div class="flex-1 min-w-[250px] mb-6">
            <h3 classNamen="text-green-900 font-bold text-lg">О нас</h3>
            <p className="leading-relaxed">
                Наша миссия — помогать тем, кто нуждается. Мы верим в силу доброты и солидарности, которая меняет жизни к лучшему.
            </p>
        </div>

        
        <div className="flex-1 min-w-[250px] mb-6 ml-[207px]">
            <h3 className="text-green-900 font-bold text-lg">Быстрые ссылки</h3>
            <ul className="list-none p-0 space-y-2">
                <li><a href="#" className="text-green-900 hover:text-green-700">О нас</a></li>
                <li><a href="#" className="text-green-900 hover:text-green-700">Проекты</a></li>
                <li><a href="#" className="text-green-900 hover:text-green-700">Как помочь</a></li>
                <li><a href="#" className="text-green-900 hover:text-green-700">Контакты</a></li>
            </ul>
        </div>

        
        <div className="flex-1 min-w-[250px] mb-6">
            <h3 className="text-green-900 font-bold text-lg">Подпишитесь на новости</h3>
            <p className="leading-relaxed">
                Подпишитесь на нашу рассылку, чтобы быть в курсе последних новостей и событий.
            </p>
            <form className="flex gap-2 mt-4">
                <input type="email" placeholder="Ваш email" 
                       className="flex-1 p-2 border border-green-200 rounded-md focus:outline-none focus:ring focus:ring-green-300"/>
                <button
                        className="px-4 py-2 bg-green-900 text-white rounded-md hover:bg-green-700">
                    Подписаться
                </button>
                
            </form>
        </div>

    </div>

    
    <div class="text-center border-t border-green-200 pt-6 mt-6">
        <p class="m-0">&copy; 2024 Благотворительная организация. Все права защищены.</p>
    </div>
</footer>
            </Container>
        </div>
    )

  return (
    <div>
      <Container>
        <h1>Footer</h1>
      </Container>
    </div>
  )

}
