import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-opensans">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-montserrat font-bold text-2xl text-business-navy">
              МК БЮРО
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-business-gray hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-business-gray hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="text-business-gray hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('team')} className="text-business-gray hover:text-primary transition-colors">Команда</button>
              <button onClick={() => scrollToSection('reviews')} className="text-business-gray hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-business-gray hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Консультация
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-business-navy to-business-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6 leading-tight">
                Агентство <span className="text-business-accent">сложных сделок</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Мы щёлкаем, как орешки, стандартные сделки. И особенно любим искать выход в сложных ситуациях.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <p className="text-2xl font-montserrat font-semibold text-center">
                  Квартирный вопрос — не вопрос, когда вы с нами!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-business-navy hover:bg-gray-100">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Бесплатная консультация
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Оценить недвижимость
                </Button>
              </div>
            </div>
            <div className="lg:text-right animate-scale-in">
              <img 
                src="/img/71fed30a-e2a9-4da9-85d2-490b3dd4ce5c.jpg" 
                alt="Офис МК БЮРО" 
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-business-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-business-navy mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-business-gray max-w-3xl mx-auto">
              Мы работаем не с объектами, а с людьми. Во главу угла ставим не бюджет, а конечную цель.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Home',
                title: 'Продажа квартир',
                description: 'Быстрая и выгодная продажа вашей недвижимости с полным юридическим сопровождением'
              },
              {
                icon: 'Key',
                title: 'Покупка жилья',
                description: 'Поможем найти идеальный вариант с учетом всех ваших требований и бюджета'
              },
              {
                icon: 'TrendingUp',
                title: 'Инвестиции',
                description: 'Анализ инвестиционной привлекательности и подбор объектов для вложений'
              },
              {
                icon: 'Shield',
                title: 'Юридическое сопровождение',
                description: 'Полная проверка документов и безопасное проведение сделок'
              },
              {
                icon: 'Search',
                title: 'Поиск и подбор',
                description: 'Индивидуальный подбор недвижимости по вашим критериям'
              },
              {
                icon: 'FileText',
                title: 'Оценка недвижимости',
                description: 'Профессиональная оценка рыночной стоимости объектов'
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in bg-white border-0 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-business-navy">{service.title}</h3>
                </div>
                <p className="text-business-gray leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-4xl text-business-navy mb-6">
                О нас
              </h2>
              <div className="space-y-6 text-business-gray text-lg leading-relaxed">
                <p>
                  У каждой сделки с недвижимостью есть жизненная ситуация: разъехаться, съехаться, 
                  расшириться, поменять район, получить свободные средства, чтобы решить какую-то проблему, инвестировать.
                </p>
                <p>
                  Мы занимаемся недвижимостью профессионально и давно, поэтому в любой ситуации видим, 
                  как минимум, на два выхода больше, чем собственник.
                </p>
                <p>
                  Наши клиенты могут спокойно проживать свою жизнь. В своей профессии, в своих увлечениях. 
                  Просто тратить ценное свободное время на отдых. А продажей, покупкой, анализом 
                  инвестиционной привлекательности занимаемся мы.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-primary mb-2">500+</div>
                  <div className="text-business-gray">Сделок проведено</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-primary mb-2">15</div>
                  <div className="text-business-gray">Лет на рынке</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-business-accent/5 p-8 rounded-lg">
              <h3 className="font-montserrat font-semibold text-2xl text-business-navy mb-6">
                Почему выбирают нас
              </h3>
              <div className="space-y-4">
                {[
                  'Работаем с людьми, а не объектами',
                  'Ставим цель выше бюджета',
                  'Видим больше решений в сложных ситуациях',
                  'Полное юридическое сопровождение',
                  'Индивидуальный подход к каждому клиенту'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-primary mr-3" />
                    <span className="text-business-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-business-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-business-navy mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-business-gray">
              Профессионалы с многолетним опытом работы на рынке недвижимости
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Михаил Кузнецов',
                position: 'Директор агентства',
                experience: '15 лет в недвижимости'
              },
              {
                name: 'Анна Петрова',
                position: 'Ведущий специалист',
                experience: '10 лет в сфере продаж'
              },
              {
                name: 'Дмитрий Сидоров',
                position: 'Юрист-консультант',
                experience: '12 лет юридической практики'
              }
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-business-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-business-navy mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-business-gray text-sm">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-business-navy mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-business-gray">
              Что говорят о нас наши клиенты
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Елена Морозова',
                text: 'Отличная работа! Продали квартиру быстро и по хорошей цене. Особенно понравился индивидуальный подход.',
                rating: 5
              },
              {
                name: 'Андрей Волков',
                text: 'Помогли купить квартиру в новостройке. Все документы проверили, сопроводили сделку. Рекомендую!',
                rating: 5
              },
              {
                name: 'Ольга Новикова',
                text: 'Сложная ситуация с наследством, но МК БЮРО помогли всё решить. Профессионалы своего дела!',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 bg-business-light border-0">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-business-gray mb-4 italic">"{review.text}"</p>
                <p className="font-montserrat font-semibold text-business-navy">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-business-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl mb-4">
              Контакты
            </h2>
            <p className="text-xl opacity-90">
              Свяжитесь с нами для консультации
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Телефон</h3>
              <p className="opacity-90">+7 (495) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Email</h3>
              <p className="opacity-90">info@mkburo.ru</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Адрес</h3>
              <p className="opacity-90">Москва, ул. Тверская, 15</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Режим работы</h3>
              <p className="opacity-90">Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-business-navy hover:bg-gray-100">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-business-navy border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-montserrat font-bold text-2xl text-white mb-4 md:mb-0">
              МК БЮРО
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 МК БЮРО. Агентство сложных сделок с недвижимостью.
              <br />
              Квартирный вопрос — не вопрос, когда вы с нами!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;