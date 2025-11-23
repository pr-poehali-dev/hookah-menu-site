import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  is_available: boolean;
}

interface Category {
  id: number;
  name: string;
}

interface Promotion {
  id: number;
  title: string;
  description: string;
  valid_until: string;
}

export default function Index() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<{ [key: number]: MenuItem[] }>({});
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  useEffect(() => {
    const mockCategories: Category[] = [
      { id: 1, name: 'Кальяны' },
      { id: 2, name: 'Напитки' },
      { id: 3, name: 'Закуски' },
      { id: 4, name: 'Десерты' },
      { id: 5, name: 'Чаи' }
    ];

    const mockMenuItems: { [key: number]: MenuItem[] } = {
      1: [
        { id: 1, name: 'Классический микс', description: 'Фруктовая смесь премиум табака', price: 1200, is_available: true },
        { id: 2, name: 'Ягодный взрыв', description: 'Насыщенный ягодный вкус', price: 1300, is_available: true },
        { id: 3, name: 'Мятная свежесть', description: 'Освежающая мята с холодком', price: 1100, is_available: true }
      ],
      2: [
        { id: 4, name: 'Кола', description: 'Охлажденная кола 0.33л', price: 150, is_available: true },
        { id: 5, name: 'Сок апельсиновый', description: 'Свежевыжатый сок 0.25л', price: 200, is_available: true },
        { id: 6, name: 'Пиво светлое', description: 'Разливное пиво 0.5л', price: 350, is_available: true }
      ],
      3: [
        { id: 7, name: 'Сырная тарелка', description: 'Ассорти из 4 видов сыра', price: 450, is_available: true },
        { id: 8, name: 'Куриные крылышки', description: 'Острые крылышки BBQ', price: 380, is_available: true }
      ],
      4: [
        { id: 9, name: 'Чизкейк', description: 'Классический чизкейк New York', price: 320, is_available: true },
        { id: 10, name: 'Тирамису', description: 'Итальянский десерт', price: 350, is_available: true }
      ],
      5: [
        { id: 11, name: 'Зеленый чай', description: 'Китайский зеленый чай', price: 250, is_available: true },
        { id: 12, name: 'Черный чай', description: 'Цейлонский черный чай', price: 200, is_available: true }
      ]
    };

    const mockPromotions: Promotion[] = [
      { id: 1, title: 'Бизнес-time', description: 'Скидка 30% на весь ассортимент кальянов, чая и авторских лимонадов. Действует с понедельника по субботу с 12:00 до 16:00', valid_until: '2025-12-31' },
      { id: 2, title: 'День рождения', description: 'В день рождения (3 дня до и после) скидка 20% на весь чай, авторские лимонады и кальяны', valid_until: '2025-12-31' }
    ];

    setCategories(mockCategories);
    setMenuItems(mockMenuItems);
    setPromotions(mockPromotions);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">💨</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground logo-text">Hedera Lounge</h1>
                <p className="text-sm text-muted-foreground">Кальянная премиум класса</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
              <a href="#promotions" className="text-foreground hover:text-primary transition-colors">Акции</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground logo-text">Hedera Lounge</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Премиальные кальяны и атмосфера для незабываемого отдыха
          </p>
          <a 
            href="#menu" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            Посмотреть меню
            <Icon name="ChevronDown" size={20} />
          </a>
        </div>
      </section>

      <section id="promotions" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Актуальные акции</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {promotions.map((promo) => (
              <Card key={promo.id} className="bg-card border-border hover:border-primary transition-all animate-scale-in">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl">{promo.title}</CardTitle>
                    <Badge className="bg-primary text-primary-foreground">Активна</Badge>
                  </div>
                  <CardDescription className="text-base mt-2">{promo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Icon name="Calendar" size={16} />
                    <span>Действует до {new Date(promo.valid_until).toLocaleDateString('ru-RU')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">📋 Наше меню</h2>
          <Tabs value={selectedCategory.toString()} onValueChange={(v) => setSelectedCategory(parseInt(v))} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-card">
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id.toString()} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id.toString()} className="animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems[cat.id]?.map((item) => (
                    <Card key={item.id} className="bg-card border-border hover:border-primary transition-all hover:scale-105">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          {item.is_available && (
                            <Badge variant="outline" className="border-primary text-primary">В наличии</Badge>
                          )}
                        </div>
                        <CardDescription className="mt-2">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                          <Icon name="Sparkles" size={24} className="text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-16 bg-card/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">✨ О нас</h2>
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Добро пожаловать в <strong className="text-primary logo-text">Hedera Lounge</strong> — кальянную премиум класса, 
                  где каждая деталь создана для вашего комфорта и наслаждения.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Мы открылись в 2020 году с миссией создать пространство, где можно отдохнуть от городской суеты, 
                  насладиться качественными кальянами и провести время в приятной атмосфере.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Наша команда профессиональных кальянных мастеров использует только премиальный табак и 
                  современное оборудование, чтобы каждый гость получил незабываемые впечатления.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">📍 Контакты</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">г. Москва, ул. Примерная, д. 123</p>
                <p className="text-muted-foreground mt-2">5 минут от метро</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-primary" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Ежедневно: 14:00 - 02:00</p>
                <p className="text-muted-foreground mt-2">Без выходных</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={24} className="text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">+7 (999) 123-45-67</p>
                <p className="text-muted-foreground mt-2">Бронирование столиков</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    <Icon name="Instagram" size={24} />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    <Icon name="Send" size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 <span className="logo-text">Hedera Lounge</span>. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}